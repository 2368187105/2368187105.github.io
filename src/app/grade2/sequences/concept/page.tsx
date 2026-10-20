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
    id: "g2-sequence-01",
    topic: "数列",
    title: "由通项求项",
    question: "已知 aₙ=2n²−1，则 a₃ 等于：",
    options: [
    {
      key: "A",
      text: "11"
    },
    {
      key: "B",
      text: "17"
    },
    {
      key: "C",
      text: "18"
    },
    {
      key: "D",
      text: "7"
    }
  ],
    correctAnswer: "B",
    explanation: "代入 n=3，a₃=2×9−1=17。"
  },
  {
    id: "g2-sequence-02",
    topic: "数列",
    title: "递推计算",
    question: "a₁=2，aₙ₊₁=3aₙ−1，则 a₃ 等于：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "13"
    },
    {
      key: "C",
      text: "14"
    },
    {
      key: "D",
      text: "17"
    }
  ],
    correctAnswer: "C",
    explanation: "a₂=3×2−1=5，a₃=3×5−1=14。"
  },
  {
    id: "g2-sequence-03",
    topic: "数列",
    title: "部分和求项",
    question: "若 Sₙ=n²+n，则 a₄ 等于：",
    options: [
    {
      key: "A",
      text: "4"
    },
    {
      key: "B",
      text: "6"
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
    correctAnswer: "D",
    explanation: "a₄=S₄−S₃=20−12=8。"
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

export default function SequenceConceptPage() {
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
          <span className="text-slate-600">数列</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 04</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 4.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">数列</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">认识数列的顺序、通项与递推关系，建立前 n 项和与第 n 项之间的联系。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%95%B0%E5%88%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"区分项、项数与下标，认识数列是一类特殊函数"}</li>
                <li>{"用通项或递推关系求项，并判断项的位置"}</li>
                <li>{"掌握前 n 项和与通项的关系及首项的特殊处理"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"函数、代数运算与正整数。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 数列与项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"按一定顺序排列的一列数叫数列，每一个数叫作数列的项。第 n 项记作 aₙ，n 是正整数。数列可以有限，也可以无限；同一个数在不同位置出现时仍是不同的项。"}</p>
                  <Formula math={String.raw`a_1,a_2,\ldots,a_n,\ldots\qquad n\in\mathbb N^*`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 数列是特殊的函数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"把项数 n 作为自变量，第 n 项作为函数值，可将数列看成定义域为正整数集或它的有限初始子集的函数。图象由离散点组成，不能直接连成连续曲线。"}</p>
                  <Formula math={String.raw`n\longmapsto a_n,\qquad (n,a_n)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 通项公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若第 n 项可以由 n 的公式给出，该公式就是通项公式。例如 aₙ=2n−1 依次给出 1、3、5、7。求第几项时，要检验解得的 n 是否为正整数。"}</p>
                  <Formula math={String.raw`a_n=2n-1\quad\Longrightarrow\quad a_5=9`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"仅凭有限个项猜测的规律不唯一，不能把猜测直接当作已经证明的结论。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 递推关系"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"递推公式用前面的项表示后面的项，必须同时给出足够的初始条件。例如给出首项和相邻两项的关系，便可逐项计算。"}</p>
                  <Formula math={String.raw`a_1=2,\quad a_{n+1}=a_n+3\quad(n\ge1)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 递增、递减与摆动"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"比较相邻两项的差可判断单调性：差始终为正则递增，始终为负则递减，始终为零则为常数列。符号交替的数列可能既不递增也不递减。"}</p>
                  <Formula math={String.raw`a_{n+1}-a_n>0\ (n\ge1)\quad\Longrightarrow\quad \{a_n\}\text{递增}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 前 n 项和与通项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"记前 n 项的和为 Sₙ。相邻两个部分和相减可以得到第 n 项，但 Sₙ₋₁ 只在 n≥2 时属于已定义的部分和，因此首项要单独计算。"}</p>
                  <Formula math={String.raw`S_n=\sum_{k=1}^{n}a_k,\qquad a_n=\begin{cases}S_1,&n=1,\\S_n-S_{n-1},&n\ge2.\end{cases}`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"由通项求项与项数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"已知 aₙ=3n−2，求 a₆，并判断 28 是否是该数列的项。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"代入 n=6，得 a₆=18−2=16。"}</li>
                      <li>{"令 3n−2=28，解得 n=10，是正整数。"}</li>
                      <li>{"所以 28 是第 10 项。"}</li>
                    </ol>
                    <Formula math={String.raw`a_6=16,\qquad a_{10}=28`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"根据递推求项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"已知 a₁=1，aₙ₊₁=2aₙ+1，求前四项。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"由初值 a₁=1，得 a₂=2×1+1=3。"}</li>
                      <li>{"继续计算 a₃=2×3+1=7。"}</li>
                      <li>{"a₄=2×7+1=15；递推每一步都使用前一项。"}</li>
                    </ol>
                    <Formula math={String.raw`a_1=1,\quad a_2=3,\quad a_3=7,\quad a_4=15`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"由部分和求通项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"已知 Sₙ=n²+2n，求 aₙ。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"先算 a₁=S₁=3。"}</li>
                      <li>{"n≥2 时，aₙ=(n²+2n)−[(n−1)²+2(n−1)]=2n+1。"}</li>
                      <li>{"公式在 n=1 时也等于 3，所以可以合并。"}</li>
                    </ol>
                    <Formula math={String.raw`a_n=2n+1\quad(n\ge1)`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"下标 n 必须为正整数；aₙ 是项的值，不是项数。"}</li>
              <li>{"有限个已知项一般不能唯一确定整个数列。"}</li>
              <li>{"由 Sₙ 求 aₙ 时先检查 n=1，不能直接套用未定义的 S₀。"}</li></ul></section>
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
              <li>{"数列用正整数下标表示有序的项。"}</li>
              <li>{"通项直接联系 n 与 aₙ；递推要与初始条件结合。"}</li>
              <li>{"由部分和求通项时分首项和 n≥2 两种情况。"}</li></ul><Link href="/practice?topic=%E6%95%B0%E5%88%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“数列”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/conic-sections/parabola" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：抛物线</Link>
              <Link href="/grade2/sequences/arithmetic" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：等差数列 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第四章 · 数列</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "4.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "4.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "4.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
 const [parameter,setParameter]=useState(1);
 const values=Array.from({length:n},(_,i)=>2+i*parameter);
 const sum=values.reduce((a,b)=>a+b,0);
 const low=Math.min(0,...values),high=Math.max(1,...values);
 const y=(v:number)=>Number((240-(v-low)/(high-low)*210).toFixed(3));
 const x=(i:number)=>40+i*430/11;
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE PATTERN</p><h2 className="mt-2 text-xl font-bold">动手观察：数列的离散图象</h2><p className="mt-3 text-sm leading-7 text-slate-600">固定首项为 2，改变一次项系数 d和显示项数。每个点对应一个正整数下标，纵轴随数据自动缩放。</p><svg viewBox="0 0 520 280" role="img" aria-label="数列前 n 项离散图象" className="mt-5 w-full rounded-xl bg-slate-50"><line x1="25" x2="500" y1={y(0)} y2={y(0)} stroke="#94a3b8" /><line x1="25" x2="25" y1="15" y2="255" stroke="#94a3b8" />{values.map((v,i)=><g key={i}><line x1={x(i)} x2={x(i)} y1={y(0)} y2={y(v)} stroke="#bfdbfe" strokeWidth="2" /><circle cx={x(i)} cy={y(v)} r="4" fill="#2563eb" /><text x={x(i)} y="270" textAnchor="middle" fontSize="11" fill="#64748b">{i+1}</text><text x={x(i)} y={y(v)-8} textAnchor="middle" fontSize="10" fill="#1d4ed8">{Number(v.toFixed(2))}</text></g>)}<text x="500" y="270" fontSize="11">n</text></svg><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">显示项数 n：{n}<input aria-label="显示项数 n" type="range" min="2" max="12" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label><label className="text-sm font-medium">一次项系数 d：{parameter}<input aria-label="一次项系数 d" type="range" min="-3" max="3" step="0.5" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>aₙ = 2+(n−1)d；当前 a{n} = {Number(values[n-1].toFixed(3))}，S{n} = {Number(sum.toFixed(3))}。</p><p>相邻两项之差均为 {parameter}，首项为 2。</p></div></section>;
}
