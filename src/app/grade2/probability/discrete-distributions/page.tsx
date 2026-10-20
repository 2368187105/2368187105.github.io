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
    id: "g2-probability-discrete-01",
    topic: "离散型随机变量及其分布列",
    title: "概率归一",
    question: "随机变量 X 取 0、1、2，相应概率为 0.2、0.3、p，则 p 为：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.2"
    },
    {
      key: "C",
      text: "0.3"
    },
    {
      key: "D",
      text: "0.6"
    }
  ],
    correctAnswer: "A",
    explanation: "所有概率之和为 1，因此 p=1−0.2−0.3=0.5。"
  },
  {
    id: "g2-probability-discrete-02",
    topic: "离散型随机变量及其分布列",
    title: "计算期望",
    question: "P(X=0)=0.8，P(X=10)=0.2，则 E(X) 为：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "2"
    },
    {
      key: "C",
      text: "10"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "B",
    explanation: "期望为 0×0.8+10×0.2=2。"
  },
  {
    id: "g2-probability-discrete-03",
    topic: "离散型随机变量及其分布列",
    title: "二项分布方差",
    question: "若 X~B(4，0.5)，则 D(X) 为：",
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
      text: "1"
    },
    {
      key: "D",
      text: "0.5"
    }
  ],
    correctAnswer: "C",
    explanation: "二项分布方差为 np(1−p)=4×0.5×0.5=1。"
  }
];

const lessonSections = [
  {
    number: "8.1",
    title: "条件概率",
    href: "/grade2/probability/conditional"
  },
  {
    number: "8.2",
    title: "离散型随机变量及其分布列",
    href: "/grade2/probability/discrete-distributions"
  },
  {
    number: "8.3",
    title: "正态分布",
    href: "/grade2/probability/normal-distribution"
  }
];

export default function DiscreteDistributionsPage() {
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
          <Link href="/grade2/probability" className="hover:text-blue-600">概率</Link><span>/</span>
          <span className="text-slate-600">离散型随机变量及其分布列</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 08</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 8.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">离散型随机变量及其分布列</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用分布列描述随机变量，计算期望与方差，认识两点分布、二项分布和不放回抽样。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%A6%BB%E6%95%A3%E5%9E%8B%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F%E5%8F%8A%E5%85%B6%E5%88%86%E5%B8%83%E5%88%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"正确建立随机变量及分布列，检查概率归一"}</li>
                <li>{"计算期望与方差并解释含义"}</li>
                <li>{"辨认独立重复试验的二项分布，区分不放回抽样"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"概率乘法、组合数与求和运算。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 随机变量与分布列"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"随机变量把试验结果对应为实数。取值为有限或可列无穷多个实数的，称为离散型随机变量。分布列应列明所有可能取值与相应概率，本文主要处理有限分布列。"}</p>
                  <Formula math={String.raw`P(X=x_i)=p_i,\qquad p_i\ge0,\qquad\sum_i p_i=1`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 由分布列求事件概率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"随机变量落在某个范围内的概率，等于这个范围内所有可能取值的概率之和。建分布列时，各取值对应的事件互斥且穷尽。"}</p>
                  <Formula math={String.raw`P(X\in S)=\sum_{x_i\in S}p_i`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 数学期望"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"期望是以概率为权重的取值平均数，反映长期重复试验下的平均水平，不保证某次试验恰好出现这个数值。有限分布下直接加权求和。"}</p>
                  <Formula math={String.raw`E(X)=\sum_i x_ip_i,\qquad E(aX+b)=aE(X)+b`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 方差刻画波动"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"方差是随机变量偏离期望的平方的加权平均，恒非负。计算时可用二阶矩减期望平方；平移不改变方差，数乘则使方差乘系数平方。"}</p>
                  <Formula math={String.raw`D(X)=\sum_i(x_i-E(X))^2p_i=E(X^2)-[E(X)]^2,\quad D(aX+b)=a^2D(X)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 两点分布与二项分布"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"一次试验只有成功、失败两种结果，用 1、0 表示时是两点分布。n 次试验相互独立、每次成功概率均为 p，成功次数 X 服从二项分布。"}</p>
                  <Formula math={String.raw`X\sim B(n,p):\quad P(X=k)=C_n^k p^k(1-p)^{n-k},\quad E(X)=np,\quad D(X)=np(1-p)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"使用二项分布前核对：次数固定、每次两类结果、试验相互独立且成功概率不变。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 不放回抽样与超几何模型"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从 N 个物品中，其中 M 个为某类，随机不放回取 n 个，取到该类的个数可用组合数计算。此时每次条件概率会变化，通常不是二项分布。"}</p>
                  <Formula math={String.raw`P(X=k)=\frac{C_M^k C_{N-M}^{n-k}}{C_N^n},\quad\max(0,n-N+M)\le k\le\min(n,M)`} />
                </article>
              </div>
            </section>
            <ProbabilityFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"奖励的期望与方差"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"一次活动获得 10 分的概率为 0.2，否则得 0 分。设所得分数为 X，求期望与方差。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"分布为 P(X=0)=0.8、P(X=10)=0.2。"}</li>
                      <li>{"E(X)=0×0.8+10×0.2=2。"}</li>
                      <li>{"E(X²)=100×0.2=20，所以 D(X)=20−2²=16。"}</li>
                    </ol>
                    <Formula math={String.raw`E(X)=2,\qquad D(X)=16`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"独立重复试验"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"独立抛掷均匀硬币 3 次，X 为正面次数，求 P(X=2)、E(X) 和 D(X)。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"固定 3 次、每次正反两类、相互独立且 p=1/2，所以 X~B(3，1/2)。"}</li>
                      <li>{"恰好两次正面概率为 C₃²(1/2)³=3/8。"}</li>
                      <li>{"E(X)=3/2，D(X)=3×(1/2)×(1/2)=3/4。"}</li>
                    </ol>
                    <Formula math={String.raw`P(X=2)=\frac38,\quad E(X)=\frac32,\quad D(X)=\frac34`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"建立不放回分布列"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"袋中 3 红 2 蓝，随机不放回取 2 球，X 为红球个数，求分布列与期望。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"X 可能取 0、1、2，总取法为 C₅²=10。"}</li>
                      <li>{"对应方法数分别为 C₃⁰C₂²=1、C₃¹C₂¹=6、C₃²C₂⁰=3。"}</li>
                      <li>{"概率分别为 0.1、0.6、0.3，和为 1；期望为 0+0.6+0.6=1.2。"}</li>
                    </ol>
                    <Formula math={String.raw`\begin{array}{c|ccc}X&0&1&2\\\hline P&0.1&0.6&0.3\end{array}\qquad E(X)=1.2`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"分布列不能遗漏取值，概率必须非负且总和为 1。"}</li>
              <li>{"期望不一定属于随机变量的可能取值。"}</li>
              <li>{"不放回通常不独立，不能不加检查就套二项分布。"}</li></ul></section>
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
              <li>{"分布列完整描述各取值及其概率。"}</li>
              <li>{"期望描述平均水平，方差描述波动。"}</li>
              <li>{"根据试验条件选择二项或不放回抽样模型。"}</li></ul><Link href="/practice?topic=%E7%A6%BB%E6%95%A3%E5%9E%8B%E9%9A%8F%E6%9C%BA%E5%8F%98%E9%87%8F%E5%8F%8A%E5%85%B6%E5%88%86%E5%B8%83%E5%88%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“离散型随机变量及其分布列”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/probability/conditional" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：条件概率</Link>
              <Link href="/grade2/probability/normal-distribution" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：正态分布 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第八章 · 概率</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "8.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "8.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "8.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互演示直接维护在本页。 */
function ProbabilityFigure(){const [n,setN]=useState(4),[p,setP]=useState(0.5);const choose=(a:number,b:number)=>{let v=1;for(let i=1;i<=b;i++)v=v*(a-i+1)/i;return Math.round(v);};const values=Array.from({length:n+1},(_,k)=>choose(n,k)*p**k*(1-p)**(n-k));const x=(k:number)=>Number((40+k*420/n).toFixed(3));const y=(v:number)=>Number((230-180*v).toFixed(3));return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE PROBABILITY</p><h2 className="mt-2 text-xl font-bold">动手观察：二项分布的概率与波动</h2><p className="mt-3 text-sm leading-7 text-slate-600">固定次数、相互独立且成功概率相同。柱形高度表示恰好成功 k 次的概率，范围为 0 到 1。</p><svg viewBox="0 0 520 270" role="img" aria-label="二项分布概率柱形图" className="mt-5 w-full rounded-xl bg-slate-50"><path d="M20 230H500 M20 230V35" stroke="#94a3b8"/><text x="6" y="40" fontSize="10">1</text><text x="6" y="235" fontSize="10">0</text>{values.map((v,k)=><g key={k}><rect x={x(k)-12} y={y(v)} width="24" height={Number((180*v).toFixed(3))} fill="#2563eb" rx="3"/><text x={x(k)} y="252" textAnchor="middle" fontSize="11">{k}</text><text x={x(k)} y={y(v)-8} textAnchor="middle" fontSize="10" fill="#1d4ed8">{v.toFixed(3)}</text></g>)}</svg><label className="mt-5 block">试验次数 n：{n}<input aria-label="试验次数 n" type="range" min="1" max="8" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">成功概率 p：{p}<input aria-label="成功概率 p" type="range" min="0" max="1" step="0.1" value={p} onChange={e=>setP(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7"><p>概率总和 = {values.reduce((sum,v)=>sum+v,0).toFixed(3)}；E(X) = {(n*p).toFixed(3)}；D(X) = {(n*p*(1-p)).toFixed(3)}。</p><p>p=0 或 p=1 时，随机变量退化为常数，方差为零。</p></div></section>;}
