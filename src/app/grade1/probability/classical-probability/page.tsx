
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
    id: "classical-probability-01",
    title: "第 1 题 · 古典概型的概率计算",
    question:
      "将一枚质地均匀的六面骰子掷一次，求点数为偶数的概率。",
    options: [
      { key: "A", text: "1/6" },
      { key: "B", text: "1/3" },
      { key: "C", text: "1/2" },
      { key: "D", text: "2/3" },
    ],
    answer: "C",
    explanation:
      "样本空间为 {1, 2, 3, 4, 5, 6}，共有 6 个等可能的基本事件。点数为偶数的事件包含 {2, 4, 6}，共有 3 个基本事件。因此 P(A) = 3/6 = 1/2。",
  },
  {
    id: "classical-probability-02",
    title: "第 2 题 · 抽取卡片",
    question:
      "有 5 张大小、形状相同的卡片，分别标有数字 1、2、3、4、5。随机抽取 1 张，求抽到数字大于 3 的卡片的概率。",
    options: [
      { key: "A", text: "1/5" },
      { key: "B", text: "2/5" },
      { key: "C", text: "3/5" },
      { key: "D", text: "4/5" },
    ],
    answer: "B",
    explanation:
      "5 张卡片被抽到的可能性相同。数字大于 3 的卡片是 4、5，共 2 张；所有可能结果共 5 个。因此所求概率为 2/5。",
  },
  {
    id: "classical-probability-03",
    title: "第 3 题 · 连续抛掷两次硬币",
    question:
      "连续抛掷一枚质地均匀的硬币两次，求恰好出现一次正面的概率。两次抛掷相互独立。",
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/3" },
      { key: "C", text: "1/2" },
      { key: "D", text: "3/4" },
    ],
    answer: "C",
    explanation:
      "样本空间为 {正正，正反，反正，反反}，共 4 个等可能结果。恰好出现一次正面的结果为正反、反正，共 2 个。因此概率为 2/4 = 1/2。",
  },
];

export default function ClassicalProbabilityPage() {
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
          <span className="text-slate-700">古典概型</span>
        </nav>

        {/* 章节头部 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 3 节 · 古典概型
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            古典概型
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从等可能的随机试验出发，理解古典概型的基本特点，
            学会确定样本空间和目标事件，掌握利用基本事件数量计算概率的方法。
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
                <li>• 理解古典概型的两个基本特点。</li>
                <li>• 能够列举样本空间和目标事件包含的基本事件。</li>
                <li>• 掌握古典概型的概率公式，并能解决简单实际问题。</li>
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
                一、什么是古典概型？
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                古典概型是一类可以通过统计等可能基本事件的数量来计算概率的模型。
                判断一个随机试验是否属于古典概型，需要同时满足以下两个条件。
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-700">
                    01
                  </div>
                  <h3 className="mt-3 font-bold text-slate-900">
                    有限性
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    试验中所有可能出现的基本事件只有有限个。
                  </p>
                  <p className="mt-3 text-sm font-medium text-blue-700">
                    例如：掷一次六面骰子，可能点数有 6 种。
                  </p>
                </div>

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg font-bold text-indigo-700">
                    02
                  </div>
                  <h3 className="mt-3 font-bold text-slate-900">
                    等可能性
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    每个基本事件发生的可能性相同。
                  </p>
                  <p className="mt-3 text-sm font-medium text-indigo-700">
                    例如：质地均匀的骰子，各个点数出现的概率相同。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">
                  注意
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  可能结果有限，并不意味着一定是古典概型；
                  还必须保证所有基本事件等可能。
                  例如，一枚质地不均匀的硬币不一定满足等可能性。
                </p>
              </div>
            </section>

            {/* 知识二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、古典概型的概率公式
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                在古典概型中，如果样本空间包含 n 个等可能的基本事件，
                事件 A 包含其中 m 个基本事件，那么事件 A 的概率可以用以下公式计算。
              </p>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 text-center">
                <p className="text-xs font-semibold tracking-wide text-blue-600">
                  CLASSICAL PROBABILITY
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  <span>P(A) =</span>
                  <span className="inline-flex flex-col items-center">
                    <span className="border-b-2 border-slate-800 px-3 pb-2">
                      m
                    </span>
                    <span className="px-3 pt-2">n</span>
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  m：事件 A 包含的基本事件个数
                  <br />
                  n：样本空间中基本事件的总数
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-4 text-center">
                  <p className="text-sm text-slate-500">第一步</p>
                  <p className="mt-2 font-semibold text-slate-900">
                    确定样本空间
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 text-center">
                  <p className="text-sm text-slate-500">第二步</p>
                  <p className="mt-2 font-semibold text-slate-900">
                    找出有利结果
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 text-center">
                  <p className="text-sm text-slate-500">第三步</p>
                  <p className="mt-2 font-semibold text-slate-900">
                    计算 m / n
                  </p>
                </div>
              </div>
            </section>

            {/* 知识三 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 03
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、用基本事件计算概率
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                计算概率时，关键是明确样本空间，并且按照试验的实际规则确定哪些结果等可能。
                对于简单试验，可以通过列表、表格或分类讨论列举所有可能结果。
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">
                  示例：抛掷一枚均匀硬币两次
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  每次结果可能为正面或反面。按照第一次和第二次的顺序，
                  可以列出以下四个等可能结果。
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "正正", favorable: false },
                    { label: "正反", favorable: true },
                    { label: "反正", favorable: true },
                    { label: "反反", favorable: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-xl border p-4 text-center ${
                        item.favorable
                          ? "border-blue-300 bg-blue-50"
                          : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="text-xs text-slate-500">
                        基本事件
                      </div>
                      <div
                        className={`mt-2 text-lg font-bold ${
                          item.favorable
                            ? "text-blue-700"
                            : "text-slate-700"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {item.favorable ? "符合条件" : "不符合条件"}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-blue-50/70 p-4">
                  <p className="text-sm leading-7 text-slate-700">
                    如果事件 A 表示“恰好出现一次正面”，则有利结果为正反、反正。
                    所以：
                  </p>
                  <p className="mt-3 text-center text-lg font-bold text-blue-700">
                    P(A) = 2 / 4 = 1 / 2
                  </p>
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
                  例题：一个不透明的袋子中有 3 个红球和 2 个蓝球，
                  除颜色外其余均相同。从中随机取出 1 个球。
                  求取出红球的概率。
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-slate-900">
                    解题步骤
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          确定基本事件总数
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          袋中共有 3 + 2 = 5 个球，每个球被取出的可能性相同。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          确定有利基本事件数
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          取出红球有 3 种等可能结果。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          代入公式
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          有利结果数为 3，基本事件总数为 5。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                    <p className="text-sm text-emerald-800">最终答案</p>
                    <p className="mt-2 text-2xl font-bold text-emerald-800">
                      P(A) = 3 / 5
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <p className="font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  不要把“颜色的种类数”当作基本事件总数。
                  本题抽取的是一个球，因此应按每个球被抽中的等可能结果计数，
                  而不是简单地认为红、蓝两种颜色各占一半。
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
                <li>• 古典概型需要满足有限性和等可能性两个条件。</li>
                <li>• 样本空间包含 n 个等可能基本事件。</li>
                <li>• 事件 A 包含 m 个基本事件时，P(A) = m / n。</li>
                <li>• 计算概率时，要正确列举全部基本事件和有利基本事件。</li>
                <li>• 概率取值在 0 与 1 之间，必然事件的概率为 1，不可能事件的概率为 0。</li>
              </ul>
            </section>

            {/* 上下节导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/probability/event-relations"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 上一节：事件的关系与运算
              </Link>

              <Link
                href="/grade1/probability/probability-properties"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：概率的基本性质 →
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
                <div className="h-full w-3/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 3 / 5 节
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">本章课程目录</h3>

                <div className="mt-4 space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        lesson.number === "03"
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            lesson.number === "03"
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

                          {lesson.number === "03" && (
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

                <div className="mt-3 rounded-xl bg-blue-50 p-4 text-center">
                  <p className="text-xl font-bold text-blue-800">
                    P(A) = m / n
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    m 为有利基本事件数，n 为基本事件总数。
                  </p>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-slate-400">基本条件一</p>
                    <p className="mt-1 font-medium text-slate-800">
                      基本事件有限
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">基本条件二</p>
                    <p className="mt-1 font-medium text-slate-800">
                      基本事件等可能
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
