
"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   本节互动练习
========================= */

const exercises = [
  {
    title: "复数的实部与虚部",
    question: "已知下列复数，它的实部与虚部分别是多少？",
    formula: String.raw`z=4-7i`,
    options: [
      String.raw`4,\ 7`,
      String.raw`4,\ -7`,
      String.raw`-7,\ 4`,
      String.raw`-4,\ 7`,
    ],
    answer: 1,
    explanation:
      "复数 z=a+bi 的实部是 a，虚部是 b。因此 z=4-7i 的实部为 4，虚部为 -7。注意虚部不包含虚数单位 i。",
  },
  {
    title: "实数的判断",
    question: "当 m 取什么值时，下列复数是实数？",
    formula: String.raw`z=(m-2)+(m+1)i`,
    options: [
      String.raw`m=2`,
      String.raw`m=1`,
      String.raw`m=-1`,
      String.raw`m=0`,
    ],
    answer: 2,
    explanation:
      "复数是实数的条件是虚部等于 0。令 m+1=0，得到 m=-1。",
  },
  {
    title: "复数相等",
    question: "若下面两个复数相等，则实数 x、y 分别为多少？",
    formula: String.raw`(x+1)+2yi=4-6i`,
    options: [
      String.raw`x=3,\ y=-3`,
      String.raw`x=4,\ y=-6`,
      String.raw`x=3,\ y=3`,
      String.raw`x=-3,\ y=-3`,
    ],
    answer: 0,
    explanation:
      "两个复数相等时，实部与虚部分别相等。由 x+1=4 得 x=3，由 2y=-6 得 y=-3。",
  },
];

/* =========================
   页面
========================= */

export default function ComplexConceptPage() {
  const [answers, setAnswers] = useState<
    Record<number, number>
  >({});

  const completed = Object.keys(answers).length;

  const correctCount = exercises.filter(
    (exercise, index) =>
      answers[index] === exercise.answer
  ).length;

  function chooseAnswer(
    exerciseIndex: number,
    optionIndex: number
  ) {
    if (answers[exerciseIndex] !== undefined) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [exerciseIndex]: optionIndex,
    }));
  }

  function resetExercises() {
    setAnswers({});
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* =========================
            面包屑导航
        ========================= */}

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600">
            首页
          </Link>

          <span>/</span>

          <Link
            href="/grade1"
            className="hover:text-blue-600"
          >
            高一数学
          </Link>

          <span>/</span>
          <span>复数</span>
          <span>/</span>

          <span className="text-slate-700">
            第1节
          </span>
        </div>

        {/* =========================
            课程标题
        ========================= */}

        <section className="border-b border-slate-200 pb-10 pt-10">
          <p className="text-sm font-medium text-blue-600">
            CHAPTER 07 · LESSON 01
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            复数的概念与代数表示
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            在实数范围内，负数不能开平方。
            为了解决这类问题，数学中引入虚数单位，
            由此将数系从实数扩充到复数。
            本节从虚数单位开始，
            逐步认识复数的基本概念。
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "虚数单位 i",
              "复数的标准形式",
              "实部与虚部",
              "复数的分类",
              "复数相等",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* =========================
            01 学习目标
        ========================= */}

        <section className="py-10">
          <SectionHeading
            number="01"
            title="学习目标"
            description="学完本节，应掌握以下四项内容。"
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <GoalCard
              number="1"
              text="理解虚数单位 i 的定义，知道 i²=-1。"
            />

            <GoalCard
              number="2"
              text="掌握复数 a+bi 的代数形式，准确区分实部与虚部。"
            />

            <GoalCard
              number="3"
              text="能够判断实数、虚数、纯虚数。"
            />

            <GoalCard
              number="4"
              text="掌握两个复数相等的条件。"
            />
          </div>
        </section>

        {/* =========================
            02 虚数单位
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="02"
            title="虚数单位 i"
            description="复数的产生，来自实数范围内无法解决的问题。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              考虑下面的方程：
            </p>

            <FormulaCard
              formula={String.raw`x^2+1=0`}
            />

            <p className="text-sm leading-8 text-slate-600">
              将其移项，得到：
            </p>

            <FormulaCard
              formula={String.raw`x^2=-1`}
            />

            <p className="text-sm leading-8 text-slate-600">
              在实数范围内，任意实数的平方都不小于零，
              因此这个方程没有实数解。
              为了扩充数系，我们引入一个新的数{" "}
              <InlineMath math={String.raw`i`} />
              ，称为虚数单位，规定：
            </p>

            <KeyFormula
              formula={String.raw`i^2=-1`}
              description="这是虚数单位最重要的基本性质。"
            />

            <p className="text-sm leading-8 text-slate-600">
              引入虚数单位以后，
              方程便有两个复数解：
            </p>

            <FormulaCard
              formula={String.raw`x=i\quad\text{或}\quad x=-i`}
            />

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
              <p className="text-sm font-semibold text-blue-700">
                注意
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                虚数单位 i 不是实数。
                计算时遇到 i 的平方，应及时利用{" "}
                <InlineMath
                  math={String.raw`i^2=-1`}
                />{" "}
                进行化简。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            03 复数的代数形式
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="03"
            title="复数的代数形式"
            description="每个复数都可以写成实数部分与虚数部分组合的形式。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              形如以下形式的数称为复数：
            </p>

            <KeyFormula
              formula={String.raw`z=a+bi\qquad(a,b\in\mathbb{R})`}
              description="a、b 均为实数。这种写法称为复数的代数形式。"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <ConceptCard
                title="实部"
                formula={String.raw`\operatorname{Re}(z)=a`}
                description="复数中不含虚数单位 i 的实数部分。"
              />

              <ConceptCard
                title="虚部"
                formula={String.raw`\operatorname{Im}(z)=b`}
                description="虚数单位 i 前面的实数系数，不包含 i 本身。"
              />
            </div>

            <ExampleCard
              number="例题 1"
              title="确定复数的实部与虚部"
              question="已知复数 z=5-3i，求其实部与虚部。"
              formula={String.raw`z=5-3i`}
              steps={[
                "与标准形式 a+bi 对照。",
                "可得 a=5，b=-3。",
                "因此实部为 5，虚部为 -3。",
              ]}
              answer={String.raw`\operatorname{Re}(z)=5,\quad\operatorname{Im}(z)=-3`}
            />

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                易错提醒
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                对于{" "}
                <InlineMath math={String.raw`z=5-3i`} />
                ，虚部是{" "}
                <InlineMath math={String.raw`-3`} />
                ，而不是{" "}
                <InlineMath math={String.raw`-3i`} />
                。这是本节非常容易出错的地方。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            04 复数的分类
            不等号统一使用原生字符 ≠
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="04"
            title="复数的分类"
            description="复数可以进一步划分为实数和虚数。"
          />

          <div className="mt-6 space-y-4">
            {/* 实数 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">
                1. 实数
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                当复数的虚部等于零，即{" "}
                <InlineMath
                  math={String.raw`b=0`}
                />{" "}
                时，复数为实数。
              </p>

              <div className="mt-5 overflow-x-auto">
                <BlockMath
                  math={String.raw`z=a+0i=a`}
                />
              </div>
            </div>

            {/* 虚数 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">
                2. 虚数
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                当虚部不等于零，即{" "}
                <span className="font-serif text-base italic">
                  b
                </span>
                {" ≠ 0 "}
                时，复数为虚数。
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-serif text-2xl italic text-slate-900">
                <span>z = a + bi,</span>
                <span>b ≠ 0</span>
              </div>
            </div>

            {/* 纯虚数 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">
                3. 纯虚数
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                当实部为零、虚部不为零，即{" "}
                <InlineMath
                  math={String.raw`a=0`}
                />{" "}
                且{" "}
                <span className="font-serif text-base italic">
                  b
                </span>
                {" ≠ 0 "}
                时，复数为纯虚数。
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-serif text-2xl italic text-slate-900">
                <span>z = bi,</span>
                <span>b ≠ 0</span>
              </div>
            </div>

            <ExampleCard
              number="例题 2"
              title="判断复数所属类别"
              question="已知 z=(m-2)+(m+3)i，判断它何时为实数、纯虚数。"
              formula={String.raw`z=(m-2)+(m+3)i`}
              steps={[
                "若 z 为实数，则虚部 m+3=0，得到 m=-3。",
                "若 z 为纯虚数，则实部 m-2=0，得到 m=2。",
                "当 m=2 时，虚部等于 5，不为零，满足纯虚数条件。",
              ]}
              answer={String.raw`\text{实数：}m=-3\qquad\text{纯虚数：}m=2`}
            />
          </div>
        </section>

        {/* =========================
            05 复数相等
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="05"
            title="复数相等的条件"
            description="复数相等，需要分别比较实部和虚部。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设 a、b、c、d 均为实数。
              如果两个复数相等：
            </p>

            <FormulaCard
              formula={String.raw`a+bi=c+di`}
            />

            <p className="text-sm leading-8 text-slate-600">
              则它们的实部相等，虚部也相等：
            </p>

            <KeyFormula
              formula={String.raw`a=c,\qquad b=d`}
              description="两个复数相等的充要条件，是实部与虚部分别相等。"
            />

            <ExampleCard
              number="例题 3"
              title="利用复数相等求参数"
              question="已知 (2x-1)+(y+2)i=5-3i，求实数 x、y。"
              formula={String.raw`(2x-1)+(y+2)i=5-3i`}
              steps={[
                "由两个复数相等，可知实部分别相等，虚部分别相等。",
                "比较实部：2x-1=5，解得 x=3。",
                "比较虚部：y+2=-3，解得 y=-5。",
              ]}
              answer={String.raw`x=3,\qquad y=-5`}
            />
          </div>
        </section>

        {/* =========================
            06 知识总结
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="06"
            title="本节知识总结"
            description="记住以下四条关键结论。"
          />

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              {
                title: "虚数单位",
                formula: String.raw`i^2=-1`,
              },
              {
                title: "复数代数形式",
                formula: String.raw`z=a+bi,\quad a,b\in\mathbb{R}`,
              },
              {
                title: "实部与虚部",
                formula: String.raw`\operatorname{Re}(z)=a,\quad\operatorname{Im}(z)=b`,
              },
              {
                title: "复数相等",
                formula: String.raw`a+bi=c+di\iff a=c,\ b=d`,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index === 3
                    ? ""
                    : "border-b border-slate-100"
                }`}
              >
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>

                <div className="overflow-x-auto text-slate-900">
                  <BlockMath math={item.formula} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            07 随堂练习
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-blue-600">
                PRACTICE
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                随堂练习
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 3 道选择题。
                选择选项后立即判断对错，并显示详细解析。
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600">
              已完成 {completed} / {exercises.length}
            </span>
          </div>

          <div className="mt-7 space-y-5">
            {exercises.map((exercise, index) => {
              const chosen = answers[index];
              const answered = chosen !== undefined;
              const isCorrect = chosen === exercise.answer;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-blue-600">
                      第 {index + 1} 题
                    </p>

                    <p className="text-xs text-slate-400">
                      {exercise.title}
                    </p>
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-8 text-slate-900">
                    {exercise.question}
                  </h3>

                  <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 px-3 py-4">
                    <BlockMath math={exercise.formula} />
                  </div>

                  <div className="space-y-3">
                    {exercise.options.map(
                      (option, optionIndex) => {
                        const selected = chosen === optionIndex;

                        const correct =
                          answered &&
                          optionIndex === exercise.answer;

                        const wrong =
                          answered &&
                          selected &&
                          optionIndex !== exercise.answer;

                        return (
                          <button
                            key={optionIndex}
                            type="button"
                            disabled={answered}
                            onClick={() =>
                              chooseAnswer(index, optionIndex)
                            }
                            className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition ${
                              correct
                                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                : wrong
                                  ? "border-red-300 bg-red-50 text-red-600"
                                  : selected
                                    ? "border-blue-300 bg-blue-50"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-semibold">
                              {String.fromCharCode(
                                65 + optionIndex
                              )}
                            </span>

                            <div className="min-w-0 overflow-x-auto text-sm">
                              <InlineMath math={option} />
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {answered && (
                    <div
                      className={`mt-5 rounded-xl p-5 ${
                        isCorrect
                          ? "bg-emerald-50"
                          : "bg-red-50"
                      }`}
                    >
                      <p
                        className={`font-semibold ${
                          isCorrect
                            ? "text-emerald-700"
                            : "text-red-600"
                        }`}
                      >
                        {isCorrect
                          ? "回答正确"
                          : "回答错误"}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {exercise.explanation}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {completed === exercises.length && (
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/50 p-6">
              <p className="text-lg font-bold text-slate-900">
                本节练习完成
              </p>

              <p className="mt-3 text-sm text-slate-600">
                答对 {correctCount} / {exercises.length} 题
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${
                      (correctCount / exercises.length) * 100
                    }%`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={resetExercises}
                className="mt-5 rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
              >
                重新练习
              </button>
            </div>
          )}
        </section>

        {/* =========================
            底部导航
        ========================= */}

        <section className="border-t border-slate-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/grade1"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← 返回高一数学
            </Link>

            <span className="text-sm text-slate-400">
              下一节：复数的几何意义（待开发）
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================
   通用组件
========================= */

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-blue-600">
        SECTION {number}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function GoalCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="text-sm leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

function FormulaCard({
  formula,
}: {
  formula: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white px-4 py-5">
      <BlockMath math={formula} />
    </div>
  );
}

function KeyFormula({
  formula,
  description,
}: {
  formula: string;
  description: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-blue-200 bg-blue-50/40 p-6">
      <BlockMath math={formula} />

      <p className="mt-3 text-center text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ConceptCard({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <div className="my-4 overflow-x-auto">
        <BlockMath math={formula} />
      </div>

      <p className="text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  question,
  formula,
  steps,
  answer,
}: {
  number: string;
  title: string;
  question: string;
  formula: string;
  steps: string[];
  answer: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-medium text-blue-600">
          {number}
        </p>

        <h3 className="mt-2 font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          {question}
        </p>
      </div>

      <div className="px-6 py-5">
        <div className="overflow-x-auto rounded-lg bg-slate-50 px-3 py-3">
          <BlockMath math={formula} />
        </div>

        <p className="mt-5 text-sm font-semibold text-slate-800">
          解题过程
        </p>

        <div className="mt-3 space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-3 text-sm leading-7 text-slate-600"
            >
              <span className="shrink-0 font-medium text-blue-600">
                {index + 1}.
              </span>

              <p>{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-x-auto border-t border-slate-100 pt-5">
          <p className="text-xs font-semibold text-emerald-600">
            最终答案
          </p>

          <BlockMath math={answer} />
        </div>
      </div>
    </div>
  );
}
