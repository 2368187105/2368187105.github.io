"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import GeometryFigures from "@/components/GeometryFigures";

type Question = {
  id: string;
  title: string;
  question: string;
  options: { key: string; text: string }[];
  answer: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: "sv-001",
    title: "圆柱的体积",
    question:
      "一个圆柱的底面半径为 2，高为 3，它的体积是多少？",
    options: [
      { key: "A", text: "6π" },
      { key: "B", text: "12π" },
      { key: "C", text: "8π" },
      { key: "D", text: "24π" },
    ],
    answer: "B",
    explanation:
      "圆柱体积公式为 V = πr²h。代入 r = 2，h = 3，得 V = π × 2² × 3 = 12π。",
  },
  {
    id: "sv-002",
    title: "圆锥的侧面积",
    question:
      "一个圆锥的底面半径为 3，母线长为 5，它的侧面积是多少？",
    options: [
      { key: "A", text: "9π" },
      { key: "B", text: "12π" },
      { key: "C", text: "15π" },
      { key: "D", text: "24π" },
    ],
    answer: "C",
    explanation:
      "圆锥侧面积公式为 S侧 = πrl。代入 r = 3，l = 5，得 S侧 = 15π。",
  },
  {
    id: "sv-003",
    title: "球的表面积",
    question: "一个球的半径为 3，它的表面积是多少？",
    options: [
      { key: "A", text: "9π" },
      { key: "B", text: "18π" },
      { key: "C", text: "27π" },
      { key: "D", text: "36π" },
    ],
    answer: "D",
    explanation:
      "球的表面积公式为 S = 4πr²。代入 r = 3，得 S = 4π × 3² = 36π。",
  },
];

const formulas = [
  {
    title: "棱柱",
    formulas: [
      "侧面积 = 底面周长 × 高",
      "体积 V = S底h",
    ],
    note: "侧面积公式适用于直棱柱；体积公式适用于棱柱。",
  },
  {
    title: "棱锥",
    formulas: [
      "正棱锥侧面积 = ½ × 底面周长 × 斜高",
      "体积 V = ⅓S底h",
    ],
    note: "正棱锥的侧面积公式使用侧面三角形的斜高。",
  },
  {
    title: "圆柱",
    formulas: [
      "侧面积 S侧 = 2πrh",
      "表面积 S = 2πr² + 2πrh",
      "体积 V = πr²h",
    ],
    note: "r 为底面半径，h 为圆柱的高。",
  },
  {
    title: "圆锥",
    formulas: [
      "侧面积 S侧 = πrl",
      "表面积 S = πr² + πrl",
      "体积 V = ⅓πr²h",
    ],
    note: "l 为母线长，h 为圆锥的高。母线、半径和高满足 l² = r² + h²。",
  },
  {
    title: "球",
    formulas: [
      "表面积 S = 4πr²",
      "体积 V = ⁴⁄₃πr³",
    ],
    note: "r 为球的半径。",
  },
];

export default function SurfaceVolumePage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter(
    (q) => answers[q.id] === q.answer
  ).length;

  function selectAnswer(id: string, key: string) {
    setAnswers((prev) => ({ ...prev, [id]: key }));
    setSubmitted(false);
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade1" className="hover:text-blue-600">
            高一数学
          </Link>
          <span>/</span>
          <Link
            href="/grade1/solid-geometry"
            className="hover:text-blue-600"
          >
            立体几何初步
          </Link>
          <span>/</span>
          <span className="text-slate-700">
            表面积与体积
          </span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 08
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 2 节 · 表面积与体积
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            空间几何体的表面积与体积
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            学习常见空间几何体的表面积和体积公式，理解公式中各个
            量的含义，并通过典型例题掌握实际计算方法。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#goals"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              开始学习
            </a>
            <a
              href="#practice"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              课后练习
            </a>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-6">
            <section
              id="goals"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <Heading
                eyebrow="LEARNING GOALS"
                title="一、本节学习目标"
              />

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 理解表面积、侧面积和体积的含义。</li>
                <li>• 掌握棱柱、棱锥、圆柱、圆锥和球的常用公式。</li>
                <li>• 能根据已知条件选择公式并完成计算。</li>
                <li>• 注意区分几何体的高、斜高和母线长。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="CORE CONCEPTS"
                title="二、表面积与体积的概念"
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                  <h3 className="font-bold text-slate-900">
                    表面积
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    空间几何体各个表面的面积之和。对于有底面和侧面的
                    几何体，通常有：
                  </p>
                  <div className="mt-4 rounded-lg bg-white p-4 text-center font-serif text-lg text-slate-800">
                    S = S侧 + S底
                  </div>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    对于有两个底面的柱体，总表面积应加上两个底面的面积。
                  </p>
                </div>

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <h3 className="font-bold text-slate-900">
                    体积
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    几何体所占空间的大小。柱体和锥体的体积计算有
                    不同的结构特点。
                  </p>
                  <div className="mt-4 rounded-lg bg-white p-4 text-center font-serif text-lg text-slate-800">
                    柱体：V = S底h
                  </div>
                  <div className="mt-2 rounded-lg bg-white p-4 text-center font-serif text-lg text-slate-800">
                    锥体：V = ⅓S底h
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                注意：表面积的单位是平方单位，如 cm²；体积的单位是
                立方单位，如 cm³。计算时要保持单位一致。
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="FORMULA GUIDE"
                title="三、常见几何体公式"
              />

              <p className="mt-3 text-sm leading-7 text-slate-500">
                先理解每个公式的含义，再记忆公式。S底表示底面积，
                r 表示底面半径，h 表示高，l 表示母线长。
              </p>

              <div className="mt-5 space-y-4">
                {formulas.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-4 space-y-2">
                      {item.formulas.map((formula) => (
                        <div
                          key={formula}
                          className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium leading-7 text-slate-800"
                        >
                          {mathText(formula)}
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {mathText(item.note)}
                    </p>
                  </div>
                ))}
              </div>
              <GeometryFigures kind="surface-volume" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="WORKED EXAMPLES"
                title="四、典型例题"
              />

              <div className="mt-5 space-y-5">
                <Example
                  number="例题 1"
                  title="圆柱的表面积与体积"
                  question="一个圆柱的底面半径为 2 cm，高为 5 cm，求它的表面积和体积。"
                  solution={[
                    "底面积为 π × 2² = 4π cm²。",
                    "侧面积为 2π × 2 × 5 = 20π cm²。",
                    "表面积为 2 × 4π + 20π = 28π cm²。",
                    "体积为 4π × 5 = 20π cm³。",
                  ]}
                  conclusion="表面积为 28π cm²，体积为 20π cm³。"
                />

                <Example
                  number="例题 2"
                  title="圆锥的母线与体积"
                  question="一个圆锥的底面半径为 3 cm，高为 4 cm，求母线长和体积。"
                  solution={[
                    "根据勾股定理，母线长 l = √(3² + 4²) = 5 cm。",
                    "底面积为 9π cm²。",
                    "体积为 ⅓ × 9π × 4 = 12π cm³。",
                  ]}
                  conclusion="母线长为 5 cm，体积为 12π cm³。"
                />
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
              <Heading
                eyebrow="COMMON MISTAKES"
                title="五、易错点提醒"
              />

              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <div className="rounded-xl bg-white p-4">
                  <strong>1. 侧面积不等于表面积。</strong>
                  <p className="mt-1 text-slate-600">
                    求表面积时，别忘了加上底面；圆柱有两个底面，
                    圆锥只有一个底面。
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <strong>2. 圆锥的高不等于母线长。</strong>
                  <p className="mt-1 text-slate-600">
                    计算侧面积使用母线长 l，计算体积使用垂直高度 h。
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <strong>3. 锥体体积要乘以 ⅓。</strong>
                  <p className="mt-1 text-slate-600">
                    棱锥和圆锥的体积，均为同底等高柱体体积的三分之一。
                  </p>
                </div>
              </div>
            </section>

            <section
              id="practice"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <Heading
                eyebrow="QUICK PRACTICE"
                title="六、课后练习"
              />

              <p className="mt-3 text-sm leading-7 text-slate-500">
                完成全部三道题后提交，查看得分与解析。
              </p>

              <div className="mt-6 space-y-6">
                {questions.map((q, index) => {
                  const selected = answers[q.id];
                  const correct = selected === q.answer;

                  return (
                    <div
                      key={q.id}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <p className="text-xs font-semibold text-blue-600">
                        练习 {index + 1} · {q.title}
                      </p>

                      <h3 className="mt-3 text-sm font-semibold leading-7 text-slate-900">
                        {mathText(q.question)}
                      </h3>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {q.options.map((option) => {
                          const chosen = selected === option.key;
                          const isCorrectOption =
                            submitted && option.key === q.answer;
                          const isWrongChoice =
                            submitted && chosen && !correct;

                          let optionStyle =
                            "border-slate-200 bg-white text-slate-600 hover:bg-slate-50";

                          if (isCorrectOption) {
                            optionStyle =
                              "border-emerald-300 bg-emerald-50 text-emerald-800";
                          } else if (isWrongChoice) {
                            optionStyle =
                              "border-red-300 bg-red-50 text-red-700";
                          } else if (chosen) {
                            optionStyle =
                              "border-blue-300 bg-blue-50 text-blue-700";
                          }

                          return (
                            <button
                              key={option.key}
                              type="button"
                              onClick={() =>
                                selectAnswer(q.id, option.key)
                              }
                              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${optionStyle}`}
                            >
                              <strong className="mr-2">
                                {option.key}.
                              </strong>
                              {mathText(option.text)}
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-4 rounded-lg bg-slate-50 p-4">
                          <p
                            className={`text-sm font-semibold ${
                              correct
                                ? "text-emerald-700"
                                : "text-red-700"
                            }`}
                          >
                            {correct
                              ? "回答正确"
                              : `回答错误，正确答案为 ${q.answer}`}
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {mathText(q.explanation)}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  disabled={Object.keys(answers).length !== questions.length}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  提交答案
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  重新作答
                </button>

                {submitted && (
                  <span className="text-sm font-semibold text-slate-700">
                    本次得分：{score} / {questions.length}
                  </span>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="KEY TAKEAWAYS"
                title="七、本节小结"
              />

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 柱体体积：V = S底h。</li>
                <li>• 锥体体积：V = ⅓S底h。</li>
                <li>• 圆柱表面积：S = 2πr² + 2πrh。</li>
                <li>• 圆锥表面积：S = πr² + πrl。</li>
                <li>• 球的表面积：S = 4πr²。</li>
                <li>• 球的体积：V = ⁴⁄₃πr³。</li>
              </ul>
            </section>

            <div className="flex flex-wrap justify-between gap-3">
              <Link
                href="/grade1/solid-geometry"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                ← 上一节：空间几何体
              </Link>

              <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-400">
                下一节：空间点、直线与平面（开发中）
              </span>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CHAPTER 08
              </p>

              <h2 className="mt-2 text-lg font-bold text-slate-900">
                立体几何初步
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                当前正在完善第二节课程。五节内容完成后，再统一接入题库与学习记录。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-2/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                课程进度：2 / 5
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                本节知识导航
              </h2>

              <div className="mt-4 space-y-2">
                {[
                  "表面积与体积的概念",
                  "常见几何体公式",
                  "典型例题",
                  "易错点提醒",
                  "课后练习",
                ].map((item, index) => (
                  <a
                    key={item}
                    href={
                      [
                        "#goals",
                        "#goals",
                        "#",
                        "#",
                        "#practice",
                      ][index]
                    }
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {String(index + 1).padStart(2, "0")}　{mathText(item)}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                学习建议
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                建议先熟悉公式中各个量的含义，再结合例题计算。
                做题时先写公式，再代入数据，最后检查单位。
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Heading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function Example({
  number,
  title,
  question,
  solution,
  conclusion,
}: {
  number: string;
  title: string;
  question: string;
  solution: string[];
  conclusion: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="text-xs font-semibold text-blue-600">
        {number}
      </p>

      <h3 className="mt-2 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {question}
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">
          解题过程
        </p>

        <ol className="mt-3 space-y-2">
          {solution.map((step, index) => (
            <li
              key={index}
              className="text-sm leading-7 text-slate-600"
            >
              {index + 1}. {mathText(step)}
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-emerald-800">
        结论：{conclusion}
      </p>
    </div>
  );
}