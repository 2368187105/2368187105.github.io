
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

const surveyData = [
  { interval: "10–19", count: 3 },
  { interval: "20–29", count: 5 },
  { interval: "30–39", count: 1 },
  { interval: "40–49", count: 1 },
];

const readingData = [10, 15, 15, 20, 20, 20, 25, 25, 30, 40];

const quizQuestions = [
  {
    id: "application-01",
    title: "设计调查方案",
    question:
      "学校想了解全校学生每天的课外阅读时间。以下哪种调查方式更合理？",
    options: [
      {
        key: "A",
        text: "只调查图书馆里正在阅读的学生",
      },
      {
        key: "B",
        text: "只调查自己班级的学生",
      },
      {
        key: "C",
        text: "从全校学生中合理抽取具有代表性的样本",
      },
      {
        key: "D",
        text: "只调查阅读时间最长的学生",
      },
    ],
    answer: "C",
    explanation:
      "调查对象应尽可能具有代表性。只调查图书馆中的学生或阅读时间较长的学生，容易产生选择偏差，不能充分代表全校学生。",
  },
  {
    id: "application-02",
    title: "计算样本比例",
    question:
      "随机调查 200 名学生，其中 50 人每天课外阅读不少于 30 分钟。样本中符合条件的学生所占比例为：",
    options: [
      { key: "A", text: "15%" },
      { key: "B", text: "20%" },
      { key: "C", text: "25%" },
      { key: "D", text: "40%" },
    ],
    answer: "C",
    explanation:
      "样本比例为 50÷200=0.25，即 25%。这里计算的是样本中符合条件的学生所占比例。",
  },
  {
    id: "application-03",
    title: "选择统计图表",
    question:
      "为了观察某班学生连续 7 天每天的平均阅读时间如何变化，最适合使用：",
    options: [
      { key: "A", text: "折线统计图" },
      { key: "B", text: "扇形统计图" },
      { key: "C", text: "只显示总人数的表格" },
      { key: "D", text: "不整理数据，直接判断" },
    ],
    answer: "A",
    explanation:
      "折线统计图适合观察数据随时间变化的趋势。连续 7 天的阅读时间具有时间顺序，因此可以用折线统计图呈现。",
  },
  {
    id: "application-04",
    title: "分析数据特征",
    question:
      "一组数据为 10、15、15、20、20、20、25。以下说法正确的是：",
    options: [
      { key: "A", text: "平均数为 20" },
      { key: "B", text: "中位数为 15" },
      { key: "C", text: "众数为 20" },
      { key: "D", text: "极差为 20" },
    ],
    answer: "C",
    explanation:
      "20 出现了 3 次，比其他数据出现的次数都多，因此众数为 20。平均数为 125÷7，中位数为第 4 个数 20，极差为 25−10=15。",
  },
  {
    id: "application-05",
    title: "合理解释调查结论",
    question:
      "从某校合理抽取的 200 名学生中，发现 60% 的学生每天阅读不少于 20 分钟。对这一结果，以下说法最合理的是：",
    options: [
      {
        key: "A",
        text: "可以直接断定全国所有学生的比例都是 60%",
      },
      {
        key: "B",
        text: "样本结果可为了解该校学生情况提供参考，但结论存在抽样误差",
      },
      {
        key: "C",
        text: "只要调查人数达到 200 人，结果就绝对准确",
      },
      {
        key: "D",
        text: "样本比例与总体比例一定完全相等",
      },
    ],
    answer: "B",
    explanation:
      "样本调查可以帮助我们了解总体情况，但样本结果会受到抽样误差等因素影响。调查结论的可靠性还取决于抽样方案、样本代表性和调查实施过程。",
  },
];

export default function StatisticalApplicationPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = quizQuestions.filter(
    (question) => Boolean(answers[question.id])
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
          <span className="text-slate-700">统计综合应用</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 09
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-700">
              第 5 节 · 统计综合应用
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            统计综合应用
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从真实问题出发，学习如何设计调查方案、收集和整理数据、
            选择统计图表、计算数字特征，并根据样本结果作出合理解释。
            将前面四节的知识串联起来，形成完整的统计分析思路。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "调查设计",
              "数据整理",
              "图表分析",
              "数字特征",
              "结论解释",
            ].map((tag) => (
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
              综合练习
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
                <li>• 能够根据研究问题设计合理的调查方案。</li>
                <li>• 能够对调查数据进行分类、整理和可视化表达。</li>
                <li>• 能够综合使用平均数、中位数、众数和极差等指标。</li>
                <li>• 能够根据样本信息作出有依据、有限度的统计推断。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                STATISTICAL PROCESS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、统计分析的完整流程
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                统计分析不是简单地计算几个数字，而是从实际问题出发，
                通过收集数据、分析数据和解释结果，帮助我们作出判断。
              </p>

              <div className="mt-5 space-y-3">
                {[
                  {
                    number: "01",
                    title: "明确问题",
                    description:
                      "确定调查对象、调查目的，以及需要了解的具体指标。",
                  },
                  {
                    number: "02",
                    title: "收集数据",
                    description:
                      "选择合适的抽样方法，制定调查问题并记录数据。",
                  },
                  {
                    number: "03",
                    title: "整理数据",
                    description:
                      "检查缺失和异常记录，分类汇总，形成清晰的数据表。",
                  },
                  {
                    number: "04",
                    title: "分析数据",
                    description:
                      "根据研究目的选择统计图表，计算适当的数字特征。",
                  },
                  {
                    number: "05",
                    title: "解释结论",
                    description:
                      "结合数据、调查条件和可能存在的误差，回答最初的问题。",
                  },
                ].map((item, index) => (
                  <div key={item.number}>
                    <div className="flex gap-4 rounded-xl border border-slate-100 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                        {item.number}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {index < 4 && (
                      <div className="flex justify-center py-1.5">
                        <span className="text-lg text-blue-300">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                CASE STUDY
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、综合案例：学生每天的课外阅读时间
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  某班为了解学生的课外阅读情况，记录了 10 名学生某一天的阅读时间
                  （单位：分钟）：
                </p>
                <p className="mt-3 text-center text-base font-semibold leading-8 text-blue-700">
                  10、15、15、20、20、20、25、25、30、40
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  注：以上为用于演示统计方法的示例数据，不代表真实调查结果。
                </p>
              </div>

              <h3 className="mt-6 font-semibold text-slate-900">
                第一步：整理频数分布
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                按阅读时间划分区间，统计每个区间内有多少名学生，
                可以更直观地观察阅读时间的分布情况。
              </p>

              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[320px] border-collapse text-sm">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        阅读时间（分钟）
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        学生人数
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        所占比例
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {surveyData.map((item) => (
                      <tr key={item.interval}>
                        <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                          {item.interval}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                          {item.count}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 font-medium text-blue-700">
                          {item.count * 10}%
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        合计
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        10
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        100%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-6 font-semibold text-slate-900">
                第二步：观察频数分布图
              </h3>

              <div className="mt-4 rounded-xl bg-slate-50 p-4 sm:p-5">
                <svg
                  viewBox="0 0 440 250"
                  role="img"
                  aria-label="10名学生课外阅读时间的频数分布图"
                  className="h-auto w-full"
                >
                  {[0, 1, 2, 3, 4, 5].map((tick) => {
                    const y = 192 - tick * 30;

                    return (
                      <g key={tick}>
                        <line
                          x1="48"
                          y1={y}
                          x2="420"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                        <text
                          x="36"
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
                    y1="42"
                    x2="48"
                    y2="192"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="48"
                    y1="192"
                    x2="420"
                    y2="192"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {surveyData.map((item, index) => {
                    const x = 65 + index * 91;
                    const height = item.count * 30;

                    return (
                      <g key={item.interval}>
                        <rect
                          x={x}
                          y={192 - height}
                          width="54"
                          height={height}
                          rx="4"
                          fill="#3b82f6"
                        />
                        <text
                          x={x + 27}
                          y={181 - height}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#1d4ed8"
                        >
                          {item.count}
                        </text>
                        <text
                          x={x + 27}
                          y="211"
                          textAnchor="middle"
                          fontSize="10"
                          fill="#475569"
                        >
                          {item.interval}
                        </text>
                      </g>
                    );
                  })}

                  <text x="8" y="22" fontSize="11" fill="#64748b">
                    人数
                  </text>
                  <text
                    x="235"
                    y="240"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    阅读时间（分钟）
                  </text>
                </svg>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                从图表可以看出，这组示例数据中，阅读时间在 20–29 分钟区间的学生最多，
                占样本的 50%。但这只能描述当前样本，不能直接推断所有学生都具有相同的阅读习惯。
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                NUMERICAL ANALYSIS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、综合计算数字特征
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                图表帮助我们观察分布，而数字特征能够进一步概括数据的集中位置和波动情况。
              </p>

              <div className="mt-5 space-y-3">
                {[
                  {
                    title: "平均数",
                    formula: "220 ÷ 10 = 22",
                    description: "表示这 10 名学生的平均阅读时间为 22 分钟。",
                  },
                  {
                    title: "中位数",
                    formula: "(20 + 20) ÷ 2 = 20",
                    description: "数据已经排序，取中间两个数的平均数。",
                  },
                  {
                    title: "众数",
                    formula: "20",
                    description: "20 分钟出现 3 次，是出现次数最多的数据。",
                  },
                  {
                    title: "极差",
                    formula: "40 − 10 = 30",
                    description: "最大阅读时间与最小阅读时间相差 30 分钟。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                        {item.formula}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  综合分析
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  平均数为 22 分钟，中位数和众数均为 20 分钟。
                  这组数据的平均数略高于中位数，部分较长的阅读时间会对平均数产生影响。
                  因此，分析数据时不宜只依赖单一指标。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                CONCLUSION AND LIMITATIONS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、怎样得出合理结论
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    01
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      结论要有数据依据
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      应引用调查比例、统计图表或数字特征说明判断，而不是只凭个人感受。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    02
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      样本要具有代表性
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      如果样本集中于某一类人群，调查结果可能产生偏差，应谨慎推广到总体。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    03
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      不要夸大统计结果
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      样本结果不一定与总体完全相同。调查数据可以提供参考，但不能无条件地作出绝对判断。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    04
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      注意数据的真实性
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      检查数据记录、缺失值、异常值和统计口径，避免错误数据影响结论。
                    </p>
                  </div>
                </div>
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
                  <strong>1. 抽样方法不合理。</strong>
                  样本数量多不代表一定具有代表性。
                </li>
                <li>
                  <strong>2. 统计图表选择不当。</strong>
                  比较类别、观察趋势和分析比例应根据目的选择图表。
                </li>
                <li>
                  <strong>3. 混淆不同数字特征。</strong>
                  平均数、中位数和众数的含义不同，极差也不能替代方差。
                </li>
                <li>
                  <strong>4. 从样本直接断定总体。</strong>
                  应考虑样本代表性与抽样误差，避免过度推断。
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
                六、综合练习
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 {quizQuestions.length} 道题，涵盖调查设计、比例计算、图表选择、数字特征与结论解释。
                完成全部题目后提交答案，系统会自动判分并显示解析。
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

                        <div className="min-w-0">
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
                      ? "全部答对！你已经掌握本节的主要统计分析方法。"
                      : score >= 3
                        ? "整体掌握不错，建议重点复习答错题目的解析。"
                        : "建议重新学习统计分析流程、数据特征和抽样推断后再练习。"}
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
                href="/grade1/statistics/numerical-characteristics"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：数据的数字特征
              </Link>

              <Link
                href="/grade1/statistics"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                返回第九章目录 →
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
                将抽样、数据整理、图表分析和数字特征结合起来，解决实际统计问题。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 5 / 5 节
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本章课程目录</h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const active = lesson.number === "05";

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
              <h2 className="font-bold text-slate-900">统计分析口诀</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>先明确问题，再合理抽样。</p>
                <p>整理原始数据，再选择图表。</p>
                <p>结合数字特征，分析分布。</p>
                <p>依据样本结果，谨慎得出结论。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本节重点</h2>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-500">
                <li>• 样本是否具有代表性。</li>
                <li>• 图表是否匹配分析目的。</li>
                <li>• 数字特征是否计算正确。</li>
                <li>• 结论是否超出了数据支持的范围。</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
