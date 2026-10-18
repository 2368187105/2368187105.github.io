
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
    id: "graphs-01",
    title: "选择合适的统计图",
    question:
      "为了比较某班四个小组的数学测验平均成绩，最直观、合适的统计图是：",
    options: [
      { key: "A", text: "条形统计图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只记录最大值的表格" },
      { key: "D", text: "不需要整理数据" },
    ],
    answer: "A",
    explanation:
      "条形统计图适合比较不同类别之间的数量大小。四个小组属于不同类别，因此可以用条形统计图进行比较。",
  },
  {
    id: "graphs-02",
    title: "理解折线统计图",
    question:
      "为了观察某城市一周内每天最高气温的变化趋势，最适合使用：",
    options: [
      { key: "A", text: "饼图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只显示总数的统计表" },
      { key: "D", text: "没有横轴的图" },
    ],
    answer: "B",
    explanation:
      "折线统计图用点和线段表示数据，适合观察气温、销量等数据随时间变化的趋势。",
  },
  {
    id: "graphs-03",
    title: "扇形统计图的计算",
    question:
      "某班有 40 名学生，其中 10 名学生最喜欢篮球。若用扇形统计图表示喜好情况，篮球对应扇形的圆心角为：",
    options: [
      { key: "A", text: "45°" },
      { key: "B", text: "60°" },
      { key: "C", text: "90°" },
      { key: "D", text: "120°" },
    ],
    answer: "C",
    explanation:
      "篮球所占比例为 10÷40=25%，对应圆心角为 360°×25%=90°。",
  },
  {
    id: "graphs-04",
    title: "认识直方图",
    question:
      "将学生身高按照若干个连续区间分组，并用相邻的矩形表示各组的频数分布，通常使用：",
    options: [
      { key: "A", text: "扇形统计图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "普通分类条形图" },
      { key: "D", text: "频数分布直方图" },
    ],
    answer: "D",
    explanation:
      "频数分布直方图将连续数值划分为若干组，利用相邻的矩形表示各组的频数分布，可以观察数据的集中区间与分布形态。",
  },
  {
    id: "graphs-05",
    title: "识别图表误导",
    question:
      "比较两个班级的平均分时，某图表将纵轴从 80 分开始，而不是从 0 分开始。阅读图表时最需要注意的是：",
    options: [
      { key: "A", text: "纵轴起点可能放大视觉差异，应结合刻度判断" },
      { key: "B", text: "只要是统计图，结论就一定正确" },
      { key: "C", text: "纵轴起点不会影响视觉效果" },
      { key: "D", text: "不用看具体数据，只看柱子的高度" },
    ],
    answer: "A",
    explanation:
      "截断纵轴可能使原本较小的差异显得很大。阅读统计图时，应关注坐标轴起点、刻度间隔和实际数值。",
  },
];

const barData = [
  { label: "A组", value: 4 },
  { label: "B组", value: 7 },
  { label: "C组", value: 5 },
  { label: "D组", value: 9 },
];

const lineData = [
  { label: "周一", value: 20 },
  { label: "周二", value: 23 },
  { label: "周三", value: 21 },
  { label: "周四", value: 26 },
  { label: "周五", value: 24 },
];

export default function StatisticalGraphsPage() {
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
          <span className="text-slate-700">统计图表</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 09
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs text-blue-700">
              第 3 节 · 统计图表
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            统计图表
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            统计图表能够将数据转化为直观的信息。本节学习条形统计图、
            折线统计图、扇形统计图和频数分布直方图，理解不同图表的适用场景，
            并学会从图表中提取信息、发现规律。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "条形统计图",
              "折线统计图",
              "扇形统计图",
              "频数分布直方图",
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
                <li>• 理解常见统计图表的特点和适用场景。</li>
                <li>• 能够根据数据类型和分析目的选择合适的图表。</li>
                <li>• 学会读取图表中的数量、比例与变化趋势。</li>
                <li>• 能够识别坐标轴、刻度和图表表达中的常见问题。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                CHART SELECTION
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、如何选择统计图表
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                选择图表时，首先要明确自己想回答什么问题：比较类别、
                观察变化、分析整体比例，还是了解连续数据的分布。
              </p>

              <div className="mt-5 space-y-3">
                {[
                  {
                    number: "01",
                    title: "比较不同类别",
                    chart: "条形统计图",
                    description:
                      "例如比较不同班级的平均分、不同商品的销量。",
                  },
                  {
                    number: "02",
                    title: "观察随时间变化的趋势",
                    chart: "折线统计图",
                    description:
                      "例如观察每日气温、每月销售额的变化。",
                  },
                  {
                    number: "03",
                    title: "表示各部分占整体的比例",
                    chart: "扇形统计图",
                    description:
                      "例如表示不同运动项目的喜好人数占比。",
                  },
                  {
                    number: "04",
                    title: "研究连续数值的分布",
                    chart: "频数分布直方图",
                    description:
                      "例如分析学生身高、测验成绩的分布情况。",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4 rounded-xl border border-slate-100 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                      {item.number}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-blue-600">
                        推荐：{item.chart}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                BAR CHART
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、条形统计图
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                条形统计图通过不同高度或长度的矩形表示各类别的数量。
                读图时，应关注类别名称、纵轴刻度和各矩形对应的数值。
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
                <svg
                  viewBox="0 0 460 255"
                  role="img"
                  aria-label="四个小组测验成绩的条形统计图"
                  className="h-auto w-full"
                >
                  {[0, 2, 4, 6, 8, 10].map((tick) => {
                    const y = 195 - tick * 16;

                    return (
                      <g key={tick}>
                        <line
                          x1="49"
                          y1={y}
                          x2="440"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                        <text
                          x="38"
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
                    x1="49"
                    y1="35"
                    x2="49"
                    y2="195"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="49"
                    y1="195"
                    x2="440"
                    y2="195"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {barData.map((item, index) => {
                    const x = 79 + index * 91;
                    const height = item.value * 16;

                    return (
                      <g key={item.label}>
                        <rect
                          x={x}
                          y={195 - height}
                          width="48"
                          height={height}
                          rx="5"
                          fill="#3b82f6"
                        />
                        <text
                          x={x + 24}
                          y={187 - height}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#1d4ed8"
                        >
                          {item.value}
                        </text>
                        <text
                          x={x + 24}
                          y="215"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#475569"
                        >
                          {item.label}
                        </text>
                      </g>
                    );
                  })}

                  <text x="12" y="20" fontSize="11" fill="#64748b">
                    平均分
                  </text>
                  <text
                    x="245"
                    y="244"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    小组
                  </text>
                </svg>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    优点
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    类别之间的数量差异直观，便于比较大小。
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    注意
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    类别应清楚，刻度应合理，不能随意改变数据比例。
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LINE CHART
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、折线统计图
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                折线统计图将各个数据点按照顺序连接起来，适合观察数据随时间
                或其他有序变量的变化趋势。
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
                <svg
                  viewBox="0 0 460 260"
                  role="img"
                  aria-label="一周工作日最高气温变化折线统计图"
                  className="h-auto w-full"
                >
                  {[15, 20, 25, 30].map((tick) => {
                    const y = 202 - (tick - 15) * 10;

                    return (
                      <g key={tick}>
                        <line
                          x1="48"
                          y1={y}
                          x2="440"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                        <text
                          x="38"
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
                    y1="52"
                    x2="48"
                    y2="202"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="48"
                    y1="202"
                    x2="440"
                    y2="202"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  <polyline
                    points={lineData
                      .map(
                        (item, index) =>
                          `${75 + index * 85},${202 - (item.value - 15) * 10}`
                      )
                      .join(" ")}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {lineData.map((item, index) => {
                    const x = 75 + index * 85;
                    const y = 202 - (item.value - 15) * 10;

                    return (
                      <g key={item.label}>
                        <circle
                          cx={x}
                          cy={y}
                          r="5"
                          fill="#ffffff"
                          stroke="#2563eb"
                          strokeWidth="2.5"
                        />
                        <text
                          x={x}
                          y={y - 12}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="600"
                          fill="#1d4ed8"
                        >
                          {item.value}°
                        </text>
                        <text
                          x={x}
                          y="221"
                          textAnchor="middle"
                          fontSize="11"
                          fill="#475569"
                        >
                          {item.label}
                        </text>
                      </g>
                    );
                  })}

                  <text x="12" y="22" fontSize="11" fill="#64748b">
                    气温（℃）
                  </text>
                </svg>
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  如何读图？
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  先读取各数据点的数值，再观察线段的上升或下降。
                  线段上升表示数值增大，下降表示数值减小，水平表示相邻数据相同。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                PIE CHART
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、扇形统计图
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                扇形统计图用不同扇形表示各类别占整体的比例。
                整个圆代表总体，对应圆心角为 360°。
              </p>

              <div className="mt-5 grid items-center gap-6 rounded-xl bg-slate-50 p-5 sm:grid-cols-[180px_1fr]">
                <div className="flex justify-center">
                  <svg
                    viewBox="0 0 180 180"
                    role="img"
                    aria-label="四种运动项目所占比例的扇形统计图示意"
                    className="h-auto w-full max-w-[180px]"
                  >
                    <circle
                      cx="90"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="28"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="28"
                      strokeDasharray="155.04 389.56"
                      transform="rotate(-90 90 90)"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="28"
                      strokeDasharray="116.87 389.56"
                      strokeDashoffset="-155.04"
                      transform="rotate(-90 90 90)"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="#93c5fd"
                      strokeWidth="28"
                      strokeDasharray="77.91 389.56"
                      strokeDashoffset="-271.91"
                      transform="rotate(-90 90 90)"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="28"
                      strokeDasharray="38.96 389.56"
                      strokeDashoffset="-349.82"
                      transform="rotate(-90 90 90)"
                    />
                    <text
                      x="90"
                      y="86"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill="#334155"
                    >
                      全部
                    </text>
                    <text
                      x="90"
                      y="103"
                      textAnchor="middle"
                      fontSize="11"
                      fill="#64748b"
                    >
                      100%
                    </text>
                  </svg>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "篮球", percent: "40%", color: "#2563eb" },
                    { name: "足球", percent: "30%", color: "#60a5fa" },
                    { name: "羽毛球", percent: "20%", color: "#93c5fd" },
                    { name: "其他", percent: "10%", color: "#cbd5e1" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-slate-600">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {item.percent}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  重要公式
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  扇形圆心角 = 对应类别的频率 × 360°。
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  例如篮球占 40%，圆心角为 360° × 40% = 144°。
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                HISTOGRAM
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、频数分布直方图
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                当数据是连续数值时，可以先划分组距相同或不同的数据区间，
                再利用相邻的矩形展示各组的频数分布。
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
                <svg
                  viewBox="0 0 460 250"
                  role="img"
                  aria-label="学生身高分组的频数分布直方图"
                  className="h-auto w-full"
                >
                  {[0, 5, 10, 15, 20].map((tick) => {
                    const y = 195 - tick * 7;

                    return (
                      <g key={tick}>
                        <line
                          x1="48"
                          y1={y}
                          x2="440"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                        <text
                          x="38"
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
                    y1="55"
                    x2="48"
                    y2="195"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="48"
                    y1="195"
                    x2="440"
                    y2="195"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />

                  {[
                    { label: "150–155", value: 6 },
                    { label: "155–160", value: 12 },
                    { label: "160–165", value: 18 },
                    { label: "165–170", value: 14 },
                    { label: "170–175", value: 8 },
                  ].map((item, index) => {
                    const x = 49 + index * 78;
                    const height = item.value * 7;

                    return (
                      <g key={item.label}>
                        <rect
                          x={x}
                          y={195 - height}
                          width="77"
                          height={height}
                          fill="#60a5fa"
                          stroke="#ffffff"
                          strokeWidth="1"
                        />
                        <text
                          x={x + 38}
                          y={187 - height}
                          textAnchor="middle"
                          fontSize="11"
                          fontWeight="600"
                          fill="#1d4ed8"
                        >
                          {item.value}
                        </text>
                        <text
                          x={x + 38}
                          y="213"
                          textAnchor="middle"
                          fontSize="9"
                          fill="#475569"
                        >
                          {item.label}
                        </text>
                      </g>
                    );
                  })}

                  <text x="10" y="22" fontSize="11" fill="#64748b">
                    频数
                  </text>
                  <text
                    x="245"
                    y="239"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748b"
                  >
                    身高区间（cm）
                  </text>
                </svg>
              </div>

              <div className="mt-4 rounded-xl border border-slate-100 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  直方图与条形统计图的区别
                </p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-600">
                  <li>
                    • 直方图通常表示连续数值分组后的频数或频率分布。
                  </li>
                  <li>
                    • 直方图中相邻组的矩形通常紧挨在一起，表示区间连续。
                  </li>
                  <li>
                    • 普通条形统计图主要比较不同类别，各类别之间通常留有间隔。
                  </li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                六、典型例题：计算扇形圆心角
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  某班有 40 名学生，其中 16 人喜欢篮球，12 人喜欢足球，
                  8 人喜欢羽毛球，其余学生喜欢其他运动。用扇形统计图表示各类人数，
                  求篮球对应的圆心角。
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    第一步：求篮球所占比例
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    16 ÷ 40 = 0.4 = 40%。
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    第二步：计算圆心角
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    360° × 40% = 144°。
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    答案
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    篮球对应的扇形圆心角为 144°。
                  </p>
                </div>
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
                  <strong>1. 不要只看图形，不看坐标轴。</strong>
                  纵轴的起点和刻度间隔会影响视觉判断。
                </li>
                <li>
                  <strong>2. 扇形比例与圆心角要对应。</strong>
                  所有扇形圆心角之和为 360°。
                </li>
                <li>
                  <strong>3. 图表类型要与问题相匹配。</strong>
                  比较类别、观察趋势和研究连续数据分布的目的不同。
                </li>
                <li>
                  <strong>4. 统计图表不能替代数据来源的检查。</strong>
                  图表再直观，也需要确认原始数据是否可靠。
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
                共 {quizQuestions.length} 道题。全部作答后提交，查看得分、正确答案和详细解析。
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
                        : "建议重新学习图表的特点与适用场景后再练习。"}
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
                href="/grade1/statistics/data-organization"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：数据的收集与整理
              </Link>

              <Link
                href="/grade1/statistics/numerical-characteristics"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：数据的数字特征 →
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
                从数据收集、整理到图表分析，逐步掌握统计学的基本方法。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-3/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 3 / 5 节
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">本章课程目录</h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const active = lesson.number === "03";

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
              <h2 className="font-bold text-slate-900">图表选择口诀</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <p>比大小：条形统计图。</p>
                <p>看趋势：折线统计图。</p>
                <p>看比例：扇形统计图。</p>
                <p>看连续数据分布：频数分布直方图。</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">学习提示</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                阅读图表时，先看标题和数据来源，再检查坐标轴、单位、刻度与图例，
                最后结合实际数值作出判断。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
