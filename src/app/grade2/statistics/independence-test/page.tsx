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
    id: "g2-statistics-independence-01",
    topic: "独立性检验",
    title: "期望频数",
    question: "2×2 表中某行合计为 50、某列合计为 40、总数为 100，独立假设下该格期望频数为：",
    options: [
    {
      key: "A",
      text: "90"
    },
    {
      key: "B",
      text: "10"
    },
    {
      key: "C",
      text: "40"
    },
    {
      key: "D",
      text: "20"
    }
  ],
    correctAnswer: "D",
    explanation: "期望频数为行合计×列合计/总数=50×40/100=20。"
  },
  {
    id: "g2-statistics-independence-02",
    topic: "独立性检验",
    title: "计算统计量",
    question: "2×2 表 a=30、b=20、c=20、d=30，则 K² 等于：",
    options: [
    {
      key: "A",
      text: "4"
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
      text: "0"
    }
  ],
    correctAnswer: "A",
    explanation: "各格期望频数为 25，每格贡献 (5²)/25=1，四格合计 K²=4。"
  },
  {
    id: "g2-statistics-independence-03",
    topic: "独立性检验",
    title: "解释检验结果",
    question: "适用条件满足，K²=2，α=0.05 的临界值为 3.841。正确结论是：",
    options: [
    {
      key: "A",
      text: "证明两个变量独立"
    },
    {
      key: "B",
      text: "当前样本不足以拒绝独立假设"
    },
    {
      key: "C",
      text: "证明两个变量有因果关系"
    },
    {
      key: "D",
      text: "以 95% 概率认定独立"
    }
  ],
    correctAnswer: "B",
    explanation: "2<3.841，未达到拒绝标准，只能说明证据不足，不能证明独立或赋予假设成立概率。"
  }
];

const lessonSections = [
  {
    number: "9.1",
    title: "线性回归分析",
    href: "/grade2/statistics/linear-regression"
  },
  {
    number: "9.2",
    title: "独立性检验",
    href: "/grade2/statistics/independence-test"
  }
];

export default function IndependenceTestPage() {
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
          <Link href="/grade2/statistics" className="hover:text-blue-600">统计</Link><span>/</span>
          <span className="text-slate-600">独立性检验</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 09</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 9.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">独立性检验</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">建立 2×2 列联表，计算独立假设下的期望频数与检验统计量，正确解释检验结论。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%8B%AC%E7%AB%8B%E6%80%A7%E6%A3%80%E9%AA%8C" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"正确建立分类变量的 2×2 列联表"}</li>
                <li>{"在条件满足时计算卡方统计量并与临界值比较"}</li>
                <li>{"区分拒绝独立、证据不足与因果结论"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"分类计数、条件概率、独立性与频率。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 分类变量与列联表"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"对同一组观测对象分别记录两个二分类属性 A、B。把同时属于每种属性组合的人数记为 a、b、c、d，行列合计应与总样本量 n 一致。一个对象只能进入一个格子。"}</p>
                  <Formula math={String.raw`\begin{array}{c|cc|c}&B\text{ 是}&B\text{ 否}&\text{合计}\\\hline A\text{ 是}&a&b&a+b\\A\text{ 否}&c&d&c+d\\\hline\text{合计}&a+c&b+d&n\end{array}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 零假设与期望频数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"零假设 H₀ 为两个分类变量相互独立。独立假设下，每个格子的期望频数是对应行合计与列合计的乘积除以总数。它通常不等于实际观测频数。"}</p>
                  <Formula math={String.raw`H_0:A\text{ 与 }B\text{ 独立},\qquad E_{ij}=\frac{\text{第 }i\text{ 行合计}\times\text{第 }j\text{ 列合计}}{n}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 检验统计量"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"比较观测频数 O 与独立假设下的期望频数 E。偏离越大，统计量通常越大。对 2×2 表，公式可化为 a、b、c、d 的形式，行列合计必须非零。"}</p>
                  <Formula math={String.raw`K^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}=\frac{n(ad-bc)^2}{(a+b)(c+d)(a+c)(b+d)}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 适用条件与临界值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"需要合理的随机抽样与相互独立的观测。使用本节卡方近似时，通常要求各格期望频数均不小于 5。2×2 表自由度为 1，常用显著性水平与临界值如下。"}</p>
                  <Formula math={String.raw`\begin{array}{c|ccc}\alpha&0.10&0.05&0.01\\\hline\text{临界值}&2.706&3.841&6.635\end{array}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"期望频数太小，不能只凭本表与统计量硬下检验结论；应考虑增加样本或适当的精确方法。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 检验决策"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"先设定显著性水平，再计算统计量。统计量达到或超过相应临界值时拒绝独立假设；低于临界值时，只能说当前样本不足以拒绝独立，不能证明两变量独立。"}</p>
                  <Formula math={String.raw`K^2\ge k_\alpha\Rightarrow\text{在水平 }\alpha\text{ 下拒绝 }H_0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 结论的含义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"显著性水平控制的是独立假设成立时，检验错误拒绝它的长期概率，并非本次 H₀ 成立或不成立的概率。检验发现关联，也不自动说明两个属性之间存在因果关系。"}</p>
                  <Formula math={String.raw`\text{显著关联}\ \not\Rightarrow\ \text{因果关系}`} />
                </article>
              </div>
            </section>
            <StatisticsFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"计算期望频数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某 2×2 表为 a=30、b=20、c=20、d=30，求总数与独立假设下各格期望频数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"两行合计均为 50，两列合计也均为 50，总数 n=100。"}</li>
                      <li>{"任一格期望频数为 50×50/100=25。"}</li>
                      <li>{"四格期望均为 25，满足常用的不小于 5 的条件；仍需结合抽样与观测独立性。"}</li>
                    </ol>
                    <Formula math={String.raw`n=100,\qquad E_{11}=E_{12}=E_{21}=E_{22}=25`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"计算并比较临界值"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"沿用上表，在显著性水平 0.05 下进行独立性检验。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"K² 可由四格的 (O−E)²/E 求和，每格为 25/25=1。"}</li>
                      <li>{"K²=4，达到 0.05 水平临界值 3.841。"}</li>
                      <li>{"若抽样等前提满足，在 0.05 水平拒绝独立假设，认为有证据表明两属性有关联。"}</li>
                    </ol>
                    <Formula math={String.raw`K^2=4>3.841`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"理解证据不足"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某个适用条件满足的 2×2 表检验得到 K²=2。在 α=0.05 下应如何解释？"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"临界值为 3.841，而 2<3.841。"}</li>
                      <li>{"因此不能在 0.05 水平拒绝独立假设。"}</li>
                      <li>{"只能说样本证据不足以说明有关联，不能把它写成“已经证明独立”。"}</li>
                    </ol>
                    <Formula math={String.raw`2<3.841\quad\Longrightarrow\quad\text{不足以拒绝独立假设}`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"适用条件看期望频数，不是只看观测频数或总人数。"}</li>
              <li>{"不能把“未拒绝独立”写成“已经证明独立”。"}</li>
              <li>{"显著性水平不是零假设成立的概率，关联也不等于因果。"}</li></ul></section>
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
              <li>{"先建列联表、明确独立假设并检查适用条件。"}</li>
              <li>{"用观测与期望的差异构造统计量，再按预设水平比较。"}</li>
              <li>{"结论应说明证据强弱与前提，不作因果或确定性推断。"}</li></ul><Link href="/practice?topic=%E7%8B%AC%E7%AB%8B%E6%80%A7%E6%A3%80%E9%AA%8C" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“独立性检验”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/statistics/linear-regression" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：线性回归分析</Link>
              <Link href="/grade2/statistics" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">返回本章目录 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第九章 · 统计</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "9.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "9.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "9.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互直接维护在本页。 */
function StatisticsFigure(){const [a,setA]=useState(30),[b,setB]=useState(20),[c,setC]=useState(20),[d,setD]=useState(30),[alpha,setAlpha]=useState('0.05');const n=a+b+c+d;const expected=[(a+b)*(a+c)/n,(a+b)*(b+d)/n,(c+d)*(a+c)/n,(c+d)*(b+d)/n];const statistic=n*(a*d-b*c)**2/((a+b)*(c+d)*(a+c)*(b+d));const critical=alpha==='0.10'?2.706:alpha==='0.05'?3.841:6.635;const adequate=expected.every(v=>v>=5);const counts=[a,b,c,d],setters=[setA,setB,setC,setD];const labels=['A是、B是的人数 a','A是、B否的人数 b','A否、B是的人数 c','A否、B否的人数 d'];return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE STATISTICS</p><h2 className="mt-2 text-xl font-bold">动手观察：列联表与独立性检验</h2><p className="mt-3 text-sm leading-7 text-slate-600">调整四格观测频数，比较独立假设下的期望与统计量。本演示检查期望频数，实际检验仍要求合理抽样与观测相互独立。</p><div className="mt-5 overflow-x-auto"><table className="w-full text-center text-sm"><caption className="mb-3 text-left text-slate-500">2×2 列联表：每格为观测频数</caption><thead><tr><th className="p-2">属性</th><th className="p-2">B是</th><th className="p-2">B否</th><th className="p-2">合计</th></tr></thead><tbody><tr className="bg-blue-50"><th className="p-2">A是</th><td>{a}</td><td>{b}</td><td>{a+b}</td></tr><tr><th className="p-2">A否</th><td>{c}</td><td>{d}</td><td>{c+d}</td></tr><tr className="bg-slate-50"><th className="p-2">合计</th><td>{a+c}</td><td>{b+d}</td><td>{n}</td></tr></tbody></table></div><div className="mt-5 grid gap-4 sm:grid-cols-2">{counts.map((value,i)=><label key={labels[i]} className="text-sm">{labels[i]}：{value}<input aria-label={labels[i]} type="range" min="1" max="50" value={value} onChange={e=>setters[i](Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>)}</div><label className="mt-5 block text-sm">显著性水平<select aria-label="显著性水平" value={alpha} onChange={e=>setAlpha(e.target.value)} className="ml-3 rounded-lg border border-slate-200 bg-white p-2"><option value="0.10">0.10</option><option value="0.05">0.05</option><option value="0.01">0.01</option></select></label><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7"><p>总数 n={n}；各格期望频数：{expected.map(v=>v.toFixed(2)).join('，')}。</p><p>K² = {statistic.toFixed(3)}；临界值 = {critical}。</p><p>{!adequate?'存在期望频数小于 5 的格子，本节卡方近似条件不足，不给出拒绝或不拒绝的检验结论。':statistic>=critical?'若抽样等其他前提满足，在所选显著性水平下拒绝独立假设，有证据表明存在关联。':'若抽样等其他前提满足，当前样本不足以拒绝独立假设，不能据此证明独立。'}</p></div></section>;}
