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
    id: "g2-counting-principles-01",
    topic: "两个基本计数原理",
    title: "分类计数",
    question: "3 本不同数学书与 2 本不同物理书中任选 1 本，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "5"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "B",
    explanation: "任选一本时两类均可独立完成，方法数为 3+2=5。"
  },
  {
    id: "g2-counting-principles-02",
    topic: "两个基本计数原理",
    title: "分步计数",
    question: "从 3 件不同上衣和 4 条不同裤子中各选一件搭配，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "7"
    },
    {
      key: "B",
      text: "24"
    },
    {
      key: "C",
      text: "12"
    },
    {
      key: "D",
      text: "16"
    }
  ],
    correctAnswer: "C",
    explanation: "上衣与裤子都要选择，按分步原理，3×4=12。"
  },
  {
    id: "g2-counting-principles-03",
    topic: "两个基本计数原理",
    title: "限制首位",
    question: "用 0、1、2、3 组成无重复数字的两位数，共有多少个？",
    options: [
    {
      key: "A",
      text: "12"
    },
    {
      key: "B",
      text: "6"
    },
    {
      key: "C",
      text: "8"
    },
    {
      key: "D",
      text: "9"
    }
  ],
    correctAnswer: "D",
    explanation: "十位有 3 种非零选择，每种情况下个位有剩余 3 种，共 9 个。"
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

export default function CountingPrinciplesPage() {
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
          <span className="text-slate-600">两个基本计数原理</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 07</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 7.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">两个基本计数原理</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">辨别分类完成与分步完成，用加法、乘法及适当的排除方法计数。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E4%B8%A4%E4%B8%AA%E5%9F%BA%E6%9C%AC%E8%AE%A1%E6%95%B0%E5%8E%9F%E7%90%86" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"根据完成一件事的标准区分分类与分步"}</li>
                <li>{"使用加法、乘法并处理混合过程"}</li>
                <li>{"检查分类是否互斥、穷尽，避免重复与遗漏"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"集合的并集、交集与基本整数运算。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 分类加法原理"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"完成一件事有若干类互不重叠的方法，每一类都能独立完成这件事。各类方法数相加就是总方法数，分类必须穷尽全部可能。"}</p>
                  <Formula math={String.raw`N=m_1+m_2+\cdots+m_k`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 分步乘法原理"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"完成一件事需要依次完成若干步骤，每一步单独完成还不算完成整件事。若无论前面如何选择，后续各步可选方法数保持相应固定值，则总数为各步方法数的乘积。"}</p>
                  <Formula math={String.raw`N=m_1m_2\cdots m_k`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"关键是看每一类是否能独立完成，或各步骤是否缺一不可。不能仅凭题干中出现“或”“和”机械选公式。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 用具体任务区分"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"从 3 本数学书和 2 本物理书中任选 1 本，是分类相加；分别选 1 本数学书和 1 本物理书，是分步相乘。任务的完成标准不同，结果也不同。"}</p>
                  <Formula math={String.raw`N_{\text{任选一本}}=3+2=5,\qquad N_{\text{各选一本}}=3\times2=6`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 混合计数与树状图"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"较复杂的任务可以先分类，每一类内部再分步。树状图中从根到叶的一条完整路径对应一种完成方法，应确保路径与实际方案一一对应。"}</p>
                  <Formula math={String.raw`N=\sum_{i=1}^{k}N_i`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 重叠与补集"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"两类方法有重叠时，直接相加会重复计算，应减去交集。当不符合条件的情形较容易数时，可以用全部减去不符合条件的方案。"}</p>
                  <Formula math={String.raw`|A\cup B|=|A|+|B|-|A\cap B|,\qquad N_{\text{满足}}=N_{\text{全部}}-N_{\text{不满足}}`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"两种交通方式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"从甲地到乙地有 3 班不同火车和 2 班不同直达汽车，任选一班直达，多少种方式？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"乘任一班火车或任一班汽车均可独立完成旅程。"}</li>
                      <li>{"两类交通班次互不相同，不会重复计数。"}</li>
                      <li>{"由分类加法原理，总数为 3+2=5。"}</li>
                    </ol>
                    <Formula math={String.raw`N=5`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"经中转站的行程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"甲到乙有 3 条路线，乙到丙有 4 条路线，必须经乙到丙，有多少种路线组合？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"完成行程必须依次选择甲到乙、乙到丙两段。"}</li>
                      <li>{"每选定前一段后，后一段仍有 4 种选择。"}</li>
                      <li>{"按分步乘法原理，共 3×4=12 种。"}</li>
                    </ol>
                    <Formula math={String.raw`N=3\times4=12`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"先数全部再排除"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"用数字 0、1、2、3 组成无重复数字的两位数，有多少个？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"十位只能选 1、2、3，共 3 种。"}</li>
                      <li>{"十位选定后，个位可在剩余 3 个数字中选择，包括 0。"}</li>
                      <li>{"共有 3×3=9 个；也可由 4×3 减去首位为 0 的 3 个。"}</li>
                    </ol>
                    <Formula math={String.raw`N=3\times3=4\times3-3=9`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"分类必须互斥且穷尽，重叠情形不能直接相加。"}</li>
              <li>{"分步时要核对前一步的选择是否改变后一步可选数量。"}</li>
              <li>{"组成多位数时，首位不能为零。"}</li></ul></section>
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
              <li>{"独立完成的不同类别相加，缺一不可的步骤相乘。"}</li>
              <li>{"复杂任务先明确完成标准，再分类与分步。"}</li>
              <li>{"用树状图、补集和排除重叠检查遗漏与重复。"}</li></ul><Link href="/practice?topic=%E4%B8%A4%E4%B8%AA%E5%9F%BA%E6%9C%AC%E8%AE%A1%E6%95%B0%E5%8E%9F%E7%90%86" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“两个基本计数原理”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/spatial-vectors/applications" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：空间向量的应用</Link>
              <Link href="/grade2/counting/permutations" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：排列 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第七章 · 计数原理</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "7.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "7.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "7.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
function CountingFigure(){const [n,setN]=useState(3),[m,setM]=useState(2),[mode,setMode]=useState('steps');const total=mode==='steps'?n*m:n+m;return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE COUNTING</p><h2 className="mt-2 text-xl font-bold">动手观察：分类与分步</h2><label className="mt-5 block text-sm">任务<select aria-label="计数任务" value={mode} onChange={e=>setMode(e.target.value)} className="ml-3 rounded-lg border border-slate-200 bg-white p-2"><option value="steps">上衣与裤子各选一件</option><option value="classes">上衣或裤子任选一件</option></select></label><div className="mt-5 grid gap-4 sm:grid-cols-2"><label>上衣件数：{n}<input aria-label="上衣件数" type="range" min="1" max="5" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><label>裤子件数：{m}<input aria-label="裤子件数" type="range" min="1" max="5" value={m} onChange={e=>setM(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label></div><div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">{Array.from({length:total},(_,i)=><span key={i} className="rounded-lg bg-blue-50 p-3 text-center text-xs text-blue-800">{mode==='steps'?'上衣'+(Math.floor(i/m)+1)+' + 裤子'+(i%m+1):i<n?'上衣'+(i+1):'裤子'+(i-n+1)}</span>)}</div><p aria-live="polite" className="mt-5 rounded-xl bg-slate-50 p-4 text-sm">{mode==='steps'?'两步都要完成：'+n+'×'+m:'每类独立完成：'+n+'+'+m} = {total} 种。</p></section>;}
