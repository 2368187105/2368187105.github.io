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
    id: "g2-parabola-01",
    topic: "抛物线",
    title: "辨认焦点",
    question: "抛物线的焦点坐标为：",
    formula: String.raw`y^2=8x`,
    options: [
      {
        key: "A",
        text: "(2，0)"
      },
      {
        key: "B",
        text: "(4，0)"
      },
      {
        key: "C",
        text: "(8，0)"
      },
      {
        key: "D",
        text: "(0，2)"
      }
    ],
    correctAnswer: "A",
    explanation: "与 y²=2px 比较，2p=8，p=4，焦点为 (p/2，0)=(2，0)。"
  },
  {
    id: "g2-parabola-02",
    topic: "抛物线",
    title: "辨认开口与准线",
    question: "下列抛物线的焦点和准线分别为：",
    formula: String.raw`x^2=-12y`,
    options: [
      {
        key: "A",
        text: "(0，3)，y=−3"
      },
      {
        key: "B",
        text: "(0，−3)，y=3"
      },
      {
        key: "C",
        text: "(0，−6)，y=6"
      },
      {
        key: "D",
        text: "(−3，0)，x=3"
      }
    ],
    correctAnswer: "B",
    explanation: "这是向下开口的抛物线 x²=−2py，2p=12，p=6。因此焦点为 (0，−3)，准线为 y=3。"
  },
  {
    id: "g2-parabola-03",
    topic: "抛物线",
    title: "用定义计算焦半径",
    question: "P 在抛物线上，横坐标为 3，则 P 到焦点的距离为：",
    formula: String.raw`y^2=4x`,
    options: [
      {
        key: "A",
        text: "2"
      },
      {
        key: "B",
        text: "3"
      },
      {
        key: "C",
        text: "4"
      },
      {
        key: "D",
        text: "5"
      }
    ],
    correctAnswer: "C",
    explanation: "2p=4，所以 p=2，准线为 x=−1。由抛物线定义，PF 等于点 P 到准线的距离，即 3−(−1)=4。"
  }
];

const lessonSections = [
  {
    number: "3.1",
    title: "椭圆",
    href: "/grade2/conic-sections/ellipse"
  },
  {
    number: "3.2",
    title: "双曲线",
    href: "/grade2/conic-sections/hyperbola"
  },
  {
    number: "3.3",
    title: "抛物线",
    href: "/grade2/conic-sections/parabola"
  }
];

export default function ParabolaPage() {
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
          <Link href="/grade2/conic-sections" className="hover:text-blue-600">圆锥曲线与方程</Link><span>/</span>
          <span className="text-slate-600">抛物线</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 03</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 3.3</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">抛物线</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">用到定点与定直线的等距关系建立抛物线，认识四种标准方程、焦点、准线和焦半径。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%8A%9B%E7%89%A9%E7%BA%BF" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解焦点与准线的等距定义"}</li>
                <li>{"辨认四种开口方向，求 p、焦点和准线"}</li>
                <li>{"通过定义计算焦半径并解决点的位置问题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"两点间距离、点到直线距离、二次函数图象。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 抛物线的定义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"平面内到一个定点 F 和一条定直线 l 的距离相等的点的轨迹叫抛物线，其中定点 F 不在定直线 l 上。F 叫焦点，l 叫准线。设 P 到准线的垂足为 H，则 PF=PH。"}</p>
                  <Formula math={String.raw`|PF|=d(P,l)=|PH|`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 从定义推导右开口标准方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"令焦点 F(p/2，0)、准线 x=−p/2，p>0。任取 P(x，y)，由两种距离相等并平方，消去相同项可得 y²=2px。顶点为原点，对称轴为 x 轴，开口向右。"}</p>
                  <Formula math={String.raw`\sqrt{\left(x-\frac p2\right)^2+y^2}=\left|x+\frac p2\right|\quad\Longrightarrow\quad y^2=2px`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"p 是焦点到准线的距离，焦点到顶点的距离是 p/2。平方项前的 2p 不是焦点坐标。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 四种标准方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"y²=±2px 的对称轴为 x 轴，x²=±2py 的对称轴为 y 轴。未平方变量的符号决定开口朝该坐标轴的正向还是负向。以下均取 p>0。"}</p>
                  <Formula math={String.raw`\begin{array}{c|c|c} \text{方程}&\text{焦点}&\text{准线}\\ y^2=2px&(p/2,0)&x=-p/2\\y^2=-2px&(-p/2,0)&x=p/2\\x^2=2py&(0,p/2)&y=-p/2\\x^2=-2py&(0,-p/2)&y=p/2\end{array}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 图形与几何性质"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"抛物线只有一个焦点、一条准线和一条对称轴。右开口型顶点为 (0，0)，横坐标范围 x≥0，关于 x 轴对称。焦点到顶点的距离与准线到顶点的距离相等。"}</p>
                  <Formula math={String.raw`y^2=2px:\quad x\ge0,\quad F\left(\frac p2,0\right),\quad l:x=-\frac p2`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 焦半径：用定义替代根式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 P(x₀，y₀) 在右开口抛物线 y²=2px 上，则 PF 等于 P 到准线的距离，因为 x₀≥0，可直接写为 x₀+p/2。其他开口方向应按相应准线计算距离。"}</p>
                  <Formula math={String.raw`|PF|=x_0+\frac p2\quad\left(P\in y^2=2px\right)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 与椭圆、双曲线的联系"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"三种圆锥曲线都可用坐标法把几何条件转化为方程。抛物线的点到焦点距离与到准线距离之比恒为 1，称离心率 e=1。与椭圆 e<1、双曲线 e>1 对照理解，但不要把另外两类曲线的 a、b、c 直接套到抛物线上。"}</p>
                  <Formula math={String.raw`\frac{|PF|}{d(P,l)}=1,\qquad e=1`} />
                </article>
              </div>
            </section>
            <ConicFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"由方程求焦点与准线"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求抛物线 y²=8x 的焦点坐标和准线方程。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"与 y²=2px 比较，2p=8，所以 p=4。"}</li>
                      <li>{"开口向右，焦点为 (p/2，0)=(2，0)。"}</li>
                      <li>{"准线为 x=−p/2，即 x=−2。"}</li>
                    </ol>
                    <Formula math={String.raw`F(2,0),\qquad l:x=-2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"由焦点反求方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"抛物线顶点为原点、焦点为 (0，−3)，求标准方程与准线。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"焦点在 y 轴负半轴，设 x²=−2py，p>0。"}</li>
                      <li>{"焦点纵坐标为 −p/2=−3，所以 p=6。"}</li>
                      <li>{"方程为 x²=−12y，准线在焦点的另一侧，为 y=3。"}</li>
                    </ol>
                    <Formula math={String.raw`x^2=-12y,\qquad l:y=3`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"用等距定义求焦半径"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"P 在抛物线 y²=4x 上，且横坐标为 3，求 PF，并求点 P 的坐标。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"2p=4，所以 p=2，准线为 x=−1。"}</li>
                      <li>{"根据定义，PF 等于 P 到 x=−1 的距离，为 3+1=4。"}</li>
                      <li>{"代入 x=3 得 y²=12，所以 P 有两个可能位置 (3，±2√3)。"}</li>
                    </ol>
                    <Formula math={String.raw`|PF|=4,\qquad P(3,\pm2\sqrt3)`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"y²=8x 中 2p=8，p=4，焦点横坐标为 2。"}</li>
              <li>{"写四种标准方程时统一规定 p>0，用方程中的正负号区分开口。"}</li>
              <li>{"焦点到顶点距离为 p/2，焦点到准线距离才是 p；准线与开口方向所在的轴垂直。"}</li></ul></section>
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
              <li>{"定义是到焦点与到准线的距离相等，焦点不在准线上。"}</li>
              <li>{"先看平方的是哪个变量，再看未平方项的符号判断开口。"}</li>
              <li>{"比较系数求 p，焦半径问题优先用到准线的距离。"}</li></ul><Link href="/practice?topic=%E6%8A%9B%E7%89%A9%E7%BA%BF" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“抛物线”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/conic-sections/hyperbola" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：双曲线</Link>
              <Link href="/grade2/sequences/concept" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一章：数列 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第三章 · 圆锥曲线与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "3.3" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "3.3" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "3.3" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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


/* 本节图形直接放在课程页，参数始终满足本节曲线的定义条件。 */
function ConicFigure() {
  // 固定 SVG 坐标精度，避免服务端与浏览器的数学函数尾数差异导致 hydration 不一致。
  const x = (value: number) => Number((260 + value * 26).toFixed(3));
  const y = (value: number) => Number((180 - value * 26).toFixed(3));
  const [p, setP] = useState(2);
  const [parameter, setParameter] = useState(2);
  const c = p / 2;
  const point = { x: parameter * parameter / (2 * p), y: parameter };
  const d1 = Math.hypot(point.x - c, point.y);
  const d2 = point.x + c;
  const curve = Array.from({ length: 121 }, (_, i) => {
    const py = -4 + i / 15;
    return `${x(py * py / (2 * p))},${y(py)}`;
  }).join(" ");

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：抛物线的等距关系</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">改变 p 与点 P 的纵坐标，比较到焦点的距离和到准线的距离。</p>
      <svg viewBox="0 0 520 360" role="img" aria-label={`抛物线示意图，p=${p}，P(${point.x.toFixed(2)}，${point.y.toFixed(2)})`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({length:19},(_,i)=>i-9).map(i=><line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="340" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({length:13},(_,i)=>i-6).map(i=><line key={`y${i}`} x1="20" x2="500" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 180H500 M260 340V20" stroke="#94a3b8" />
        <text x="501" y="173" fontSize="12" fill="#64748b">x</text><text x="267" y="22" fontSize="12" fill="#64748b">y</text><text x="245" y="196" fontSize="11" fill="#64748b">O</text>
        <polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <line x1={x(-p/2)} x2={x(-p/2)} y1="30" y2="330" stroke="#d97706" strokeWidth="2" />
        <text x={x(-p/2)-45} y="40" fontSize="11" fill="#b45309">准线</text>
        <line x1={x(point.x)} y1={y(point.y)} x2={x(-p/2)} y2={y(point.y)} stroke="#059669" strokeDasharray="5 3" />
        <circle cx={x(-p/2)} cy={y(point.y)} r="3" fill="#059669" />
        <text x={x(-p/2)-14} y={y(point.y)-8} fontSize="12" fill="#047857">H</text>
        <line x1={x(point.x)} y1={y(point.y)} x2={x(c)} y2={y(0)} stroke="#059669" strokeDasharray="5 3" />
        <circle cx={x(c)} cy={y(0)} r="4" fill="#d97706" />
        <text x={x(c)+6} y={y(0)+20} fontSize="12" fill="#b45309">F</text>
        <circle cx={x(point.x)} cy={y(point.y)} r="4" fill="#059669" />
        <text x={x(point.x)+7} y={y(point.y)-9} fontSize="12" fill="#047857">P</text>
      </svg>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>焦点到准线的距离 p</span><span className="text-blue-700">{p}</span></span><input type="range" aria-label="焦点到准线的距离 p" min="1" max="4" step="0.5" value={p} onChange={event=>setP(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>点 P 的纵坐标 y</span><span className="text-blue-700">{parameter}</span></span><input type="range" aria-label="点 P 的纵坐标 y" min="-3" max="3" step="0.5" value={parameter} onChange={event=>setParameter(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
      </div>
      <div aria-live="polite" className="mt-5 overflow-x-auto rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <BlockMath math={String.raw`y^2=${2*p}x`} />
        <p className="font-semibold">PF = PH = {d1.toFixed(3)}；PH = {d2.toFixed(3)}</p>
        <p className="mt-2 leading-6">p={p}，焦点 F({(p/2).toFixed(2)}，0)，准线 x={(-p/2).toFixed(2)}</p>
      </div>
    </section>
  );
}
