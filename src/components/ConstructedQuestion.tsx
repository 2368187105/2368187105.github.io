"use client";

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
  const renderText = (value: string) => question.topic.includes("向量") ? vectorText(value) : mathText(value);
  const written = question.kind === "written";
  const checkpoints = question.checkpoints ?? [];
  const correct = written ? checkpoints.every((_, index) => checks[index] === 2) : checkAnswer(question, answer);
  const canSubmit = authReady && (written ? revealed && checkpoints.every((_, index) => checks[index] !== undefined) : !!answer.trim());
  return <div className="mt-6">
    <p className="text-sm font-medium text-blue-600">{written ? "解答题 · 逐步自评" : "填空题 · 输入答案"}</p>
    <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="constructed-answer">{written ? "作答草稿（建议同时在纸上写出完整过程）" : "你的答案"}</label>
    {written ? <textarea id="constructed-answer" rows={7} maxLength={2000} value={answer} disabled={revealed || submitting || submitted} onChange={event => setAnswer(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-4 text-sm leading-7 disabled:bg-slate-50" placeholder="按小问写出条件、推导与结论，最多 2000 字。" />
    : <input id="constructed-answer" autoComplete="off" maxLength={200} value={answer} disabled={submitted || submitting} onChange={event => setAnswer(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-3" placeholder="例如：2、pi/2、sqrt(3)、{1,5}、(0,1]" />}
    {!written && <p className="mt-2 text-xs leading-6 text-slate-500">可输入数值、π、根式、有限集合、区间或不等式。分数与有限小数自动等价匹配；其他形式按已收录的等价答案判分，暂不判断任意代数式等价。</p>}
    {written && !revealed && <div className="mt-4 flex flex-wrap gap-4">
      <button type="button" onClick={() => setHint(!hint)} className="text-sm text-blue-600">{hint ? "收起提示" : "查看思路提示"}</button>
      <button type="button" disabled={!answer.trim()} onClick={() => setRevealed(true)} className="rounded-lg bg-blue-600 px-4 py-3 text-sm text-white disabled:opacity-40">完成作答，核对完整解析</button>
    </div>}
    {hint && !revealed && <p className="mt-4 rounded-lg bg-blue-50 p-4 text-sm leading-7">{renderText(question.hint ?? "")}</p>}
    {(written ? revealed : submitted) && <section className="mt-5 rounded-xl bg-slate-50 p-5">
      <h4 className="font-semibold text-slate-900">参考答案：{renderText(question.correctAnswer)}</h4>
      <p className="mt-4 whitespace-pre-wrap text-sm leading-8">{renderText(question.explanation)}</p>
      {written && <div className="mt-6 space-y-4"><p className="text-sm text-slate-600">按独立作答情况逐步自评。部分完成或未掌握会加入错题本；结果不计入客观题正确率。</p>{checkpoints.map((checkpoint, index) => <fieldset key={checkpoint} disabled={submitted || submitting} className="rounded-lg border border-slate-200 p-4"><legend className="px-1 text-sm font-medium">{index + 1}. {renderText(checkpoint)}</legend><div className="flex flex-wrap gap-4">{["未掌握", "部分完成", "完整完成"].map((label, value) => <label key={label} className="text-sm"><input type="radio" name={`step-${index}`} value={value} checked={checks[index] === value} onChange={() => setChecks(previous => ({ ...previous, [index]: value }))} className="mr-2" />{label}</label>)}</div></fieldset>)}</div>}
    </section>}
    {!submitted ? <button type="button" disabled={!canSubmit || submitting} onClick={() => onSubmit({ answer: written ? "self:" + JSON.stringify({ work: answer.trim(), checks: checkpoints.map((_, index) => checks[index]) }) : answer.trim(), correct })} className="mt-5 rounded-lg bg-slate-900 px-5 py-3 text-sm text-white disabled:opacity-40">{submitting ? "正在保存..." : written ? "保存分步自评" : "提交答案"}</button>
    : <div className="mt-5" role="status"><p className={correct ? "text-emerald-700" : "text-red-600"}>{written ? correct ? "自评：全部步骤完整完成" : "自评：仍有步骤需要复练" : correct ? "回答正确" : renderText("本次答案未匹配参考答案：" + question.correctAnswer)}</p><p className="mt-2 text-xs text-slate-500">{saveMessage}</p><button type="button" disabled={submitting} onClick={onReset} className="mt-4 text-sm text-blue-600">重新作答</button></div>}
  </div>;
}
