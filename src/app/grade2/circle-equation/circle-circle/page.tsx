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
    id: "g2-circle-circle-01",
    topic: "圆与圆的位置关系",
    title: "外切的条件",
    question: "两圆半径分别为 3 和 2，圆心距为 5，则两圆：",
    options: [
      {
        key: "A",
        text: "相交"
      },
      {
        key: "B",
        text: "外切"
      },
      {
        key: "C",
        text: "内切"
      },
      {
        key: "D",
        text: "外离"
      }
    ],
    correctAnswer: "B",
    explanation: "圆心距 d=5，半径和 R+r=3+2=5，因此 d=R+r，两圆外切，有一个公共点。"
  },
  {
    id: "g2-circle-circle-02",
    topic: "圆与圆的位置关系",
    title: "从方程判断内含",
    question: "下列两圆的位置关系是：",
    formula: String.raw`x^2+y^2=16,\qquad (x-1)^2+y^2=1`,
    options: [
      {
        key: "A",
        text: "外离"
      },
      {
        key: "B",
        text: "相交"
      },
      {
        key: "C",
        text: "内切"
      },
      {
        key: "D",
        text: "内含（无公共点）"
      }
    ],
    correctAnswer: "D",
    explanation: "圆心分别为 (0，0)、(1，0)，圆心距 d=1，半径为 4 和 1。因为 1<|4−1|=3，小圆在大圆内部且不相切，无公共点。"
  },
  {
    id: "g2-circle-circle-03",
    topic: "圆与圆的位置关系",
    title: "相减求公共弦所在直线",
    question: "两相交圆的公共弦所在直线方程为：",
    formula: String.raw`x^2+y^2=9,\qquad (x-4)^2+y^2=9`,
    options: [
      {
        key: "A",
        text: "y=2"
      },
      {
        key: "B",
        text: "x=4"
      },
      {
        key: "C",
        text: "x=2"
      },
      {
        key: "D",
        text: "x+y=2"
      }
    ],
    correctAnswer: "C",
    explanation: "将第二个方程展开后减去第一个，得 −8x+16=0，所以公共弦所在直线是 x=2。代回可得公共点 (2，√5)、(2，−√5)。"
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

export default function CircleCirclePage() {
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
          <span className="text-slate-600">圆与圆的位置关系</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 02</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 2.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">圆与圆的位置关系</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用圆心距与两圆半径判断位置关系，求解公共点和公共弦。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%9C%86%E4%B8%8E%E5%9C%86%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%85%B3%E7%B3%BB" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"用圆心距与半径和、半径差判断两圆的位置关系"}</li>
                <li>{"区分内切、外切、内含和重合"}</li>
                <li>{"用两圆方程相减求公共弦所在直线"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"圆的标准方程、两点间距离、方程组。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
              <article>
                <h3 className="font-semibold leading-7">{"1. 先找圆心、半径和圆心距"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"设两个圆的圆心为 C₁(a₁，b₁)、C₂(a₂，b₂)，半径为 R、r，均大于 0。先把一般方程配方，再求圆心距 d。"}</p>
                <Formula math={String.raw`d=\sqrt{(a_2-a_1)^2+(b_2-b_1)^2}`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"2. 外离、外切与相交"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"d>R+r 时外离，没有公共点；d=R+r 时外切，只有一个公共点；|R−r|<d<R+r 时相交，有两个公共点。"}</p>
                <Formula math={String.raw`|R-r|<d<R+r\quad\Longleftrightarrow\quad\text{两圆相交}`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"两圆相交时，连接两圆心和任一交点形成三角形，三边长为 R、r、d；严格三角不等式正好给出相交条件。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"3. 内切与内含"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"d=|R−r| 且 d>0 时内切，只有一个公共点；d<|R−r| 时内含，小圆完全在大圆内部，没有公共点。"}</p>
                <Formula math={String.raw`d=|R-r|>0:\ \text{内切}\qquad d<|R-r|:\ \text{内含}`} />
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"4. 同心与重合要单独判断"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"若 d=0 且 R≠r，两圆同心且内含，没有公共点；若 d=0 且 R=r，两圆重合，有无穷多个公共点。"}</p>
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"不能只看到 d=|R−r| 就判断内切：当两个量都为 0 时，实际上是两圆重合。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"5. 相减消去二次项"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"对两个已归一化的一般方程作差，x²、y² 项消失，得到一次方程。两圆相交时，该直线经过两个公共点，就是公共弦所在直线。"}</p>
                <Formula math={String.raw`(D_1-D_2)x+(E_1-E_2)y+F_1-F_2=0`} />
                <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"相减得到的方程只约束公共点所在的直线。求交点还要代回任意一个圆方程；若两圆没有公共点，就不能把所得直线称为公共弦所在直线。"}</p>
              </article>

              <article>
                <h3 className="font-semibold leading-7">{"6. 公共弦的几何性质"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{"两圆相交时，连心线垂直平分公共弦。求出公共弦所在直线后，可以计算任一圆心到该直线的距离 h，再用该圆的半径求弦长。"}</p>
                <Formula math={String.raw`|PQ|=2\sqrt{R^2-h^2}`} />
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
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"半径和决定外切"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"两圆圆心为 C₁(0，0)、C₂(3，4)，半径分别为 3 和 2，判断两圆的位置关系。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"圆心距 d=√(3²+4²)=5。"}</li>
                    <li>{"半径和 R+r=5，半径差的绝对值为 1。"}</li>
                    <li>{"因为 d=R+r，所以两圆外切，只有一个公共点。"}</li>
                  </ol>
                  <Formula math={String.raw`d=5=3+2\quad\Rightarrow\quad\text{外切}`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"求公共弦与公共点"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"求圆 x²+y²=9 与圆 (x−4)²+y²=9 的公共弦所在直线及公共点。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"两圆半径均为 3，圆心距为 4，满足 0<4<6，因此相交。"}</li>
                    <li>{"展开第二个方程后减去第一个，得 −8x+16=0，即 x=2。"}</li>
                    <li>{"代入 x²+y²=9 得 y²=5，公共点为 (2，√5)、(2，−√5)，公共弦长为 2√5。"}</li>
                  </ol>
                  <Formula math={String.raw`x=2,\qquad P(2,\sqrt5),\quad Q(2,-\sqrt5)`} />
                </details>
              </article>

              <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"区分内含与内切"}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-700">{"判断圆 x²+y²=16 与圆 (x−1)²+y²=1 的位置关系。"}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                    <li>{"两圆圆心为 (0，0)、(1，0)，半径分别为 4 和 1。"}</li>
                    <li>{"圆心距 d=1，半径差 |R−r|=3。"}</li>
                    <li>{"因为 d<|R−r|，所以小圆被大圆内含，两圆没有公共点；并非内切。"}</li>
                  </ol>
                  <Formula math={String.raw`d=1<3=|4-1|\quad\Rightarrow\quad\text{内含}`} />
                </details>
              </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7">
              <h2 className="text-xl font-bold">易错提醒</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
                <li>{"必须同时比较半径和与半径差；只比较 d 与 R+r 无法区分相交和内含。"}</li>
                <li>{"内切条件还需 d>0，避免把重合误判为内切。"}</li>
                <li>{"两圆方程相减前要先把 x²、y² 的系数归一化。"}</li>
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
                <li>{"先求圆心距，再依次比较 R+r、|R−r|。"}</li>
                <li>{"内切和外切各有一个公共点，相交有两个，重合有无穷多个。"}</li>
                <li>{"相交圆相减求公共弦直线，再代回求交点或用距离法求弦长。"}</li>
              </ul>
              <Link href="/practice?topic=%E5%9C%86%E4%B8%8E%E5%9C%86%E7%9A%84%E4%BD%8D%E7%BD%AE%E5%85%B3%E7%B3%BB" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“圆与圆的位置关系”专题训练 →</Link>
            </section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/circle-equation/line-circle" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：直线与圆的位置关系</Link>
              <Link href="/grade2/circle-equation" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">返回本章目录 →</Link>
              <Link href="/grade2/conic-sections" className="rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-700">下一章：圆锥曲线与方程 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第二章 · 圆与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "2.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "2.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "2.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
  const [distance, setDistance] = useState(3);
  const relation = distance > 4 ? "外离 · 没有公共点" : distance === 4 ? "外切 · 一个公共点" : distance > 2 ? "相交 · 两个公共点" : distance === 2 ? "内切 · 一个公共点" : "内含 · 没有公共点";
  const x = (value: number) => 200 + value * 20;
  const y = (value: number) => 140 - value * 20;

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：小圆从大圆内部向外移动</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">固定大圆半径 R=3、小圆半径 r=1。重点比较 d=2 与 d=4 两个临界位置。</p>
      <svg viewBox="0 0 400 280" role="img" aria-label={`两圆示意图，d=${distance}，${relation}`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({ length: 19 }, (_, i) => i - 9).map((i) => <line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="260" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({ length: 13 }, (_, i) => i - 6).map((i) => <line key={`y${i}`} x1="20" x2="380" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 140H380 M200 260V20" stroke="#94a3b8" />
        <text x="383" y="135" fontSize="12" fill="#64748b">x</text>
        <text x="206" y="22" fontSize="12" fill="#64748b">y</text>
        <text x="187" y="155" fontSize="11" fill="#64748b">O</text>
        <circle cx={x(-2)} cy={y(0)} r={3 * 20} fill="#3b82f6" fillOpacity="0.06" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx={x(-2)} cy={y(0)} r="3" fill="#2563eb" />
        <text x={x(-2) + 7} y={y(0) - 9} fontSize="12" fill="#1d4ed8">C₁</text>
        <circle cx={x(-2 + distance)} cy={y(0)} r="20" fill="#f59e0b" fillOpacity="0.12" stroke="#d97706" strokeWidth="2.5" />
        <line x1={x(-2)} x2={x(-2 + distance)} y1={y(0)} y2={y(0)} stroke="#64748b" strokeDasharray="4 3" />
        <circle cx={x(-2 + distance)} cy={y(0)} r="3" fill="#d97706" />
        <text x={x(-2 + distance) + 6} y={y(0) + 17} fontSize="12" fill="#b45309">C₂</text>
      </svg>
      <label className="mt-5 block">
        <span className="flex justify-between text-sm font-medium text-slate-700"><span>两圆圆心距 d</span><span className="text-blue-700">{distance}</span></span>
        <input type="range" aria-label="两圆圆心距 d" min="0" max="5" step="0.5" value={distance} onChange={(event) => setDistance(Number(event.target.value))} className="mt-3 w-full accent-blue-600" />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5].map((value) => <button key={value} type="button" onClick={() => setDistance(value)} aria-pressed={distance === value} className={`rounded-lg border px-3 py-2 text-xs font-medium ${distance === value ? "border-blue-400 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>d={value}</button>)}
      </div>
      <div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <p className="font-semibold">{relation}</p>
        <p className="mt-2 leading-6">{`R+r=4，|R−r|=2，当前 d=${distance}`}</p>
      </div>
    </section>
  );
}
