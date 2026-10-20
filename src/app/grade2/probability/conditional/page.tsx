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
    id: "g2-probability-conditional-01",
    topic: "条件概率",
    title: "条件范围计数",
    question: "掷一枚均匀骰子，已知点数为偶数，则点数大于 3 的概率为：",
    options: [
    {
      key: "A",
      text: "1/2"
    },
    {
      key: "B",
      text: "2/3"
    },
    {
      key: "C",
      text: "1/3"
    },
    {
      key: "D",
      text: "3/4"
    }
  ],
    correctAnswer: "B",
    explanation: "偶数范围为 2、4、6，其中 4、6 大于 3，因此概率为 2/3。"
  },
  {
    id: "g2-probability-conditional-02",
    topic: "条件概率",
    title: "不放回抽样",
    question: "袋中 3 红 2 蓝，依次不放回取两球，已知第一球为红，则第二球为红的概率为：",
    options: [
    {
      key: "A",
      text: "3/5"
    },
    {
      key: "B",
      text: "2/5"
    },
    {
      key: "C",
      text: "1/2"
    },
    {
      key: "D",
      text: "3/4"
    }
  ],
    correctAnswer: "C",
    explanation: "第一红取走后剩 2 红 2 蓝，所以条件概率为 2/4=1/2。"
  },
  {
    id: "g2-probability-conditional-03",
    topic: "条件概率",
    title: "乘法公式",
    question: "若 P(A)=0.6，P(B|A)=0.5，则 P(A∩B) 为：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.6"
    },
    {
      key: "C",
      text: "1.1"
    },
    {
      key: "D",
      text: "0.3"
    }
  ],
    correctAnswer: "D",
    explanation: "由乘法公式，P(A∩B)=P(A)P(B|A)=0.6×0.5=0.3。"
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

export default function ConditionalPage() {
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
          <span className="text-slate-600">条件概率</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 08</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 8.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">条件概率</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">在已知事件发生的条件下重新确定概率，理解乘法公式、独立性与全概率方法。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解条件概率的样本范围与定义"}</li>
                <li>{"运用乘法公式并区分独立与互斥"}</li>
                <li>{"在简单分组情境中使用全概率公式与逆向条件概率"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"高一概率、集合交集、分类与分步计数。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 条件缩小样本范围"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"已知事件 A 已发生时，只在 A 的范围内讨论 B 的概率，记为 P(B|A)。分母是条件事件 A 的概率，必须大于零。一般 P(B|A) 与 P(A|B) 不同。"}</p>
                  <Formula math={String.raw`P(B\mid A)=\frac{P(A\cap B)}{P(A)},\qquad P(A)>0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 等可能样本中的条件概率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若有限样本空间中每个基本结果等可能，可以在 A 中直接计数，分子为同时属于 A、B 的结果数。若各结果不等可能，不能只数个数。"}</p>
                  <Formula math={String.raw`P(B\mid A)=\frac{|A\cap B|}{|A|}\quad\text{（等可能情形）}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 概率乘法公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"把条件概率定义移项，得到两个事件同时发生的概率。若交换先后顺序，就要相应交换条件概率中的条件。"}</p>
                  <Formula math={String.raw`P(A\cap B)=P(A)P(B\mid A)=P(B)P(A\mid B)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 独立不等于互斥"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 A 的发生不影响 B 的概率，可用乘积判定独立。互斥则指不能同时发生。两个概率都为正的互斥事件不独立；独立事件可以同时发生。"}</p>
                  <Formula math={String.raw`A,B\text{ 独立}\iff P(A\cap B)=P(A)P(B)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"连续抽球要先说明是否放回。不放回会改变剩余构成，不能直接把各次抽球当作独立事件。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 分类与全概率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 A₁、…、Aₖ 互斥且穷尽样本空间，并且每类概率为正，可以按来源分类计算 B 的概率。先求每类与 B 同时发生，再相加。"}</p>
                  <Formula math={String.raw`P(B)=\sum_{i=1}^{k}P(A_i)P(B\mid A_i)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 逆向条件概率"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"知道结果 B 已发生时，反求它来自某一类 Aᵢ 的概率，应以 B 的总概率为分母。可以结合乘法公式与全概率公式推导，不能把条件直接颠倒。"}</p>
                  <Formula math={String.raw`P(A_i\mid B)=\frac{P(A_i)P(B\mid A_i)}{\sum_jP(A_j)P(B\mid A_j)}\quad(P(B)>0)`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"掷骰子后的条件"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"掷一枚均匀骰子，已知点数为偶数，求点数大于 3 的概率。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"条件范围为 {2，4，6}，三个结果等可能。"}</li>
                      <li>{"其中大于 3 的结果为 {4，6}。"}</li>
                      <li>{"条件概率为 2/3，而不是整个样本空间中的 3/6。"}</li>
                    </ol>
                    <Formula math={String.raw`P(B\mid A)=\frac23`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"不放回抽球"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"袋中 3 个红球、2 个蓝球，随机依次取 2 球且不放回。已知第一球为红，求第二球为红及两球均红的概率。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"第一球为红后，袋中剩 2 红 2 蓝。"}</li>
                      <li>{"条件概率 P(第二红|第一红)=2/4=1/2。"}</li>
                      <li>{"两球均红的概率为 (3/5)×(1/2)=3/10。"}</li>
                    </ol>
                    <Formula math={String.raw`P(B\mid A)=\frac12,\qquad P(A\cap B)=\frac3{10}`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"先分类再逆向判断"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某组男生占 60%，女生占 40%，通过测试的概率分别为 0.8、0.9。随机选 1 人，求通过概率，以及已知通过时为男生的概率。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"通过概率按男女分类：0.6×0.8+0.4×0.9=0.84。"}</li>
                      <li>{"男生且通过的概率为 0.6×0.8=0.48。"}</li>
                      <li>{"已知通过后为男生的概率是 0.48/0.84=4/7。"}</li>
                    </ol>
                    <Formula math={String.raw`P(B)=0.84,\qquad P(A\mid B)=\frac47`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"条件事件写在竖线右侧，分母必须是它的概率。"}</li>
              <li>{"独立、互斥是两种不同关系，不能混用。"}</li>
              <li>{"P(B|A) 不能直接写成 P(A|B)，逆向问题需要重新计算。"}</li></ul></section>
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
              <li>{"条件概率是在已知事件内重新计算概率。"}</li>
              <li>{"乘法公式与全概率公式可连接分阶段、分来源的事件。"}</li>
              <li>{"先明确条件、事件关系与抽样方式，再选择公式。"}</li></ul><Link href="/practice?topic=%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“条件概率”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/counting/binomial" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：二项式定理</Link>
              <Link href="/grade2/probability/discrete-distributions" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：离散型随机变量及其分布列 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第八章 · 概率</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "8.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "8.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "8.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
function ProbabilityFigure(){const [replacement,setReplacement]=useState('without'),[first,setFirst]=useState('red');const replace=replacement==='with';const denominator=replace?5:4;const redAfter=(first==='red'&&!replace?2:3)/denominator;const firstChance=first==='red'?3/5:2/5;const branches=[['红→红',3/5*(replace?3/5:2/4)],['红→蓝',3/5*(replace?2/5:2/4)],['蓝→红',2/5*(replace?3/5:3/4)],['蓝→蓝',2/5*(replace?2/5:1/4)]] as const;return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE PROBABILITY</p><h2 className="mt-2 text-xl font-bold">动手观察：放回是否改变条件概率</h2><p className="mt-3 text-sm leading-7 text-slate-600">袋中 3 红 2 蓝，每个球被抽中的机会相同，依次抽取两球。下列四个颜色路径的概率总和为 1。</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><label>抽球方式<select aria-label="抽球方式" value={replacement} onChange={e=>setReplacement(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-2"><option value="without">不放回</option><option value="with">放回后混匀再抽</option></select></label><label>已知第一球<select aria-label="已知第一球" value={first} onChange={e=>setFirst(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-2"><option value="red">红球</option><option value="blue">蓝球</option></select></label></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{branches.map(([name,p])=><div key={name} className="rounded-xl bg-blue-50 p-4 text-sm"><p>{name}</p><p className="mt-2 font-semibold">{p.toFixed(3)}</p></div>)}</div><div aria-live="polite" className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7"><p>P(第二红 | 第一{first==='red'?'红':'蓝'}) = {redAfter.toFixed(3)}。</p><p>P(第一{first==='red'?'红':'蓝'}且第二红) = {(firstChance*redAfter).toFixed(3)}。</p><p>第二球为红的边际概率始终为 0.600。{replace?'放回并混匀时，两次颜色独立。':'不放回时，条件改变了第二球为红的概率。'}</p></div></section>;}
