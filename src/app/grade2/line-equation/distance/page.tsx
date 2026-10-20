"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";

type Option = { key: string; text: string };
type QuizQuestion = {
  id: string;
  title: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: ReactNode;
};

/** 用 SVG 绘制根号钩，并让被开方数的上横线与根号顶端自然衔接。 */
function Radical({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-start align-middle whitespace-nowrap ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 32"
        className="h-[1.12em] w-[0.62em] shrink-0 overflow-visible text-current"
        fill="none"
      >
        <path
          d="M1 17 L5 24 L13 3"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="-ml-[0.07em] mt-[0.075em] inline-block min-w-[0.3em] border-t-2 border-current px-[0.035em] pt-[0.055em] leading-tight">
        {children}
      </span>
    </span>
  );
}

/** 竖排分数：避免使用斜杠时，分子、分母和根号挤在同一条基线上。 */
function Fraction({
  numerator,
  denominator,
  className = "",
}: {
  numerator: ReactNode;
  denominator: ReactNode;
  className?: string;
}) {
  return (
    <span className={`mx-[0.08em] inline-flex translate-y-[0.12em] flex-col items-center justify-center whitespace-nowrap text-center align-middle leading-none ${className}`}>
      <span className="border-b border-current px-[0.12em] pb-[0.13em]">{numerator}</span>
      <span className="pt-[0.13em]">{denominator}</span>
    </span>
  );
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "distance-001",
    title: "两点间距离的计算",
    question: "坐标平面内，点 A(2, −1)、B(−2, 2) 之间的距离是：",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "√13" },
    ],
    answer: "C",
    explanation: (
      <>
        由两点间距离公式，AB = <Radical>(−2 − 2)² + (2 − (−1))²</Radical> =
        <Radical>16 + 9</Radical> = 5，选 C。
      </>
    ),
  },
  {
    id: "distance-002",
    title: "点到直线的距离",
    question: "点 P(−1, 2) 到直线 3x + 4y + 1 = 0 的距离是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "6/5" },
      { key: "C", text: "2" },
      { key: "D", text: "6" },
    ],
    answer: "B",
    explanation: (
      <>
        代入点到直线距离公式，d = <Fraction numerator="|3×(−1) + 4×2 + 1|" denominator={<Radical>3² + 4²</Radical>} /> = <Fraction numerator="6" denominator="5" />，选 B。
      </>
    ),
  },
  {
    id: "distance-003",
    title: "平行直线间的距离",
    question: "两条平行直线 3x + 4y − 2 = 0 与 3x + 4y + 8 = 0 之间的距离是：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "5" },
      { key: "C", text: "10" },
      { key: "D", text: "10/7" },
    ],
    answer: "A",
    explanation: (
      <>
        两条平行直线的系数对应相同，距离 d = <Fraction numerator="|8 − (−2)|" denominator={<Radical>3² + 4²</Radical>} /> = 10/5 = 2，选 A。
      </>
    ),
  },
];

const lessonSections = [
  { number: "1.1", title: "直线的斜率与倾斜角", href: "/grade2/line-equation/slope-angle", status: "已开发" },
  { number: "1.2", title: "直线的方程", href: "/grade2/line-equation/equation", status: "已开发" },
  { number: "1.3", title: "两条直线的平行与垂直", href: "/grade2/line-equation/parallel-perpendicular", status: "已开发" },
  { number: "1.4", title: "两条直线的交点", href: "/grade2/line-equation/intersection", status: "已开发" },
  { number: "1.5", title: "平面上的距离", href: "/grade2/line-equation/distance", status: "当前学习" },
];

export default function DistancePage() {
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
          <span className="text-slate-700">平面上的距离</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 01</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 1.5</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">平面上的距离</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            利用坐标和直线方程，把平面几何中的距离问题转化为代数计算。本节学习两点间距离、点到直线的距离，以及两条平行直线之间的距离。
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
                <li>• 掌握平面内两点间距离公式，并能根据坐标求距离。</li>
                <li>• 掌握点到直线距离公式，理解公式中分母的意义。</li>
                <li>• 能够求两条平行直线之间的距离。</li>
                <li>• 能根据题目条件选择合适的距离公式，并注意直线方程的形式。</li>
              </ul>
            </section>

            <section id="knowledge" className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE CONCEPTS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">二、两点间的距离</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                在平面直角坐标系中，设 A(x₁, y₁)、B(x₂, y₂)，连接两点后可以构成直角三角形。横坐标之差和纵坐标之差分别对应两条直角边，因此可利用勾股定理求出 AB。
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-center">
                <p className="text-sm text-slate-500">两点间距离公式</p>
                <p className="mt-3 flex flex-wrap items-center justify-center gap-1 text-xl font-semibold text-blue-700">
                  AB = <Radical>(x₂ − x₁)² + (y₂ − y₁)²</Radical>
                </p>
              </div>
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-3 sm:p-5">
                <svg viewBox="0 0 420 250" role="img" aria-label="两点间距离示意图" className="mx-auto block w-full max-w-lg">
                  <defs><marker id="distance-axis-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b" /></marker></defs>
                  <line x1="35" y1="210" x2="390" y2="210" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#distance-axis-arrow)" />
                  <line x1="65" y1="230" x2="65" y2="22" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#distance-axis-arrow)" />
                  <line x1="115" y1="175" x2="315" y2="65" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  <line x1="115" y1="175" x2="315" y2="175" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="315" y1="175" x2="315" y2="65" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 5" />
                  <circle cx="115" cy="175" r="4" fill="#2563eb" /><circle cx="315" cy="65" r="4" fill="#2563eb" />
                  <text x="97" y="195" fontSize="14" fill="#1d4ed8">A(x₁,y₁)</text>
                  <text x="320" y="60" fontSize="14" fill="#1d4ed8">B(x₂,y₂)</text>
                  <text x="205" y="162" fontSize="13" fill="#64748b">x₂ − x₁</text>
                  <text x="325" y="125" fontSize="13" fill="#64748b">y₂ − y₁</text>
                  <text x="394" y="214" fontSize="13" fill="#475569">x</text><text x="52" y="18" fontSize="13" fill="#475569">y</text>
                  <text x="190" y="100" fontSize="14" fill="#2563eb">AB</text>
                </svg>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">使用时先分别计算横坐标差和纵坐标差，再平方、相加并开平方。坐标差的顺序可以互换，但同一差值中的两个坐标必须保持一致。</div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KEY FORMULAS</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">三、点到直线的距离</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                点 P(x₀, y₀) 到直线的距离，指从点 P 向直线作垂线时，垂线段的长度。若直线写成一般式 Ax + By + C = 0，且 A、B 不同时为 0，则距离公式为：
              </p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-center">
                <p className="text-sm text-slate-500">点到直线距离公式</p>
                <p className="mt-3 flex flex-wrap items-center justify-center gap-1 text-xl font-semibold text-blue-700">
                  d = <Fraction numerator="|Ax₀ + By₀ + C|" denominator={<Radical>A² + B²</Radical>} />
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">使用公式时注意</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-amber-900/80">
                  <li>• 直线应先整理成 Ax + By + C = 0 的形式。</li>
                  <li>• 分子要取绝对值，距离不能为负数。</li>
                  <li>• 分母是 A² + B² 的平方根，不能漏掉开平方这一步。</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">PARALLEL LINES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">四、两条平行直线间的距离</h2>
              <p className="mt-4 text-sm leading-8 text-slate-600">若两条不同的平行直线写成相同的 A、B 系数形式 Ax + By + C₁ = 0 和 Ax + By + C₂ = 0，则它们之间的距离为：</p>
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-center">
                <p className="flex flex-wrap items-center justify-center gap-1 text-xl font-semibold text-blue-700">
                  d = <Fraction numerator="|C₁ − C₂|" denominator={<Radical>A² + B²</Radical>} />
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">计算前要先确认两条直线平行，并将 x、y 的系数整理成完全相同的 A、B。若两式的系数不一致，应先对方程作等比例变形，再使用公式。</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">五、典型例题</h2>
              <div className="mt-5 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 1：求两点间的距离</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">已知 A(1, 2)、B(4, 6)，求 AB 的长度。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-8 text-slate-600">
                  AB = <Radical>(4 − 1)² + (6 − 2)²</Radical> = <Radical>9 + 16</Radical> = 5。
                  因此 AB = 5。
                </p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 2：求点到直线的距离</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求点 P(1, 1) 到直线 3x + 4y − 10 = 0 的距离。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-8 text-slate-600">
                  d = <Fraction numerator="|3×1 + 4×1 − 10|" denominator={<Radical>3² + 4²</Radical>} /> = <Fraction numerator="3" denominator="5" />。
                  因此距离为 3/5。
                </p></details>
              </div>
              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">例题 3：求平行直线间的距离</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">求直线 2x − y + 1 = 0 与 2x − y − 5 = 0 之间的距离。</p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4"><summary className="cursor-pointer text-sm font-medium text-blue-700">查看解答</summary><p className="mt-3 text-sm leading-8 text-slate-600">
                  两条直线的 x、y 系数相同，距离 d = <Fraction numerator="|1 − (−5)|" denominator={<Radical>2² + (−1)²</Radical>} /> = <Fraction numerator="6" denominator={<Radical>5</Radical>} />。
                  因此两直线间的距离为 <Fraction numerator="6" denominator={<Radical>5</Radical>} />。
                </p></details>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">AFTER-CLASS PRACTICE</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">六、课后练习</h2>
              <div className="mt-5 space-y-5">
                <div><p className="font-medium leading-7 text-slate-800">1. 求点 A(0, 0) 与 B(6, 8) 之间的距离。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-8 text-slate-600">AB = <Radical>6² + 8²</Radical> = <Radical>100</Radical> = 10。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">2. 求点 P(2, −1) 到直线 x − 2y + 4 = 0 的距离。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-8 text-slate-600">d = <Fraction numerator="|2 − 2×(−1) + 4|" denominator={<Radical>1² + (−2)²</Radical>} /> = <Fraction numerator="8" denominator={<Radical>5</Radical>} />。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">3. 求直线 5x + 12y − 3 = 0 与 5x + 12y + 23 = 0 之间的距离。</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-8 text-slate-600">d = <Fraction numerator="|−3 − 23|" denominator={<Radical>5² + 12²</Radical>} /> = 26/13 = 2。</p></details></div>
                <div><p className="font-medium leading-7 text-slate-800">4. 点 P 到直线 Ax + By + C = 0 的距离为 0，说明什么？</p><details className="mt-2"><summary className="cursor-pointer text-sm text-blue-600">查看答案与解析</summary><p className="mt-2 text-sm leading-7 text-slate-600">说明 Ax₀ + By₀ + C = 0，即点 P 的坐标满足直线方程，所以点 P 在这条直线上。</p></details></div>
              </div>
            </section>

            <section id="lesson-quiz" className="scroll-mt-6 rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KNOWLEDGE CHECK</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">七、课堂选择题</h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">共 3 道单项选择题。完成全部题目后提交，即可查看成绩和解析。</p>
              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, index) => (
                  <article key={question.id} className="rounded-xl border border-slate-100 p-4 sm:p-5">
                    <div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">{index + 1}</span><div className="min-w-0 flex-1"><h3 className="font-semibold leading-7 text-slate-900">{question.title}</h3><p className="mt-2 text-sm leading-7 text-slate-700">{question.question}</p></div></div>
                    <div className="mt-4 space-y-2">
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.key;
                        const isCorrect = option.key === question.answer;
                        let optionStyle = "border-slate-200 bg-white hover:border-blue-300";
                        if (submitted && isCorrect) optionStyle = "border-emerald-300 bg-emerald-50";
                        else if (submitted && selected && !isCorrect) optionStyle = "border-red-300 bg-red-50";
                        else if (selected) optionStyle = "border-blue-500 bg-blue-50";
                        return <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 transition ${optionStyle} ${submitted ? "cursor-default" : "cursor-pointer"}`}><input type="radio" name={question.id} value={option.key} checked={selected} disabled={submitted} onChange={() => setAnswers((previous) => ({ ...previous, [question.id]: option.key }))} className="mt-1 accent-blue-600" /><span className="flex-1 text-sm leading-6 text-slate-700">
                          {option.key}. {option.text.startsWith("√") ? <Radical>{option.text.slice(1)}</Radical> : option.text}
                        </span>{submitted && isCorrect && <span className="shrink-0 text-xs font-medium text-emerald-700">正确答案</span>}</label>;
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
              <h2 className="mt-2 text-xl font-bold text-slate-900">八、本节小结</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 两点间距离：AB = <Radical>(x₂ − x₁)² + (y₂ − y₁)²</Radical>。</li>
                <li>• 点到直线距离：d = <Fraction numerator="|Ax₀ + By₀ + C|" denominator={<Radical>A² + B²</Radical>} />。</li>
                <li>• 平行直线间距离：d = <Fraction numerator="|C₁ − C₂|" denominator={<Radical>A² + B²</Radical>} />，使用前要统一 x、y 系数。</li>
                <li>• 距离始终非负；点到直线距离为 0，表示点在直线上。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/grade2/line-equation/intersection" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200">← 上一节：两条直线的交点</Link>
              <Link href="/grade2/circle-equation" className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700">下一章：圆与方程 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold text-slate-900">本章学习路线</h2>
              <div className="mt-5 space-y-4">
                {lessonSections.map((lesson) => <div key={lesson.number} className="flex items-start gap-3"><span className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${lesson.number === "1.5" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>{lesson.number}</span><div><Link href={lesson.href} className={`text-sm font-medium leading-6 ${lesson.number === "1.5" ? "text-blue-700" : "text-slate-800 hover:text-blue-600"}`}>{lesson.title}</Link><p className={`mt-1 text-xs ${lesson.number === "1.5" ? "text-emerald-600" : "text-slate-400"}`}>{lesson.status}</p></div></div>)}
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">核心公式</h2>
              <div className="mt-4 border-b border-slate-100 pb-4">
                <p className="text-xs text-slate-500">两点间距离</p>
                <p className="mt-2 flex flex-wrap items-center gap-1 text-sm font-semibold text-blue-700">AB = <Radical>(x₂ − x₁)² + (y₂ − y₁)²</Radical></p>
              </div>
              <div className="mt-4 border-b border-slate-100 pb-4">
                <p className="text-xs text-slate-500">点到直线距离</p>
                <p className="mt-2 flex flex-wrap items-center gap-1 text-sm font-semibold text-blue-700">d = <Fraction numerator="|Ax₀ + By₀ + C|" denominator={<Radical>A² + B²</Radical>} /></p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-slate-500">平行直线间距离</p>
                <p className="mt-2 flex flex-wrap items-center gap-1 text-sm font-semibold text-blue-700">d = <Fraction numerator="|C₁ − C₂|" denominator={<Radical>A² + B²</Radical>} /></p>
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习建议</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先判断题目要求的是哪一种距离，再选择对应公式。点到直线及平行直线距离题中，尤其要检查直线方程是否已经整理成一般式。</p>
              <a href="#lesson-quiz" className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700">前往课堂选择题 →</a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
