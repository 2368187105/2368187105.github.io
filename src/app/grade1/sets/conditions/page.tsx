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
    question:
      "设 p：x=2，q：x²=4。则 p 是 q 的什么条件？",
    options: [
      {
        key: "A",
        text: "充分不必要条件",
      },
      {
        key: "B",
        text: "必要不充分条件",
      },
      {
        key: "C",
        text: "充要条件",
      },
      {
        key: "D",
        text: "既不充分也不必要条件",
      },
    ],
    answer: "A",
    explanation:
      "由 x=2 一定可以得到 x²=4，所以 p⇒q；但 x²=4 时 x 还可能等于 -2，因此 q不能推出p。所以 p 是 q 的充分不必要条件。",
  },
  {
    id: 2,
    question:
      "若 p⇒q 成立，则下列说法一定正确的是：",
    options: [
      {
        key: "A",
        text: "p 是 q 的必要条件",
      },
      {
        key: "B",
        text: "q 是 p 的充分条件",
      },
      {
        key: "C",
        text: "p 是 q 的充分条件",
      },
      {
        key: "D",
        text: "p 与 q 一定等价",
      },
    ],
    answer: "C",
    explanation:
      "如果 p⇒q，那么 p 足以保证 q 成立，所以 p 是 q 的充分条件；同时 q 是 p 的必要条件。",
  },
  {
    id: 3,
    question:
      "设 p：x>2，q：x>1。则 q 是 p 的什么条件？",
    options: [
      {
        key: "A",
        text: "充分不必要条件",
      },
      {
        key: "B",
        text: "必要不充分条件",
      },
      {
        key: "C",
        text: "充要条件",
      },
      {
        key: "D",
        text: "既不充分也不必要条件",
      },
    ],
    answer: "B",
    explanation:
      "x>2 一定可以推出 x>1，所以 p⇒q。因此 q 是 p 的必要条件。但 x>1 不能保证 x>2，所以 q 不是 p 的充分条件。",
  },
];

export default function ConditionsPage() {
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

          <Link
            href="/grade1"
            className="hover:text-slate-700"
          >
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
            充分条件与必要条件
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                04 · 常用逻辑用语
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                高频易错
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              充分条件与必要条件
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              “充分”和“必要”本质上研究的是两个条件之间能否相互推出。
              学会判断 p⇒q 和 q⇒p，是解决这类题目的核心。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#implication"
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
          {/* 左侧内容 */}
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <Section
              id="implication"
              number="01"
              title="先理解“推出”"
            >
              <p className="leading-8 text-slate-600">
                如果条件 p 成立时，
                条件 q
                <strong className="mx-1 text-slate-900">
                  一定成立
                </strong>
                ，我们就说 p 可以推出 q。
              </p>

              <MathBox>p ⇒ q</MathBox>

              <p className="text-center text-sm text-slate-400">
                读作：p 推出 q
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  p：x &gt; 2
                </MathBox>

                <MathBox>
                  q：x &gt; 1
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  只要 x&gt;2，就一定有 x&gt;1，所以：
                </p>

                <MathBox>p ⇒ q</MathBox>
              </ExampleCard>

              <TipBox>
                判断充分条件和必要条件之前，
                <strong className="mx-1 text-slate-800">
                  先不要急着背名称
                </strong>
                ，先判断到底是谁能推出谁。
              </TipBox>
            </Section>

            {/* 02 */}
            <Section
              id="sufficient"
              number="02"
              title="充分条件"
            >
              <p className="leading-8 text-slate-600">
                如果：
              </p>

              <MathBox>p ⇒ q</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么称
                <strong className="mx-1 text-slate-900">
                  p 是 q 的充分条件
                </strong>
                。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-slate-400">
                  怎么理解“充分”
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  只要有 p，就足够保证 q 成立。
                  所以 p 对 q 来说“足够了”。
                </p>

                <MathBox>
                  p 成立 → q 一定成立
                </MathBox>
              </div>

              <ExampleCard title="例：x=2 与 x²=4">
                <MathBox>
                  p：x = 2
                </MathBox>

                <MathBox>
                  q：x² = 4
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  x=2 一定能得到 x²=4，因此：
                </p>

                <MathBox>p ⇒ q</MathBox>

                <p className="mt-4 text-sm font-medium text-slate-800">
                  所以 p 是 q 的充分条件。
                </p>
              </ExampleCard>
            </Section>

            {/* 03 */}
            <Section
              id="necessary"
              number="03"
              title="必要条件"
            >
              <p className="leading-8 text-slate-600">
                仍然从同一个关系出发：
              </p>

              <MathBox>p ⇒ q</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                这时不仅可以说 p 是 q 的充分条件，
                还可以反过来说：
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <MathBox>
                  q 是 p 的必要条件
                </MathBox>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                因为想让 p 成立，q 是一个必须满足的条件。
              </p>

              <ExampleCard title="继续看 x>2 与 x>1">
                <MathBox>
                  p：x &gt; 2
                </MathBox>

                <MathBox>
                  q：x &gt; 1
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为：
                </p>

                <MathBox>p ⇒ q</MathBox>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ConclusionCard
                    title="从 p 看 q"
                    text="p 是 q 的充分条件"
                  />

                  <ConclusionCard
                    title="从 q 看 p"
                    text="q 是 p 的必要条件"
                  />
                </div>
              </ExampleCard>

              <TipBox>
                一个推出关系要记住
                <strong className="mx-1 text-slate-800">
                  两句话
                </strong>
                ：
                p⇒q 时，p 是 q 的充分条件；q 是 p 的必要条件。
              </TipBox>
            </Section>

            {/* 04 */}
            <Section
              id="equivalent"
              number="04"
              title="充要条件"
            >
              <p className="leading-8 text-slate-600">
                如果两个方向都可以推出：
              </p>

              <MathBox>
                p ⇒ q 且 q ⇒ p
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                就可以写成：
              </p>

              <MathBox>p ⇔ q</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                此时称 p 是 q 的
                <strong className="mx-1 text-slate-900">
                  充分必要条件
                </strong>
                ，简称
                <strong className="mx-1 text-slate-900">
                  充要条件
                </strong>
                。
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  p：x = 0
                </MathBox>

                <MathBox>
                  q：x² = 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  x=0 可以推出 x²=0；
                  反过来 x²=0 也只能得到 x=0。
                </p>

                <MathBox>p ⇔ q</MathBox>

                <p className="mt-4 text-sm font-medium text-slate-800">
                  因此 p 是 q 的充要条件。
                </p>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="four-types"
              number="05"
              title="四种常见条件关系"
            >
              <p className="leading-8 text-slate-600">
                判断 p 是 q 的什么条件时，
                实际只需要分别检查：
              </p>

              <MathBox>
                p ⇒ q ？
              </MathBox>

              <MathBox>
                q ⇒ p ？
              </MathBox>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <ConditionRow
                  first="成立"
                  second="不成立"
                  result="p 是 q 的充分不必要条件"
                />

                <ConditionRow
                  first="不成立"
                  second="成立"
                  result="p 是 q 的必要不充分条件"
                />

                <ConditionRow
                  first="成立"
                  second="成立"
                  result="p 是 q 的充要条件"
                />

                <ConditionRow
                  first="不成立"
                  second="不成立"
                  result="p 是 q 的既不充分也不必要条件"
                  last
                />
              </div>

              <TipBox>
                考试最稳的方法就是画两个箭头：
                <strong className="mx-1 text-slate-800">
                  p→q 和 q→p
                </strong>
                ，分别判断能不能成立。
              </TipBox>
            </Section>

            {/* 06 */}
            <Section
              id="set-view"
              number="06"
              title="用集合包含关系理解条件"
            >
              <p className="leading-8 text-slate-600">
                如果条件 p、q 分别对应两个解集 P、Q，
                那么推出关系可以转化成集合包含关系。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <MathBox>
                  p ⇒ q
                </MathBox>

                <p className="text-center text-sm text-slate-400">
                  等价于
                </p>

                <MathBox>
                  P ⊆ Q
                </MathBox>

                <SubsetGraph />
              </div>

              <ExampleCard title="例如">
                <MathBox>
                  p：x &gt; 2
                </MathBox>

                <MathBox>
                  q：x &gt; 1
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  满足 x&gt;2 的所有数，一定也满足 x&gt;1。
                  因此 p 对应的解集包含在 q 对应的解集中。
                </p>
              </ExampleCard>
            </Section>

            {/* 07 */}
            <Section
              id="method"
              number="07"
              title="判断条件关系的标准步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="明确 p 和 q"
                  text="先弄清楚题目到底在问“谁是谁的什么条件”。"
                />

                <StepItem
                  number="2"
                  title="判断 p⇒q"
                  text="假设 p 成立，看能不能必然推出 q。"
                />

                <StepItem
                  number="3"
                  title="判断 q⇒p"
                  text="再反过来假设 q 成立，看能不能必然推出 p。"
                />

                <StepItem
                  number="4"
                  title="根据两个方向下结论"
                  text="两个方向的真假决定是充分不必要、必要不充分、充要还是既不充分也不必要。"
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
              <ExampleCard title="例 1：充分不必要条件">
                <MathBox>
                  p：x = 1
                </MathBox>

                <MathBox>
                  q：x² = 1
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  x=1 可以推出 x²=1，因此 p⇒q。
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  但 x²=1 时，x 还可能等于 -1，
                  所以 q 不能推出 p。
                </p>

                <ResultBox>
                  p 是 q 的充分不必要条件
                </ResultBox>
              </ExampleCard>

              <ExampleCard title="例 2：必要不充分条件">
                <MathBox>
                  p：x &gt; 2
                </MathBox>

                <MathBox>
                  q：x &gt; 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  p⇒q 成立，但 q⇒p 不成立。
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  如果问“q 是 p 的什么条件”，则：
                </p>

                <ResultBox>
                  q 是 p 的必要不充分条件
                </ResultBox>
              </ExampleCard>

              <ExampleCard title="例 3：充要条件">
                <MathBox>
                  p：x − 2 = 0
                </MathBox>

                <MathBox>
                  q：x = 2
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两个条件可以相互推出，所以：
                </p>

                <ResultBox>
                  p 是 q 的充要条件
                </ResultBox>
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
                  title="把充分和必要说反"
                  wrong="p⇒q，所以 p 是 q 的必要条件"
                  correct="p⇒q 时，p 是 q 的充分条件，q 才是 p 的必要条件。"
                />

                <MistakeCard
                  title="只判断一个方向"
                  wrong="发现 p⇒q，就直接判断 p 是 q 的充要条件"
                  correct="充要条件必须同时满足 p⇒q 和 q⇒p。"
                />

                <MistakeCard
                  title="把“可能推出”当成“必然推出”"
                  wrong="存在某个例子使 q 成立，就认为 p⇒q"
                  correct="推出要求只要 p 成立，q 就必须成立，不能存在反例。"
                />

                <MistakeCard
                  title="忘记题目问的方向"
                  wrong="已经判断 p 是 q 的充分条件，但题目问 q 是 p 的什么条件"
                  correct="同一个 p⇒q，可以同时得到：p 是 q 的充分条件，q 是 p 的必要条件。"
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
                完成下面 3 道题，检查是否真正分清了充分条件和必要条件。
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

            {/* 下一节 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                完成本节
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                下一步：全称量词与存在量词
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将学习“所有”“任意”“存在”“至少有一个”等逻辑语言，
                以及含量词命题的否定。
              </p>

              <Link
                href="/grade1/sets"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回章节目录
              </Link>
            </section>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#implication" label="01 推出关系" />
                <Anchor href="#sufficient" label="02 充分条件" />
                <Anchor href="#necessary" label="03 必要条件" />
                <Anchor href="#equivalent" label="04 充要条件" />
                <Anchor href="#four-types" label="05 四种关系" />
                <Anchor href="#set-view" label="06 集合角度" />
                <Anchor href="#method" label="07 判断步骤" />
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

      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

function ConclusionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {text}
      </p>
    </div>
  );
}

function ConditionRow({
  first,
  second,
  result,
  last = false,
}: {
  first: string;
  second: string;
  result: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid gap-3 px-5 py-4 text-sm sm:grid-cols-[120px_120px_1fr] ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="text-slate-500">
        p⇒q：{first}
      </span>

      <span className="text-slate-500">
        q⇒p：{second}
      </span>

      <span className="font-medium text-slate-800">
        {result}
      </span>
    </div>
  );
}

function SubsetGraph() {
  return (
    <svg
      viewBox="0 0 500 240"
      className="mx-auto mt-4 w-full max-w-lg"
      aria-label="条件推出与集合包含关系示意图"
    >
      <ellipse
        cx="250"
        cy="120"
        rx="185"
        ry="90"
        fill="#f8fafc"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      <ellipse
        cx="250"
        cy="120"
        rx="90"
        ry="50"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="2"
      />

      <text
        x="115"
        y="75"
        fontSize="18"
        fill="#64748b"
      >
        Q
      </text>

      <text
        x="243"
        y="127"
        fontSize="18"
        fill="#2563eb"
        fontWeight="600"
      >
        P
      </text>

      <text
        x="195"
        y="220"
        fontSize="15"
        fill="#64748b"
      >
        P ⊆ Q，所以 p ⇒ q
      </text>
    </svg>
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