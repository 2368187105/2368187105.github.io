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
    id: "g2-statistics-regression-01",
    topic: "线性回归分析",
    title: "均值点性质",
    question: "含截距的一元线性最小二乘回归直线一定经过：",
    options: [
    {
      key: "A",
      text: "原点"
    },
    {
      key: "B",
      text: "样本均值点 (x̄，ȳ)"
    },
    {
      key: "C",
      text: "每个观测点"
    },
    {
      key: "D",
      text: "第一个观测点"
    }
  ],
    correctAnswer: "B",
    explanation: "由 â=ȳ−b̂x̄ 可知，代入 x̄ 时预测值为 ȳ。"
  },
  {
    id: "g2-statistics-regression-02",
    topic: "线性回归分析",
    title: "计算残差",
    question: "回归方程 ŷ=1+2x，观测点为 (2，6)，该点残差为：",
    options: [
    {
      key: "A",
      text: "−1"
    },
    {
      key: "B",
      text: "0"
    },
    {
      key: "C",
      text: "1"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "C",
    explanation: "x=2 时预测值为 5，残差为实际值 6 减预测值 5，即 1。"
  },
  {
    id: "g2-statistics-regression-03",
    topic: "线性回归分析",
    title: "解释相关系数",
    question: "若样本相关系数 r=−0.9，下列解释正确的是：",
    options: [
    {
      key: "A",
      text: "没有线性相关"
    },
    {
      key: "B",
      text: "x 必然导致 y 减少"
    },
    {
      key: "C",
      text: "强正线性相关"
    },
    {
      key: "D",
      text: "较强负线性相关"
    }
  ],
    correctAnswer: "D",
    explanation: "r 为负且绝对值较大，说明样本有较强负线性相关，但不能由相关直接推断因果。"
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

export default function LinearRegressionPage() {
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
          <span className="text-slate-600">线性回归分析</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 09</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 9.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">线性回归分析</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">从散点图识别线性趋势，用最小二乘法拟合回归直线，分析残差与预测范围。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"用散点图和相关系数描述线性相关"}</li>
                <li>{"计算含截距的一元线性回归方程"}</li>
                <li>{"解释残差、决定系数和预测的适用范围"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"高一统计中的均值、方差、散点图，直线方程。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 散点图与相关关系"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"每对观测值 (xᵢ，yᵢ) 对应一个点。总体呈右上趋势时可能正相关，呈右下趋势时可能负相关。统计相关描述共同变化，不等于一方变化导致另一方变化。"}</p>
                  <Formula math={String.raw`(x_1,y_1),\ldots,(x_n,y_n)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 样本相关系数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"相关系数 r 描述线性相关的方向与强弱，取值在 −1 到 1 之间。两变量的样本离差平方和都为正时公式才有定义。|r| 接近 0 只表示线性相关弱，仍可能有明显非线性关系。"}</p>
                  <Formula math={String.raw`r=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum_i(x_i-\bar x)^2\sum_i(y_i-\bar y)^2}},\qquad -1\le r\le1`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 最小二乘回归直线"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"用 ŷ=â+b̂x 近似描述 y 与 x 的关系，选择使样本纵向残差平方和最小的直线。自变量不能全相同，否则不能用本公式确定斜率。"}</p>
                  <Formula math={String.raw`\hat y=\hat a+\hat b x,\quad\hat b=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2},\quad\hat a=\bar y-\hat b\bar x`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 均值点与残差"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"含截距的最小二乘直线经过样本均值点。残差等于观测值减预测值，可以为正、负或零；用残差图检查是否出现弯曲、波动随 x 改变等明显规律。"}</p>
                  <Formula math={String.raw`(\bar x,\bar y)\text{ 在回归直线上},\quad e_i=y_i-\hat y_i,\quad\sum_i e_i=0`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 决定系数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"在含截距的一元线性最小二乘模型中，且 y 的离差平方和大于零时，决定系数 R²=1−残差平方和/总离差平方和，等于 r²。它描述样本变异被线性拟合解释的比例，不是预测必然准确的保证。"}</p>
                  <Formula math={String.raw`R^2=1-\frac{\sum_i(y_i-\hat y_i)^2}{\sum_i(y_i-\bar y)^2}=r^2`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 预测与数据范围"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"将 x 代入回归方程可得到 y 的预测值，但预测不是确定结果。优先在观测范围内使用，超范围外推可能失真；异常点、遗漏变量及抽样方式都可能影响结论。"}</p>
                  <Formula math={String.raw`x=x_0\quad\Longrightarrow\quad\hat y_0=\hat a+\hat b x_0`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"计算回归直线"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"观测点为 (1，2)、(2，3)、(3，5)、(4，4)、(5，6)，求 y 关于 x 的回归方程。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"均值 x̄=3、ȳ=4。"}</li>
                      <li>{"Sₓₓ=4+1+0+1+4=10，Sₓᵧ=4+1+0+0+4=9。"}</li>
                      <li>{"b̂=9/10=0.9，â=4−0.9×3=1.3。"}</li>
                    </ol>
                    <Formula math={String.raw`\hat y=1.3+0.9x`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"预测值与残差"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"沿用上例的回归直线，求 x=3 的预测值与对应观测点 (3，5) 的残差。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"代入 x=3 得 ŷ=1.3+0.9×3=4。"}</li>
                      <li>{"残差为实际值 5 减预测值 4，得到 1。"}</li>
                      <li>{"正残差表示该观测值在拟合直线的上方。"}</li>
                    </ol>
                    <Formula math={String.raw`\hat y=4,\qquad e=5-4=1`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"解释相关与外推"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"某样本 r=−0.9，含截距的一元线性回归拟合有效。求 R²，并说明能否由此证明 x 导致 y 下降。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"r<0 表示负线性相关，|r|=0.9 表示较强的线性趋势。"}</li>
                      <li>{"在所给模型条件下，R²=r²=0.81。"}</li>
                      <li>{"相关与拟合不能单独建立因果关系，超出样本范围的预测仍需额外依据。"}</li>
                    </ol>
                    <Formula math={String.raw`R^2=0.81`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"回归方程中的 ŷ 是预测值，不是每个点都必然满足的恒等式。"}</li>
              <li>{"残差用实际值减预测值，相关系数符号表示方向。"}</li>
              <li>{"线性相关不等于因果关系，R² 大也不能保证外推可靠。"}</li></ul></section>
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
              <li>{"先用散点图检查是否适合线性模型，再计算回归系数。"}</li>
              <li>{"含截距的最小二乘直线经过均值点，残差总和为零。"}</li>
              <li>{"解释相关与预测时，应说明模型条件、样本范围和局限。"}</li></ul><Link href="/practice?topic=%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92%E5%88%86%E6%9E%90" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“线性回归分析”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/probability/normal-distribution" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：正态分布</Link>
              <Link href="/grade2/statistics/independence-test" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：独立性检验 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第九章 · 统计</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "9.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "9.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "9.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互直接维护在本页，SVG 坐标取固定精度。 */
function StatisticsFigure(){const [lastY,setLastY]=useState(6),[predictX,setPredictX]=useState(3);const xs=[1,2,3,4,5],ys=[2,3,5,4,lastY],mx=3,my=ys.reduce((s,v)=>s+v,0)/5;const sxx=xs.reduce((s,x)=>s+(x-mx)**2,0),syy=ys.reduce((s,y)=>s+(y-my)**2,0),sxy=xs.reduce((s,x,i)=>s+(x-mx)*(ys[i]-my),0);const slope=sxy/sxx,intercept=my-slope*mx,r=sxy/Math.sqrt(sxx*syy);const fit=(x:number)=>intercept+slope*x;const sx=(x:number)=>Number((50+65*x).toFixed(3)),sy=(y:number)=>Number((250-18*y).toFixed(3));const sse=ys.reduce((s,y,i)=>s+(y-fit(xs[i]))**2,0);return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE STATISTICS</p><h2 className="mt-2 text-xl font-bold">动手观察：拟合直线与残差</h2><p className="mt-3 text-sm leading-7 text-slate-600">改变第五个观测点的 y 值，观察直线与相关系数。橙色虚线表示纵向残差，绿色点为指定 x 的预测值。</p><svg viewBox="0 0 520 310" role="img" aria-label="散点图、最小二乘直线与残差" className="mt-5 w-full rounded-xl bg-slate-50"><path d="M30 250H490 M50 285V25" stroke="#94a3b8"/>{[1,2,3,4,5,6].map(x=><text key={x} x={sx(x)} y="270" fontSize="11" textAnchor="middle">{x}</text>)}<text x="490" y="242" fontSize="11">x</text><text x="35" y="25" fontSize="11">y</text><line x1={sx(0)} y1={sy(fit(0))} x2={sx(6)} y2={sy(fit(6))} stroke="#2563eb" strokeWidth="2"/>{xs.map((x,i)=><g key={x}><line x1={sx(x)} x2={sx(x)} y1={sy(ys[i])} y2={sy(fit(x))} stroke="#d97706" strokeDasharray="4 3"/><circle cx={sx(x)} cy={sy(ys[i])} r="4" fill={i===4?'#d97706':'#2563eb'}/><text x={sx(x)+6} y={sy(ys[i])-7} fontSize="10">({x},{ys[i]})</text></g>)}<circle cx={sx(predictX)} cy={sy(fit(predictX))} r="5" fill="#059669"/></svg><label className="mt-5 block">第五个点的 y 值：{lastY}<input aria-label="第五个点的 y 值" type="range" min="0" max="10" step="0.5" value={lastY} onChange={e=>setLastY(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><label className="mt-5 block">预测位置 x：{predictX}<input aria-label="预测位置 x" type="range" min="1" max="6" step="0.5" value={predictX} onChange={e=>setPredictX(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7"><p>ŷ = {intercept.toFixed(3)} {slope<0?'−':'+'} {Math.abs(slope).toFixed(3)}x；r = {r.toFixed(3)}；R² = {(1-sse/syy).toFixed(3)}。</p><p>均值点 ({mx},{my.toFixed(2)})；预测值 = {fit(predictX).toFixed(3)}；残差平方和 = {sse.toFixed(3)}。</p><p>{predictX>5?'当前位置超出样本 x 范围 [1,5]，属于外推，需谨慎解释。':'当前位置在样本 x 范围 [1,5] 内，预测仍有不确定性。'}</p></div></section>;}
