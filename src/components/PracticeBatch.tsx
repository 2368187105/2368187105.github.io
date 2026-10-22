"use client";
import { useEffect, useRef, useState } from "react";
import { BlockMath } from "react-katex";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Question } from "@/data/questions";
import { emptyBatchAnswer, newPracticeBatch, readPracticeBatch, batchAnswered, batchAssessed, batchRecord, savePracticeBatch, type BatchDraft, type BatchAnswer } from "@/lib/practice-batch";
import { mathText } from "@/components/MathText";
import { vectorText } from "@/components/VectorText";
import SolutionText from "@/components/SolutionText";

export default function PracticeBatch({ items, index, onNavigate, userId, client, onBusy }: {
  items: Question[]; index: number; onNavigate: (index: number) => void; userId: string | null; client: SupabaseClient; onBusy: (busy: boolean) => void;
}) {
  const [draft, setDraft] = useState(() => newPracticeBatch(items));
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [storageError, setStorageError] = useState(false);
  const lock = useRef(false);
  const mounted = useRef(true);
  const key = `cheling:practice-batch:v1:${userId ?? "guest"}:${items.map(q => q.id).join(",")}`;
  useEffect(() => {
    mounted.current = true;
    const frame = requestAnimationFrame(() => {
      try { const previous = readPracticeBatch(localStorage.getItem(key), items); if (previous) setDraft(previous); } catch { setStorageError(true); }
      setReady(true);
    });
    return () => { mounted.current = false; cancelAnimationFrame(frame); };
  // The parent keys this component by account and exact question IDs.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => { if (ready) { try { localStorage.setItem(key, JSON.stringify(draft)); } catch { const frame = requestAnimationFrame(() => setStorageError(true)); return () => cancelAnimationFrame(frame); } } }, [draft, key, ready]);
  const q = items[index] ?? items[0];
  if (!q) return <p>当前专题暂无题目。</p>;
  const a = draft.answers[q.id] ?? emptyBatchAnswer();
  const sealed = draft.stage === "submitted";
  const review = draft.stage === "review";
  const written = q.kind === "written";
  const completed = items.filter(q => batchAnswered(q, draft.answers[q.id])).length;
  const unassessed = items.filter(q => !batchAssessed(q, draft.answers[q.id]));
  const objectives = items.filter(q => q.kind !== "written");
  const correct = sealed ? objectives.filter(q => batchRecord(q, draft.answers[q.id]).correct).length : 0;
  const render = (text: string) => q.topic.includes("向量") ? vectorText(text) : mathText(text);
  function update(patch: Partial<BatchAnswer>) {
    if (!ready || sealed || busy) return;
    setDraft(value => ({ ...value, answers: { ...value.answers, [q.id]: { ...(value.answers[q.id] ?? emptyBatchAnswer()), ...patch } } }));
  }
  function navigate(i: number) { if (!busy) onNavigate(i); }
  async function save(value: BatchDraft) {
    if (lock.current) return;
    lock.current = true; setBusy(true); onBusy(true);
    try {
      if (!userId) { setMessage("当前为访客：整组结果已生成，草稿仅保留在本浏览器，不会保存到云端。"); return; }
      const run = async () => savePracticeBatch(client, userId, items, value);
      // Also serialize saves across tabs when the browser supports Web Locks.
      const result = typeof navigator.locks?.request === "function" ? await navigator.locks.request(key, run) : await run();
      if (!mounted.current) return;
      setMessage(result.message);
      if (result.saved) setDraft(old => ({ ...old, saved: true }));
    } finally { lock.current = false; if (mounted.current) { setBusy(false); onBusy(false); } }
  }
  function finish() {
    if (!ready || lock.current || completed !== items.length) return;
    if (items.some(q => q.kind === "written") && draft.stage === "answer") {
      setDraft(value => ({ ...value, stage: "review" }));
      navigate(items.findIndex(q => q.kind === "written"));
      return;
    }
    if (unassessed.length) { navigate(items.indexOf(unassessed[0])); return; }
    const value: BatchDraft = { ...draft, stage: "submitted", submittedAt: new Date().toISOString(), saved: false };
    // Persist the fixed submission identity before any network request.
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { setStorageError(true); }
    setDraft(value);
    void save(value);
  }
  if (!ready) return <p role="status" className="p-6 text-sm text-slate-500">正在读取本组草稿…</p>;
  return <div>
    <section aria-label="题组答题卡" className="mb-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
      <p className="text-sm font-medium text-slate-800">{sealed ? "本组结果" : review ? "核对解答题并自评" : `已作答 ${completed} / ${items.length} 题`}</p>
      <p className="mt-2 text-xs leading-6 text-slate-500">{sealed ? "本组已锁定，可切换题号回看完整解析。" : review ? "按独立作答情况评价每一步，再统一提交本组。客观题将在提交后判题。" : "选好答案后直接下一题，中途可以跳题、改答案。整组完成后统一提交。草稿仅保存在本浏览器。"}</p>
      <div className="mt-3 flex flex-wrap gap-2">{items.map((item, i) => <button key={item.id} disabled={busy} onClick={() => navigate(i)} aria-label={`第 ${i + 1} 题，${batchAnswered(item, draft.answers[item.id]) ? "已作答" : "未作答"}`} aria-current={i === index ? "step" : undefined} className={`h-9 min-w-9 rounded-lg border px-2 text-sm ${i === index ? "border-blue-500 bg-blue-600 text-white" : batchAnswered(item, draft.answers[item.id]) ? "border-blue-200 bg-blue-100 text-blue-800" : "border-slate-200 bg-white text-slate-600"}`}>{i + 1}</button>)}</div>
      {storageError && <p role="alert" className="mt-3 text-xs text-amber-800">浏览器未能保存草稿，请勿刷新或离开；当前页面仍可完成并提交。</p>}
    </section>
    <section id="practice-question" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
      <p className="text-xs text-slate-500">第 {index + 1} 题 · {written ? "解答题" : q.kind === "fill" ? "填空题" : "选择题"} · {q.title}</p>
      <h3 className="mt-5 whitespace-pre-wrap text-lg font-semibold leading-8 text-slate-900">{render(q.question)}</h3>
      {q.formula && <div className="my-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={q.formula} /></div>}
      {!written && q.kind !== "fill" && <div className="mt-6 grid gap-3">{q.options.map(o => <button key={o.key} disabled={sealed || review || busy} onClick={() => update({ text: o.key })} aria-pressed={a.text === o.key} className={`flex items-start gap-3 rounded-xl border p-4 text-left text-sm ${sealed && o.key === q.correctAnswer ? "border-emerald-400 bg-emerald-50" : a.text === o.key ? "border-blue-400 bg-blue-50 text-blue-800" : "border-slate-200"}`}><span className="shrink-0 font-semibold">{o.key}.</span><span className="min-w-0 leading-7">{render(o.text)}</span></button>)}</div>}
      {q.kind === "fill" && <div className="mt-5"><label htmlFor="batch-answer" className="text-sm font-medium">你的答案</label><input id="batch-answer" value={a.text} maxLength={200} disabled={sealed || review || busy} onChange={e => update({ text: e.target.value })} autoComplete="off" className="mt-2 w-full rounded-lg border border-slate-300 p-3" placeholder="例如：2、pi/2、sqrt(3)、{1,5}、(0,1]"/><p className="mt-2 text-xs leading-6 text-slate-500">分数与有限小数自动等价匹配；其他形式按题库收录的等价答案判分。</p></div>}
      {written && <div className="mt-5"><div className="flex flex-wrap gap-3">{[[true, "纸上作答"], [false, "录入草稿"]].map(([paper, label]) => <button key={String(label)} disabled={sealed || review || busy} onClick={() => update({ paper: !!paper })} aria-pressed={a.paper === paper} className={`rounded-lg border px-4 py-2 text-sm ${a.paper === paper ? "border-blue-300 bg-blue-50 text-blue-700" : "border-slate-200"}`}>{label}</button>)}</div>
        {a.paper ? <label className="mt-4 flex items-start gap-2 rounded-xl bg-slate-50 p-4 text-sm leading-7"><input type="checkbox" checked={a.attempted} disabled={sealed || review || busy} onChange={e => update({ attempted: e.target.checked })} className="mt-2"/>我已在纸上独立尝试这道题</label> : <><label htmlFor="batch-work" className="mt-4 block text-sm">作答草稿</label><textarea id="batch-work" rows={6} maxLength={2000} value={a.text} disabled={sealed || review || busy} onChange={e => update({ text: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-sm leading-7"/></>}
        {!sealed && !review && q.hint && <details className="mt-4 text-sm text-slate-600"><summary className="cursor-pointer text-blue-600">思路提示</summary><p className="mt-3 leading-7">{render(q.hint)}</p></details>}
      </div>}
      {(sealed || review && written) && <section className="mt-6 rounded-xl bg-slate-50 p-4 sm:p-5"><h4 className="font-semibold">参考答案：{render(q.correctAnswer)}</h4><SolutionText text={q.explanation} vectors={q.topic.includes("向量")} className="mt-4 text-sm leading-8"/>
        {written && <div className="mt-6 space-y-4"><p className="text-sm leading-7 text-slate-600">按独立作答情况自评，未完整完成的题目将加入错题本。自评不计入客观题正确率。</p>{(q.checkpoints ?? []).map((step, i) => <fieldset key={step} disabled={sealed || busy} className="rounded-lg border border-slate-200 p-4"><legend className="px-1 text-sm">{i + 1}. {render(step)}</legend><div className="flex flex-wrap gap-3">{["未掌握", "部分完成", "完整完成"].map((label, score) => <label key={label} className="text-sm"><input type="radio" name={`batch-${q.id}-${i}`} checked={a.checks[i] === score} onChange={() => { const checks = [...a.checks]; checks[i] = score; update({ checks }); }} className="mr-1"/>{label}</label>)}</div></fieldset>)}</div>}
        {sealed && <p className="mt-5 font-medium text-blue-700">{written ? batchRecord(q, a).correct ? "自评：全部步骤完整完成" : "自评：仍有步骤需要复练" : batchRecord(q, a).correct ? "回答正确" : "本题需要复练"}</p>}
      </section>}
      {written && a.paper && (review || sealed) && <div className="mt-4"><label htmlFor="batch-notes" className="text-sm">失分步骤或订正备注（选填）</label><textarea id="batch-notes" maxLength={2000} rows={3} value={a.text} disabled={sealed || busy} onChange={e => update({ text: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-sm"/></div>}
    </section>
    <div className="mt-5 flex justify-between gap-3"><button disabled={index === 0 || busy} onClick={() => navigate(index - 1)} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm disabled:opacity-40">← 上一题</button><button disabled={index >= items.length - 1 || busy} onClick={() => navigate(index + 1)} className="rounded-lg bg-slate-900 px-4 py-3 text-sm text-white disabled:opacity-40">下一题 →</button></div>
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      {review && <button disabled={busy} onClick={() => setDraft(value => ({ ...value, stage: "answer", answers: Object.fromEntries(Object.entries(value.answers).map(([id, answer]) => [id, { ...answer, checks: [] }])) }))} className="mb-4 text-sm text-blue-600">返回修改答案（重新自评）</button>}
      {!sealed ? <><p className="text-sm leading-7 text-slate-600">{completed !== items.length ? `还有 ${items.length - completed} 题未作答，点击答题卡可跳转。` : review && unassessed.length ? `还有 ${unassessed.length} 道解答题需要分步自评。` : "本组已完成，可以统一提交。"}</p><button disabled={busy || completed !== items.length} onClick={finish} className="mt-3 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-40">{draft.stage === "answer" && items.some(q => q.kind === "written") ? "整组完成，核对解答题" : review && unassessed.length ? "继续完成解答题自评" : "整组提交并保存"}</button></>
      : <><h2 className="font-semibold text-slate-900">整组练习结果</h2><p className="mt-3 text-sm leading-7">客观题 {objectives.length} 题，答对 {correct} 题{objectives.length ? `，正确率 ${Math.round(correct / objectives.length * 100)}%` : ""}。解答题自评 {items.length - objectives.length} 题。</p><p role="status" className="mt-3 text-sm leading-7 text-slate-500">{busy ? "正在保存整组记录…" : draft.saved ? "整组记录和错题已保存到云端。" : message || (userId ? "本地结果已保留，云端保存尚未确认。" : "访客结果仅保存在本浏览器，不会同步到云端。")}</p>{userId && !draft.saved && <button disabled={busy} onClick={() => void save(draft)} className="mt-3 rounded-lg border border-blue-200 px-4 py-3 text-sm text-blue-700 disabled:opacity-40">重试保存未完成的记录</button>}<button disabled={busy || !!userId && !draft.saved} onClick={() => { setDraft(newPracticeBatch(items)); setMessage(""); navigate(0); }} className="mt-3 ml-3 text-sm text-blue-600 disabled:opacity-40">重新练习本组</button></>}
    </section>
  </div>;
}
