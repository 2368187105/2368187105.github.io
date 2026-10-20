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
    id: "intersection-001",
    title: "联立方程求交点",
    question: "直线 y = 2x + 1 与 y = −x + 7 的交点横坐标为：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    answer: "B",
    explanation:
      "联立 2x + 1 = −x + 7，得 3x = 6，所以 x = 2。代回可得 y = 5，交点为 (2, 5)，横坐标为 2，选 B。",
  },
  {
    id: "intersection-002",
    title: "判断是否有唯一交点",
    question: "直线 l₁：2x + y − 3 = 0，l₂：4x + 2y + 1 = 0。两条直线的位置关系是：",
    options: [
      { key: "A", text: "相交于一点" },
      { key: "B", text: "重合" },
      { key: "C", text: "平行且不重合" },
      { key: "D", text: "垂直" },
    ],
    answer: "C",
    explanation:
      "第二个方程左侧的 x、y 系数分别是第一个方程对应系数的 2 倍，但常数项 1 并不是 −3 的 2 倍，因此两条直线平行且不重合，没有交点，选 C。",
  },
  {
    id: "intersection-003",
    title: "由交点坐标求参数",
    question: "点 P(1, m) 在直线 3x − y + 4 = 0 上，则 m 等于：",
    options: [
      { key: "A", text: "−1" },
      { key: "B", text: "4" },
      { key: "C", text: "7" },
      { key: "D", text: "−7" },
    ],
    answer: "C",
    explanation:
      "将 x = 1、y = m 代入直线方程，得 3 − m + 4 = 0，即 7 − m = 0，所以 m = 7，选 C。",
  },
];

const lessonSections = [
  { number: "1.1", title: "直线的斜率与倾斜角", href: "/grade2/line-equation/slope-angle", status: "课程页面" },
  { number: "1.2", title: "直线的方程", href: "/grade2/line-equation/equation", status: "课程页面" },
  { number: "1.3", title: "两条直线的平行与垂直", href: "/grade2/line-equation/parallel-perpendicular", status: "课程页面" },
  { number: "1.4", title: "两条直线的交点", href: "/grade2/line-equation/intersection", status: "当前学习" },
  { number: "1.5", title: "平面上的距离", href: "/grade2/line-equation/distance", status: "已开放" },
];

export default function IntersectionPage() {
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
          <span className="text-slate-700">两条直线的交点</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 01</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 1.4</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">两条直线的交点</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            学会把两条直线的方程联立求解，理解方程组的解与交点坐标之间的关系，并能判断两条直线相交、平行或重合。
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
                <li>• 理解两条直线交点坐标的几何意义。</li>
                <li>• 掌握通过联立两个直线方程求交点的方法。</li>
                <li>• 能根据方程组是否有解判断直线的位置关系。</li>
                <li>• 能把已知交点坐标代入直线方程求参数。</li>
              </ul>
            </section>

            <section id="knowledge" className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE CONCEPTS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">二、交点与方程组的关系</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                如果点 P(x₀, y₀) 同时在两条直线上，那么它的坐标必须同时满足这两条直线的方程。因此，求两条直线的交点，就是求由两个直线方程组成的二元一次方程组的公共解。
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-5 text-center">
                <p className="text-sm text-slate-600">核心方法</p>
                <p className="mt-2 text-xl font-semibold text-blue-700">联立方程 → 求出 x、y → 写成交点 (x, y)</p>
              </div>
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-3 sm:p-5">
                <svg viewBox="0 0 420 240" role="img" aria-label="两条直线相交并形成交点示意图" className="mx-auto block w-full max-w-lg">
                  <defs><marker id="intersection-axis-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b" /></marker></defs>
                  <line x1="28" y1="190" x2="392" y2="190" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#intersection-axis-arrow)" />
                  <line x1="65" y1="224" x2="65" y2="18" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#intersection-axis-arrow)" />
                  <line x1="88" y1="212" x2="340" y2="38" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="55" x2="355" y2="210" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="224" cy="118" r="5" fill="#ea580c" stroke="white" strokeWidth="2" />
                  <text x="235" y="111" fontSize="14" fill="#ea580c">P(x₀, y₀)</text>
                  <text x="343" y="36" fontSize="14" fill="#2563eb">l₁</text>
                  <text x="357" y="215" fontSize="14" fill="#0d9488">l₂</text>
                  <text x="395" y="194" fontSize="13" fill="#475569">x</text>
                  <text x="53" y="16" fontSize="13" fill="#475569">y</text>
                  <text x="96" y="231" fontSize="12" fill="#64748b">两条直线的公共点就是交点</text>
                </svg>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">SOLUTION METHOD</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">三、求交点的基本步骤</h2>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <li><span className="font-semibold text-blue-700">第一步：列方程组。</span> 把两条直线的方程放在一起，寻找同时满足它们的 x、y。</li>
                <li><span className="font-semibold text-blue-700">第二步：消元求解。</span> 可以用代入消元法或加减消元法求出两个未知数。</li>
                <li><span className="font-semibold text-blue-700">第三步：写出交点。</span> 将解按坐标顺序写成 (x, y)，不要把横、纵坐标颠倒。</li>
                <li><span className="font-semibold text-blue-700">第四步：检查。</span> 将求出的坐标分别代回两条直线方程，确认都成立。</li>
              </ol>
              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="font-semibold text-amber-900">特别注意</p>
                <p className="mt-2 text-sm leading-7 text-amber-900/80">若联立后得到矛盾等式（例如 0 = 3），则没有交点，两条直线平行且不重合；若两个方程实际表示同一条直线，则有无数个公共点，即两条直线重合。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LINE POSITION</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">四、用方程组判断位置关系</h2>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-slate-100 p-4"><p className="font-semibold text-slate-800">有唯一解</p><p className="mt-1 text-sm leading-7 text-slate-600">两条直线相交于一点，方程组的唯一解就是交点坐标。</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="font-semibold text-slate-800">无解</p><p className="mt-1 text-sm leading-7 text-slate-600">两条直线平行且不重合，没有公共点。</p></div>
                <div className="rounded-xl border border-slate-100 p-4"><p className="font-semibold text-slate-800">有无数解</p><p className="mt-1 text-sm leading-7 text-slate-600">两个方程表示同一条直线，两条直线重合。</p></div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">对于一般式 A₁x + B₁y + C₁ = 0、A₂x + B₂y + C₂ = 0，也可以比较系数或联立方程判断位置关系。初学时优先通过消元过程判断，步骤更直观。</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">五、典型例题</h2>
              <div className="mt-5 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 1：用代入法求交点</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求直线 y = x + 2 与 y = 3x − 4 的交点坐标。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">令 x + 2 = 3x − 4，得 2x = 6，所以 x = 3。代入 y = x + 2，得 y = 5。因此交点为 (3, 5)。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 2：用加减消元法求交点</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求方程组 x + y = 7，x − y = 1 所对应两条直线的交点。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">两式相加得 2x = 8，所以 x = 4。将 x = 4 代入 x + y = 7，得 y = 3。因此交点为 (4, 3)。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 3：根据方程组判断位置关系</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">判断直线 2x − y + 1 = 0 与 4x − 2y + 5 = 0 是否相交。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">第一个方程乘以 2 得 4x − 2y + 2 = 0。它与第二个方程 4x − 2y + 5 = 0 左侧的 x、y 系数相同，但常数项不同，联立会得到 2 = 5 的矛盾。因此两条直线平行且不重合，没有交点。</p></details>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">AFTER-CLASS PRACTICE</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">六、课后练习</h2>
              <div className="mt-5 space-y-5">
                <div><p className="font-medium leading-7 text-slate-800">1. 求直线 y = 4x − 1 与 y = −2x + 11 的交点。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">令 4x − 1 = −2x + 11，得 6x = 12，x = 2。代入得 y = 7，交点为 (2, 7)。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">2. 求方程组 2x + y = 8，x − y = 1 的解。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">两式相加得 3x = 9，x = 3。代入 x − y = 1，得 y = 2，解为 (3, 2)。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">3. 直线 y = 2x + 1 与 y = 2x − 6 有几个交点？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">两条直线斜率相等、截距不同，所以平行且不重合，没有交点。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">4. 点 A(a, 2) 是直线 x + 2y − 9 = 0 上的一点，求 a。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">代入 x = a、y = 2，得 a + 4 − 9 = 0，因此 a = 5。</p></details></div>
              </div>
            </section>

            <section id="lesson-quiz" className="scroll-mt-6 rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KNOWLEDGE CHECK</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">七、课堂选择题</h2>
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
                        return (
                          <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 transition ${optionStyle} ${submitted ? "cursor-default" : "cursor-pointer"}`}>
                            <input type="radio" name={question.id} value={option.key} checked={selected} disabled={submitted} onChange={() => setAnswers((previous) => ({ ...previous, [question.id]: option.key }))} className="mt-1 accent-blue-600" />
                            <span className="flex-1 text-sm leading-6 text-slate-700">{option.key}. {option.text}</span>
                            {submitted && isCorrect && <span className="shrink-0 text-xs font-medium text-emerald-700">正确答案</span>}
                          </label>
                        );
                      })}
                    </div>
                    {submitted && <div className="mt-4 rounded-xl bg-slate-50 p-4"><p className={`text-sm font-semibold ${answers[question.id] === question.answer ? "text-emerald-700" : "text-red-600"}`}>{answers[question.id] === question.answer ? "回答正确" : `回答错误，正确答案是 ${question.answer}`}</p><p className="mt-2 text-sm leading-7 text-slate-600">{question.explanation}</p></div>}
                  </article>
                ))}
              </div>
              {!submitted ? (
                <div className="mt-6"><p className="mb-3 text-sm text-slate-500">已完成 {answeredCount}/{quizQuestions.length} 道题</p><button type="button" disabled={answeredCount !== quizQuestions.length} onClick={() => setSubmitted(true)} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">提交答案</button></div>
              ) : (
                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5"><p className="text-sm text-slate-600">本次练习成绩</p><p className="mt-2 text-3xl font-bold text-blue-700">{score}/{quizQuestions.length}</p><p className="mt-2 text-sm text-slate-600">正确率：{Math.round((score / quizQuestions.length) * 100)}%</p><button type="button" onClick={resetQuiz} className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300">重新作答</button></div>
              )}
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KEY TAKEAWAYS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">八、本节小结</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 两条直线的交点坐标同时满足两条直线的方程。</li>
                <li>• 求交点的基本方法是联立方程组并求解。</li>
                <li>• 方程组有唯一解、无解、无数解，分别对应相交、平行不重合、重合。</li>
                <li>• 求得坐标后，最好代回原方程进行检验。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/grade2/line-equation" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200">← 返回本章目录</Link>
              <Link href="/grade2/line-equation/distance" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">下一节：平面上的距离 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold text-slate-900">本章学习路线</h2>
              <div className="mt-5 space-y-4">
                {lessonSections.map((lesson) => (
                  <div key={lesson.number} className="flex items-start gap-3">
                    <span className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${lesson.status === "当前学习" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>{lesson.number}</span>
                    <div className="min-w-0 flex-1">
                      {lesson.href === "#" ? <p className="text-sm font-medium leading-6 text-slate-800">{lesson.title}</p> : <Link href={lesson.href} className="text-sm font-medium leading-6 text-slate-800 transition hover:text-blue-600">{lesson.title}</Link>}
                      <p className={`mt-1 text-xs ${lesson.status === "当前学习" ? "text-emerald-600" : "text-slate-400"}`}>{lesson.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">解题步骤</h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-600"><li>1. 联立两个方程</li><li>2. 消元求出 x、y</li><li>3. 写成交点坐标 (x, y)</li><li>4. 代回原方程检查</li></ol>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习建议</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">优先练习代入法和加减消元法。若计算过程中出现矛盾等式，检查是否属于平行直线；若两个方程等价，则两条直线重合。</p>
              <a href="#lesson-quiz" className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700">前往课堂选择题 →</a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
