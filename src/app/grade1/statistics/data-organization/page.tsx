
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

const exampleData = [
  { score: 60, frequency: 1 },
  { score: 70, frequency: 2 },
  { score: 80, frequency: 3 },
  { score: 90, frequency: 4 },
];

const quizQuestions = [
  {
    id: "organization-01",
    title: "数据整理的目的",
    question: "收集到一组杂乱的数据后，首先进行分类、排序和整理，主要目的是：",
    options: [
      { key: "A", text: "保证所有数据都相等" },
      { key: "B", text: "让数据更有规律，便于分析和描述" },
      { key: "C", text: "使数据的总量自动增加" },
      { key: "D", text: "保证调查结果一定正确" },
    ],
    answer: "B",
    explanation:
      "整理数据可以使数据结构更加清晰，便于统计数量、制作表格和图表，并进一步分析数据特征，但不能保证调查结果一定正确。",
  },
  {
    id: "organization-02",
    title: "理解频数",
    question:
      "一组数据中，数值 80 出现了 6 次，那么数值 80 的频数是：",
    options: [
      { key: "A", text: "80" },
      { key: "B", text: "6" },
      { key: "C", text: "6%" },
      { key: "D", text: "数据的平均数" },
    ],
    answer: "B",
    explanation:
      "频数是某个数值或某类数据出现的次数。80 出现了 6 次，因此对应的频数是 6。",
  },
  {
    id: "organization-03",
    title: "计算频率",
    question:
      "某个数值在一组共 40 个数据中出现了 10 次，它的频率是：",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "40%" },
      { key: "C", text: "25%" },
      { key: "D", text: "4%" },
    ],
    answer: "C",
    explanation:
      "频率等于频数除以数据总数，即 10÷40=0.25=25%。",
  },
  {
    id: "organization-04",
    title: "频率之和",
    question:
      "将一组完整数据划分成若干个互不重叠且覆盖全部数据的类别，各类别频率之和为：",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "数据总数" },
      { key: "C", text: "不一定相同" },
      { key: "D", text: "1" },
    ],
    answer: "D",
    explanation:
      "所有类别的频数之和等于数据总数，因此所有类别的频率之和等于数据总数除以数据总数，即 1，也就是 100%。",
  },
  {
    id: "organization-05",
    title: "整理数据的应用",
    question:
      "调查一个班级学生最喜欢的运动项目，并统计各项目对应的人数。最适合首先制作的是：",
    options: [
      { key: "A", text: "分类统计表" },
      { key: "B", text: "只记录一个学生的答案" },
      { key: "C", text: "不整理，直接得出结论" },
      { key: "D", text: "只记录调查日期" },
    ],
    answer: "A",
    explanation:
      "运动项目属于分类数据，可以先按照项目分类并统计各类人数，再根据整理后的数据制作合适的统计图表。",
  },
];

export default function DataOrganizationPage() {
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
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade1" className="transition hover:text-blue-600">
            高一数学
          </Link>
          <span>/</span>
          <Link
            href="/grade1/statistics"
            className="transition hover:text-blue-600"
          >
            统计
          </Link>
          <span>/</span>
          <span className="text-slate-700">数据的收集与整理</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 09
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-700">
              第 2 节 · 数据的收集与整理
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            数据的收集与整理
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            数据分析始于可靠的数据。学习常见的数据收集方式，掌握数据分类、
            频数统计和频率计算的方法，将原始数据整理成清晰、易于理解的形式。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["数据收集", "数据分类", "频数与频率", "统计表"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
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
                <li>• 了解问卷调查、观察、实验和已有资料等数据来源。</li>
                <li>• 掌握原始数据的分类、排序和统计方法。</li>
                <li>• 理解频数、频率的含义及两者之间的关系。</li>
                <li>• 能够根据数据制作简单的统计表并解释结果。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                DATA COLLECTION
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、数据如何收集
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                收集数据之前，需要明确调查目的、调查对象和需要记录的变量。
                不同问题适合采用不同的数据收集方式。
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "问卷调查",
                    description: "通过统一的问题收集受访者的回答。",
                    example: "调查学生每天使用手机的时间。",
                  },
                  {
                    title: "观察记录",
                    description: "观察实际情况并按照规则记录数据。",
                    example: "记录某路口不同时段的车流量。",
                  },
                  {
                    title: "实验测量",
                    description: "通过实验或仪器测量获得数据。",
                    example: "测量不同材料的长度或质量。",
                  },
                  {
                    title: "已有资料",
                    description: "从可靠的记录、数据库或公开资料中获取数据。",
                    example: "整理历年气温或降水量记录。",
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
                      例如：{item.example}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  注意
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  问题设计应尽量清楚、中立；记录时应统一口径，避免遗漏、
                  重复记录或人为选择性记录。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                DATA WORKFLOW
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、数据整理的基本流程
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  {
                    number: "01",
                    title: "收集原始数据",
                    description: "按照调查方案记录每一个有效观测结果。",
                  },
                  {
                    number: "02",
                    title: "检查与分类",
                    description: "核对遗漏和重复情况，根据数据类型进行分类。",
                  },
                  {
                    number: "03",
                    title: "统计频数与频率",
                    description: "计算每一类出现的次数及其所占比例。",
                  },
                  {
                    number: "04",
                    title: "制作统计表",
                    description: "将分类、频数和频率整理成结构清楚的表格。",
                  },
                  {
                    number: "05",
                    title: "解释数据",
                    description: "结合调查目的描述主要现象，并注意结论的适用范围。",
                  },
                ].map((item, index) => (
                  <div key={item.number}>
                    <div className="flex gap-4 rounded-xl border border-slate-100 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                        {item.number}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {index < 4 && (
                      <div className="flex h-6 items-center pl-8">
                        <div className="h-full border-l border-dashed border-blue-200" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                FREQUENCY AND RELATIVE FREQUENCY
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、频数与频率
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                  <h3 className="font-bold text-slate-900">频数</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    某个数值或某类数据出现的次数。
                  </p>
                  <div className="mt-4 rounded-lg bg-white px-3 py-3 text-sm text-slate-700">
                    例如：80 分出现 3 次，频数就是 3。
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                  <h3 className="font-bold text-slate-900">频率</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    某个数值或某类数据出现的次数占数据总数的比例。
                  </p>
                  <div className="mt-4 rounded-lg bg-white px-3 py-3 text-sm text-slate-700">
                    频率 = 频数 ÷ 数据总数
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">
                  两个重要关系
                </p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <p>所有类别的频数之和 = 数据总数。</p>
                  <p>所有类别的频率之和 = 1（即 100%）。</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、典型例题：成绩统计表
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  某次测验抽取 10 名学生的成绩如下：
                  60、70、70、80、80、80、90、90、90、90。
                  请整理成频数与频率统计表。
                </p>
              </div>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[360px] border-collapse text-sm">
                  <thead className="bg-blue-50 text-slate-700">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold">
                        成绩
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                        频数
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                        频率
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exampleData.map((item) => (
                      <tr key={item.score}>
                        <td className="border-b border-slate-100 px-4 py-3">
                          {item.score}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-center">
                          {item.frequency}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-center">
                          {Math.round((item.frequency / 10) * 100)}%
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 font-semibold">
                      <td className="px-4 py-3">合计</td>
                      <td className="px-4 py-3 text-center">10</td>
                      <td className="px-4 py-3 text-center">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-6 font-semibold text-slate-900">
                频数分布图
              </h3>

              <div className="mt-3 rounded-xl bg-slate-50 p-4">
                <svg
                  viewBox="0 0 440 240"
                  role="img"
                  aria-label="不同成绩对应频数的柱状图"
                  className="h-auto w-full"
                >
                  {[0, 1, 2, 3, 4].map((tick) => {
                    const y = 184 - tick * 36;

                    return (
                      <g key={tick}>
                        <line
                          x1="48"
                          y1={y}
                          x2="412"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                        <text
                          x="35"
                          y={y + 4}
                          textAnchor="end"
                          fontSize="11"
                          fill="#64748b"
                        >
                          {tick}
                        </text>
                      </g>
                    );
                  })}

                  <line
                    x1="48"
                    y1="184"
                    x2="412"
                    y2="184"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {exampleData.map((item, index) => {
                    const x = 76 + index * 88;
                    const height = item.frequency * 36;

                    return (
                      <g key={item.score}>
                        <rect
                          x={x}
                          y={184 - height}
                          width="46"
                          height={height}
                          rx="5"
                          fill="#3b82f6"
                        />
                        <text
                          x={x + 23}
                          y={174 - height}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#1e40af"
                        >
                          {item.frequency}
                        </text>
                        <text
                          x={x + 23}
                          y="204"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#475569"
                        >
                          {item.score}
                        </text>
                      </g>
                    );
                  })}

                  <text x="15" y="20" fontSize="11" fill="#64748b">
                    频数
                  </text>
                  <text
                    x="230"
                    y="230"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    成绩（分）
                  </text>
                </svg>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  解题思路
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  先找出不同的成绩，再统计各成绩出现的次数，最后用每个频数除以
                  10 得到对应频率。表格中频数合计为 10，频率合计为 100%。
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
                  <strong>1. 频数和频率不是同一个概念。</strong>
                  频数是次数，频率是所占比例。
                </li>
                <li>
                  <strong>2. 计算频率时不要忘记除以总数。</strong>
                  分母应是与所统计数据对应的总数量。
                </li>
                <li>
                  <strong>3. 分类时避免遗漏和重复。</strong>
                  统计类别应清楚，确保每条数据按规则被计入。
                </li>
                <li>
                  <strong>4. 统计表应标注清楚名称与单位。</strong>
                  这样才能正确理解统计结果。
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
                共 {quizQuestions.length} 道题。完成所有题目后提交，系统会自动判分并显示解析。
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
                            optionStyle =
                              "border-emerald-300 bg-emerald-50";
                          } else if (
                            submitted &&
                            isSelected &&
                            !isCorrect
                          ) {
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
                        ? "整体掌握不错，建议复习答错题目的解析。"
                        : "建议重新学习频数、频率和数据整理流程后再练习。"}
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
                href="/grade1/statistics/random-sampling"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：随机抽样
              </Link>

              <Link
                href="/grade1/statistics/statistical-graphs"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：统计图表 →
              </Link>
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
                从抽样调查到数据分析，逐步掌握统计学的基本方法。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-2/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 2 / 5 节
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本章课程目录</h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const active = lesson.number === "02";

                  return (
                    <Link
                      key={lesson.number}
                      href={lesson.href}
                      className={`block rounded-xl border p-3 transition ${
                        active
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white hover:border-blue-100"
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
                          <p
                            className={`text-sm leading-6 ${
                              active
                                ? "font-semibold text-slate-900"
                                : "text-slate-600"
                            }`}
                          >
                            {lesson.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {active ? "正在学习" : "课程入口"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <h2 className="font-bold text-slate-900">核心知识</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>频数：某类数据出现的次数。</p>
                <p>频率：频数与数据总数的比值。</p>
                <p>频数之和：等于数据总数。</p>
                <p>频率之和：等于 1，即 100%。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习提示</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                先核对原始数据，再统计各类频数，最后计算频率。表格中的合计项可以帮助你检查计算是否正确。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
