
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
    ready: false,
  },
  {
    number: "04",
    title: "概率的基本性质",
    href: "/grade1/probability/probability-properties",
    ready: false,
  },
  {
    number: "05",
    title: "概率综合应用",
    href: "/grade1/probability/probability-application",
    ready: false,
  },
];

const quizQuestions = [
  {
    id: "event-relations-01",
    title: "第 1 题 · 事件的交",
    question:
      "掷一枚六面骰子一次，样本空间为 Ω = {1, 2, 3, 4, 5, 6}。设 A = {2, 4, 6}，B = {4, 5, 6}，则 A ∩ B 等于：",
    options: [
      { key: "A", text: "{2, 4, 6}" },
      { key: "B", text: "{4, 6}" },
      { key: "C", text: "{2, 5}" },
      { key: "D", text: "{1, 2, 3, 4, 5, 6}" },
    ],
    answer: "B",
    explanation:
      "交集 A ∩ B 表示同时属于 A 和 B 的样本点。A 与 B 共同包含 4 和 6，因此 A ∩ B = {4, 6}。",
  },
  {
    id: "event-relations-02",
    title: "第 2 题 · 互斥事件",
    question:
      "掷一枚六面骰子一次，设 A = {1, 2}，B = {5, 6}。关于 A 与 B，下列说法正确的是：",
    options: [
      { key: "A", text: "A 与 B 是相等事件" },
      { key: "B", text: "A 与 B 是对立事件" },
      { key: "C", text: "A 与 B 互斥" },
      { key: "D", text: "A 是 B 的子事件" },
    ],
    answer: "C",
    explanation:
      "A ∩ B = ∅，所以 A 与 B 互斥。但 A ∪ B = {1, 2, 5, 6}，没有覆盖整个样本空间，因此它们不是对立事件。",
  },
  {
    id: "event-relations-03",
    title: "第 3 题 · 对立事件",
    question:
      "掷一枚六面骰子一次，设 A 为“点数是偶数”，则 A 的对立事件是：",
    options: [
      { key: "A", text: "点数大于 3" },
      { key: "B", text: "点数小于 4" },
      { key: "C", text: "点数是奇数" },
      { key: "D", text: "点数是 2 或 4" },
    ],
    answer: "C",
    explanation:
      "A = {2, 4, 6}，其对立事件为 A 的补集，即 Aᶜ = {1, 3, 5}，对应点数为奇数。",
  },
];

export default function EventRelationsPage() {
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
          <span className="text-slate-700">事件的关系与运算</span>
        </nav>

        {/* 章节头部 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 2 节 · 事件关系
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            事件的关系与运算
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从事件包含与相等出发，理解互斥事件和对立事件，
            掌握事件的交、并与补集运算，学会用集合语言描述随机事件。
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
                <li>• 理解事件包含、相等、互斥和对立的含义。</li>
                <li>• 掌握事件的交、并与补集的表示方法。</li>
                <li>• 能根据样本空间和事件集合判断事件之间的关系。</li>
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
                一、事件的包含与相等
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600">
                <p>
                  在同一个随机试验中，如果事件 A 发生时事件 B
                  一定发生，那么称事件 A 包含于事件 B，记作 A ⊆ B。
                </p>
                <p>
                  如果 A ⊆ B 且 B ⊆ A，那么 A 与 B 包含完全相同的样本点，
                  称 A 与 B 相等，记作 A = B。
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                  <h3 className="font-semibold text-slate-900">
                    事件包含
                  </h3>
                  <div className="relative mx-auto mt-4 h-40 max-w-xs rounded-xl border-2 border-slate-300 bg-white">
                    <span className="absolute left-2 top-2 text-xs text-slate-500">
                      Ω
                    </span>
                    <div className="absolute left-1/2 top-1/2 flex h-28 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-50">
                      <span className="absolute right-4 top-3 text-sm font-semibold text-blue-700">
                        B
                      </span>
                      <div className="flex h-14 w-20 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-200 text-sm font-bold text-blue-900">
                        A
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A 的所有样本点都属于 B，因此 A ⊆ B。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">
                    事件相等
                  </h3>
                  <div className="relative mx-auto mt-4 flex h-40 max-w-xs items-center justify-center rounded-xl border-2 border-slate-300 bg-white">
                    <span className="absolute left-2 top-2 text-xs text-slate-500">
                      Ω
                    </span>
                    <div className="flex h-24 w-36 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-100 font-bold text-emerald-800">
                      A = B
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A 与 B 包含完全相同的样本点，因此 A = B。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  例：掷一次六面骰子
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  设 A 为“点数是 2”，B 为“点数是偶数”，则
                  A = {"{2}"}，B = {"{2, 4, 6}"}。
                  因为 A 的样本点全部属于 B，所以 A ⊆ B。
                </p>
              </div>
            </section>

            {/* 知识二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、互斥事件与对立事件
              </h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                  <h3 className="font-bold text-slate-900">互斥事件</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    如果事件 A 与事件 B 不能同时发生，即它们没有共同的样本点，
                    则称 A 与 B 互斥。
                  </p>
                  <p className="mt-2 text-center font-semibold text-amber-800">
                    A ∩ B = ∅
                  </p>
                </div>

                <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4">
                  <h3 className="font-bold text-slate-900">对立事件</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    如果 A 与 B 不能同时发生，并且两者至少有一个必然发生，
                    则称 A 与 B 互为对立事件。
                  </p>
                  <p className="mt-2 text-center font-semibold text-purple-800">
                    A ∩ B = ∅，A ∪ B = Ω
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">
                    互斥：没有公共部分
                  </h3>
                  <div className="relative mx-auto mt-4 h-36 max-w-xs rounded-xl border-2 border-slate-300 bg-white">
                    <span className="absolute left-2 top-2 text-xs text-slate-500">
                      Ω
                    </span>
                    <div className="absolute left-4 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-100 text-sm font-bold text-blue-800">
                      A
                    </div>
                    <div className="absolute right-4 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-orange-100 text-sm font-bold text-orange-800">
                      B
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    A、B 不能同时发生，但可能同时都不发生。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">
                    对立：互斥且覆盖 Ω
                  </h3>
                  <div className="relative mx-auto mt-4 h-36 max-w-xs rounded-xl border-2 border-slate-300 bg-slate-50">
                    <span className="absolute left-2 top-2 text-xs text-slate-500">
                      Ω
                    </span>
                    <div className="absolute inset-x-3 bottom-3 top-8 flex overflow-hidden rounded-full border-2 border-purple-300">
                      <div className="flex flex-1 items-center justify-center bg-blue-100 text-sm font-bold text-blue-800">
                        A
                      </div>
                      <div className="flex flex-1 items-center justify-center border-l-2 border-purple-300 bg-orange-100 text-sm font-bold text-orange-800">
                        B
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    A、B 既互斥，又合起来覆盖整个样本空间。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-900">
                  重要区别
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  对立事件一定互斥，但互斥事件不一定对立。判断对立事件，
                  必须同时检查“没有公共样本点”和“合起来覆盖全部样本点”。
                </p>
              </div>
            </section>

            {/* 知识三 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 03
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、事件的交、并与补集
              </h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900">
                    1. 交事件 A ∩ B
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    表示 A 与 B 同时发生，即同时属于 A 和 B 的样本点组成的事件。
                  </p>
                  <p className="mt-2 font-semibold text-blue-700">
                    A ∩ B = {"{同时属于 A 和 B 的样本点}"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900">
                    2. 并事件 A ∪ B
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    表示 A 与 B 至少有一个发生，即属于 A 或属于 B 的样本点组成的事件。
                    两个事件同时发生的结果也包含在内。
                  </p>
                  <p className="mt-2 font-semibold text-blue-700">
                    A ∪ B = {"{属于 A 或属于 B 的样本点}"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900">
                    3. 补事件 Aᶜ
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    在样本空间 Ω 中，不属于 A 的所有样本点组成 A 的对立事件，
                    记作 Aᶜ，也可记作 Ā。
                  </p>
                  <p className="mt-2 font-semibold text-blue-700">
                    A ∩ Aᶜ = ∅，A ∪ Aᶜ = Ω
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">
                  综合示例：掷一次六面骰子
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  设 A = {"{2, 4, 6}"} 表示点数为偶数，
                  B = {"{4, 5, 6}"} 表示点数不小于 4。
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate-400">交事件</p>
                    <p className="mt-1 font-semibold text-blue-700">
                      A ∩ B = {"{4, 6}"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate-400">并事件</p>
                    <p className="mt-1 font-semibold text-blue-700">
                      A ∪ B = {"{2, 4, 5, 6}"}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-xs text-slate-400">A 的补事件</p>
                    <p className="mt-1 font-semibold text-blue-700">
                      Aᶜ = {"{1, 3, 5}"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 典型例题 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                WORKED EXAMPLE
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                四、典型例题
              </h2>

              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                <p className="text-sm font-semibold leading-7 text-slate-900">
                  例题：掷一枚六面骰子一次，设 A 为“点数小于 4”，
                  B 为“点数是偶数”。求 A ∩ B、A ∪ B 和 Aᶜ。
                </p>

                <div className="mt-4 border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">解</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    样本空间为 Ω = {"{1, 2, 3, 4, 5, 6}"}。
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A = {"{1, 2, 3}"}，B = {"{2, 4, 6}"}。
                  </p>
                  <div className="mt-3 space-y-3">
                    <p className="text-sm leading-7 text-slate-700">
                      交事件：
                      <span className="font-semibold text-blue-700">
                        {" "}A ∩ B = {"{2}"}
                      </span>
                    </p>
                    <p className="text-sm leading-7 text-slate-700">
                      并事件：
                      <span className="font-semibold text-blue-700">
                        {" "}A ∪ B = {"{1, 2, 3, 4, 6}"}
                      </span>
                    </p>
                    <p className="text-sm leading-7 text-slate-700">
                      补事件：
                      <span className="font-semibold text-blue-700">
                        {" "}Aᶜ = {"{4, 5, 6}"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">解题提醒</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  求交集时保留共同元素；求并集时合并所有元素并去除重复项；
                  求补集时必须以给定的样本空间为范围。
                </p>
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
                五、课后练习
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

            {/* 本节总结 */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KEY TAKEAWAYS
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本节小结
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• A ⊆ B：事件 A 包含于事件 B。</li>
                <li>• A ∩ B = ∅：事件 A 与 B 互斥。</li>
                <li>• A ∩ B = ∅ 且 A ∪ B = Ω：A 与 B 互为对立事件。</li>
                <li>• A ∩ B 表示同时发生，A ∪ B 表示至少一个发生。</li>
                <li>• Aᶜ 表示在样本空间中不属于 A 的所有样本点组成的事件。</li>
              </ul>
            </section>

            {/* 上下节导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/probability/random-events"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：随机事件与样本空间
              </Link>

              <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-400">
                下一节：古典概型（待开发）
              </span>
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
                <div className="h-full w-2/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 2 / 5 节
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">本章课程目录</h3>

                <div className="mt-4 space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        lesson.number === "02"
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            lesson.number === "02"
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

                          {lesson.number === "02" && (
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
                <h3 className="font-bold text-slate-900">本节核心概念</h3>

                <div className="mt-3 space-y-3 text-sm">
                  <div>
                    <p className="text-slate-400">交事件</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      A ∩ B
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">并事件</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      A ∪ B
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">补事件</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      Aᶜ
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">对立事件的条件</p>
                    <p className="mt-1 font-semibold leading-6 text-slate-800">
                      A ∩ B = ∅，A ∪ B = Ω
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
