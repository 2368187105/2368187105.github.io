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
    id: "g2-ellipse-01",
    topic: "椭圆",
    title: "识别焦点坐标",
    question: "下列椭圆的焦点坐标为：",
    formula: String.raw`\frac{x^2}{25}+\frac{y^2}{9}=1`,
    options: [
      {
        key: "A",
        text: "(−4，0)、(4，0)"
      },
      {
        key: "B",
        text: "(−5，0)、(5，0)"
      },
      {
        key: "C",
        text: "(0，−4)、(0，4)"
      },
      {
        key: "D",
        text: "(−3，0)、(3，0)"
      }
    ],
    correctAnswer: "A",
    explanation: "a²=25、b²=9，所以 c²=25−9=16，c=4。较大的分母在 x² 下，焦点为 (±4，0)。"
  },
  {
    id: "g2-ellipse-02",
    topic: "椭圆",
    title: "计算离心率",
    question: "下列椭圆的离心率为：",
    formula: String.raw`\frac{x^2}{16}+\frac{y^2}{12}=1`,
    options: [
      {
        key: "A",
        text: "1/4"
      },
      {
        key: "B",
        text: "1/2"
      },
      {
        key: "C",
        text: "√3/2"
      },
      {
        key: "D",
        text: "2"
      }
    ],
    correctAnswer: "B",
    explanation: "a=4，c=√(16−12)=2，因此 e=c/a=1/2。"
  },
  {
    id: "g2-ellipse-03",
    topic: "椭圆",
    title: "由定义求标准方程",
    question: "椭圆的焦点为 (−3，0)、(3，0)，圆锥曲线上任一点到两焦点的距离和为 10，其方程是：",
    options: [
      {
        key: "A",
        text: "x²/16+y²/25=1"
      },
      {
        key: "B",
        text: "x²/25+y²/9=1"
      },
      {
        key: "C",
        text: "x²/25+y²/16=1"
      },
      {
        key: "D",
        text: "x²/16+y²/9=1"
      }
    ],
    correctAnswer: "C",
    explanation: "距离和为 2a=10，所以 a=5，c=3，b²=25−9=16。焦点在 x 轴上，因此方程为 x²/25+y²/16=1。"
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

export default function EllipsePage() {
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
          <span className="text-slate-600">椭圆</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 03</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 3.1</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">椭圆</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">从到两定点的距离之和出发，理解椭圆的定义、标准方程、焦点与离心率。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%A4%AD%E5%9C%86" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"理解椭圆定义及距离和的取值条件"}</li>
                <li>{"区分两种焦点方向，正确求 a、b、c"}</li>
                <li>{"利用范围、对称性、离心率及焦点关系解题"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"两点间距离公式、圆的方程、一元二次方程。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 椭圆的定义"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"平面内到两个定点 F₁、F₂ 的距离之和等于常数 2a，且 2a 大于两定点间的距离 2c 的点的轨迹叫椭圆。F₁、F₂ 是焦点，2c 是焦距。"}</p>
                  <Formula math={String.raw`|PF_1|+|PF_2|=2a,\qquad a>c>0`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"若距离和等于焦距，轨迹是两焦点之间的线段；小于焦距时没有满足条件的点。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 标准方程与焦点方向"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"以两焦点中点为原点、连心线为一条坐标轴。利用距离公式并两次平方，可以把距离和条件转化为标准方程。分母较大的平方项对应长轴，也就是焦点所在的坐标轴。"}</p>
                  <Formula math={String.raw`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\ (a>b>0),\quad F_{1,2}(\pm c,0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 焦点在 y 轴上的椭圆"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"焦点在 y 轴上时，较大的分母 a² 放在 y² 下。两种形式中 a 始终是长半轴长，b 是短半轴长，c 是半焦距。"}</p>
                  <Formula math={String.raw`\frac{y^2}{a^2}+\frac{x^2}{b^2}=1,\quad F_{1,2}(0,\pm c),\quad c^2=a^2-b^2`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"不要固定把 x² 下的分母当作 a²；先比较分母大小，再确定焦点方向。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 范围、对称轴与顶点"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"焦点在 x 轴上时，椭圆关于两条坐标轴及原点对称，横坐标范围为 [−a，a]，纵坐标范围为 [−b，b]。长轴长 2a、短轴长 2b。焦点在 y 轴上时交换 x、y 的角色。"}</p>
                  <Formula math={String.raw`(\pm a,0),\ (0,\pm b),\qquad a^2=b^2+c^2`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 离心率描述扁圆程度"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"离心率 e 是半焦距与长半轴长的比值。a 固定时，e 越接近 1，b 越小，椭圆越扁；e 越接近 0，形状越接近圆。这里讨论两个焦点不同的椭圆，e 严格位于 0 和 1 之间。"}</p>
                  <Formula math={String.raw`e=\frac ca=\sqrt{1-\frac{b^2}{a^2}},\qquad 0<e<1`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 求方程与直线相交问题"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"已知焦点、轴长或离心率时，先确定焦点方向，再用 a²=b²+c² 求出参数。与直线联立求交点时，代入后分析实根；竖直直线 x=t 可以直接代入，不必设斜率。"}</p>
                  <Formula math={String.raw`\Delta>0:\text{两个交点};\quad\Delta=0:\text{相切};\quad\Delta<0:\text{没有交点}`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"涉及焦点距离时优先使用定义中的距离和，通常比展开根式更直接。"}</p>
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"由焦点与长轴求方程"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"椭圆的焦点为 F₁(−3，0)、F₂(3，0)，长轴长为 10，求标准方程。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"焦点在 x 轴上，设 x²/a²+y²/b²=1。"}</li>
                      <li>{"2a=10，所以 a=5；c=3，由 b²=a²−c²=25−9=16。"}</li>
                      <li>{"得到标准方程，且 a>c，符合椭圆定义。"}</li>
                    </ol>
                    <Formula math={String.raw`\frac{x^2}{25}+\frac{y^2}{16}=1`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"识别焦点在 y 轴上的椭圆"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求椭圆 x²/9+y²/25=1 的焦点、长轴长与离心率。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"y² 下的分母较大，因此焦点在 y 轴上，a=5、b=3。"}</li>
                      <li>{mathText("c=√(25−9)=4，焦点为 (0，−4)、(0，4)。")}</li>
                      <li>{"长轴长为 2a=10，离心率为 c/a=4/5。"}</li>
                    </ol>
                    <Formula math={String.raw`F_{1,2}(0,\pm4),\quad 2a=10,\quad e=\frac45`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"求椭圆上的一条弦"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"直线 x=3 与椭圆 x²/25+y²/16=1 相交，求交点和弦长。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"代入 x=3，得到 y²/16=1−9/25=16/25。"}</li>
                      <li>{"解得 y=±16/5，两个交点横坐标相同。"}</li>
                      <li>{"弦长等于两个纵坐标之差，为 32/5。"}</li>
                    </ol>
                    <Formula math={String.raw`P\left(3,\frac{16}{5}\right),\quad Q\left(3,-\frac{16}{5}\right),\quad |PQ|=\frac{32}{5}`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"a、b、c 是长度，分母给出的是 a²、b²，焦距是 2c。"}</li>
              <li>{"椭圆满足 a²=b²+c²，不是 c²=a²+b²。"}</li>
              <li>{"识别焦点方向看分母大小，不能只看方程中 x²、y² 的先后。"}</li></ul></section>
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
              <li>{"定义抓住距离和 2a，且 2a>2c。"}</li>
              <li>{"焦点沿长轴，参数关系为 a²=b²+c²。"}</li>
              <li>{"离心率在 0 与 1 之间，求焦点距离可先用定义。"}</li></ul><Link href="/practice?topic=%E6%A4%AD%E5%9C%86" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“椭圆”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/circle-equation/circle-circle" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：圆与圆的位置关系</Link>
              <Link href="/grade2/conic-sections/hyperbola" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：双曲线 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第三章 · 圆锥曲线与方程</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "3.1" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "3.1" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "3.1" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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
  const a = 4;
  const [b, setB] = useState(2);
  const [parameter, setParameter] = useState(45);
  const c = Math.sqrt(a * a - b * b);
  const theta = parameter * Math.PI / 180;
  const point = { x: a * Math.cos(theta), y: b * Math.sin(theta) };
  const d1 = Math.hypot(point.x + c, point.y);
  const d2 = Math.hypot(point.x - c, point.y);
  const curve = Array.from({ length: 181 }, (_, i) => {
    const t = i * Math.PI / 90;
    return `${x(a * Math.cos(t))},${y(b * Math.sin(t))}`;
  }).join(" ");

  return (
    <section id="explore" className="scroll-mt-24 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7">
      <p className="text-xs font-semibold tracking-wide text-blue-600">EXPLORE THE GEOMETRY</p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">动手观察：椭圆的距离和</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">固定 a=4，改变 b 与点 P 的位置，核对两条焦半径的和。</p>
      <svg viewBox="0 0 520 360" role="img" aria-label={`椭圆示意图，b=${b}，P(${point.x.toFixed(2)}，${point.y.toFixed(2)})`} className="mt-5 w-full rounded-xl border border-slate-100 bg-slate-50">
        {Array.from({length:19},(_,i)=>i-9).map(i=><line key={`x${i}`} x1={x(i)} x2={x(i)} y1="20" y2="340" stroke="#e2e8f0" strokeWidth="0.5" />)}
        {Array.from({length:13},(_,i)=>i-6).map(i=><line key={`y${i}`} x1="20" x2="500" y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth="0.5" />)}
        <path d="M20 180H500 M260 340V20" stroke="#94a3b8" />
        <text x="501" y="173" fontSize="12" fill="#64748b">x</text><text x="267" y="22" fontSize="12" fill="#64748b">y</text><text x="245" y="196" fontSize="11" fill="#64748b">O</text>
        <polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5" />
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
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>短半轴 b</span><span className="text-blue-700">{b}</span></span><input type="range" aria-label="短半轴 b" min="1" max="3.5" step="0.5" value={b} onChange={event=>setB(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
        <label><span className="flex justify-between text-sm font-medium text-slate-700"><span>点 P 的参数角 θ</span><span className="text-blue-700">{parameter}</span></span><input type="range" aria-label="点 P 的参数角 θ" min="0" max="360" step="15" value={parameter} onChange={event=>setParameter(Number(event.target.value))} className="mt-3 w-full accent-blue-600" /></label>
      </div>
      <div aria-live="polite" className="mt-5 overflow-x-auto rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <BlockMath math={String.raw`\frac{x^2}{16}+\frac{y^2}{${b*b}}=1`} />
        <p className="font-semibold">PF₁+PF₂ = {(d1+d2).toFixed(3)} = 2a</p>
        <p className="mt-2 leading-6">a={a}，b={b}，c={c.toFixed(3)}，e={(c/a).toFixed(3)}</p>
      </div>
    </section>
  );
}
