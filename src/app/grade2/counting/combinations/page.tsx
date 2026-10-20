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
    id: "g2-counting-combinations-01",
    topic: "组合",
    title: "组合数计算",
    question: "6 人中选 3 名不设职务的代表，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "120"
    },
    {
      key: "C",
      text: "18"
    },
    {
      key: "D",
      text: "36"
    }
  ],
    correctAnswer: "A",
    explanation: "不考虑顺序，方法数 C₆³=6×5×4/6=20。"
  },
  {
    id: "g2-counting-combinations-02",
    topic: "组合",
    title: "至少条件",
    question: "3 名男生、2 名女生中选 3 人，至少有 1 名女生，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "9"
    },
    {
      key: "C",
      text: "6"
    },
    {
      key: "D",
      text: "7"
    }
  ],
    correctAnswer: "B",
    explanation: "全部 C₅³=10 种，减去全为男生的 C₃³=1 种，共 9 种。"
  },
  {
    id: "g2-counting-combinations-03",
    topic: "组合",
    title: "无标签分组",
    question: "4 人分成两个没有组名的两人组，有多少种分法？",
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
      text: "3"
    },
    {
      key: "D",
      text: "4"
    }
  ],
    correctAnswer: "C",
    explanation: "先选两人有 C₄²=6 种，但两组互换会重复计数，因此除以 2 得 3。"
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

export default function CombinationsPage() {
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
          <span className="text-slate-600">组合</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 07</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 7.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">组合</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">理解只与选取元素有关的计数任务，掌握组合数及分组、至少条件的处理。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%BB%84%E5%90%88" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"区分组合与排列"}</li>
                <li>{"掌握组合数公式、对称性与递推关系"}</li>
                <li>{"处理分类选人、至少条件和简单分组问题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"排列数、阶乘、分类与分步计数。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 组合的含义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从 n 个不同元素中取出 m 个，组成一组，称为一个组合。只要所选元素相同，无论写出的顺序如何，都算同一个组合。"}</p>
                  <Formula math={String.raw`\{A,B\}=\{B,A\}\quad\text{（同一组合）}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 组合数公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"每个 m 元素组合对应 m! 个排列。因此排列数除以内部全排列数，就得到组合数。公式适用于 0≤m≤n 的整数，并约定 Cₙ⁰=1。"}</p>
                  <Formula math={String.raw`C_n^m=\frac{A_n^m}{m!}=\frac{n!}{m!(n-m)!},\qquad C_n^0=1`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 对称性与递推"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"选出 m 个与留下 n−m 个一一对应，得到对称性。再按是否选中特定元素分类，可推导组合数的递推式，这也是杨辉三角的基础。"}</p>
                  <Formula math={String.raw`C_n^m=C_n^{n-m},\qquad C_n^m=C_{n-1}^{m-1}+C_{n-1}^m\quad(1\le m\le n-1)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 分类与至少条件"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"选人时含人数构成要求，可按所选某类人数分类，再将各类内的选取数相乘。若“至少一个”的反面更简单，可以用全部方案减去一个也没有的方案。"}</p>
                  <Formula math={String.raw`N_{\text{至少一个}}=N_{\text{全部}}-N_{\text{一个也没有}}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 选组与分组区别"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从多人中选出一组，通常直接用组合。把所有人分成若干无标签、人数相同的小组时，重复交换整组不会产生新分法，需要排除重复；若小组有不同任务或名称，则不能盲目除以组数的阶乘。"}</p>
                  <Formula math={String.raw`\text{四人分成两个无标签的两人组：}\quad\frac{C_4^2}{2!}=3`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"选代表不设职务"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"6 人中选 3 名代表，不设职务，有多少种选择？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"只看选出的人员，不考虑他们的排列次序。"}</li>
                      <li>{"使用组合数 C₆³，而不是 A₆³。"}</li>
                      <li>{"C₆³=6×5×4/(3×2×1)=20。"}</li>
                    </ol>
                    <Formula math={String.raw`C_6^3=20`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"至少选一名女生"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"3 名男生、2 名女生中选 3 人，至少含 1 名女生，有多少种？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"全部选法为 C₅³=10。"}</li>
                      <li>{"没有女生时只能选全部 3 名男生，方法数 C₃³=1。"}</li>
                      <li>{"相减得 9 种。也可按 1 名女生或 2 名女生分类核对。"}</li>
                    </ol>
                    <Formula math={String.raw`N=C_5^3-C_3^3=9`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"区分有无标签的分组"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"4 人分成两个 2 人小组，不指定组名，求分法数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"先选出一组有 C₄²=6 种。"}</li>
                      <li>{"每种实际分法会因先选哪一组而重复 2 次。"}</li>
                      <li>{"无标签分组数为 6/2=3；若指定 A、B 两组则为 6。"}</li>
                    </ol>
                    <Formula math={String.raw`N=\frac{C_4^2}{2}=3`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"职务、座位等使顺序有意义时不能直接用组合。"}</li>
              <li>{"“至少”条件可分类或用补集，但不要重复计算。"}</li>
              <li>{"无标签等人数分组要考虑整组交换造成的重复。"}</li></ul></section>
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
              <li>{"组合只看选中哪些元素。"}</li>
              <li>{"组合数等于排列数除以内部全排列数。"}</li>
              <li>{"复杂选择问题通过互斥分类、补集和一一对应来计数。"}</li></ul><Link href="/practice?topic=%E7%BB%84%E5%90%88" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“组合”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/counting/permutations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：排列</Link>
              <Link href="/grade2/counting/binomial" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：二项式定理 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第七章 · 计数原理</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "7.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "7.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "7.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
function CountingFigure(){const [n,setN]=useState(4),[m,setM]=useState(2);const k=Math.min(m,n),items=Array.from({length:n},(_,i)=>String.fromCharCode(65+i));const results:string[]=[];function enumerate(chosen:string[],start:number){if(chosen.length===k){results.push(chosen.join('、'));return;}for(let i=start;i<n;i++){if(chosen.includes(items[i]))continue;enumerate([...chosen,items[i]],i+1);}}enumerate([],0);return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE COUNTING</p><h2 className="mt-2 text-xl font-bold">动手观察：只选人员，不看顺序</h2><p className="mt-3 text-sm leading-7 text-slate-600">从不同元素中选出若干个组成一组，每组按字母顺序展示只是为了避免重复，不代表组内有职务或先后。</p><label className="mt-5 block">元素总数 n：{n}<input aria-label="元素总数 n" type="range" min="2" max="6" value={n} onChange={e=>{const v=Number(e.target.value);setN(v);setM(Math.min(m,v));}} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">选取个数 m：{k}<input aria-label="选取个数 m" type="range" min="1" max={n} value={k} onChange={e=>setM(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><p aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">组合数：{results.length}。{results.length>24?'下方展示前 24 种，其余已计入总数。':'下方展示全部结果。'}</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{results.slice(0,24).map(s=><span key={s} className="rounded-lg bg-slate-50 p-3 text-center text-sm">{s}</span>)}</div></section>;}
