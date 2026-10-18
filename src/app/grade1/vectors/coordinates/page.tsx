
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
    question:
      "已知 e₁、e₂ 是平面内两个不共线的向量，且 a = 2e₁ - 3e₂，则向量 a 在这组基底下的坐标是：",
    options: [
      { key: "A", text: "(2, 3)" },
      { key: "B", text: "(-2, 3)" },
      { key: "C", text: "(2, -3)" },
      { key: "D", text: "(-3, 2)" },
    ],
    answer: "C",
    explanation:
      "向量 a = 2e₁ - 3e₂，两个基向量前面的系数依次是 2 和 -3，因此坐标为 (2, -3)。",
  },
  {
    id: 2,
    question:
      "已知 A(-1, 2)、B(3, 5)，则向量 AB 的坐标是：",
    options: [
      { key: "A", text: "(2, 7)" },
      { key: "B", text: "(4, 3)" },
      { key: "C", text: "(-4, -3)" },
      { key: "D", text: "(3, 4)" },
    ],
    answer: "B",
    explanation:
      "向量 AB = (3-(-1), 5-2) = (4, 3)。记住终点坐标减去起点坐标。",
  },
  {
    id: 3,
    question:
      "已知两个非零向量 a = (2, k)、b = (4, 6) 共线，则 k 的值为：",
    formula: String.raw`2\times6-4k=0`,
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "6" },
    ],
    answer: "B",
    explanation:
      "根据共线条件 x₁y₂ - x₂y₁ = 0，得到 12 - 4k = 0，所以 k = 3。",
  },
];

const sections = [
  ["theorem", "01 平面向量基本定理"],
  ["coordinates", "02 向量的坐标表示"],
  ["operations", "03 向量的坐标运算"],
  ["points", "04 两点确定的向量"],
  ["collinear", "05 向量共线的坐标条件"],
  ["examples", "06 典型例题"],
  ["mistakes", "07 常见易错点"],
  ["quiz", "08 即时检测"],
];

export default function VectorCoordinatesPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, key: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: key,
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

          <Link
            href="/grade1"
            className="hover:text-slate-700"
          >
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

          <span className="text-slate-600">
            平面向量基本定理与坐标表示
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 06 章 · 第 03 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心知识点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              平面向量基本定理与坐标表示
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              通过平面向量基本定理，
              我们可以把任意平面向量表示成两个不共线向量的线性组合。
              建立坐标系后，还可以利用坐标计算向量，
              从而把几何问题转化为代数问题。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#theorem"
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
            {/* 01 基本定理 */}
            <section id="theorem" className="scroll-mt-28">
              <SectionTitle
                number="01"
                title="平面向量基本定理"
                subtitle="两个不共线向量可以表示平面内任意向量"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                如果两个向量不共线，
                那么平面内的任意一个向量，
                都可以由这两个向量通过数乘和加法唯一表示出来。
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                设平面内两个向量
                <strong className="text-slate-900">
                  {" "}e₁、e₂ 不共线
                </strong>
                ，那么对于这个平面内的任意向量 a，
                都存在唯一的一对实数 λ₁、λ₂，使得：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=\lambda_1\overrightarrow{e_1}+\lambda_2\overrightarrow{e_2}`}
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                此时，e₁、e₂ 叫作表示这个平面内所有向量的一组
                <strong className="text-slate-900">
                  {" "}基底
                </strong>
                。
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                <BasisDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  利用两个不共线向量的线性组合表示另一向量
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoCard
                  title="基底的条件"
                  description="两个基向量必须不共线，因此它们都不能是零向量。"
                />

                <InfoCard
                  title="表示的唯一性"
                  description="基底固定后，表示某个向量的两个实数系数是唯一确定的。"
                />
              </div>

              <Note>
                基底不一定是单位向量，
                也不一定互相垂直。
                只要两个向量不共线，
                就可以作为平面内的一组基底。
              </Note>
            </section>

            {/* 02 坐标 */}
            <section
              id="coordinates"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="02"
                title="平面向量的坐标表示"
                subtitle="通过两个实数表示一个平面向量"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                在平面直角坐标系中，
                我们取与 x 轴、y 轴正方向相同的两个单位向量 i、j，
                作为一组基底。
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{i}=(1,0),\qquad\overrightarrow{j}=(0,1)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                对于任意平面向量 a，
                都可以唯一写成：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=x\overrightarrow{i}+y\overrightarrow{j}`}
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                我们把实数对 (x, y) 称为向量 a 的坐标，
                记作：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=(x,y)`}
              />

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  举例
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  如果一个向量沿 x 轴正方向移动 3 个单位，
                  沿 y 轴正方向移动 2 个单位，
                  那么它的坐标是：
                </p>

                <BlockMath
                  math={String.raw`\overrightarrow{a}=3\overrightarrow{i}+2\overrightarrow{j}=(3,2)`}
                />
              </div>

              <Note>
                在一般基底 e₁、e₂ 下，
                坐标是向量在该基底下的两个系数。
                在平面直角坐标系中，
                我们通常使用单位正交基底 i、j，
                从而得到熟悉的 (x, y) 坐标。
              </Note>
            </section>

            {/* 03 坐标运算 */}
            <section
              id="operations"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="03"
                title="平面向量的坐标运算"
                subtitle="加减法对应坐标分别相加减"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                设两个平面向量：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=(x_1,y_1),\quad\overrightarrow{b}=(x_2,y_2)`}
              />

              <div className="mt-6 space-y-4">
                <RuleCard
                  title="向量加法"
                  formula={String.raw`\overrightarrow{a}+\overrightarrow{b}=(x_1+x_2,\ y_1+y_2)`}
                  explanation="对应横坐标相加，纵坐标相加。"
                />

                <RuleCard
                  title="向量减法"
                  formula={String.raw`\overrightarrow{a}-\overrightarrow{b}=(x_1-x_2,\ y_1-y_2)`}
                  explanation="对应横坐标相减，纵坐标相减。注意运算顺序。"
                />

                <RuleCard
                  title="向量数乘"
                  formula={String.raw`\lambda\overrightarrow{a}=(\lambda x_1,\lambda y_1)`}
                  explanation="实数分别与向量的两个坐标相乘。"
                />

                <RuleCard
                  title="零向量的坐标"
                  formula={String.raw`\overrightarrow{0}=(0,0)`}
                  explanation="零向量的两个坐标都是零。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  计算示例
                </p>

                <FormulaBox
                  math={String.raw`\overrightarrow{a}=(2,1),\quad\overrightarrow{b}=(-1,3)`}
                />

                <BlockMath
                  math={String.raw`\overrightarrow{a}+\overrightarrow{b}=(1,4)`}
                />

                <BlockMath
                  math={String.raw`2\overrightarrow{a}-\overrightarrow{b}=(5,-1)`}
                />
              </div>

              <Note>
                坐标运算按分量分别计算。
                求 2a-b 时，要先将 a 的两个分量都乘 2，
                再分别减去 b 的对应分量。
              </Note>
            </section>

            {/* 04 两点确定向量 */}
            <section
              id="points"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="04"
                title="根据两点坐标求向量"
                subtitle="终点坐标减去起点坐标"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                如果已知有向线段的起点和终点坐标，
                可以直接计算它所表示的向量。
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                设 A、B 两点的坐标分别为：
              </p>

              <FormulaBox
                math={String.raw`A(x_1,y_1),\qquad B(x_2,y_2)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                那么从 A 指向 B 的向量：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}=(x_2-x_1,\ y_2-y_1)`}
              />

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <PointVectorDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  有向线段 AB：终点坐标减去起点坐标
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RuleCard
                  title="向量的模长"
                  formula={String.raw`|\overrightarrow{a}|=\sqrt{x^2+y^2}`}
                  explanation="向量 a 的坐标为 (x, y)，其模由勾股定理得到。"
                />

                <RuleCard
                  title="两点间的距离"
                  formula={String.raw`|AB|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`}
                  explanation="两点间的距离等于向量 AB 的模。"
                />
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                线段中点坐标公式
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                如果 M 是线段 AB 的中点，
                则：
              </p>

              <FormulaBox
                math={String.raw`M\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`}
              />

              <Note>
                向量 AB 和向量 BA 的坐标互为相反数。
                求向量坐标时一定要分清起点和终点。
              </Note>
            </section>

            {/* 05 共线坐标条件 */}
            <section
              id="collinear"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="05"
                title="向量共线的坐标条件"
                subtitle="利用坐标判断两个向量是否平行"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                设两个非零向量：
              </p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=(x_1,y_1),\qquad\overrightarrow{b}=(x_2,y_2)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                它们共线的充要条件是：
              </p>

              <FormulaBox
                math={String.raw`x_1y_2-x_2y_1=0`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                也就是说，
                两个向量的横纵坐标满足上面的关系时，
                这两个向量就平行。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  例子
                </p>

                <BlockMath
                  math={String.raw`\overrightarrow{a}=(2,3),\qquad\overrightarrow{b}=(4,6)`}
                />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为：
                </p>

                <BlockMath
                  math={String.raw`2\times6-4\times3=0`}
                />

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  所以两个向量共线。
                  实际上，向量 b 正好是向量 a 的 2 倍。
                </p>
              </div>

              <Note>
                使用坐标判断共线时，
                优先使用交叉相乘的形式。
                不建议直接使用坐标比值，
                因为某些坐标可能等于 0，
                容易出现除以零的问题。
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
                subtitle="掌握坐标运算的基本题型"
              />

              <div className="mt-6 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="基底与向量坐标"
                  formula={String.raw`\overrightarrow{a}=2\overrightarrow{e_1}-3\overrightarrow{e_2}`}
                  explanation="以 e₁、e₂ 为基底，向量 a 的坐标就是两个基向量的系数，依次为 2 和 -3。"
                  result={String.raw`\overrightarrow{a}=(2,-3)`}
                />

                <ExampleCard
                  number="例题 2"
                  title="求两点确定的向量"
                  formula={String.raw`A(1,2),\qquad B(4,6)`}
                  explanation="用终点 B 的坐标减去起点 A 的坐标，得到 (3,4)。"
                  result={String.raw`\overrightarrow{AB}=(3,4)`}
                />

                <ExampleCard
                  number="例题 3"
                  title="求向量模长"
                  formula={String.raw`\overrightarrow{a}=(3,4)`}
                  explanation="根据勾股定理，向量的模等于两个坐标平方和的算术平方根。"
                  result={String.raw`|\overrightarrow{a}|=\sqrt{3^2+4^2}=5`}
                />

                <ExampleCard
                  number="例题 4"
                  title="求共线条件中的参数"
                  formula={String.raw`\overrightarrow{a}=(2,k),\quad\overrightarrow{b}=(4,6)`}
                  explanation="因为两个非零向量共线，所以 2×6-4k=0，解得 k=3。"
                  result={String.raw`k=3`}
                />

                <ExampleCard
                  number="例题 5"
                  title="求线段中点"
                  formula={String.raw`A(2,-1),\qquad B(6,5)`}
                  explanation="中点横坐标为 (2+6)/2=4，纵坐标为 (-1+5)/2=2。"
                  result={String.raw`M(4,2)`}
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
                subtitle="坐标运算中容易忽略的细节"
              />

              <div className="mt-6 space-y-3">
                <MistakeTip
                  title="基底不一定互相垂直"
                  description="平面向量基本定理只要求两个基向量不共线，不要求它们互相垂直或都是单位向量。"
                />

                <MistakeTip
                  title="把点坐标与向量坐标混淆"
                  description="点 A(x,y) 表示平面上的位置；向量 (x,y) 表示大小与方向。两者含义不同。"
                />

                <MistakeTip
                  title="求向量坐标时顺序写反"
                  description="向量 AB = B 的坐标减去 A 的坐标，不能写成 A 减 B。"
                />

                <MistakeTip
                  title="数乘运算只计算一个分量"
                  description="数乘向量时，必须同时乘以横坐标和纵坐标。"
                />

                <MistakeTip
                  title="共线条件中直接相除"
                  description="坐标可能为零，直接相除可能无意义。建议使用 x₁y₂-x₂y₁=0。"
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
                subtitle="完成 3 道基础题，巩固本节知识"
              />

              <div className="mt-6 space-y-5">
                {questions.map((question) => {
                  const selected = answers[question.id];
                  const isSubmitted = Boolean(submitted[question.id]);
                  const correct = selected === question.answer;

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
                          const chosen = selected === option.key;
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
                                chooseAnswer(question.id, option.key)
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

                              <span className="pt-0.5">{option.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      {!isSubmitted ? (
                        <button
                          type="button"
                          disabled={!selected}
                          onClick={() => submitAnswer(question.id)}
                          className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          提交答案
                        </button>
                      ) : (
                        <div
                          className={`mt-5 rounded-xl p-4 ${
                            correct ? "bg-emerald-50" : "bg-red-50"
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
                            onClick={() => resetQuestion(question.id)}
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
                      ? "三个问题全部答对，可以继续学习向量的数量积。"
                      : "建议复习坐标运算、终点减起点和向量共线的坐标条件。"}
                  </p>
                </div>
              )}
            </section>

            {/* 底部导航 */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link
                href="/grade1/vectors/linear-operations"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                ← 上一节：向量的线性运算
              </Link>

              <span className="text-sm text-slate-400">
                下一节：平面向量的数量积
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
                {sections.map(([id, label]) => (
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
                    "平面向量基本定理",
                    "基底",
                    "坐标运算",
                    "两点坐标",
                    "向量共线",
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

/* =========================
   通用组件
========================= */

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

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {children}
      </p>
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
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-blue-600">
        {title}
      </h3>

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
  explanation,
  result,
}: {
  number: string;
  title: string;
  formula: string;
  explanation: string;
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
        {explanation}
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

/* =========================
   基底几何示意图
========================= */

function BasisDiagram() {
  return (
    <svg
      viewBox="0 0 520 290"
      className="h-auto w-full"
      role="img"
      aria-label="两个不共线基向量线性组合的几何示意图"
    >
      <defs>
        <marker
          id="basis-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#2563eb"
          />
        </marker>

        <marker
          id="basis-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#059669"
          />
        </marker>

        <marker
          id="basis-purple"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#7c3aed"
          />
        </marker>
      </defs>

      {/* 辅助线 */}
      <line
        x1="280"
        y1="210"
        x2="340"
        y2="110"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      <line
        x1="160"
        y1="110"
        x2="340"
        y2="110"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      {/* 基向量 e1 */}
      <line
        x1="100"
        y1="210"
        x2="220"
        y2="210"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#basis-blue)"
      />

      {/* 基向量 e2 */}
      <line
        x1="100"
        y1="210"
        x2="160"
        y2="110"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#basis-green)"
      />

      {/* 目标向量 a */}
      <line
        x1="100"
        y1="210"
        x2="340"
        y2="110"
        stroke="#7c3aed"
        strokeWidth="4"
        markerEnd="url(#basis-purple)"
      />

      <circle
        cx="100"
        cy="210"
        r="4"
        fill="#334155"
      />

      <text
        x="83"
        y="232"
        fontSize="17"
        fill="#334155"
      >
        O
      </text>

      <text
        x="171"
        y="231"
        fontSize="17"
        fill="#2563eb"
      >
        e₁
      </text>

      <text
        x="109"
        y="145"
        fontSize="17"
        fill="#059669"
      >
        e₂
      </text>

      <text
        x="242"
        y="135"
        fontSize="18"
        fill="#7c3aed"
      >
        a
      </text>

      <text
        x="350"
        y="113"
        fontSize="14"
        fill="#64748b"
      >
        目标向量
      </text>

      <text
        x="100"
        y="265"
        fontSize="14"
        fill="#64748b"
      >
        两个不共线向量构成一组基底
      </text>
    </svg>
  );
}

/* =========================
   两点确定向量的示意图
========================= */

function PointVectorDiagram() {
  return (
    <svg
      viewBox="0 0 520 290"
      className="h-auto w-full"
      role="img"
      aria-label="平面直角坐标系中根据两点坐标求向量"
    >
      <defs>
        <marker
          id="point-axis"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path
            d="M0 0 L8 4 L0 8 Z"
            fill="#94a3b8"
          />
        </marker>

        <marker
          id="point-vector"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#2563eb"
          />
        </marker>
      </defs>

      {/* 坐标轴 */}
      <line
        x1="80"
        y1="220"
        x2="470"
        y2="220"
        stroke="#94a3b8"
        strokeWidth="2"
        markerEnd="url(#point-axis)"
      />

      <line
        x1="80"
        y1="248"
        x2="80"
        y2="30"
        stroke="#94a3b8"
        strokeWidth="2"
        markerEnd="url(#point-axis)"
      />

      <text
        x="477"
        y="224"
        fontSize="16"
        fill="#64748b"
      >
        x
      </text>

      <text
        x="70"
        y="24"
        fontSize="16"
        fill="#64748b"
      >
        y
      </text>

      <text
        x="61"
        y="239"
        fontSize="15"
        fill="#64748b"
      >
        O
      </text>

      {/* 辅助虚线 */}
      <line
        x1="130"
        y1="170"
        x2="130"
        y2="220"
        stroke="#cbd5e1"
        strokeDasharray="5 5"
      />

      <line
        x1="80"
        y1="170"
        x2="130"
        y2="170"
        stroke="#cbd5e1"
        strokeDasharray="5 5"
      />

      <line
        x1="330"
        y1="70"
        x2="330"
        y2="220"
        stroke="#cbd5e1"
        strokeDasharray="5 5"
      />

      <line
        x1="80"
        y1="70"
        x2="330"
        y2="70"
        stroke="#cbd5e1"
        strokeDasharray="5 5"
      />

      {/* 向量 AB */}
      <line
        x1="130"
        y1="170"
        x2="330"
        y2="70"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#point-vector)"
      />

      <circle
        cx="130"
        cy="170"
        r="5"
        fill="#334155"
      />

      <circle
        cx="330"
        cy="70"
        r="5"
        fill="#2563eb"
      />

      <text
        x="142"
        y="188"
        fontSize="16"
        fill="#334155"
      >
        A(1,1)
      </text>

      <text
        x="342"
        y="63"
        fontSize="16"
        fill="#334155"
      >
        B(5,3)
      </text>

      <text
        x="190"
        y="103"
        fontSize="17"
        fill="#2563eb"
      >
        AB
      </text>

      <text
        x="160"
        y="270"
        fontSize="14"
        fill="#64748b"
      >
        向量 AB = (5-1, 3-1) = (4,2)
      </text>
    </svg>
  );
}
