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
    question: "若集合 A={1,2,3}，则下列说法正确的是：",
    options: [
      { key: "A", text: "1 ∉ A" },
      { key: "B", text: "2 ∈ A" },
      { key: "C", text: "4 ∈ A" },
      { key: "D", text: "5 ∈ A" },
    ],
    answer: "B",
    explanation:
      "集合 A 中包含元素 1、2、3，因此 2 属于集合 A，写作 2 ∈ A。",
  },
  {
    id: 2,
    question: "下列对象能够组成集合的是：",
    options: [
      { key: "A", text: "班级中比较高的同学" },
      { key: "B", text: "比较好看的数字" },
      { key: "C", text: "小于 5 的正整数" },
      { key: "D", text: "比较难的数学题" },
    ],
    answer: "C",
    explanation:
      "集合中的元素必须具有确定性。“小于5的正整数”具有明确判断标准，而“比较高”“比较好看”“比较难”都没有确定标准。",
  },
  {
    id: 3,
    question: "集合 {1,2,3,4} 用描述法表示正确的是：",
    options: [
      {
        key: "A",
        text: "{x | x 是小于 5 的正整数}",
      },
      {
        key: "B",
        text: "{x | x > 5}",
      },
      {
        key: "C",
        text: "{x | x 是负整数}",
      },
      {
        key: "D",
        text: "{1,2,3}",
      },
    ],
    answer: "A",
    explanation:
      "1、2、3、4 正好是所有小于 5 的正整数，所以可以表示为 {x | x 是小于 5 的正整数}。",
  },
];

export default function SetConceptPage() {
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
            集合的概念
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <p className="text-sm font-medium text-blue-600">
            01 · 集合基础
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            集合的概念
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
            集合是把一些确定的对象看成一个整体。
            这些对象称为集合的元素。
            本节重点掌握集合、元素、属于与不属于，以及集合的基本表示方法。
          </p>

          <a
            href="#basic"
            className="mt-7 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
          >
            开始学习
          </a>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <Section
              id="basic"
              number="01"
              title="什么是集合？"
            >
              <p className="leading-8 text-slate-600">
                一般地，我们把研究对象统称为
                <strong className="mx-1 text-slate-900">
                  元素
                </strong>
                ，把一些元素组成的总体叫做
                <strong className="mx-1 text-slate-900">
                  集合
                </strong>
                ，简称“集”。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs text-slate-400">
                  例如
                </p>

                <MathBox>
                  A = {"{1, 2, 3, 4}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  这里 A 是一个集合，1、2、3、4 都是这个集合中的元素。
                </p>
              </div>
            </Section>

            {/* 02 */}
            <Section
              id="features"
              number="02"
              title="集合中元素的三个基本特征"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <FeatureCard
                  title="确定性"
                  description="一个对象是不是集合中的元素，必须能够明确判断。"
                />

                <FeatureCard
                  title="互异性"
                  description="同一个集合中的元素不能重复出现。"
                />

                <FeatureCard
                  title="无序性"
                  description="集合中元素的排列顺序不会改变集合本身。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">
                  例如
                </p>

                <MathBox>
                  {"{1,2,3} = {3,2,1}"}
                </MathBox>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  元素排列顺序不同，但两个集合完全相同。
                </p>
              </div>
            </Section>

            {/* 03 */}
            <Section
              id="membership"
              number="03"
              title="属于与不属于"
            >
              <p className="leading-8 text-slate-600">
                如果元素 a 在集合 A 中，我们写作：
              </p>

              <MathBox>a ∈ A</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                如果元素 a 不在集合 A 中，我们写作：
              </p>

              <MathBox>a ∉ A</MathBox>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <MathBox>
                  A = {"{1,2,3}"}
                </MathBox>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Result
                    expression="2 ∈ A"
                    description="2 是集合 A 中的元素"
                  />

                  <Result
                    expression="5 ∉ A"
                    description="5 不是集合 A 中的元素"
                  />
                </div>
              </div>
            </Section>

            {/* 04 */}
            <Section
              id="number-sets"
              number="04"
              title="常用数集"
            >
              <p className="leading-8 text-slate-600">
                高中数学中经常使用一些固定的字母表示常见数集。
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <NumberSetRow
                  symbol="N"
                  name="自然数集"
                  example="0, 1, 2, 3, ..."
                />

                <NumberSetRow
                  symbol="N*"
                  name="正整数集"
                  example="1, 2, 3, ..."
                />

                <NumberSetRow
                  symbol="Z"
                  name="整数集"
                  example="..., -2, -1, 0, 1, 2, ..."
                />

                <NumberSetRow
                  symbol="Q"
                  name="有理数集"
                  example="整数和分数"
                />

                <NumberSetRow
                  symbol="R"
                  name="实数集"
                  example="所有实数"
                  last
                />
              </div>
            </Section>

            {/* 05 */}
            <Section
              id="representation"
              number="05"
              title="集合的表示方法"
            >
              <div className="space-y-4">
                <MethodCard
                  title="列举法"
                  description="把集合中的元素一一列出来，并写在花括号中。"
                  example='A = {1, 2, 3, 4}'
                />

                <MethodCard
                  title="描述法"
                  description="利用集合中元素共同具有的性质来描述集合。"
                  example="A = {x | x 是小于 5 的正整数}"
                />
              </div>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <p className="text-sm font-semibold text-blue-600">
                  两种写法表示同一个集合
                </p>

                <MathBox>
                  {"{1,2,3,4}"}
                </MathBox>

                <p className="text-center text-sm text-slate-400">
                  等价于
                </p>

                <MathBox>
                  {"{x | x 是小于 5 的正整数}"}
                </MathBox>
              </div>
            </Section>

            {/* 06 易错 */}
            <Section
              id="mistakes"
              number="06"
              title="常见易错点"
            >
              <div className="space-y-3">
                <Mistake
                  title="元素重复书写"
                  wrong="{1,1,2,3}"
                  correct="集合中的相同元素只写一次，可以写成 {1,2,3}。"
                />

                <Mistake
                  title="认为元素顺序不同就是不同集合"
                  wrong="{1,2,3} 与 {3,2,1} 是不同集合"
                  correct="集合具有无序性，所以这两个集合相等。"
                />

                <Mistake
                  title="把模糊条件当成集合"
                  wrong="“班里比较高的同学”组成集合"
                  correct="“比较高”没有明确判断标准，不满足元素的确定性。"
                />
              </div>
            </Section>

            {/* 07 练习 */}
            <Section
              id="quiz"
              number="07"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查集合基本概念是否已经掌握。
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
                下一步：集合间的基本关系
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                接下来将学习子集、真子集、集合相等和空集，
                开始研究集合与集合之间的关系。
              </p>

              <Link
                href="/grade1/sets"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回章节目录
              </Link>
            </section>
          </div>

          {/* 右边目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#basic" label="01 集合概念" />
                <Anchor href="#features" label="02 元素特征" />
                <Anchor href="#membership" label="03 属于关系" />
                <Anchor href="#number-sets" label="04 常用数集" />
                <Anchor href="#representation" label="05 表示方法" />
                <Anchor href="#mistakes" label="06 易错点" />
                <Anchor href="#quiz" label="07 即时练习" />
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

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function Result({
  expression,
  description,
}: {
  expression: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 text-center">
      <p className="font-serif text-xl text-slate-900">
        {expression}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

function NumberSetRow({
  symbol,
  name,
  example,
  last = false,
}: {
  symbol: string;
  name: string;
  example: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[70px_120px_1fr] items-center gap-3 px-5 py-4 text-sm ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="font-serif text-lg font-semibold text-blue-600">
        {symbol}
      </span>

      <span className="font-medium text-slate-800">
        {name}
      </span>

      <span className="text-slate-500">
        {example}
      </span>
    </div>
  );
}

function MethodCard({
  title,
  description,
  example,
}: {
  title: string;
  description: string;
  example: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        {description}
      </p>

      <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center font-serif text-lg text-slate-800">
        {example}
      </div>
    </div>
  );
}

function Mistake({
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

          <p className="mt-2 text-sm text-slate-600">
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
  const correct = selected === question.answer;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <span className="text-xs font-semibold text-blue-600">
        第 {index + 1} 题
      </span>

      <p className="mt-4 text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => onChoose(option.key)}
            className={`rounded-lg border px-4 py-3 text-left text-sm ${
              submitted &&
              option.key === question.answer
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : submitted &&
                    selected === option.key &&
                    option.key !== question.answer
                  ? "border-red-300 bg-red-50 text-red-600"
                  : selected === option.key
                    ? "border-slate-500 bg-slate-50"
                    : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <span className="mr-2 font-semibold">
              {option.key}.
            </span>

            {option.text}
          </button>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!selected}
          onClick={onSubmit}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">
              {correct ? "回答正确" : `正确答案：${question.answer}`}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {question.explanation}
            </p>
          </div>

          <button
            onClick={onReset}
            className="mt-3 text-sm text-slate-400"
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