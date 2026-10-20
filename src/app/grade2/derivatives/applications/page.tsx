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
    id: "g2-derivative-applications-01",
    topic: "导数在研究函数中的应用",
    title: "导数判断单调性",
    question: "f(x)=x³−3x 的递减区间是：",
    options: [
    {
      key: "A",
      text: "(−∞，−1)"
    },
    {
      key: "B",
      text: "(−1，1)"
    },
    {
      key: "C",
      text: "(1，+∞)"
    },
    {
      key: "D",
      text: "(−∞，+∞)"
    }
  ],
    correctAnswer: "B",
    explanation: "f′(x)=3(x²−1)<0 的解为 −1<x<1，故递减区间为 (−1，1)。"
  },
  {
    id: "g2-derivative-applications-02",
    topic: "导数在研究函数中的应用",
    title: "零导数与极值",
    question: "关于 f(x)=x³ 在 x=0 处，下列说法正确的是：",
    options: [
    {
      key: "A",
      text: "取得极大值"
    },
    {
      key: "B",
      text: "取得极小值"
    },
    {
      key: "C",
      text: "导数为零但不取得极值"
    },
    {
      key: "D",
      text: "导数不存在"
    }
  ],
    correctAnswer: "C",
    explanation: "f′(0)=0，但函数在原点两侧都递增，导数不变号，因此没有极值。"
  },
  {
    id: "g2-derivative-applications-03",
    topic: "导数在研究函数中的应用",
    title: "闭区间最值",
    question: "f(x)=x³−3x 在 [0，2] 上的最小值为：",
    options: [
    {
      key: "A",
      text: "0"
    },
    {
      key: "B",
      text: "2"
    },
    {
      key: "C",
      text: "−1"
    },
    {
      key: "D",
      text: "−2"
    }
  ],
    correctAnswer: "D",
    explanation: "区间内驻点为 x=1。比较 f(0)=0、f(1)=−2、f(2)=2，得最小值 −2。"
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

export default function DerivativeApplicationsPage() {
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
          <span className="text-slate-600">导数在研究函数中的应用</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 05</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 5.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">导数在研究函数中的应用</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">利用导数判断单调性、研究极值与最值，并建立简单的实际优化模型。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"根据导数符号划分函数的单调区间"}</li>
                <li>{"通过导数符号变化判断极大值与极小值"}</li>
                <li>{"比较驻点与端点求闭区间最值，解决简单优化问题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"函数单调性与最值、导数运算、解不等式。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 导数符号与单调性"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"在某个区间内可导时，若导数处处为正，函数严格递增；若导数处处为负，函数严格递减。导数恒为零则函数为常数。应用前应确认定义域和区间。"}</p>
                  <Formula math={String.raw`f'(x)>0\Rightarrow f\text{ 在该区间递增},\qquad f'(x)<0\Rightarrow f\text{ 在该区间递减}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"严格递增函数在个别点的导数可以为零，例如 x³ 在原点的导数为 0。不能由 f′(x₀)=0 单独判断单调性。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 求单调区间的步骤"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"先找定义域，再求导，解出导数为零的点，并结合导数不存在的点及定义域边界划分区间，逐段判断符号。不同区间之间不能随意合并。"}</p>
                  <Formula math={String.raw`f(x)=x^3-3x,\qquad f'(x)=3(x-1)(x+1)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 极值是局部性质"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若一个内点附近的函数值都不大于该点的函数值，则此点为极大值点；都不小于则为极小值点。极值与全局最值不是同一概念，极值点是自变量位置，极值是函数值。"}</p>
                  <Formula math={String.raw`f(x_0)\text{ 是极值},\qquad x_0\text{ 是极值点}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 导数变号判别极值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"对可导函数，若导数在 x₀ 左侧为正、右侧为负，则 x₀ 处取得极大值；由负变正则取得极小值。若左右不变号，仅导数为零不能推出有极值。"}</p>
                  <Formula math={String.raw`+\ \longrightarrow\ -:\text{极大值};\qquad -\ \longrightarrow\ +:\text{极小值}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"f(x)=x³ 在 0 处导数为 0，但左右都递增，因此 0 不是极值点。不可导点也可能有极值，例如 |x| 的原点。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 闭区间最值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"连续函数在闭区间上能取得最大值与最小值。若区间内可导，可以找出导数为零的内点，连同两个端点一起比较函数值；若有不可导内点也要纳入候选。"}</p>
                  <Formula math={String.raw`\max_{x\in[a,b]}f(x),\qquad\min_{x\in[a,b]}f(x)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"只比较极值会漏掉端点。开区间或无界区间上，不能未经检查就断言存在最大值、最小值。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 实际优化问题"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"先选自变量并写出取值范围，把目标量化成一个函数，再通过导数符号或候选值比较求最优值，最后把结果解释为实际问题中的量并带上单位。"}</p>
                  <Formula math={String.raw`\text{建模}\ \longrightarrow\ \text{定义域}\ \longrightarrow\ \text{求导与比较}\ \longrightarrow\ \text{实际结论}`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"单调区间与极值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"研究 f(x)=x³−3x 的单调性和极值。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"f′(x)=3(x−1)(x+1)，驻点为 −1、1。"}</li>
                      <li>{"导数在 (−∞，−1) 与 (1，+∞) 为正，在 (−1，1) 为负。"}</li>
                      <li>{"x=−1 处由增转减，极大值 f(−1)=2；x=1 处由减转增，极小值 f(1)=−2。"}</li>
                    </ol>
                    <Formula math={String.raw`f(-1)=2\ (\text{极大值}),\qquad f(1)=-2\ (\text{极小值})`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"闭区间比较端点"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 f(x)=x³−3x 在 [−2，2] 上的最大值与最小值。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"区间内驻点为 −1、1，候选位置为 −2、−1、1、2。"}</li>
                      <li>{"相应函数值依次为 −2、2、−2、2。"}</li>
                      <li>{"最大值为 2，在 x=−1、2 取得；最小值为 −2，在 x=−2、1 取得。"}</li>
                    </ol>
                    <Formula math={String.raw`\max_{[-2,2]}f=2,\qquad\min_{[-2,2]}f=-2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"矩形面积优化"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"用长 20 米的围栏围成矩形，求最大面积及对应边长。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"设一边长为 x 米，另一边为 10−x 米，取 0<x<10。"}</li>
                      <li>{"面积 A(x)=x(10−x)，A′(x)=10−2x。"}</li>
                      <li>{"0<x<5 时导数为正，5<x<10 时为负，因此 x=5 取得最大面积 25 平方米，矩形为正方形。"}</li>
                    </ol>
                    <Formula math={String.raw`A_{\max}=25\ \mathrm{m}^2,\qquad x=5\ \mathrm m`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"先写定义域，单调区间不能跨过函数未定义的点。"}</li>
              <li>{"导数为零只是可导内点取得极值的必要条件之一，不是充分条件。"}</li>
              <li>{"极大值未必是全局最大值；闭区间最值务必检查端点。"}</li></ul></section>
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
              <li>{"导数的符号决定相应区间内函数的变化趋势。"}</li>
              <li>{"极值判别重在左右变号，不能只看导数是否为零。"}</li>
              <li>{"最值问题要结合定义域、驻点、不可导点和端点比较。"}</li></ul><Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“导数在研究函数中的应用”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/derivatives/operations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：导数的运算</Link>
              <Link href="/grade2/spatial-vectors/operations" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一章：空间向量与立体几何 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第五章 · 导数及其应用</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "5.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "5.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "5.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
 const [position,setPosition]=useState(0);
 const f=(x:number)=>x*x*x-3*x;
 const derivative=(x:number)=>3*x*x-3;
 const sx=(x:number)=>Number((260+70*x).toFixed(3));
 const sy=(y:number)=>Number((180-22*y).toFixed(3));
 const curve=(fn:(x:number)=>number)=>Array.from({length:161},(_,i)=>{const x=-3+i*6/160;return `${sx(x)},${sy(fn(x))}`;}).join(' ');
 const tangent=(x:number)=>f(position)+derivative(position)*(x-position);
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE DERIVATIVE</p><h2 className="mt-2 text-xl font-bold">动手观察：导数符号与极值</h2><p className="mt-3 text-sm leading-7 text-slate-600">蓝色是 f(x)=x³−3x，绿色虚线是 f′(x)=3x²−3。观察导数过零时是否变号，以及对应的函数增减。</p>

 <svg viewBox="0 0 520 360" role="img" aria-label="函数曲线与导数交互图" className="mt-5 w-full overflow-hidden rounded-xl bg-slate-50">{[-2,-1,0,1,2].map(i=><g key={i}><line x1={sx(i)} x2={sx(i)} y1="15" y2="345" stroke="#e2e8f0"/><text x={sx(i)} y="198" textAnchor="middle" fontSize="10" fill="#64748b">{i}</text></g>)}<path d="M20 180H500 M260 345V15" stroke="#94a3b8"/><text x="500" y="173" fontSize="12">x</text><text x="270" y="22" fontSize="12">y</text><polyline points={curve(f)} fill="none" stroke="#2563eb" strokeWidth="2.5"/>
 <polyline points={curve(derivative)} fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="6 4"/>
 <line x1={sx(-3)} y1={sy(tangent(-3))} x2={sx(3)} y2={sy(tangent(3))} stroke="#d97706" strokeWidth="1.5"/><circle cx={sx(position)} cy={sy(f(position))} r="4" fill="#2563eb"/><text x={sx(position)+6} y={sy(f(position))-8} fontSize="11" fill="#1d4ed8">P</text></svg>
 <label className="mt-5 block text-sm font-medium">切点横坐标 x₀：{position}<input aria-label="切点横坐标 x₀" type="range" min="-2" max="2" step="0.25" value={position} onChange={e=>setPosition(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>

 <div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>f({position}) = {Number(f(position).toFixed(3))}；f′({position}) = {Number(derivative(position).toFixed(3))}。</p><p>{derivative(position)>0?"当前位置导数为正，函数局部递增。":derivative(position)<0?"当前位置导数为负，函数局部递减。":"当前位置导数为零。x=−1 处由增转减，x=1 处由减转增。"}</p></div></section>;
}
