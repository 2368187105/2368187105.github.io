
"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "随机抽样",
    href: "/grade1/statistics/random-sampling",
  },
  {
    number: "02",
    title: "数据的收集与整理",
    href: "/grade1/statistics/data-organization",
  },
  {
    number: "03",
    title: "统计图表",
    href: "/grade1/statistics/statistical-graphs",
  },
  {
    number: "04",
    title: "数据的数字特征",
    href: "/grade1/statistics/numerical-characteristics",
  },
  {
    number: "05",
    title: "统计综合应用",
    href: "/grade1/statistics/statistical-application",
  },
];

const quizQuestions = [
  {
    id: "sampling-01",
    title: "认识总体与样本",
    question:
      "某学校有 1200 名学生，现随机抽取 60 名学生调查睡眠时间。下列说法正确的是：",
    options: [
      { key: "A", text: "总体是被抽取的 60 名学生" },
      { key: "B", text: "样本是全校 1200 名学生" },
      { key: "C", text: "总体是全校 1200 名学生，样本是抽取的 60 名学生" },
      { key: "D", text: "个体是被抽取的 60 名学生" },
    ],
    answer: "C",
    explanation:
      "总体是调查对象的全体，样本是从总体中抽取的一部分个体。本题中总体为全校 1200 名学生，样本为抽取的 60 名学生。",
  },
  {
    id: "sampling-02",
    title: "理解样本量",
    question:
      "从一个班级中随机抽取 15 名学生调查身高，这次抽样的样本量是：",
    options: [
      { key: "A", text: "班级总人数" },
      { key: "B", text: "15" },
      { key: "C", text: "学生的平均身高" },
      { key: "D", text: "学生身高的最大值" },
    ],
    answer: "B",
    explanation:
      "样本量是样本中包含的个体数量。本题抽取了 15 名学生，因此样本量为 15。",
  },
  {
    id: "sampling-03",
    title: "选择抽样方法",
    question:
      "一所学校想调查学生对食堂的满意度，已知不同年级的学生人数差异较大，希望每个年级都得到合理代表。较合适的方法是：",
    options: [
      { key: "A", text: "只调查食堂附近的学生" },
      { key: "B", text: "只调查一个班级" },
      { key: "C", text: "由调查者随意挑选学生" },
      { key: "D", text: "按年级分层，再在各层中随机抽样" },
    ],
    answer: "D",
    explanation:
      "当总体由具有不同特征的群体组成，且需要保证各群体都有代表时，可以先按年级分层，再在各层中随机抽样。这属于分层随机抽样。",
  },
  {
    id: "sampling-04",
    title: "分层抽样的计算",
    question:
      "某校高一、高二、高三分别有 500、400、300 名学生。按年级分层，从全校抽取 60 名学生进行调查。若按各年级人数比例分配样本，各年级分别应抽取多少人？",
    options: [
      { key: "A", text: "20 人、20 人、20 人" },
      { key: "B", text: "30 人、20 人、10 人" },
      { key: "C", text: "25 人、20 人、15 人" },
      { key: "D", text: "15 人、20 人、25 人" },
    ],
    answer: "C",
    explanation:
      "总体人数为 500+400+300=1200。高一抽取 60×500/1200=25 人，高二抽取 20 人，高三抽取 15 人。",
  },
  {
    id: "sampling-05",
    title: "判断抽样偏差",
    question:
      "为了了解全校学生对新校服的意见，调查者只访问了校服销售点附近的学生。这种调查最主要的问题是：",
    options: [
      { key: "A", text: "样本可能缺乏代表性，容易产生偏差" },
      { key: "B", text: "总体人数一定太少" },
      { key: "C", text: "样本量一定等于总体人数" },
      { key: "D", text: "调查结果一定完全准确" },
    ],
    answer: "A",
    explanation:
      "只访问特定地点附近的学生，可能使某些学生更容易被选中，样本不能充分代表全校学生，因此容易产生选择偏差。",
  },
];

const populationDots = Array.from({ length: 24 }, (_, index) => ({
  x: 24 + (index % 8) * 27,
  y: 24 + Math.floor(index / 8) * 27,
  selected: [2, 5, 9, 14, 18, 22].includes(index),
}));

export default function RandomSamplingPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = quizQuestions.filter(
    (question) => answers[question.id]
  ).length;

  const score = quizQuestions.filter(
    (question) => answers[question.id] === question.answer
  ).length;

  function selectAnswer(questionId: string, optionKey: string) {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionKey,
    }));
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
          <Link href="/grade1/statistics" className="hover:text-blue-600">
            统计
          </Link>
          <span>/</span>
          <span className="text-slate-700">随机抽样</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 09
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-700">
              第 1 节 · 随机抽样
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            随机抽样
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            当调查对象数量庞大时，逐一调查往往耗时耗力。通过合理抽样，
            我们可以从总体中选取部分个体进行研究，并利用样本信息了解总体特征。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["总体与个体", "样本与样本量", "简单随机抽样", "分层随机抽样"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs text-slate-600"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#knowledge"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              开始学习 ↓
            </a>
            <a
              href="#practice"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              课后练习
            </a>
          </div>
        </section>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0 space-y-6">
            <section
              id="knowledge"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING OBJECTIVES
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本节学习目标
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 理解总体、个体、样本和样本量的含义。</li>
                <li>• 理解抽样调查的基本思路及随机抽样的必要性。</li>
                <li>• 掌握简单随机抽样和分层随机抽样的基本方法。</li>
                <li>• 能根据实际调查问题选择合适的抽样方法。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY CONCEPTS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、总体、个体、样本与样本量
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                统计调查首先要明确研究对象，再根据调查目的选取合适的样本。
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "总体",
                    description: "调查对象的全体。",
                    example: "调查全校学生睡眠时间时，全校学生构成总体。",
                  },
                  {
                    title: "个体",
                    description: "总体中的每一个调查对象。",
                    example: "全校的每一名学生都是一个个体。",
                  },
                  {
                    title: "样本",
                    description: "从总体中抽取的一部分个体。",
                    example: "随机抽取的 60 名学生构成样本。",
                  },
                  {
                    title: "样本量",
                    description: "样本中包含的个体数量。",
                    example: "抽取 60 名学生，样本量就是 60。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                  >
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      例：{item.example}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  记忆方法
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  总体是“全部”，个体是“一个”，样本是“抽取的一部分”，
                  样本量是“样本中有多少个个体”。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                VISUAL EXPLANATION
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、从总体中抽取样本
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                下图用不同颜色标出被抽取的个体。实际调查中，应尽量避免只选择
                容易接触到的人，而要采用合理的抽样方法。
              </p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4 sm:p-6">
                <svg
                  viewBox="0 0 580 255"
                  role="img"
                  aria-label="从总体随机抽取样本的示意图"
                  className="h-auto w-full"
                >
                  <text
                    x="115"
                    y="20"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="#334155"
                  >
                    总体
                  </text>
                  <text
                    x="455"
                    y="20"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="#334155"
                  >
                    样本
                  </text>

                  <rect
                    x="10"
                    y="32"
                    width="215"
                    height="155"
                    rx="14"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                  />

                  {populationDots.map((dot, index) => (
                    <circle
                      key={index}
                      cx={22 + (index % 8) * 26}
                      cy={49 + Math.floor(index / 8) * 42}
                      r="7"
                      fill={dot.selected ? "#2563eb" : "#cbd5e1"}
                    />
                  ))}

                  <path
                    d="M 247 100 L 326 100"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 315 90 L 327 100 L 315 110"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text
                    x="286"
                    y="81"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#2563eb"
                  >
                    随机抽取
                  </text>

                  <rect
                    x="355"
                    y="32"
                    width="215"
                    height="155"
                    rx="14"
                    fill="#ffffff"
                    stroke="#bfdbfe"
                  />

                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <circle
                      key={index}
                      cx={385 + (index % 3) * 65}
                      cy={67 + Math.floor(index / 3) * 72}
                      r="11"
                      fill="#2563eb"
                    />
                  ))}

                  <text
                    x="115"
                    y="211"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#64748b"
                  >
                    调查对象的全体
                  </text>
                  <text
                    x="455"
                    y="211"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#64748b"
                  >
                    抽取的一部分个体
                  </text>

                  <circle cx="210" cy="239" r="5" fill="#2563eb" />
                  <text x="221" y="243" fontSize="11" fill="#64748b">
                    被抽取的个体
                  </text>
                  <circle cx="360" cy="239" r="5" fill="#cbd5e1" />
                  <text x="371" y="243" fontSize="11" fill="#64748b">
                    未被抽取的个体
                  </text>
                </svg>
              </div>

              <p className="mt-3 text-xs leading-6 text-slate-400">
                示意图仅用于说明总体与样本的关系，圆点数量不代表实际调查比例。
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                SAMPLING METHODS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、常见的抽样方法
              </h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                      01
                    </span>
                    <h3 className="font-bold text-slate-900">
                      简单随机抽样
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    通过抽签、随机数等方法，从总体中随机抽取个体。
                    在符合简单随机抽样条件的情况下，总体中每个个体都有相同的被抽取机会。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    例：将全班每名学生的编号写在签上，充分混合后随机抽取 5 个编号。
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                      02
                    </span>
                    <h3 className="font-bold text-slate-900">
                      分层随机抽样
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    先按照某种特征将总体分成若干层，再在各层中分别随机抽样。
                    当各层人数不同且希望各层都得到代表时，这种方法尤其有用。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    例：调查全校学生时，先按年级分层，再在各年级中随机抽取学生。
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                      03
                    </span>
                    <h3 className="font-bold text-slate-900">
                      系统抽样
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    将总体中的个体按一定顺序排列，在确定起始位置后，按照固定间隔抽取个体。
                    实际使用时需要考虑排列顺序是否会影响样本的代表性。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    例：在合适的排列条件下，从名单中按固定间隔抽取学生。
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、典型例题：分层抽样的样本分配
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  某校高一、高二、高三分别有 500、400、300 名学生。
                  若按各年级人数比例，从全校抽取 60 名学生进行调查，
                  求各年级应抽取的人数。
                </p>
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                解题步骤
              </h3>

              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                <p>
                  <span className="font-semibold text-blue-600">第一步：</span>
                  求总体人数：500 + 400 + 300 = 1200。
                </p>
                <p>
                  <span className="font-semibold text-blue-600">第二步：</span>
                  计算各年级的抽样比例：60 ÷ 1200 = 0.05。
                </p>
                <p>
                  <span className="font-semibold text-blue-600">第三步：</span>
                  高一抽取 500 × 0.05 = 25 人；高二抽取 400 × 0.05 = 20 人；
                  高三抽取 300 × 0.05 = 15 人。
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  答案
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  高一 25 人，高二 20 人，高三 15 人，共 60 人。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
              <p className="text-xs font-semibold tracking-wide text-amber-700">
                COMMON MISTAKES
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、易错点提醒
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>
                  <strong>1. 不要混淆总体和样本。</strong>
                  总体是全部调查对象，样本只是其中的一部分。
                </li>
                <li>
                  <strong>2. 样本量不是总体人数。</strong>
                  样本量表示实际抽取的个体数量。
                </li>
                <li>
                  <strong>3. 随机抽样不等于随便抽样。</strong>
                  应按照明确的抽样规则实施，减少人为选择偏差。
                </li>
                <li>
                  <strong>4. 样本量大不代表一定有代表性。</strong>
                  如果抽样方式不合理，即使样本较大，也可能产生偏差。
                </li>
              </ul>
            </section>

            <section
              id="practice"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                INTERACTIVE PRACTICE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                六、课后练习
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 {quizQuestions.length} 道题。选择每道题的答案后提交，
                系统将自动判分并显示解析。
              </p>

              <div className="mt-5 space-y-5">
                {quizQuestions.map((question, index) => {
                  const selected = answers[question.id];
                  const isCorrect = selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-xl border border-slate-200 p-4 sm:p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-slate-400">
                            {question.title}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold leading-7 text-slate-900">
                            {question.question}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2">
                        {question.options.map((option) => {
                          const isSelected = selected === option.key;
                          const isAnswer = option.key === question.answer;

                          let optionStyle =
                            "border-slate-200 bg-white hover:border-blue-200";

                          if (isSelected) {
                            optionStyle = "border-blue-500 bg-blue-50";
                          }

                          if (submitted && isAnswer) {
                            optionStyle = "border-emerald-300 bg-emerald-50";
                          } else if (submitted && isSelected && !isCorrect) {
                            optionStyle = "border-red-200 bg-red-50";
                          }

                          return (
                            <button
                              key={option.key}
                              type="button"
                              disabled={submitted}
                              onClick={() =>
                                selectAnswer(question.id, option.key)
                              }
                              className={`flex items-start gap-3 rounded-xl border p-3 text-left text-sm leading-6 transition disabled:cursor-default ${optionStyle}`}
                            >
                              <span className="font-semibold text-slate-500">
                                {option.key}.
                              </span>
                              <span className="text-slate-700">
                                {option.text}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div
                          className={`mt-4 rounded-xl p-4 ${
                            isCorrect
                              ? "bg-emerald-50 text-emerald-800"
                              : "bg-amber-50 text-amber-900"
                          }`}
                        >
                          <p className="text-sm font-semibold">
                            {isCorrect
                              ? "回答正确"
                              : `回答错误，正确答案：${question.answer}`}
                          </p>
                          <p className="mt-2 text-sm leading-7">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                  <p className="text-sm font-medium text-slate-600">
                    本次练习成绩
                  </p>
                  <p className="mt-2 text-3xl font-bold text-blue-600">
                    {score} / {quizQuestions.length}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {score === quizQuestions.length
                      ? "全部答对！你已经掌握本节的主要知识点。"
                      : score >= 3
                        ? "整体掌握不错，建议重新检查答错题目的解析。"
                        : "建议复习总体、样本和抽样方法后再进行一次练习。"}
                  </p>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {!submitted ? (
                  <button
                    type="button"
                    disabled={answeredCount !== quizQuestions.length}
                    onClick={() => setSubmitted(true)}
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    提交答案（{answeredCount}/{quizQuestions.length}）
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    重新作答
                  </button>
                )}

                <Link
                  href="/grade1/statistics"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  返回统计目录
                </Link>
              </div>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/statistics"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 返回第 09 章目录
              </Link>

              <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-400">
                下一节：数据的收集与整理（待开发）
              </span>
            </div>
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CHAPTER 09
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-900">
                统计
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                本章共五节，依次学习抽样、数据整理、统计图表和数字特征。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 1 / 5 节
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本章课程目录</h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const active = lesson.number === "01";

                  return (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        active
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            active ? "text-blue-600" : "text-slate-400"
                          }`}
                        >
                          {lesson.number}
                        </span>
                        <div className="min-w-0 flex-1">
                          {active ? (
                            <p className="text-sm font-semibold leading-6 text-slate-900">
                              {lesson.title}
                            </p>
                          ) : (
                            <p className="text-sm leading-6 text-slate-600">
                              {lesson.title}
                            </p>
                          )}

                          <p className="mt-1 text-xs text-slate-400">
                            {active ? "正在学习" : "待开发"}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <h2 className="font-bold text-slate-900">核心知识</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>总体：调查对象的全体。</p>
                <p>样本：从总体中抽取的一部分个体。</p>
                <p>样本量：样本所含个体的数量。</p>
                <p>分层抽样：分层后在各层中分别随机抽样。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习进度</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                已完成本节页面中的知识阅读与练习模块。练习成绩目前在本页面内计算，
                尚未接入网站的统一学习记录。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
