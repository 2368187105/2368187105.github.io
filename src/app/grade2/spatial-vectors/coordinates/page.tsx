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
    id: "g2-spatial-coordinates-01",
    topic: "空间向量的坐标表示",
    title: "由点求向量",
    question: "A(1，−1，2)、B(3，2，6)，则 AB 的向量坐标是：",
    options: [
    {
      key: "A",
      text: "(2，3，4)"
    },
    {
      key: "B",
      text: "(−2，−3，−4)"
    },
    {
      key: "C",
      text: "(4，1，8)"
    },
    {
      key: "D",
      text: "(2，1，4)"
    }
  ],
    correctAnswer: "A",
    explanation: "终点减起点，AB=(3−1，2+1，6−2)=(2，3，4)。"
  },
  {
    id: "g2-spatial-coordinates-02",
    topic: "空间向量的坐标表示",
    title: "三维向量的模",
    question: "向量 a=(2，−1，2) 的模为：",
    options: [
    {
      key: "A",
      text: "9"
    },
    {
      key: "B",
      text: "3"
    },
    {
      key: "C",
      text: "√5"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "B",
    explanation: "|a|=√(4+1+4)=3。"
  },
  {
    id: "g2-spatial-coordinates-03",
    topic: "空间向量的坐标表示",
    title: "垂直求参数",
    question: "若 a=(1，t，2)、b=(2，−1，1) 垂直，则 t 为：",
    options: [
    {
      key: "A",
      text: "0"
    },
    {
      key: "B",
      text: "−4"
    },
    {
      key: "C",
      text: "4"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "C",
    explanation: "a·b=2−t+2=0，解得 t=4。"
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

export default function SpatialCoordinatesPage() {
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
          <span className="text-slate-600">{vectorText("空间向量的坐标表示")}</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">{vectorText("CHAPTER 06")}</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">{vectorText("LESSON 6.2")}</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{vectorText("空间向量的坐标表示")}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">{vectorText("建立空间直角坐标系，用三维坐标计算向量、距离、夹角与垂直关系。")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("开始学习")}</a>
            <Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E7%9A%84%E5%9D%90%E6%A0%87%E8%A1%A8%E7%A4%BA" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">{vectorText("本节专题训练 →")}</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">{vectorText("学习目标")}</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{vectorText("区分点坐标与向量坐标，建立正交单位基底")}</li>
                <li>{vectorText("掌握三维向量的线性运算、模与数量积公式")}</li>
                <li>{vectorText("利用坐标条件判断共线、垂直并求参数")}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">{vectorText("预备知识：")}{vectorText("空间向量基本定理、平面向量坐标运算。")}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("CORE KNOWLEDGE")}</p>
              <h2 className="mt-2 text-xl font-bold">{vectorText("知识讲解")}</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{vectorText("1. 空间直角坐标系")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("取共同原点的三条两两垂直的数轴作为 x、y、z 轴，对应单位向量为 i、j、k。它们互相垂直且模均为 1，是一组正交单位基底。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}=x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}\quad\Longleftrightarrow\quad\overrightarrow{a}=(x,y,z)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("2. 由两点求向量")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("点 A、B 的坐标给出了它们相对原点的位置，向量 AB 的坐标则用终点 B 减去起点 A。平移向量后坐标不变，点与向量的概念仍要区分。")}</p>
                  <Formula math={String.raw`\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A,\ z_B-z_A)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("3. 线性运算的坐标形式")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("向量相加减时对应分量相加减，数乘时每个分量都要乘以同一个实数。共线可用整体倍数关系判定，含零分量时不能随意写比例式相除。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}\pm\overrightarrow{b}=(a_x\pm b_x,a_y\pm b_y,a_z\pm b_z),\quad\lambda\overrightarrow{a}=(\lambda a_x,\lambda a_y,\lambda a_z)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("4. 模与两点间距离")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("正交单位基底下，空间向量模的平方等于三个分量的平方和。两点距离就是相应位移向量的模，结果总是非负数。")}</p>
                  <Formula math={String.raw`|\overrightarrow{a}|=\sqrt{a_x^2+a_y^2+a_z^2},\quad |AB|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("5. 数量积与夹角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("将两向量按基底展开，利用不同单位轴向量互相垂直，可以得到数量积的坐标公式；代入夹角公式即可计算角度。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=a_xb_x+a_yb_y+a_zb_z,\quad\cos\theta=\frac{a_xb_x+a_yb_y+a_zb_z}{\sqrt{a_x^2+a_y^2+a_z^2}\sqrt{b_x^2+b_y^2+b_z^2}}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{vectorText("6. 垂直判定与参数")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{vectorText("两非零向量垂直等价于三个对应分量乘积之和为零。已知垂直关系时，把未知参数代入这个方程求解，最后检查向量是否非零。")}</p>
                  <Formula math={String.raw`\overrightarrow{a}\perp\overrightarrow{b}\iff a_xb_x+a_yb_y+a_zb_z=0\quad(\overrightarrow{a},\overrightarrow{b}\ne\overrightarrow{0})`} />
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
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 1")}</span>{vectorText("由坐标求位移与距离")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("已知 A(1，−1，2)、B(3，2，6)，求 AB 的向量坐标与两点距离。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("终点减起点，AB=(3−1，2−(−1)，6−2)=(2，3，4)。")}</li>
                      <li>{vectorText("|AB|²=2²+3²+4²=29。")}</li>
                      <li>{vectorText("两点距离为 √29。")}</li>
                    </ol>
                    <Formula math={String.raw`\overrightarrow{AB}=(2,3,4),\qquad |AB|=\sqrt{29}`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 2")}</span>{vectorText("求向量夹角")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("求 a=(1，1，0) 与 b=(1，0，1) 的夹角。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("数量积 a·b=1×1+1×0+0×1=1。")}</li>
                      <li>{vectorText("两向量的模均为 √2，故余弦为 1/2。")}</li>
                      <li>{vectorText("向量夹角属于 [0，π]，因此夹角为 60°。")}</li>
                    </ol>
                    <Formula math={String.raw`\cos\theta=\frac12,\qquad\theta=60^\circ`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">{vectorText("例 3")}</span>{vectorText("由垂直关系求参数")}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{vectorText("若 a=(1，t，2) 与 b=(2，−1，1) 垂直，求 t。")}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">{vectorText("查看解题过程与答案")}</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{vectorText("根据垂直条件，a·b=0。")}</li>
                      <li>{vectorText("计算得到 2−t+2=0，即 4−t=0。")}</li>
                      <li>{vectorText("解得 t=4，此时两个向量均非零，满足条件。")}</li>
                    </ol>
                    <Formula math={String.raw`t=4`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">{vectorText("易错提醒")}</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{vectorText("向量 AB 用 B 减 A，顺序颠倒会得到相反向量。")}</li>
              <li>{vectorText("坐标公式建立在正交单位基底上，不能套在任意斜基底上。")}</li>
              <li>{vectorText("共线判断遇零分量时使用倍数方程，避免除以零。")}</li></ul></section>
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
              <li>{vectorText("点坐标描述位置，向量坐标描述有向位移。")}</li>
              <li>{vectorText("三维线性运算逐分量进行。")}</li>
              <li>{vectorText("模与数量积公式让长度、夹角和垂直关系转化为代数计算。")}</li></ul><Link href="/practice?topic=%E7%A9%BA%E9%97%B4%E5%90%91%E9%87%8F%E7%9A%84%E5%9D%90%E6%A0%87%E8%A1%A8%E7%A4%BA" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">{vectorText("进入“空间向量的坐标表示”专题训练 →")}</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/spatial-vectors/operations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">{vectorText("← 上一节：空间向量及其运算")}</Link>
              <Link href="/grade2/spatial-vectors/applications" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">{vectorText("下一节：空间向量的应用 →")}</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">{vectorText("LEARNING PATH")}</p>
              <h2 className="mt-2 font-bold">{vectorText("第六章 · 空间向量与立体几何")}</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {vectorText(lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "6.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "6.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{vectorText(item.number)}</span>
                    <span>{vectorText(item.title)}{vectorText(item.number === "6.2" && <span className="block text-xs text-emerald-600">{vectorText("当前学习")}</span>)}</span>
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
 const [px,setPx]=useState(1),[py,setPy]=useState(1),[pz,setPz]=useState(1);
 const point:Vector=[px,py,pz];
 const length=Math.hypot(...point);
 const [rotation,setRotation]=useState(30);
 const theta=rotation*Math.PI/180;
 const project=([x,y,z]:Vector)=>[Number((260+50*(x*Math.cos(theta)-y*Math.sin(theta))).toFixed(3)),Number((210+26*(x*Math.sin(theta)+y*Math.cos(theta))-55*z).toFixed(3))];
 const origin:Vector=[0,0,0];
 const segment=(from:Vector,to:Vector,color:string,dashed=false)=><line x1={project(from)[0]} y1={project(from)[1]} x2={project(to)[0]} y2={project(to)[1]} stroke={color} strokeWidth="2.5" strokeDasharray={dashed?'5 4':undefined}/>;
 const label=(v:Vector,name:string,color:string)=><text x={project(v)[0]+7} y={project(v)[1]-8} fill={color} fontSize="12">{vectorSvgLabel(name)}</text>;
 const plane:Vector[]=[[-2,-2,0],[2,-2,0],[2,2,0],[-2,2,0]];
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">{vectorText("EXPLORE SPACE")}</p><h2 className="mt-2 text-xl font-bold">{vectorText("动手观察：点坐标与三维位移")}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{vectorText("改变点 P 的三个坐标，观察 OP 的分量与长度。虚线连接 P、其在 xy 平面的投影 H 和坐标轴。")}</p><svg viewBox="0 0 520 400" role="img" aria-label="可旋转的空间向量示意图" className="mt-5 w-full rounded-xl bg-slate-50"><polygon points={plane.map(p=>project(p).join(',')).join(' ')} fill="#dbeafe" fillOpacity="0.5" stroke="#bfdbfe"/>{vectorSvgLabel(segment([-3,0,0],[3,0,0],'#94a3b8'))}{vectorSvgLabel(segment([0,-3,0],[0,3,0],'#94a3b8'))}{vectorSvgLabel(segment([0,0,-2],[0,0,3],'#94a3b8'))}{vectorSvgLabel(label([3,0,0],'x','#64748b'))}{vectorSvgLabel(label([0,3,0],'y','#64748b'))}{vectorSvgLabel(label([0,0,3],'z','#64748b'))}{vectorSvgLabel(label(origin,'O','#64748b'))}
 {vectorSvgLabel(segment(origin,[px,0,0],'#d97706'))}{vectorSvgLabel(segment([px,0,0],[px,py,0],'#059669',true))}{vectorSvgLabel(segment([px,py,0],point,'#d97706',true))}{vectorSvgLabel(label([px,py,0],'H','#64748b'))}
 {vectorSvgLabel(segment(origin,point,'#2563eb'))}<circle cx={project(point)[0]} cy={project(point)[1]} r="4" fill="#2563eb"/>{vectorSvgLabel(label(point,'P','#1d4ed8'))}</svg><p className="mt-3 text-xs leading-6 text-slate-500">{vectorText("投影显示仅用于观察。真实长度与角度以下方三维计算为准；旋转视角不改变计算结果。")}</p><div className="mt-5 grid gap-5 sm:grid-cols-2">
 {vectorText([ ['点 P 的 x 坐标',px,setPx],['点 P 的 y 坐标',py,setPy],['点 P 的 z 坐标',pz,setPz] ].map(([name,value,setter])=><label key={String(name)} className="text-sm font-medium">{vectorText(String(name))}{vectorText("：")}{vectorText(Number(value))}<input aria-label={String(name)} type="range" min="-2" max="2" step="0.5" value={Number(value)} onChange={e=>(setter as (v:number)=>void)(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>))}
 <label className="text-sm font-medium">{vectorText("观察角度：")}{vectorText(rotation)}{vectorText("°")}<input aria-label="观察角度" type="range" min="-180" max="180" step="15" value={rotation} onChange={e=>setRotation(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label></div><div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>{vectorText("P(")}{vectorText(point.join('，'))}{vectorText(")；|OP| = ")}{vectorText(length.toFixed(3))}{vectorText("。")}</p><p>{vectorText("|OP|² = ")}{vectorText(px*px+py*py+pz*pz)}{vectorText("，坐标改变的是空间位移。")}</p></div></section>;
}
