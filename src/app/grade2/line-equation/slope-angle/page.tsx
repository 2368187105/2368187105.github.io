
"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Option = {
  key: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  title: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "slope-angle-001",
    title: "根据斜率判断倾斜角范围",
    question: "若一条直线的斜率 k < 0，则它的倾斜角 α 的取值范围是：",
    options: [
      { key: "A", text: "0° < α < 90°" },
      { key: "B", text: "α = 90°" },
      { key: "C", text: "90° < α < 180°" },
      { key: "D", text: "α = 0°" },
    ],
    answer: "C",
    explanation:
      "当 0° < α < 90° 时，tan α > 0；当 90° < α < 180° 时，tan α < 0。斜率 k = tan α，且 k < 0，因此 90° < α < 180°，选 C。α = 90° 时斜率不存在。",
  },
  {
    id: "slope-angle-002",
    title: "利用两点坐标求负斜率",
    question: "已知 A(-1, 4)、B(3, -4)，则直线 AB 的斜率为：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "-1" },
      { key: "C", text: "-2" },
      { key: "D", text: "1" },
    ],
    answer: "C",
    explanation:
      "由两点求斜率公式，k = (y₂ - y₁) / (x₂ - x₁) = (-4 - 4) / (3 - (-1)) = -8 / 4 = -2，选 C。斜率为负也说明这条直线从左向右呈下降趋势。",
  },
  {
    id: "slope-angle-003",
    title: "由斜率反求倾斜角",
    question: "一条直线的斜率为 √3，且倾斜角 α 满足 0° ≤ α < 180°，则 α 等于：",
    options: [
      { key: "A", text: "30°" },
      { key: "B", text: "60°" },
      { key: "C", text: "120°" },
      { key: "D", text: "150°" },
    ],
    answer: "B",
    explanation:
      "由 k = tan α，得 tan α = √3。在 0° ≤ α < 180° 的范围内，tan 60° = √3，因此倾斜角 α = 60°，选 B。",
  },
];

const lessonSections = [
  { number: "1.1", href: "/grade2/line-equation/slope-angle", title: "直线的斜率与倾斜角", active: true },
  { number: "1.2", href: "/grade2/line-equation/equation", title: "直线的方程", active: false },
  { number: "1.3", href: "/grade2/line-equation/parallel-perpendicular", title: "两条直线的平行与垂直", active: false },
  { number: "1.4", href: "/grade2/line-equation/intersection", title: "两条直线的交点", active: false },
  { number: "1.5", href: "/grade2/line-equation/distance", title: "平面上的距离", active: false },
];

export default function SlopeAnglePage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = quizQuestions.filter(
    (question) => Boolean(answers[question.id])
  ).length;

  const score = quizQuestions.filter(
    (question) => answers[question.id] === question.answer
  ).length;

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade2" className="transition hover:text-blue-600">
            高二数学
          </Link>
          <span>/</span>
          <Link
            href="/grade2/line-equation"
            className="transition hover:text-blue-600"
          >
            直线与方程
          </Link>
          <span>/</span>
          <span className="text-slate-700">直线的斜率与倾斜角</span>
        </nav>

        {/* 课程介绍 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 01
            </span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              LESSON 1.1
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            直线的斜率与倾斜角
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从直线的倾斜程度出发，理解倾斜角与斜率的含义，掌握两者之间的关系，
            学会利用直线上两点的坐标求斜率，为后续学习直线方程打下基础。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#knowledge"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              开始学习
            </a>
            <Link
              href="/grade2/line-equation"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200"
            >
              返回章节目录
            </Link>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-6">
            {/* 学习目标 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING OBJECTIVES
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、本节学习目标
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 理解直线倾斜角的定义及其取值范围。</li>
                <li>• 理解斜率的几何意义，掌握斜率与倾斜角的关系。</li>
                <li>• 掌握利用直线上两点坐标计算斜率的方法。</li>
                <li>• 能够判断水平直线和竖直直线的斜率。</li>
              </ul>
            </section>

            {/* 知识点一 */}
            <section
              id="knowledge"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                CORE CONCEPTS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、直线的倾斜角
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                在平面直角坐标系中，以 x 轴正方向为始边，按照逆时针方向旋转到直线方向
                所形成的角，称为这条直线的倾斜角，通常记为 α。
              </p>

              <div className="mt-4 rounded-xl bg-blue-50/70 p-4">
                <p className="text-sm font-semibold text-slate-800">
                  倾斜角的取值范围
                </p>
                <p className="mt-2 text-xl font-semibold text-blue-700">
                  0° ≤ α &lt; 180°
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  水平直线的倾斜角为 0°；竖直直线的倾斜角为 90°。
                </p>
              </div>

              {/* 倾斜角示意图 */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-white p-3 sm:p-5">
                <svg
                  viewBox="0 0 420 260"
                  role="img"
                  aria-label="直线倾斜角示意图"
                  className="mx-auto block w-full max-w-lg"
                >
                  <defs>
                    <marker
                      id="axis-arrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
                    </marker>
                  </defs>

                  <line
                    x1="30"
                    y1="190"
                    x2="390"
                    y2="190"
                    stroke="#64748b"
                    strokeWidth="1.6"
                    markerEnd="url(#axis-arrow)"
                  />
                  <line
                    x1="70"
                    y1="230"
                    x2="70"
                    y2="24"
                    stroke="#64748b"
                    strokeWidth="1.6"
                    markerEnd="url(#axis-arrow)"
                  />
                  <line
                    x1="125"
                    y1="190"
                    x2="340"
                    y2="75"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 185 190 A 60 60 0 0 0 177 160"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2.5"
                  />
                  <circle cx="125" cy="190" r="4" fill="#2563eb" />

                  <text x="395" y="194" fontSize="14" fill="#475569">
                    x
                  </text>
                  <text x="57" y="19" fontSize="14" fill="#475569">
                    y
                  </text>
                  <text x="347" y="72" fontSize="14" fill="#2563eb">
                    l
                  </text>
                  <text x="187" y="169" fontSize="17" fill="#0d9488">
                    α
                  </text>
                  <text x="195" y="215" fontSize="12" fill="#64748b">
                    x 轴正方向
                  </text>
                  <text x="82" y="247" fontSize="12" fill="#64748b">
                    倾斜角示意图（非精确比例）
                  </text>
                </svg>
              </div>
            </section>

            {/* 知识点二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY FORMULAS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、直线的斜率
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                斜率用于描述直线的倾斜程度。对于倾斜角不等于 90° 的直线，
                斜率等于倾斜角的正切值。
              </p>

              <div className="mt-4 rounded-xl bg-slate-50 p-5 text-center">
                <p className="text-sm text-slate-500">斜率与倾斜角的关系</p>
                <p className="mt-3 text-2xl font-semibold text-blue-700">
                  k = tan α
                </p>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  适用于 α ≠ 90° 的直线
                </p>
              </div>

              <h3 className="mt-6 font-bold text-slate-900">
                两点求斜率公式
              </h3>
              <p className="mt-3 text-sm leading-8 text-slate-600">
                已知直线上两个不同的点 A(x₁, y₁)、B(x₂, y₂)，且 x₁ ≠ x₂，
                则直线 AB 的斜率为：
              </p>

              <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-center">
                <p className="text-2xl font-semibold text-blue-700">
                  k = (y₂ − y₁) / (x₂ − x₁)
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  特别注意
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-900/80">
                  当直线竖直时，x₁ = x₂，斜率公式的分母为 0，因此斜率不存在。
                  不要将竖直直线的斜率误认为 0。
                </p>
              </div>
            </section>

            {/* 典型例题 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLES
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、典型例题
              </h2>

              <div className="mt-5 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">
                  例题 1：已知倾斜角求斜率
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  一条直线的倾斜角为 135°，求这条直线的斜率。
                </p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-700">
                    查看解答
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    根据 k = tan α，得 k = tan 135° = −1。
                    因此，这条直线的斜率为 −1。
                  </p>
                </details>
              </div>

              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">
                  例题 2：利用两点坐标求斜率
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  已知 A(1, 2)、B(3, 6)，求直线 AB 的斜率。
                </p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-700">
                    查看解答
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    k = (6 − 2) / (3 − 1) = 4 / 2 = 2。
                    因此，直线 AB 的斜率为 2。
                  </p>
                </details>
              </div>

              <div className="mt-6 border-l-2 border-blue-200 pl-4">
                <h3 className="font-bold leading-7 text-slate-900">
                  例题 3：判断竖直直线的斜率
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  直线 x = 2 的斜率是多少？
                </p>
                <details className="mt-3 rounded-xl bg-slate-50 p-4">
                  <summary className="cursor-pointer text-sm font-medium text-blue-700">
                    查看解答
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    直线 x = 2 平行于 y 轴，属于竖直直线，倾斜角为 90°，
                    所以斜率不存在。
                  </p>
                </details>
              </div>
            </section>

            {/* 课后练习 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                AFTER-CLASS PRACTICE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、课后练习
              </h2>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="font-medium leading-7 text-slate-800">
                    1. 一条直线的倾斜角为 0°，它的斜率是多少？
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-blue-600">
                      查看答案与解析
                    </summary>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      k = tan 0° = 0，因此斜率为 0。
                    </p>
                  </details>
                </div>

                <div>
                  <p className="font-medium leading-7 text-slate-800">
                    2. 已知 A(2, 1)、B(5, 7)，求直线 AB 的斜率。
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-blue-600">
                      查看答案与解析
                    </summary>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      k = (7 − 1) / (5 − 2) = 6 / 3 = 2。
                    </p>
                  </details>
                </div>

                <div>
                  <p className="font-medium leading-7 text-slate-800">
                    3. 直线的倾斜角为 150°，求它的斜率。
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-blue-600">
                      查看答案与解析
                    </summary>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{mathText("k = tan 150° = −1 / √3。")}</p>
                  </details>
                </div>

                <div>
                  <p className="font-medium leading-7 text-slate-800">
                    4. 直线 x = 5 的斜率是 0、1，还是不存在？
                  </p>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-blue-600">
                      查看答案与解析
                    </summary>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      斜率不存在。直线 x = 5 是竖直直线。
                    </p>
                  </details>
                </div>
              </div>
            </section>

            {/* 交互式选择题：暂不接入统一题库 */}
            <section
              id="lesson-quiz"
              className="scroll-mt-6 rounded-2xl border border-blue-100 bg-white p-6 sm:p-7"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE CHECK
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                六、课堂选择题
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 3 道单项选择题。完成全部题目后提交，即可查看得分和解析。
              </p>

              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, index) => (
                  <article
                    key={question.id}
                    className="rounded-xl border border-slate-100 p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold leading-7 text-slate-900">
                          {question.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {mathText(question.question)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {question.options.map((option) => {
                        const selected = answers[question.id] === option.key;
                        const isCorrect = option.key === question.answer;

                        let optionStyle =
                          "border-slate-200 bg-white hover:border-blue-300";

                        if (submitted && isCorrect) {
                          optionStyle = "border-emerald-300 bg-emerald-50";
                        } else if (submitted && selected && !isCorrect) {
                          optionStyle = "border-red-300 bg-red-50";
                        } else if (selected) {
                          optionStyle = "border-blue-500 bg-blue-50";
                        }

                        return (
                          <label
                            key={option.key}
                            className={`flex items-start gap-3 rounded-xl border p-3 transition ${optionStyle} ${
                              submitted ? "cursor-default" : "cursor-pointer"
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option.key}
                              checked={selected}
                              disabled={submitted}
                              onChange={() =>
                                setAnswers((previous) => ({
                                  ...previous,
                                  [question.id]: option.key,
                                }))
                              }
                              className="mt-1 accent-blue-600"
                            />
                            <span className="flex-1 text-sm leading-6 text-slate-700">
                              {option.key}. {mathText(option.text)}
                            </span>
                            {submitted && isCorrect && (
                              <span className="shrink-0 text-xs font-medium text-emerald-700">
                                正确答案
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p
                          className={`text-sm font-semibold ${
                            answers[question.id] === question.answer
                              ? "text-emerald-700"
                              : "text-red-600"
                          }`}
                        >
                          {answers[question.id] === question.answer
                            ? "回答正确"
                            : `回答错误，正确答案是 ${question.answer}`}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {mathText(question.explanation)}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {!submitted ? (
                <div className="mt-6">
                  <p className="mb-3 text-sm text-slate-500">
                    已完成 {answeredCount}/{quizQuestions.length} 道题
                  </p>
                  <button
                    type="button"
                    disabled={answeredCount !== quizQuestions.length}
                    onClick={() => setSubmitted(true)}
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    提交答案
                  </button>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                  <p className="text-sm text-slate-600">本次练习成绩</p>
                  <p className="mt-2 text-3xl font-bold text-blue-700">
                    {score}/{quizQuestions.length}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    正确率：
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </p>
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300"
                  >
                    重新作答
                  </button>
                </div>
              )}
            </section>

            {/* 本节小结 */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY TAKEAWAYS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                七、本节小结
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 倾斜角 α 的取值范围为 0° ≤ α &lt; 180°。</li>
                <li>• 当 α 不等于 90° 时，斜率 k = tan α。</li>
                <li>• 两点横坐标不同时，可以利用两点坐标求斜率。</li>
                <li>• 水平直线的斜率为 0，竖直直线的斜率不存在。</li>
              </ul>
            </section>

            {/* 课程导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade2/line-equation"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-blue-200"
              >
                ← 返回本章目录
              </Link>

              <Link href="/grade2/line-equation/equation" className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                下一节：直线的方程 →
              </Link>
            </div>
          </div>

          {/* 右侧学习导航 */}
          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING PATH
              </p>
              <h2 className="mt-2 font-bold text-slate-900">
                本章学习路线
              </h2>

              <div className="mt-5 space-y-4">
                {lessonSections.map((lesson) => (
                  <div
                    key={lesson.number}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`flex h-8 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        lesson.active
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {lesson.number}
                    </span>
                    <div>
                      <Link href={lesson.href} className="text-sm font-medium leading-6 text-slate-800 hover:text-blue-600">
                        {lesson.title}
                      </Link>
                      <p
                        className={`mt-1 text-xs ${
                          lesson.active
                            ? "text-emerald-600"
                            : "text-slate-400"
                        }`}
                      >
                        {lesson.active ? "当前学习" : "已开放"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">核心公式</h2>

              <div className="mt-4 border-b border-slate-100 pb-4">
                <p className="text-xs text-slate-500">斜率与倾斜角</p>
                <p className="mt-2 text-lg font-semibold text-blue-700">
                  k = tan α
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-500">两点求斜率</p>
                <p className="mt-2 text-lg font-semibold text-blue-700">
                  k = (y₂ − y₁) / (x₂ − x₁)
                </p>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                使用两点求斜率公式时，必须满足 x₁ ≠ x₂。
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习建议</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                先理解倾斜角和斜率的关系，再熟练运用两点求斜率公式。
                完成课堂选择题后，重点检查容易混淆的竖直直线与水平直线。
              </p>
              <a
                href="#lesson-quiz"
                className="mt-4 inline-flex text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                前往课堂选择题 →
              </a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
