
"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "随机事件与样本空间",
    href: "/grade1/probability/random-events",
  },
  {
    number: "02",
    title: "事件的关系与运算",
    href: "/grade1/probability/event-relations",
  },
  {
    number: "03",
    title: "古典概型",
    href: "/grade1/probability/classical-probability",
  },
  {
    number: "04",
    title: "概率的基本性质",
    href: "/grade1/probability/probability-properties",
  },
  {
    number: "05",
    title: "概率综合应用",
    href: "/grade1/probability/probability-application",
  },
];

const quizQuestions = [
  {
    id: "probability-application-01",
    title: "第 1 题 · 分类计数与概率",
    question:
      "从分别标有 1、2、3、4、5、6、7、8、9、10 的 10 张卡片中随机抽取 1 张。求抽到的数字是 2 的倍数或 3 的倍数的概率。",
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "3/5" },
      { key: "C", text: "7/10" },
      { key: "D", text: "4/5" },
    ],
    answer: "C",
    explanation:
      "2 的倍数有 5 个，3 的倍数有 3 个，其中 6 同时属于两类。利用并事件的计数原理，有利结果数为 5 + 3 - 1 = 7。因此概率为 7/10。",
  },
  {
    id: "probability-application-02",
    title: "第 2 题 · 两个骰子的点数和",
    question:
      "同时掷两枚质地均匀的六面骰子，求两枚骰子的点数之和为 7 的概率。每枚骰子的点数均按有序结果记录。",
    options: [
      { key: "A", text: "1/12" },
      { key: "B", text: "1/6" },
      { key: "C", text: "1/4" },
      { key: "D", text: "1/3" },
    ],
    answer: "B",
    explanation:
      "两枚骰子共有 6 × 6 = 36 个等可能的有序结果。点数和为 7 的结果为 (1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)，共 6 个。因此概率为 6/36 = 1/6。",
  },
  {
    id: "probability-application-03",
    title: "第 3 题 · 对立事件的应用",
    question:
      "连续抛掷一枚质地均匀的硬币两次，求至少出现一次正面的概率。",
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/2" },
      { key: "C", text: "2/3" },
      { key: "D", text: "3/4" },
    ],
    answer: "D",
    explanation:
      "至少出现一次正面的对立事件是两次都出现反面。两次都反面的概率为 1/2 × 1/2 = 1/4。因此所求概率为 1 - 1/4 = 3/4。",
  },
];

export default function ProbabilityApplicationPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = quizQuestions.filter(
    (question) => answers[question.id]
  ).length;

  const score = quizQuestions.filter(
    (question) => answers[question.id] === question.answer
  ).length;

  function selectAnswer(id: string, key: string) {
    if (submitted) return;

    setAnswers((previous) => ({
      ...previous,
      [id]: key,
    }));
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link
            href="/grade1"
            className="transition hover:text-blue-600"
          >
            高一数学
          </Link>
          <span>/</span>
          <Link
            href="/grade1/probability"
            className="transition hover:text-blue-600"
          >
            概率
          </Link>
          <span>/</span>
          <span className="text-slate-700">概率综合应用</span>
        </nav>

        {/* 页面头部 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 5 节 · 综合应用
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            概率综合应用
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            综合运用随机事件、古典概型和概率的基本性质，
            学习通过列举法、分类计数和对立事件解决实际问题，
            建立从分析条件到计算概率的完整解题思路。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
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

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-6">
            {/* 学习目标 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING GOALS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本节学习目标
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 能够根据试验条件确定样本空间和目标事件。</li>
                <li>• 能够利用列举法和分类计数求解古典概型问题。</li>
                <li>• 能够根据事件关系选择合适的概率公式。</li>
                <li>• 能够运用对立事件简化概率计算。</li>
              </ul>
            </section>

            {/* 知识一 */}
            <section
              id="knowledge"
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 01
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                一、概率问题的基本解题步骤
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                解决概率问题时，不要急于套用公式。
                首先需要明确随机试验的条件和目标事件，再根据基本事件是否等可能、
                事件之间是否存在公共部分等信息选择合适的方法。
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    number: "01",
                    title: "分析试验条件",
                    description:
                      "明确试验如何进行、可能出现哪些结果。",
                  },
                  {
                    number: "02",
                    title: "确定样本空间",
                    description:
                      "列出所有可能结果，必要时使用表格或树状图。",
                  },
                  {
                    number: "03",
                    title: "确定目标事件",
                    description:
                      "找出符合题目条件的结果，注意重复计数和遗漏。",
                  },
                  {
                    number: "04",
                    title: "选择计算方法",
                    description:
                      "根据等可能性、互斥关系和补事件关系选择公式。",
                  },
                  {
                    number: "05",
                    title: "计算并检验",
                    description:
                      "完成计算后检查结果是否在 0 与 1 之间。",
                  },
                ].map((step, index) => (
                  <div
                    key={step.number}
                    className="flex gap-4 rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                      {step.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <p className="font-semibold text-blue-900">
                  解题核心
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  先确定“所有可能结果”，再确定“符合条件的结果”。
                  只有确认基本事件等可能时，才能直接使用有利基本事件数除以基本事件总数。
                </p>
              </div>
            </section>

            {/* 知识二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、列举法与分类计数
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                当随机试验的结果数量不多时，可以逐一列举基本事件；
                当试验由多个步骤组成时，可以通过表格或树状图避免遗漏。
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">
                  示例：同时掷两枚六面骰子
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  记录第一枚和第二枚骰子的点数，结果可以写成有序数对
                  （第一枚骰子的点数，第二枚骰子的点数）。
                  每枚骰子都有 6 种结果，因此共有 6 × 6 = 36 个等可能结果。
                </p>

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[340px] border-collapse text-center text-sm">
                    <thead>
                      <tr>
                        <th className="border border-slate-200 bg-slate-50 p-3 text-slate-500">
                          第一枚 \ 第二枚
                        </th>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <th
                            key={n}
                            className="border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700"
                          >
                            {n}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6].map((row) => (
                        <tr key={row}>
                          <th className="border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700">
                            {row}
                          </th>
                          {[1, 2, 3, 4, 5, 6].map((column) => {
                            const isSeven = row + column === 7;

                            return (
                              <td
                                key={column}
                                className={`border border-slate-200 p-3 ${
                                  isSeven
                                    ? "bg-blue-100 font-bold text-blue-800"
                                    : "text-slate-600"
                                }`}
                              >
                                {row + column}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 rounded-xl bg-blue-50 p-4">
                  <p className="text-sm leading-7 text-slate-700">
                    表格中蓝色单元格表示两枚骰子的点数和为 7。
                    共有 6 个符合条件的结果，所以该事件的概率为：
                  </p>
                  <p className="mt-3 text-center text-xl font-bold text-blue-800">
                    P = 6 / 36 = 1 / 6
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">
                  注意有序结果
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  （1，6）和（6，1）是两个不同的试验结果。
                  计算两枚骰子的点数和时，不能将它们合并成一个结果。
                </p>
              </div>
            </section>

            {/* 知识三 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 03
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、利用事件关系计算概率
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                如果题目涉及“至少一个”“属于 A 或 B”“不属于 A”等描述，
                可以将文字条件转换为事件运算，再选择对应的概率公式。
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                  <h3 className="font-bold text-slate-900">
                    情形一：至少一个事件发生
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    “A 或 B 发生”对应并事件 A ∪ B。
                    如果两个事件不一定互斥，需要使用一般加法公式。
                  </p>
                  <p className="mt-3 font-bold text-blue-800">
                    P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
                  </p>
                </div>

                <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-5">
                  <h3 className="font-bold text-slate-900">
                    情形二：至少出现一次
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    当直接统计“至少一次”的结果比较复杂时，
                    可以先计算“一次也没有发生”的概率，再用 1 减去它。
                  </p>
                  <p className="mt-3 font-bold text-purple-800">
                    P(A) = 1 - P(Aᶜ)
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
                  <h3 className="font-bold text-slate-900">
                    情形三：两个事件互斥
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    如果 A 和 B 不能同时发生，那么它们的交集为空，
                    并事件的概率可以直接相加。
                  </p>
                  <p className="mt-3 font-bold text-emerald-800">
                    P(A ∪ B) = P(A) + P(B)
                  </p>
                </div>
              </div>
            </section>

            {/* 典型例题一 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE 01
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、典型例题：两个事件至少一个发生
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                <p className="font-semibold leading-7 text-slate-900">
                  例题：从 1 到 10 的整数中随机选取一个数。
                  设 A 表示“选出的数是 2 的倍数”，
                  B 表示“选出的数是 3 的倍数”。
                  求选出的数是 2 的倍数或 3 的倍数的概率。
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900">
                      第一步：确定样本空间
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      共有 10 个等可能结果，因此样本空间中的基本事件总数为 10。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      第二步：分别列举事件
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      A = {"{2, 4, 6, 8, 10}"}，共 5 个结果。
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      B = {"{3, 6, 9}"}，共 3 个结果。
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      A ∩ B = {"{6}"}，共 1 个结果。
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      第三步：使用一般加法公式
                    </p>
                    <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
                      <p className="text-lg font-bold text-blue-800">
                        P(A ∪ B) = (5 + 3 - 1) / 10
                      </p>
                      <p className="mt-2 text-xl font-bold text-blue-800">
                        = 7 / 10
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  这里必须减去数字 6，因为它同时是 2 和 3 的倍数，
                  在两组结果中各出现一次。
                </p>
              </div>
            </section>

            {/* 典型例题二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、典型例题：利用对立事件简化计算
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                <p className="font-semibold leading-7 text-slate-900">
                  例题：连续抛掷一枚质地均匀的硬币两次，
                  求至少出现一次正面的概率。
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  如果直接列举，样本空间为：
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "正正", isSuccess: true },
                    { label: "正反", isSuccess: true },
                    { label: "反正", isSuccess: true },
                    { label: "反反", isSuccess: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-xl border p-4 text-center ${
                        item.isSuccess
                          ? "border-blue-200 bg-blue-50"
                          : "border-orange-200 bg-orange-50"
                      }`}
                    >
                      <p
                        className={`text-lg font-bold ${
                          item.isSuccess
                            ? "text-blue-800"
                            : "text-orange-800"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        {item.isSuccess ? "符合条件" : "对立事件"}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <p className="text-sm leading-7 text-slate-600">
                    更简便的方法是计算对立事件“两次都出现反面”。
                    由于两次抛掷相互独立，两次都反面的概率为 1/4。
                  </p>

                  <div className="rounded-xl border border-purple-100 bg-purple-50 p-4 text-center">
                    <p className="text-sm text-purple-800">
                      对立事件的概率
                    </p>
                    <p className="mt-2 text-lg font-bold text-purple-900">
                      P(两次都反面) = 1 / 4
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-center">
                    <p className="text-sm text-emerald-800">
                      所求概率
                    </p>
                    <p className="mt-2 text-xl font-bold text-emerald-900">
                      P(至少一次正面) = 1 - 1 / 4 = 3 / 4
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 解题方法对照 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                METHOD COMPARISON
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                六、常见题型与方法选择
              </h2>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[460px] border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      <th className="border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700">
                        题目特征
                      </th>
                      <th className="border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700">
                        推荐方法
                      </th>
                      <th className="border border-slate-200 bg-slate-50 p-3 font-semibold text-slate-700">
                        关键点
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "所有基本事件等可能",
                        "古典概型",
                        "有利结果数 / 总结果数",
                      ],
                      [
                        "A 或 B 至少一个发生",
                        "并事件",
                        "检查是否存在交集",
                      ],
                      [
                        "A、B 不能同时发生",
                        "互斥事件公式",
                        "两个事件的交集为空",
                      ],
                      [
                        "至少出现一次",
                        "对立事件",
                        "1 减去一次也没有发生的概率",
                      ],
                    ].map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td
                            key={cell}
                            className="border border-slate-200 p-3 leading-6 text-slate-600"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 互动练习 */}
            <section
              id="practice"
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                INTERACTIVE PRACTICE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                七、课后练习
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 3 道综合题。完成全部题目后提交，即可查看得分和答案解析。
              </p>

              <div className="mt-5 space-y-6">
                {quizQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="rounded-xl border border-slate-200 p-4 sm:p-5"
                  >
                    <h3 className="font-semibold leading-7 text-slate-900">
                      {question.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {question.question}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {question.options.map((option) => {
                        const selected =
                          answers[question.id] === option.key;

                        const correct =
                          submitted && option.key === question.answer;

                        const wrongSelected =
                          submitted &&
                          selected &&
                          option.key !== question.answer;

                        return (
                          <button
                            key={option.key}
                            type="button"
                            onClick={() =>
                              selectAnswer(question.id, option.key)
                            }
                            disabled={submitted}
                            className={`rounded-xl border p-3 text-left text-sm leading-6 transition ${
                              correct
                                ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                                : wrongSelected
                                  ? "border-rose-300 bg-rose-50 text-rose-800"
                                  : selected
                                    ? "border-blue-300 bg-blue-50 text-blue-800"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
                            } ${
                              submitted
                                ? "cursor-default"
                                : "cursor-pointer"
                            }`}
                          >
                            <span className="mr-2 font-semibold">
                              {option.key}.
                            </span>
                            {option.text}
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="mt-4 rounded-lg bg-slate-50 p-4">
                        <p
                          className={`text-sm font-semibold ${
                            answers[question.id] === question.answer
                              ? "text-emerald-700"
                              : "text-rose-700"
                          }`}
                        >
                          {answers[question.id] === question.answer
                            ? "回答正确"
                            : `回答错误，正确答案：${question.answer}`}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {!submitted ? (
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    disabled={answeredCount !== quizQuestions.length}
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    提交答案（{answeredCount}/{quizQuestions.length}）
                  </button>
                ) : (
                  <div className="rounded-xl bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700">
                    本次得分：{score * 10} / 30 分
                  </div>
                )}

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  重新作答
                </button>
              </div>

              {!submitted && answeredCount !== quizQuestions.length && (
                <p className="mt-3 text-xs text-slate-400">
                  请完成全部题目后再提交。
                </p>
              )}
            </section>

            {/* 本节总结 */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY TAKEAWAYS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本节小结
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 先确定样本空间，再确定符合条件的基本事件。</li>
                <li>• 古典概型要求基本事件有限且等可能。</li>
                <li>
                  • 并事件概率公式：
                  P(A ∪ B) = P(A) + P(B) - P(A ∩ B)。
                </li>
                <li>• 互斥事件的交集为空，可以直接相加计算并事件概率。</li>
                <li>• 对立事件公式：P(A) = 1 - P(Aᶜ)。</li>
                <li>• 对复杂的多步骤试验，可以借助表格或树状图列举结果。</li>
              </ul>
            </section>

            {/* 章节导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/probability/probability-properties"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：概率的基本性质
              </Link>

              <Link
                href="/grade1/probability"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                返回概率章节目录 →
              </Link>
            </div>
          </div>

          {/* 右侧章节导航 */}
          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-6">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CHAPTER 10
              </p>

              <h2 className="mt-2 text-lg font-bold text-slate-900">
                概率
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                从随机事件到概率计算，综合掌握本章核心知识。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 5 / 5 节
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">
                  本章课程目录
                </h3>

                <div className="mt-4 space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        lesson.number === "05"
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            lesson.number === "05"
                              ? "text-blue-600"
                              : "text-slate-400"
                          }`}
                        >
                          {lesson.number}
                        </span>

                        <div className="min-w-0 flex-1">
                          <Link
                            href={lesson.href}
                            className="text-sm font-semibold leading-6 text-slate-900 transition hover:text-blue-600"
                          >
                            {lesson.title}
                          </Link>

                          {lesson.number === "05" && (
                            <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                              当前学习
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">
                  本章核心公式
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <p className="text-xs text-slate-500">古典概型</p>
                    <p className="mt-1 font-bold text-blue-800">
                      P(A) = m / n
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-3">
                    <p className="text-xs text-slate-500">对立事件</p>
                    <p className="mt-1 font-bold text-purple-800">
                      P(A) = 1 - P(Aᶜ)
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="text-xs text-slate-500">一般加法公式</p>
                    <p className="mt-1 font-bold leading-6 text-emerald-800">
                      P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
