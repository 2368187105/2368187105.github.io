
"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
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
    id: "characteristics-01",
    title: "平均数的计算",
    question: "一组数据为 4、6、8、10，这组数据的平均数是：",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "28" },
    ],
    answer: "B",
    explanation:
      "平均数等于所有数据之和除以数据个数，即 (4+6+8+10)÷4=7。",
  },
  {
    id: "characteristics-02",
    title: "中位数的判断",
    question: "一组数据为 2、4、7、9、12，其中位数是：",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6.8" },
      { key: "C", text: "7" },
      { key: "D", text: "9" },
    ],
    answer: "C",
    explanation:
      "这组数据已经按从小到大的顺序排列，共有 5 个数据，中间第 3 个数是 7，因此中位数为 7。",
  },
  {
    id: "characteristics-03",
    title: "众数的判断",
    question: "一组数据为 1、2、2、3、4，其中众数是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    answer: "B",
    explanation:
      "众数是出现次数最多的数据。数值 2 出现了两次，其余数值各出现一次，因此众数是 2。",
  },
  {
    id: "characteristics-04",
    title: "极差的计算",
    question: "一组数据为 3、5、8、10，这组数据的极差是：",
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "10" },
    ],
    answer: "B",
    explanation:
      "极差等于最大值减去最小值，即 10-3=7。极差越大，说明这组数据的最大值与最小值之间的距离越大。",
  },
  {
    id: "characteristics-05",
    title: "方差的计算",
    question:
      "一组数据为 2、4、4、6，平均数为 4。按照总体方差公式，这组数据的方差是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "4" },
      { key: "D", text: "√2" },
    ],
    answer: "B",
    explanation:
      "总体方差等于各数据与平均数之差的平方的平均数。方差=[(2-4)²+(4-4)²+(4-4)²+(6-4)²]÷4=(4+0+0+4)÷4=2。",
  },
];

const sampleData = [2, 3, 3, 4, 8];

const distributionData = [
  { value: 2, frequency: 1 },
  { value: 3, frequency: 2 },
  { value: 4, frequency: 1 },
  { value: 8, frequency: 1 },
];

const comparisonData = [
  { label: "甲组", values: [7, 8, 8, 9, 8] },
  { label: "乙组", values: [5, 8, 8, 10, 9] },
];

function getMean(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getMedian(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

function getMode(values: number[]) {
  const counts = new Map<number, number>();

  values.forEach((value) => {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  });

  const maxFrequency = Math.max(...counts.values());

  if (maxFrequency === 1) {
    return "无众数";
  }

  return [...counts.entries()]
    .filter(([, frequency]) => frequency === maxFrequency)
    .map(([value]) => value)
    .join("、");
}

function getRange(values: number[]) {
  return Math.max(...values) - Math.min(...values);
}

function getVariance(values: number[]) {
  const mean = getMean(values);

  return (
    values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    values.length
  );
}

export default function NumericalCharacteristicsPage() {
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
          <span className="text-slate-700">数据的数字特征</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 09
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-700">
              第 4 节 · 数据的数字特征
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            数据的数字特征
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            如何用几个关键数字概括一组数据？本节从平均数、中位数和众数出发，
            进一步学习极差、方差与标准差，理解数据的集中趋势与离散程度，
            并运用这些指标比较不同数据组的特点。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "平均数",
              "中位数",
              "众数",
              "极差",
              "方差与标准差",
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
                <li>• 理解平均数、中位数与众数的意义和计算方法。</li>
                <li>• 掌握极差、方差与标准差的基本概念。</li>
                <li>• 理解集中趋势与离散程度的区别。</li>
                <li>• 能够利用数字特征比较两组数据的分布特点。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                CENTRAL TENDENCY
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、平均数、中位数与众数
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                集中趋势反映一组数据大致集中在什么位置。平均数、中位数和众数
                都可以描述集中趋势，但它们的含义和适用情况并不相同。
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900">平均数</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-blue-700">
                      考虑全部数据
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    将所有数据相加，再除以数据的个数。
                  </p>
                  <div className="mt-3 rounded-lg bg-white p-3 text-center text-sm font-medium text-slate-800">
                    平均数 = 数据总和 ÷ 数据个数
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    特点：利用了所有数据，但容易受到极端值的影响。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900">中位数</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      关注中间位置
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    将数据从小到大排列后，位于中间位置的数。如果数据个数为偶数，
                    中位数是中间两个数的平均数。
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    特点：受极端值的影响通常较小，适合描述偏态数据的典型位置。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900">众数</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      关注出现次数
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    一组数据中出现次数最多的数据。一组数据可能有一个众数、
                    多个众数，也可能没有众数。
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    特点：适合描述最常见的数值或类别。
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、典型例题：分析一组数据
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  已知一组数据为 2、3、3、4、8，求这组数据的平均数、中位数、
                  众数和极差。
                </p>
              </div>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[340px] border-collapse text-sm">
                  <thead className="bg-blue-50 text-slate-700">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        数字特征
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        计算过程
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        结果
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "平均数",
                        process: "(2+3+3+4+8)÷5",
                        result: "4",
                      },
                      {
                        name: "中位数",
                        process: "排序后取第 3 个数",
                        result: "3",
                      },
                      {
                        name: "众数",
                        process: "出现次数最多的数",
                        result: "3",
                      },
                      {
                        name: "极差",
                        process: "8-2",
                        result: "6",
                      },
                    ].map((item) => (
                      <tr key={item.name}>
                        <td className="border-b border-slate-100 px-4 py-3 font-medium text-slate-800">
                          {item.name}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-slate-600">
                          {mathText(item.process)}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 font-semibold text-blue-700">
                          {mathText(item.result)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  解题提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  求中位数之前先排序；求众数时比较各个数值的出现次数；
                  求极差时只需要找出最大值和最小值。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                DATA DISTRIBUTION
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、从数据分布理解数字特征
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                同样的平均数不一定代表相同的数据分布。除了观察集中趋势，
                还需要关注数据分布的形态和各个数值出现的次数。
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
                <p className="text-sm font-semibold text-slate-800">
                  示例数据的频数分布
                </p>

                <svg
                  viewBox="0 0 440 240"
                  role="img"
                  aria-label="数据2、3、3、4、8的频数分布柱状图"
                  className="mt-3 h-auto w-full"
                >
                  {[0, 1, 2, 3].map((tick) => {
                    const y = 184 - tick * 42;

                    return (
                      <g key={tick}>
                        <line
                          x1="48"
                          y1={y}
                          x2="415"
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
                    y1="58"
                    x2="48"
                    y2="184"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="48"
                    y1="184"
                    x2="415"
                    y2="184"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {distributionData.map((item, index) => {
                    const x = 75 + index * 87;
                    const height = item.frequency * 42;

                    return (
                      <g key={item.value}>
                        <rect
                          x={x}
                          y={184 - height}
                          width="48"
                          height={height}
                          rx="5"
                          fill="#3b82f6"
                        />
                        <text
                          x={x + 24}
                          y={174 - height}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#1d4ed8"
                        >
                          {item.frequency}
                        </text>
                        <text
                          x={x + 24}
                          y="205"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#475569"
                        >
                          {item.value}
                        </text>
                      </g>
                    );
                  })}

                  <text x="10" y="23" fontSize="11" fill="#64748b">
                    频数
                  </text>
                  <text
                    x="230"
                    y="229"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    数据取值
                  </text>
                </svg>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  图中数值 3 出现两次，其余展示的数值各出现一次，因此 3 是这组数据的众数。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                DISPERSION
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、极差、方差与标准差
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                离散程度描述数据之间的差异大小。两组数据即使平均数相同，
                数据分布也可能不同。
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900">极差</h3>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-center text-sm font-medium text-slate-800">
                    极差 = 最大值 - 最小值
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    计算简单，但只使用最大值和最小值，不能反映其余数据的具体分布。
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                  <h3 className="font-bold text-slate-900">方差</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    方差衡量各数据与平均数之间的偏离程度。偏离越大，方差通常越大。
                  </p>
                  <div className="mt-3 rounded-lg bg-white p-4 text-center">
                    <p className="text-sm font-semibold text-slate-800">
                      总体方差
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      各数据与平均数之差的平方之和，再除以数据总数。
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      注意：样本方差的计算约定可能不同，应按题目给定的公式计算。
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900">标准差</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    标准差等于方差的算术平方根，与原始数据具有相同的量纲。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-center text-sm font-medium text-slate-800">{mathText("标准差 = √方差")}</div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  重要结论
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  在比较对象、单位和计算口径一致时，方差或标准差越小，
                  通常说明数据围绕平均数的波动越小、分布越集中。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                VARIANCE EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、典型例题：计算方差
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  一组数据为 2、4、4、6，求这组数据的总体方差与标准差。
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                    01
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      计算平均数
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      平均数 = (2+4+4+6)÷4 = 4。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                    02
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      计算各数据与平均数之差的平方
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      (2-4)² = 4，(4-4)² = 0，(4-4)² = 0，(6-4)² = 4。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                    03
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      求总体方差与标准差
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      方差 = (4+0+0+4)÷4 = 2。
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{mathText("标准差 = √2。")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  最终结果
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{mathText("总体方差为 2，标准差为 √2。注意不要把方差与标准差混为一谈。")}</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                GROUP COMPARISON
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                六、如何比较两组数据
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                比较数据时，不能只看平均数。集中趋势可以反映典型水平，
                而极差、方差等指标能够补充说明数据的波动情况。
              </p>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[350px] border-collapse text-sm">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        组别
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        数据
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        平均数
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((group) => (
                      <tr key={group.label}>
                        <td className="border-b border-slate-100 px-4 py-3 font-medium">
                          {group.label}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-slate-600">
                          {group.values.join("、")}
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 font-semibold text-blue-700">
                          {getMean(group.values).toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  比较思路
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  甲组与乙组的平均数都是 8。甲组的极差为 2，
                  乙组的极差为 5，因此乙组数据的最大值与最小值相差更大。
                  若需进一步比较整体波动程度，可以继续计算方差或标准差。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
              <p className="text-xs font-semibold tracking-wide text-amber-700">
                COMMON MISTAKES
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                七、易错点提醒
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>
                  <strong>1. 求中位数前必须先排序。</strong>
                  不要直接取原始数据中间位置的数。
                </li>
                <li>
                  <strong>2. 平均数、中位数和众数含义不同。</strong>
                  需要根据问题选择合适的指标。
                </li>
                <li>
                  <strong>3. 极差不等于方差。</strong>
                  极差只取决于最大值和最小值，方差利用所有数据与平均数的偏离。
                </li>
                <li>
                  <strong>4. 注意方差的计算口径。</strong>
                  计算总体方差和样本方差时，应使用题目指定的公式。
                </li>
                <li>
                  <strong>5. 方差与标准差的单位不同。</strong>
                  标准差与原始数据单位相同，方差的单位是原始单位的平方。
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
                八、课后练习
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 {quizQuestions.length} 道题。完成全部题目后提交，系统将自动判分并显示解析。
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
                            {mathText(question.question)}
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
                                {mathText(option.text)}
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
                            {mathText(question.explanation)}
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
                        ? "整体掌握不错，建议重点复习答错题目的计算过程。"
                        : "建议重新学习集中趋势、极差与方差的概念后再练习。"}
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
                href="/grade1/statistics/statistical-graphs"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：统计图表
              </Link>

              <Link
                href="/grade1/statistics/statistical-application"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：统计综合应用 →
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
                从数据收集、整理到分析，逐步掌握统计学的基本方法。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 4 / 5 节
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本章课程目录</h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const active = lesson.number === "04";

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
                <p>平均数：描述整体平均水平。</p>
                <p>中位数：描述排序后的中间位置。</p>
                <p>众数：出现次数最多的数据。</p>
                <p>极差：最大值减去最小值。</p>
                <p>方差与标准差：描述数据的离散程度。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">计算检查</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                计算数字特征时，先确认数据总数和排序情况，再检查计算公式及运算过程。
                比较不同组数据时，应注意指标的含义与单位。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
