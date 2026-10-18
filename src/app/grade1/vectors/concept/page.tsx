
"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuickQuestion = {
  id: number;
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: QuickQuestion[] = [
  {
    id: 1,
    question: "下列各量中，属于向量的是：",
    options: [
      { key: "A", text: "温度" },
      { key: "B", text: "质量" },
      { key: "C", text: "位移" },
      { key: "D", text: "面积" },
    ],
    answer: "C",
    explanation:
      "位移既有大小又有方向，因此是向量。温度、质量和面积只有大小，没有方向。",
  },
  {
    id: 2,
    question:
      "两个非零向量的长度相等、方向相反，那么这两个向量：",
    options: [
      { key: "A", text: "一定是相等向量" },
      { key: "B", text: "一定是相反向量" },
      { key: "C", text: "一定是单位向量" },
      { key: "D", text: "一定是零向量" },
    ],
    answer: "B",
    explanation:
      "相反向量的定义是模相等、方向相反。相等向量则要求模相等且方向相同。",
  },
  {
    id: 3,
    question:
      "关于零向量和单位向量，下列说法正确的是：",
    options: [
      { key: "A", text: "零向量的长度是 1" },
      { key: "B", text: "所有单位向量都相等" },
      { key: "C", text: "单位向量的模为 1" },
      { key: "D", text: "零向量具有确定的方向" },
    ],
    answer: "C",
    explanation:
      "单位向量的模为 1，但方向可以不同；零向量的模为 0，方向不确定。",
  },
];

export default function VectorsConceptPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, key: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: key,
    }));
  }

  function submitAnswer(id: number) {
    if (!answers[id]) return;

    setSubmitted((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  function resetQuestion(id: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  const completedCount = questions.filter(
    (question) => submitted[question.id]
  ).length;

  const correctCount = questions.filter(
    (question) =>
      submitted[question.id] &&
      answers[question.id] === question.answer
  ).length;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-700">
            首页
          </Link>

          <span>/</span>

          <Link href="/grade1" className="hover:text-slate-700">
            高一数学
          </Link>

          <span>/</span>

          <Link
            href="/grade1/vectors"
            className="hover:text-slate-700"
          >
            平面向量
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            向量的概念与表示
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 06 章 · 第 01 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础知识点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              平面向量的概念与表示
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              在实际生活中，有些量只有大小，
              而有些量不仅有大小，还有方向。
              本节从向量的基本概念开始，
              认识向量的几何表示、向量的模，
              以及几种特殊向量之间的关系。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#definition"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                即时检测
              </a>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_240px]">
          {/* 课程正文 */}
          <div className="min-w-0 space-y-10">
            {/* 第一部分 */}
            <section
              id="definition"
              className="scroll-mt-28"
            >
              <SectionTitle
                number="01"
                title="什么是向量"
                subtitle="向量的本质是大小与方向"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                数学中，我们把
                <strong className="text-slate-900">
                  既有大小，又有方向的量
                </strong>
                叫作向量。
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                与之相对，只有大小、没有方向的量叫作数量。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ConceptCard
                  title="数量"
                  description="只考虑大小"
                  examples="质量、温度、面积、路程"
                  accent="slate"
                />

                <ConceptCard
                  title="向量"
                  description="同时考虑大小和方向"
                  examples="位移、速度、力"
                  accent="blue"
                />
              </div>

              <Note>
                例如，“汽车行驶了 5 km”描述的是路程；
                而“向东位移 5 km”既说明大小又说明方向，
                描述的是位移向量。
              </Note>
            </section>

            {/* 第二部分 */}
            <section
              id="representation"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="02"
                title="向量的几何表示"
                subtitle="用带箭头的线段表示向量"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                向量可以用有向线段表示。
                有向线段具有起点、终点和方向。
                线段长度表示向量的大小，
                箭头指向表示向量的方向。
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                <VectorDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  向量的几何表示：从起点 A 指向终点 B
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-slate-50 px-5 py-5">
                <p className="mb-3 text-sm font-medium text-slate-700">
                  向量的表示方法
                </p>

                <BlockMath
                  math={String.raw`\overrightarrow{AB}`}
                />

                <p className="text-center text-sm leading-7 text-slate-500">
                  或使用带箭头的小写字母
                </p>

                <BlockMath
                  math={String.raw`\overrightarrow{a},\quad \overrightarrow{b},\quad \overrightarrow{c}`}
                />
              </div>

              <Note>
                有向线段 AB 与 BA 的方向相反，
                因此它们表示的向量一般不相等。
                向量可以平移，只要大小和方向不变，
                所表示的向量就不变。
              </Note>
            </section>

            {/* 第三部分 */}
            <section
              id="magnitude"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="03"
                title="向量的模"
                subtitle="向量的大小，也就是长度"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                向量的大小叫作向量的长度，也叫作向量的模。
                向量的模是一个非负数，不包含方向信息。
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 px-5 py-6">
                <BlockMath
                  math={String.raw`|\overrightarrow{a}|`}
                />

                <p className="mt-2 text-center text-sm text-slate-500">
                  表示向量 a 的模
                </p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                如果有向线段 AB 的长度为 4 个单位，
                那么：
              </p>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <BlockMath
                  math={String.raw`|\overrightarrow{AB}|=4`}
                />
              </div>

              <Note>
                向量有大小和方向，而向量的模只有大小。
                两个向量的模相等，不代表两个向量一定相等。
              </Note>
            </section>

            {/* 第四部分 */}
            <section
              id="special"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="04"
                title="零向量与单位向量"
                subtitle="两类需要特别记住的向量"
              />

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    零向量
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    长度为 0 的向量叫作零向量，
                    记作：
                  </p>

                  <BlockMath
                    math={String.raw`\overrightarrow{0}`}
                  />

                  <p className="text-sm leading-7 text-slate-600">
                    零向量的模等于 0，方向不确定。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    单位向量
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    长度为 1 个单位的向量叫作单位向量。
                  </p>

                  <BlockMath
                    math={String.raw`|\overrightarrow{e}|=1`}
                  />

                  <p className="text-sm leading-7 text-slate-600">
                    单位向量只规定模长，并没有规定方向。
                    因此，不同方向的单位向量不一定相等。
                  </p>
                </div>
              </div>
            </section>

            {/* 第五部分 */}
            <section
              id="relations"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="05"
                title="向量之间的关系"
                subtitle="理解相等、相反与平行"
              />

              <div className="mt-6 space-y-5">
                <RelationCard
                  title="相等向量"
                  description="长度相等，并且方向相同的向量。"
                  formula={String.raw`\overrightarrow{a}=\overrightarrow{b}`}
                />

                <RelationCard
                  title="相反向量"
                  description="长度相等，但方向相反的两个向量。"
                  formula={String.raw`\overrightarrow{a}=-\overrightarrow{b}`}
                />

                <RelationCard
                  title="平行向量（共线向量）"
                  description="方向相同或相反的两个非零向量叫作平行向量，也叫作共线向量。通常规定零向量与任意向量平行。"
                  formula={String.raw`\overrightarrow{a}\parallel\overrightarrow{b}`}
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                <RelationDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  同方向、反方向与不同方向的向量示意
                </p>
              </div>

              <Note>
                判断两个向量是否相等，需要同时满足
                “模相等”和“方向相同”。
                仅仅平行或者模相等，都不足以说明两个向量相等。
              </Note>
            </section>

            {/* 第六部分 */}
            <section
              id="examples"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="06"
                title="典型例题"
                subtitle="把概念应用到具体问题"
              />

              <div className="mt-6 space-y-4">
                <ExampleCard
                  number="例题 1"
                  question="两个向量长度都是 3，能否直接判断它们相等？"
                  answer="不能。相等向量不仅要求长度相等，还要求方向相同。"
                />

                <ExampleCard
                  number="例题 2"
                  question="两个长度都为 1 的向量，一定是相等向量吗？"
                  answer="不一定。它们都是单位向量，但是方向可能不同。"
                />

                <ExampleCard
                  number="例题 3"
                  question="两个非零向量方向相反，长度分别为 3 和 5，它们是相反向量吗？"
                  answer="不是。相反向量必须模相等且方向相反。这两个向量平行，但不是相反向量。"
                />
              </div>
            </section>

            {/* 第七部分 */}
            <section
              id="quiz"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="07"
                title="即时检测"
                subtitle="完成 3 道基础题，检查本节掌握情况"
              />

              <div className="mt-6 space-y-5">
                {questions.map((question) => {
                  const selected = answers[question.id];

                  const isSubmitted = Boolean(
                    submitted[question.id]
                  );

                  const correct =
                    selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                    >
                      <p className="text-xs font-medium text-blue-600">
                        第 {question.id} 题 / 共 3 题
                      </p>

                      <h3 className="mt-4 text-base font-semibold leading-8 text-slate-900">
                        {question.question}
                      </h3>

                      <div className="mt-5 grid gap-3">
                        {question.options.map((option) => {
                          const chosen =
                            selected === option.key;

                          const correctOption =
                            option.key === question.answer;

                          const showCorrect =
                            isSubmitted && correctOption;

                          const showWrong =
                            isSubmitted &&
                            chosen &&
                            !correctOption;

                          return (
                            <button
                              key={option.key}
                              type="button"
                              disabled={isSubmitted}
                              onClick={() =>
                                chooseAnswer(
                                  question.id,
                                  option.key
                                )
                              }
                              className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-6 transition ${
                                showCorrect
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                  : showWrong
                                    ? "border-red-300 bg-red-50 text-red-600"
                                    : chosen
                                      ? "border-blue-400 bg-blue-50 text-blue-800"
                                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-current text-xs font-semibold">
                                {option.key}
                              </span>

                              <span className="pt-0.5">
                                {option.text}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {!isSubmitted ? (
                        <button
                          type="button"
                          disabled={!selected}
                          onClick={() =>
                            submitAnswer(question.id)
                          }
                          className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          提交答案
                        </button>
                      ) : (
                        <div
                          className={`mt-5 rounded-xl p-4 ${
                            correct
                              ? "bg-emerald-50"
                              : "bg-red-50"
                          }`}
                        >
                          <p
                            className={`text-sm font-semibold ${
                              correct
                                ? "text-emerald-700"
                                : "text-red-600"
                            }`}
                          >
                            {correct
                              ? "回答正确"
                              : `回答错误，正确答案：${question.answer}`}
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {question.explanation}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              resetQuestion(question.id)
                            }
                            className="mt-3 text-sm font-medium text-slate-600 hover:text-slate-900"
                          >
                            重新作答 →
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {completedCount === questions.length && (
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    本节检测已完成
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {correctCount} / {questions.length} 题正确
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {correctCount === questions.length
                      ? "很好，三个基础概念都掌握了，可以继续学习向量的运算。"
                      : "建议复习答错的知识点，重点区分向量的模、方向与相等条件。"}
                  </p>
                </div>
              )}
            </section>

            {/* 底部导航 */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link
                href="/grade1/vectors"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                ← 返回章节目录
              </Link>

              <span className="text-sm text-slate-400">
                下一节：平面向量的线性运算（即将开放）
              </span>
            </div>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-400">
                本节学习目录
              </p>

              <nav className="mt-5 space-y-3 text-sm">
                {[
                  ["definition", "01 什么是向量"],
                  ["representation", "02 向量的几何表示"],
                  ["magnitude", "03 向量的模"],
                  ["special", "04 零向量与单位向量"],
                  ["relations", "05 向量之间的关系"],
                  ["examples", "06 典型例题"],
                  ["quiz", "07 即时检测"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-slate-500 transition hover:text-blue-600"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-400">
                  本节核心知识
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "大小与方向",
                    "有向线段",
                    "向量的模",
                    "相等向量",
                    "共线向量",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* 小节标题 */
function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-blue-600">
          {number}
        </span>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      <p className="mt-2 pl-7 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

/* 概念卡片 */
function ConceptCard({
  title,
  description,
  examples,
  accent,
}: {
  title: string;
  description: string;
  examples: string;
  accent: "slate" | "blue";
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span
        className={`text-xs font-medium ${
          accent === "blue"
            ? "text-blue-600"
            : "text-slate-500"
        }`}
      >
        {title}
      </span>

      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {description}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {examples}
      </p>
    </div>
  );
}

/* 提示 */
function Note({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/40 px-5 py-4">
      <p className="text-xs font-semibold text-blue-600">
        理解提示
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {children}
      </p>
    </div>
  );
}

/* 向量关系卡片 */
function RelationCard({
  title,
  description,
  formula,
}: {
  title: string;
  description: string;
  formula: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-4 rounded-lg bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>
    </div>
  );
}

/* 例题卡片 */
function ExampleCard({
  number,
  question,
  answer,
}: {
  number: string;
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-medium text-blue-600">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold leading-7 text-slate-900">
        {question}
      </h3>

      <div className="mt-4 rounded-lg bg-slate-50 p-4">
        <p className="text-xs font-medium text-slate-400">
          分析与解答
        </p>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* 向量示意图 */
function VectorDiagram() {
  return (
    <svg
      viewBox="0 0 600 210"
      className="h-auto w-full"
      role="img"
      aria-label="从点A指向点B的向量示意图"
    >
      <defs>
        <marker
          id="vector-arrow-blue"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <path
            d="M0 0 L10 5 L0 10 Z"
            fill="#2563eb"
          />
        </marker>
      </defs>

      <line
        x1="100"
        y1="155"
        x2="480"
        y2="55"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#vector-arrow-blue)"
      />

      <circle cx="100" cy="155" r="5" fill="#334155" />
      <circle cx="480" cy="55" r="4" fill="#2563eb" />

      <text x="83" y="178" fontSize="17" fill="#334155">
        A
      </text>

      <text x="487" y="47" fontSize="17" fill="#334155">
        B
      </text>

      <text x="270" y="70" fontSize="18" fill="#2563eb">
        向量 a
      </text>

      <text x="125" y="190" fontSize="13" fill="#94a3b8">
        起点
      </text>

      <text x="465" y="90" fontSize="13" fill="#94a3b8">
        终点
      </text>
    </svg>
  );
}

/* 向量之间的关系示意图 */
function RelationDiagram() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full"
      role="img"
      aria-label="相等向量、相反向量和不平行向量示意图"
    >
      <defs>
        <marker
          id="relation-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#2563eb"
          />
        </marker>

        <marker
          id="relation-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#059669"
          />
        </marker>

        <marker
          id="relation-red"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path
            d="M0 0 L9 4.5 L0 9 Z"
            fill="#dc2626"
          />
        </marker>
      </defs>

      {/* 相等向量 */}
      <text x="30" y="29" fontSize="16" fill="#334155">
        相等向量
      </text>

      <line
        x1="150"
        y1="55"
        x2="260"
        y2="55"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#relation-blue)"
      />

      <line
        x1="345"
        y1="55"
        x2="455"
        y2="55"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#relation-green)"
      />

      <text x="200" y="43" fontSize="14" fill="#2563eb">
        a
      </text>

      <text x="395" y="43" fontSize="14" fill="#059669">
        b
      </text>

      <line
        x1="30"
        y1="95"
        x2="570"
        y2="95"
        stroke="#e2e8f0"
      />

      {/* 相反向量 */}
      <text x="30" y="126" fontSize="16" fill="#334155">
        相反向量
      </text>

      <line
        x1="150"
        y1="153"
        x2="260"
        y2="153"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#relation-blue)"
      />

      <line
        x1="455"
        y1="153"
        x2="345"
        y2="153"
        stroke="#dc2626"
        strokeWidth="4"
        markerEnd="url(#relation-red)"
      />

      <text x="200" y="140" fontSize="14" fill="#2563eb">
        a
      </text>

      <text x="395" y="140" fontSize="14" fill="#dc2626">
        b
      </text>

      <line
        x1="30"
        y1="190"
        x2="570"
        y2="190"
        stroke="#e2e8f0"
      />

      {/* 不平行向量 */}
      <text x="30" y="224" fontSize="16" fill="#334155">
        不平行向量
      </text>

      <line
        x1="175"
        y1="270"
        x2="285"
        y2="270"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#relation-blue)"
      />

      <line
        x1="345"
        y1="273"
        x2="415"
        y2="215"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#relation-green)"
      />

      <text x="220" y="257" fontSize="14" fill="#2563eb">
        a
      </text>

      <text x="390" y="257" fontSize="14" fill="#059669">
        b
      </text>
    </svg>
  );
}
