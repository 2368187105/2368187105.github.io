/* eslint-disable @typescript-eslint/no-require-imports -- Runs isolated PostgreSQL and TypeScript module checks in Node. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const { PGlite } = require('@electric-sql/pglite');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(id,...args) { return resolve.call(this,id.startsWith('@/') ? path.resolve(__dirname,'../src',id.slice(2)) : id,...args); };
require.extensions['.ts'] = (m,file)=>m._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const { isStudyPath, isStudying, formatStudyTime, nicknameError } = require('../src/lib/study-stats.ts');
const { createStudyHeartbeat } = require('../src/lib/study-heartbeat.ts');
(async () => {
  for (const route of ['/grade1/sets','/grade2/spatial-vectors/operations/','/grade3/sets-logic/sets/','/practice/']) assert.ok(isStudyPath(route));
  for (const route of ['/','/report/','/login','/reset-password','/mistakes','/grade1/','/grade3/chapter-tests/']) assert.ok(!isStudyPath(route));
  assert.equal(isStudying('/practice',true,true,119999),true);
  assert.equal(isStudying('/practice',true,true,120000),false);
  assert.equal(isStudying('/practice',false,true,1),false);
  assert.equal(isStudying('/practice',true,false,1),false);
  assert.equal(formatStudyTime(3661),'1 小时 1 分钟');
  assert.ok(nicknameError('a@b.com')); assert.ok(nicknameError('a')); assert.equal(nicknameError('数学同学'),'');
  const { questions } = require('../src/data/questions.ts');
  assert.ok(questions.filter(q=>q.kind==='written').every(q=>q.id.includes('-written-')),'SQL must exclude every written question ID, including legacy records');
  // Pausing during a slow write must not be dropped or merge two focus intervals.
  const calls=[]; let release; let session=0;
  const clock=createStudyHeartbeat(async(id,active)=>{ calls.push([id,active]); if(calls.length===1) await new Promise(r=>{release=r;}); return {error:null}; },()=>String(++session));
  const first=clock.request(true); await Promise.resolve();
  void clock.request(false); void clock.request(true); release(); await first;
  assert.deepEqual(calls,[['1',true],['1',false],['2',true]]);
  let unavailableCalls=0;
  const disabledClock=createStudyHeartbeat(async()=>{unavailableCalls++;return {error:{code:'PGRST202'}};},()=> 'test');
  await disabledClock.request(true); await disabledClock.request(true); assert.equal(unavailableCalls,1);
  const db = new PGlite();
  await db.exec(`create role anon; create role authenticated; create schema auth;
    create table auth.users(id uuid primary key);
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
    grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;
    create table public.practice_attempts(id bigint generated always as identity primary key,user_id uuid references auth.users(id),question_id text,topic text,selected_answer text,is_correct boolean,created_at timestamptz default now());
    alter table public.practice_attempts enable row level security;
    create policy own_attempts on public.practice_attempts to authenticated using(auth.uid()=user_id);
    grant select on public.practice_attempts to authenticated;`);
  const migration = fs.readFileSync('supabase/migrations/202610210001_learning_rankings.sql','utf8');
  await db.exec(migration);
  await db.exec(migration); // Additive migration is repeatable.
  const ids = ['a','b','c','d'].map(c=>c.repeat(8)+'-'+c.repeat(4)+'-'+c.repeat(4)+'-'+c.repeat(4)+'-'+c.repeat(12));
  const [a,b,c,d] = ids;
  await db.exec(`insert into auth.users values ${ids.map(id=>`('${id}')`).join(',')};`);
  const uid = id => db.query(`select set_config('request.jwt.claim.sub',$1,false)`,[id]);
  const dashboard = async period => (await db.query(`select public.get_learning_dashboard($1) as data`,[period])).rows[0].data;
  await assert.rejects(dashboard('all'),/Authentication required/);
  await uid(a);
  let data = await dashboard('all');
  assert.equal(data.me.total,0); assert.equal(data.me.accuracy,null); assert.equal(data.boards.time.length,0);
  for (const [id,correct] of [[a,15],[b,20],[c,20],[d,20]]) {
    await db.query(`insert into public.practice_attempts(user_id,question_id,topic,selected_answer,is_correct)
      select $1,'fixture-choice-'||n,'测试专题','A',n<=$2 from generate_series(1,20) n`,[id,correct]);
  }
  await db.query(`insert into public.practice_attempts(user_id,question_id,topic,selected_answer,is_correct) values($1,'fixture-written-01','测试专题','self:{"checks":[2,1,0]}',false)`,[a]);
  await db.exec(`insert into public.learning_study_days values ('${a}',(now() at time zone 'Asia/Shanghai')::date,3600),('${b}',(now() at time zone 'Asia/Shanghai')::date,1800),('${c}',(now() at time zone 'Asia/Shanghai')::date,9999),('${d}',(now() at time zone 'Asia/Shanghai')::date,3600);`);
  for (const [id,name] of [[a,'同学甲'],[b,'同学乙'],[d,'同学丁']]) {
    await uid(id); await db.query('select public.set_learning_participation($1,true)',[name]);
  }
  await uid(a);
  data = await dashboard('all');
  assert.deepEqual([data.me.total,data.me.objective,data.me.correct,data.me.accuracy,data.me.self_assessed],[21,20,15,75,1]);
  assert.deepEqual(data.me.ranks,{time:1,accuracy:3,answers:1});
  assert.deepEqual(data.boards.time.map(x=>x.rank),[1,1,3]);
  assert.equal(data.boards.time.some(x=>x.value===9999),false);
  for(const board of Object.values(data.boards)) for(const row of board) assert.deepEqual(Object.keys(row).sort(),['is_me','nickname','rank','value']);
  await assert.rejects(db.query('select public.set_learning_participation($1,true)',['email@example.com']),/Nickname/);
  await assert.rejects(dashboard('bad'),/Invalid period/);
  // Beijing day boundary: seven-day range excludes the eighth day.
  await db.query(`insert into public.practice_attempts(user_id,question_id,topic,selected_answer,is_correct,created_at) values($1,'old','旧记录','A',true,((now() at time zone 'Asia/Shanghai')::date-7)::timestamp at time zone 'Asia/Shanghai')`,[a]);
  assert.equal((await dashboard('week')).me.total,21); assert.equal((await dashboard('all')).me.total,22);
  // SQL aggregation is not capped at REST's default row limit.
  await db.query(`insert into public.practice_attempts(user_id,question_id,topic,selected_answer,is_correct) select $1,'bulk-'||n,'测试专题','A',false from generate_series(1,1001) n`,[a]);
  assert.equal((await dashboard('all')).me.total,1023);
  // Heartbeats: first call adds no time, short interval adds real server elapsed time,
  // second active device cannot count simultaneously, long/background gaps add nothing.
  const session1='11111111-1111-1111-1111-111111111111',session2='22222222-2222-2222-2222-222222222222';
  let pulse = async (session,active)=>(await db.query('select public.record_study_heartbeat($1,$2) as seconds',[session,active])).rows[0].seconds;
  assert.equal(Number(await pulse(session1,true)),0);
  await db.query(`update public.learning_study_clock set last_seen=clock_timestamp()-interval '15 seconds' where user_id=$1`,[a]);
  assert.equal(Number(await pulse(session2,true)),0);
  let credit = Number(await pulse(session1,true)); assert.ok(credit>=15&&credit<16);
  await db.query(`update public.learning_study_clock set last_seen=clock_timestamp()-interval '2 minutes' where user_id=$1`,[a]);
  assert.equal(Number(await pulse(session1,true)),0);
  assert.equal(Number(await pulse(session1,false)),0);
  assert.equal(Number(await pulse(session2,true)),0);
  // Privacy: other users cannot read or change the raw time/profile rows.
  await db.exec('set role authenticated');
  assert.equal((await db.query('select * from public.learning_study_days')).rows.length,1);
  assert.equal((await db.query('select * from public.learning_rank_profiles')).rows.length,1);
  await assert.rejects(db.query(`insert into public.learning_study_days values($1,current_date,60)`,[b]),/permission denied/);
  await db.exec('reset role');
  await db.query(`select public.set_learning_participation('同学甲',false)`);
  assert.equal((await dashboard('all')).me.ranks.answers,null);
  await uid(b); assert.equal((await dashboard('all')).boards.answers.some(x=>x.nickname==='同学甲'),false);
  await db.exec('set role anon');
  await assert.rejects(dashboard('all'),/permission denied/);
  await db.close();
  console.log(JSON.stringify({localPostgresChecks:'passed',actualCloudWrites:false,coverage:['routes/visibility/idle','in-flight pause/resume','migration repeat','auth/RLS','private aggregates','self assessment exclusion','seven-day boundary','over 1000 records','ties','opt out','server clock','multiple sessions','idle/network gaps']}));
})().catch(error=>{ console.error(error);process.exitCode=1; });
