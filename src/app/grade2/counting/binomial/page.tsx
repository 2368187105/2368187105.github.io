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
    id: "g2-counting-binomial-01",
    topic: "二项式定理",
    title: "指定幂次系数",
    question: "(x+2)⁴ 展开式中 x² 的系数为：",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "12"
    },
    {
      key: "C",
      text: "16"
    },
    {
      key: "D",
      text: "24"
    }
  ],
    correctAnswer: "D",
    explanation: "r=2，系数为 C₄²×2²=24。"
  },
  {
    id: "g2-counting-binomial-02",
    topic: "二项式定理",
    title: "常数项",
    question: "(x+1/x)⁶（x≠0）展开式的常数项为：",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "15"
    },
    {
      key: "C",
      text: "6"
    },
    {
      key: "D",
      text: "30"
    }
  ],
    correctAnswer: "A",
    explanation: "通项为 C₆ʳx⁶⁻²ʳ，r=3 时指数为零，常数项为 C₆³=20。"
  },
  {
    id: "g2-counting-binomial-03",
    topic: "二项式定理",
    title: "二项式系数和",
    question: "(a+b)⁵ 展开式的二项式系数之和为：",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "32"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "16"
    }
  ],
    correctAnswer: "B",
    explanation: "二项式系数之和为 2⁵=32，与 a、b 的具体取值无关。"
  }
];

const lessonSections = [
  {
    number: "7.1",
    title: "两个基本计数原理",
    href: "/grade2/counting/principles"
  },
  {
    number: "7.2",
    title: "排列",
    href: "/grade2/counting/permutations"
  },
  {
    number: "7.3",
    title: "组合",
    href: "/grade2/counting/combinations"
  },
  {
    number: "7.4",
    title: "二项式定理",
    href: "/grade2/counting/binomial"
  }
];

export default function BinomialPage() {
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
          <Link href="/grade2/counting" className="hover:text-blue-600">计数原理</Link><span>/</span>
          <span className="text-slate-600">二项式定理</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 07</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 7.4</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">二项式定理</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用组合计数理解二项展开，区分二项式系数、项的系数和常数项。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E4%BA%8C%E9%A1%B9%E5%BC%8F%E5%AE%9A%E7%90%86" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解二项式定理及通项公式"}</li>
                <li>{"准确区分项号 r+1、二项式系数和项的系数"}</li>
                <li>{"求指定幂次项、常数项及系数和"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"组合数与指数运算。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 从选择到展开"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"把 (a+b)ⁿ 看作 n 个相同二项式相乘。每个乘积项从各因子选 a 或 b，恰有 r 个因子选 b 的方法数为 Cₙʳ，形成 aⁿ⁻ʳbʳ 项。"}</p>
                  <Formula math={String.raw`(a+b)^n=\sum_{r=0}^{n}C_n^r a^{n-r}b^r\quad(n\in\mathbb N^*)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 通项与项号"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"按 a 的降幂、b 的升幂排列，通项为 Tᵣ₊₁。r 从 0 到 n，所以共有 n+1 项。题目说第 k 项时，应该代入 r=k−1。"}</p>
                  <Formula math={String.raw`T_{r+1}=C_n^r a^{n-r}b^r,\qquad r=0,1,\ldots,n`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 二项式系数与项的系数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"二项式系数是组合数 Cₙʳ。具体代入 a、b 后，项的实际系数还要乘上常数因子与符号。例如 (x−2)ⁿ 的项可能带负号，二项式系数始终为正。"}</p>
                  <Formula math={String.raw`(x-2)^n:\quad T_{r+1}=C_n^r(-2)^r x^{n-r}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 指定幂次与常数项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"先写通项并整理 x 的指数，再把该指数与目标幂次相等，解出 r。只有当 r 是 0 到 n 之间的整数时，该项才存在。"}</p>
                  <Formula math={String.raw`\left(x+\frac1x\right)^n:\quad T_{r+1}=C_n^r x^{n-2r}\quad(x\ne0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 系数性质与赋值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"二项式系数关于中间对称，其和为 2ⁿ。求一个展开多项式所有项的实际系数和时，可令 x=1；求交错系数和时常令 x=−1。若含负幂应先确认代入有定义。"}</p>
                  <Formula math={String.raw`C_n^r=C_n^{n-r},\qquad\sum_{r=0}^{n}C_n^r=2^n`} />
                </article>
              </div>
            </section>
            <CountingFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"求指定幂次的系数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 (x+2)⁴ 展开式中 x² 的系数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"通项为 C₄ʳx⁴⁻ʳ2ʳ。"}</li>
                      <li>{"令 4−r=2，得 r=2，对应第 3 项。"}</li>
                      <li>{"系数为 C₄²×2²=6×4=24。"}</li>
                    </ol>
                    <Formula math={String.raw`[x^2](x+2)^4=24`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"求常数项"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 (x+1/x)⁶ 的常数项，其中 x≠0。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"通项为 C₆ʳx⁶⁻²ʳ。"}</li>
                      <li>{"常数项要求指数 6−2r=0，所以 r=3。"}</li>
                      <li>{"常数项为 C₆³=20，对应第 4 项。"}</li>
                    </ol>
                    <Formula math={String.raw`T_4=C_6^3=20`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"区分两种系数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 (x−2)⁵ 的第 3 项及其二项式系数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"第 3 项对应 r=2。"}</li>
                      <li>{"T₃=C₅²x³(−2)²=40x³。"}</li>
                      <li>{"二项式系数是 C₅²=10，而 x³ 项的实际系数是 40。"}</li>
                    </ol>
                    <Formula math={String.raw`T_3=40x^3,\qquad C_5^2=10`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"第 k 项用 r=k−1，不能把项号直接当 r。"}</li>
              <li>{"二项式系数与实际项的系数不同，负号和常数幂不能漏。"}</li>
              <li>{"求目标项后须检查 r 的整数范围，常数项不一定存在。"}</li></ul></section>
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
              <li>{"二项式系数来自选择哪些因子贡献 b。"}</li>
              <li>{"通项公式把项号、幂次与系数联系起来。"}</li>
              <li>{"求幂次项先解指数方程，求系数和可用赋值。"}</li></ul><Link href="/practice?topic=%E4%BA%8C%E9%A1%B9%E5%BC%8F%E5%AE%9A%E7%90%86" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“二项式定理”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/counting/combinations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：组合</Link>
              <Link href="/grade2/probability/conditional" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一章：概率 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第七章 · 计数原理</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "7.4" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "7.4" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "7.4" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
function CountingFigure(){const [n,setN]=useState(4),[term,setTerm]=useState(3);const k=Math.min(term,n+1),r=k-1;const choose=(a:number,b:number)=>{let value=1;for(let i=1;i<=b;i++)value=value*(a-i+1)/i;return Math.round(value);};return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE COUNTING</p><h2 className="mt-2 text-xl font-bold">动手观察：二项式系数与项号</h2><p className="mt-3 text-sm leading-7 text-slate-600">展开 (a+b)ⁿ，观察各项的指数与二项式系数。选择第 k 项时，通项里的 r=k−1。</p><label className="mt-5 block">指数 n：{n}<input aria-label="指数 n" type="range" min="1" max="6" value={n} onChange={e=>{const v=Number(e.target.value);setN(v);setTerm(Math.min(term,v+1));}} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">项号 k：{k}<input aria-label="项号 k" type="range" min="1" max={n+1} value={k} onChange={e=>setTerm(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><div className="mt-5 flex flex-wrap gap-2">{Array.from({length:n+1},(_,i)=><button key={i} type="button" aria-pressed={r===i} onClick={()=>setTerm(i+1)} className={'rounded-xl border px-4 py-3 text-sm '+(r===i?'border-blue-500 bg-blue-50 text-blue-800':'border-slate-200')}>第 {i+1} 项：{choose(n,i)}</button>)}</div><div aria-live="polite" className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7"><p>第 {k} 项：r={r}，二项式系数 C({n},{r})={choose(n,r)}。</p><p>a 的指数为 {n-r}，b 的指数为 {r}，总次数为 {n}。</p><p>所有二项式系数之和 = {2**n}。</p></div></section>;}
