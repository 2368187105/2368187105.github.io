"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Option = { key: string; text: string };
type QuizQuestion = {
  id: string;
  title: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "parallel-perpendicular-001",
    title: "由斜率判断平行",
    question: "直线 l₁ 的斜率为 3，直线 l₂ 的斜率为 3。若两条直线不重合，则 l₁ 与 l₂ 的位置关系是：",
    options: [
      { key: "A", text: "垂直" },
      { key: "B", text: "平行" },
      { key: "C", text: "相交但不垂直" },
      { key: "D", text: "无法判断" },
    ],
    answer: "B",
    explanation:
      "两条不重合的非竖直直线斜率相等时，两直线平行。这里 k₁ = k₂ = 3，且两直线不重合，所以 l₁ ∥ l₂，选 B。",
  },
  {
    id: "parallel-perpendicular-002",
    title: "由斜率判断垂直",
    question: "已知两条直线的斜率分别为 2 和 m，且两条直线互相垂直，则 m 等于：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "−2" },
      { key: "C", text: "1/2" },
      { key: "D", text: "−1/2" },
    ],
    answer: "D",
    explanation:
      "两条非竖直直线垂直时，斜率乘积 k₁k₂ = −1。因此 2m = −1，解得 m = −1/2，选 D。",
  },
  {
    id: "parallel-perpendicular-003",
    title: "判断特殊直线的位置关系",
    question: "直线 l₁ 的方程为 x = 4，直线 l₂ 的方程为 y = −2，则 l₁ 与 l₂：",
    options: [
      { key: "A", text: "平行" },
      { key: "B", text: "重合" },
      { key: "C", text: "互相垂直" },
      { key: "D", text: "相交但不垂直" },
    ],
    answer: "C",
    explanation:
      "x = 4 是竖直直线，y = −2 是水平直线。竖直直线与水平直线互相垂直，选 C。注意，竖直直线的斜率不存在，不能直接代入 k₁k₂ = −1。",
  },
];

const lessonSections = [
  { number: "1.1", title: "直线的斜率与倾斜角", href: "/grade2/line-equation/slope-angle", status: "已完成" },
  { number: "1.2", title: "直线的方程", href: "/grade2/line-equation/equation", status: "已完成" },
  { number: "1.3", title: "两条直线的平行与垂直", href: "/grade2/line-equation/parallel-perpendicular", status: "当前学习" },
  { number: "1.4", title: "两条直线的交点", href: "/grade2/line-equation/intersection", status: "已开放" },
  { number: "1.5", title: "平面上的距离", href: "/grade2/line-equation/distance", status: "已开放" },
];

export default function ParallelPerpendicularPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = quizQuestions.filter((q) => Boolean(answers[q.id])).length;
  const score = quizQuestions.filter((q) => answers[q.id] === q.answer).length;

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">首页</Link>
          <span>/</span>
          <Link href="/grade2" className="transition hover:text-blue-600">高二数学</Link>
          <span>/</span>
          <Link href="/grade2/line-equation" className="transition hover:text-blue-600">直线与方程</Link>
          <span>/</span>
          <span className="text-slate-700">两条直线的平行与垂直</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 01</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 1.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">两条直线的平行与垂直</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从直线的斜率出发，掌握两条直线平行与垂直的判定方法，理解竖直直线和水平直线的特殊情况，并能根据直线方程判断位置关系或求参数。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">开始学习</a>
            <Link href="/grade2/line-equation" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200">返回章节目录</Link>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING OBJECTIVES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">一、本节学习目标</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 掌握两条非竖直直线平行的斜率判定条件。</li>
                <li>• 掌握两条非竖直直线垂直的斜率判定条件。</li>
                <li>• 能处理竖直直线与水平直线的平行、垂直关系。</li>
                <li>• 能结合直线方程判断位置关系，并求出相关参数。</li>
              </ul>
            </section>

            <section id="knowledge" className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE CONCEPTS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">二、两条直线平行的判定</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                对于两条斜率都存在的直线，斜率反映直线的倾斜方向和程度。如果两条直线斜率相同，它们方向相同；此时两条直线要么平行，要么重合。因此，判断平行时还要确认两条直线不是同一条直线。
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-5 text-center">
                <p className="text-sm text-slate-600">两条不重合的非竖直直线平行</p>
                <p className="mt-2 text-2xl font-semibold text-blue-700">k₁ = k₂</p>
              </div>
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-3 sm:p-5">
                <svg viewBox="0 0 420 220" role="img" aria-label="两条平行直线示意图" className="mx-auto block w-full max-w-lg">
                  <defs><marker id="parallel-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b" /></marker></defs>
                  <line x1="32" y1="184" x2="390" y2="184" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parallel-arrow)" />
                  <line x1="52" y1="198" x2="52" y2="18" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parallel-arrow)" />
                  <line x1="82" y1="154" x2="330" y2="70" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="110" x2="330" y2="26" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                  <text x="338" y="70" fontSize="14" fill="#2563eb">l₁</text>
                  <text x="338" y="27" fontSize="14" fill="#0d9488">l₂</text>
                  <text x="394" y="188" fontSize="13" fill="#475569">x</text>
                  <text x="40" y="15" fontSize="13" fill="#475569">y</text>
                  <text x="110" y="211" fontSize="12" fill="#64748b">示意图：两条直线方向相同且不重合</text>
                </svg>
              </div>
              <h3 className="mt-6 font-bold text-slate-900">一般式的判定方法</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600">若两条直线分别写成 A₁x + B₁y + C₁ = 0 和 A₂x + B₂y + C₂ = 0，可先比较方程中 x、y 的系数判断方向是否相同。若系数对 (A₁, B₁) 与 (A₂, B₂) 成比例，则两条直线平行或重合；再比较常数项，区分平行与重合。</p>
              <div className="mt-3 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                <p className="font-semibold">判定思路</p>
                <p className="mt-1">先判断方向是否相同，再判断两条直线是否重合。不要只看到斜率相等就直接断定两条直线平行。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KEY FORMULAS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">三、两条直线垂直的判定</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">当两条非竖直直线互相垂直时，它们的斜率互为负倒数。也就是说，两条直线的斜率相乘等于 −1。</p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-5 text-center">
                <p className="text-sm text-slate-600">两条斜率均存在的直线互相垂直</p>
                <p className="mt-2 text-2xl font-semibold text-blue-700">k₁k₂ = −1</p>
              </div>
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-3 sm:p-5">
                <svg viewBox="0 0 420 230" role="img" aria-label="两条垂直直线示意图" className="mx-auto block w-full max-w-lg">
                  <defs><marker id="perpendicular-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b" /></marker></defs>
                  <line x1="28" y1="118" x2="390" y2="118" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#perpendicular-arrow)" />
                  <line x1="210" y1="214" x2="210" y2="16" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#perpendicular-arrow)" />
                  <line x1="90" y1="198" x2="330" y2="38" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  <line x1="130" y1="38" x2="290" y2="198" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                  <path d="M210 118 L226 106 L238 122 L222 134 Z" fill="none" stroke="#64748b" strokeWidth="1.5" />
                  <text x="336" y="39" fontSize="14" fill="#2563eb">l₁</text>
                  <text x="293" y="204" fontSize="14" fill="#0d9488">l₂</text>
                  <text x="394" y="122" fontSize="13" fill="#475569">x</text>
                  <text x="218" y="15" fontSize="13" fill="#475569">y</text>
                  <text x="84" y="222" fontSize="12" fill="#64748b">两条直线相交成直角</text>
                </svg>
              </div>
              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="font-semibold text-amber-900">特别注意：竖直直线与水平直线</p>
                <p className="mt-2 text-sm leading-7 text-amber-900/80">竖直直线 x = a 的斜率不存在，水平直线 y = b 的斜率为 0。二者互相垂直，但不能把竖直直线的斜率代入 k₁k₂ = −1。使用斜率乘积公式时，必须确认两条直线的斜率都存在。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">四、典型例题</h2>
              <div className="mt-5 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 1：判断两条直线是否平行</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">已知直线 l₁：y = 2x + 1，l₂：y = 2x − 3，判断 l₁ 与 l₂ 的位置关系。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">两条直线的斜率分别为 k₁ = 2、k₂ = 2，斜率相等；截距分别为 1 和 −3，两条直线不重合。因此 l₁ ∥ l₂。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 2：利用垂直条件求参数</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">直线 l₁：y = −3x + 2 与直线 l₂：y = mx − 4 互相垂直，求 m。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">两条直线的斜率为 −3 和 m。由垂直条件 (−3)m = −1，解得 m = 1/3。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 3：特殊直线的垂直关系</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">直线 l₁：x = −1 与直线 l₂：y = 5 是否垂直？</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">l₁ 是竖直直线，l₂ 是水平直线。竖直直线与水平直线互相垂直，因此 l₁ ⟂ l₂。</p></details>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">AFTER-CLASS PRACTICE</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">五、课后练习</h2>
              <div className="mt-5 space-y-5">
                <div><p className="font-medium leading-7 text-slate-800">1. 直线 y = −x + 4 与 y = −x − 2 是否平行？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">两条直线斜率均为 −1，截距不同，因此两条直线平行。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">2. 若直线 y = 4x + 1 与 y = mx − 3 垂直，求 m。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">由 4m = −1，得 m = −1/4。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">3. 直线 x = 7 与 y = 0 的位置关系是什么？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">x = 7 是竖直直线，y = 0 是 x 轴，为水平直线，所以两条直线垂直。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">4. 直线 y = 2x + 1 与 y = 2x + b 重合时，b 应满足什么条件？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">两条直线斜率相同，要重合还需要截距相同，因此 b = 1。</p></details></div>
              </div>
            </section>

            <section id="lesson-quiz" className="scroll-mt-6 rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KNOWLEDGE CHECK</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">六、课堂选择题</h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">共 3 道单项选择题。完成全部题目后提交，即可查看得分和解析。</p>
              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, index) => (
                  <article key={question.id} className="rounded-xl border border-slate-100 p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">{index + 1}</span>
                      <div className="min-w-0 flex-1"><h3 className="font-semibold leading-7 text-slate-900">{question.title}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{question.question}</p></div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.key;
                        const isCorrect = option.key === question.answer;
                        let optionStyle = "border-slate-200 bg-white hover:border-blue-300";
                        if (submitted && isCorrect) optionStyle = "border-emerald-300 bg-emerald-50";
                        else if (submitted && selected && !isCorrect) optionStyle = "border-red-300 bg-red-50";
                        else if (selected) optionStyle = "border-blue-500 bg-blue-50";
                        return <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 transition ${optionStyle} ${submitted ? "cursor-default" : "cursor-pointer"}`}>
                          <input type="radio" name={question.id} value={option.key} checked={selected} disabled={submitted} onChange={() => setAnswers((previous) => ({ ...previous, [question.id]: option.key }))} className="mt-1 accent-blue-600" />
                          <span className="flex-1 text-sm leading-6 text-slate-700">{option.key}. {option.text}</span>
                          {submitted && isCorrect && <span className="shrink-0 text-xs font-medium text-emerald-700">正确答案</span>}
                        </label>;
                      })}
                    </div>
                    {submitted && <div className="mt-4 rounded-xl bg-slate-50 p-4"><p className={`text-sm font-semibold ${answers[question.id] === question.answer ? "text-emerald-700" : "text-red-600"}`}>{answers[question.id] === question.answer ? "回答正确" : `回答错误，正确答案是 ${question.answer}`}</p><p className="mt-2 text-sm leading-7 text-slate-600">{question.explanation}</p></div>}
                  </article>
                ))}
              </div>
              {!submitted ? <div className="mt-6"><p className="mb-3 text-sm text-slate-500">已完成 {answeredCount}/{quizQuestions.length} 道题</p><button type="button" disabled={answeredCount !== quizQuestions.length} onClick={() => setSubmitted(true)} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">提交答案</button></div> : <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5"><p className="text-sm text-slate-600">本次练习成绩</p><p className="mt-2 text-3xl font-bold text-blue-700">{score}/{quizQuestions.length}</p><p className="mt-2 text-sm text-slate-600">正确率：{Math.round((score / quizQuestions.length) * 100)}%</p><button type="button" onClick={resetQuiz} className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300">重新作答</button></div>}
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KEY TAKEAWAYS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">七、本节小结</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 两条不重合的非竖直直线斜率相等时，二者平行。</li>
                <li>• 两条斜率均存在的直线垂直时，k₁k₂ = −1。</li>
                <li>• 竖直直线与水平直线互相垂直。</li>
                <li>• 斜率相等只能说明两条非竖直直线方向相同，还需判断是否重合。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/grade2/line-equation" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200">← 返回本章目录</Link>
              <Link href="/grade2/line-equation/intersection" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">下一节：两条直线的交点 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold text-slate-900">本章学习路线</h2>
              <div className="mt-5 space-y-4">
                {lessonSections.map((lesson) => <div key={lesson.number} className="flex items-start gap-3">
                  <span className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${lesson.status === "当前学习" ? "bg-blue-600 text-white" : lesson.status === "已完成" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>{lesson.number}</span>
                  <div><p className="text-sm font-medium leading-6 text-slate-800">{lesson.title}</p><p className={`mt-1 text-xs ${lesson.status === "当前学习" ? "text-emerald-600" : "text-slate-400"}`}>{lesson.status}</p></div>
                </div>)}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">核心公式</h2>
              <div className="mt-4 border-b border-slate-100 pb-4"><p className="text-xs text-slate-500">平行判定（不重合）</p><p className="mt-2 text-lg font-semibold text-blue-700">k₁ = k₂</p></div>
              <div className="mt-4"><p className="text-xs text-slate-500">垂直判定（斜率均存在）</p><p className="mt-2 text-lg font-semibold text-blue-700">k₁k₂ = −1</p></div>
              <p className="mt-4 text-xs leading-6 text-slate-500">竖直直线与水平直线也互相垂直，但竖直直线的斜率不存在。</p>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习建议</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先确认直线的斜率是否存在，再选择相应判定方法。斜率相等时，别忘了排除重合；使用斜率乘积判定垂直时，注意特殊直线。</p>
              <a href="#lesson-quiz" className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700">前往课堂选择题 →</a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
