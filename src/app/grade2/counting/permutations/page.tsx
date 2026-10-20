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
    id: "g2-counting-permutations-01",
    topic: "排列",
    title: "排列数计算",
    question: "从 5 人中选组长和副组长各 1 人，不能兼任，方案数为：",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "20"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "120"
    }
  ],
    correctAnswer: "B",
    explanation: "角色不同，使用排列数 A₅²=5×4=20。"
  },
  {
    id: "g2-counting-permutations-02",
    topic: "排列",
    title: "全排列",
    question: "4 本不同的书排成一列，共有多少种排法？",
    options: [
    {
      key: "A",
      text: "12"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "24"
    },
    {
      key: "D",
      text: "48"
    }
  ],
    correctAnswer: "C",
    explanation: "4 本不同书的全排列数为 4!=24。"
  },
  {
    id: "g2-counting-permutations-03",
    topic: "排列",
    title: "相邻限制",
    question: "5 人排一列，甲、乙相邻，排法数为：",
    options: [
    {
      key: "A",
      text: "24"
    },
    {
      key: "B",
      text: "72"
    },
    {
      key: "C",
      text: "120"
    },
    {
      key: "D",
      text: "48"
    }
  ],
    correctAnswer: "D",
    explanation: "甲乙捆绑后共有 4 个整体，内部再排甲乙，共 4!×2!=48。"
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

export default function PermutationsPage() {
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
          <span className="text-slate-600">排列</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 07</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 7.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">排列</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">理解顺序影响结果的计数任务，掌握排列数及相邻、特殊位置限制的处理。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%8E%92%E5%88%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"辨别排列问题并正确使用排列数公式"}</li>
                <li>{"理解阶乘和全排列"}</li>
                <li>{"用特殊位置优先、捆绑与插空处理简单限制"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"分步乘法原理。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 排列的含义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从 n 个不同元素中取出 m 个，按照一定顺序排成一列，称为一个排列。元素相同但顺序不同的两个结果，仍是不同排列。本节不允许重复选同一元素。"}</p>
                  <Formula math={String.raw`0\le m\le n,\qquad n,m\in\mathbb Z`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 排列数公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"第一个位置有 n 种选择，第二个位置有 n−1 种，以此类推，第 m 个位置有 n−m+1 种，由乘法原理得到排列数。"}</p>
                  <Formula math={String.raw`A_n^m=n(n-1)\cdots(n-m+1)=\frac{n!}{(n-m)!}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 阶乘与全排列"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"n! 表示从 1 到 n 的正整数连乘。把 n 个不同元素全部排列称为全排列，数目为 n!。约定 0!=1，与排列公式在边界情况保持一致。"}</p>
                  <Formula math={String.raw`A_n^n=n!,\qquad 0!=1,\qquad A_n^0=1`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 特殊位置优先"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若某些位置限制较多，优先安排这些位置，再安排其余位置。例如多位数的首位、指定角色的岗位等，不能先按完全自由的方式套用公式。"}</p>
                  <Formula math={String.raw`\text{先安排限制位置}\ \longrightarrow\ \text{再排其余元素}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 相邻与不相邻"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"要求某些元素相邻时，可先把它们捆成一个整体，排列整体后再排列内部。要求不相邻时，可先排其他元素，再从空隙中选择位置插入。"}</p>
                  <Formula math={String.raw`\text{相邻：捆绑并排内部；不相邻：先排其余，再选空隙}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"捆绑后别漏掉块内部的顺序；插空时应明确两端空隙是否允许使用。"}</p>
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"安排不同职务"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"5 名学生中选 1 名组长和 1 名副组长，不能兼任，有多少种安排？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"两个职务不同，先后角色的互换形成不同方案。"}</li>
                      <li>{"组长有 5 种选择，副组长有 4 种。"}</li>
                      <li>{"共 A₅²=20 种。"}</li>
                    </ol>
                    <Formula math={String.raw`A_5^2=5\times4=20`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"指定两人相邻"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"5 人站一排，甲、乙必须相邻，有多少种站法？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"把甲、乙捆成一个整体，与其余 3 人一起排列，共 4! 种。"}</li>
                      <li>{"整体内部甲乙、乙甲有 2! 种顺序。"}</li>
                      <li>{"总数为 4!×2!=48。"}</li>
                    </ol>
                    <Formula math={String.raw`N=4!\cdot2!=48`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"两人不相邻"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"5 人站一排，甲、乙不相邻，有多少种站法？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"先排其余 3 人，有 3! 种。"}</li>
                      <li>{"他们形成 4 个可用空隙，包括两端。"}</li>
                      <li>{"甲乙分别插入不同空隙，共 A₄² 种，总数为 3!×A₄²=72。"}</li>
                    </ol>
                    <Formula math={String.raw`N=3!\cdot A_4^2=72`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"排列默认不同元素且不重复选取；允许重复时须另建模型。"}</li>
              <li>{"全排列与部分排列不要混淆。"}</li>
              <li>{"捆绑要排内部，插空要数清空隙。"}</li></ul></section>
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
              <li>{"选择哪些元素以及它们的顺序共同决定一个排列。"}</li>
              <li>{"排列数来自逐位置选择。"}</li>
              <li>{"有限制时先设计计数顺序，再使用公式。"}</li></ul><Link href="/practice?topic=%E6%8E%92%E5%88%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“排列”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/counting/principles" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：两个基本计数原理</Link>
              <Link href="/grade2/counting/combinations" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：组合 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第七章 · 计数原理</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "7.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "7.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "7.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
function CountingFigure(){const [n,setN]=useState(4),[m,setM]=useState(2);const k=Math.min(m,n),items=Array.from({length:n},(_,i)=>String.fromCharCode(65+i));const results:string[]=[];function enumerate(chosen:string[]){if(chosen.length===k){results.push(chosen.join(' → '));return;}for(let i=0;i<n;i++){if(chosen.includes(items[i]))continue;enumerate([...chosen,items[i]]);}}enumerate([]);return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE COUNTING</p><h2 className="mt-2 text-xl font-bold">动手观察：顺序不同，排列不同</h2><p className="mt-3 text-sm leading-7 text-slate-600">从不同元素中选出若干个并依次排入位置，箭头表示从第一个位置到最后一个位置。</p><label className="mt-5 block">元素总数 n：{n}<input aria-label="元素总数 n" type="range" min="2" max="6" value={n} onChange={e=>{const v=Number(e.target.value);setN(v);setM(Math.min(m,v));}} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">选取个数 m：{k}<input aria-label="选取个数 m" type="range" min="1" max={n} value={k} onChange={e=>setM(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><p aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-800">排列数：{results.length}。{results.length>24?'下方展示前 24 种，其余已计入总数。':'下方展示全部结果。'}</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{results.slice(0,24).map(s=><span key={s} className="rounded-lg bg-slate-50 p-3 text-center text-sm">{s}</span>)}</div></section>;}
