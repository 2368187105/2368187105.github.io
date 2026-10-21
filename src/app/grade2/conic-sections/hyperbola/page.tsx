"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
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
    id: "g2-hyperbola-01",
    topic: "双曲线",
    title: "计算焦点",
    question: "下列双曲线的焦点坐标是：",
    formula: String.raw`\frac{x^2}{9}-\frac{y^2}{16}=1`,
    options: [
      {
        key: "A",
        text: "(±3，0)"
      },
      {
        key: "B",
        text: "(±5，0)"
      },
      {
        key: "C",
        text: "(0，±5)"
      },
      {
        key: "D",
        text: "(±4，0)"
      }
    ],
    correctAnswer: "B",
    explanation: "正平方项为 x²，焦点在 x 轴上。c²=a²+b²=9+16=25，所以焦点为 (±5，0)。"
  },
  {
    id: "g2-hyperbola-02",
    topic: "双曲线",
    title: "写出渐近线",
    question: "下列双曲线的渐近线方程为：",
    formula: String.raw`\frac{x^2}{16}-\frac{y^2}{9}=1`,
    options: [
      {
        key: "A",
        text: "y=±4x/3"
      },
      {
        key: "B",
        text: "y=±16x/9"
      },
      {
        key: "C",
        text: "y=±3x/4"
      },
      {
        key: "D",
        text: "y=±9x/16"
      }
    ],
    correctAnswer: "C",
    explanation: "a=4、b=3，x 轴型双曲线的渐近线为 y=±(b/a)x，即 y=±3x/4。"
  },
  {
    id: "g2-hyperbola-03",
    topic: "双曲线",
    title: "计算双曲线离心率",
    question: "下列双曲线的离心率为：",
    formula: String.raw`\frac{x^2}{4}-\frac{y^2}{5}=1`,
    options: [
      {
        key: "A",
        text: "2/3"
      },
      {
        key: "B",
        text: "√5/2"
      },
      {
        key: "C",
        text: "1/2"
      },
      {
        key: "D",
        text: "3/2"
      }
    ],
    correctAnswer: "D",
    explanation: "a=2，c=√(4+5)=3，所以 e=c/a=3/2，大于 1。"
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

export default function HyperbolaPage() {
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
          <span className="text-slate-600">双曲线</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 03</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 3.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">双曲线</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">从到两定点的距离差的绝对值出发，掌握双曲线的方程、两支、渐近线与离心率。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%8F%8C%E6%9B%B2%E7%BA%BF" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解距离差的绝对值及定义条件"}</li>
                <li>{"区分焦点方向，求实轴、虚轴、焦点与渐近线"}</li>
                <li>{"使用参数关系和定义处理双曲线问题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"椭圆的学习方法、两点间距离公式、绝对值。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 双曲线的定义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"平面内到两个定点 F₁、F₂ 的距离差的绝对值等于常数 2a，且该常数大于 0、小于两定点间距离 2c 的点的轨迹，叫双曲线。绝对值使曲线通常包含两支。"}</p>
                  <Formula math={String.raw`\bigl||PF_1|-|PF_2|\bigr|=2a,\qquad 0<a<c`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"距离差为 0 时轨迹是两焦点连线的垂直平分线；差的绝对值等于焦距时出现退化轨迹，均不属于这里的双曲线。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 焦点在 x 轴上的标准方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"取两焦点中点为原点、焦点连线为 x 轴。将定义中的距离条件代入距离公式并整理，得到标准方程。其中 a、b 均为正数，但不要求 a>b。"}</p>
                  <Formula math={String.raw`\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\quad c^2=a^2+b^2,\quad F_{1,2}(\pm c,0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 焦点在 y 轴上的标准方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"标准方程中，正的平方项对应焦点所在的坐标轴。因此 y² 项为正时，焦点和实轴都在 y 轴上；不要用分母大小决定焦点方向。"}</p>
                  <Formula math={String.raw`\frac{y^2}{a^2}-\frac{x^2}{b^2}=1,\quad F_{1,2}(0,\pm c)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 范围、对称性与轴"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"焦点在 x 轴上时，双曲线关于两条坐标轴和原点对称，顶点为 (±a，0)，横坐标满足 x≤−a 或 x≥a。实轴长 2a、虚轴长 2b。焦点在 y 轴上时交换坐标轴角色。"}</p>
                  <Formula math={String.raw`x\le -a\ \text{或}\ x\ge a,\qquad \text{顶点 }(\pm a,0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 渐近线与图形趋势"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"当曲线上的点远离原点时，它与两条渐近线的距离趋近于 0。对 x²/a²−y²/b²=1，将右边的常数项改为 0 可帮助确定渐近线；y 轴型的斜率则相反。"}</p>
                  <Formula math={String.raw`\begin{aligned}\frac{x^2}{a^2}-\frac{y^2}{b^2}=1&:\ y=\pm\frac ba x\\\frac{y^2}{a^2}-\frac{x^2}{b^2}=1&:\ y=\pm\frac ab x\end{aligned}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"渐近线不是双曲线的一部分。a=b 时称等轴双曲线，渐近线互相垂直。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 离心率与焦点距离"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"双曲线离心率 e=c/a，由 c²=a²+b² 可知 e>1。焦点距离题可直接使用差的绝对值，再结合点所在的支判断哪一段距离较大。"}</p>
                  <Formula math={String.raw`e=\frac ca=\sqrt{1+\frac{b^2}{a^2}}>1`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"读出几何性质"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 x²/9−y²/16=1 的焦点、顶点、渐近线和离心率。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"正平方项为 x²，焦点在 x 轴上，a=3、b=4。"}</li>
                      <li>{mathText("c=√(9+16)=5，所以焦点为 (±5，0)，顶点为 (±3，0)。")}</li>
                      <li>{"渐近线斜率为 ±b/a=±4/3，离心率为 5/3。"}</li>
                    </ol>
                    <Formula math={String.raw`F_{1,2}(\pm5,0),\quad y=\pm\frac43x,\quad e=\frac53`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"识别 y 轴型双曲线"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 y²/16−x²/9=1 的焦点和渐近线。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"y² 项为正，所以焦点在 y 轴上，a=4、b=3。"}</li>
                      <li>{"由 c²=16+9=25，焦点为 (0，±5)。"}</li>
                      <li>{"由 y²/16=x²/9 得渐近线 y=±4x/3。"}</li>
                    </ol>
                    <Formula math={String.raw`F_{1,2}(0,\pm5),\qquad y=\pm\frac43x`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"利用定义求焦点距离"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"双曲线 x²/9−y²/16=1 的左、右焦点分别为 F₁、F₂。点 P 在右支上，若 |PF₁|=9，求 |PF₂|。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"a=3，所以两焦点距离差的绝对值为 2a=6。"}</li>
                      <li>{"P 在右支，离右焦点 F₂ 更近，故 |PF₁|−|PF₂|=6。"}</li>
                      <li>{"代入 |PF₁|=9，得 |PF₂|=3，无需先求点 P 的坐标。"}</li>
                    </ol>
                    <Formula math={String.raw`|PF_2|=9-6=3`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"双曲线中 c²=a²+b²，c 最大，但 a 不一定大于 b。"}</li>
              <li>{"焦点方向由正平方项决定；渐近线斜率要与方程方向对应。"}</li>
              <li>{"定义中的差带绝对值，去掉绝对值前应明确点在哪一支。"}</li></ul></section>
            <section id="lesson-quiz" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">KNOWLEDGE CHECK</p>
              <h2 className="mt-2 text-xl font-bold">课堂自测</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">共 {quizQuestions.length} 道单选题，全部作答后提交。本页显示自测成绩；登录后前往专题训练，可将答题记录和错题保存到账号。</p>
              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, questionIndex) => (
                  <fieldset key={question.id} className="min-w-0 rounded-xl border border-slate-200 p-4 sm:p-5" disabled={submitted}>
                    <legend className="px-2 text-sm font-semibold text-slate-800">{questionIndex + 1}. {question.title}</legend>
                    <p className="text-sm leading-7 text-slate-700">{mathText(question.question)}</p>
                    {question.formula && <Formula math={question.formula} />}
                    <div className="mt-4 space-y-2">
                      {question.options.map((option) => {
                        const correct = option.key === question.correctAnswer;
                        const chosen = answers[question.id] === option.key;
                        const style = submitted && correct ? "border-emerald-300 bg-emerald-50" : submitted && chosen ? "border-red-300 bg-red-50" : chosen ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-300";
                        return (
                          <label key={option.key} className={`flex items-start gap-3 rounded-xl border p-3 ${style} ${submitted ? "" : "cursor-pointer"}`}>
                            <input type="radio" name={question.id} value={option.key} checked={chosen} onChange={() => setAnswers((old) => ({ ...old, [question.id]: option.key }))} className="mt-1 accent-blue-600" />
                            <span className="flex-1 text-sm leading-6 text-slate-700">{option.key}. {mathText(option.text)}</span>
                            {submitted && correct && <span className="text-xs font-medium text-emerald-700">正确答案</span>}
                          </label>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p className={`text-sm font-semibold ${answers[question.id] === question.correctAnswer ? "text-emerald-700" : "text-red-600"}`}>{answers[question.id] === question.correctAnswer ? "回答正确" : `回答错误，正确答案：${question.correctAnswer}`}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{mathText(question.explanation)}</p>
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
              <li>{"双曲线由距离差的绝对值定义，且 0<2a<2c。"}</li>
              <li>{"正平方项决定焦点方向，参数关系为 c²=a²+b²。"}</li>
              <li>{"离心率大于 1；两条渐近线帮助刻画图形的伸展方向。"}</li></ul><Link href="/practice?topic=%E5%8F%8C%E6%9B%B2%E7%BA%BF" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“双曲线”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/conic-sections/ellipse" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：椭圆</Link>
              <Link href="/grade2/conic-sections/parabola" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：抛物线 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第三章 · 圆锥曲线与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "3.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "3.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "3.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
  const a = 2;
  const [b, setB] = useState(1.5);
  const [parameter, setParameter] = useState(0.6);
  const c = Math.sqrt(a * a + b * b);
  const point = { x: a * Math.cosh(parameter), y: b * Math.sinh(parameter) };
  const d1 = Math.hypot(point.x + c, point.y);
  const d2 = Math.hypot(point.x - c, point.y);

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：双曲线的距离差</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">固定 a=2，改变 b 与右支上的点 P，观察距离差、渐近线和离心率。</p>
      <svg viewBox="0 0 520 360" role="img" aria-label={`双曲线示意图，b=${b}，P(${point.x.toFixed(2)}，${point.y.toFixed(2)})`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({length:19},(_,i)=>i-9).map(i=><line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="340" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({length:13},(_,i)=>i-6).map(i=><line key={`y${i}`} x1="20" x2="500" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 180H500 M260 340V20" stroke="#94a3b8" />
        <text x="501" y="173" fontSize="12" fill="#64748b">x</text><text x="267" y="22" fontSize="12" fill="#64748b">y</text><text x="245" y="196" fontSize="11" fill="#64748b">O</text>
        {[-1,1].map(sign=><polyline key={sign} points={Array.from({length:121},(_,i)=>{const t=-1.45+i*2.9/120;return `${x(sign*a*Math.cosh(t))},${y(b*Math.sinh(t))}`;}).join(" ")} fill="none" stroke="#2563eb" strokeWidth="2.5" />)}
        {[-1,1].map(sign=><line key={sign} x1={x(-6)} x2={x(6)} y1={y(sign*b/a*(-6))} y2={y(sign*b/a*6)} stroke="#d97706" strokeDasharray="5 4" />)}
        <line x1={x(point.x)} y1={y(point.y)} x2={x(-c)} y2={y(0)} stroke="#059669" strokeDasharray="5 3" />
        <circle cx={x(-c)} cy={y(0)} r="4" fill="#d97706" />
        <text x={x(-c)-12} y={y(0)+20} fontSize="12" fill="#b45309">F₁</text>
        <line x1={x(point.x)} y1={y(point.y)} x2={x(c)} y2={y(0)} stroke="#059669" strokeDasharray="5 3" />
        <circle cx={x(c)} cy={y(0)} r="4" fill="#d97706" />
        <text x={x(c)+6} y={y(0)+20} fontSize="12" fill="#b45309">F₂</text>
        <circle cx={x(point.x)} cy={y(point.y)} r="4" fill="#059669" />
        <text x={x(point.x)+7} y={y(point.y)-9} fontSize="12" fill="#047857">P</text>
      </svg>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>虚半轴 b</span><span className="text-blue-700">{b}</span></span><input type="range" aria-label="虚半轴 b" min="1" max="3" step="0.5" value={b} onChange={event=>setB(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>点 P 的参数 t</span><span className="text-blue-700">{parameter}</span></span><input type="range" aria-label="点 P 的参数 t" min="-1.3" max="1.3" step="0.1" value={parameter} onChange={event=>setParameter(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
      </div>
      <div aria-live="polite" className="mt-5 overflow-x-auto rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <BlockMath math={String.raw`\frac{x^2}{4}-\frac{y^2}{${b*b}}=1`} />
        <p className="font-semibold">|PF₁−PF₂| = {Math.abs(d1-d2).toFixed(3)} = 2a</p>
        <p className="mt-2 leading-6">a={a}，b={b}，c={c.toFixed(3)}，e={(c/a).toFixed(3)}</p>
      </div>
    </section>
  );
}
