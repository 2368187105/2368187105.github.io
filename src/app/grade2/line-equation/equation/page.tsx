"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Option = {
  key: string;
  text: string;
};

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
    id: "line-equation-001",
    title: "判断一般式的条件",
    question: "方程 Ax + By + C = 0 表示一条直线时，A、B 应满足什么条件？",
    options: [
      { key: "A", text: "A = B = 0" },
      { key: "B", text: "A、B 不同时为 0" },
      { key: "C", text: "A、B、C 都必须大于 0" },
      { key: "D", text: "C 必须等于 0" },
    ],
    answer: "B",
    explanation:
      "直线的一般式为 Ax + By + C = 0，其中 A、B 不能同时为 0。若 A = B = 0，方程将不再表示一条直线。",
  },
  {
    id: "line-equation-002",
    title: "识别斜截式中的参数",
    question: "直线方程 y = -2x + 5 的斜率和 y 轴截距分别是：",
    options: [
      { key: "A", text: "2 和 5" },
      { key: "B", text: "-2 和 -5" },
      { key: "C", text: "-2 和 5" },
      { key: "D", text: "5 和 -2" },
    ],
    answer: "C",
    explanation:
      "斜截式为 y = kx + b，其中 k 是斜率，b 是 y 轴截距。因此本题 k = -2，b = 5。",
  },
  {
    id: "line-equation-003",
    title: "利用点斜式写方程",
    question: "一条直线经过点 (2, -1)，斜率为 4。下列哪个方程是它的点斜式？",
    options: [
      { key: "A", text: "y + 1 = 4(x - 2)" },
      { key: "B", text: "y - 1 = 4(x + 2)" },
      { key: "C", text: "y + 1 = -4(x - 2)" },
      { key: "D", text: "y - 2 = 4(x + 1)" },
    ],
    answer: "A",
    explanation:
      "点斜式为 y - y₁ = k(x - x₁)。代入 (x₁, y₁) = (2, -1) 和 k = 4，得 y - (-1) = 4(x - 2)，即 y + 1 = 4(x - 2)。",
  },
];

const lessonSections = [
  { number: "1.1", title: "直线的斜率与倾斜角", href: "/grade2/line-equation/slope-angle", active: false },
  { number: "1.2", title: "直线的方程", href: "/grade2/line-equation/equation", active: true },
  { number: "1.3", title: "两条直线的平行与垂直", href: "/grade2/line-equation/parallel-perpendicular", active: false },
  { number: "1.4", title: "两条直线的交点", href: "/grade2/line-equation/intersection", active: false },
  { number: "1.5", title: "平面上的距离", href: "/grade2/line-equation/distance", active: false },
];

export default function LineEquationLessonPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = quizQuestions.filter((question) => Boolean(answers[question.id])).length;
  const score = quizQuestions.filter((question) => answers[question.id] === question.answer).length;

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
          <span className="text-slate-700">直线的方程</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 01</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 1.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">直线的方程</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            学习如何用代数方程表示平面直角坐标系中的直线，理解点斜式、斜截式、两点式和一般式的特点，
            并根据已知条件选择合适的形式写出直线方程。
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
                <li>• 理解直线方程的含义，认识直线与二元一次方程之间的联系。</li>
                <li>• 掌握点斜式和斜截式，能根据已知点和斜率写出直线方程。</li>
                <li>• 理解利用两点确定直线方程的基本方法。</li>
                <li>• 了解直线的一般式及其适用范围，注意水平、竖直直线的特殊情况。</li>
              </ul>
            </section>

            <section id="knowledge" className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE CONCEPTS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">二、什么是直线的方程？</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                在平面直角坐标系中，如果某个方程的解所对应的点恰好组成一条直线，就称这个方程为这条直线的方程。
                反过来，直线上的点的坐标都满足它的方程。直线方程把几何图形与代数关系联系起来，便于计算交点、斜率和距离。
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                <p className="text-sm font-semibold text-slate-800">核心思想</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">求直线方程，通常就是利用已知的点、斜率或截距等条件，确定方程中的参数。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KEY FORMULAS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">三、直线方程的常见形式</h2>

              <div className="mt-5 border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold text-slate-900">1. 点斜式</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">已知直线经过点 P(x₁, y₁)，斜率为 k，且直线不是竖直直线时，可写成：</p>
                <div className="mt-3 rounded-xl bg-blue-50/70 p-4 text-center"><p className="text-xl font-semibold text-blue-700">y − y₁ = k(x − x₁)</p></div>
                <p className="mt-2 text-sm leading-7 text-slate-500">使用时将已知点的坐标和斜率直接代入即可。</p>
              </div>

              <div className="mt-6 border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold text-slate-900">2. 斜截式</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">当直线斜率为 k，且与 y 轴的交点纵坐标为 b 时，方程为：</p>
                <div className="mt-3 rounded-xl bg-blue-50/70 p-4 text-center"><p className="text-xl font-semibold text-blue-700">y = kx + b</p></div>
                <p className="mt-2 text-sm leading-7 text-slate-500">其中 k 是斜率，b 是 y 轴截距。特别地，b = 0 时直线经过原点。</p>
              </div>

              <div className="mt-6 border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold text-slate-900">3. 由两点确定直线方程</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">若已知直线上两个不同的点 P₁(x₁, y₁)、P₂(x₂, y₂)，可先计算斜率（当 x₁ ≠ x₂ 时），再使用点斜式。</p>
                <div className="mt-3 rounded-xl bg-slate-50 p-4 text-center"><p className="text-lg font-semibold text-blue-700">k = (y₂ − y₁) / (x₂ − x₁)</p><p className="mt-2 text-sm text-slate-600">再代入 y − y₁ = k(x − x₁)</p></div>
                <p className="mt-2 text-sm leading-7 text-slate-500">若两点横坐标相同，直线为竖直直线 x = x₁，不能使用除法求斜率。</p>
              </div>

              <div className="mt-6 border-l-2 border-blue-300 pl-4">
                <h3 className="font-bold text-slate-900">4. 一般式</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">直线方程可以整理为：</p>
                <div className="mt-3 rounded-xl bg-blue-50/70 p-4 text-center"><p className="text-xl font-semibold text-blue-700">Ax + By + C = 0</p></div>
                <p className="mt-2 text-sm leading-7 text-slate-600">其中 A、B 不同时为 0。一般式能表示水平直线、竖直直线以及其他方向的直线。</p>
              </div>

              <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">特殊情况要记牢</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-amber-900/90">
                  <li>• 水平直线：y = c，斜率为 0。</li>
                  <li>• 竖直直线：x = c，斜率不存在。</li>
                  <li>• 点斜式和斜截式不能直接表示竖直直线。</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">四、典型例题</h2>
              <div className="mt-5 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 1：已知一点和斜率求方程</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求经过点 (2, 1)，斜率为 3 的直线方程。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">使用点斜式 y − y₁ = k(x − x₁)，代入 (x₁, y₁) = (2, 1)、k = 3，得 y − 1 = 3(x − 2)，整理得 y = 3x − 5。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 2：由斜率和截距写方程</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">一条直线的斜率为 −1，y 轴截距为 4，求它的方程。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">使用斜截式 y = kx + b，代入 k = −1、b = 4，得 y = −x + 4。</p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 3：由两点求直线方程</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求经过点 A(1, 2) 和 B(3, 6) 的直线方程。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-7 text-slate-600">先求斜率 k = (6 − 2)/(3 − 1) = 2。代入点斜式 y − 2 = 2(x − 1)，整理得 y = 2x。</p></details>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">AFTER-CLASS PRACTICE</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">五、课后练习</h2>
              <div className="mt-5 space-y-5">
                <div><p className="font-medium leading-7 text-slate-800">1. 写出经过点 (1, 4)，斜率为 2 的直线方程。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">点斜式为 y − 4 = 2(x − 1)，整理得 y = 2x + 2。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">2. 直线 y = 3x − 7 的斜率和 y 轴截距分别是多少？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">与 y = kx + b 对比可得，斜率 k = 3，y 轴截距 b = −7。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">3. 写出经过点 (5, 2)，且平行于 y 轴的直线方程。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">竖直直线上所有点的横坐标相同，因此方程为 x = 5。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">4. 将方程 2x + y − 6 = 0 化为斜截式。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">移项得 y = −2x + 6，因此斜率为 −2，y 轴截距为 6。</p></details></div>
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
              <h2 className="mt-2 text-xl font-bold text-slate-900">七、本节小结</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 点斜式：y − y₁ = k(x − x₁)，适用于非竖直直线。</li>
                <li>• 斜截式：y = kx + b，其中 k 为斜率，b 为 y 轴截距。</li>
                <li>• 已知两点时，可先求斜率，再代入点斜式；若为竖直直线，则写成 x = c。</li>
                <li>• 一般式为 Ax + By + C = 0，A、B 不同时为 0。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/grade2/line-equation" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200">← 返回本章目录</Link>
              <Link href="/grade2/line-equation/slope-angle" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200">上一节：斜率与倾斜角</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold text-slate-900">本章学习路线</h2>
              <div className="mt-5 space-y-4">
                {lessonSections.map((lesson) => (
                  <div key={lesson.number} className="flex items-start gap-3">
                    <span className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${lesson.active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>{lesson.number}</span>
                    <div><p className="text-sm font-medium leading-6 text-slate-800">{lesson.title}</p><p className={`mt-1 text-xs ${lesson.active ? "text-emerald-600" : "text-slate-400"}`}>{lesson.active ? "当前学习" : lesson.href ? "已开放" : "待开发"}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">核心公式</h2>
              <div className="mt-4 border-b border-slate-100 pb-4"><p className="text-xs text-slate-500">点斜式</p><p className="mt-2 text-lg font-semibold text-blue-700">y − y₁ = k(x − x₁)</p></div>
              <div className="mt-4 border-b border-slate-100 pb-4"><p className="text-xs text-slate-500">斜截式</p><p className="mt-2 text-lg font-semibold text-blue-700">y = kx + b</p></div>
              <div className="mt-4"><p className="text-xs text-slate-500">一般式</p><p className="mt-2 text-lg font-semibold text-blue-700">Ax + By + C = 0</p></div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习建议</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先判断题目给出了哪些条件，再选择对应的方程形式。写完后可将已知点代回方程检查是否成立。</p>
              <a href="#lesson-quiz" className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700">前往课堂选择题 →</a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
