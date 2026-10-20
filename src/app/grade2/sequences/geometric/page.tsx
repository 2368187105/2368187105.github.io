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
    id: "g2-geometric-01",
    topic: "等比数列",
    title: "通项计算",
    question: "等比数列 a₁=2，q=3，则 a₄ 等于：",
    options: [
    {
      key: "A",
      text: "18"
    },
    {
      key: "B",
      text: "36"
    },
    {
      key: "C",
      text: "54"
    },
    {
      key: "D",
      text: "162"
    }
  ],
    correctAnswer: "C",
    explanation: "a₄=2×3³=54。"
  },
  {
    id: "g2-geometric-02",
    topic: "等比数列",
    title: "有限项求和",
    question: "等比数列首项为 1，公比为 2，前 5 项和为：",
    options: [
    {
      key: "A",
      text: "15"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "32"
    },
    {
      key: "D",
      text: "31"
    }
  ],
    correctAnswer: "D",
    explanation: "S₅=(1−2⁵)/(1−2)=31。"
  },
  {
    id: "g2-geometric-03",
    topic: "等比数列",
    title: "等比中项的符号",
    question: "在 2 和 8 中间插入一个实数 G，使 2、G、8 成等比数列，则 G 为：",
    options: [
    {
      key: "A",
      text: "±4"
    },
    {
      key: "B",
      text: "4"
    },
    {
      key: "C",
      text: "−4"
    },
    {
      key: "D",
      text: "±16"
    }
  ],
    correctAnswer: "A",
    explanation: "G²=2×8=16，所以 G=±4，两种取值分别对应公比 2 与 −2。"
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

export default function GeometricPage() {
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
          <span className="text-slate-600">等比数列</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 04</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 4.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">等比数列</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用恒定的相邻比刻画等比数列，区分公比取值，掌握通项与有限项求和。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%AD%89%E6%AF%94%E6%95%B0%E5%88%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解非零项、公比和等比中项的条件"}</li>
                <li>{"掌握等比数列通项与乘积性质"}</li>
                <li>{"区分 q=1 与 q≠1，应用有限等比求和"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"指数运算、数列和等差数列。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 定义与公比"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从第二项起，每一项与前一项的比都等于同一个非零常数，这样的数列叫等比数列，常数 q 叫公比。按此定义，所有项均非零。"}</p>
                  <Formula math={String.raw`\frac{a_{n+1}}{a_n}=q,\qquad a_1\ne0,\ q\ne0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 通项公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从第 1 项到第 n 项一共乘了 n−1 次公比，因此通项具有指数形式。任意两项也可以通过下标差联系起来。"}</p>
                  <Formula math={String.raw`a_n=a_1q^{n-1}=a_mq^{n-m}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 等比中项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 a、G、b 成等比数列，则 G²=ab。实数范围内存在这样的非零等比中项需要 ab>0；此时 G 可取正负两个值，除非题目另加正数条件。"}</p>
                  <Formula math={String.raw`G^2=ab,\qquad G=\pm\sqrt{ab}\quad(ab>0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 有限项求和"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"q≠1 时，将和式乘以 q 后相减，中间各项相消；q=1 时所有项相等，应直接求和，不能使用分母为零的式子。"}</p>
                  <Formula math={String.raw`S_n=\begin{cases}na_1,&q=1,\\\dfrac{a_1(1-q^n)}{1-q},&q\ne1.\end{cases}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 下标和与乘积"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"等比数列中，两组下标和相等时，对应项的乘积相等。与等差数列的“和”性质对比，可以更容易记忆。"}</p>
                  <Formula math={String.raw`i+j=k+l\quad\Longrightarrow\quad a_i a_j=a_k a_l`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 增长、衰减与交替"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"首项为正时，q>1 表示递增，0<q<1 表示递减，q=1 为常数列；q<0 时各项符号交替。首项为负时，不能照搬正首项的单调性结论。"}</p>
                  <Formula math={String.raw`a_n=a_1(1+r)^{n-1}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"按固定比例增长的应用题，应先确定初始值对应第几项，再决定指数；本节的求和公式用于有限项。"}</p>
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"求公比与通项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"正项等比数列中 a₂=6，a₅=48，求通项。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"a₅/a₂=q³=8，得 q=2。"}</li>
                      <li>{"由 a₂=a₁q 得 a₁=3。"}</li>
                      <li>{"所以 aₙ=3×2ⁿ⁻¹。"}</li>
                    </ol>
                    <Formula math={String.raw`a_n=3\cdot2^{n-1}`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"求有限项和"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求数列 2、6、18、… 的前 6 项和。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"首项为 2，公比为 3≠1。"}</li>
                      <li>{"使用 S₆=2(1−3⁶)/(1−3)。"}</li>
                      <li>{"3⁶=729，得到 S₆=728。"}</li>
                    </ol>
                    <Formula math={String.raw`S_6=728`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"分期增长中的下标"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某菌群初始为 100 个，每小时数量变为原来的 2 倍，求 5 小时后的数量。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"把初始时刻记为第 1 项，则 5 小时后对应第 6 项。"}</li>
                      <li>{"经历 5 次倍增，应乘以 2⁵。"}</li>
                      <li>{"数量为 100×32=3200 个。"}</li>
                    </ol>
                    <Formula math={String.raw`N(5)=100\cdot2^5=3200`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"等比数列中的项及公比均非零。"}</li>
              <li>{"等比中项不一定只取正根，要看题目条件。"}</li>
              <li>{"求和先区分 q=1；增长题先核对指数代表的变化次数。"}</li></ul></section>
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
              <li>{"等比数列的本质是相邻比恒定且非零。"}</li>
              <li>{"通项含 qⁿ⁻¹，乘积性质与下标和有关。"}</li>
              <li>{"有限项求和分 q=1 与 q≠1 两类。"}</li></ul><Link href="/practice?topic=%E7%AD%89%E6%AF%94%E6%95%B0%E5%88%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“等比数列”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/sequences/arithmetic" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：等差数列</Link>
              <Link href="/grade2/sequences/induction" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：数学归纳法 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第四章 · 数列</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "4.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "4.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "4.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
 const values=Array.from({length:n},(_,i)=>2*Math.pow(parameter,i));
 const sum=values.reduce((a,b)=>a+b,0);
 const low=Math.min(0,...values),high=Math.max(1,...values);
 const y=(v:number)=>Number((240-(v-low)/(high-low)*210).toFixed(3));
 const x=(i:number)=>40+i*430/11;
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE PATTERN</p><h2 className="mt-2 text-xl font-bold">动手观察：相邻比与部分和</h2><p className="mt-3 text-sm leading-7 text-slate-600">固定首项为 2，改变公比 q和显示项数。每个点对应一个正整数下标，纵轴随数据自动缩放。</p><svg viewBox="0 0 520 280" role="img" aria-label="数列前 n 项离散图象" className="mt-5 w-full rounded-xl bg-slate-50"><line x1="25" x2="500" y1={y(0)} y2={y(0)} stroke="#94a3b8" /><line x1="25" x2="25" y1="15" y2="255" stroke="#94a3b8" />{values.map((v,i)=><g key={i}><line x1={x(i)} x2={x(i)} y1={y(0)} y2={y(v)} stroke="#bfdbfe" strokeWidth="2" /><circle cx={x(i)} cy={y(v)} r="4" fill="#2563eb" /><text x={x(i)} y="270" textAnchor="middle" fontSize="11" fill="#64748b">{i+1}</text><text x={x(i)} y={y(v)-8} textAnchor="middle" fontSize="10" fill="#1d4ed8">{Number(v.toFixed(2))}</text></g>)}<text x="500" y="270" fontSize="11">n</text></svg><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">显示项数 n：{n}<input aria-label="显示项数 n" type="range" min="2" max="12" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label><label className="text-sm font-medium">公比 q：{parameter}<input aria-label="公比 q" type="range" min="0.5" max="3" step="0.5" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>aₙ = 2qⁿ⁻¹；当前 a{n} = {Number(values[n-1].toFixed(3))}，S{n} = {Number(sum.toFixed(3))}。</p><p>图中提供正公比；负公比会使各项正负交替，见知识讲解。</p></div></section>;
}
