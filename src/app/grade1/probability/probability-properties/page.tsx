
"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "随机事件与样本空间",
    href: "/grade1/probability/random-events",
    ready: true,
  },
  {
    number: "02",
    title: "事件的关系与运算",
    href: "/grade1/probability/event-relations",
    ready: true,
  },
  {
    number: "03",
    title: "古典概型",
    href: "/grade1/probability/classical-probability",
    ready: true,
  },
  {
    number: "04",
    title: "概率的基本性质",
    href: "/grade1/probability/probability-properties",
    ready: true,
  },
  {
    number: "05",
    title: "概率综合应用",
    href: "/grade1/probability/probability-application",
    ready: true,
  },
];

const quizQuestions = [
  {
    id: "probability-properties-01",
    title: "第 1 题 · 对立事件的概率",
    question:
      "设随机事件 A 的概率 P(A) = 0.32，则 A 的对立事件的概率 P(Aᶜ) 等于：",
    options: [
      { key: "A", text: "0.32" },
      { key: "B", text: "0.48" },
      { key: "C", text: "0.68" },
      { key: "D", text: "1.32" },
    ],
    answer: "C",
    explanation:
      "由对立事件的概率性质，P(Aᶜ) = 1 - P(A) = 1 - 0.32 = 0.68。",
  },
  {
    id: "probability-properties-02",
    title: "第 2 题 · 互斥事件的概率",
    question:
      "已知事件 A 与事件 B 互斥，且 P(A) = 0.25，P(B) = 0.35，则 P(A ∪ B) 等于：",
    options: [
      { key: "A", text: "0.10" },
      { key: "B", text: "0.35" },
      { key: "C", text: "0.60" },
      { key: "D", text: "0.70" },
    ],
    answer: "C",
    explanation:
      "因为 A 与 B 互斥，所以 P(A ∩ B) = 0。由互斥事件的概率加法公式，P(A ∪ B) = P(A) + P(B) = 0.25 + 0.35 = 0.60。",
  },
  {
    id: "probability-properties-03",
    title: "第 3 题 · 一般加法公式",
    question:
      "已知 P(A) = 0.6，P(B) = 0.5，P(A ∩ B) = 0.2，则 P(A ∪ B) 等于：",
    options: [
      { key: "A", text: "0.7" },
      { key: "B", text: "0.8" },
      { key: "C", text: "0.9" },
      { key: "D", text: "1.1" },
    ],
    answer: "C",
    explanation:
      "一般加法公式为 P(A ∪ B) = P(A) + P(B) - P(A ∩ B)。代入得 0.6 + 0.5 - 0.2 = 0.9。两个事件存在公共部分时，需要减去交集的概率，避免重复计算。",
  },
];

export default function ProbabilityPropertiesPage() {
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
          <span className="text-slate-700">概率的基本性质</span>
        </nav>

        {/* 章节头部 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 4 节 · 概率性质
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            概率的基本性质
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从概率的取值范围出发，理解必然事件、不可能事件和对立事件的概率，
            掌握概率的基本性质与加法公式，学会计算两个事件至少有一个发生的概率。
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
              课后练习
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
                <li>• 掌握概率的取值范围及必然事件、不可能事件的概率。</li>
                <li>• 理解对立事件的概率关系，并能利用补事件计算概率。</li>
                <li>• 掌握互斥事件的概率加法公式。</li>
                <li>• 理解一般加法公式，能够处理存在公共部分的事件。</li>
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
                一、概率的基本性质
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                概率用于描述随机事件发生的可能性。对于任意随机事件 A，
                其概率满足以下基本性质。
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                    01
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900">
                      概率的取值范围
                    </h3>
                    <p className="mt-2 text-lg font-bold text-blue-700">
                      0 ≤ P(A) ≤ 1
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      任意随机事件的概率都在 0 和 1 之间，概率越接近 1，
                      表示事件发生的可能性越大。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                    02
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900">
                      必然事件与不可能事件
                    </h3>
                    <p className="mt-2 text-lg font-bold text-emerald-700">
                      P(Ω) = 1，P(∅) = 0
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      必然事件一定发生，概率为 1；不可能事件一定不发生，
                      概率为 0。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-purple-100 bg-purple-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-bold text-purple-700">
                    03
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900">
                      对立事件的概率关系
                    </h3>
                    <p className="mt-2 text-lg font-bold text-purple-700">
                      P(Aᶜ) = 1 - P(A)
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      事件 A 与其对立事件 Aᶜ 互斥，且两者的并集为整个样本空间。
                      两个事件的概率之和等于 1。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  概率为 0 或 1，分别表示不可能事件或必然事件的概率。
                  在一般概率模型中，不能仅凭某个事件的概率为 0 或 1，
                  就直接断定其事件集合为空集或整个样本空间。
                </p>
              </div>
            </section>

            {/* 知识二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、对立事件与概率的计算
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                有些题目直接计算事件 A 的概率比较困难，
                但计算它的对立事件 Aᶜ 更方便。
                此时可以利用对立事件的概率关系求解。
              </p>

              {/* 对立事件示意图 */}
              <div className="mt-5 rounded-xl border border-slate-200 p-4 sm:p-5">
                <h3 className="font-semibold text-slate-900">
                  对立事件示意图
                </h3>

                <div className="relative mt-4 h-48 overflow-hidden rounded-xl border-2 border-slate-300 bg-slate-50">
                  <span className="absolute left-3 top-2 text-xs font-semibold text-slate-500">
                    样本空间 Ω
                  </span>

                  <div className="absolute inset-x-4 bottom-4 top-9 flex overflow-hidden rounded-2xl border border-slate-300">
                    <div className="flex w-3/5 flex-col items-center justify-center bg-blue-100 px-2 text-center">
                      <span className="text-lg font-bold text-blue-800">
                        A
                      </span>
                      <span className="mt-2 text-xs text-blue-700">
                        P(A)
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center border-l-2 border-white bg-purple-100 px-2 text-center">
                      <span className="text-lg font-bold text-purple-800">
                        Aᶜ
                      </span>
                      <span className="mt-2 text-xs text-purple-700">
                        1 - P(A)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-blue-50 p-4 text-center">
                  <p className="text-xl font-bold text-blue-800">
                    P(A) + P(Aᶜ) = 1
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    A 发生或 A 不发生，两种情况合起来覆盖全部可能结果。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">
                  典型例子：抽取扑克牌
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  从一副不含大小王的 52 张扑克牌中随机抽取 1 张，
                  设 A 为“抽到红桃”，则 Aᶜ 为“没有抽到红桃”。
                  红桃有 13 张，因此：
                </p>
                <p className="mt-4 text-center text-lg font-bold text-blue-700">
                  P(Aᶜ) = 1 - 13 / 52 = 3 / 4
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  这里使用补事件，直接通过 1 减去抽到红桃的概率，
                  就能得到没有抽到红桃的概率。
                </p>
              </div>
            </section>

            {/* 知识三 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 03
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、互斥事件的概率加法公式
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                如果事件 A 与事件 B 互斥，那么它们不能同时发生。
                事件 A ∪ B 表示 A、B 至少有一个发生。
                因为两者没有重叠部分，所以可以直接相加。
              </p>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-center">
                <p className="text-xs font-semibold tracking-wide text-blue-600">
                  ADDITION RULE FOR MUTUALLY EXCLUSIVE EVENTS
                </p>
                <p className="mt-4 text-2xl font-bold text-slate-900">
                  P(A ∪ B) = P(A) + P(B)
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  适用条件：A ∩ B = ∅
                </p>
              </div>

              {/* 互斥事件图 */}
              <div className="mt-5 rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">
                  互斥事件：两个事件没有重叠部分
                </h3>

                <div className="relative mt-4 h-40 rounded-xl border-2 border-slate-300 bg-slate-50">
                  <span className="absolute left-3 top-2 text-xs text-slate-500">
                    Ω
                  </span>
                  <div className="absolute left-[12%] top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-100 font-bold text-blue-800 sm:left-[24%]">
                    A
                  </div>
                  <div className="absolute right-[12%] top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-orange-100 font-bold text-orange-800 sm:right-[24%]">
                    B
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  A 与 B 不存在公共样本点，因此计算两者至少一个发生的概率时，
                  不需要扣除交集。
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">例题</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  某次随机试验中，事件 A 与 B 互斥，且 P(A) = 0.2，
                  P(B) = 0.5，求 P(A ∪ B)。
                </p>
                <div className="mt-4 rounded-lg bg-white p-4">
                  <p className="text-sm text-slate-500">解</p>
                  <p className="mt-2 text-lg font-bold text-blue-700">
                    P(A ∪ B) = 0.2 + 0.5 = 0.7
                  </p>
                </div>
              </div>
            </section>

            {/* 知识四 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 04
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、一般事件的加法公式
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                当 A 与 B 不一定互斥时，它们可能同时发生。
                如果直接将 P(A) 与 P(B) 相加，公共部分会被计算两次，
                因此需要减去交集的概率。
              </p>

              <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 text-center">
                <p className="text-xs font-semibold tracking-wide text-indigo-600">
                  GENERAL ADDITION RULE
                </p>
                <p className="mt-4 text-xl font-bold text-indigo-900 sm:text-2xl">
                  P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  两个事件的并集概率 = 两个事件概率之和 − 交集概率。
                </p>
              </div>

              {/* 交集示意图 */}
              <div className="mt-5 rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">
                  一般事件：存在公共部分
                </h3>

                <div className="relative mt-4 h-48 overflow-hidden rounded-xl border-2 border-slate-300 bg-slate-50">
                  <span className="absolute left-3 top-2 text-xs text-slate-500">
                    Ω
                  </span>

                  <div className="absolute left-[15%] top-1/2 h-28 w-32 -translate-y-1/2 rounded-full border-2 border-blue-400 bg-blue-200/80 sm:left-[24%] sm:w-40" />

                  <div className="absolute right-[15%] top-1/2 h-28 w-32 -translate-y-1/2 rounded-full border-2 border-orange-400 bg-orange-200/80 sm:right-[24%] sm:w-40" />

                  <span className="absolute left-[25%] top-1/2 -translate-y-1/2 font-bold text-blue-900 sm:left-[32%]">
                    A
                  </span>

                  <span className="absolute right-[25%] top-1/2 -translate-y-1/2 font-bold text-orange-900 sm:right-[32%]">
                    B
                  </span>

                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-purple-500 bg-purple-200 text-xs font-bold text-purple-900 sm:h-16 sm:w-16">
                    A ∩ B
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  紫色公共部分同时属于 A 和 B。求并集时，
                  该部分已在 P(A) 和 P(B) 中分别计算一次，因此必须减去一次。
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">例题</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  已知 P(A) = 0.6，P(B) = 0.5，P(A ∩ B) = 0.2，
                  求 P(A ∪ B)。
                </p>
                <div className="mt-4 rounded-lg bg-white p-4">
                  <p className="text-sm text-slate-500">解</p>
                  <p className="mt-2 text-lg font-bold text-blue-700">
                    P(A ∪ B) = 0.6 + 0.5 - 0.2 = 0.9
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">
                  两个公式不要混淆
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  互斥事件的加法公式是一般加法公式的特殊情况。
                  当 A ∩ B = ∅ 时，P(A ∩ B) = 0，
                  一般加法公式就简化为 P(A ∪ B) = P(A) + P(B)。
                </p>
              </div>
            </section>

            {/* 综合例题 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                五、综合例题
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                <p className="font-semibold leading-7 text-slate-900">
                  例题：某班学生参加数学竞赛和物理竞赛。
                  随机选取一名学生，设 A 表示“参加数学竞赛”，
                  B 表示“参加物理竞赛”。已知 P(A) = 0.4，
                  P(B) = 0.3，P(A ∩ B) = 0.1。
                  求至少参加一项竞赛的概率，以及两项竞赛都不参加的概率。
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        1
                      </span>
                      <h3 className="font-semibold text-slate-900">
                        至少参加一项竞赛
                      </h3>
                    </div>
                    <p className="ml-11 mt-2 text-sm leading-7 text-slate-600">
                      “至少参加一项”对应 A ∪ B，因此使用一般加法公式。
                    </p>
                    <p className="ml-11 mt-2 font-semibold text-blue-700">
                      P(A ∪ B) = 0.4 + 0.3 - 0.1 = 0.6
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        2
                      </span>
                      <h3 className="font-semibold text-slate-900">
                        两项竞赛都不参加
                      </h3>
                    </div>
                    <p className="ml-11 mt-2 text-sm leading-7 text-slate-600">
                      “两项都不参加”对应 (A ∪ B)ᶜ，
                      是“至少参加一项”的对立事件。
                    </p>
                    <p className="ml-11 mt-2 font-semibold text-blue-700">
                      P((A ∪ B)ᶜ) = 1 - 0.6 = 0.4
                    </p>
                  </div>
                </div>
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
                六、课后练习
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 3 道题。完成全部题目后提交，即可查看得分和答案解析。
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

            {/* 本节小结 */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY TAKEAWAYS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本节小结
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 概率的取值范围：0 ≤ P(A) ≤ 1。</li>
                <li>• 必然事件的概率为 1，不可能事件的概率为 0。</li>
                <li>• 对立事件的概率公式：P(Aᶜ) = 1 - P(A)。</li>
                <li>• 互斥事件的加法公式：P(A ∪ B) = P(A) + P(B)。</li>
                <li>• 一般加法公式：P(A ∪ B) = P(A) + P(B) - P(A ∩ B)。</li>
                <li>• 计算并事件概率时，先判断两个事件是否互斥。</li>
              </ul>
            </section>

            {/* 上下节导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/probability/classical-probability"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：古典概型
              </Link>

              <Link
                href="/grade1/probability/probability-application"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：概率综合应用 →
              </Link>
            </div>
          </div>

          {/* 右侧学习导航 */}
          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-6">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CHAPTER 10
              </p>
              <h2 className="mt-2 text-lg font-bold text-slate-900">
                概率
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                本章共五节，从随机事件逐步学习概率的计算与应用。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 4 / 5 节
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">本章课程目录</h3>

                <div className="mt-4 space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        lesson.number === "04"
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            lesson.number === "04"
                              ? "text-blue-600"
                              : "text-slate-400"
                          }`}
                        >
                          {lesson.number}
                        </span>

                        <div className="min-w-0 flex-1">
                          {lesson.ready ? (
                            <Link
                              href={lesson.href}
                              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600"
                            >
                              {lesson.title}
                            </Link>
                          ) : (
                            <p className="text-sm font-medium leading-6 text-slate-500">
                              {lesson.title}
                            </p>
                          )}

                          {lesson.number === "04" && (
                            <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                              当前学习
                            </span>
                          )}

                          {!lesson.ready && (
                            <p className="mt-1 text-xs text-slate-400">
                              内容待开发
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">本节核心公式</h3>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <p className="text-xs text-slate-500">对立事件</p>
                    <p className="mt-1 font-bold text-blue-800">
                      P(Aᶜ) = 1 - P(A)
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-3">
                    <p className="text-xs text-slate-500">互斥事件</p>
                    <p className="mt-1 font-bold text-emerald-800">
                      P(A ∪ B) = P(A) + P(B)
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-3">
                    <p className="text-xs text-slate-500">一般加法公式</p>
                    <p className="mt-1 font-bold leading-6 text-purple-800">
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
