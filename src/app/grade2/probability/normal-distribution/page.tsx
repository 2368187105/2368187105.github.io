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
    id: "g2-probability-normal-01",
    topic: "正态分布",
    title: "识别参数",
    question: "若 X~N(3，4)，则 X 的标准差为：",
    options: [
    {
      key: "A",
      text: "4"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "√3"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "D",
    explanation: "第二个参数为方差 σ²=4，所以标准差 σ=2。"
  },
  {
    id: "g2-probability-normal-02",
    topic: "正态分布",
    title: "利用对称性",
    question: "若 X~N(10，4)，则 P(X>10) 等于：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.6827"
    },
    {
      key: "C",
      text: "0.9545"
    },
    {
      key: "D",
      text: "0.25"
    }
  ],
    correctAnswer: "A",
    explanation: "曲线关于均值 10 对称，其右侧概率为一半。"
  },
  {
    id: "g2-probability-normal-03",
    topic: "正态分布",
    title: "标准差区间",
    question: "若 X~N(10，4)，则 P(6<X<14) 约为：",
    options: [
    {
      key: "A",
      text: "0.6827"
    },
    {
      key: "B",
      text: "0.9545"
    },
    {
      key: "C",
      text: "0.9973"
    },
    {
      key: "D",
      text: "0.5"
    }
  ],
    correctAnswer: "B",
    explanation: "σ=2，区间为 μ±2σ，对应概率约为 0.9545。"
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

export default function NormalDistributionPage() {
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
          <span className="text-slate-600">正态分布</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 08</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 8.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">正态分布</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">认识正态密度曲线的对称性与参数，理解区间面积、标准化及常用概率近似。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"区分均值 μ、标准差 σ 与方差 σ²"}</li>
                <li>{"用曲线面积与对称性解释区间概率"}</li>
                <li>{"掌握标准化及常见标准差区间概率"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"函数图象、指数函数、概率和随机变量。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 正态分布与密度"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"正态分布用钟形密度曲线描述，记作 N(μ，σ²)，σ>0。曲线与横轴之间的总面积为 1，区间概率由对应的曲线下方面积给出。曲线高度本身不是某点的概率。"}</p>
                  <Formula math={String.raw`X\sim N(\mu,\sigma^2),\qquad f(x)=\frac1{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}\quad(\sigma>0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 两个参数的作用"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"μ 决定曲线的中心位置，σ 决定分散程度；σ 越小，曲线越集中且峰越高。记号 N(μ，σ²) 的第二个参数是方差，不是标准差。"}</p>
                  <Formula math={String.raw`E(X)=\mu,\qquad D(X)=\sigma^2`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 对称性与点概率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"曲线关于 x=μ 对称，均值左右各有一半概率。连续型分布中，任意单点的概率为零，因此区间端点取不取等号不改变概率。"}</p>
                  <Formula math={String.raw`P(X<\mu)=P(X>\mu)=\frac12,\qquad P(X=c)=0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 标准化"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"把 X 减去均值再除以标准差，得到标准正态随机变量 Z。计算区间概率时，两端都要按相同方式变换；分母用 σ 而不是 σ²。"}</p>
                  <Formula math={String.raw`Z=\frac{X-\mu}{\sigma}\sim N(0,1),\quad P(a<X<b)=P\left(\frac{a-\mu}{\sigma}<Z<\frac{b-\mu}{\sigma}\right)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 常用标准差区间"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"正态分布落在均值左右 1、2、3 个标准差内的概率，分别约为 0.6827、0.9545、0.9973。这些是近似值，不能推广为任意分布的同一结论。"}</p>
                  <Formula math={String.raw`\begin{aligned}P(|X-\mu|<\sigma)&\approx0.6827\\P(|X-\mu|<2\sigma)&\approx0.9545\\P(|X-\mu|<3\sigma)&\approx0.9973\end{aligned}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 分解区间与模型范围"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"求均值到某个标准差位置之间的概率，可将对称中心区间概率减半；求两侧尾部时先用 1 减去中心概率，再按对称性分配。是否使用正态模型应由题目条件或数据依据决定。"}</p>
                  <Formula math={String.raw`P(X>\mu+2\sigma)\approx\frac{1-0.9545}{2}=0.02275`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"读出均值与方差"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"已知 X~N(10，4)，求 μ、σ 和 P(X>10)。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"μ=10，方差 σ²=4，因此标准差 σ=2。"}</li>
                      <li>{"正态曲线关于 x=10 对称。"}</li>
                      <li>{"右侧概率为 1/2，注意第二个参数 4 并非标准差。"}</li>
                    </ol>
                    <Formula math={String.raw`\mu=10,\quad\sigma=2,\quad P(X>10)=0.5`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"使用双标准差区间"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"若 X~N(10，4)，求 P(6<X<14) 的近似值。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"标准差为 2，两个端点为 10±2×2。"}</li>
                      <li>{"所求正是均值左右 2 个标准差的区间。"}</li>
                      <li>{"由常用近似，概率约为 0.9545。"}</li>
                    </ol>
                    <Formula math={String.raw`P(6<X<14)\approx0.9545`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"计算单侧尾部"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"若 X~N(10，4)，求 P(X>14) 的近似值。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"14=μ+2σ，中心区间概率约为 0.9545。"}</li>
                      <li>{"左右两侧尾部概率之和约为 1−0.9545=0.0455。"}</li>
                      <li>{"对称分配，右尾概率约为 0.02275。"}</li>
                    </ol>
                    <Formula math={String.raw`P(X>14)\approx0.02275`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"N(μ，σ²) 的第二个参数是方差，标准化要除以标准差。"}</li>
              <li>{"密度高度不是点概率，连续分布任意单点的概率为 0。"}</li>
              <li>{"68%—95%—99.7% 规律是正态模型的近似，别混为精确值。"}</li></ul></section>
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
              <li>{"正态曲线关于均值对称，概率对应曲线下的面积。"}</li>
              <li>{"μ 控制位置，σ 控制分散，记号中写的是 σ²。"}</li>
              <li>{"标准化和对称性帮助计算中心区间与尾部概率。"}</li></ul><Link href="/practice?topic=%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“正态分布”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/probability/discrete-distributions" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：离散型随机变量及其分布列</Link>
              <Link href="/grade2/statistics/linear-regression" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一章：统计 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第八章 · 概率</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "8.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "8.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "8.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 固定 SVG 输出精度，避免数学函数的跨环境尾数差异。 */
function ProbabilityFigure(){const [mean,setMean]=useState(0),[sigma,setSigma]=useState(1),[k,setK]=useState(1);const density=(x:number)=>Math.exp(-(((x-mean)/sigma)**2)/2)/(sigma*Math.sqrt(2*Math.PI));const sx=(x:number)=>Number((260+x*28).toFixed(3));const sy=(v:number)=>Number((235-v*180).toFixed(3));const curve=Array.from({length:241},(_,i)=>{const x=-8+i/15;return sx(x)+','+sy(density(x));}).join(' ');const low=mean-k*sigma,high=mean+k*sigma;const shade=sx(low)+',235 '+Array.from({length:121},(_,i)=>{const x=low+(high-low)*i/120;return sx(x)+','+sy(density(x));}).join(' ')+' '+sx(high)+',235';const probability=[0,0.6827,0.9545,0.9973][k];return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE PROBABILITY</p><h2 className="mt-2 text-xl font-bold">动手观察：正态曲线的位置与分散</h2><p className="mt-3 text-sm leading-7 text-slate-600">阴影为 μ 左右 k 个标准差内的面积。改变 μ、σ 后，同一 k 对应的概率近似值保持不变。图中仅显示 x∈[−8，8] 的曲线，完整分布延伸至整个实数轴。</p><svg viewBox="0 0 520 285" role="img" aria-label="正态密度曲线与标准差区间阴影" className="mt-5 w-full rounded-xl bg-slate-50"><path d="M20 235H500" stroke="#94a3b8"/><polygon points={shade} fill="#bfdbfe"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/><line x1={sx(mean)} x2={sx(mean)} y1="35" y2="235" stroke="#d97706" strokeDasharray="5 4"/>{[low,mean,high].map((v,i)=><g key={i}><line x1={sx(v)} x2={sx(v)} y1="235" y2="241" stroke="#64748b"/><text x={sx(v)} y="259" textAnchor="middle" fontSize="11">{v.toFixed(1)}</text></g>)}</svg><label className="mt-5 block">均值 μ：{mean}<input aria-label="均值 μ" type="range" min="-2" max="2" step="0.5" value={mean} onChange={e=>setMean(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">标准差 σ：{sigma}<input aria-label="标准差 σ" type="range" min="0.5" max="2" step="0.5" value={sigma} onChange={e=>setSigma(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">标准差倍数 k：{k}<input aria-label="标准差倍数 k" type="range" min="1" max="3" value={k} onChange={e=>setK(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7"><p>均值 μ={mean}，标准差 σ={sigma}，方差 σ²={(sigma*sigma).toFixed(2)}。</p><p>P({low.toFixed(1)} &lt; X &lt; {high.toFixed(1)}) ≈ {probability.toFixed(4)}；两侧尾部概率之和 ≈ {(1-probability).toFixed(4)}。</p></div></section>;}
