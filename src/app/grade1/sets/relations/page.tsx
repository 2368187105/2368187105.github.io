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
    question: "已知 A={1,2}，B={1,2,3}，则下列关系正确的是：",
    options: [
      { key: "A", text: "A ⊆ B" },
      { key: "B", text: "B ⊆ A" },
      { key: "C", text: "A = B" },
      { key: "D", text: "A ∈ B" },
    ],
    answer: "A",
    explanation:
      "集合 A 中的每一个元素 1、2 都属于集合 B，因此 A 是 B 的子集，即 A ⊆ B。",
  },
  {
    id: 2,
    question: "下列关于空集 ∅ 的说法正确的是：",
    options: [
      { key: "A", text: "空集不属于任何集合" },
      { key: "B", text: "空集是任何集合的子集" },
      { key: "C", text: "空集中含有一个元素 0" },
      { key: "D", text: "空集等于 {0}" },
    ],
    answer: "B",
    explanation:
      "空集不含任何元素，但它是任何集合的子集。注意 ∅ 与 {0} 不相同。",
  },
  {
    id: 3,
    question: "若 A⊆B 且 B⊆A，则一定有：",
    options: [
      { key: "A", text: "A∈B" },
      { key: "B", text: "A≠B" },
      { key: "C", text: "A=B" },
      { key: "D", text: "A=∅" },
    ],
    answer: "C",
    explanation:
      "若 A 中所有元素都属于 B，同时 B 中所有元素也都属于 A，则两个集合所含元素完全相同，因此 A=B。",
  },
];

export default function SetRelationsPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

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

          <Link href="/grade1/sets" className="hover:text-slate-700">
            集合与常用逻辑用语
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            集合间的基本关系
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                02 · 集合关系
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              集合间的基本关系
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              学完集合和元素以后，下一步要研究集合与集合之间的关系。
              本节重点掌握子集、真子集、集合相等和空集。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#subset"
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
          <div className="min-w-0 space-y-14">
            {/* 01 子集 */}
            <Section
              id="subset"
              number="01"
              title="什么是子集？"
            >
              <p className="leading-8 text-slate-600">
                一般地，如果集合 A 中的
                <strong className="mx-1 text-slate-900">
                  任意一个元素
                </strong>
                都是集合 B 中的元素，那么称集合 A 是集合 B 的
                <strong className="mx-1 text-slate-900">
                  子集
                </strong>
                。
              </p>

              <MathBox>A ⊆ B</MathBox>

              <p className="text-center text-sm text-slate-400">
                读作：A 包含于 B，或者 B 包含 A
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  A = {"{1,2}"}
                </MathBox>

                <MathBox>
                  B = {"{1,2,3}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A 中的元素 1、2 都属于 B，所以：
                </p>

                <MathBox>A ⊆ B</MathBox>
              </ExampleCard>

              <TipBox>
                “元素属于集合”使用
                <strong className="mx-1 text-slate-800">
                  ∈
                </strong>
                ；“集合是另一个集合的子集”使用
                <strong className="mx-1 text-slate-800">
                  ⊆
                </strong>
                。这两个符号不能混用。
              </TipBox>
            </Section>

            {/* 02 */}
            <Section
              id="proper-subset"
              number="02"
              title="什么是真子集？"
            >
              <p className="leading-8 text-slate-600">
                如果 A 是 B 的子集，并且
                <strong className="mx-1 text-slate-900">
                  A 与 B 不相等
                </strong>
                ，那么称 A 是 B 的真子集。
              </p>

              <MathBox>A ⊊ B</MathBox>

              <ExampleCard title="例如">
                <MathBox>
                  A = {"{1,2}"}
                </MathBox>

                <MathBox>
                  B = {"{1,2,3}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A 中所有元素都属于 B，并且 B 还比 A 多一个元素 3，所以：
                </p>

                <MathBox>A ⊊ B</MathBox>
              </ExampleCard>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <CompareCard
                  title="子集"
                  symbol="A ⊆ B"
                  description="允许 A 和 B 相等。"
                />

                <CompareCard
                  title="真子集"
                  symbol="A ⊊ B"
                  description="A 必须是 B 的子集，并且 A ≠ B。"
                />
              </div>
            </Section>

            {/* 03 */}
            <Section
              id="equal"
              number="03"
              title="集合相等"
            >
              <p className="leading-8 text-slate-600">
                如果两个集合所含的元素完全相同，那么这两个集合相等。
              </p>

              <MathBox>A = B</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                判断集合相等还有一个非常重要的方法：
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-6">
                <MathBox>
                  A ⊆ B 且 B ⊆ A
                </MathBox>

                <p className="text-center text-sm text-slate-500">
                  则一定有
                </p>

                <MathBox>A = B</MathBox>
              </div>

              <ExampleCard title="例如">
                <MathBox>
                  A = {"{1,2,3}"}
                </MathBox>

                <MathBox>
                  B = {"{3,2,1}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  虽然元素书写顺序不同，但集合具有无序性，因此 A=B。
                </p>
              </ExampleCard>
            </Section>

            {/* 04 */}
            <Section
              id="empty-set"
              number="04"
              title="空集"
            >
              <p className="leading-8 text-slate-600">
                我们把
                <strong className="mx-1 text-slate-900">
                  不含任何元素
                </strong>
                的集合叫做空集，记作：
              </p>

              <MathBox>∅</MathBox>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">
                  一个非常重要的结论
                </p>

                <MathBox>
                  ∅ ⊆ A
                </MathBox>

                <p className="text-center text-sm text-slate-500">
                  空集是任何集合的子集
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <CompareCard
                  title="空集"
                  symbol="∅"
                  description="里面一个元素都没有。"
                />

                <CompareCard
                  title="只含元素 0 的集合"
                  symbol="{0}"
                  description="这个集合中有一个元素：0。"
                />
              </div>

              <TipBox>
                <strong className="mr-1 text-slate-800">
                  ∅ ≠ {"{0}"}
                </strong>
                。空集没有元素，而 {"{0}"} 中有一个元素 0。
              </TipBox>
            </Section>

            {/* 05 */}
            <Section
              id="venn"
              number="05"
              title="用图形理解包含关系"
            >
              <p className="leading-8 text-slate-600">
                当 A 是 B 的子集时，可以把集合 A 看成完全位于集合 B 内部。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <SubsetGraph />

                <p className="mt-4 text-center text-sm text-slate-500">
                  A 完全位于 B 内部，因此 A ⊆ B
                </p>
              </div>
            </Section>

            {/* 06 */}
            <Section
              id="count"
              number="06"
              title="有限集合的子集个数"
            >
              <p className="leading-8 text-slate-600">
                如果一个集合中有 n 个元素，那么它一共有：
              </p>

              <MathBox>2ⁿ 个子集</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                如果这个集合非空，那么它的真子集共有：
              </p>

              <MathBox>2ⁿ − 1 个</MathBox>

              <ExampleCard title="例如：A={1,2}">
                <p className="text-sm leading-7 text-slate-600">
                  集合 A 有 2 个元素，因此共有：
                </p>

                <MathBox>2² = 4 个子集</MathBox>

                <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center font-serif text-lg text-slate-800">
                  ∅，{"{1}"}，{"{2}"}，{"{1,2}"}
                </div>
              </ExampleCard>
            </Section>

            {/* 07 */}
            <Section
              id="mistakes"
              number="07"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="把 ∈ 和 ⊆ 混用"
                  wrong="1 ⊆ {1,2,3}"
                  correct="1 是元素，所以应该写 1 ∈ {1,2,3}。"
                />

                <MistakeCard
                  title="认为集合不是自己的子集"
                  wrong="A 不是 A 的子集"
                  correct="任何集合都是自身的子集，因此 A ⊆ A。"
                />

                <MistakeCard
                  title="认为空集没有任何子集关系"
                  wrong="∅ 不是任何集合的子集"
                  correct="空集是任何集合的子集。"
                />

                <MistakeCard
                  title="混淆 ∅ 和 {∅}"
                  wrong="∅ 与 {∅} 完全相同"
                  correct="{∅} 中有一个元素，这个元素本身就是空集，所以二者不相等。"
                />
              </div>
            </Section>

            {/* 08 */}
            <Section
              id="quiz"
              number="08"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查集合基本关系是否已经掌握。
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
                下一步：集合的基本运算
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将学习交集、并集和补集，
                并结合 Venn 图理解不同集合之间的运算关系。
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
                <Anchor href="#subset" label="01 子集" />
                <Anchor href="#proper-subset" label="02 真子集" />
                <Anchor href="#equal" label="03 集合相等" />
                <Anchor href="#empty-set" label="04 空集" />
                <Anchor href="#venn" label="05 图形理解" />
                <Anchor href="#count" label="06 子集个数" />
                <Anchor href="#mistakes" label="07 易错点" />
                <Anchor href="#quiz" label="08 即时练习" />
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

      <p className="mt-4 text-center font-serif text-xl text-slate-900">
        {symbol}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function SubsetGraph() {
  return (
    <svg
      viewBox="0 0 500 260"
      className="mx-auto w-full max-w-lg"
      aria-label="集合包含关系示意图"
    >
      <ellipse
        cx="250"
        cy="130"
        rx="190"
        ry="100"
        fill="#f8fafc"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      <ellipse
        cx="250"
        cy="130"
        rx="90"
        ry="55"
        fill="#eff6ff"
        stroke="#2563eb"
        strokeWidth="2"
      />

      <text
        x="120"
        y="80"
        fill="#64748b"
        fontSize="18"
      >
        B
      </text>

      <text
        x="242"
        y="137"
        fill="#2563eb"
        fontSize="18"
        fontWeight="600"
      >
        A
      </text>
    </svg>
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
  const isCorrect = selected === question.answer;

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
          const chosen = selected === option.key;

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
              onClick={() => onChoose(option.key)}
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