"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

/* 与高一课程一样：本节自测题、正文与交互直接维护在 page.tsx。 */
type QuizQuestion = {
  id: string;
  topic: string;
  title: string;
  question: string;
  formula?: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "g2-derivative-concept-01",
    topic: "导数的概念",
    title: "平均变化率",
    question: "f(x)=x² 在区间 [1，3] 上的平均变化率为：",
    options: [
    {
      key: "A",
      text: "2"
    },
    {
      key: "B",
      text: "4"
    },
    {
      key: "C",
      text: "6"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "B",
    explanation: "平均变化率为 (9−1)/(3−1)=4。"
  },
  {
    id: "g2-derivative-concept-02",
    topic: "导数的概念",
    title: "导数定义",
    question: "f(x)=x²，则 f′(2) 等于：",
    options: [
    {
      key: "A",
      text: "2"
    },
    {
      key: "B",
      text: "3"
    },
    {
      key: "C",
      text: "4"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "C",
    explanation: "差商 [(2+h)²−4]/h=4+h，h 趋近 0 时得到 4。"
  },
  {
    id: "g2-derivative-concept-03",
    topic: "导数的概念",
    title: "切线方程",
    question: "曲线 y=x² 在点 (1，1) 处的切线方程是：",
    options: [
    {
      key: "A",
      text: "y=x"
    },
    {
      key: "B",
      text: "y=2x+1"
    },
    {
      key: "C",
      text: "y=x+1"
    },
    {
      key: "D",
      text: "y=2x−1"
    }
  ],
    correctAnswer: "D",
    explanation: "切线斜率为 2，经过 (1，1)，故 y−1=2(x−1)，即 y=2x−1。"
  }
];

const lessonSections = [
  {
    number: "5.1",
    title: "导数的概念",
    href: "/grade2/derivatives/concept"
  },
  {
    number: "5.2",
    title: "导数的运算",
    href: "/grade2/derivatives/operations"
  },
  {
    number: "5.3",
    title: "导数在研究函数中的应用",
    href: "/grade2/derivatives/applications"
  }
];

export default function DerivativeConceptPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = quizQuestions.filter((question) => answers[question.id]).length;
  const score = quizQuestions.filter((question) => answers[question.id] === question.correctAnswer).length;

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600">首页</Link><span>/</span>
          <Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span>
          <Link href="/grade2/derivatives" className="hover:text-blue-600">导数及其应用</Link><span>/</span>
          <span className="text-slate-600">导数的概念</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 05</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 5.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">导数的概念</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">从平均变化率出发，理解瞬时变化率、导数与切线斜率，建立数与形的联系。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E7%9A%84%E6%A6%82%E5%BF%B5" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"计算平均变化率并理解增量的意义"}</li>
                <li>{"从割线极限理解导数及其几何意义"}</li>
                <li>{"求曲线上一点处的切线并区分导数与导函数"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"函数、直线斜率、二次函数与代数恒等变形。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 平均变化率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"函数自变量从 x₀ 变化到 x₀+h 时，函数值的增量为 f(x₀+h)−f(x₀)。两者增量的比值描述这段区间上的平均变化率，h 可以为正也可以为负，但不能为零。"}</p>
                  <Formula math={String.raw`\frac{\Delta y}{\Delta x}=\frac{f(x_0+h)-f(x_0)}{h},\qquad h\ne0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 从平均到瞬时"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"当 h 从正、负两侧趋近于 0 时，若平均变化率趋于同一个有限值，就把这个值称为 f 在 x₀ 处的导数。趋近过程中不能直接令分母 h=0。"}</p>
                  <Formula math={String.raw`f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"“h 趋近 0”不等于“h 等于 0”。有些点处的导数不存在，例如 f(x)=|x| 在原点两侧的变化率不同。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 用定义计算一个导数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"对 f(x)=x²，先展开差值，约去非零的 h，再令 h 趋近 0，得到 x₀ 处的导数为 2x₀。"}</p>
                  <Formula math={String.raw`\frac{(x_0+h)^2-x_0^2}{h}=2x_0+h\quad\Longrightarrow\quad f'(x_0)=2x_0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 切线斜率与方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"割线经过 P(x₀，f(x₀)) 和 Q(x₀+h，f(x₀+h))。当 Q 沿曲线趋近 P，割线的极限位置为切线；若导数存在，它就是切线的斜率。"}</p>
                  <Formula math={String.raw`y-f(x_0)=f'(x_0)(x-x_0)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"必须先确认切点坐标。切线可以与曲线在别处再次相交，不能用“仅一个交点”作为一般函数切线的定义。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 导数与导函数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"在一个区间内，每个 x 都对应一个导数值时，这些值组成新的函数 f′，称为导函数。f′(x₀) 是一个具体数，f′(x) 是随 x 变化的函数表达式。"}</p>
                  <Formula math={String.raw`f(x)=x^2,\qquad f'(x)=2x,\qquad f'(3)=6`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 实际意义与可导条件"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"路程或位置对时间的导数给出瞬时速度。解释导数时要结合变量单位。可导一定连续，连续却不一定可导；可导点处的导数按上述定义是有限的。"}</p>
                  <Formula math={String.raw`s(t)=t^2\quad\Longrightarrow\quad v(t)=s'(t)=2t`} />
                </article>
              </div>
            </section>
            <DerivativeFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"比较平均与瞬时变化率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"设 f(x)=x²，求区间 [1，3] 上的平均变化率及 x=1 处的导数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"平均变化率为 [f(3)−f(1)]/(3−1)=(9−1)/2=4。"}</li>
                      <li>{"x=1 处的差商为 [(1+h)²−1]/h=2+h。"}</li>
                      <li>{"令 h 趋近 0，得到瞬时变化率 2；它与整个区间的平均值不同。"}</li>
                    </ol>
                    <Formula math={String.raw`\overline{k}=4,\qquad f'(1)=2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"求曲线在指定点处的切线"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 y=x² 在点 (2，4) 处的切线方程。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"由 f′(x)=2x，得到切线斜率 f′(2)=4。"}</li>
                      <li>{"切线经过切点 (2，4)，使用点斜式。"}</li>
                      <li>{"y−4=4(x−2)，整理为 y=4x−4。"}</li>
                    </ol>
                    <Formula math={String.raw`y=4x-4`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"瞬时速度及单位"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某物体的位置 s(t)=t²+2t（米），t 以秒计，求 t=3 秒时的瞬时速度。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"差商为 [(t+h)²+2(t+h)−(t²+2t)]/h=2t+2+h。"}</li>
                      <li>{"h 趋近 0 得 v(t)=2t+2。"}</li>
                      <li>{"代入 t=3，速度为 8 米/秒。"}</li>
                    </ol>
                    <Formula math={String.raw`v(3)=8\ \mathrm{m/s}`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"平均变化率不能直接当作某个指定点的导数。"}</li>
              <li>{"求导数的差商中 h≠0，约分后才讨论 h 趋近 0。"}</li>
              <li>{"切线方程需要斜率与切点；求 f′(x₀) 时别遗漏代入。"}</li></ul></section>
            <section id="lesson-quiz" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KNOWLEDGE CHECK</p>
              <h2 className="mt-2 text-xl font-bold">课堂自测</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">共 {quizQuestions.length} 道单选题，全部作答后提交。本页显示自测成绩；登录后前往专题训练，可将答题记录和错题保存到账号。</p>
              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, questionIndex) => (
                  <fieldset key={question.id} className="min-w-0 rounded-xl border border-slate-200 p-4 sm:p-5" disabled={submitted}>
                    <legend className="px-2 text-sm font-semibold text-slate-800">{questionIndex + 1}. {question.title}</legend>
                    <p className="text-sm leading-7 text-slate-700">{question.question}</p>
                    {question.formula && <Formula math={question.formula} />}
                    <div className="mt-4 space-y-2">
                      {question.options.map((option) => {
                        const correct = option.key === question.correctAnswer;
                        const chosen = answers[question.id] === option.key;
                        const style = submitted && correct ? "border-emerald-300 bg-emerald-50" : submitted && chosen ? "border-red-300 bg-red-50" : chosen ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-300";
                        return (
                          <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 ${style} ${submitted ? "" : "cursor-pointer"}`}>
                            <input type="radio" name={question.id} value={option.key} checked={chosen} onChange={() => setAnswers((old) => ({ ...old, [question.id]: option.key }))} className="mt-1 accent-blue-600" />
                            <span className="flex-1 text-sm leading-6 text-slate-700">{option.key}. {option.text}</span>
                            {submitted && correct && <span className="text-xs font-medium text-emerald-700">正确答案</span>}
                          </label>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p className={`text-sm font-semibold ${answers[question.id] === question.correctAnswer ? "text-emerald-700" : "text-red-600"}`}>{answers[question.id] === question.correctAnswer ? "回答正确" : `回答错误，正确答案：${question.correctAnswer}`}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{question.explanation}</p>
                      </div>
                    )}
                  </fieldset>
                ))}
              </div>
              <div aria-live="polite" className="mt-6">
                {submitted ? (
                  <div className="rounded-xl bg-blue-50 p-5">
                    <p className="text-sm text-slate-600">本次自测成绩</p>
                    <p className="mt-2 text-3xl font-bold text-blue-700">{score}/{quizQuestions.length}</p>
                    <p className="mt-2 text-sm text-slate-600">正确率：{Math.round(score / quizQuestions.length * 100)}%</p>
                    <button type="button" onClick={resetQuiz} className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">重新作答</button>
                  </div>
                ) : (
                  <>
                    <p className="mb-3 text-sm text-slate-500">已完成 {answeredCount}/{quizQuestions.length} 道题</p>
                    <button type="button" disabled={answeredCount !== quizQuestions.length} onClick={() => setSubmitted(true)} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">提交答案</button>
                  </>
                )}
              </div>
            </section>
            <section id="summary" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-7"><h2 className="text-xl font-bold">本节小结</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"导数是平均变化率在增量趋近零时的有限极限。"}</li>
              <li>{"几何上，导数是相应切线的斜率。"}</li>
              <li>{"导函数 f′(x) 与某一点的导数值 f′(x₀) 含义不同。"}</li></ul><Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E7%9A%84%E6%A6%82%E5%BF%B5" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“导数的概念”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/sequences/induction" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：数学归纳法</Link>
              <Link href="/grade2/derivatives/operations" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：导数的运算 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第五章 · 导数及其应用</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "5.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "5.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "5.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
                  </Link>
                ))}
              </nav>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold">本节导航</h2>
              <nav aria-label="本节内容" className="mt-4 grid gap-3 text-sm text-slate-500">
                <a href="#knowledge" className="hover:text-blue-600">知识讲解 →</a>
                <a href="#explore" className="hover:text-blue-600">图形探索 →</a>
                <a href="#examples" className="hover:text-blue-600">典型例题 →</a>
                <a href="#lesson-quiz" className="hover:text-blue-600">课堂自测 →</a>
                <a href="#summary" className="hover:text-blue-600">本节小结 →</a>
              </nav>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Formula({ math }: { math: string }) {
  return <div className="mt-3 max-w-full overflow-x-auto rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-800"><BlockMath math={math} /></div>;
}

/* 本节交互图形：只对 SVG 输出取固定精度，计算保持原精度。 */
function DerivativeFigure() {
 const [position,setPosition]=useState(1);
 const [h,setH]=useState(1);
 const f=(x:number)=>x*x;
 const derivative=(x:number)=>2*x;
 const slope=(f(position+h)-f(position))/h;
 const sx=(x:number)=>Number((260+70*x).toFixed(3));
 const sy=(y:number)=>Number((180-18*y).toFixed(3));
 const curve=(fn:(x:number)=>number)=>Array.from({length:161},(_,i)=>{const x=-3+i*6/160;return `${sx(x)},${sy(fn(x))}`;}).join(' ');
 const tangent=(x:number)=>f(position)+derivative(position)*(x-position);
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE DERIVATIVE</p><h2 className="mt-2 text-xl font-bold">动手观察：割线趋近切线</h2><p className="mt-3 text-sm leading-7 text-slate-600">蓝色是 y=x²，橙色是切线，绿色虚线是割线。选择左右两侧的增量，观察 h 趋近零时的斜率。</p>

 <svg viewBox="0 0 520 360" role="img" aria-label="函数曲线与导数交互图" className="mt-5 w-full overflow-hidden rounded-xl bg-slate-50">{[-2,-1,0,1,2].map(i=><g key={i}><line x1={sx(i)} x2={sx(i)} y1="15" y2="345" stroke="#e2e8f0"/><text x={sx(i)} y="198" textAnchor="middle" fontSize="10" fill="#64748b">{i}</text></g>)}<path d="M20 180H500 M260 345V15" stroke="#94a3b8"/><text x="500" y="173" fontSize="12">x</text><text x="270" y="22" fontSize="12">y</text><polyline points={curve(f)} fill="none" stroke="#2563eb" strokeWidth="2.5"/>
 <line x1={sx(-3)} y1={sy(f(position)+slope*(-3-position))} x2={sx(3)} y2={sy(f(position)+slope*(3-position))} stroke="#059669" strokeDasharray="6 4"/><circle cx={sx(position+h)} cy={sy(f(position+h))} r="4" fill="#059669"/><text x={sx(position+h)+6} y={sy(f(position+h))-8} fontSize="11" fill="#047857">Q</text>
 <line x1={sx(-3)} y1={sy(tangent(-3))} x2={sx(3)} y2={sy(tangent(3))} stroke="#d97706" strokeWidth="1.5"/><circle cx={sx(position)} cy={sy(f(position))} r="4" fill="#2563eb"/><text x={sx(position)+6} y={sy(f(position))-8} fontSize="11" fill="#1d4ed8">P</text></svg>
 <label className="mt-5 block text-sm font-medium">切点横坐标 x₀：{position}<input aria-label="切点横坐标 x₀" type="range" min="-2" max="2" step="0.25" value={position} onChange={e=>setPosition(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>
 <label className="mt-4 block text-sm font-medium">增量 h<select aria-label="增量 h" value={h} onChange={e=>setH(Number(e.target.value))} className="ml-3 rounded-lg border border-slate-200 bg-white p-2">{[-1,-0.5,-0.1,-0.01,0.01,0.1,0.5,1].map(v=><option key={v} value={v}>{v}</option>)}</select></label>
 <div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>f({position}) = {Number(f(position).toFixed(3))}；f′({position}) = {Number(derivative(position).toFixed(3))}。</p><p>割线斜率 = {Number(slope.toFixed(3))}，与切线斜率之差 = {Number((slope-derivative(position)).toFixed(3))}。增量 h 不能取 0。</p></div></section>;
}
