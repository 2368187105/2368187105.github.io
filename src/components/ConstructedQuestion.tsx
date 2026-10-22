"use client";
import SolutionText from "@/components/SolutionText";

import { useState } from "react";
import type { Question } from "@/data/questions";
import { vectorText } from "@/components/VectorText";
import { mathText } from "@/components/MathText";
import { checkAnswer } from "@/lib/answer-checking";

type Assessment = { answer: string; correct: boolean };

export default function ConstructedQuestion({ question, submitted, submitting, authReady = true, saveMessage, onSubmit, onReset }: {
  question: Question;
  submitted: boolean;
  submitting: boolean;
  authReady?: boolean;
  saveMessage: string;
  onSubmit: (assessment: Assessment) => Promise<void>;
  onReset: () => void;
}) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [checks, setChecks] = useState<Record<number, number>>({});
  const [hint, setHint] = useState(false);
  const [paper, setPaper] = useState(true);
  const [paperAttempted, setPaperAttempted] = useState(false);
  const renderText = (value: string) => question.topic.includes("向量") ? vectorText(value) : mathText(value);
  const written = question.kind === "written";
  const checkpoints = question.checkpoints ?? [];
  const correct = written ? checkpoints.every((_, index) => checks[index] === 2) : checkAnswer(question, answer);
  const canSubmit = authReady && (written ? revealed && checkpoints.every((_, index) => checks[index] !== undefined) : !!answer.trim());
  return <div className="mt-6">
    <p className="text-sm font-medium text-blue-600">{written ? "解答题 · 逐步自评" : "填空题 · 输入答案"}</p>
    {written && <div className="mt-4 flex flex-wrap gap-3" aria-label="解答题作答方式">{[{ value: true, label: "纸上作答" }, { value: false, label: "录入草稿" }].map(mode => <button key={mode.label} disabled={revealed || submitting || submitted} aria-pressed={paper === mode.value} onClick={() => setPaper(mode.value)} className={`rounded-lg border px-4 py-2 text-sm disabled:opacity-50 ${paper === mode.value ? "border-blue-300 bg-blue-50 text-blue-700" : "border-slate-200"}`}>{mode.label}</button>)}</div>}
    {written && paper ? <div className="mt-4 rounded-xl border border-slate-200 p-4 text-sm leading-7"><p>在纸上按小问写出条件、推导和结论。尝试后核对完整解析，再逐步标记失分点，无需录入全文。</p><label className="mt-3 flex items-start gap-2"><input type="checkbox" checked={paperAttempted} disabled={revealed || submitting || submitted} onChange={e => setPaperAttempted(e.target.checked)} className="mt-2"/>我已在纸上独立尝试这道题</label></div> : <>
      <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="constructed-answer">{written ? "作答草稿（建议同时在纸上写出完整过程）" : "你的答案"}</label>
      {written ? <textarea id="constructed-answer" rows={7} maxLength={2000} value={answer} disabled={revealed || submitting || submitted} onChange={event => setAnswer(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-4 text-sm leading-7 disabled:bg-slate-50" placeholder="按小问写出条件、推导与结论，最多 2000 字。" />
      : <input id="constructed-answer" autoComplete="off" maxLength={200} value={answer} disabled={submitted || submitting} onChange={event => setAnswer(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-3" placeholder="例如：2、pi/2、sqrt(3)、{1,5}、(0,1]" />}
    </>}
    {!written && <p className="mt-2 text-xs leading-6 text-slate-500">可输入数值、π、根式、有限集合、区间或不等式。分数与有限小数自动等价匹配；其他形式按已收录的等价答案判分，暂不判断任意代数式等价。</p>}
    {written && !revealed && <div className="mt-4 flex flex-wrap gap-4">
      <button type="button" onClick={() => setHint(!hint)} className="text-sm text-blue-600">{hint ? "收起提示" : "查看思路提示"}</button>
      <button type="button" disabled={paper ? !paperAttempted : !answer.trim()} onClick={() => setRevealed(true)} className="rounded-lg bg-blue-600 px-4 py-3 text-sm text-white disabled:opacity-40">完成作答，核对完整解析</button>
    </div>}
    {hint && !revealed && <p className="mt-4 rounded-lg bg-blue-50 p-4 text-sm leading-7">{renderText(question.hint ?? "")}</p>}
    {(written ? revealed : submitted) && <section className="mt-5 rounded-xl bg-slate-50 p-5">
      <h4 className="font-semibold text-slate-900">参考答案：{renderText(question.correctAnswer)}</h4>
      <SolutionText text={question.explanation} vectors={question.topic.includes("向量")} className="mt-4 text-sm leading-8" />
      {written && <div className="mt-6 space-y-4"><p className="text-sm text-slate-600">按独立作答情况逐步自评。部分完成或未掌握会加入错题本；结果不计入客观题正确率。</p>{checkpoints.map((checkpoint, index) => <fieldset key={checkpoint} disabled={submitted || submitting} className="rounded-lg border border-slate-200 p-4"><legend className="px-1 text-sm font-medium">{index + 1}. {renderText(checkpoint)}</legend><div className="flex flex-wrap gap-4">{["未掌握", "部分完成", "完整完成"].map((label, value) => <label key={label} className="text-sm"><input type="radio" name={`step-${index}`} value={value} checked={checks[index] === value} onChange={() => setChecks(previous => ({ ...previous, [index]: value }))} className="mr-2" />{label}</label>)}</div></fieldset>)}</div>}
    </section>}
    {written && revealed && paper && <div className="mt-4"><label htmlFor="paper-notes" className="text-sm font-medium text-slate-700">失分步骤或订正备注（选填）</label><textarea id="paper-notes" value={answer} maxLength={2000} rows={3} disabled={submitted || submitting} onChange={e => setAnswer(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-sm leading-7" placeholder="例如：第二问漏掉右侧情形，下次先列全分类。"/></div>}
    {!submitted ? <button type="button" disabled={!canSubmit || submitting} onClick={() => onSubmit({ answer: written ? "self:" + JSON.stringify({ mode: paper ? "paper" : "typed", work: answer.trim(), checks: checkpoints.map((_, index) => checks[index]) }) : answer.trim(), correct })} className="mt-5 rounded-lg bg-slate-900 px-5 py-3 text-sm text-white disabled:opacity-40">{submitting ? "正在保存..." : written ? "保存分步自评" : "提交答案"}</button>
    : <div className="mt-5" role="status"><p className={correct ? "text-emerald-700" : "text-red-600"}>{written ? correct ? "自评：全部步骤完整完成" : "自评：仍有步骤需要复练" : correct ? "回答正确" : renderText("本次答案未匹配参考答案：" + question.correctAnswer)}</p><p className="mt-2 text-xs text-slate-500">{saveMessage}</p><button type="button" disabled={submitting} onClick={onReset} className="mt-4 text-sm text-blue-600">重新作答</button></div>}
  </div>;
}
