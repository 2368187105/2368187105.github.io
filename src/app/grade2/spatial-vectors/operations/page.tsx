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
    id: "g2-spatial-operations-01",
    topic: "空间向量及其运算",
    title: "首尾向量化简",
    question: "四面体 ABCD 中，AB+BC+CD（均为向量）等于：",
    options: [
    {
      key: "A",
      text: "AC"
    },
    {
      key: "B",
      text: "AD"
    },
    {
      key: "C",
      text: "BD"
    },
    {
      key: "D",
      text: "DA"
    }
  ],
    correctAnswer: "B",
    explanation: "由首尾相接，AB+BC=AC，再加 CD 得 AD。"
  },
  {
    id: "g2-spatial-operations-02",
    topic: "空间向量及其运算",
    title: "数量积计算",
    question: "已知 |a|=2、|b|=3，夹角为 60°，则 a·b 为：",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "√3"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "0"
    }
  ],
    correctAnswer: "C",
    explanation: "a·b=|a||b|cos60°=2×3×1/2=3。"
  },
  {
    id: "g2-spatial-operations-03",
    topic: "空间向量及其运算",
    title: "计算和向量的模",
    question: "非零向量 a、b 垂直，且 |a|=3、|b|=4，则 |a+b| 为：",
    options: [
    {
      key: "A",
      text: "7"
    },
    {
      key: "B",
      text: "1"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "D",
    explanation: "垂直时 a·b=0，|a+b|²=9+16=25，所以模为 5。"
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

export default function SpatialOperationsPage() {
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
          <span className="text-slate-600">{vectorText("空间向量及其运算")}</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">{vectorText("CHAPTER 06")}</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">{vectorText("LESSON 6.1")}</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{vectorText("空间向量及其运算")}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">{vectorText("把平面向量推广到空间，理解线性运算、共线共面与数量积。")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("开始学习")}</a>
            <Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E5%8F%8A%E5%85%B6%E8%BF%90%E7%AE%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">{vectorText("本节专题训练 →")}</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">{vectorText("学习目标")}</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{vectorText("理解空间向量、共线与共面的含义")}</li>
                <li>{vectorText("掌握加减、数乘及空间向量基本定理")}</li>
                <li>{vectorText("用数量积计算长度、夹角并判断垂直")}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">{vectorText("预备知识：")}{vectorText("高一平面向量、立体几何中的平行与垂直。")}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("CORE KNOWLEDGE")}</p>
              <h2 className="mt-2 text-xl font-bold">{vectorText("知识讲解")}</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{vectorText("1. 从平面到空间")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("空间中具有大小和方向的量叫空间向量。可以用有向线段表示，向量可以平移而不改变其大小与方向。相等向量不必具有同一起点。零向量的模为 0，方向不确定。")}</p>
                  <Formula math={String.raw`\overrightarrow{AB}=\overrightarrow{a},\qquad |\overrightarrow{a}|=|AB|`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("2. 加法与减法")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("首尾相接的两个向量相加，得到从起点指向终点的向量。减法可转化为加上相反向量。空间中仍适用三角形与平行四边形法则。")}</p>
                  <Formula math={String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC},\qquad \overrightarrow{a}-\overrightarrow{b}=\overrightarrow{a}+(-\overrightarrow{b})`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("3. 数乘与共线")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("实数 λ 与向量相乘，使模长变为原来的 |λ| 倍。λ>0 时方向相同，λ<0 时方向相反。若非零向量 b 固定，则 a 与 b 共线当且仅当 a=λb。")}</p>
                  <Formula math={String.raw`|\lambda\overrightarrow{a}|=|\lambda|\,|\overrightarrow{a}|,\qquad \overrightarrow{a}=\lambda\overrightarrow{b}\ (\overrightarrow{b}\ne\overrightarrow{0})`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("4. 共面与空间向量基本定理")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("两个不共线向量 a、b 所张成的平面内，每个向量都可以唯一表示为 λa+μb。三个不共面的向量 e₁、e₂、e₃ 构成空间的一组基底，任意空间向量可唯一线性表示。")}</p>
                  <Formula math={String.raw`\overrightarrow{p}=x\overrightarrow{e}_1+y\overrightarrow{e}_2+z\overrightarrow{e}_3`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{vectorText("“三个向量不共面”指把它们平移到共同起点后，不能落在同一个平面内；不要求原来的有向线段有共同起点。")}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("5. 数量积、模与夹角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("两非零向量的夹角取 0 到 π。数量积是一个实数，等于模长之积乘夹角余弦。向量与自身的数量积等于模的平方。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}|\,|\overrightarrow{b}|\cos\theta,\quad\overrightarrow{a}\cdot\overrightarrow{a}=|\overrightarrow{a}|^2,\quad\cos\theta=\frac{\overrightarrow{a}\cdot\overrightarrow{b}}{|\overrightarrow{a}|\,|\overrightarrow{b}|}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("6. 垂直条件与运算律")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("两非零向量互相垂直当且仅当数量积为零。数量积满足交换律与分配律，但结果是实数，不能把向量的数量积运算当作任意可结合的普通乘法。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}\perp\overrightarrow{b}\iff\overrightarrow{a}\cdot\overrightarrow{b}=0,\qquad\overrightarrow{a}\cdot(\overrightarrow{b}+\overrightarrow{c})=\overrightarrow{a}\cdot\overrightarrow{b}+\overrightarrow{a}\cdot\overrightarrow{c}`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 1")}</span>{vectorText("利用首尾关系化简")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("四面体 OABC 中，设 OA=a、OB=b、OC=c（均为向量），用 a、b、c 表示 AB+BC。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("AB=OB−OA=b−a。")}</li>
                      <li>{vectorText("BC=OC−OB=c−b。")}</li>
                      <li>{vectorText("两式相加得到 c−a，正好是 AC。")}</li>
                    </ol>
                    <Formula math={String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{c}-\overrightarrow{a}=\overrightarrow{AC}`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 2")}</span>{vectorText("用数量积求和向量的模")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("已知 |a|=2、|b|=3，夹角为 60°，求 |a+b|。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("a·b=2×3×cos60°=3。")}</li>
                      <li>{vectorText("|a+b|²=|a|²+2a·b+|b|²=4+6+9=19。")}</li>
                      <li>{vectorText("模长取非负值，所以 |a+b|=√19。")}</li>
                    </ol>
                    <Formula math={String.raw`|\overrightarrow{a}+\overrightarrow{b}|=\sqrt{19}`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 3")}</span>{vectorText("通过基底判断共面")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("若 a、b、c 不共面，说明 p=2a−b 与 q=a+3b 是否能和 a、b 一起落在同一向量平面内。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("a、b 必不共线，否则 a、b、c 将共面。")}</li>
                      <li>{vectorText("p 与 q 都是 a、b 的线性组合，不含 c 方向的分量。")}</li>
                      <li>{vectorText("因此 p、q、a、b 均属于 a、b 张成的向量平面。")}</li>
                    </ol>
                    <Formula math={String.raw`\overrightarrow{p},\overrightarrow{q}\in\operatorname{span}\{\overrightarrow{a},\overrightarrow{b}\}`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">{vectorText("易错提醒")}</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{vectorText("向量没有固定位置，讨论共面时先平移到共同起点。")}</li>
              <li>{vectorText("数量积是实数；向量夹角公式要求两个向量均非零。")}</li>
              <li>{vectorText("模长不能直接相加，只有同向等特殊情形才取得等号。")}</li></ul></section>
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
              <li>{vectorText("空间向量保留平面向量的加减与数乘法则。")}</li>
              <li>{vectorText("三个不共面的向量可作为空间的一组基底。")}</li>
              <li>{vectorText("数量积把长度、夹角和垂直关系联系起来。")}</li></ul><Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E5%8F%8A%E5%85%B6%E8%BF%90%E7%AE%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("进入“空间向量及其运算”专题训练 →")}</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/derivatives/applications" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">{vectorText("← 上一节：导数在研究函数中的应用")}</Link>
              <Link href="/grade2/spatial-vectors/coordinates" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">{vectorText("下一节：空间向量的坐标表示 →")}</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("LEARNING PATH")}</p>
              <h2 className="mt-2 font-bold">{vectorText("第六章 · 空间向量与立体几何")}</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {vectorText(lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "6.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "6.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{vectorText(item.number)}</span>
                    <span>{vectorText(item.title)}{vectorText(item.number === "6.1" && <span className="block text-xs text-emerald-600">{vectorText("当前学习")}</span>)}</span>
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
 const [parameter,setParameter]=useState(1);
 const a:Vector=[2,0,1],b:Vector=[0,2,0],point:Vector=[a[0]+parameter*b[0],a[1]+parameter*b[1],a[2]+parameter*b[2]];
 const length=Math.hypot(...point);
 const [rotation,setRotation]=useState(30);
 const theta=rotation*Math.PI/180;
 const project=([x,y,z]:Vector)=>[Number((260+50*(x*Math.cos(theta)-y*Math.sin(theta))).toFixed(3)),Number((210+26*(x*Math.sin(theta)+y*Math.cos(theta))-55*z).toFixed(3))];
 const origin:Vector=[0,0,0];
 const segment=(from:Vector,to:Vector,color:string,dashed=false)=><line x1={project(from)[0]} y1={project(from)[1]} x2={project(to)[0]} y2={project(to)[1]} stroke={color} strokeWidth="2.5" strokeDasharray={dashed?'5 4':undefined}/>;
 const label=(v:Vector,name:string,color:string)=><text x={project(v)[0]+7} y={project(v)[1]-8} fill={color} fontSize="12">{vectorSvgLabel(name)}</text>;
 const plane:Vector[]=[[-2,-2,0],[2,-2,0],[2,2,0],[-2,2,0]];
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">{vectorText("EXPLORE SPACE")}</p><h2 className="mt-2 text-xl font-bold">{vectorText("动手观察：空间向量的线性组合")}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{vectorText("固定 a=(2，0，1)、b=(0，2，0)，改变 λ，观察 a+λb 的端点。虚线展示平行四边形的另一组边。")}</p><svg viewBox="0 0 520 400" role="img" aria-label="可旋转的空间向量示意图" className="mt-5 w-full rounded-xl bg-slate-50"><polygon points={plane.map(p=>project(p).join(',')).join(' ')} fill="#dbeafe" fillOpacity="0.5" stroke="#bfdbfe"/>{vectorSvgLabel(segment([-3,0,0],[3,0,0],'#94a3b8'))}{vectorSvgLabel(segment([0,-3,0],[0,3,0],'#94a3b8'))}{vectorSvgLabel(segment([0,0,-2],[0,0,3],'#94a3b8'))}{vectorSvgLabel(label([3,0,0],'x','#64748b'))}{vectorSvgLabel(label([0,3,0],'y','#64748b'))}{vectorSvgLabel(label([0,0,3],'z','#64748b'))}{vectorSvgLabel(label(origin,'O','#64748b'))}
 {vectorSvgLabel(segment(origin,a,'#d97706'))}{vectorSvgLabel(segment(origin,[0,2*parameter,0],'#059669'))}{vectorSvgLabel(segment(a,point,'#059669',true))}{vectorSvgLabel(segment([0,2*parameter,0],point,'#d97706',true))}{vectorSvgLabel(label(a,'a','#b45309'))}{vectorSvgLabel(label([0,2*parameter,0],'λb','#047857'))}
 {vectorSvgLabel(segment(origin,point,'#2563eb'))}<circle cx={project(point)[0]} cy={project(point)[1]} r="4" fill="#2563eb"/>{vectorSvgLabel(label(point,'P','#1d4ed8'))}</svg><p className="mt-3 text-xs leading-6 text-slate-500">{vectorText("投影显示仅用于观察。真实长度与角度以下方三维计算为准；旋转视角不改变计算结果。")}</p><div className="mt-5 grid gap-5 sm:grid-cols-2">
 <label className="text-sm font-medium">{vectorText("数乘系数 λ：")}{vectorText(parameter)}<input aria-label="数乘系数 λ" type="range" min="-1.5" max="1.5" step="0.25" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>
 <label className="text-sm font-medium">{vectorText("观察角度：")}{vectorText(rotation)}{vectorText("°")}<input aria-label="观察角度" type="range" min="-180" max="180" step="15" value={rotation} onChange={e=>setRotation(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>{vectorText("P(")}{vectorText(point.join('，'))}{vectorText(")；|a+λb| = ")}{vectorText(length.toFixed(3))}{vectorText("。")}</p><p>{vectorText("a·b=0，|a+λb|²=5+4λ²。")}</p></div></section>;
}
