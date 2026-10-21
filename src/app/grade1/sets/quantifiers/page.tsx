"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Question = {
  id: number;
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "命题“任意实数 x，都有 x²≥0”属于：",
    options: [
      {
        key: "A",
        text: "全称量词命题",
      },
      {
        key: "B",
        text: "存在量词命题",
      },
      {
        key: "C",
        text: "假命题",
      },
      {
        key: "D",
        text: "无法判断",
      },
    ],
    answer: "A",
    explanation:
      "“任意实数 x”表示对所有实数都成立，其中使用了全称量词“任意”。",
  },
  {
    id: 2,
    question: "命题“存在实数 x，使 x²=4”属于：",
    options: [
      {
        key: "A",
        text: "全称量词命题",
      },
      {
        key: "B",
        text: "存在量词命题",
      },
      {
        key: "C",
        text: "一定是假命题",
      },
      {
        key: "D",
        text: "没有量词",
      },
    ],
    answer: "B",
    explanation:
      "“存在实数 x”表示至少有一个实数满足条件，因此是存在量词命题。",
  },
  {
    id: 3,
    question: "命题“所有实数 x 都满足 x²>0”的否定是：",
    options: [
      {
        key: "A",
        text: "所有实数 x 都满足 x²≤0",
      },
      {
        key: "B",
        text: "存在实数 x，使 x²≤0",
      },
      {
        key: "C",
        text: "存在实数 x，使 x²>0",
      },
      {
        key: "D",
        text: "所有实数 x 都满足 x²=0",
      },
    ],
    answer: "B",
    explanation:
      "全称命题的否定要把“所有”改成“存在”，同时把 x²>0 否定为 x²≤0。",
  },
];

export default function QuantifiersPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, answer: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
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
            href="/grade1/sets"
            className="hover:text-slate-700"
          >
            集合与常用逻辑用语
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            全称量词与存在量词
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                05 · 常用逻辑用语
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              全称量词与存在量词
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              “所有”“任意”“存在”“至少有一个”
              是数学命题中非常常见的逻辑语言。
              本节重点学习全称量词、存在量词以及含量词命题的否定。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#universal"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/sets"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          {/* 左侧 */}
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <Section
              id="universal"
              number="01"
              title="全称量词"
            >
              <p className="leading-8 text-slate-600">
                “所有”“任意”“每一个”等表示
                <strong className="mx-1 text-slate-900">
                  对全部对象都成立
                </strong>
                的词，叫做全称量词。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-slate-400">
                  常见表达
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {["所有", "任意", "每一个", "一切"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                数学中通常用符号
                <strong className="mx-1 text-slate-900">
                  ∀
                </strong>
                表示“任意”或“所有”。
              </p>

              <MathBox>
                ∀ x ∈ M，p(x) 成立
              </MathBox>

              <p className="text-center text-sm text-slate-400">
                表示：对于集合 M 中任意一个 x，p(x) 都成立
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  ∀ x ∈ R，x² ≥ 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  意思是：对于任意实数 x，都有 x²≥0。
                </p>

                <ResultBox>
                  这是一个真命题
                </ResultBox>
              </ExampleCard>
            </Section>

            {/* 02 */}
            <Section
              id="existential"
              number="02"
              title="存在量词"
            >
              <p className="leading-8 text-slate-600">
                “存在”“有一个”“至少有一个”等表示
                <strong className="mx-1 text-slate-900">
                  至少有一个对象满足条件
                </strong>
                的词，叫做存在量词。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-slate-400">
                  常见表达
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "存在",
                    "有一个",
                    "至少有一个",
                    "有些",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                数学中通常用符号
                <strong className="mx-1 text-slate-900">
                  ∃
                </strong>
                表示“存在”。
              </p>

              <MathBox>
                ∃ x ∈ M，使 p(x) 成立
              </MathBox>

              <p className="text-center text-sm text-slate-400">
                表示：集合 M 中至少存在一个 x，使 p(x) 成立
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  ∃ x ∈ R，使 x² = 4
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为 x=2 或 x=-2 时都有 x²=4，所以确实存在满足条件的实数。
                </p>

                <ResultBox>
                  这是一个真命题
                </ResultBox>
              </ExampleCard>
            </Section>

            {/* 03 */}
            <Section
              id="difference"
              number="03"
              title="全称命题与存在命题的区别"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <CompareCard
                  title="全称命题"
                  symbol="∀"
                  description="要求所有对象都满足条件，只要找到一个反例，就能说明命题为假。"
                />

                <CompareCard
                  title="存在命题"
                  symbol="∃"
                  description="只要求至少存在一个对象满足条件，找到一个例子就能说明命题为真。"
                />
              </div>

              <ExampleCard title="比较两个命题">
                <div className="rounded-lg bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    命题 1
                  </p>

                  <MathBox>
                    ∀ x ∈ R，x² &gt; 0
                  </MathBox>

                  <p className="text-sm leading-7 text-slate-600">
                    当 x=0 时，x²=0，并不大于 0。
                  所以这个全称命题是
                  <strong className="ml-1 text-red-500">
                    假命题
                  </strong>
                  。
                </p>
              </div>

                <div className="mt-4 rounded-lg bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    命题 2
                  </p>

                  <MathBox>
                    ∃ x ∈ R，使 x² &gt; 0
                  </MathBox>

                  <p className="text-sm leading-7 text-slate-600">
                    例如取 x=1，就有 x²=1&gt;0。
                    所以这个存在命题是
                    <strong className="ml-1 text-emerald-600">
                      真命题
                    </strong>
                    。
                  </p>
                </div>
              </ExampleCard>

              <TipBox>
                判断全称命题真假，重点考虑
                <strong className="mx-1 text-slate-800">
                  有没有反例
                </strong>
                ；判断存在命题真假，重点考虑
                <strong className="mx-1 text-slate-800">
                  能不能找到一个例子
                </strong>
                。
              </TipBox>
            </Section>

            {/* 04 */}
            <Section
              id="negation"
              number="04"
              title="全称命题的否定"
            >
              <p className="leading-8 text-slate-600">
                一个全称命题：
              </p>

              <MathBox>
                ∀ x ∈ M，p(x)
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                它的否定是：
              </p>

              <MathBox>
                ∃ x ∈ M，使 p(x) 不成立
              </MathBox>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <p className="text-sm font-semibold text-blue-600">
                  记忆方法
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  否定“所有都成立”，就是：
                  <strong className="mx-1 text-slate-800">
                    至少存在一个不成立
                  </strong>
                  。
                </p>
              </div>

              <ExampleCard title="例如">
                <p className="text-sm text-slate-500">
                  原命题：
                </p>

                <MathBox>
                  所有实数 x 都满足 x² &gt; 0
                </MathBox>

                <p className="mt-5 text-sm text-slate-500">
                  否定：
                </p>

                <MathBox>
                  存在实数 x，使 x² ≤ 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  注意，不是把“所有”简单改成“所有不”，
                  而是要把
                  <strong className="mx-1 text-slate-800">
                    全称变存在
                  </strong>
                  ，同时否定结论。
                </p>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="negation-exists"
              number="05"
              title="存在命题的否定"
            >
              <p className="leading-8 text-slate-600">
                一个存在命题：
              </p>

              <MathBox>
                ∃ x ∈ M，使 p(x) 成立
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                它的否定是：
              </p>

              <MathBox>
                ∀ x ∈ M，p(x) 都不成立
              </MathBox>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <p className="text-sm font-semibold text-blue-600">
                  记忆方法
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  否定“至少有一个成立”，就是：
                  <strong className="mx-1 text-slate-800">
                    所有都不成立
                  </strong>
                  。
                </p>
              </div>

              <ExampleCard title="例如">
                <p className="text-sm text-slate-500">
                  原命题：
                </p>

                <MathBox>
                  存在实数 x，使 x² &lt; 0
                </MathBox>

                <p className="mt-5 text-sm text-slate-500">
                  否定：
                </p>

                <MathBox>
                  对任意实数 x，都有 x² ≥ 0
                </MathBox>
              </ExampleCard>
            </Section>

            {/* 06 */}
            <Section
              id="symbol-negation"
              number="06"
              title="常见关系式的否定"
            >
              <p className="leading-8 text-slate-600">
                否定命题时，除了量词要改变，
                不等关系本身也要正确取反。
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <NegationRow
                  original="x > a"
                  negative="x ≤ a"
                />

                <NegationRow
                  original="x ≥ a"
                  negative="x < a"
                />

                <NegationRow
                  original="x < a"
                  negative="x ≥ a"
                />

                <NegationRow
                  original="x ≤ a"
                  negative="x > a"
                />

                <NegationRow
                  original="x = a"
                  negative="x ≠ a"
                />

                <NegationRow
                  original="x ≠ a"
                  negative="x = a"
                  last
                />
              </div>
            </Section>

            {/* 07 */}
            <Section
              id="method"
              number="07"
              title="判断与否定命题的基本步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="先找量词"
                  text="判断题目中是“所有、任意”，还是“存在、至少有一个”。"
                />

                <StepItem
                  number="2"
                  title="判断命题类型"
                  text="确定它是全称量词命题还是存在量词命题。"
                />

                <StepItem
                  number="3"
                  title="判断真假"
                  text="全称命题重点找反例；存在命题重点找满足条件的具体例子。"
                />

                <StepItem
                  number="4"
                  title="写否定时改变量词"
                  text="∀ 与 ∃ 互换，同时把后面的结论正确否定。"
                  last
                />
              </div>
            </Section>

            {/* 08 */}
            <Section
              id="examples"
              number="08"
              title="典型例题"
            >
              <ExampleCard title="例 1：判断全称命题真假">
                <p className="text-sm leading-7 text-slate-600">
                  判断命题：
                </p>

                <MathBox>
                  ∀ x ∈ R，x² + 1 &gt; 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  对任意实数 x，都有 x²≥0，
                  因此 x²+1≥1&gt;0。
                </p>

                <ResultBox>
                  原命题为真命题
                </ResultBox>
              </ExampleCard>

              <ExampleCard title="例 2：利用反例判断">
                <p className="text-sm leading-7 text-slate-600">
                  判断命题：
                </p>

                <MathBox>
                  ∀ x ∈ R，x² ≥ x
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  只要找到一个反例即可。
                  例如 x=0.5：
                </p>

                <MathBox>
                  0.5² = 0.25 &lt; 0.5
                </MathBox>

                <ResultBox>
                  原命题为假命题
                </ResultBox>
              </ExampleCard>

              <ExampleCard title="例 3：写出命题的否定">
                <p className="text-sm text-slate-500">
                  原命题：
                </p>

                <MathBox>
                  ∃ x ∈ R，使 x² + 1 = 0
                </MathBox>

                <p className="mt-5 text-sm text-slate-500">
                  否定：
                </p>

                <MathBox>
                  ∀ x ∈ R，都有 x² + 1 ≠ 0
                </MathBox>
              </ExampleCard>
            </Section>

            {/* 09 */}
            <Section
              id="mistakes"
              number="09"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="否定全称命题时没有改变量词"
                  wrong="“所有 x 都满足 p(x)”的否定是“所有 x 都不满足 p(x)”"
                  correct="正确否定应该是“存在至少一个 x 不满足 p(x)”。"
                />

                <MistakeCard
                  title="否定存在命题时只改结论"
                  wrong="“存在 x 使 p(x)”的否定是“存在 x 使 p(x) 不成立”"
                  correct="正确否定是“对所有 x，p(x) 都不成立”。"
                />

                <MistakeCard
                  title="不等号取反错误"
                  wrong="x>2 的否定是 x<2"
                  correct="x>2 的否定应该是 x≤2，因为 x=2 也不满足 x>2。"
                />

                <MistakeCard
                  title="判断全称命题时只验证几个例子"
                  wrong="代入几个数都成立，所以对所有实数都成立"
                  correct="几个例子不能证明全称命题；需要进行一般性证明。一个反例却可以推翻全称命题。"
                />
              </div>
            </Section>

            {/* 10 */}
            <Section
              id="quiz"
              number="10"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查全称量词、存在量词和命题否定是否已经掌握。
              </p>

              <div className="mt-6 space-y-5">
                {questions.map((question, index) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    index={index}
                    selected={answers[question.id]}
                    submitted={submitted[question.id] ?? false}
                    onChoose={(answer) =>
                      chooseAnswer(question.id, answer)
                    }
                    onSubmit={() =>
                      submitAnswer(question.id)
                    }
                    onReset={() =>
                      resetQuestion(question.id)
                    }
                  />
                ))}
              </div>
            </Section>

            {/* 完成章节 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                集合与常用逻辑用语 · 完成
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                第一章全部知识点已开放
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                现在已经完成集合概念、集合间关系、集合基本运算、
                充分必要条件以及全称量词与存在量词。
                下一步可以进入专题训练巩固本章。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  去专题训练 →
                </Link>

                <Link
                  href="/grade1/sets"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  返回章节目录
                </Link>

                <Link
                  href="/grade1"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  返回高一数学
                </Link>
              </div>
            </section>
          </div>

          {/* 右侧 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#universal" label="01 全称量词" />
                <Anchor href="#existential" label="02 存在量词" />
                <Anchor href="#difference" label="03 两类命题" />
                <Anchor href="#negation" label="04 全称命题否定" />
                <Anchor
                  href="#negation-exists"
                  label="05 存在命题否定"
                />
                <Anchor
                  href="#symbol-negation"
                  label="06 关系式否定"
                />
                <Anchor href="#method" label="07 解题步骤" />
                <Anchor href="#examples" label="08 典型例题" />
                <Anchor href="#mistakes" label="09 易错点" />
                <Anchor href="#quiz" label="10 即时练习" />
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function MathBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 text-center font-serif text-xl text-slate-900 sm:text-2xl">
      {children}
    </div>
  );
}

function TipBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4 text-sm leading-7 text-slate-600">
      <span className="mr-2 font-semibold text-blue-600">
        提示
      </span>

      {children}
    </div>
  );
}

function ExampleCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4">{children}</div>
    </div>
  );
}

function CompareCard({
  title,
  symbol,
  description,
}: {
  title: string;
  symbol: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-5 text-center font-serif text-4xl text-slate-900">
        {symbol}
      </p>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function NegationRow({
  original,
  negative,
  last = false,
}: {
  original: string;
  negative: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_50px_1fr] items-center px-5 py-4 text-sm ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="font-serif text-base text-slate-700">
        {original}
      </span>

      <span className="text-center text-slate-300">
        →
      </span>

      <span className="font-serif text-base font-semibold text-slate-900">
        {negative}
      </span>
    </div>
  );
}

function ResultBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-lg bg-blue-50/60 px-5 py-4 text-center text-sm font-semibold text-slate-800">
      {children}
    </div>
  );
}

function StepItem({
  number,
  title,
  text,
  last = false,
}: {
  number: string;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-4">
      {!last && (
        <div className="absolute left-[15px] top-8 h-[calc(100%+16px)] w-px bg-slate-200" />
      )}

      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500">
        {number}
      </div>

      <div className="pb-6">
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function MistakeCard({
  title,
  wrong,
  correct,
}: {
  title: string;
  wrong: string;
  correct: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-red-50/60 p-4">
          <p className="text-xs font-medium text-red-500">
            常见错误
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {wrong}
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50/60 p-4">
          <p className="text-xs font-medium text-emerald-600">
            正确理解
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {correct}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  selected,
  submitted,
  onChoose,
  onSubmit,
  onReset,
}: {
  question: Question;
  index: number;
  selected?: string;
  submitted: boolean;
  onChoose: (answer: string) => void;
  onSubmit: () => void;
  onReset: () => void;
}) {
  const isCorrect =
    selected === question.answer;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-blue-600">
          第 {index + 1} 题
        </span>

        {submitted && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              isCorrect
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}
          >
            {isCorrect ? "回答正确" : "回答错误"}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen =
            selected === option.key;

          const correct =
            submitted &&
            option.key === question.answer;

          const wrong =
            submitted &&
            chosen &&
            option.key !== question.answer;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() =>
                onChoose(option.key)
              }
              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                correct
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : wrong
                    ? "border-red-300 bg-red-50 text-red-600"
                    : chosen
                      ? "border-slate-500 bg-slate-50 text-slate-900"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
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

      {!submitted ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!selected}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              {isCorrect
                ? "回答正确"
                : `正确答案：${question.answer}`}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {question.explanation}
            </p>
          </div>

          <button
            type="button"
            onClick={onReset}
            className="mt-3 text-sm text-slate-400 hover:text-slate-700"
          >
            重新作答
          </button>
        </div>
      )}
    </div>
  );
}

function Anchor({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    >
      {label}
    </a>
  );
}