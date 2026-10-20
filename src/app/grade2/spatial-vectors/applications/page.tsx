"use client";

import { vectorText, vectorSvgLabel } from "@/components/VectorText";
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
    id: "g2-spatial-applications-01",
    topic: "空间向量的应用",
    title: "判断法向量",
    question: "平面内两个不共线方向为 (1，0，0) 和 (0，1，0)，可取的法向量为：",
    options: [
    {
      key: "A",
      text: "(1，1，0)"
    },
    {
      key: "B",
      text: "(1，0，0)"
    },
    {
      key: "C",
      text: "(0，1，0)"
    },
    {
      key: "D",
      text: "(0，0，1)"
    }
  ],
    correctAnswer: "D",
    explanation: "(0，0，1) 非零，且与两个平面方向向量的数量积均为 0。"
  },
  {
    id: "g2-spatial-applications-02",
    topic: "空间向量的应用",
    title: "计算线面角",
    question: "直线方向 u=(1，0，1)，平面法向量 n=(0，0，1)，线面角为：",
    options: [
    {
      key: "A",
      text: "30°"
    },
    {
      key: "B",
      text: "45°"
    },
    {
      key: "C",
      text: "60°"
    },
    {
      key: "D",
      text: "90°"
    }
  ],
    correctAnswer: "B",
    explanation: "sinθ=|u·n|/(|u||n|)=1/√2，因此 θ=45°。"
  },
  {
    id: "g2-spatial-applications-03",
    topic: "空间向量的应用",
    title: "点到平面距离",
    question: "点 P(1，2，3) 到平面 z=0 的距离为：",
    options: [
    {
      key: "A",
      text: "1"
    },
    {
      key: "B",
      text: "2"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "√14"
    }
  ],
    correctAnswer: "C",
    explanation: "平面 z=0 为 xy 平面，点到它的距离为纵向高度 |3|=3。"
  }
];

const lessonSections = [
  {
    number: "6.1",
    title: "空间向量及其运算",
    href: "/grade2/spatial-vectors/operations"
  },
  {
    number: "6.2",
    title: "空间向量的坐标表示",
    href: "/grade2/spatial-vectors/coordinates"
  },
  {
    number: "6.3",
    title: "空间向量的应用",
    href: "/grade2/spatial-vectors/applications"
  }
];

export default function SpatialApplicationsPage() {
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
          <Link href="/" className="hover:text-blue-600">{vectorText("首页")}</Link><span>{vectorText("/")}</span>
          <Link href="/grade2" className="hover:text-blue-600">{vectorText("高二数学")}</Link><span>{vectorText("/")}</span>
          <Link href="/grade2/spatial-vectors" className="hover:text-blue-600">{vectorText("空间向量与立体几何")}</Link><span>{vectorText("/")}</span>
          <span className="text-slate-600">{vectorText("空间向量的应用")}</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">{vectorText("CHAPTER 06")}</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">{vectorText("LESSON 6.3")}</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{vectorText("空间向量的应用")}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">{vectorText("利用方向向量和法向量，将空间中的位置关系、夹角与距离转化为代数问题。")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("开始学习")}</a>
            <Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E7%9A%84%E5%BA%94%E7%94%A8" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">{vectorText("本节专题训练 →")}</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">{vectorText("学习目标")}</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{vectorText("正确选择直线方向向量与平面法向量")}</li>
                <li>{vectorText("用数量积判断线面平行、垂直并计算空间角")}</li>
                <li>{vectorText("掌握点到平面的距离，建立坐标化解题流程")}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">{vectorText("预备知识：")}{vectorText("空间向量坐标运算，立体几何的线面与面面关系。")}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("CORE KNOWLEDGE")}</p>
              <h2 className="mt-2 text-xl font-bold">{vectorText("知识讲解")}</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{vectorText("1. 方向向量与法向量")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("与直线平行的非零向量可以作其方向向量。垂直于平面的非零向量叫法向量。求法向量时，可设 n=(x，y，z)，要求它与平面内两个不共线方向向量都垂直。")}</p>
                  <Formula math={String.raw`\overrightarrow{n}\cdot\overrightarrow{a}=0,\quad\overrightarrow{n}\cdot\overrightarrow{b}=0,\quad\overrightarrow{a},\overrightarrow{b}\text{ 不共线},\quad\overrightarrow{n}\ne\overrightarrow{0}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("2. 用向量判断位置关系")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("设直线方向向量为 u、平面法向量为 n。u 与 n 平行，则直线垂直于平面；u·n=0 时，直线平行于平面或在平面内。要区分后两者还需判断直线上一点是否属于平面。")}</p>
                  <Formula math={String.raw`\overrightarrow{u}\parallel\overrightarrow{n}\Rightarrow l\perp\alpha,\qquad\overrightarrow{u}\cdot\overrightarrow{n}=0\Rightarrow l\parallel\alpha\ \text{或}\ l\subset\alpha`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("3. 两直线的夹角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("异面或相交直线的夹角通常取 0° 到 90° 中的较小角，平行直线的夹角取 0°。用两个方向向量的数量积时加绝对值，避免取到补角。")}</p>
                  <Formula math={String.raw`\cos\theta=\frac{|\overrightarrow{u}\cdot\overrightarrow{v}|}{|\overrightarrow{u}|\,|\overrightarrow{v}|},\qquad0\le\theta\le\frac\pi2`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{vectorText("向量夹角可以是钝角，但这里的两直线夹角取锐角或直角，平行时为零。")}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("4. 直线与平面所成角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("线面角是直线与其在平面内的正射影所成的锐角，平行或包含时取 0°，垂直时取 90°。方向向量与法向量的夹角不是线面角，要通过正弦联系。")}</p>
                  <Formula math={String.raw`\sin\theta=\frac{|\overrightarrow{u}\cdot\overrightarrow{n}|}{|\overrightarrow{u}|\,|\overrightarrow{n}|},\qquad0\le\theta\le\frac\pi2`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("5. 平面夹角与二面角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("由两个平面法向量可求两平面的锐角或直角夹角。若题目指定有向半平面围成的二面角，其平面角可能为钝角，不能直接取绝对值后就当作指定二面角。")}</p>
                  <Formula math={String.raw`\cos\varphi=\frac{|\overrightarrow{n}_1\cdot\overrightarrow{n}_2|}{|\overrightarrow{n}_1|\,|\overrightarrow{n}_2|}\quad\text{（两平面的锐角或直角夹角）}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("6. 点到平面的距离与建模")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("取平面内一点 A、平面外点 P，将 AP 投影到法向量方向，所得长度就是点到平面的距离。做题时按选原点与坐标轴、写坐标、求向量、代入并解释结果的顺序进行。")}</p>
                  <Formula math={String.raw`d(P,\alpha)=\frac{|\overrightarrow{AP}\cdot\overrightarrow{n}|}{|\overrightarrow{n}|},\qquad A\in\alpha`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{vectorText("若平面写为 ax+by+cz+d=0，则法向量为 (a，b，c)，点 P(x₀，y₀，z₀) 到平面的距离为 |ax₀+by₀+cz₀+d|/√(a²+b²+c²)，其中 a、b、c 不全为零。")}</p>
                </article>
              </div>
            </section>
            <SpatialFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("WORKED EXAMPLES")}</p>
              <h2 className="mt-2 text-xl font-bold">{vectorText("典型例题")}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{vectorText("先独立思考，再展开解题过程核对方法。")}</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 1")}</span>{vectorText("由平面内向量求法向量")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("平面内两个不共线方向向量为 a=(1，0，1)、b=(0，1，1)，求一个法向量。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("设 n=(x，y，z)，则 x+z=0、y+z=0。")}</li>
                      <li>{vectorText("取 z=−1，得 x=y=1。")}</li>
                      <li>{vectorText("所以 n=(1，1，−1)，与 a、b 的数量积均为 0 且 n 非零。")}</li>
                    </ol>
                    <Formula math={String.raw`\overrightarrow{n}=(1,1,-1)`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 2")}</span>{vectorText("求线面角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("直线的方向向量 u=(1，0，1)，平面法向量 n=(0，0，1)，求线面角。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("u·n=1，|u|=√2，|n|=1。")}</li>
                      <li>{vectorText("线面角的正弦为 1/√2，不是直接用余弦公式。")}</li>
                      <li>{vectorText("线面角取 [0°，90°]，因此为 45°。")}</li>
                    </ol>
                    <Formula math={String.raw`\sin\theta=\frac1{\sqrt2},\qquad\theta=45^\circ`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 3")}</span>{vectorText("求点到平面的距离")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("求点 P(1，2，3) 到平面 x+2y+2z−3=0 的距离。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("平面法向量为 n=(1，2，2)，其模为 3。")}</li>
                      <li>{vectorText("将点坐标代入平面左侧得到 1+4+6−3=8。")}</li>
                      <li>{vectorText("取绝对值并除以法向量模，距离为 8/3。")}</li>
                    </ol>
                    <Formula math={String.raw`d=\frac{|1+2\cdot2+2\cdot3-3|}{\sqrt{1+4+4}}=\frac83`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">{vectorText("易错提醒")}</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{vectorText("法向量必须非零，要与平面内两条不共线方向都垂直。")}</li>
              <li>{vectorText("两直线夹角用余弦，线面角用方向向量与法向量的正弦公式。")}</li>
              <li>{vectorText("法向量夹角未必等于题目指定的二面角，需结合半平面位置选角。")}</li></ul></section>
            <section id="lesson-quiz" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("KNOWLEDGE CHECK")}</p>
              <h2 className="mt-2 text-xl font-bold">{vectorText("课堂自测")}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{vectorText("共 ")}{vectorText(quizQuestions.length)} {vectorText("道单选题，全部作答后提交。本页显示自测成绩；登录后前往专题训练，可将答题记录和错题保存到账号。")}</p>
              <div className="mt-6 space-y-6">
                {vectorText(quizQuestions.map((question, questionIndex) => (
                  <fieldset key={question.id} className="min-w-0 rounded-xl border border-slate-200 p-4 sm:p-5" disabled={submitted}>
                    <legend className="px-2 text-sm font-semibold text-slate-800">{vectorText(questionIndex + 1)}{vectorText(". ")}{vectorText(question.title)}</legend>
                    <p className="text-sm leading-7 text-slate-700">{vectorText(question.question)}</p>
                    {vectorText(question.formula && <Formula math={question.formula} />)}
                    <div className="mt-4 space-y-2">
                      {vectorText(question.options.map((option) => {
                        const correct = option.key === question.correctAnswer;
                        const chosen = answers[question.id] === option.key;
                        const style = submitted && correct ? "border-emerald-300 bg-emerald-50" : submitted && chosen ? "border-red-300 bg-red-50" : chosen ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-300";
                        return (
                          <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 ${style} ${submitted ? "" : "cursor-pointer"}`}>
                            <input type="radio" name={question.id} value={option.key} checked={chosen} onChange={() => setAnswers((old) => ({ ...old, [question.id]: option.key }))} className="mt-1 accent-blue-600" />
                            <span className="flex-1 text-sm leading-6 text-slate-700">{vectorText(option.key)}{vectorText(". ")}{vectorText(option.text)}</span>
                            {vectorText(submitted && correct && <span className="text-xs font-medium text-emerald-700">{vectorText("正确答案")}</span>)}
                          </label>
                        );
                      }))}
                    </div>
                    {vectorText(submitted && (
                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p className={`text-sm font-semibold ${answers[question.id] === question.correctAnswer ? "text-emerald-700" : "text-red-600"}`}>{vectorText(answers[question.id] === question.correctAnswer ? "回答正确" : `回答错误，正确答案：${question.correctAnswer}`)}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{vectorText(question.explanation)}</p>
                      </div>
                    ))}
                  </fieldset>
                )))}
              </div>
              <div aria-live="polite" className="mt-6">
                {vectorText(submitted ? (
                  <div className="rounded-xl bg-blue-50 p-5">
                    <p className="text-sm text-slate-600">{vectorText("本次自测成绩")}</p>
                    <p className="mt-2 text-3xl font-bold text-blue-700">{vectorText(score)}{vectorText("/")}{vectorText(quizQuestions.length)}</p>
                    <p className="mt-2 text-sm text-slate-600">{vectorText("正确率：")}{vectorText(Math.round(score / quizQuestions.length * 100))}{vectorText("%")}</p>
                    <button type="button" onClick={resetQuiz} className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">{vectorText("重新作答")}</button>
                  </div>
                ) : (
                  <>
                    <p className="mb-3 text-sm text-slate-500">{vectorText("已完成 ")}{vectorText(answeredCount)}{vectorText("/")}{vectorText(quizQuestions.length)} {vectorText("道题")}</p>
                    <button type="button" disabled={answeredCount !== quizQuestions.length} onClick={() => setSubmitted(true)} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">{vectorText("提交答案")}</button>
                  </>
                ))}
              </div>
            </section>
            <section id="summary" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-7"><h2 className="text-xl font-bold">{vectorText("本节小结")}</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{vectorText("方向向量和法向量是空间几何坐标化的关键。")}</li>
              <li>{vectorText("点积为零时还需区分直线平行于平面与直线在平面内。")}</li>
              <li>{vectorText("空间角与距离计算要正确选公式、取值范围和绝对值。")}</li></ul><Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E7%9A%84%E5%BA%94%E7%94%A8" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("进入“空间向量的应用”专题训练 →")}</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/spatial-vectors/coordinates" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">{vectorText("← 上一节：空间向量的坐标表示")}</Link>
              <Link href="/grade2/counting/principles" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">{vectorText("下一章：计数原理 →")}</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("LEARNING PATH")}</p>
              <h2 className="mt-2 font-bold">{vectorText("第六章 · 空间向量与立体几何")}</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {vectorText(lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "6.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "6.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{vectorText(item.number)}</span>
                    <span>{vectorText(item.title)}{vectorText(item.number === "6.3" && <span className="block text-xs text-emerald-600">{vectorText("当前学习")}</span>)}</span>
                  </Link>
                )))}
              </nav>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold">{vectorText("本节导航")}</h2>
              <nav aria-label="本节内容" className="mt-4 grid gap-3 text-sm text-slate-500">
                <a href="#knowledge" className="hover:text-blue-600">{vectorText("知识讲解 →")}</a>
                <a href="#explore" className="hover:text-blue-600">{vectorText("图形探索 →")}</a>
                <a href="#examples" className="hover:text-blue-600">{vectorText("典型例题 →")}</a>
                <a href="#lesson-quiz" className="hover:text-blue-600">{vectorText("课堂自测 →")}</a>
                <a href="#summary" className="hover:text-blue-600">{vectorText("本节小结 →")}</a>
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

/* 本节交互图形：正交投影只展示空间关系，不用屏幕角度代替真实空间角。 */
function SpatialFigure() {
 type Vector=[number,number,number];
 const [parameter,setParameter]=useState(0.5);
 const point:Vector=[2,0,2*parameter];
 const angle=Math.atan(Math.abs(parameter))*180/Math.PI;
 const distance=Math.abs(point[2]);
 const [rotation,setRotation]=useState(30);
 const theta=rotation*Math.PI/180;
 const project=([x,y,z]:Vector)=>[Number((260+50*(x*Math.cos(theta)-y*Math.sin(theta))).toFixed(3)),Number((210+26*(x*Math.sin(theta)+y*Math.cos(theta))-55*z).toFixed(3))];
 const origin:Vector=[0,0,0];
 const segment=(from:Vector,to:Vector,color:string,dashed=false)=><line x1={project(from)[0]} y1={project(from)[1]} x2={project(to)[0]} y2={project(to)[1]} stroke={color} strokeWidth="2.5" strokeDasharray={dashed?'5 4':undefined}/>;
 const label=(v:Vector,name:string,color:string)=><text x={project(v)[0]+7} y={project(v)[1]-8} fill={color} fontSize="12">{vectorSvgLabel(name)}</text>;
 const plane:Vector[]=[[-2,-2,0],[2,-2,0],[2,2,0],[-2,2,0]];
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">{vectorText("EXPLORE SPACE")}</p><h2 className="mt-2 text-xl font-bold">{vectorText("动手观察：线面角与正射影")}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{vectorText("蓝色向量 u=(1，0，t) 的展示长度为其 2 倍，绿色虚线是它在 z=0 平面上的正射影；橙色为法向量方向。")}</p><svg viewBox="0 0 520 400" role="img" aria-label="可旋转的空间向量示意图" className="mt-5 w-full rounded-xl bg-slate-50"><polygon points={plane.map(p=>project(p).join(',')).join(' ')} fill="#dbeafe" fillOpacity="0.5" stroke="#bfdbfe"/>{vectorSvgLabel(segment([-3,0,0],[3,0,0],'#94a3b8'))}{vectorSvgLabel(segment([0,-3,0],[0,3,0],'#94a3b8'))}{vectorSvgLabel(segment([0,0,-2],[0,0,3],'#94a3b8'))}{vectorSvgLabel(label([3,0,0],'x','#64748b'))}{vectorSvgLabel(label([0,3,0],'y','#64748b'))}{vectorSvgLabel(label([0,0,3],'z','#64748b'))}{vectorSvgLabel(label(origin,'O','#64748b'))}
 {vectorSvgLabel(segment(origin,[2,0,0],'#059669',true))}{vectorSvgLabel(segment([2,0,0],point,'#d97706',true))}{vectorSvgLabel(segment(origin,[0,0,2],'#d97706'))}{vectorSvgLabel(label([0,0,2],'n','#b45309'))}{vectorSvgLabel(label([2,0,0],'H','#047857'))}
 {vectorSvgLabel(segment(origin,point,'#2563eb'))}<circle cx={project(point)[0]} cy={project(point)[1]} r="4" fill="#2563eb"/>{vectorSvgLabel(label(point,'P','#1d4ed8'))}</svg><p className="mt-3 text-xs leading-6 text-slate-500">{vectorText("投影显示仅用于观察。真实长度与角度以下方三维计算为准；旋转视角不改变计算结果。")}</p><div className="mt-5 grid gap-5 sm:grid-cols-2">
 <label className="text-sm font-medium">{vectorText("方向参数 t：")}{vectorText(parameter)}<input aria-label="方向参数 t" type="range" min="-1" max="1" step="0.25" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>
 <label className="text-sm font-medium">{vectorText("观察角度：")}{vectorText(rotation)}{vectorText("°")}<input aria-label="观察角度" type="range" min="-180" max="180" step="15" value={rotation} onChange={e=>setRotation(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>{vectorText("P(")}{vectorText(point.join('，'))}{vectorText(")；线面角 θ = ")}{vectorText(angle.toFixed(3))}{vectorText("°。")}</p><p>{vectorText("|u·n|/(|u||n|) = ")}{vectorText((Math.abs(parameter)/Math.hypot(1,parameter)).toFixed(3))}{vectorText("；点 P 到平面 z=0 的距离 = ")}{vectorText(distance.toFixed(3))}{vectorText("。")}</p></div></section>;
}
