"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BlockMath } from "react-katex";
import SiteHeader from "@/components/SiteHeader";
import { mathText } from "@/components/MathText";
import { vectorText } from "@/components/VectorText";
import { createClient } from "@/lib/supabase/client";
import { checkAnswer } from "@/lib/answer-checking";
import { chapterAssessments, newAssessment, assessmentResult, remainingSeconds, scoringSteps, validAssessmentDraft, type AssessmentDraft } from "@/lib/assessment";
import { workspaceSetupMessage } from "@/lib/learning-workspace";
export default function AssessmentPage() {
    const client = useMemo(() => createClient(), []);
    const [chapter, setChapter] = useState("");
    const paper = chapterAssessments.find(p => p.id === chapter);
    const [userId, setUserId] = useState<string | null>(null);
    const owner = useRef<string | null | undefined>(undefined);
    const [accountChanged, setAccountChanged] = useState(false);
    const [ready, setReady] = useState(false), [busy, setBusy] = useState(false), [saved, setSaved] = useState(false), [confirming, setConfirming] = useState(false);
    const [draft, setDraft] = useState<AssessmentDraft | null>(null);
    const [now, setNow] = useState(0), [message, setMessage] = useState(""), [storageError, setStorageError] = useState("");
    const key = paper ? `cheling:assessment:v1:${userId ?? "guest"}:${paper.id}` : "";
    useEffect(() => {
        let active = true;
        const query = new URLSearchParams(window.location.search);
        const selected = chapterAssessments.find(p => p.id === query.get("chapter"));
        void (async () => {
            try {
                const { data: { user }, error } = await client.auth.getUser();
                if (error && error.name !== "AuthSessionMissingError")
                    throw error;
                if (!active)
                    return;
                owner.current = user?.id ?? null;
                setUserId(user?.id ?? null);
                setChapter(selected?.id ?? "");
                if (selected) {
                    const run = query.get("run");
                    if (run) {
                        if (!user) {
                            setMessage("请先登录原账号，再打开这场测评报告。");
                            return;
                        }
                        const { data, error } = await client.from("chapter_assessments").select("payload").eq("user_id", user.id).eq("id", run).single();
                        if (!active)
                            return;
                        if (error || !validAssessmentDraft(data?.payload, selected)) {
                            setMessage("这场测评暂时无法读取，请确认账号及网络。");
                            return;
                        }
                        setDraft(data.payload);
                        setSaved(true);
                    }
                    else {
                        try {
                            const text = localStorage.getItem(`cheling:assessment:v1:${user?.id ?? "guest"}:${selected.id}`);
                            if (text) {
                                const stored: unknown = JSON.parse(text);
                                if (validAssessmentDraft(stored, selected)) {
                                    setDraft(stored);
                                    if (user && stored.submittedAt) {
                                        const remote = await client.from("chapter_assessments").select("payload").eq("user_id", user.id).eq("id", stored.id).maybeSingle();
                                        if (!active) return;
                                        if (validAssessmentDraft(remote.data?.payload, selected)) {
                                            setDraft(remote.data.payload);
                                            setSaved(true);
                                        } else if (remote.error) setMessage("本机结果已恢复，云端保存状态暂未确认。保存时将校验，避免重复计数。");
                                    }
                                } else
                                    setStorageError("本机草稿格式不完整，请重新开始测评。");
                            }
                        }
                        catch {
                            setStorageError("浏览器不支持本机暂存。离开或刷新将丢失未保存的作答，请保持本页打开。");
                        }
                    }
                }
            }
            catch {
                if (active)
                    setMessage("登录状态或测评数据读取失败，请刷新重试。");
            }
            finally {
                if (active) {
                    setNow(Date.now());
                    setReady(true);
                }
            }
        })();
        const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => { if (event === "SIGNED_OUT" || owner.current !== undefined && (session?.user.id ?? null) !== owner.current) {
            setAccountChanged(true);
            setUserId(null);
            setDraft(null);
            setSaved(false);
            setMessage("账号已变化，原账号草稿仍在本机保留。请刷新后在当前账号下继续。");
        } });
        return () => { active = false; subscription.unsubscribe(); };
    }, [client]);
    useEffect(() => {
        if (!draft || !ready || saved)
            return;
        try {
            localStorage.setItem(key, JSON.stringify(draft));
        }
        catch {
            const frame = requestAnimationFrame(() => setStorageError("本机暂存失败，请勿刷新或离开；完成后可重试云端保存。"));
            return () => cancelAnimationFrame(frame);
        }
    }, [draft, key, ready, saved]);
    const seal = useCallback((time = Date.now()) => {
        setDraft(current => {
            if (!current || current.submittedAt || !paper)
                return current;
            const scores = { ...current.scores };
            for (const question of paper.questions.filter(q => q.kind === "written"))
                if (!current.answers[question.id]?.trim())
                    scores[question.id] = scoringSteps(question).map(() => 0);
            return { ...current, scores, submittedAt: new Date(Math.max(Date.parse(current.startedAt), Math.min(time, Date.parse(current.deadline)))).toISOString() };
        });
        setConfirming(false);
    }, [paper]);
    useEffect(() => {
        if (!draft || draft.submittedAt)
            return;
        const tick = () => { const time = Date.now(); setNow(time); if (time >= Date.parse(draft.deadline))
            seal(time); };
        tick();
        const interval = window.setInterval(tick, 1000);
        window.addEventListener("focus", tick);
        document.addEventListener("visibilitychange", tick);
        return () => { clearInterval(interval); window.removeEventListener("focus", tick); document.removeEventListener("visibilitychange", tick); };
    }, [draft?.deadline, draft?.submittedAt, seal, draft]);
    function handleAnswer(id: string, value: string) {
        if (!draft || draft.submittedAt)
            return;
        // This event handler checks the deadline before accepting a keystroke.
        // eslint-disable-next-line react-hooks/purity
        if (Date.now() >= Date.parse(draft.deadline)) {
            seal();
            return;
        }
        setDraft({ ...draft, answers: { ...draft.answers, [id]: value } });
    }
    async function save() {
        if (!paper || !draft?.submittedAt || !userId || busy || saved)
            return;
        const result = assessmentResult(paper, draft);
        if (!result.complete)
            return;
        setBusy(true);
        setMessage("");
        try {
            const { data: { user }, error: authError } = await client.auth.getUser();
            if (authError || user?.id !== userId)
                throw new Error("auth");
            const items = paper.questions.map(question => {
                const written = question.kind === "written";
                const points = draft.scores[question.id] ?? [];
                const checks = scoringSteps(question).map((s, i) => points[i] === s.points ? 2 : points[i] > 0 ? 1 : 0);
                return { question_id: question.id, topic: question.topic, question: question.question, explanation: question.explanation, correct_answer: question.correctAnswer,
                    answer: written ? "self:" + JSON.stringify({ work: draft.answers[question.id] ?? "", checks, points }) : draft.answers[question.id] ?? "",
                    is_correct: written ? points.reduce((a, b) => a + b, 0) === 8 : !!draft.answers[question.id]?.trim() && checkAnswer(question, draft.answers[question.id]) };
            });
            const { data, error } = await client.rpc("save_chapter_assessment", { p_run: { ...draft, title: paper.title, objective: result.objective, selfScore: result.selfScore }, p_items: items });
            if (error || data !== draft.id)
                throw error;
            setSaved(true);
            setMessage("测评、答题记录和待复练题已一起保存。再次点击不会重复计数。");
            window.history.replaceState(null, "", `/assessment/?chapter=${paper.id}&run=${draft.id}`);
        }
        catch {
            setMessage("云端保存未完成，本机作答仍保留。请确认登录账号、网络及数据库脚本后重试。");
        }
        finally {
            setBusy(false);
        }
    }
    const result = paper && draft ? assessmentResult(paper, draft) : null;
    const seconds = draft ? remainingSeconds(draft, now) : 0;
    const sealed = !!draft?.submittedAt;
    const render = (text: string) => paper?.title.includes("向量") ? vectorText(text) : mathText(text);
    return <main className="min-h-screen bg-[#fafafa]"><SiteHeader /><div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
  <Link href="/grade3/chapter-tests/" className="text-sm text-blue-600">← 八章综合训练</Link><h1 className="mt-5 text-3xl font-bold text-slate-900">{paper ? `${paper.title} · 章末测评` : "章末限时测评"}</h1>
  {accountChanged ? <section className="mt-6 rounded-xl border bg-white p-6"><p>{message}</p><button onClick={() => window.location.reload()} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">按当前账号重新进入</button></section> : !ready ? <p className="mt-6">正在读取测评与本机草稿…</p> : !paper ? <div className="mt-6 space-y-3">{chapterAssessments.map(p => <a key={p.id} href={`/assessment/?chapter=${p.id}`} className="block rounded-xl border bg-white p-4 text-blue-600">{p.title} · 45 分钟 / 60 分 →</a>)}</div> : <>
   <p className="mt-4 text-sm leading-7 text-slate-600">12 题 · 45 分钟 · 60 分。选择、填空各题 4 分，共 36 分；解答题每题 8 分，共 24 分，交卷后按步骤自评。本站原创自学测评，含自评分数。</p>
   {storageError && <p role="alert" className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">{storageError}</p>}
   {!draft ? <section className="mt-6 rounded-2xl border bg-white p-6"><h2 className="text-lg font-semibold">准备好后开始计时</h2><p className="mt-3 text-sm leading-7 text-slate-600">刷新后从本机草稿继续，时间按截止时刻计算；切走页面也会计时。未交卷前不展示答案和解析。{userId ? "完成自评后可一键保存到当前账号。" : "当前为游客模式，仅在本机暂存；登录后请在原账号下另开一场测评。"}</p><button onClick={() => { setDraft(newAssessment(paper, crypto.randomUUID())); setNow(Date.now()); setMessage(""); }} disabled={!!new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("run")} className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-white disabled:opacity-40">开始 45 分钟测评</button><Link href={`/print/?topic=${encodeURIComponent(paper.topic)}`} className="ml-4 inline-block py-3 text-sm text-blue-600">先打印空白试卷 →</Link></section> : <>
    <section className="sticky top-16 z-20 mt-6 rounded-xl border border-blue-200 bg-white p-4 shadow-sm" aria-label="测评进度">
     {!sealed ? <div className="flex flex-wrap items-center justify-between gap-3"><p className={`text-sm font-semibold ${seconds < 300 ? "text-red-600" : "text-blue-600"}`}>剩余 {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")} · 已填 {paper.questions.filter(q => draft.answers[q.id]?.trim()).length}/12</p><button onClick={() => setConfirming(true)} className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">检查并交卷</button>{confirming && <div className="w-full rounded-lg bg-amber-50 p-3 text-sm leading-7"><p>交卷后不能再修改答案，未答客观题计 0 分；解答题将展开解析和评分点。</p><button onClick={() => seal()} className="mr-4 rounded-lg bg-blue-600 px-4 py-2 text-white">确认交卷</button><button onClick={() => setConfirming(false)} className="underline">继续作答</button></div>}</div> : <><h2 className="font-bold text-slate-900">已交卷 · 客观题 {result!.objective}/36 分</h2><p className="mt-2 text-sm leading-7">解答题自评 {result!.complete ? `${result!.selfScore}/24 分；总分 ${result!.total}/60 分（含自评）` : "待完成，不显示最终总分"} · 用时 {Math.max(1, Math.ceil((Date.parse(draft.submittedAt!) - Date.parse(draft.startedAt)) / 60000))} 分钟</p></>}
    </section>
    <div className="mt-6 space-y-6">{paper.questions.map((question, index) => {
                    const value = draft.answers[question.id] ?? "";
                    const written = question.kind === "written";
                    return <article key={question.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><h2 className="text-sm font-semibold text-blue-600">第 {index + 1} 题 · {written ? "解答题 · 8 分" : question.kind === "fill" ? "填空题 · 4 分" : "选择题 · 4 分"}</h2><p className="mt-3 whitespace-pre-wrap font-semibold leading-8 text-slate-900">{render(question.question)}</p>{question.formula && <div className="my-4 overflow-x-auto"><BlockMath math={question.formula}/></div>}
      {written ? <label className="mt-4 block text-sm text-slate-600">书写步骤（可在纸上完成，再将关键步骤录入）<textarea aria-label={`第${index + 1}题作答`} disabled={sealed} value={value} maxLength={4000} rows={7} onChange={e => handleAnswer(question.id, e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-200 p-3 leading-7 disabled:bg-slate-50"/></label> : question.kind === "fill" ? <label className="mt-4 block text-sm">答案<input aria-label={`第${index + 1}题答案`} disabled={sealed} value={value} maxLength={200} onChange={e => handleAnswer(question.id, e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-200 p-3 disabled:bg-slate-50"/></label> : <fieldset className="mt-4 space-y-2"><legend className="sr-only">第 {index + 1} 题选项</legend>{question.options.map(option => <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 text-sm leading-7 ${value === option.key ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}><input type="radio" name={question.id} value={option.key} checked={value === option.key} disabled={sealed} onChange={() => handleAnswer(question.id, option.key)} className="mt-2"/><span>{option.key}. {render(option.text)}</span></label>)}</fieldset>}
      {sealed && <div className="mt-5 space-y-4 border-t border-slate-100 pt-5"><p className={`text-sm font-semibold ${!written && checkAnswer(question, value) ? "text-emerald-700" : "text-slate-700"}`}>{written ? "参考解答" : !value.trim() ? "未作答 · 0 分" : checkAnswer(question, value) ? "答对 · 4 分" : "需订正 · 0 分"}：{render(question.correctAnswer)}</p><div className="rounded-xl bg-slate-50 p-4"><h3 className="text-sm font-semibold">完整解析</h3><p className="mt-2 whitespace-pre-wrap text-sm leading-8 text-slate-600">{render(question.explanation)}</p></div>
       {written && <div><h3 className="text-sm font-semibold">逐步自评 · 共 8 分</h3><p className="mt-2 text-xs leading-6 text-slate-500">完整完成且理由充分给满分；思路正确但推导不全可给部分分；关键错误或未完成给 0 分。空白作答计 0 分。自评不等同于教师阅卷。</p>{scoringSteps(question).map((step, i) => <fieldset key={i} className="mt-3 rounded-lg border border-slate-200 p-3"><legend className="px-1 text-sm leading-7">{i + 1}. {render(step.label)}（{step.points} 分）</legend><div className="flex flex-wrap gap-4">{Array.from({ length: step.points + 1 }, (_, score) => <label key={score} className="flex items-center gap-1 text-sm"><input type="radio" name={`${question.id}-step-${i}`} disabled={saved || busy || !value.trim()} checked={draft.scores[question.id]?.[i] === score} onChange={() => { const steps = [...(draft.scores[question.id] ?? scoringSteps(question).map(() => -1))]; steps[i] = score; setDraft({ ...draft, scores: { ...draft.scores, [question.id]: steps } }); }}/>{score} 分</label>)}</div></fieldset>)}</div>}
      </div>}
     </article>;
                })}</div>
    {sealed && <section className="mt-6 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold">本次测评报告</h2><p className="mt-3 text-sm leading-7">客观题答对 {result!.correct}/{result!.objectiveTotal}；选择、填空自动判分。{result!.complete ? `总分 ${result!.total}/60，含解答题自评 ${result!.selfScore} 分。` : "请完成三道解答题的所有步骤评分，再保存结果。"}</p><p className="mt-2 text-sm leading-7 text-slate-500">云端保存会同时写入 12 题答题记录，错误或自评未完整的题目加入错题本。解答题自评不纳入客观题正确率。</p><div className="mt-5 flex flex-wrap gap-3">{userId ? <button disabled={busy || saved || !result!.complete} onClick={save} className="rounded-lg bg-blue-600 px-4 py-3 text-sm text-white disabled:opacity-40">{saved ? "已保存到账号" : busy ? "保存中…" : "保存测评与答题记录"}</button> : <p className="text-sm text-amber-700">游客成绩仅在本机；当前场次不会自动转入其他账号。</p>}<Link href={`/print/?topic=${encodeURIComponent(paper.topic)}&mode=solutions`} className="rounded-lg border px-4 py-3 text-sm text-blue-600">打印完整解析 →</Link><Link href="/report/?grade=grade3" className="rounded-lg border px-4 py-3 text-sm text-blue-600">查看学习报告 →</Link></div><p role="status" className="mt-3 text-sm text-slate-600">{message}</p>{!saved && userId && message && <p className="mt-2 text-xs text-slate-500">{workspaceSetupMessage}</p>}<button disabled={busy} onClick={() => { setDraft(newAssessment(paper, crypto.randomUUID())); setSaved(false); setMessage(""); window.history.replaceState(null, "", `/assessment/?chapter=${paper.id}`); }} className="mt-5 text-sm text-slate-500 underline">另开一场测评（替换本机草稿，已存云端记录保留）</button></section>}
   </>}
  </>}
  {message && !sealed && !accountChanged && <p role="status" className="mt-5 text-sm text-amber-700">{message}</p>}
 </div></main>;
}
