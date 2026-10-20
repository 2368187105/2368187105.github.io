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
    id: "g2-line-circle-01",
    topic: "直线与圆的位置关系",
    title: "距离法判断相切",
    question: "直线与圆的位置关系是：",
    formula: String.raw`3x+4y-25=0,\qquad x^2+y^2=25`,
    options: [
      {
        key: "A",
        text: "相交"
      },
      {
        key: "B",
        text: "相离"
      },
      {
        key: "C",
        text: "无法确定"
      },
      {
        key: "D",
        text: "相切"
      }
    ],
    correctAnswer: "D",
    explanation: "圆心为原点，半径 r=5。圆心到直线的距离 d=25/√(3²+4²)=5，与半径相等，因此相切。"
  },
  {
    id: "g2-line-circle-02",
    topic: "直线与圆的位置关系",
    title: "利用半弦直角三角形求弦长",
    question: "直线 x=3 截圆所得的弦长为：",
    formula: String.raw`x^2+y^2=25`,
    options: [
      {
        key: "A",
        text: "4"
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
        text: "10"
      }
    ],
    correctAnswer: "C",
    explanation: "圆半径 r=5，圆心到直线的距离 d=3。半弦长为 √(25−9)=4，所以整条弦长为 8。"
  },
  {
    id: "g2-line-circle-03",
    topic: "直线与圆的位置关系",
    title: "含参数直线与圆相交",
    question: "若直线 y=x+b 与圆有两个不同交点，则 b 的取值范围是：",
    formula: String.raw`x^2+y^2=2`,
    options: [
      {
        key: "A",
        text: "−2 < b < 2"
      },
      {
        key: "B",
        text: "−2 ≤ b ≤ 2"
      },
      {
        key: "C",
        text: "b > 2"
      },
      {
        key: "D",
        text: "b=±2"
      }
    ],
    correctAnswer: "A",
    explanation: "直线写为 x−y+b=0，圆心到直线距离为 |b|/√2。两个不同交点要求 |b|/√2<√2，即 |b|<2。等号对应相切，不能取到。"
  }
];

const lessonSections = [
  {
    number: "2.1",
    title: "圆的方程",
    href: "/grade2/circle-equation/equation"
  },
  {
    number: "2.2",
    title: "直线与圆的位置关系",
    href: "/grade2/circle-equation/line-circle"
  },
  {
    number: "2.3",
    title: "圆与圆的位置关系",
    href: "/grade2/circle-equation/circle-circle"
  }
];

export default function LineCirclePage() {
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
          <Link href="/grade2/circle-equation" className="hover:text-blue-600">圆与方程</Link><span>/</span>
          <span className="text-slate-600">直线与圆的位置关系</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 02</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 2.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">直线与圆的位置关系</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">比较圆心到直线的距离与半径，解决交点、弦长和切线问题。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E7%9B%B4%E7%BA%BF%E4%B8%8E%E5%9C%86%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%85%B3%E7%B3%BB" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"用距离法判断直线与圆的位置关系"}</li>
                <li>{"求交点坐标、弦长和含参数直线的条件"}</li>
                <li>{"利用半径与切线垂直求切线方程"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"圆的标准方程、点到直线的距离、勾股定理。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
              <article>
                <h3 className="font-semibold leading-7">{"1. 把位置关系转化为距离比较"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"设圆心为 C(a，b)，半径为 r，直线为 Ax+By+C₀=0（A、B 不同时为 0）。计算圆心到直线的距离 d，再比较 d 与 r。"}</p>
                <Formula math={String.raw`d=\frac{|Aa+Bb+C_0|}{\sqrt{A^2+B^2}}`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"2. 三种位置关系"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"d<r 时相交，有两个公共点；d=r 时相切，有一个公共点；d>r 时相离，没有公共点。"}</p>
                <Formula math={String.raw`d<r:\ 2\text{个交点}\qquad d=r:\ 1\text{个交点}\qquad d>r:\ 0\text{个交点}`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"判断位置关系通常先用距离法；需要交点坐标时再联立方程。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"3. 代数法：联立方程"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"将直线代入圆的方程，消去一个变量后得到一元二次方程。判别式 Δ>0、Δ=0、Δ<0 分别对应相交、相切、相离。竖直直线 x=t 可以直接代入圆方程，不必强行写成斜截式。"}</p>
                <Formula math={String.raw`\Delta>0\Rightarrow\text{相交},\quad\Delta=0\Rightarrow\text{相切},\quad\Delta<0\Rightarrow\text{相离}`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"4. 弦长公式的由来"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"从圆心向弦作垂线，垂足平分弦。半径、圆心到弦的距离与半弦长组成直角三角形，由勾股定理可求整条弦长。"}</p>
                <Formula math={String.raw`|PQ|=2\sqrt{r^2-d^2}\quad(d<r)`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"不要漏掉前面的 2；d=0 时直线过圆心，弦为直径，长度达到最大值 2r。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"5. 圆上一点处的切线"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"切线垂直于过切点的半径。若 P(x₀，y₀) 已在圆 (x−a)²+(y−b)²=r² 上，则可直接写出切线方程，且这一写法也适用于竖直切线。"}</p>
                <Formula math={String.raw`(x_0-a)(x-a)+(y_0-b)(y-b)=r^2`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"使用前必须确认 P 在圆上。若 P 在圆外，一般有两条切线；在圆内则没有切线。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"6. 含参数问题先明确交点个数"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"“有两个不同交点”对应严格不等式 d<r；“有公共点”对应 d≤r。求切线时使用 d=r，绝对值方程往往会给出两个参数值。"}</p>
                <Formula math={String.raw`y=x+b,\ x^2+y^2=2:\qquad d=\frac{|b|}{\sqrt2}`} />
              </article>
              </div>
            </section>
            <CircleFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"判断相切并求切点"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"判断 3x+4y−25=0 与圆 x²+y²=25 的位置关系，并求公共点。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"圆心 O(0，0)，半径 r=5；d=25/√(3²+4²)=5，因此相切。"}</li>
                    <li>{"切点是圆心到直线的垂足。垂线方向与法向量 (3，4) 平行，设切点为 (3t，4t)。"}</li>
                    <li>{"代入直线得 9t+16t=25，故 t=1，切点为 (3，4)。"}</li>
                  </ol>
                  <Formula math={String.raw`d=r=5,\qquad P(3,4)`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"不用求交点也能求弦长"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"直线 x=3 截圆 x²+y²=25 所得的弦长是多少？"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"圆半径为 5，原点到直线 x=3 的距离为 3。"}</li>
                    <li>{"半弦长为 √(5²−3²)=4，因此弦长为 8。"}</li>
                    <li>{"也可代入 x=3 得 y=±4，交点为 (3，4)、(3，−4)，与距离法结果一致。"}</li>
                  </ol>
                  <Formula math={String.raw`|PQ|=2\sqrt{25-9}=8`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"由交点个数确定参数"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"直线 y=x+b 与圆 x²+y²=2 有两个不同交点，求 b 的范围。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"圆心为原点，半径为 √2；直线一般式为 x−y+b=0。"}</li>
                    <li>{"圆心到直线距离为 |b|/√2。相交要求 |b|/√2<√2。"}</li>
                    <li>{"解得 |b|<2。b=±2 时相切，不满足两个不同交点的要求。"}</li>
                  </ol>
                  <Formula math={String.raw`-2<b<2`} />
                </details>
              </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7">
              <h2 className="text-xl font-bold">易错提醒</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
                <li>{"使用点到直线距离公式时，先整理成一般式，分子保留绝对值。"}</li>
                <li>{"求弦长时，√(r²−d²) 只是半弦长。"}</li>
                <li>{"用斜率法求切线容易漏掉竖直切线，可改用距离法或切线的法向量。"}</li>
              </ul>
            </section>
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
            <section id="summary" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-7">
              <h2 className="text-xl font-bold">本节小结</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
                <li>{"判断关系比较 d 与 r；求坐标联立方程。"}</li>
                <li>{"弦长来自圆心、垂足、弦端点组成的直角三角形。"}</li>
                <li>{"相切时半径垂直于切线，切点是圆心在直线上的垂足。"}</li>
              </ul>
              <Link href="/practice?topic=%E7%9B%B4%E7%BA%BF%E4%B8%8E%E5%9C%86%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%85%B3%E7%B3%BB" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“直线与圆的位置关系”专题训练 →</Link>
            </section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/circle-equation/equation" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：圆的方程</Link>
              <Link href="/grade2/circle-equation/circle-circle" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：圆与圆的位置关系 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第二章 · 圆与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "2.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "2.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "2.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互图形，与讲解、自测一起维护在本页。 */
function CircleFigure() {
  const [distance, setDistance] = useState(2);
  const relation = distance < 3 ? "相交 · 两个公共点" : distance === 3 ? "相切 · 一个公共点" : "相离 · 没有公共点";
  const x = (value: number) => 200 + value * 20;
  const y = (value: number) => 140 - value * 20;

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：直线从圆内移向圆外</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">固定圆 x²+y²=9，移动直线 y=d。观察 d=3 前后公共点个数的变化。</p>
      <svg viewBox="0 0 400 280" role="img" aria-label={`直线与圆示意图，d=${distance}，${relation}`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({ length: 19 }, (_, i) => i - 9).map((i) => <line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="260" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({ length: 13 }, (_, i) => i - 6).map((i) => <line key={`y${i}`} x1="20" x2="380" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 140H380 M200 260V20" stroke="#94a3b8" />
        <text x="383" y="135" fontSize="12" fill="#64748b">x</text>
        <text x="206" y="22" fontSize="12" fill="#64748b">y</text>
        <text x="187" y="155" fontSize="11" fill="#64748b">O</text>
        <circle cx={x(0)} cy={y(0)} r={3 * 20} fill="#3b82f6" fillOpacity="0.06" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx={x(0)} cy={y(0)} r="3" fill="#2563eb" />
        <text x={x(0) + 7} y={y(0) - 9} fontSize="12" fill="#1d4ed8">C</text>
        <line x1="35" x2="365" y1={y(distance)} y2={y(distance)} stroke="#d97706" strokeWidth="2.5" />
        <text x="305" y={y(distance) - 9} fontSize="12" fill="#b45309">y={distance}</text>
        <line x1={x(0)} x2={x(0)} y1={y(0)} y2={y(distance)} stroke="#64748b" strokeDasharray="4 3" />
        {distance <= 3 && (distance === 3 ? [0] : [-1, 1]).map((sign) => <circle key={sign} cx={x(sign * Math.sqrt(9 - distance * distance))} cy={y(distance)} r="4" fill="#059669" />)}
      </svg>
      <label className="mt-5 block">
        <span className="flex justify-between text-sm font-medium text-slate-700"><span>圆心到直线的距离 d</span><span className="text-blue-700">{distance}</span></span>
        <input type="range" aria-label="圆心到直线的距离 d" min="0" max="5" step="0.5" value={distance} onChange={(event) => setDistance(Number(event.target.value))} className="mt-3 w-full accent-blue-600" />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        {[2, 3, 4].map((value) => <button key={value} type="button" onClick={() => setDistance(value)} aria-pressed={distance === value} className={`rounded-lg border px-3 py-2 text-xs font-medium ${distance === value ? "border-blue-400 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>d={value}</button>)}
      </div>
      <div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <p className="font-semibold">{relation}</p>
        <p className="mt-2 leading-6">{`r=3，d=${distance}${distance < 3 ? `，弦长约为 ${(2 * Math.sqrt(9 - distance * distance)).toFixed(2)}` : ""}`}</p>
      </div>
    </section>
  );
}
