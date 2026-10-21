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
    id: "g2-derivative-operations-01",
    topic: "导数的运算",
    title: "多项式求导",
    question: "若 f(x)=x³−2x+1，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "3x²−2"
    },
    {
      key: "B",
      text: "3x²+1"
    },
    {
      key: "C",
      text: "x²−2"
    },
    {
      key: "D",
      text: "3x−2"
    }
  ],
    correctAnswer: "A",
    explanation: "逐项求导：x³ 的导数为 3x²，−2x 的导数为 −2，常数 1 的导数为 0。"
  },
  {
    id: "g2-derivative-operations-02",
    topic: "导数的运算",
    title: "乘积法则",
    question: "f(x)=xeˣ，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "eˣ"
    },
    {
      key: "B",
      text: "(x+1)eˣ"
    },
    {
      key: "C",
      text: "xeˣ"
    },
    {
      key: "D",
      text: "(x−1)eˣ"
    }
  ],
    correctAnswer: "B",
    explanation: "(xeˣ)′=1×eˣ+x×eˣ=(x+1)eˣ。"
  },
  {
    id: "g2-derivative-operations-03",
    topic: "导数的运算",
    title: "链式法则",
    question: "f(x)=(2x+1)³，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "3(2x+1)²"
    },
    {
      key: "B",
      text: "6(2x+1)"
    },
    {
      key: "C",
      text: "6(2x+1)²"
    },
    {
      key: "D",
      text: "(2x+1)²"
    }
  ],
    correctAnswer: "C",
    explanation: "先对外层三次方求导，再乘内层导数 2，结果为 3(2x+1)²×2。"
  }
];

const lessonSections = [
  {
    number: "5.1",
    title: "导数的概念",
    href: "/grade2/derivatives/concept"
  },
  {
    number: "5.2",
    title: "导数的运算",
    href: "/grade2/derivatives/operations"
  },
  {
    number: "5.3",
    title: "导数在研究函数中的应用",
    href: "/grade2/derivatives/applications"
  }
];

export default function DerivativeOperationsPage() {
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
          <Link href="/grade2/derivatives" className="hover:text-blue-600">导数及其应用</Link><span>/</span>
          <span className="text-slate-600">导数的运算</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 05</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 5.2</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">导数的运算</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">掌握基本初等函数求导公式与四则运算法则，学习简单复合函数的求导。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E7%9A%84%E8%BF%90%E7%AE%97" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"正确使用幂、指数、对数与三角函数的求导公式"}</li>
                <li>{"掌握和差、常数倍、乘积与商的求导法则"}</li>
                <li>{"按由外到内的顺序对简单复合函数求导"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"导数的定义、指数对数函数与三角函数。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 常数与幂函数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"常数函数的图象是水平直线，导数为 0。正整数幂函数可用公式求导，推广到实数幂时应在原函数定义域内且可导的点使用，不能忽略零点的特殊情况。"}</p>
                  <Formula math={String.raw`C'=0,\qquad (x^n)'=nx^{n-1}\quad(n\in\mathbb N^*)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{mathText("例如 (1/x)′=−1/x² 只适用于 x≠0；(√x)′=1/(2√x) 适用于 x>0。")}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 指数与对数函数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"自然指数函数的导数仍是自身，自然对数函数的导数是 1/x。一般底数公式中，指数与对数都会涉及 ln a；底数必须为正且不等于 1。"}</p>
                  <Formula math={String.raw`(e^x)'=e^x,\quad(\ln x)'=\frac1x\ (x>0),\quad(a^x)'=a^x\ln a,\quad(\log_a x)'=\frac1{x\ln a}\ (x>0;\ a>0,a\ne1)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 三角函数与角度单位"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"正弦的导数是余弦，余弦的导数是负正弦。这里的自变量使用弧度制，不能将角度数值直接代入求导公式。"}</p>
                  <Formula math={String.raw`(\sin x)'=\cos x,\qquad (\cos x)'=-\sin x`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 和差与常数倍"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"当两个函数在所讨论的点可导时，和差可以分别求导再相加减，常数因子可以提出。多项式一般逐项求导即可。"}</p>
                  <Formula math={String.raw`(u\pm v)'=u'\pm v',\qquad(Cu)'=Cu'`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 乘积与商"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"两个函数的乘积求导时，每次只对一个因子求导；商的分子按“上导下不导，减去上不导下导”排列，分母为原分母的平方。"}</p>
                  <Formula math={String.raw`(uv)'=u'v+uv',\qquad\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\quad(v\ne0)`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"(uv)′ 一般不等于 u′v′。商的法则必须确保原分母不为零。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 简单复合函数：链式法则"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"若 y=f(u)，u=g(x)，且相应函数在所讨论位置可导，则先对外层函数求导，保留内层表达式，再乘以内层对 x 的导数。"}</p>
                  <Formula math={String.raw`\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx},\qquad [(2x+1)^3]'=6(2x+1)^2`} />
                </article>
              </div>
            </section>
            <DerivativeFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"逐项求导"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 f(x)=3x⁴−2x²+5x−7 的导函数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"幂函数分别求导：(x⁴)′=4x³，(x²)′=2x。"}</li>
                      <li>{"常数倍保留，常数项 −7 的导数为 0。"}</li>
                      <li>{"合并得到 f′(x)=12x³−4x+5。"}</li>
                    </ol>
                    <Formula math={String.raw`f'(x)=12x^3-4x+5`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"使用乘积法则"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"求 f(x)=(x²+1)eˣ 的导函数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"令 u=x²+1，v=eˣ，则 u′=2x、v′=eˣ。"}</li>
                      <li>{"f′(x)=2xeˣ+(x²+1)eˣ。"}</li>
                      <li>{"提取 eˣ，得到 eˣ(x²+2x+1)=eˣ(x+1)²。"}</li>
                    </ol>
                    <Formula math={String.raw`f'(x)=e^x(x+1)^2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"商与复合函数"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"分别求 g(x)=(x+1)/(x−1) 和 h(x)=ln(2x+1) 的导数。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"g 的定义域要求 x≠1，用商法则得到 [(x−1)−(x+1)]/(x−1)²。"}</li>
                      <li>{"h 的定义域要求 x>−1/2，外层 ln u 的导数为 1/u，内层 2x+1 的导数为 2。"}</li>
                      <li>{"得到 g′=−2/(x−1)²，h′=2/(2x+1)，都要保留定义域。"}</li>
                    </ol>
                    <Formula math={String.raw`g'(x)=-\frac2{(x-1)^2}\ (x\ne1),\qquad h'(x)=\frac2{2x+1}\ (x>-\tfrac12)`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"常数的导数为零；常数倍系数不能丢。"}</li>
              <li>{"乘积的导数不是导数的乘积，商法则注意分子相减顺序。"}</li>
              <li>{"复合函数别漏乘内层导数，求导前后都要检查定义域。"}</li></ul></section>
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
              <li>{"先识别函数结构，再选择基本公式与运算法则。"}</li>
              <li>{"乘积、商与复合函数各有相应法则。"}</li>
              <li>{"三角函数使用弧度制，对数和分式需注意定义域。"}</li></ul><Link href="/practice?topic=%E5%AF%BC%E6%95%B0%E7%9A%84%E8%BF%90%E7%AE%97" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“导数的运算”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/derivatives/concept" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：导数的概念</Link>
              <Link href="/grade2/derivatives/applications" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一节：导数在研究函数中的应用 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第五章 · 导数及其应用</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "5.2" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "5.2" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "5.2" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互图形：只对 SVG 输出取固定精度，计算保持原精度。 */
function DerivativeFigure() {
 const [kind,setKind]=useState('square');
 const [position,setPosition]=useState(1);
 const f=(x:number)=>kind==='square'?x*x:kind==='cube'?x*x*x:Math.sin(x);
 const derivative=(x:number)=>kind==='square'?2*x:kind==='cube'?3*x*x:Math.cos(x);
 const sx=(x:number)=>Number((260+70*x).toFixed(3));
 const sy=(y:number)=>Number((180-22*y).toFixed(3));
 const curve=(fn:(x:number)=>number)=>Array.from({length:161},(_,i)=>{const x=-3+i*6/160;return `${sx(x)},${sy(fn(x))}`;}).join(' ');
 const tangent=(x:number)=>f(position)+derivative(position)*(x-position);
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE DERIVATIVE</p><h2 className="mt-2 text-xl font-bold">动手观察：原函数与导函数</h2><p className="mt-3 text-sm leading-7 text-slate-600">蓝色是原函数，绿色虚线是导函数，橙色是当前位置的切线。三角函数采用弧度制。</p>
 <label className="mt-5 block text-sm font-medium">选择函数<select aria-label="选择函数" value={kind} onChange={e=>setKind(e.target.value)} className="ml-3 rounded-lg border border-slate-200 bg-white p-2"><option value="square">f(x)=x²</option><option value="cube">f(x)=x³</option><option value="sine">f(x)=sin x</option></select></label>
 <svg viewBox="0 0 520 360" role="img" aria-label="函数曲线与导数交互图" className="mt-5 w-full overflow-hidden rounded-xl bg-slate-50">{[-2,-1,0,1,2].map(i=><g key={i}><line x1={sx(i)} x2={sx(i)} y1="15" y2="345" stroke="#e2e8f0"/><text x={sx(i)} y="198" textAnchor="middle" fontSize="10" fill="#64748b">{i}</text></g>)}<path d="M20 180H500 M260 345V15" stroke="#94a3b8"/><text x="500" y="173" fontSize="12">x</text><text x="270" y="22" fontSize="12">y</text><polyline points={curve(f)} fill="none" stroke="#2563eb" strokeWidth="2.5"/>
 <polyline points={curve(derivative)} fill="none" stroke="#059669" strokeWidth="2" strokeDasharray="6 4"/>
 <line x1={sx(-3)} y1={sy(tangent(-3))} x2={sx(3)} y2={sy(tangent(3))} stroke="#d97706" strokeWidth="1.5"/><circle cx={sx(position)} cy={sy(f(position))} r="4" fill="#2563eb"/><text x={sx(position)+6} y={sy(f(position))-8} fontSize="11" fill="#1d4ed8">P</text></svg>
 <label className="mt-5 block text-sm font-medium">切点横坐标 x₀：{position}<input aria-label="切点横坐标 x₀" type="range" min="-2" max="2" step="0.25" value={position} onChange={e=>setPosition(Number(e.target.value))} className="mt-3 w-full accent-blue-600"/></label>

 <div aria-live="polite" className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800"><p>f({position}) = {Number(f(position).toFixed(3))}；f′({position}) = {Number(derivative(position).toFixed(3))}。</p><p>切线的斜率等于绿色导函数在同一横坐标处的函数值。</p></div></section>;
}
