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
    id: "g2-circle-equation-01",
    topic: "圆的方程",
    title: "由标准方程读出圆心与半径",
    question: "圆的圆心和半径分别是：",
    formula: String.raw`(x-2)^2+(y+1)^2=9`,
    options: [
      {
        key: "A",
        text: "(2，−1)，3"
      },
      {
        key: "B",
        text: "(−2，1)，3"
      },
      {
        key: "C",
        text: "(2，−1)，9"
      },
      {
        key: "D",
        text: "(2，1)，3"
      }
    ],
    correctAnswer: "A",
    explanation: "与 (x−a)²+(y−b)²=r² 对照，圆心为 (2，−1)，半径为 √9=3。注意 y+1=y−(−1)。"
  },
  {
    id: "g2-circle-equation-02",
    topic: "圆的方程",
    title: "一般方程配方",
    question: "下列方程表示的圆，其半径为：",
    formula: String.raw`x^2+y^2-6x+4y-12=0`,
    options: [
      {
        key: "A",
        text: "√12"
      },
      {
        key: "B",
        text: "13"
      },
      {
        key: "C",
        text: "5"
      },
      {
        key: "D",
        text: "25"
      }
    ],
    correctAnswer: "C",
    explanation: "配方得 (x−3)²+(y+2)²=12+9+4=25，所以圆心为 (3，−2)，半径为 5。"
  },
  {
    id: "g2-circle-equation-03",
    topic: "圆的方程",
    title: "方程表示圆的条件",
    question: "若方程表示一个半径大于零的圆，则 m 的取值范围是：",
    formula: String.raw`x^2+y^2+2x-4y+m=0`,
    options: [
      {
        key: "A",
        text: "m ≤ 5"
      },
      {
        key: "B",
        text: "m < 5"
      },
      {
        key: "C",
        text: "m > 5"
      },
      {
        key: "D",
        text: "m ≥ 5"
      }
    ],
    correctAnswer: "B",
    explanation: "配方得 (x+1)²+(y−2)²=5−m。表示圆需要半径平方 5−m>0，即 m<5；m=5 时仅表示一个点。"
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

export default function CircleEquationPage() {
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
          <span className="text-slate-600">圆的方程</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 02</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 2.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">圆的方程</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">从圆的定义出发，掌握标准方程、一般方程与求圆方程的方法。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%9C%86%E7%9A%84%E6%96%B9%E7%A8%8B" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"根据圆心和半径写出标准方程"}</li>
                <li>{"通过配方判断一般方程是否表示圆"}</li>
                <li>{"根据圆上的点或直径端点求圆的方程"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"两点间距离公式、配方法、中点坐标公式。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
              <article>
                <h3 className="font-semibold leading-7">{"1. 从圆的定义到方程"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"平面内到定点 C 的距离等于定长 r（r>0）的所有点组成圆。设 C(a，b)，任取圆上的点 P(x，y)，将 CP=r 用两点间距离公式表示，再平方，就得到标准方程。"}</p>
                <Formula math={String.raw`(x-a)^2+(y-b)^2=r^2\quad(r>0)`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"圆心为 (a，b)，等号右边是半径的平方。横、纵坐标都要连同符号一起辨认。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"2. 点与圆的位置关系"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"将点 P 的坐标代入左边，所得数就是 CP²。与 r² 比较即可判断点在圆内、圆上还是圆外。"}</p>
                <Formula math={String.raw`CP^2<r^2\Rightarrow\text{圆内},\quad CP^2=r^2\Rightarrow\text{圆上},\quad CP^2>r^2\Rightarrow\text{圆外}`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"3. 圆的一般方程"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"将标准方程展开，可得到 x²+y²+Dx+Ey+F=0。反过来，通过配方可以找出圆心与半径。"}</p>
                <Formula math={String.raw`\left(x+\frac D2\right)^2+\left(y+\frac E2\right)^2=\frac{D^2+E^2-4F}{4}`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"当 D²+E²−4F>0 时才表示圆；等于 0 时表示一个点，小于 0 时没有实数点。圆心为 (−D/2，−E/2)。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"4. 识别方程时先检查形式"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"在直角坐标系中，圆的二次方程没有 xy 项，x² 与 y² 的系数相等且非零。若两者系数不是 1，应先同时除以这个系数，再配方检查半径平方。"}</p>
                <Formula math={String.raw`2x^2+2y^2-8x+4y-8=0\ \Longleftrightarrow\ (x-2)^2+(y+1)^2=9`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"5. 怎样选择求方程的方法"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"已知圆心或便于求圆心时，优先设标准方程；已知三个不共线的点时，可设一般方程，代入三点坐标求 D、E、F。三个不共线的点确定一个圆，三个不同的共线点不能确定一个经过它们的圆。"}</p>
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"列方程后仍要核对半径平方为正，并检查所有已知点都在所求圆上。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"6. 以线段为直径的圆"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"已知直径端点 A(x₁，y₁)、B(x₂，y₂)，圆心是线段中点，半径是两点距离的一半。这通常比设三个未知数更直接。"}</p>
                <Formula math={String.raw`C\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right),\qquad r^2=\frac{(x_2-x_1)^2+(y_2-y_1)^2}{4}`} />
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
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"已知圆心与圆上一点"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"求以 C(2，−1) 为圆心，且经过 P(5，3) 的圆的方程。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"圆心已知，直接设标准方程 (x−2)²+(y+1)²=r²。"}</li>
                    <li>{"由点 P 在圆上，r²=CP²=(5−2)²+(3+1)²=25。"}</li>
                    <li>{"代入半径平方，并检查 P 的坐标满足方程。"}</li>
                  </ol>
                  <Formula math={String.raw`(x-2)^2+(y+1)^2=25`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"一般方程化为标准方程"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"求圆 x²+y²−4x+6y−12=0 的圆心和半径。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"把常数移到右边，分别对 x 和 y 配方。"}</li>
                    <li>{"x²−4x=(x−2)²−4，y²+6y=(y+3)²−9。"}</li>
                    <li>{"得到 (x−2)²+(y+3)²=25，因此圆心为 (2，−3)，半径为 5。"}</li>
                  </ol>
                  <Formula math={String.raw`(x-2)^2+(y+3)^2=25,\qquad C(2,-3),\ r=5`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"已知直径的两个端点"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"求以 A(−1，2)、B(3，4) 为直径端点的圆的方程。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"中点坐标为 C((−1+3)/2，(2+4)/2)=(1，3)。"}</li>
                    <li>{"AB²=(3+1)²+(4−2)²=20，所以 r²=AB²/4=5。"}</li>
                    <li>{"将圆心与半径平方代入标准方程。"}</li>
                  </ol>
                  <Formula math={String.raw`(x-1)^2+(y-3)^2=5`} />
                </details>
              </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7">
              <h2 className="text-xl font-bold">易错提醒</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
                <li>{"(y+3)² 对应的圆心纵坐标是 −3，不是 3。"}</li>
                <li>{"标准方程右边的 25 是 r²，半径是 5。"}</li>
                <li>{"一般方程中半径平方等于 0 时，只剩一个点，不能称为圆。"}</li>
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
                <li>{"抓住圆心和半径这两个几何量。"}</li>
                <li>{"一般方程先配方，再判断半径平方是否大于零。"}</li>
                <li>{"圆心、直径、三个不共线的点，分别对应不同的求解入口。"}</li>
              </ul>
              <Link href="/practice?topic=%E5%9C%86%E7%9A%84%E6%96%B9%E7%A8%8B" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“圆的方程”专题训练 →</Link>
            </section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/line-equation/distance" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：平面上的距离</Link>
              <Link href="/grade2/circle-equation/line-circle" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：直线与圆的位置关系 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第二章 · 圆与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "2.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "2.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "2.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [radius, setRadius] = useState(2);
  const controls = [
    { label: "圆心横坐标 a", value: a, min: -2, max: 2, set: setA },
    { label: "圆心纵坐标 b", value: b, min: -2, max: 2, set: setB },
    { label: "半径 r", value: radius, min: 1, max: 3, set: setRadius },
  ];
  const x = (value: number) => 200 + value * 20;
  const y = (value: number) => 140 - value * 20;

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：圆心与半径怎样改变圆</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">拖动参数，对照图形和标准方程，观察圆的位置与大小。</p>
      <svg viewBox="0 0 400 280" role="img" aria-label={`圆心 (${a}，${b})，半径 ${radius} 的圆`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({ length: 19 }, (_, i) => i - 9).map((i) => <line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="260" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({ length: 13 }, (_, i) => i - 6).map((i) => <line key={`y${i}`} x1="20" x2="380" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 140H380 M200 260V20" stroke="#94a3b8" />
        <text x="383" y="135" fontSize="12" fill="#64748b">x</text>
        <text x="206" y="22" fontSize="12" fill="#64748b">y</text>
        <text x="187" y="155" fontSize="11" fill="#64748b">O</text>
        <circle cx={x(a)} cy={y(b)} r={radius * 20} fill="#3b82f6" fillOpacity="0.06" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx={x(a)} cy={y(b)} r="3" fill="#2563eb" />
        <text x={x(a) + 7} y={y(b) - 9} fontSize="12" fill="#1d4ed8">{`C(${a}, ${b})`}</text>
        <line x1={x(a)} y1={y(b)} x2={x(a + radius)} y2={y(b)} stroke="#2563eb" strokeDasharray="4 3" />
        <text x={x(a + radius / 2) - 10} y={y(b) + 18} fontSize="12" fill="#1d4ed8">r={radius}</text>
      </svg>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {controls.map((control) => (
          <label key={control.label}>
            <span className="flex justify-between gap-3 text-sm font-medium text-slate-700"><span>{control.label}</span><span className="text-blue-700">{control.value}</span></span>
            <input type="range" aria-label={control.label} min={control.min} max={control.max} step="0.5" value={control.value} onChange={(event) => control.set(Number(event.target.value))} className="mt-3 w-full accent-blue-600" />
          </label>
        ))}
      </div>
      <div aria-live="polite" className="mt-5 overflow-x-auto rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <BlockMath math={`(x${a >= 0 ? "-" : "+"}${Math.abs(a)})^2+(y${b >= 0 ? "-" : "+"}${Math.abs(b)})^2=${radius * radius}`} />
      </div>
    </section>
  );
}
