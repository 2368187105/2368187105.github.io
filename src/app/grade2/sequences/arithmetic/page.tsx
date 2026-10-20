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
    id: "g2-arithmetic-01",
    topic: "等差数列",
    title: "通项计算",
    question: "等差数列 a₁=3，d=2，则 a₁₀ 等于：",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "21"
    },
    {
      key: "C",
      text: "23"
    },
    {
      key: "D",
      text: "18"
    }
  ],
    correctAnswer: "B",
    explanation: "a₁₀=3+(10−1)×2=21。"
  },
  {
    id: "g2-arithmetic-02",
    topic: "等差数列",
    title: "前 n 项和",
    question: "等差数列 a₁=2，d=3，前 8 项和为：",
    options: [
    {
      key: "A",
      text: "92"
    },
    {
      key: "B",
      text: "96"
    },
    {
      key: "C",
      text: "100"
    },
    {
      key: "D",
      text: "104"
    }
  ],
    correctAnswer: "C",
    explanation: "a₈=2+7×3=23，S₈=8×(2+23)/2=100。"
  },
  {
    id: "g2-arithmetic-03",
    topic: "等差数列",
    title: "下标和性质",
    question: "等差数列中 a₃+a₇=20，则 a₅ 等于：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "8"
    },
    {
      key: "C",
      text: "20"
    },
    {
      key: "D",
      text: "10"
    }
  ],
    correctAnswer: "D",
    explanation: "3+7=5+5，因此 2a₅=20，a₅=10。"
  }
];

const lessonSections = [
  {
    number: "4.1",
    title: "数列",
    href: "/grade2/sequences/concept"
  },
  {
    number: "4.2",
    title: "等差数列",
    href: "/grade2/sequences/arithmetic"
  },
  {
    number: "4.3",
    title: "等比数列",
    href: "/grade2/sequences/geometric"
  },
  {
    number: "4.4",
    title: "数学归纳法",
    href: "/grade2/sequences/induction"
  }
];

export default function ArithmeticPage() {
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
          <Link href="/grade2/sequences" className="hover:text-blue-600">数列</Link><span>/</span>
          <span className="text-slate-600">等差数列</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 04</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 4.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">等差数列</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用恒定的相邻差刻画等差数列，掌握通项、前 n 项和及常见性质。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解公差与等差中项"}</li>
                <li>{"推导并应用通项公式和求和公式"}</li>
                <li>{"运用下标和相等性质与符号变化解决问题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"数列的通项、递推与前 n 项和。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 定义与公差"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从第二项起，每一项与它前一项的差都等于同一个常数，这样的数列叫等差数列。这个常数叫公差 d，可以为正、负或零。"}</p>
                  <Formula math={String.raw`a_{n+1}-a_n=d\quad(n\ge1)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 通项公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从首项到第 n 项经过 n−1 次相邻变化，每次增加 d。已知任意第 m 项时，也能沿下标差求出第 n 项。"}</p>
                  <Formula math={String.raw`a_n=a_1+(n-1)d=a_m+(n-m)d`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 等差中项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 a、A、b 成等差数列，A 是 a 与 b 的等差中项。相邻三项中，中间一项等于两边两项的算术平均数。"}</p>
                  <Formula math={String.raw`A=\frac{a+b}{2},\qquad 2a_n=a_{n-1}+a_{n+1}\ (n\ge2)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 前 n 项和"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"将前 n 项正序与倒序相加，每一组都是首末两项之和，共有 n 组，再除以 2，得到求和公式。"}</p>
                  <Formula math={String.raw`S_n=\frac{n(a_1+a_n)}2=na_1+\frac{n(n-1)}2d`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 下标和相等性质"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"等差数列中，若两组下标和相等，则对应两项的和也相等。这来自通项中对下标的一次关系。所有下标都必须在数列的定义范围内。"}</p>
                  <Formula math={String.raw`i+j=k+l\quad\Longrightarrow\quad a_i+a_j=a_k+a_l`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 单调性与部分和最值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"d>0 时递增，d<0 时递减。求部分和最值时，可以结合每一项的正负判断，也可以将 Sₙ 写成关于 n 的二次式后比较相邻正整数。"}</p>
                  <Formula math={String.raw`S_{n+1}-S_n=a_{n+1}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"项数只能取正整数。若某一项为零，两个相邻的部分和可能取得同一最值。"}</p>
                </article>
              </div>
            </section>
            <SequenceFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"由两项求通项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"等差数列满足 a₃=7、a₈=22，求通项。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"a₈−a₃=5d=15，得 d=3。"}</li>
                      <li>{"a₁=a₃−2d=1。"}</li>
                      <li>{"代入通项公式 aₙ=1+3(n−1)。"}</li>
                    </ol>
                    <Formula math={String.raw`a_n=3n-2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"计算前 n 项和"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求等差数列 3、7、11、… 的前 20 项和。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"首项 3，公差 4。"}</li>
                      <li>{"第 20 项为 3+19×4=79。"}</li>
                      <li>{"S₂₀=20×(3+79)/2=820。"}</li>
                    </ol>
                    <Formula math={String.raw`S_{20}=820`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"部分和最大值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"已知 aₙ=13−2n，求 Sₙ 的最大值及对应 n。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"a₆=1>0，a₇=−1<0，数列递减。"}</li>
                      <li>{"前 6 项加入的都是正数，从第 7 项开始加入负数。"}</li>
                      <li>{"因此 S₆ 最大，等于 6×(11+1)/2=36。"}</li>
                    </ol>
                    <Formula math={String.raw`\max_{n\ge1}S_n=S_6=36`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"第 n 项比首项多了 n−1 个公差。"}</li>
              <li>{"求和公式中的 n 是所加的项数，要与末项下标对应。"}</li>
              <li>{"部分和最值不能只看二次函数实数顶点，还要比较允许的整数。"}</li></ul></section>
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
              <li>{"等差数列的本质是相邻差恒定。"}</li>
              <li>{"通项是关于 n 的一次式或常数，求和可用首末配对。"}</li>
              <li>{"利用下标和性质及项的符号可以简化计算。"}</li></ul><Link href="/practice?topic=%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“等差数列”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/sequences/concept" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：数列</Link>
              <Link href="/grade2/sequences/geometric" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：等比数列 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第四章 · 数列</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "4.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "4.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "4.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互图形：坐标固定精度，保持预渲染与浏览器一致。 */
function SequenceFigure() {
 const [n,setN]=useState(6);
 const [parameter,setParameter]=useState(2);
 const values=Array.from({length:n},(_,i)=>2+i*parameter);
 const sum=values.reduce((a,b)=>a+b,0);
 const low=Math.min(0,...values),high=Math.max(1,...values);
 const y=(v:number)=>Number((240-(v-low)/(high-low)*210).toFixed(3));
 const x=(i:number)=>40+i*430/11;
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE PATTERN</p><h2 className="mt-2 text-xl font-bold">动手观察：相邻差与部分和</h2><p className="mt-3 text-sm leading-7 text-slate-600">固定首项为 2，改变公差 d和显示项数。每个点对应一个正整数下标，纵轴随数据自动缩放。</p><svg viewBox="0 0 520 280" role="img" aria-label="数列前 n 项离散图象" className="mt-5 w-full rounded-xl bg-slate-50"><line x1="25" x2="500" y1={y(0)} y2={y(0)} stroke="#94a3b8" /><line x1="25" x2="25" y1="15" y2="255" stroke="#94a3b8" />{values.map((v,i)=><g key={i}><line x1={x(i)} x2={x(i)} y1={y(0)} y2={y(v)} stroke="#bfdbfe" strokeWidth="2" /><circle cx={x(i)} cy={y(v)} r="4" fill="#2563eb" /><text x={x(i)} y="270" textAnchor="middle" fontSize="11" fill="#64748b">{i+1}</text><text x={x(i)} y={y(v)-8} textAnchor="middle" fontSize="10" fill="#1d4ed8">{Number(v.toFixed(2))}</text></g>)}<text x="500" y="270" fontSize="11">n</text></svg><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">显示项数 n：{n}<input aria-label="显示项数 n" type="range" min="2" max="12" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label><label className="text-sm font-medium">公差 d：{parameter}<input aria-label="公差 d" type="range" min="-3" max="3" step="0.5" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>aₙ = 2+(n−1)d；当前 a{n} = {Number(values[n-1].toFixed(3))}，S{n} = {Number(sum.toFixed(3))}。</p><p>相邻两项之差均为 {parameter}，首项为 2。</p></div></section>;
}
