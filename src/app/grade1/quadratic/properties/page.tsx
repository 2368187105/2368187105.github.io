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
      "若 a>b，则下列关系一定正确的是：",
    options: [
      {
        key: "A",
        text: "a+3 > b+3",
      },
      {
        key: "B",
        text: "a-2 < b-2",
      },
      {
        key: "C",
        text: "-a > -b",
      },
      {
        key: "D",
        text: "2a < 2b",
      },
    ],
    answer: "A",
    explanation:
      "不等式两边同时加上同一个数，不等号方向不变，因此 a+3>b+3。",
  },
  {
    id: 2,
    question:
      "若 a>b，则将不等式两边同时乘以 -2 后得到：",
    options: [
      {
        key: "A",
        text: "-2a > -2b",
      },
      {
        key: "B",
        text: "-2a < -2b",
      },
      {
        key: "C",
        text: "-2a = -2b",
      },
      {
        key: "D",
        text: "无法判断",
      },
    ],
    answer: "B",
    explanation:
      "不等式两边同时乘以负数时，不等号方向必须改变，所以得到 -2a<-2b。",
  },
  {
    id: 3,
    question:
      "若 a>b，c>0，则下列关系正确的是：",
    options: [
      {
        key: "A",
        text: "ac > bc",
      },
      {
        key: "B",
        text: "ac < bc",
      },
      {
        key: "C",
        text: "ac = bc",
      },
      {
        key: "D",
        text: "无法判断",
      },
    ],
    answer: "A",
    explanation:
      "因为 c>0，所以不等式两边同时乘以正数 c，不等号方向不变，因此 ac>bc。",
  },
];

export default function PropertiesPage() {
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
            href="/grade1/quadratic"
            className="hover:text-slate-700"
          >
            一元二次函数、方程和不等式
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            等式与不等式的基本性质
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                01 · 不等式基础
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础必会
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              等式与不等式的基本性质
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              解不等式的基础，是理解不等式在加减、乘除运算中的变化规律。
              特别要注意：不等式两边同时乘或除以负数时，不等号方向必须改变。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#compare"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/quadratic"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <Section
              id="compare"
              number="01"
              title="实数的大小关系"
            >
              <p className="leading-8 text-slate-600">
                对任意两个实数 a、b，
                比较它们大小可以转化为研究
                <strong className="mx-1 text-slate-900">
                  a−b 的正负
                </strong>
                。
              </p>

              <div className="mt-6 space-y-3">
                <RuleCard
                  formula="a − b > 0"
                  conclusion="a > b"
                />

                <RuleCard
                  formula="a − b = 0"
                  conclusion="a = b"
                />

                <RuleCard
                  formula="a − b < 0"
                  conclusion="a < b"
                />
              </div>

              <ExampleCard title="例如">
                <p className="text-sm leading-7 text-slate-600">
                  比较 7 和 4 的大小：
                </p>

                <MathBox>7 − 4 = 3 &gt; 0</MathBox>

                <p className="text-center text-sm text-slate-600">
                  所以 7 &gt; 4。
                </p>
              </ExampleCard>
            </Section>

            {/* 02 */}
            <Section
              id="equality"
              number="02"
              title="等式的基本性质"
            >
              <p className="leading-8 text-slate-600">
                等式的核心原则是：
                <strong className="mx-1 text-slate-900">
                  等式两边进行相同的合法运算，等式仍然成立
                </strong>
                。
              </p>

              <div className="mt-6 space-y-3">
                <PropertyCard
                  title="加减同一个数"
                  formula="若 a = b，则 a + c = b + c"
                />

                <PropertyCard
                  title="乘同一个数"
                  formula="若 a = b，则 ac = bc"
                />

                <PropertyCard
                  title="除以同一个非零数"
                  formula="若 a = b，且 c ≠ 0，则 a ÷ c = b ÷ c"
                />
              </div>

              <ExampleCard title="例如">
                <MathBox>x + 3 = 8</MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  两边同时减去 3：
                </p>

                <MathBox>x = 5</MathBox>
              </ExampleCard>
            </Section>

            {/* 03 */}
            <Section
              id="addition"
              number="03"
              title="不等式的加减性质"
            >
              <p className="leading-8 text-slate-600">
                如果：
              </p>

              <MathBox>a &gt; b</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么两边同时加上或减去同一个数 c，
                不等号方向
                <strong className="mx-1 text-slate-900">
                  不改变
                </strong>
                。
              </p>

              <MathBox>a + c &gt; b + c</MathBox>

              <MathBox>a − c &gt; b − c</MathBox>

              <ExampleCard title="例如">
                <MathBox>5 &gt; 2</MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  两边同时减去 7：
                </p>

                <MathBox>−2 &gt; −5</MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  不等号方向仍然不变。
                </p>
              </ExampleCard>
            </Section>

            {/* 04 */}
            <Section
              id="positive"
              number="04"
              title="乘除正数：方向不变"
            >
              <p className="leading-8 text-slate-600">
                若：
              </p>

              <MathBox>a &gt; b，c &gt; 0</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么：
              </p>

              <MathBox>ac &gt; bc</MathBox>

              <p className="text-center text-sm text-slate-400">
                两边同时乘正数，不等号方向不变
              </p>

              <ExampleCard title="例如">
                <MathBox>4 &gt; 2</MathBox>

                <p className="text-sm text-slate-600">
                  两边同时乘 3：
                </p>

                <MathBox>12 &gt; 6</MathBox>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="negative"
              number="05"
              title="乘除负数：方向改变"
            >
              <p className="leading-8 text-slate-600">
                这是本节最重要、也最容易出错的地方。
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                若：
              </p>

              <MathBox>a &gt; b，c &lt; 0</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么：
              </p>

              <MathBox>ac &lt; bc</MathBox>

              <div className="mt-6 rounded-xl border border-red-100 bg-red-50/50 p-5">
                <p className="text-sm font-semibold text-red-500">
                  必须记住
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  不等式两边同时乘或除以
                  <strong className="mx-1 text-slate-900">
                    负数
                  </strong>
                  时，不等号必须改变方向。
                </p>
              </div>

              <ExampleCard title="例如">
                <MathBox>4 &gt; 2</MathBox>

                <p className="text-sm text-slate-600">
                  两边同时乘 -3：
                </p>

                <MathBox>−12 &lt; −6</MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  原来的 &gt; 变成了 &lt;。
                </p>
              </ExampleCard>
            </Section>

            {/* 06 */}
            <Section
              id="transitive"
              number="06"
              title="不等式的传递性"
            >
              <p className="leading-8 text-slate-600">
                如果：
              </p>

              <MathBox>a &gt; b</MathBox>

              <MathBox>b &gt; c</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么：
              </p>

              <MathBox>a &gt; c</MathBox>

              <ExampleCard title="例如">
                <MathBox>8 &gt; 5，5 &gt; 2</MathBox>

                <p className="text-center text-sm text-slate-600">
                  所以可以得到：
                </p>

                <MathBox>8 &gt; 2</MathBox>
              </ExampleCard>
            </Section>

            {/* 07 */}
            <Section
              id="summary"
              number="07"
              title="不等式性质总结"
            >
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <SummaryRow
                  operation="加同一个数"
                  direction="不变"
                />

                <SummaryRow
                  operation="减同一个数"
                  direction="不变"
                />

                <SummaryRow
                  operation="乘正数"
                  direction="不变"
                />

                <SummaryRow
                  operation="除以正数"
                  direction="不变"
                />

                <SummaryRow
                  operation="乘负数"
                  direction="改变"
                />

                <SummaryRow
                  operation="除以负数"
                  direction="改变"
                  last
                />
              </div>

              <TipBox>
                最重要的一句话：
                <strong className="mx-1 text-slate-900">
                  加减不变号，乘除先看正负；遇负数必须变号。
                </strong>
              </TipBox>
            </Section>

            {/* 08 */}
            <Section
              id="examples"
              number="08"
              title="典型例题"
            >
              <ExampleCard title="例 1">
                <p className="text-sm leading-7 text-slate-600">
                  已知 x−3&gt;5，求 x 的范围。
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  两边同时加 3：
                </p>

                <MathBox>x &gt; 8</MathBox>
              </ExampleCard>

              <ExampleCard title="例 2">
                <p className="text-sm leading-7 text-slate-600">
                  已知 −2x&gt;6，求 x 的范围。
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  两边同时除以 −2。
                  因为除以的是负数，所以必须改变不等号方向：
                </p>

                <MathBox>x &lt; −3</MathBox>
              </ExampleCard>

              <ExampleCard title="例 3">
                <p className="text-sm leading-7 text-slate-600">
                  已知 3x+1≤10，求 x 的范围。
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  两边同时减去 1：
                </p>

                <MathBox>3x ≤ 9</MathBox>

                <p className="text-sm text-slate-500">
                  再同时除以正数 3：
                </p>

                <MathBox>x ≤ 3</MathBox>
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
                  title="乘负数忘记改变方向"
                  wrong="由 x>2 得到 -x>-2"
                  correct="两边乘以 -1 后必须改变方向，所以应该是 -x<-2。"
                />

                <MistakeCard
                  title="除负数忘记改变方向"
                  wrong="由 -2x>6 得到 x>−3"
                  correct="两边除以 -2 后，不等号改变方向，所以 x<−3。"
                />

                <MistakeCard
                  title="加减时错误改变方向"
                  wrong="由 x>2 得到 x+3<5"
                  correct="两边同时加同一个数，不等号方向不变，所以 x+3>5。"
                />

                <MistakeCard
                  title="没有先判断乘数正负"
                  wrong="看到两边同时乘 c，就直接认为方向不变"
                  correct="必须先判断 c 的正负。c>0 时方向不变，c<0 时方向改变。"
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
                完成下面 3 道题，检查不等式基本性质是否已经掌握。
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
                下一步：基本不等式
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将学习高中数学中非常重要的基本不等式，
                并开始利用不等式求最大值和最小值。
              </p>

              <Link
                href="/grade1/quadratic"
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
                <Anchor href="#compare" label="01 大小关系" />
                <Anchor href="#equality" label="02 等式性质" />
                <Anchor href="#addition" label="03 加减性质" />
                <Anchor href="#positive" label="04 乘除正数" />
                <Anchor href="#negative" label="05 乘除负数" />
                <Anchor href="#transitive" label="06 传递性" />
                <Anchor href="#summary" label="07 性质总结" />
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

function RuleCard({
  formula,
  conclusion,
}: {
  formula: string;
  conclusion: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[1fr_60px_1fr] sm:items-center">
      <p className="text-center font-serif text-lg text-slate-700">
        {formula}
      </p>

      <p className="text-center text-slate-300">
        ⇔
      </p>

      <p className="text-center font-serif text-lg font-semibold text-slate-900">
        {conclusion}
      </p>
    </div>
  );
}

function PropertyCard({
  title,
  formula,
}: {
  title: string;
  formula: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-serif text-lg text-slate-900">
        {formula}
      </p>
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

function SummaryRow({
  operation,
  direction,
  last = false,
}: {
  operation: string;
  direction: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-2 items-center px-5 py-4 text-sm ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="text-slate-600">
        {operation}
      </span>

      <span
        className={`text-right font-semibold ${
          direction === "改变"
            ? "text-red-500"
            : "text-emerald-600"
        }`}
      >
        不等号方向{direction}
      </span>
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