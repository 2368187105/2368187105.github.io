
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
    id: "probability-01",
    title: "第 1 题 · 认识随机试验",
    question:
      "下列活动中，最适合看作随机试验的是：",
    options: [
      { key: "A", text: "测量同一物体的确定长度" },
      { key: "B", text: "在标准条件下计算 2 + 3" },
      { key: "C", text: "抛掷一枚硬币，观察出现正面还是反面" },
      { key: "D", text: "观察一个已经发生且结果已知的事件" },
    ],
    answer: "C",
    explanation:
      "抛掷硬币的结果具有随机性，所有可能结果可以事先确定，但单次试验的具体结果事先无法确定，因此适合看作随机试验。",
  },
  {
    id: "probability-02",
    title: "第 2 题 · 确定样本空间",
    question:
      "将一枚质地均匀的骰子掷一次，记点数大于 4 的事件为 A，则 A 为：",
    options: [
      { key: "A", text: "{1, 2, 3, 4}" },
      { key: "B", text: "{5, 6}" },
      { key: "C", text: "{1, 2, 3, 4, 5, 6}" },
      { key: "D", text: "{4, 5, 6}" },
    ],
    answer: "B",
    explanation:
      "掷一次骰子的样本空间为 Ω = {1, 2, 3, 4, 5, 6}。点数大于 4 的结果只有 5 和 6，因此 A = {5, 6}。",
  },
  {
    id: "probability-03",
    title: "第 3 题 · 判断事件类型",
    question:
      "掷一枚普通六面骰子一次，事件“点数是大于 0 且小于 7 的整数”属于：",
    options: [
      { key: "A", text: "必然事件" },
      { key: "B", text: "不可能事件" },
      { key: "C", text: "随机事件" },
      { key: "D", text: "无法判断的事件" },
    ],
    answer: "A",
    explanation:
      "骰子的点数只能是 1、2、3、4、5、6，全部满足大于 0 且小于 7 的条件，因此该事件一定发生，是必然事件。",
  },
];

export default function RandomEventsPage() {
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
          <span className="text-slate-700">随机事件与样本空间</span>
        </nav>

        {/* 章节头部 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 1 节 · 随机事件
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            随机事件与样本空间
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从随机试验出发，认识样本点与样本空间，理解必然事件、
            不可能事件和随机事件，为学习概率计算打下基础。
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
          {/* 左侧课程正文 */}
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
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  理解随机试验的基本特点。
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  能够写出简单随机试验的样本空间。
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  区分必然事件、不可能事件和随机事件。
                </li>
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
                一、随机试验
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                在概率学习中，我们经常研究抛硬币、掷骰子、抽取卡片等活动。
                这些活动具有一定的随机性，可以通过数学方法描述其可能结果。
              </p>

              <div className="mt-4 rounded-xl bg-blue-50/70 p-5">
                <h3 className="font-semibold text-slate-900">
                  随机试验通常具有以下特点
                </h3>
                <ol className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>1. 在相同条件下可以重复进行。</li>
                  <li>2. 每次试验的所有可能结果可以事先确定。</li>
                  <li>3. 在一次试验中，具体出现哪种结果通常事先无法确定。</li>
                </ol>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    例子：抛掷硬币
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 text-lg font-bold text-blue-700">
                      正
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-200 bg-amber-50 text-lg font-bold text-amber-700">
                      反
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    结果可能为正面或反面，但单次结果事先无法确定。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    例子：掷一次骰子
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div
                        key={n}
                        className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 font-semibold text-slate-700"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    可能出现 1 至 6 中的任意一个点数。
                  </p>
                </div>
              </div>
            </section>

            {/* 知识二 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 02
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                二、样本点与样本空间
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600">
                <p>
                  <strong className="text-slate-900">样本点：</strong>
                  随机试验的每一种可能结果。
                </p>
                <p>
                  <strong className="text-slate-900">样本空间：</strong>
                  所有样本点组成的集合，通常用希腊字母 Ω 表示。
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  例：掷一枚六面骰子一次
                </p>
                <div className="mt-4 rounded-xl bg-white p-4 text-center">
                  <p className="text-xs text-slate-500">样本空间</p>
                  <p className="mt-2 break-words text-lg font-semibold text-blue-700">
                    Ω = {"{1, 2, 3, 4, 5, 6}"}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-slate-600">
                    如果事件 A 表示“点数为偶数”，那么：
                  </p>
                  <p className="mt-2 text-center text-lg font-semibold text-blue-700">
                    A = {"{2, 4, 6}"}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {[1, 2, 3, 4, 5, 6].map((n) => {
                    const isEven = n % 2 === 0;

                    return (
                      <div
                        key={n}
                        className={`flex h-12 items-center justify-center rounded-xl border text-base font-bold ${
                          isEven
                            ? "border-blue-300 bg-blue-100 text-blue-700"
                            : "border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        {n}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  蓝色数字表示事件 A 包含的样本点，即 2、4、6。
                </p>
              </div>
            </section>

            {/* 知识三 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                KNOWLEDGE 03
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                三、事件的分类
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                对于随机试验中的某个结果或结果集合，可以根据其是否一定发生，
                将事件分为以下三类。
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                      一定发生
                    </span>
                    <h3 className="font-bold text-slate-900">必然事件</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    在每次试验中都一定发生的事件。
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    例：掷一次六面骰子，点数小于 7。
                  </p>
                </div>

                <div className="rounded-xl border border-rose-100 bg-rose-50/60 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">
                      不会发生
                    </span>
                    <h3 className="font-bold text-slate-900">不可能事件</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    在每次试验中都不可能发生的事件。
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    例：掷一次六面骰子，点数为 7。
                  </p>
                </div>

                <div className="rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                      可能发生
                    </span>
                    <h3 className="font-bold text-slate-900">随机事件</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    在一定条件下可能发生，也可能不发生的事件。
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    例：掷一次六面骰子，点数大于 4。
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
                  例题：掷一枚六面骰子一次，样本空间为
                  Ω = {"{1, 2, 3, 4, 5, 6}"}。
                  设事件 A 为“点数不小于 5”，事件 B 为“点数是奇数”。
                  分别写出 A、B 对应的样本点。
                </p>

                <div className="mt-4 border-l-4 border-blue-500 pl-4">
                  <p className="text-sm font-semibold text-slate-900">
                    解
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    点数不小于 5 的结果为 5、6，因此：
                  </p>
                  <p className="mt-1 font-semibold text-blue-700">
                    A = {"{5, 6}"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    点数为奇数的结果为 1、3、5，因此：
                  </p>
                  <p className="mt-1 font-semibold text-blue-700">
                    B = {"{1, 3, 5}"}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  样本空间表示所有可能结果，而一个事件只包含满足该事件条件的结果。
                  列举时不要遗漏，也不要加入不符合条件的样本点。
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
                本节共 3 道题。请选择每道题的答案，全部作答后提交查看得分与解析。
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
                <li>
                  • 随机试验的所有可能结果可以事先确定，但具体结果具有随机性。
                </li>
                <li>
                  • 样本空间 Ω 是所有样本点组成的集合。
                </li>
                <li>
                  • 必然事件一定发生，不可能事件一定不发生，随机事件可能发生也可能不发生。
                </li>
                <li>
                  • 列举事件时，应从样本空间中找出所有符合条件的样本点。
                </li>
              </ul>
            </section>

            {/* 页面底部导航 */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/probability"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                ← 返回概率课程目录
              </Link>

              <Link href="/grade1/probability/event-relations" className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100">下一节：事件的关系与运算 →</Link>
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
                <div className="h-full w-1/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 1 / 5 节
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">本章课程目录</h3>

                <div className="mt-4 space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.number}
                      className={`rounded-xl border p-3 ${
                        lesson.number === "01"
                          ? "border-blue-200 bg-blue-50/60"
                          : "border-slate-100 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-xs font-bold ${
                            lesson.number === "01"
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

                          {lesson.number === "01" && (
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
                    <p className="text-slate-400">样本空间</p>
                    <p className="mt-1 font-medium text-slate-800">
                      Ω = 所有可能结果的集合
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">样本点</p>
                    <p className="mt-1 font-medium text-slate-800">
                      一种可能的试验结果
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">事件</p>
                    <p className="mt-1 font-medium text-slate-800">
                      满足特定条件的结果或结果集合
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
