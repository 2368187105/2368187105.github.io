"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { observeAccount } from "@/lib/account-observer";
import { ownRows } from "@/lib/learning-workspace";
import { dailyLearning, learningGrades, practiceHref, questionGrade } from "@/lib/daily-learning";
import { courseForTopic, type ReviewAttempt, type ReviewState } from "@/lib/review-plan";
import { questions } from "@/data/questions";
import { curricula, type CurriculumId } from "@/data/curriculum";
import LoginLink from "./LoginLink";
import { readLessonResume, type LessonResume } from "@/lib/learning-resume";

type History = { owner: string; attempts: ReviewAttempt[]; states: ReviewState[]; warning: boolean };
export default function TodayLearning() {
  const client = useMemo(() => createClient(), []);
  const [account, setAccount] = useState<{ id: string | null; failed: boolean } | null>(null);
  const [history, setHistory] = useState<History | null>(null);
  const chosenGradeOwner = useRef<string | null>(null);
  const [grade, setGrade] = useState<CurriculumId>("grade3");
  const [error, setError] = useState("");
  const [resume, setResume] = useState<LessonResume | null>(null);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => observeAccount(client, (user, failed) => setAccount({ id: user?.id ?? null, failed })), [client]);
  const userId = account?.id;
  const refreshData = useCallback(() => { if (document.visibilityState === "visible") setRefresh(value => value + 1); }, []);
  useEffect(() => { window.addEventListener("focus", refreshData); return () => window.removeEventListener("focus", refreshData); }, [refreshData]);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function midnight() {
      const now = Date.now();
      const next = (Math.floor((now + 8 * 3600000) / 86400000) + 1) * 86400000 - 8 * 3600000;
      timer = setTimeout(() => { refreshData(); midnight(); }, next - now + 100);
    }
    midnight();
    return () => clearTimeout(timer);
  }, [refreshData]);
  useEffect(() => {
    if (!userId) return;
    let active = true;
    void (async () => {
      try {
        const [attempts, states] = await Promise.all([ownRows<ReviewAttempt>(client, "practice_attempts", userId), ownRows<ReviewState>(client, "mistake_reviews", userId, "updated_at").catch(() => null)]);
        if (!active) return;
        setHistory({ owner: userId, attempts, states: states ?? [], warning: states === null });
        setResume(readLessonResume(userId, curricula.flatMap(g => g.chapters.flatMap(c => c.lessons))));
        setError("");
        if (chosenGradeOwner.current !== userId) {
          const last = attempts[0] && questions.find(q => q.id === attempts[0].question_id);
          setGrade((last && questionGrade(last)) ?? "grade3");
        }
      } catch { if (active) setError("今日安排暂时读取失败，请重试；课程和专题训练仍可使用。"); }
    })();
    return () => { active = false; };
  }, [client, userId, refresh]);
  const current = userId && history?.owner === userId ? history : null;
  const today = useMemo(() => dailyLearning(current?.attempts ?? [], current?.states ?? [], grade), [current, grade]);
  const queue = today.tasks.map(task => task.question.id);
  const focusCourse = today.weak && courseForTopic(today.weak.topic);
  return <section id="today" aria-labelledby="today-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8">
    <div className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-semibold text-blue-600">从今天的一小步开始</p><h2 id="today-heading" className="mt-2 text-2xl font-bold text-slate-900">今天学什么</h2></div><div aria-label="今日学习年级" className="flex flex-wrap gap-2">{learningGrades.map(g => <button key={g.id} aria-pressed={grade === g.id} onClick={() => { chosenGradeOwner.current = userId ?? "guest"; setGrade(g.id); }} className={`rounded-lg border px-3 py-2 text-sm ${grade === g.id ? "border-blue-300 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>{g.label}</button>)}</div></div>
      {!account ? <p role="status" className="mt-5 text-sm">正在确认账号…</p> : !userId ? <div className="mt-5 text-sm leading-7 text-slate-600"><p>登录后，根据真实答题记录安排错题复习与巩固训练。也可以直接从所选年级开始学习。</p>{account.failed && <p role="alert">账号读取暂时失败，请刷新后重试。</p>}<div className="mt-4 flex flex-wrap gap-3"><LoginLink className="rounded-lg bg-blue-600 px-4 py-2 text-white">登录查看今日安排</LoginLink><Link href={`/${grade}/`} className="rounded-lg border px-4 py-2">选择课程 →</Link></div></div> : error ? <p role="alert" className="mt-5 text-sm text-amber-800">{error}<button className="ml-3 underline" onClick={refreshData}>重新读取</button></p> : !current ? <p role="status" className="mt-5 text-sm">正在读取学习记录…</p> : <>
        <p className="mt-4 text-sm leading-7 text-slate-600">今天已练习 <strong className="text-slate-900">{today.completed}</strong> 道不同题目 · 每日目标 {today.goal} 道。{today.completed >= today.goal ? "今日目标已完成，可按需要继续巩固。" : `下面安排 ${today.tasks.length} 题，预计约 ${today.minutes} 分钟。`} {today.due.length > 0 && `当前有 ${today.due.length} 道到期复习题，优先安排。`}</p>
        {current.warning && <p className="mt-2 text-xs text-amber-700">复习状态暂未读取，当前安排按答题历史生成。</p>}
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><h3 className="font-semibold text-slate-900">{today.completed >= today.goal ? "再巩固一道" : "今日训练"}</h3><p className="mt-2 text-sm leading-6 text-slate-600">先独立作答，再核对解析；解答题支持纸上作答。</p>{today.tasks[0] ? <Link href={practiceHref(today.tasks[0].question, queue)} className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">{today.completed >= today.goal ? "继续巩固" : "开始今日训练"} →</Link> : <p className="mt-4 text-sm text-emerald-700">当前没有待安排题目，可回看课程。</p>}</div>
          <div className="rounded-xl bg-slate-50 p-4"><h3 className="font-semibold text-slate-900">继续上次</h3>{today.latest ? <Link href={practiceHref(today.latest)} className="mt-2 block text-sm leading-6 text-blue-600">{today.latest.topic} · {today.latest.title} →</Link> : <p className="mt-2 text-sm text-slate-500">还没有答题记录，从今日训练开始。</p>}{resume && <Link href={resume.href} className="mt-3 block text-sm leading-6 text-blue-600">课程：{resume.title} →</Link>}</div>
          <div className="rounded-xl bg-slate-50 p-4"><h3 className="font-semibold text-slate-900">本周先补哪里</h3>{today.weak ? <><p className="mt-2 text-sm leading-6 text-slate-600">{today.weak.topic}<br />近 7 天 {today.weak.count} 次客观题中答对 {today.weak.correct} 次，建议先巩固。样本有限，仅供参考。</p>{focusCourse && <Link href={focusCourse.href} className="mt-3 block text-sm text-blue-600">回看对应课程 →</Link>}</> : <p className="mt-2 text-sm leading-6 text-slate-500">至少积累 3 次同专题客观题作答后，再给出薄弱专题建议。</p>}<Link href={`/report/?grade=${grade}`} className="mt-3 block text-sm text-blue-600">本周复习清单与报告 →</Link></div>
        </div>
        {today.tasks.length > 0 && <details className="mt-4 text-sm"><summary className="cursor-pointer text-slate-600">查看今日安排（{today.tasks.length} 题）</summary><ol className="mt-3 space-y-2">{today.tasks.map((task, i) => <li key={task.question.id}><Link href={practiceHref(task.question, queue)} className="text-blue-600">{i + 1}. {task.question.title} · {task.label} →</Link></li>)}</ol></details>}
        <p className="mt-4 text-xs leading-6 text-slate-500">隔日复习按北京时间计算；同一天重复答对只算一个复习日。课程位置仅保存在本浏览器，账号答题记录可跨设备读取。</p>
      </>}
    </div>
  </section>;
}
