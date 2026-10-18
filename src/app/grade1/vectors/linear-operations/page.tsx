
"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuickQuestion = {
  id: number;
  question: string;
  formula?: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: QuickQuestion[] = [
  {
    id: 1,
    question: "根据向量加法的三角形法则，下式等于哪个向量？",
    formula: String.raw`\overrightarrow{AB}+\overrightarrow{BC}`,
    options: [
      { key: "A", text: "向量 BA" },
      { key: "B", text: "向量 AC" },
      { key: "C", text: "向量 CB" },
      { key: "D", text: "向量 CA" },
    ],
    answer: "B",
    explanation:
      "首尾相接时，向量 AB 加上向量 BC，结果是从起点 A 指向终点 C 的向量 AC。",
  },
  {
    id: 2,
    question: "根据向量减法法则，下式等于哪个向量？",
    formula: String.raw`\overrightarrow{AB}-\overrightarrow{AC}`,
    options: [
      { key: "A", text: "向量 AB" },
      { key: "B", text: "向量 BC" },
      { key: "C", text: "向量 CB" },
      { key: "D", text: "向量 CA" },
    ],
    answer: "C",
    explanation:
      "同起点向量相减，结果是从被减向量 AC 的终点 C 指向另一向量 AB 的终点 B，即向量 CB。",
  },
  {
    id: 3,
    question:
      "设 a 是非零向量，向量 -2a 与向量 a 的关系是：",
    options: [
      { key: "A", text: "方向相同，长度为原来的 2 倍" },
      { key: "B", text: "方向相同，长度为原来的一半" },
      { key: "C", text: "方向相反，长度为原来的一半" },
      { key: "D", text: "方向相反，长度为原来的 2 倍" },
    ],
    answer: "D",
    explanation:
      "数乘系数 -2 是负数，因此方向相反；其绝对值为 2，因此模长变为原来的 2 倍。",
  },
];

export default function VectorLinearOperationsPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, answer: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  }

  function submitAnswer(id: number) {
    if (!answers[id]) return;

    setSubmitted((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  function resetQuestion(id: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  const completedCount = questions.filter(
    (question) => submitted[question.id]
  ).length;

  const correctCount = questions.filter(
    (question) =>
      submitted[question.id] &&
      answers[question.id] === question.answer
  ).length;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-700">
            首页
          </Link>
          <span>/</span>

          <Link href="/grade1" className="hover:text-slate-700">
            高一数学
          </Link>
          <span>/</span>

          <Link
            href="/grade1/vectors"
            className="hover:text-slate-700"
          >
            平面向量
          </Link>
          <span>/</span>

          <span className="text-slate-600">平面向量的线性运算</span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 06 章 · 第 02 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心知识点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              平面向量的线性运算
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              在理解向量大小和方向的基础上，
              进一步学习向量加法、减法与数乘运算。
              通过几何图形理解运算规律，
              并掌握向量共线的基本条件。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#addition"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                即时检测
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_240px]">
          {/* 正文 */}
          <div className="min-w-0 space-y-10">

            {/* 01 向量加法 */}
            <section id="addition" className="scroll-mt-28">
              <SectionTitle
                number="01"
                title="平面向量的加法"
                subtitle="向量首尾相接，连接起点与终点"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                向量可以像数量一样进行加法运算，
                但是必须考虑方向。
                两个向量的和仍然是向量。
              </p>

              <h3 className="mt-6 text-base font-semibold text-slate-900">
                三角形法则
              </h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                将第二个向量的起点移动到第一个向量的终点，
                连接第一个向量的起点和第二个向量的终点，
                得到的向量就是这两个向量的和。
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}`}
              />

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <TriangleDiagram />
                <p className="mt-3 text-center text-xs text-slate-400">
                  向量加法的三角形法则
                </p>
              </div>

              <Note>
                三角形法则最重要的是“首尾相接”。
                计算时可以先寻找终点与起点相同的两个向量。
              </Note>

              <h3 className="mt-9 text-base font-semibold text-slate-900">
                平行四边形法则
              </h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                将两个非共线向量放在同一个起点，
                以它们作为平行四边形的邻边。
                从共同起点出发的对角线向量，
                就是这两个向量的和。
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{OA}+\overrightarrow{OB}=\overrightarrow{OC}`}
              />

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <ParallelogramDiagram />
                <p className="mt-3 text-center text-xs text-slate-400">
                  向量加法的平行四边形法则
                </p>
              </div>

              <Note>
                三角形法则与平行四边形法则得到的结果相同。
                处理首尾相接的向量常用三角形法则；
                处理同起点的两个非共线向量常用平行四边形法则。
              </Note>
            </section>

            {/* 02 向量减法 */}
            <section
              id="subtraction"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="02"
                title="平面向量的减法"
                subtitle="减去一个向量，就是加上它的相反向量"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                向量减法可以转化为向量加法。
                两个向量相减，相当于第一个向量加上第二个向量的相反向量。
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}-\overrightarrow{b}=\overrightarrow{a}+(-\overrightarrow{b})`}
              />

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                同起点向量的减法
              </h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                两个向量具有共同起点时，
                第一个向量减去第二个向量，
                结果是从第二个向量的终点，
                指向第一个向量终点的向量。
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}`}
              />

              <Note>
                这里很容易写反。
                向量 AB 减去向量 AC，结果是向量 CB，
                不是向量 BC。
              </Note>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                向量减法的基本性质
              </h3>

              <div className="mt-5 space-y-4">
                <RuleCard
                  title="一个向量减去自身"
                  formula={String.raw`\overrightarrow{a}-\overrightarrow{a}=\overrightarrow{0}`}
                  explanation="任何向量减去自身，结果都是零向量。"
                />

                <RuleCard
                  title="加上相反向量"
                  formula={String.raw`\overrightarrow{a}+(-\overrightarrow{a})=\overrightarrow{0}`}
                  explanation="互为相反向量的两个向量之和是零向量。"
                />
              </div>
            </section>

            {/* 03 数乘向量 */}
            <section
              id="scalar"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="03"
                title="向量的数乘运算"
                subtitle="一个实数与一个向量相乘"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                实数与向量相乘的运算叫作向量的数乘。
                数乘结果仍然是一个向量，
                它的模与方向由数乘系数决定。
              </p>

              <FormulaBox
                math={String.raw`|\lambda\overrightarrow{a}|=|\lambda|\cdot|\overrightarrow{a}|`}
              />

              <div className="mt-6 space-y-3">
                <InfoCard
                  title="系数大于 0"
                  description="对于非零向量，结果与原向量方向相同；模长变为原来的系数倍。"
                  accent="blue"
                />

                <InfoCard
                  title="系数小于 0"
                  description="对于非零向量，结果与原向量方向相反；模长变为原来系数绝对值的倍数。"
                  accent="green"
                />

                <InfoCard
                  title="系数等于 0"
                  description="无论原向量是什么，结果都是零向量。"
                  accent="slate"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <ScalarDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  向量数乘对模长与方向的影响
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RuleCard
                  title="正数倍"
                  formula={String.raw`2\overrightarrow{a}`}
                  explanation="方向相同，长度变成 2 倍。"
                />

                <RuleCard
                  title="负数倍"
                  formula={String.raw`-2\overrightarrow{a}`}
                  explanation="方向相反，长度变成 2 倍。"
                />
              </div>

              <Note>
                先看系数的正负判断方向，
                再看绝对值判断模长。
                如果原向量是零向量，
                数乘结果仍为零向量。
              </Note>
            </section>

            {/* 04 运算规律 */}
            <section
              id="laws"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="04"
                title="向量线性运算的规律"
                subtitle="掌握交换律、结合律与分配律"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                向量的加法和数乘满足一些与实数运算类似的规律。
                利用这些规律，可以对向量表达式进行化简。
              </p>

              <div className="mt-6 space-y-4">
                <RuleCard
                  title="向量加法交换律"
                  formula={String.raw`\overrightarrow{a}+\overrightarrow{b}=\overrightarrow{b}+\overrightarrow{a}`}
                  explanation="交换两个向量的加法顺序，和不变。"
                />

                <RuleCard
                  title="向量加法结合律"
                  formula={String.raw`(\overrightarrow{a}+\overrightarrow{b})+\overrightarrow{c}=\overrightarrow{a}+(\overrightarrow{b}+\overrightarrow{c})`}
                  explanation="三个向量相加，可以改变分组方式。"
                />

                <RuleCard
                  title="数乘对向量加法的分配律"
                  formula={String.raw`\lambda(\overrightarrow{a}+\overrightarrow{b})=\lambda\overrightarrow{a}+\lambda\overrightarrow{b}`}
                  explanation="一个实数乘以两个向量的和，可以分别相乘后再相加。"
                />

                <RuleCard
                  title="数乘对实数加法的分配律"
                  formula={String.raw`(\lambda+\mu)\overrightarrow{a}=\lambda\overrightarrow{a}+\mu\overrightarrow{a}`}
                  explanation="两个实数的和乘同一个向量，可以展开计算。"
                />

                <RuleCard
                  title="数乘结合律"
                  formula={String.raw`\lambda(\mu\overrightarrow{a})=(\lambda\mu)\overrightarrow{a}`}
                  explanation="先数乘一次再数乘一次，等于两个系数相乘后再与向量相乘。"
                />
              </div>
            </section>

            {/* 05 共线 */}
            <section
              id="collinear"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="05"
                title="向量共线的条件"
                subtitle="向量的平行关系与数乘之间的联系"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                两个非零向量方向相同或相反时，
                它们是平行向量，也叫作共线向量。
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                设向量 b 是非零向量，
                则向量 a 与向量 b 共线，
                当且仅当存在唯一的实数 λ，使得：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=\lambda\overrightarrow{b}`}
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="λ 为正数"
                  description="若两个向量均非零，则方向相同。"
                  accent="blue"
                />

                <InfoCard
                  title="λ 为负数"
                  description="若两个向量均非零，则方向相反。"
                  accent="green"
                />
              </div>

              <Note>
                这里要求向量 b 是非零向量。
                按高中数学通常约定，零向量与任意向量共线。
                当 λ 等于 0 时，向量 a 就是零向量。
              </Note>
            </section>

            {/* 06 例题 */}
            <section
              id="examples"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="06"
                title="典型例题"
                subtitle="从几何关系到代数化简"
              />

              <div className="mt-6 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="向量首尾相接"
                  formula={String.raw`\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}`}
                  answer="第一步把向量 AB 与 BC 相加，得到 AC；第二步把 AC 与 CD 相加，最终得到向量 AD。"
                  result={String.raw`\overrightarrow{AD}`}
                />

                <ExampleCard
                  number="例题 2"
                  title="向量减法"
                  formula={String.raw`\overrightarrow{AB}-\overrightarrow{AC}`}
                  answer="两个向量起点都是 A，向量 AB 减去向量 AC，结果从 C 指向 B。"
                  result={String.raw`\overrightarrow{CB}`}
                />

                <ExampleCard
                  number="例题 3"
                  title="向量数乘化简"
                  formula={String.raw`3\overrightarrow{a}-2\overrightarrow{a}+\overrightarrow{a}`}
                  answer="根据向量数乘的分配律，合并同类向量，系数为 3 - 2 + 1 = 2。"
                  result={String.raw`2\overrightarrow{a}`}
                />

                <ExampleCard
                  number="例题 4"
                  title="判断向量是否共线"
                  formula={String.raw`\overrightarrow{a}=3\overrightarrow{b}`}
                  answer="若 b 为非零向量，则 a 与 b 共线；因为数乘系数 3 为正数，所以方向相同，且 a 的模是 b 的 3 倍。"
                  result={String.raw`\overrightarrow{a}\parallel\overrightarrow{b}`}
                />
              </div>
            </section>

            {/* 07 易错点 */}
            <section
              id="mistakes"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="07"
                title="常见易错点"
                subtitle="注意向量方向和运算顺序"
              />

              <div className="mt-6 space-y-3">
                <MistakeTip
                  title="把向量加法当作长度相加"
                  description="向量相加需要同时考虑方向，两个向量和的模不一定等于两个向量模的和。"
                />

                <MistakeTip
                  title="向量减法的方向写反"
                  description="向量 AB 减去向量 AC，结果是向量 CB，而不是向量 BC。"
                />

                <MistakeTip
                  title="忽略数乘系数的符号"
                  description="对非零向量，负数倍不仅改变长度，还会改变方向。"
                />

                <MistakeTip
                  title="共线向量不一定相等"
                  description="共线只表示方向相同或相反；相等向量还要求方向相同且模相等。"
                />
              </div>
            </section>

            {/* 08 即时检测 */}
            <section
              id="quiz"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="08"
                title="即时检测"
                subtitle="完成 3 道题，巩固向量线性运算"
              />

              <div className="mt-6 space-y-5">
                {questions.map((question) => {
                  const selected = answers[question.id];
                  const isSubmitted = Boolean(
                    submitted[question.id]
                  );
                  const correct =
                    selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                    >
                      <p className="text-xs font-medium text-blue-600">
                        第 {question.id} 题 / 共 3 题
                      </p>

                      <h3 className="mt-4 text-base font-semibold leading-8 text-slate-900">
                        {question.question}
                      </h3>

                      {question.formula && (
                        <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4">
                          <BlockMath math={question.formula} />
                        </div>
                      )}

                      <div className="mt-5 grid gap-3">
                        {question.options.map((option) => {
                          const chosen =
                            selected === option.key;
                          const showCorrect =
                            isSubmitted &&
                            option.key === question.answer;
                          const showWrong =
                            isSubmitted &&
                            chosen &&
                            option.key !== question.answer;

                          return (
                            <button
                              key={option.key}
                              type="button"
                              disabled={isSubmitted}
                              onClick={() =>
                                chooseAnswer(
                                  question.id,
                                  option.key
                                )
                              }
                              className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-6 transition ${
                                showCorrect
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                  : showWrong
                                    ? "border-red-300 bg-red-50 text-red-600"
                                    : chosen
                                      ? "border-blue-400 bg-blue-50 text-blue-800"
                                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-current text-xs font-semibold">
                                {option.key}
                              </span>
                              <span className="pt-0.5">
                                {option.text}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {!isSubmitted ? (
                        <button
                          type="button"
                          disabled={!selected}
                          onClick={() =>
                            submitAnswer(question.id)
                          }
                          className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          提交答案
                        </button>
                      ) : (
                        <div
                          className={`mt-5 rounded-xl p-4 ${
                            correct
                              ? "bg-emerald-50"
                              : "bg-red-50"
                          }`}
                        >
                          <p
                            className={`text-sm font-semibold ${
                              correct
                                ? "text-emerald-700"
                                : "text-red-600"
                            }`}
                          >
                            {correct
                              ? "回答正确"
                              : `回答错误，正确答案：${question.answer}`}
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {question.explanation}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              resetQuestion(question.id)
                            }
                            className="mt-3 text-sm font-medium text-slate-600 hover:text-slate-900"
                          >
                            重新作答 →
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {completedCount === questions.length && (
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    本节检测已完成
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {correctCount} / {questions.length} 题正确
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {correctCount === questions.length
                      ? "三个问题全部答对，可以继续学习平面向量的坐标表示。"
                      : "建议重新理解向量加法、减法的方向和数乘运算规律。"}
                  </p>
                </div>
              )}
            </section>

            {/* 底部 */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link
                href="/grade1/vectors/concept"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                ← 上一节：向量的概念
              </Link>

              <span className="text-sm text-slate-400">
                下一节：平面向量基本定理与坐标表示
              </span>
            </div>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-400">
                本节学习目录
              </p>

              <nav className="mt-5 space-y-3 text-sm">
                {[
                  ["addition", "01 向量加法"],
                  ["subtraction", "02 向量减法"],
                  ["scalar", "03 向量数乘"],
                  ["laws", "04 运算规律"],
                  ["collinear", "05 共线条件"],
                  ["examples", "06 典型例题"],
                  ["mistakes", "07 常见易错点"],
                  ["quiz", "08 即时检测"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-slate-500 transition hover:text-blue-600"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-400">
                  本节核心知识
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "三角形法则",
                    "平行四边形法则",
                    "向量减法",
                    "向量数乘",
                    "共线条件",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* 通用组件 */

function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-blue-600">
          {number}
        </span>
        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>
      </div>
      <p className="mt-2 pl-7 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

function FormulaBox({ math }: { math: string }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50 px-4 py-5">
      <BlockMath math={math} />
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/40 px-5 py-4">
      <p className="text-xs font-semibold text-blue-600">
        理解提示
      </p>
      <div className="mt-2 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

function RuleCard({
  title,
  formula,
  explanation,
}: {
  title: string;
  formula: string;
  explanation: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {title}
      </h3>
      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-500">
        {explanation}
      </p>
    </div>
  );
}

function InfoCard({
  title,
  description,
  accent,
}: {
  title: string;
  description: string;
  accent: "blue" | "green" | "slate";
}) {
  const textColor =
    accent === "blue"
      ? "text-blue-600"
      : accent === "green"
        ? "text-emerald-600"
        : "text-slate-500";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className={`text-sm font-semibold ${textColor}`}>
        {title}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  formula,
  answer,
  result,
}: {
  number: string;
  title: string;
  formula: string;
  answer: string;
  result: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {number}
      </p>

      <h3 className="mt-3 font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4">
        <BlockMath math={formula} />
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-700">
        分析与解答
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {answer}
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-emerald-100 bg-emerald-50/40 p-3">
        <BlockMath math={result} />
      </div>
    </div>
  );
}

function MistakeTip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* 三角形法则示意图 */

function TriangleDiagram() {
  return (
    <svg
      viewBox="0 0 520 255"
      className="h-auto w-full"
      role="img"
      aria-label="向量加法三角形法则示意图"
    >
      <defs>
        <marker
          id="tri-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>
        <marker
          id="tri-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>
        <marker
          id="tri-purple"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#7c3aed" />
        </marker>
      </defs>

      <line
        x1="75"
        y1="195"
        x2="270"
        y2="195"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#tri-blue)"
      />

      <line
        x1="270"
        y1="195"
        x2="405"
        y2="55"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#tri-green)"
      />

      <line
        x1="75"
        y1="195"
        x2="405"
        y2="55"
        stroke="#7c3aed"
        strokeWidth="3"
        markerEnd="url(#tri-purple)"
      />

      <circle cx="75" cy="195" r="4" fill="#334155" />
      <circle cx="270" cy="195" r="4" fill="#334155" />
      <circle cx="405" cy="55" r="4" fill="#334155" />

      <text x="54" y="213" fontSize="17" fill="#334155">A</text>
      <text x="265" y="221" fontSize="17" fill="#334155">B</text>
      <text x="412" y="48" fontSize="17" fill="#334155">C</text>

      <text x="150" y="217" fontSize="15" fill="#2563eb">AB</text>
      <text x="352" y="150" fontSize="15" fill="#059669">BC</text>
      <text x="186" y="95" fontSize="15" fill="#7c3aed">AC</text>
    </svg>
  );
}

/* 平行四边形法则示意图 */

function ParallelogramDiagram() {
  return (
    <svg
      viewBox="0 0 520 270"
      className="h-auto w-full"
      role="img"
      aria-label="向量加法平行四边形法则示意图"
    >
      <defs>
        <marker
          id="para-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>
        <marker
          id="para-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>
        <marker
          id="para-purple"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#7c3aed" />
        </marker>
      </defs>

      <line
        x1="95"
        y1="210"
        x2="275"
        y2="210"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#para-blue)"
      />

      <line
        x1="95"
        y1="210"
        x2="180"
        y2="70"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#para-green)"
      />

      <line
        x1="180"
        y1="70"
        x2="360"
        y2="70"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      <line
        x1="275"
        y1="210"
        x2="360"
        y2="70"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      <line
        x1="95"
        y1="210"
        x2="360"
        y2="70"
        stroke="#7c3aed"
        strokeWidth="4"
        markerEnd="url(#para-purple)"
      />

      {[
        [95, 210],
        [275, 210],
        [180, 70],
        [360, 70],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="#334155"
        />
      ))}

      <text x="75" y="232" fontSize="17" fill="#334155">O</text>
      <text x="279" y="233" fontSize="17" fill="#334155">A</text>
      <text x="165" y="58" fontSize="17" fill="#334155">B</text>
      <text x="370" y="58" fontSize="17" fill="#334155">C</text>

      <text x="166" y="234" fontSize="15" fill="#2563eb">OA</text>
      <text x="112" y="124" fontSize="15" fill="#059669">OB</text>
      <text x="247" y="118" fontSize="15" fill="#7c3aed">OC</text>
    </svg>
  );
}

/* 向量数乘示意图 */

function ScalarDiagram() {
  return (
    <svg
      viewBox="0 0 520 245"
      className="h-auto w-full"
      role="img"
      aria-label="向量a、2a和负a的方向与长度示意图"
    >
      <defs>
        <marker
          id="scalar-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>
        <marker
          id="scalar-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>
        <marker
          id="scalar-red"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#dc2626" />
        </marker>
      </defs>

      <line
        x1="90"
        y1="55"
        x2="205"
        y2="55"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#scalar-blue)"
      />

      <line
        x1="90"
        y1="120"
        x2="320"
        y2="120"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#scalar-green)"
      />

      <line
        x1="205"
        y1="185"
        x2="90"
        y2="185"
        stroke="#dc2626"
        strokeWidth="4"
        markerEnd="url(#scalar-red)"
      />

      <text x="140" y="37" fontSize="17" fill="#2563eb">a</text>
      <text x="195" y="101" fontSize="17" fill="#059669">2a</text>
      <text x="142" y="169" fontSize="17" fill="#dc2626">-a</text>

      <text x="352" y="60" fontSize="14" fill="#64748b">
        原向量
      </text>
      <text x="352" y="125" fontSize="14" fill="#64748b">
        同方向，2倍
      </text>
      <text x="352" y="190" fontSize="14" fill="#64748b">
        反方向
      </text>
    </svg>
  );
}
