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
    id: "g2-induction-01",
    topic: "数学归纳法",
    title: "确定归纳起点",
    question: "用归纳法证明命题对所有整数 n≥4 成立，通常首先验证：",
    options: [
    {
      key: "A",
      text: "n=1"
    },
    {
      key: "B",
      text: "n=4"
    },
    {
      key: "C",
      text: "n=k"
    },
    {
      key: "D",
      text: "n=k+1"
    }
  ],
    correctAnswer: "B",
    explanation: "命题的最小允许整数为 4，应先验证 P(4)。"
  },
  {
    id: "g2-induction-02",
    topic: "数学归纳法",
    title: "找出新增项",
    question: "证明 1+3+…+(2n−1)=n² 时，从 n=k 到 n=k+1 左边需增加：",
    options: [
    {
      key: "A",
      text: "2k−1"
    },
    {
      key: "B",
      text: "2k"
    },
    {
      key: "C",
      text: "2k+1"
    },
    {
      key: "D",
      text: "k+1"
    }
  ],
    correctAnswer: "C",
    explanation: "第 k+1 个奇数为 2(k+1)−1=2k+1。"
  },
  {
    id: "g2-induction-03",
    topic: "数学归纳法",
    title: "理解递推证明",
    question: "完成起点验证后，归纳递推步骤需要证明：",
    options: [
    {
      key: "A",
      text: "P(k+1) 成立即可，无需推导"
    },
    {
      key: "B",
      text: "只要 P(2) 成立即可"
    },
    {
      key: "C",
      text: "P(k+1) 推出 P(k)"
    },
    {
      key: "D",
      text: "对任意 k≥n₀，由 P(k) 推出 P(k+1)"
    }
  ],
    correctAnswer: "D",
    explanation: "归纳递推必须对任意允许的 k 建立 P(k)⇒P(k+1)，再与起点结合覆盖所有下标。"
  }
];

const lessonSections = [
  {
    number: "4.1",
    title: "数列",
    href: "/grade2/sequences/concept"
  },
  {
    number: "4.2",
    title: "等差数列",
    href: "/grade2/sequences/arithmetic"
  },
  {
    number: "4.3",
    title: "等比数列",
    href: "/grade2/sequences/geometric"
  },
  {
    number: "4.4",
    title: "数学归纳法",
    href: "/grade2/sequences/induction"
  }
];

export default function InductionPage() {
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
          <Link href="/grade2/sequences" className="hover:text-blue-600">数列</Link><span>/</span>
          <span className="text-slate-600">数学归纳法</span>
        </nav>
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 04</span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">LESSON 4.4</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">数学归纳法</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">通过起点验证与递推证明两个步骤，理解数学归纳法如何证明无穷多个命题。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#knowledge" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">开始学习</a>
            <Link href="/practice?topic=%E6%95%B0%E5%AD%A6%E5%BD%92%E7%BA%B3%E6%B3%95" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-blue-300">本节专题训练 →</Link>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-xl font-bold">学习目标</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>{"明确归纳起点与适用的正整数范围"}</li>
                <li>{"正确写出归纳假设并推出下一步"}</li>
                <li>{"避免把有限次验证或循环论证当作证明"}</li>
              </ol>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">预备知识：{"数列、代数恒等变形与不等式。拓展选学内容。"}</p>
            </section>
            <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">CORE KNOWLEDGE</p>
              <h2 className="mt-2 text-xl font-bold">知识讲解</h2>
              <div className="mt-6 space-y-7">
                <article>
                  <h3 className="font-semibold leading-7">{"1. 适用范围"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"数学归纳法用于证明与自然数或正整数有关、并从某个起点开始的命题。它通过一个起点和一个能够无限传递的推理覆盖所有允许的下标。"}</p>
                  <Formula math={String.raw`P(n),\qquad n\ge n_0,\ n\in\mathbb Z`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"2. 第一步：验证起点"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"先把最小允许值 n₀ 代入命题，证明 P(n₀) 成立。起点不一定是 1，例如命题从 n≥4 才成立时，就应验证 n=4。"}</p>
                  <Formula math={String.raw`P(n_0)\text{ 成立}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"3. 第二步：归纳递推"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"假设对某个任意的整数 k≥n₀，P(k) 成立，在这个假设下推导出 P(k+1)。k 不能固定为某个具体的整数。"}</p>
                  <Formula math={String.raw`P(k)\Longrightarrow P(k+1)\quad(k\ge n_0)`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"4. 归纳假设如何使用"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"求和命题中，第 k+1 项部分和等于第 k 项部分和加上新的一项。用归纳假设代换已有部分，再整理到目标形式。"}</p>
                  <Formula math={String.raw`S_{k+1}=S_k+a_{k+1}`} />
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"5. 不等式中的方向"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"证明不等式时，不仅要写出归纳假设，还要找到从第 k 步通向第 k+1 步所需的比较关系。乘除一个量时要判断其符号。"}</p>
                  <Formula math={String.raw`2^{k+1}=2\cdot2^k`} />
                  <p className="mt-3 rounded-xl border-l-2 border-blue-300 bg-blue-50/60 p-4 text-sm leading-7 text-slate-600">{"有限次验证只能帮助发现规律。递推步骤和起点步骤缺一不可。"}</p>
                </article>

                <article>
                  <h3 className="font-semibold leading-7">{"6. 写出结论与边界"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600">{"起点成立且每一步都能传到下一步，才能得出原命题对所有 n≥n₀ 的整数成立。如果递推只连接同奇偶下标，则还需要覆盖相应的多个起点。"}</p>
                  <Formula math={String.raw`P(n_0),\quad\forall k\ge n_0:\ P(k)\Rightarrow P(k+1)\quad\Longrightarrow\quad\forall n\ge n_0:\ P(n)`} />
                </article>
              </div>
            </section>
            <SequenceFigure />
            <section id="examples" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">WORKED EXAMPLES</p>
              <h2 className="mt-2 text-xl font-bold">典型例题</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">先独立思考，再展开解题过程核对方法。</p>
              <div className="mt-6 space-y-5">
                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 1</span>{"证明前 n 个正整数之和"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"用数学归纳法证明 1+2+…+n=n(n+1)/2。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"n=1 时左、右两边均为 1，起点成立。"}</li>
                      <li>{"假设 n=k 时成立，则 Sₖ=k(k+1)/2。"}</li>
                      <li>{"Sₖ₊₁=Sₖ+(k+1)=(k+1)(k+2)/2，正是 n=k+1 的目标。"}</li>
                      <li>{"因此等式对所有正整数 n 成立。"}</li>
                    </ol>
                    <Formula math={String.raw`\frac{k(k+1)}2+(k+1)=\frac{(k+1)(k+2)}2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 2</span>{"证明奇数求和公式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"用数学归纳法证明 1+3+…+(2n−1)=n²。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"n=1 时为 1=1，成立。"}</li>
                      <li>{"假设前 k 个奇数之和为 k²。"}</li>
                      <li>{"第 k+1 个奇数为 2k+1，故 Sₖ₊₁=k²+2k+1=(k+1)²。"}</li>
                      <li>{"归纳完成，结论对所有正整数成立。"}</li>
                    </ol>
                    <Formula math={String.raw`k^2+(2k+1)=(k+1)^2`} />
                  </details>
                </article>

                <article className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <h3 className="font-semibold leading-7"><span className="mr-2 text-blue-600">例 3</span>{"证明指数不等式"}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-700">{"证明对所有整数 n≥4，有 2ⁿ≥n²。"}</p>
                  <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-blue-600">查看解题过程与答案</summary>
                    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                      <li>{"n=4 时，2⁴=16=4²，起点成立。"}</li>
                      <li>{"假设 k≥4 时 2ᵏ≥k²，则 2ᵏ⁺¹≥2k²。"}</li>
                      <li>{"2k²−(k+1)²=k²−2k−1=(k−1)²−2≥7>0，所以 2k²≥(k+1)²。"}</li>
                      <li>{"由此推出下一步，原不等式对所有 n≥4 的整数成立。"}</li>
                    </ol>
                    <Formula math={String.raw`2^{k+1}\ge2k^2\ge(k+1)^2\quad(k\ge4)`} />
                  </details>
                </article>
              </div>
            </section>
            <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7"><h2 className="text-xl font-bold">易错提醒</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>{"起点要与命题范围一致，不一定从 1 开始。"}</li>
              <li>{"归纳假设是 P(k)，不能直接假设要证明的 P(k+1)。"}</li>
              <li>{"检验很多个具体数值仍不能代替归纳递推证明。"}</li></ul></section>
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
              <li>{"数学归纳法包含验证起点与证明递推两步。"}</li>
              <li>{"递推时先明确归纳假设和下一步目标。"}</li>
              <li>{"结论的范围必须与已覆盖的起点和递推链一致。"}</li></ul><Link href="/practice?topic=%E6%95%B0%E5%AD%A6%E5%BD%92%E7%BA%B3%E6%B3%95" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">进入“数学归纳法”专题训练 →</Link></section>
            <nav aria-label="相邻课程" className="flex flex-wrap justify-between gap-3 text-sm">
              <Link href="/grade2/sequences/geometric" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-blue-300">← 上一节：等比数列</Link>
              <Link href="/grade2/derivatives/concept" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100">下一章：导数及其应用 →</Link>
            </nav>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">LEARNING PATH</p>
              <h2 className="mt-2 font-bold">第四章 · 数列</h2>
              <nav aria-label="本章课程" className="mt-5 space-y-3">
                {lessonSections.map((item) => (
                  <Link key={item.number} href={item.href} aria-current={item.number === "4.4" ? "page" : undefined} className={`flex gap-3 rounded-xl p-3 text-sm leading-6 ${item.number === "4.4" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    <span className="font-semibold">{item.number}</span>
                    <span>{item.title}{item.number === "4.4" && <span className="block text-xs text-emerald-600">当前学习</span>}</span>
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

/* 本节交互图形：独立维护在本页。 */
function SequenceFigure() {
 const [n,setN]=useState(4);
 return <section id="explore" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="text-xs font-semibold text-blue-600">EXPLORE THE PATTERN</p><h2 className="mt-2 text-xl font-bold">动手观察：奇数拼成平方</h2><p className="mt-3 text-sm leading-7 text-slate-600">蓝色是前 n−1 个奇数拼成的正方形，橙色是新增的第 n 个奇数。图形帮助理解，完整证明仍需起点与归纳递推。</p><svg viewBox="0 0 360 300" role="img" aria-label={n+' 阶正方形，共 '+n*n+' 个单位方格'} className="mt-5 w-full rounded-xl bg-slate-50">{Array.from({length:n*n},(_,i)=>{const row=Math.floor(i/n),col=i%n;return <rect key={i} x={30+col*27} y={20+row*27} width="25" height="25" rx="3" fill={row===n-1||col===n-1?'#d97706':'#2563eb'} />;})}</svg><label className="mt-5 block text-sm font-medium">正方形边长 n：{n}<input type="range" aria-label="正方形边长 n" min="1" max="10" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full accent-blue-600" /></label><p aria-live="polite" className="mt-4 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-800">原有 {(n-1)*(n-1)} 格，新增 {2*n-1} 格，总计 {n*n} 格。即 ({n}−1)² + (2×{n}−1) = {n}²。</p></section>;
}
