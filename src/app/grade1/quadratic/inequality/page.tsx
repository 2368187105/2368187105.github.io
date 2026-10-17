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
      "不等式 x²−5x+6>0 的解集是：",
    options: [
      {
        key: "A",
        text: "2<x<3",
      },
      {
        key: "B",
        text: "x<2 或 x>3",
      },
      {
        key: "C",
        text: "x≤2 或 x≥3",
      },
      {
        key: "D",
        text: "2≤x≤3",
      },
    ],
    answer: "B",
    explanation:
      "x²−5x+6=(x−2)(x−3)，两个根为 2、3，且二次项系数为正。要求函数值大于 0，应取两个根外侧，所以 x<2 或 x>3。",
  },
  {
    id: 2,
    question:
      "不等式 x²−4x+3<0 的解集是：",
    options: [
      {
        key: "A",
        text: "x<1 或 x>3",
      },
      {
        key: "B",
        text: "1<x<3",
      },
      {
        key: "C",
        text: "x≤1 或 x≥3",
      },
      {
        key: "D",
        text: "1≤x≤3",
      },
    ],
    answer: "B",
    explanation:
      "x²−4x+3=(x−1)(x−3)，两个根为 1、3，且抛物线开口向上。要求函数值小于 0，所以取两个根之间：1<x<3。",
  },
  {
    id: 3,
    question:
      "不等式 x²−2x+1≤0 的解集是：",
    options: [
      {
        key: "A",
        text: "R",
      },
      {
        key: "B",
        text: "x=1",
      },
      {
        key: "C",
        text: "x≠1",
      },
      {
        key: "D",
        text: "无解",
      },
    ],
    answer: "B",
    explanation:
      "x²−2x+1=(x−1)²≥0。要使它≤0，只能等于 0，因此 x=1。",
  },
];

export default function QuadraticInequalityPage() {
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
            href="/grade1/quadratic"
            className="hover:text-slate-700"
          >
            一元二次函数、方程和不等式
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            一元二次不等式
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                04 · 一元二次不等式
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                高频核心
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              一元二次不等式
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              一元二次不等式的核心不是死记解集，
              而是观察二次函数图像在 x 轴的上方还是下方。
              方程的根负责划分区间，函数图像负责判断正负。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#concept"
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
              id="concept"
              number="01"
              title="什么是一元二次不等式？"
            >
              <p className="leading-8 text-slate-600">
                一般地，形如：
              </p>

              <MathBox>
                ax² + bx + c &gt; 0
              </MathBox>

              <MathBox>
                ax² + bx + c &lt; 0
              </MathBox>

              <MathBox>
                ax² + bx + c ≥ 0
              </MathBox>

              <MathBox>
                ax² + bx + c ≤ 0
              </MathBox>

              <p className="mt-5 text-center text-sm text-slate-400">
                其中 a≠0
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                这类不等式叫做
                <strong className="mx-1 text-slate-900">
                  一元二次不等式
                </strong>
                。
              </p>

              <TipBox>
                “一元”表示只有一个未知数，
                “二次”表示未知数最高次数是 2。
              </TipBox>
            </Section>

            {/* 02 */}
            <Section
              id="connection"
              number="02"
              title="为什么要先解一元二次方程？"
            >
              <p className="leading-8 text-slate-600">
                例如求：
              </p>

              <MathBox>
                x² − 5x + 6 &gt; 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                我们先研究对应的方程：
              </p>

              <MathBox>
                x² − 5x + 6 = 0
              </MathBox>

              <MathBox>
                (x − 2)(x − 3) = 0
              </MathBox>

              <MathBox>
                x₁ = 2，x₂ = 3
              </MathBox>

              <p className="mt-6 leading-8 text-slate-600">
                这两个根把数轴分成三个区间：
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <IntervalCard text="x < 2" />
                <IntervalCard text="2 < x < 3" />
                <IntervalCard text="x > 3" />
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                接下来只需要判断二次函数在这三个区间中是正还是负。
              </p>
            </Section>

            {/* 03 */}
            <Section
              id="graph"
              number="03"
              title="从抛物线图像看正负"
            >
              <p className="leading-8 text-slate-600">
                对函数：
              </p>

              <MathBox>
                y = x² − 5x + 6
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                抛物线开口向上，并且与 x 轴交于 x=2、x=3。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <TwoRootsGraph />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <SignCard
                    range="x < 2"
                    sign="y > 0"
                    description="图像在 x 轴上方"
                  />

                  <SignCard
                    range="2 < x < 3"
                    sign="y < 0"
                    description="图像在 x 轴下方"
                  />

                  <SignCard
                    range="x > 3"
                    sign="y > 0"
                    description="图像在 x 轴上方"
                  />
                </div>
              </div>

              <ResultCard
                title="所以"
                line1="x²−5x+6 > 0"
                line2="x < 2 或 x > 3"
              />

              <ResultCard
                title="而"
                line1="x²−5x+6 < 0"
                line2="2 < x < 3"
              />
            </Section>

            {/* 04 */}
            <Section
              id="memory"
              number="04"
              title="最常用口诀：大于取两边，小于取中间"
            >
              <p className="leading-8 text-slate-600">
                当满足下面两个条件时：
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ConditionCard
                  number="1"
                  title="a > 0"
                  description="抛物线开口向上。"
                />

                <ConditionCard
                  number="2"
                  title="Δ > 0"
                  description="方程有两个不相等的实数根 x₁<x₂。"
                />
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                那么可以直接记：
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RuleCard
                  title="大于 0"
                  formula="ax²+bx+c > 0"
                  result="x < x₁ 或 x > x₂"
                  memory="取两边"
                />

                <RuleCard
                  title="小于 0"
                  formula="ax²+bx+c < 0"
                  result="x₁ < x < x₂"
                  memory="取中间"
                />
              </div>

              <TipBox>
                “大于取两边、小于取中间”
                只适用于
                <strong className="mx-1 text-slate-900">
                  a&gt;0 且 Δ&gt;0
                </strong>
                的常见情况，不能不看条件直接套。
              </TipBox>
            </Section>

            {/* 05 */}
            <Section
              id="inclusive"
              number="05"
              title="遇到 ≥ 或 ≤ 怎么办？"
            >
              <p className="leading-8 text-slate-600">
                如果不等式中带有等号，
                方程的根也必须包含在解集中。
              </p>

              <ExampleCard title="例 1">
                <MathBox>
                  x² − 5x + 6 ≥ 0
                </MathBox>

                <MathBox>
                  (x − 2)(x − 3) ≥ 0
                </MathBox>

                <AnswerBox>
                  x ≤ 2 或 x ≥ 3
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 2">
                <MathBox>
                  x² − 5x + 6 ≤ 0
                </MathBox>

                <AnswerBox>
                  2 ≤ x ≤ 3
                </AnswerBox>
              </ExampleCard>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-800">
                  一个简单判断
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  如果题目是 &gt; 或 &lt;，根本身不取；
                  如果题目是 ≥ 或 ≤，根本身要取。
                </p>
              </div>
            </Section>

            {/* 06 */}
            <Section
              id="negative-a"
              number="06"
              title="如果二次项系数 a<0"
            >
              <p className="leading-8 text-slate-600">
                当 a&lt;0 时，抛物线
                <strong className="mx-1 text-slate-900">
                  开口向下
                </strong>
                ，正负规律会与开口向上的情况相反。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <DownwardGraph />
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                若有两个根 x₁&lt;x₂，则：
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RuleCard
                  title="大于 0"
                  formula="ax²+bx+c > 0"
                  result="x₁ < x < x₂"
                  memory="取中间"
                />

                <RuleCard
                  title="小于 0"
                  formula="ax²+bx+c < 0"
                  result="x < x₁ 或 x > x₂"
                  memory="取两边"
                />
              </div>

              <TipBox>
                最保险的方法不是背口诀，
                而是先看
                <strong className="mx-1 text-slate-900">
                  抛物线开口方向
                </strong>
                ，再判断图像在哪些区间位于 x 轴上方或下方。
              </TipBox>
            </Section>

            {/* 07 */}
            <Section
              id="delta-zero"
              number="07"
              title="Δ = 0 时怎么判断？"
            >
              <p className="leading-8 text-slate-600">
                当 Δ=0 时，一元二次方程有两个相等的实数根。
                抛物线与 x 轴只有一个公共点。
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  x² − 2x + 1
                </MathBox>

                <MathBox>
                  = (x − 1)²
                </MathBox>

                <div className="mt-6 rounded-xl bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-600">
                    因为平方恒有：
                  </p>

                  <MathBox>
                    (x − 1)² ≥ 0
                  </MathBox>
                </div>
              </ExampleCard>

              <div className="mt-6 space-y-3">
                <ConclusionRow
                  condition="(x−1)² > 0"
                  result="x ≠ 1"
                />

                <ConclusionRow
                  condition="(x−1)² ≥ 0"
                  result="x ∈ R"
                />

                <ConclusionRow
                  condition="(x−1)² < 0"
                  result="无解"
                />

                <ConclusionRow
                  condition="(x−1)² ≤ 0"
                  result="x = 1"
                />
              </div>
            </Section>

            {/* 08 */}
            <Section
              id="delta-negative"
              number="08"
              title="Δ < 0 时怎么判断？"
            >
              <p className="leading-8 text-slate-600">
                当 Δ&lt;0 时，
                二次函数图像与 x 轴没有交点。
                此时函数值的正负主要由
                <strong className="mx-1 text-slate-900">
                  a 的符号
                </strong>
                决定。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <PropertyCard
                  title="a > 0，Δ < 0"
                  main="ax²+bx+c 始终 > 0"
                  description="抛物线整体位于 x 轴上方。"
                />

                <PropertyCard
                  title="a < 0，Δ < 0"
                  main="ax²+bx+c 始终 < 0"
                  description="抛物线整体位于 x 轴下方。"
                />
              </div>

              <ExampleCard title="例如">
                <MathBox>
                  x² + 1 &gt; 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  对应方程 x²+1=0 的 Δ&lt;0，
                  且 a=1&gt;0，所以函数值恒正。
                </p>

                <AnswerBox>
                  解集为 R
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 09 */}
            <Section
              id="method"
              number="09"
              title="标准解题步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="整理成标准形式"
                  text="把不等式整理成 ax²+bx+c>0、<0、≥0 或 ≤0 的形式。"
                />

                <StepItem
                  number="2"
                  title="先解对应方程"
                  text="求 ax²+bx+c=0 的根，必要时先计算判别式 Δ。"
                />

                <StepItem
                  number="3"
                  title="看二次项系数 a"
                  text="a>0 时开口向上，a<0 时开口向下。"
                />

                <StepItem
                  number="4"
                  title="判断图像正负"
                  text="图像在 x 轴上方表示函数值>0，在 x 轴下方表示函数值<0。"
                />

                <StepItem
                  number="5"
                  title="注意是否包含根"
                  text="严格不等式 >、< 不取根；≥、≤ 需要根据等号情况包含根。"
                  last
                />
              </div>
            </Section>

            {/* 10 */}
            <Section
              id="examples"
              number="10"
              title="典型例题"
            >
              <ExampleCard title="例 1：大于 0">
                <p className="text-sm leading-7 text-slate-600">
                  解不等式：
                </p>

                <MathBox>
                  x² − 4x + 3 &gt; 0
                </MathBox>

                <MathBox>
                  (x − 1)(x − 3) &gt; 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两个根为 1、3，a&gt;0。
                  抛物线开口向上，要求函数值大于 0，所以取两边。
                </p>

                <AnswerBox>
                  x &lt; 1 或 x &gt; 3
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 2：小于等于 0">
                <p className="text-sm leading-7 text-slate-600">
                  解不等式：
                </p>

                <MathBox>
                  x² − 6x + 8 ≤ 0
                </MathBox>

                <MathBox>
                  (x − 2)(x − 4) ≤ 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两根为 2、4，a&gt;0。
                  小于 0 取中间，同时因为有等号，所以两个根也要包含。
                </p>

                <AnswerBox>
                  2 ≤ x ≤ 4
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 3：开口向下">
                <p className="text-sm leading-7 text-slate-600">
                  解不等式：
                </p>

                <MathBox>
                  −x² + 3x − 2 &gt; 0
                </MathBox>

                <MathBox>
                  −(x − 1)(x − 2) &gt; 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两个根为 1、2，
                  但 a&lt;0，抛物线开口向下。
                  图像在两个根之间位于 x 轴上方。
                </p>

                <AnswerBox>
                  1 &lt; x &lt; 2
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 4：没有实数根">
                <p className="text-sm leading-7 text-slate-600">
                  解不等式：
                </p>

                <MathBox>
                  x² + 2x + 5 &gt; 0
                </MathBox>

                <MathBox>
                  Δ = 2² − 4×1×5 = −16
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Δ&lt;0 且 a&gt;0，
                  抛物线整体位于 x 轴上方。
                </p>

                <AnswerBox>
                  解集为 R
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 11 */}
            <Section
              id="mistakes"
              number="11"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="不看 a 的符号直接背口诀"
                  wrong="所有二次不等式都是“大于取两边，小于取中间”"
                  correct="只有在 a>0 且有两个不同实根时才可以这样直接记。a<0 时规律相反。"
                />

                <MistakeCard
                  title="忘记 ≥、≤ 要包含根"
                  wrong="x²−5x+6≤0 的解集写成 2<x<3"
                  correct="因为是不等式 ≤0，所以 x=2、x=3 时等号成立，应写 2≤x≤3。"
                />

                <MistakeCard
                  title="Δ=0 仍然机械分成三个区间"
                  wrong="方程只有一个公共根仍然按照两个不同根处理"
                  correct="Δ=0 时应先观察完全平方形式和开口方向，单独判断。"
                />

                <MistakeCard
                  title="把图像上下与 x 正负混淆"
                  wrong="图像在 x 轴上方表示 x>0"
                  correct="图像在 x 轴上方表示函数值 y>0，并不表示自变量 x>0。"
                />
              </div>
            </Section>

            {/* 12 */}
            <Section
              id="quiz"
              number="12"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查一元二次不等式的解法是否已经掌握。
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
                下一步：二次函数、方程与不等式的综合应用
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将综合使用二次函数图像、判别式、
                方程根、不等式解集和最值方法，
                处理参数题与实际应用题。
              </p>

              <Link
                href="/grade1/quadratic"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回章节目录
              </Link>
            </section>
          </div>

          {/* 右侧 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#concept" label="01 基本概念" />
                <Anchor href="#connection" label="02 为什么先求根" />
                <Anchor href="#graph" label="03 图像正负" />
                <Anchor href="#memory" label="04 常用口诀" />
                <Anchor href="#inclusive" label="05 ≥ 与 ≤" />
                <Anchor href="#negative-a" label="06 a<0 情况" />
                <Anchor href="#delta-zero" label="07 Δ=0" />
                <Anchor href="#delta-negative" label="08 Δ<0" />
                <Anchor href="#method" label="09 解题步骤" />
                <Anchor href="#examples" label="10 典型例题" />
                <Anchor href="#mistakes" label="11 易错点" />
                <Anchor href="#quiz" label="12 即时练习" />
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

function IntervalCard({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center font-serif text-lg text-slate-800">
      {text}
    </div>
  );
}

function SignCard({
  range,
  sign,
  description,
}: {
  range: string;
  sign: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 text-center">
      <p className="font-serif text-base text-slate-800">
        {range}
      </p>

      <p className="mt-2 text-lg font-semibold text-blue-600">
        {sign}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

function ConditionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="mt-3 font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function RuleCard({
  title,
  formula,
  result,
  memory,
}: {
  title: string;
  formula: string;
  result: string;
  memory: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-blue-600">
          {title}
        </p>

        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
          {memory}
        </span>
      </div>

      <p className="mt-4 font-serif text-base text-slate-700">
        {formula}
      </p>

      <p className="mt-3 font-serif text-lg font-semibold text-slate-900">
        {result}
      </p>
    </div>
  );
}

function PropertyCard({
  title,
  main,
  description,
}: {
  title: string;
  main: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-semibold text-slate-900">
        {main}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ResultCard({
  title,
  line1,
  line2,
}: {
  title: string;
  line1: string;
  line2: string;
}) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-serif text-lg text-slate-800">
        {line1}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {line2}
      </p>
    </div>
  );
}

function ConclusionRow({
  condition,
  result,
}: {
  condition: string;
  result: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <p className="font-serif text-slate-700">
        {condition}
      </p>

      <span className="hidden text-slate-300 sm:block">
        →
      </span>

      <p className="font-serif font-semibold text-slate-900">
        {result}
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

function AnswerBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-lg bg-emerald-50/60 px-5 py-4 text-center text-sm font-semibold text-emerald-700">
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

function TwoRootsGraph() {
  return (
    <svg
      viewBox="0 0 520 280"
      className="mx-auto w-full max-w-xl"
      aria-label="开口向上的二次函数与x轴交于两点"
    >
      <line
        x1="40"
        y1="150"
        x2="480"
        y2="150"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <line
        x1="260"
        y1="20"
        x2="260"
        y2="245"
        stroke="#e2e8f0"
        strokeWidth="2"
      />

      <path
        d="M 70 45 Q 260 330 450 45"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
      />

      <circle
        cx="165"
        cy="150"
        r="5"
        fill="#2563eb"
      />

      <circle
        cx="355"
        cy="150"
        r="5"
        fill="#2563eb"
      />

      <text
        x="150"
        y="175"
        fill="#64748b"
        fontSize="14"
      >
        x₁
      </text>

      <text
        x="345"
        y="175"
        fill="#64748b"
        fontSize="14"
      >
        x₂
      </text>

      <text
        x="470"
        y="140"
        fill="#64748b"
        fontSize="14"
      >
        x
      </text>

      <text
        x="270"
        y="30"
        fill="#64748b"
        fontSize="14"
      >
        y
      </text>
    </svg>
  );
}

function DownwardGraph() {
  return (
    <svg
      viewBox="0 0 520 280"
      className="mx-auto w-full max-w-xl"
      aria-label="开口向下的二次函数示意图"
    >
      <line
        x1="40"
        y1="175"
        x2="480"
        y2="175"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <line
        x1="260"
        y1="25"
        x2="260"
        y2="250"
        stroke="#e2e8f0"
        strokeWidth="2"
      />

      <path
        d="M 80 245 Q 260 -40 440 245"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
      />

      <circle
        cx="155"
        cy="175"
        r="5"
        fill="#2563eb"
      />

      <circle
        cx="365"
        cy="175"
        r="5"
        fill="#2563eb"
      />

      <text
        x="143"
        y="198"
        fill="#64748b"
        fontSize="14"
      >
        x₁
      </text>

      <text
        x="353"
        y="198"
        fill="#64748b"
        fontSize="14"
      >
        x₂
      </text>

      <text
        x="470"
        y="165"
        fill="#64748b"
        fontSize="14"
      >
        x
      </text>
    </svg>
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