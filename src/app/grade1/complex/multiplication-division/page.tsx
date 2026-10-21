
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
    title: "虚数单位的乘方",
    question: "计算下列虚数单位的乘方。",
    formula: String.raw`i^{19}`,
    options: [
      String.raw`-i`,
      String.raw`i`,
      String.raw`1`,
      String.raw`-1`,
    ],
    answer: 0,
    explanation:
      "虚数单位的乘方以4为周期。因为19=4×4+3，所以i的19次方等于i³=-i。",
  },
  {
    title: "复数的乘法",
    question: "计算下列两个复数的乘积。",
    formula: String.raw`(2+i)(1-3i)`,
    options: [
      String.raw`-1-5i`,
      String.raw`5-5i`,
      String.raw`5+5i`,
      String.raw`2-5i`,
    ],
    answer: 1,
    explanation:
      "展开得到2-6i+i-3i²。由于i²=-1，因此结果为2-5i+3=5-5i。",
  },
  {
    title: "复数的除法",
    question: "计算下列复数的商。",
    formula: String.raw`\frac{4+2i}{1+i}`,
    options: [
      String.raw`3+i`,
      String.raw`2-i`,
      String.raw`3-i`,
      String.raw`1+3i`,
    ],
    answer: 2,
    explanation:
      "分子分母同时乘以1-i，分母变为2，分子变为(4+2i)(1-i)=6-2i，所以结果为3-i。",
  },
];

/* =========================
   页面
========================= */

export default function ComplexMultiplicationDivisionPage() {
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
            面包屑
        ========================= */}

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
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
            第4节
          </span>
        </div>

        {/* =========================
            课程标题
        ========================= */}

        <section className="border-b border-slate-200 pb-10 pt-10">
          <p className="text-sm font-medium text-blue-600">
            CHAPTER 07 · LESSON 04
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            复数的乘法与除法
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            前面我们已经掌握了复数的加法和减法。
            本节进一步学习复数的乘法与除法，
            理解虚数单位的运算规律，
            并利用共轭复数将复数除法转化为
            更容易处理的代数运算。
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "i 的乘方",
              "复数乘法",
              "共轭复数",
              "复数除法",
              "综合运算",
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
            description="本节需要掌握以下四项内容。"
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <GoalCard
              number="1"
              text="掌握虚数单位 i 的乘方规律。"
            />

            <GoalCard
              number="2"
              text="掌握复数乘法的运算法则。"
            />

            <GoalCard
              number="3"
              text="理解共轭复数在除法运算中的作用。"
            />

            <GoalCard
              number="4"
              text="能够正确完成复数的乘除混合运算。"
            />
          </div>
        </section>

        {/* =========================
            02 虚数单位的乘方
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="02"
            title="虚数单位的乘方"
            description="虚数单位的乘方具有周期性。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              第一节我们已经知道，虚数单位
              {" "}
              <InlineMath
                math={String.raw`i`}
              />
              {" "}
              满足：
            </p>

            <KeyFormula
              formula={String.raw`i^2=-1`}
              description="这是复数乘法的基本依据。"
            />

            <p className="text-sm leading-8 text-slate-600">
              在此基础上，可以继续计算 i 的高次幂。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <PowerCard
                label="第一次方"
                formula={String.raw`i^1=i`}
              />

              <PowerCard
                label="第二次方"
                formula={String.raw`i^2=-1`}
              />

              <PowerCard
                label="第三次方"
                formula={String.raw`i^3=-i`}
              />

              <PowerCard
                label="第四次方"
                formula={String.raw`i^4=1`}
              />
            </div>

            <p className="text-sm leading-8 text-slate-600">
              从第五次方开始，计算结果会重新循环。
              因此，虚数单位 i 的乘方以
              <strong className="text-slate-900">
                {" "}4 为周期
              </strong>
              。
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-100 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  虚数单位乘方的周期
                </p>
              </div>

              <div className="grid grid-cols-4 gap-px bg-slate-200">
                {[
                  {
                    label: "余数 0",
                    value: "1",
                  },
                  {
                    label: "余数 1",
                    value: "i",
                  },
                  {
                    label: "余数 2",
                    value: "-1",
                  },
                  {
                    label: "余数 3",
                    value: "-i",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white px-2 py-5 text-center"
                  >
                    <p className="text-xs text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-3 font-serif text-2xl italic text-blue-600">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ExampleCard
              number="例题 1"
              title="计算虚数单位的高次幂"
              question="计算 i 的 27 次方。"
              formula={String.raw`i^{27}`}
              steps={[
                "虚数单位的乘方以4为周期。",
                "将指数27除以4，得到27=4×6+3。",
                "因此i²⁷=(i⁴)⁶×i³。",
                "因为i⁴=1、i³=-i，所以结果为-i。",
              ]}
              answer={String.raw`i^{27}=-i`}
            />

            <NoteBox
              title="计算技巧"
              text="计算 i 的高次幂时，不需要逐次相乘。只要将指数除以4，根据余数确定结果即可。"
              tone="blue"
            />
          </div>
        </section>

        {/* =========================
            03 复数乘法
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="03"
            title="复数的乘法"
            description="按照多项式乘法展开，再利用 i²=-1 化简。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设两个复数分别为：
            </p>

            <FormulaCard
              formula={String.raw`z_1=a+bi,\qquad z_2=c+di`}
            />

            <p className="text-sm leading-8 text-slate-600">
              按照多项式乘法法则展开：
            </p>

            <FormulaCard
              formula={String.raw`(a+bi)(c+di)=ac+adi+bci+bdi^2`}
            />

            <p className="text-sm leading-8 text-slate-600">
              因为
              {" "}
              <InlineMath
                math={String.raw`i^2=-1`}
              />
              ，所以最终可化简为：
            </p>

            <KeyFormula
              formula={String.raw`(a+bi)(c+di)=(ac-bd)+(ad+bc)i`}
              description="复数乘法：先展开，再合并实部和虚部。"
            />

            <ExampleCard
              number="例题 2"
              title="两个复数相乘"
              question="计算 (2+3i)(1-2i)。"
              formula={String.raw`(2+3i)(1-2i)`}
              steps={[
                "按照多项式乘法公式展开。",
                "得到2-4i+3i-6i²。",
                "合并含i的项，得到2-i-6i²。",
                "利用i²=-1，得到2-i+6=8-i。",
              ]}
              answer={String.raw`8-i`}
            />

            <NoteBox
              title="易错提醒"
              text="复数相乘时，最容易忘记 i²=-1。计算结束后，应检查结果是否已经写成 a+bi 的标准形式。"
              tone="amber"
            />
          </div>
        </section>

        {/* =========================
            04 共轭复数与乘法
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="04"
            title="共轭复数与乘法"
            description="复数与其共轭复数相乘，结果是非负实数。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              上一节我们学习了共轭复数。
              对于复数
              {" "}
              <InlineMath
                math={String.raw`z=a+bi`}
              />
              ，其共轭复数为：
            </p>

            <FormulaCard
              formula={String.raw`\overline{z}=a-bi`}
            />

            <p className="text-sm leading-8 text-slate-600">
              将复数与它的共轭复数相乘：
            </p>

            <FormulaCard
              formula={String.raw`z\overline{z}=(a+bi)(a-bi)`}
            />

            <p className="text-sm leading-8 text-slate-600">
              根据平方差公式，得到：
            </p>

            <KeyFormula
              formula={String.raw`z\overline{z}=a^2+b^2=|z|^2`}
              description="复数与共轭复数的乘积等于模的平方。"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <ConceptCard
                title="共轭复数"
                formula={String.raw`\overline{a+bi}=a-bi`}
                description="实部保持不变，虚部变为相反数。"
              />

              <ConceptCard
                title="乘积性质"
                formula={String.raw`z\overline{z}=|z|^2`}
                description="结果是非负实数，也是复数模的平方。"
              />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">
                一个具体例子
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                已知复数
                {" "}
                <InlineMath
                  math={String.raw`z=3+2i`}
                />
                ，则：
              </p>

              <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4">
                <BlockMath
                  math={String.raw`(3+2i)(3-2i)=9+4=13`}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                两个互为共轭的复数相乘后，
                含虚数单位 i 的项相互抵消。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            05 复数除法
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="05"
            title="复数的除法"
            description="通过共轭复数，将分母转化为实数。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              当复数出现在分母中时，
              可以通过分子、分母同乘分母的共轭复数，
              将分母化为实数。
            </p>

            <FormulaCard
              formula={String.raw`\frac{a+bi}{c+di}`}
            />

            <p className="text-sm leading-8 text-slate-600">
              对于非零分母
              {" "}
              <InlineMath
                math={String.raw`c+di`}
              />
              ，分子、分母同时乘以
              {" "}
              <InlineMath
                math={String.raw`c-di`}
              />
              ：
            </p>

            <FormulaCard
              formula={String.raw`\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{(c+di)(c-di)}`}
            />

            <p className="text-sm leading-8 text-slate-600">
              整理后得到复数除法公式：
            </p>

            <KeyFormula
              formula={String.raw`\frac{a+bi}{c+di}=\frac{ac+bd}{c^2+d^2}+\frac{bc-ad}{c^2+d^2}i`}
              description="前提是分母复数不为零。"
            />

            <ExampleCard
              number="例题 3"
              title="复数除法的基本计算"
              question="计算 (3+i)/(1-i)。"
              formula={String.raw`\frac{3+i}{1-i}`}
              steps={[
                "分母为1-i，其共轭复数为1+i。",
                "分子、分母同时乘以1+i。",
                "分母：(1-i)(1+i)=1-i²=2。",
                "分子：(3+i)(1+i)=3+4i+i²=2+4i。",
                "最后得到(2+4i)/2=1+2i。",
              ]}
              answer={String.raw`1+2i`}
            />

            <NoteBox
              title="关键方法：分母实数化"
              text="复数除法与初中学习的分母有理化很相似。分母含有虚数单位时，通常同乘分母的共轭复数。注意分子也必须乘以相同的复数。"
              tone="blue"
            />
          </div>
        </section>

        {/* =========================
            06 综合应用
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="06"
            title="乘除混合运算"
            description="先处理乘方，再处理乘法与除法。"
          />

          <div className="mt-6 space-y-5">
            <ExampleCard
              number="例题 4"
              title="复数乘除综合计算"
              question="计算下面的复数表达式。"
              formula={String.raw`\frac{(1+i)^2}{1-i}`}
              steps={[
                "先计算分子：(1+i)²=1+2i+i²=2i。",
                "原式变为2i/(1-i)。",
                "分子、分母同时乘以1+i。",
                "分母为(1-i)(1+i)=2。",
                "分子为2i(1+i)=2i+2i²=-2+2i。",
                "因此最终结果为-1+i。",
              ]}
              answer={String.raw`-1+i`}
            />

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">
                综合计算顺序
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "先算乘方",
                    text: "优先利用 i²=-1 化简。",
                  },
                  {
                    number: "02",
                    title: "再做乘除",
                    text: "乘法展开，除法进行分母实数化。",
                  },
                  {
                    number: "03",
                    title: "整理结果",
                    text: "合并实部与虚部，写成 a+bi。",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-lg bg-slate-50 p-4"
                  >
                    <p className="text-xs font-semibold text-blue-600">
                      {step.number}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      {step.title}
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            07 知识总结
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="07"
            title="本节知识总结"
            description="掌握虚数单位的周期性、乘法与除法公式。"
          />

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              {
                title: "虚数单位",
                formula: String.raw`i^2=-1,\qquad i^4=1`,
              },
              {
                title: "复数乘法",
                formula:
                  String.raw`(a+bi)(c+di)=(ac-bd)+(ad+bc)i`,
              },
              {
                title: "共轭复数",
                formula: String.raw`\overline{z}=a-bi`,
              },
              {
                title: "模的平方",
                formula: String.raw`z\overline{z}=|z|^2`,
              },
              {
                title: "复数除法",
                formula:
                  String.raw`\frac{a+bi}{c+di}=\frac{ac+bd+(bc-ad)i}{c^2+d^2}`,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index === 4
                    ? ""
                    : "border-b border-slate-100"
                }`}
              >
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>

                <div className="max-w-full overflow-x-auto">
                  <BlockMath math={item.formula} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            08 随堂练习
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
                共 3 道选择题，
                选择答案后立即判断对错，并显示解析。
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600">
              已完成 {completed} / {exercises.length}
            </span>
          </div>

          <div className="mt-7 space-y-5">
            {exercises.map((exercise, index) => {
              const chosen = answers[index];

              const answered =
                chosen !== undefined;

              const isCorrect =
                chosen === exercise.answer;

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
                    <BlockMath
                      math={exercise.formula}
                    />
                  </div>

                  <div className="space-y-3">
                    {exercise.options.map(
                      (option, optionIndex) => {
                        const selected =
                          chosen === optionIndex;

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
                              chooseAnswer(
                                index,
                                optionIndex
                              )
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
                              <InlineMath
                                math={option}
                              />
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

          {/* 全部完成后的成绩 */}
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
                      (correctCount / exercises.length) *
                      100
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
              href="/grade1/complex/addition-subtraction"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← 上一节：复数的加法与减法
            </Link>

            <Link href="/grade1/complex/applications" className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100">下一节：复数的综合应用 →</Link>
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

function GoalCardPlaceholder() {
  return null;
}

function PowerCard({
  label,
  formula,
}: {
  label: string;
  formula: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <div className="mt-4 overflow-x-auto">
        <BlockMath math={formula} />
      </div>
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
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <div className="my-4 overflow-x-auto">
        <BlockMath math={formula} />
      </div>

      <p className="text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function NoteBox({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "blue" | "amber";
}) {
  const blue = tone === "blue";

  return (
    <div
      className={`rounded-xl border p-5 ${
        blue
          ? "border-blue-100 bg-blue-50/50"
          : "border-amber-200 bg-amber-50/50"
      }`}
    >
      <p
        className={`text-sm font-semibold ${
          blue ? "text-blue-700" : "text-amber-800"
        }`}
      >
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {text}
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
