-- Additive migration: keeps practice_attempts, mistakes and their policies intact.
begin;

create table if not exists public.learning_rank_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null check (char_length(btrim(nickname)) between 2 and 20
    and nickname !~ '[@<>[:cntrl:]]'),
  participating boolean not null default false
);
create table if not exists public.learning_study_days (
  user_id uuid not null references auth.users(id) on delete cascade,
  study_date date not null,
  seconds numeric not null default 0 check (seconds >= 0 and seconds <= 86400),
  primary key (user_id, study_date)
);
create table if not exists public.learning_study_clock (
  user_id uuid primary key references auth.users(id) on delete cascade,
  session_id uuid not null,
  last_seen timestamptz not null,
  active boolean not null default false
);

alter table public.learning_rank_profiles enable row level security;
alter table public.learning_study_days enable row level security;
alter table public.learning_study_clock enable row level security;
revoke all on public.learning_rank_profiles, public.learning_study_days, public.learning_study_clock from public, anon, authenticated;
grant select on public.learning_rank_profiles, public.learning_study_days to authenticated;
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='learning_rank_profiles' and policyname='learning_profile_read_own') then
    create policy learning_profile_read_own on public.learning_rank_profiles for select to authenticated using ((select auth.uid()) = user_id);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='learning_study_days' and policyname='learning_time_read_own') then
    create policy learning_time_read_own on public.learning_study_days for select to authenticated using ((select auth.uid()) = user_id);
  end if;
end $$;
create index if not exists learning_attempts_user_created_idx on public.practice_attempts(user_id, created_at);

-- Duration is measured by the database. No browser-supplied user ID or seconds.
-- A user has one clock across tabs/devices; a different active session cannot double count.
create or replace function public.record_study_heartbeat(p_session uuid, p_active boolean)
returns numeric language plpgsql security definer set search_path = '' as $$
declare
  v_user uuid := auth.uid();
  v_now timestamptz := clock_timestamp();
  v_clock public.learning_study_clock%rowtype;
  v_credit numeric := 0;
  v_before numeric := 0;
  v_date date := (v_now at time zone 'Asia/Shanghai')::date;
  v_midnight timestamptz := v_date::timestamp at time zone 'Asia/Shanghai';
begin
  if v_user is null then raise exception 'Authentication required' using errcode='42501'; end if;
  if p_session is null or p_active is null then raise exception 'Invalid heartbeat' using errcode='22023'; end if;
  -- Serialize all heartbeats for this user, including the first concurrent insertion.
  perform pg_advisory_xact_lock(hashtextextended(v_user::text, 917));
  select * into v_clock from public.learning_study_clock where user_id=v_user for update;
  if found then
    if v_clock.session_id <> p_session and v_clock.active and v_now-v_clock.last_seen <= interval '30 seconds' then
      return 0;
    end if;
    if v_clock.session_id=p_session and v_clock.active and p_active
      and v_now-v_clock.last_seen between interval '0 seconds' and interval '30 seconds' then
      v_credit := extract(epoch from v_now-v_clock.last_seen);
    end if;
  end if;
  insert into public.learning_study_clock(user_id,session_id,last_seen,active)
    values(v_user,p_session,v_now,p_active)
    on conflict(user_id) do update set session_id=excluded.session_id,last_seen=excluded.last_seen,active=excluded.active;
  if v_credit > 0 then
    -- Split the short interval at midnight using Beijing dates for both ranges and totals.
    v_before := greatest(0, least(v_credit, extract(epoch from v_midnight-v_clock.last_seen)));
    if v_before > 0 then
      insert into public.learning_study_days(user_id,study_date,seconds) values(v_user,v_date-1,v_before)
        on conflict(user_id,study_date) do update set seconds=least(86400,public.learning_study_days.seconds+excluded.seconds);
    end if;
    if v_credit-v_before > 0 then
      insert into public.learning_study_days(user_id,study_date,seconds) values(v_user,v_date,v_credit-v_before)
        on conflict(user_id,study_date) do update set seconds=least(86400,public.learning_study_days.seconds+excluded.seconds);
    end if;
  end if;
  return v_credit;
end $$;

create or replace function public.set_learning_participation(p_nickname text, p_participating boolean)
returns void language plpgsql security definer set search_path = '' as $$
declare v_user uuid := auth.uid(); v_name text := btrim(p_nickname);
begin
  if v_user is null then raise exception 'Authentication required' using errcode='42501'; end if;
  if p_participating is null or v_name is null or char_length(v_name) not between 2 and 20 or v_name ~ '[@<>[:cntrl:]]' then
    raise exception 'Nickname must be 2-20 characters without email or control characters' using errcode='22023';
  end if;
  insert into public.learning_rank_profiles(user_id,nickname,participating) values(v_user,v_name,p_participating)
    on conflict(user_id) do update set nickname=excluded.nickname,participating=excluded.participating;
end $$;

-- Only opted-in aggregate scores are returned. No email, user IDs, drafts or answer histories.
-- Ranking uses SQL aggregation, avoiding PostgREST's default 1,000-row result limit.
create or replace function public.get_learning_dashboard(p_period text default 'week')
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare
  v_user uuid := auth.uid();
  v_date date := (now() at time zone 'Asia/Shanghai')::date;
  v_start timestamptz;
  v_result jsonb;
begin
  if v_user is null then raise exception 'Authentication required' using errcode='42501'; end if;
  if p_period is null or p_period not in ('week','all') then raise exception 'Invalid period' using errcode='22023'; end if;
  v_start := case when p_period='week' then (v_date-6)::timestamp at time zone 'Asia/Shanghai' else '-infinity'::timestamptz end;
  with identities as (
    select v_user as user_id
    union select user_id from public.learning_rank_profiles where participating
  ), attempts as (
    select a.user_id, count(*) as total,
      count(*) filter(where a.selected_answer not like 'self:%' and a.question_id not like '%-written-%') as objective,
      count(*) filter(where a.selected_answer not like 'self:%' and a.question_id not like '%-written-%' and a.is_correct) as correct
    from public.practice_attempts a join identities i on i.user_id=a.user_id
    where a.created_at >= v_start and a.created_at <= now()
    group by a.user_id
  ), times as (
    select d.user_id, floor(sum(d.seconds)) as seconds
    from public.learning_study_days d join identities i on i.user_id=d.user_id
    where d.study_date <= v_date and (p_period='all' or d.study_date >= v_date-6)
    group by d.user_id
  ), scores as (
    select i.user_id, coalesce(p.nickname,'同学' || substr(md5(i.user_id::text),1,6)) as nickname,
      coalesce(p.participating,false) as participating,
      coalesce(a.total,0) as total, coalesce(a.objective,0) as objective, coalesce(a.correct,0) as correct,
      round(100.0*a.correct/nullif(a.objective,0),1) as accuracy, coalesce(t.seconds,0) as seconds
    from identities i left join public.learning_rank_profiles p on p.user_id=i.user_id
      left join attempts a on a.user_id=i.user_id left join times t on t.user_id=i.user_id
  ), metric_values as (
    select s.user_id,s.nickname,m.metric,m.value from scores s
      cross join lateral (values
        ('time',case when s.seconds>0 then s.seconds::numeric end),
        ('accuracy',case when s.objective>=20 then s.accuracy end),
        ('answers',case when s.total>0 then s.total::numeric end)
      ) as m(metric,value)
    where s.participating and m.value is not null
  ), ranked as (
    select *,rank() over(partition by metric order by value desc) as place from metric_values
  ), top_rows as (
    -- Show ten learners; equal scores share rank, and ties are stably ordered.
    select *,row_number() over(partition by metric order by place,user_id) as slot from ranked
  ), boards as (
    select metric,jsonb_agg(jsonb_build_object('rank',place,'nickname',nickname,'value',value,'is_me',user_id=v_user)
      order by place,user_id) as entries from top_rows where slot<=10 group by metric
  )
  select jsonb_build_object(
    'me',jsonb_build_object('total',s.total,'objective',s.objective,'correct',s.correct,'accuracy',s.accuracy,
      'self_assessed',s.total-s.objective,'study_seconds',s.seconds,'nickname',s.nickname,'participating',s.participating,
      'latest_topic',(select a.topic from public.practice_attempts a where a.user_id=v_user and a.created_at>=v_start and a.created_at<=now() order by a.created_at desc limit 1),
      'ranks',jsonb_build_object('time',(select place from ranked where user_id=v_user and metric='time'),
        'accuracy',(select place from ranked where user_id=v_user and metric='accuracy'),
        'answers',(select place from ranked where user_id=v_user and metric='answers'))),
    'boards',jsonb_build_object('time',coalesce((select entries from boards where metric='time'),'[]'::jsonb),
      'accuracy',coalesce((select entries from boards where metric='accuracy'),'[]'::jsonb),
      'answers',coalesce((select entries from boards where metric='answers'),'[]'::jsonb)))
  into v_result from scores s where s.user_id=v_user;
  return v_result;
end $$;

revoke all on function public.record_study_heartbeat(uuid,boolean) from public,anon,authenticated;
revoke all on function public.set_learning_participation(text,boolean) from public,anon,authenticated;
revoke all on function public.get_learning_dashboard(text) from public,anon,authenticated;
grant execute on function public.record_study_heartbeat(uuid,boolean) to authenticated;
grant execute on function public.set_learning_participation(text,boolean) to authenticated;
grant execute on function public.get_learning_dashboard(text) to authenticated;
notify pgrst,'reload schema';
commit;
