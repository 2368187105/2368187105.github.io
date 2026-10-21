"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { questions } from "@/data/questions";
import { summarizeLearning, type AttemptSummaryInput } from "@/lib/learning-summary";
import { createClient } from "@/lib/supabase/client";
import {
  formatStudyTime, isDashboardUnavailable, nicknameError,
  type LearningDashboardData, type RankingMetric, type RankingPeriod,
} from "@/lib/study-stats";

const writtenIds = new Set(questions.filter(q => q.kind === "written").map(q => q.id));
const metrics: { key: RankingMetric; title: string; note: string }[] = [
  { key: "time", title: "学习时长榜", note: "按有效学习时长排名" },
  { key: "accuracy", title: "正确率榜", note: "至少完成 20 次客观题" },
  { key: "answers", title: "答题数量榜", note: "包含客观题与解答题自评" },
];

function metricValue(metric: RankingMetric, value: number) {
  if (metric === "time") return formatStudyTime(value);
  return metric === "accuracy" ? `${value}%` : `${value} 题次`;
}

type Fallback = ReturnType<typeof summarizeLearning> & { totalAnswers: number };

export default function HomeLearningDashboard() {
  const client = useMemo(() => createClient(), []);
  const [userId, setUserId] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [authError, setAuthError] = useState(false);
  const [period, setPeriod] = useState<RankingPeriod>("all");
  const [refresh, setRefresh] = useState(0);
  const [result, setResult] = useState<LearningDashboardData | null>(null);
  const [fallback, setFallback] = useState<Fallback | null>(null);
  const [loading, setLoading] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [error, setError] = useState("");
  const [nickname, setNickname] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [loadedKey, setLoadedKey] = useState("");
  const requestKey = `${userId ?? "guest"}/${period}`;

  useEffect(() => {
    let active = true;
    let revision = 0;
    const initialRevision = revision;
    void client.auth.getUser().then(({ data, error: authFailure }) => {
      if (!active || revision !== initialRevision) return;
      setUserId(data.user?.id ?? null);
      setAuthError(!!authFailure && authFailure.name !== "AuthSessionMissingError");
      setChecking(false);
    }).catch(() => { if (active) { setAuthError(true); setChecking(false); } });
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      revision += 1;
      if (!active) return;
      setUserId(session?.user.id ?? null);
      setNickname("");
      setChecking(false);
      setAuthError(false);
    });
    return () => { active = false; subscription.unsubscribe(); };
  }, [client]);

  useEffect(() => {
    let active = true;
    // Clear the previous account/range before starting a new request.
    async function load() {
      setResult(null); setFallback(null); setError(""); setUnavailable(false);
      if (!userId) return;
      setLoading(true);
      try {
        const { data, error: rpcError } = await client.rpc("get_learning_dashboard", { p_period: period });
        if (!active) return;
        if (rpcError && !isDashboardUnavailable(rpcError)) throw rpcError;
        if (!rpcError) {
          if (!data?.me || !data?.boards) throw new Error("Invalid learning dashboard");
          setResult(data as LearningDashboardData);
          setNickname(current => current || data.me.nickname);
          return;
        }
        setUnavailable(true);
        // Older deployments still show real private answer totals while the additive migration is pending.
        // Page through all records instead of silently truncating at the REST row limit.
        const attempts: AttemptSummaryInput[] = [];
        const shifted = new Date(Date.now() + 8 * 3600_000);
        const weekStart = new Date(Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth(), shifted.getUTCDate() - 6) - 8 * 3600_000).toISOString();
        for (let offset = 0; ; offset += 500) {
          let query = client.from("practice_attempts")
            .select("question_id,selected_answer,is_correct,topic,created_at")
            .eq("user_id", userId).order("created_at", { ascending: false }).range(offset, offset + 499);
          if (period === "week") query = query.gte("created_at", weekStart);
          const { data: rows, error: readError } = await query;
          if (!active) return;
          if (readError) throw readError;
          attempts.push(...(rows ?? []));
          if (!rows || rows.length < 500) break;
        }
        setFallback({ ...summarizeLearning(attempts, writtenIds), totalAnswers: attempts.length });
      } catch {
        if (active) setError("学习数据暂时读取失败，请稍后重试。课程和答题仍可正常使用。");
      } finally { if (active) { setLoading(false); setLoadedKey(requestKey); } }
    }
    void load();
    return () => { active = false; };
  }, [client, userId, period, refresh, requestKey]);

  async function saveParticipation(participating: boolean) {
    const validation = nicknameError(nickname);
    setSaveMessage(validation);
    if (validation || saving) return;
    setSaving(true);
    try {
      const { error: saveError } = await client.rpc("set_learning_participation", {
        p_nickname: nickname.trim(), p_participating: participating,
      });
      if (saveError) throw saveError;
      setSaveMessage(participating ? "已保存，榜单使用此昵称展示。" : "已退出排行榜，个人学习记录继续保留。");
      setRefresh(current => current + 1);
    } catch { setSaveMessage("设置保存失败，请重试。当前排名设置未确认变更。"); }
    finally { setSaving(false); }
  }

  const currentResult = loadedKey === requestKey ? result : null;
  const currentFallback = loadedKey === requestKey ? fallback : null;
  const me = currentResult?.me;
  const objective = me?.objective ?? currentFallback?.total ?? 0;
  const accuracy = me ? me.accuracy : currentFallback && currentFallback.total > 0 ? currentFallback.accuracy : null;
  const selfAssessed = me?.self_assessed ?? currentFallback?.selfAssessed ?? 0;

  return (
    <section id="learning" aria-labelledby="learning-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-xs font-semibold tracking-wide text-blue-600">每一份努力，都有记录</p><h2 id="learning-heading" className="mt-2 text-2xl font-bold text-slate-900">我的学习与排行榜</h2></div>
          <div className="flex gap-1 rounded-lg bg-slate-100 p-1" aria-label="学习统计时间范围">
            {([['all', '累计'], ['week', '近 7 天']] as const).map(([key, label]) => <button key={key} type="button" aria-pressed={period === key} onClick={() => setPeriod(key)} className={`rounded-md px-4 py-2 text-sm font-medium ${period === key ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>{label}</button>)}
          </div>
        </div>

        {checking ? <p role="status" className="py-10 text-sm text-slate-500">正在确认登录状态…</p> : !userId ? (
          <div className="mt-6 rounded-xl bg-blue-50 p-6"><p className="font-medium text-slate-800">登录后查看学习时长、正确率、答题数量和个人排名</p><p className="mt-2 text-sm leading-7 text-slate-500">学习记录跨设备同步。排行榜仅显示自愿参与同学的昵称和汇总成绩。</p>{authError && <p role="alert" className="mt-2 text-sm text-amber-700">登录状态暂时读取失败，请刷新或重新登录。</p>}<Link href="/login" className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">登录 / 注册</Link></div>
        ) : <>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm"><p className="text-slate-500">{period === "all" ? "累计学习记录" : "北京时间今天及前 6 天的学习记录"}</p><div className="flex items-center gap-4"><button type="button" disabled={loading} onClick={() => setRefresh(value => value + 1)} className="text-blue-600 disabled:text-slate-400">{loading ? "读取中…" : "刷新数据"}</button><Link href="/report" className="text-slate-500 hover:text-blue-600">完整学习报告 →</Link></div></div>
          {error ? <p role="alert" className="mt-5 rounded-xl bg-amber-50 p-5 text-sm text-amber-800">{error}</p> : (loading || loadedKey !== requestKey) ? <p role="status" className="py-10 text-sm text-slate-500">正在读取学习数据…</p> : <>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { metric: "time" as const, label: "学习时长", value: me ? formatStudyTime(me.study_seconds) : "尚未开始计时", detail: "仅统计课程阅读与专题训练的有效停留" },
                { metric: "accuracy" as const, label: "客观题正确率", value: accuracy === null ? "暂无答题" : `${accuracy}%`, detail: `答对 ${me?.correct ?? currentFallback?.correct ?? 0} / ${objective} 次客观题` },
                { metric: "answers" as const, label: "答题数量", value: `${me?.total ?? currentFallback?.totalAnswers ?? 0} 题次`, detail: `含 ${selfAssessed} 次解答题自评` },
              ].map(item => <div key={item.metric} className="rounded-xl border border-slate-200 bg-slate-50/60 p-5"><p className="text-sm text-slate-500">{item.label}</p><p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{item.value}</p><p className="mt-3 text-xs leading-6 text-slate-500">{item.detail}</p><p className="mt-2 text-sm font-medium text-blue-700">{me?.ranks[item.metric] ? `当前第 ${me.ranks[item.metric]} 名` : item.metric === 'accuracy' && me?.participating && objective < 20 ? `还需 ${20 - objective} 次客观题进入正确率榜` : me?.participating ? '暂未上榜' : '尚未参与排名'}</p></div>)}
            </div>
            {unavailable && <p role="status" className="mt-4 rounded-lg bg-amber-50 p-4 text-sm leading-7 text-amber-800">学习计时与排行榜尚未启用。上方答题数据来自已有云端记录，练习与错题保存照常使用。</p>}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {metrics.map(metric => <section key={metric.key} aria-label={metric.title} className="overflow-hidden rounded-xl border border-slate-200"><div className="border-b border-slate-100 px-5 py-4"><h3 className="font-bold text-slate-900">{metric.title}</h3><p className="mt-1 text-xs text-slate-500">{metric.note}</p></div>{currentResult && currentResult.boards[metric.key].length > 0 ? <ol className="divide-y divide-slate-100">{currentResult.boards[metric.key].map((entry, index) => <li key={index} className={`flex items-center gap-3 px-4 py-3.5 text-sm ${entry.is_me ? 'bg-blue-50' : ''}`}><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-bold ${entry.rank <= 3 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>{entry.rank}</span><span className="min-w-0 flex-1 truncate font-medium text-slate-700" title={entry.nickname}>{entry.nickname}{entry.is_me && <span className="ml-1 text-xs text-blue-600">我</span>}</span><span className="shrink-0 text-xs font-semibold tabular-nums text-slate-700">{metricValue(metric.key, entry.value)}</span></li>)}</ol> : <p className="px-5 py-9 text-center text-sm leading-7 text-slate-400">{unavailable ? "榜单等待启用" : metric.key === 'accuracy' ? '暂时没有达到答题量要求的同学' : '暂无排名，开始积累你的学习记录吧'}</p>}</section>)}
            </div>
            {me && <form onSubmit={event => { event.preventDefault(); void saveParticipation(true); }} className="mt-5 rounded-xl border border-slate-200 p-5"><label htmlFor="ranking-nickname" className="text-sm font-semibold text-slate-800">排行榜昵称</label><p id="ranking-privacy" className="mt-2 text-xs leading-6 text-slate-500">自愿参与；其他登录同学可看到你的昵称、时长、正确率与答题数量。邮箱、草稿和答题明细不会公开，随时可以退出。</p><div className="mt-3 flex flex-wrap items-center gap-3"><input id="ranking-nickname" aria-describedby="ranking-privacy" autoComplete="nickname" required maxLength={40} value={nickname} disabled={saving} onChange={event => { setNickname(event.target.value); setSaveMessage(''); }} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm sm:w-56" placeholder="输入 2～20 字昵称" /><button disabled={saving} type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">{saving ? '保存中…' : me.participating ? '更新昵称' : '参与排行榜'}</button>{me.participating && <button type="button" disabled={saving} onClick={() => void saveParticipation(false)} className="px-2 py-2 text-sm text-slate-500 disabled:opacity-50">退出排行榜</button>}</div>{saveMessage && <p role="status" className="mt-3 text-sm text-slate-600">{saveMessage}</p>}</form>}
            <p className="mt-4 text-xs leading-6 text-slate-400">每榜展示前 10 位，成绩相同并列排名。重复练习按提交题次累计；解答题自评不计入正确率。学习时长从计时功能启用后累计，后台停留及超过 2 分钟无操作时暂停，不补算历史时长。</p>
            {(me?.latest_topic ?? currentFallback?.latestTopic) && <Link href={`/practice/?topic=${encodeURIComponent((me?.latest_topic ?? currentFallback?.latestTopic)!)}`} className="mt-3 inline-block text-sm text-blue-600">继续最近练习：{me?.latest_topic ?? currentFallback?.latestTopic} →</Link>}
          </>}
        </>}
      </div>
    </section>
  );
}
