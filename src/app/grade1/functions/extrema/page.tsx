"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type Question = {
  id: number;
  question: string;
  formula?: string;
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
    question: "函数在实数范围内的最小值是：",
    formula: "f(x)=x²−4x+7",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "7" },
    ],
    answer: "C",
    explanation:
      "配方得 f(x)=(x−2)²+3。因为平方项最小为 0，所以函数最小值为 3。",
  },
  {
    id: 2,
    question: "函数在区间 [0,3] 上的最大值是：",
    formula: "f(x)=x²−2x+3",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "5" },
      { key: "D", text: "6" },
    ],
    answer: "D",
    explanation:
      "f(x)=(x−1)²+2。区间内最小值为 f(1)=2；端点 f(0)=3，f(3)=6，因此最大值为 6。",
  },
  {
    id: 3,
    question:
      "若函数在区间 [1,5] 上单调递增，那么该区间上的最大值通常在什么位置取得？",
    options: [
      { key: "A", text: "x=1" },
      { key: "B", text: "x=3" },
      { key: "C", text: "x=5" },
      { key: "D", text: "无法确定" },
    ],
    answer: "C",
    explanation:
      "单调递增函数随着 x 增大而增大，因此在闭区间 [1,5] 上，最大值在右端点 x=5 取得。",
  },
];

export default function ExtremaPage() {
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

          <Link
            href="/grade1/functions"
            className="hover:text-slate-700"
          >
            函数的概念与性质
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            函数的最大值与最小值
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                05 · 函数性质
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              函数的最大值与最小值
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              函数的最大值和最小值描述函数在给定范围内能够取得的最高值和最低值。
              求最值时，需要结合定义域、函数图像、单调性以及二次函数的顶点进行分析。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#concept"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/functions"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          {/* 左侧正文 */}
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <LearningSection
              id="concept"
              number="01"
              title="什么是最大值和最小值？"
            >
              <p className="leading-8 text-slate-600">
                在某个给定范围内，如果函数能够取得一个最大的函数值，
                我们称它为函数的
                <strong className="mx-1 text-slate-800">
                  最大值
                </strong>
                ；能够取得的最小函数值叫做
                <strong className="mx-1 text-slate-800">
                  最小值
                </strong>
                。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="最大值"
                  symbol="MAX"
                  description="在给定范围内，函数能够实际取得的最大函数值。"
                />

                <InfoCard
                  title="最小值"
                  symbol="MIN"
                  description="在给定范围内，函数能够实际取得的最小函数值。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">
                  例如
                </p>

                <BlockMath math="f(x)=x^2,\quad x\in[-2,3]" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  在区间 [-2,3] 内：
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ResultBox
                    label="最小值"
                    main="0"
                    sub="在 x = 0 时取得"
                  />

                  <ResultBox
                    label="最大值"
                    main="9"
                    sub="在 x = 3 时取得"
                  />
                </div>
              </div>

              <TipBox>
                “最大值、最小值”强调的是
                <strong className="mx-1 text-slate-800">
                  函数能够真正取到
                </strong>
                的值。
              </TipBox>
            </LearningSection>

            {/* 02 */}
            <LearningSection
              id="graph"
              number="02"
              title="从函数图像理解最值"
            >
              <p className="leading-8 text-slate-600">
                在函数图像上，最大值对应图像在研究范围内能够达到的最高位置，
                最小值对应能够达到的最低位置。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <ExtremaGraph />

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      最低点
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      对应函数最小值
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">
                      最高点
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      对应函数最大值
                    </p>
                  </div>
                </div>
              </div>

              <TipBox>
                一定要注意题目规定的
                <strong className="mx-1 text-slate-800">
                  研究范围
                </strong>
                。同一个函数在不同区间上的最大值、最小值可能完全不同。
              </TipBox>
            </LearningSection>

            {/* 03 */}
            <LearningSection
              id="quadratic"
              number="03"
              title="二次函数的最值：看顶点"
            >
              <p className="leading-8 text-slate-600">
                对二次函数而言，顶点是求最大值或最小值最重要的位置。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <QuadraticCard
                  title="开口向上"
                  expression="a > 0"
                  conclusion="顶点对应最小值"
                  type="up"
                />

                <QuadraticCard
                  title="开口向下"
                  expression="a < 0"
                  conclusion="顶点对应最大值"
                  type="down"
                />
              </div>

              <ExampleCard title="例：求函数在 R 上的最小值">
                <BlockMath math="f(x)=x^2-4x+7" />

                <p className="mt-5 text-sm text-slate-600">
                  先配方：
                </p>

                <BlockMath math="f(x)=(x-2)^2+3" />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  因为平方项不可能小于 0：
                </p>

                <MathText>(x − 2)² ≥ 0</MathText>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  所以：
                </p>

                <MathText>f(x) ≥ 3</MathText>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当 x = 2 时取得等号，因此：
                </p>

                <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center">
                  <p className="text-sm text-slate-500">
                    函数最小值
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    3
                  </p>
                </div>
              </ExampleCard>
            </LearningSection>

            {/* 04 */}
            <LearningSection
              id="interval"
              number="04"
              title="闭区间上的二次函数最值"
            >
              <p className="leading-8 text-slate-600">
                如果题目给出了一个闭区间，
                不能只看抛物线顶点，还要同时检查
                <strong className="mx-1 text-slate-800">
                  区间端点
                </strong>
                。
              </p>

              <ExampleCard title="例：求函数在 [0,3] 上的最大值和最小值">
                <BlockMath math="f(x)=x^2-2x+3" />

                <p className="mt-5 text-sm text-slate-600">
                  配方：
                </p>

                <BlockMath math="f(x)=(x-1)^2+2" />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  顶点横坐标 x = 1 位于区间 [0,3] 内。
                </p>

                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    先计算顶点和两个端点：
                  </p>

                  <BlockMath math="f(0)=3" />
                  <BlockMath math="f(1)=2" />
                  <BlockMath math="f(3)=6" />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ResultBox
                    label="最小值"
                    main="2"
                    sub="在 x = 1 时取得"
                  />

                  <ResultBox
                    label="最大值"
                    main="6"
                    sub="在 x = 3 时取得"
                  />
                </div>
              </ExampleCard>
            </LearningSection>

            {/* 05 */}
            <LearningSection
              id="monotonicity"
              number="05"
              title="利用单调性求最值"
            >
              <p className="leading-8 text-slate-600">
                如果已经知道函数在某个闭区间上的单调性，
                最值通常可以直接由两个端点确定。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <MonotonicCard
                  arrow="↗"
                  title="单调递增"
                  min="左端点取得最小值"
                  max="右端点取得最大值"
                />

                <MonotonicCard
                  arrow="↘"
                  title="单调递减"
                  min="右端点取得最小值"
                  max="左端点取得最大值"
                />
              </div>

              <ExampleCard title="例：利用单调性判断最值">
                <p className="text-sm leading-7 text-slate-600">
                  已知函数 f(x) 在 [1,5] 上单调递增。
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为 x 从 1 增加到 5 时，函数值不断增加，因此：
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <ResultBox
                    label="最小值"
                    main="f(1)"
                    sub="左端点取得"
                  />

                  <ResultBox
                    label="最大值"
                    main="f(5)"
                    sub="右端点取得"
                  />
                </div>
              </ExampleCard>
            </LearningSection>

            {/* 06 */}
            <LearningSection
              id="steps"
              number="06"
              title="求函数最值的基本步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="确定研究范围"
                  text="先明确函数的定义域以及题目规定的区间。"
                />

                <StepItem
                  number="2"
                  title="判断函数结构"
                  text="观察函数是否为二次函数、是否已知单调性，或者是否可以通过配方进行整理。"
                />

                <StepItem
                  number="3"
                  title="寻找可能取得最值的位置"
                  text="重点检查顶点、区间端点以及其他特殊位置。"
                />

                <StepItem
                  number="4"
                  title="计算并比较函数值"
                  text="把所有可能位置对应的函数值算出来并进行比较。"
                />

                <StepItem
                  number="5"
                  title="写完整结论"
                  text="说明最大值或最小值是多少，并写清楚在什么位置取得。"
                  last
                />
              </div>
            </LearningSection>

            {/* 07 */}
            <LearningSection
              id="examples"
              number="07"
              title="典型题型"
            >
              <div className="space-y-5">
                <ExampleCard title="题型一：整个实数范围上的二次函数最值">
                  <BlockMath math="f(x)=-x^2+6x-5" />

                  <p className="mt-5 text-sm text-slate-600">
                    配方：
                  </p>

                  <BlockMath math="f(x)=-(x-3)^2+4" />

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    抛物线开口向下，因此顶点对应最大值。
                  </p>

                  <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center">
                    <p className="text-sm text-slate-500">
                      当 x = 3 时
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      最大值为 4
                    </p>
                  </div>
                </ExampleCard>

                <ExampleCard title="题型二：指定闭区间上的最值">
                  <BlockMath math="f(x)=x^2,\quad x\in[-1,2]" />

                  <p className="mt-5 text-sm text-slate-600">
                    检查顶点和两个端点：
                  </p>

                  <BlockMath math="f(-1)=1" />
                  <BlockMath math="f(0)=0" />
                  <BlockMath math="f(2)=4" />

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <ResultBox
                      label="最小值"
                      main="0"
                      sub="在 x = 0 时取得"
                    />

                    <ResultBox
                      label="最大值"
                      main="4"
                      sub="在 x = 2 时取得"
                    />
                  </div>
                </ExampleCard>
              </div>
            </LearningSection>

            {/* 08 */}
            <LearningSection
              id="mistakes"
              number="08"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="只找函数值，不写取得位置"
                  wrong="最后只写“最小值为 3”。"
                  correct="完整结论最好写成“当 x=2 时，函数取得最小值 3”。"
                />

                <MistakeCard
                  title="忽略题目给出的区间"
                  wrong="直接按照整个实数范围分析二次函数。"
                  correct="如果题目限定区间，就只能在该区间内寻找最大值和最小值。"
                />

                <MistakeCard
                  title="闭区间二次函数只检查顶点"
                  wrong="顶点在区间内，就不再计算两个端点。"
                  correct="顶点可能给出最小值，但最大值仍可能在两个端点中的一个取得。"
                />

                <MistakeCard
                  title="把最大值和极大值混在一起"
                  wrong="只要某一点附近最高，就是整个范围的最大值。"
                  correct="最大值要求和研究范围内所有函数值比较。本阶段先重点掌握全局最大值和最小值。"
                />
              </div>
            </LearningSection>

            {/* 09 */}
            <LearningSection
              id="quiz"
              number="09"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查函数最值的基本方法是否已经掌握。
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
            </LearningSection>

            {/* 章节完成 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                函数的概念与性质 · 完成
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                本章知识点均已开放，可通过练习检查掌握情况
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                现在已经学习了函数概念、定义域和值域、单调性、
                奇偶性以及最大值与最小值。
                下一步可以通过专题训练，把这些知识点真正转化成解题能力。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  去做专题训练 →
                </Link>

                <Link
                  href="/mistakes"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  查看错题
                </Link>

                <Link
                  href="/grade1/functions"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  返回章节目录
                </Link>
              </div>
            </section>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#concept" label="01 最值概念" />
                <Anchor href="#graph" label="02 图像理解" />
                <Anchor href="#quadratic" label="03 二次函数" />
                <Anchor href="#interval" label="04 闭区间最值" />
                <Anchor
                  href="#monotonicity"
                  label="05 利用单调性"
                />
                <Anchor href="#steps" label="06 解题步骤" />
                <Anchor href="#examples" label="07 典型题型" />
                <Anchor href="#mistakes" label="08 易错点" />
                <Anchor href="#quiz" label="09 即时练习" />
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LearningSection({
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

function MathText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 text-center font-serif text-xl text-slate-900 sm:text-2xl">
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

function InfoCard({
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
      <span className="text-xs font-semibold text-blue-600">
        {symbol}
      </span>

      <h3 className="mt-3 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ResultBox({
  label,
  main,
  sub,
}: {
  label: string;
  main: string;
  sub: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 text-center">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {main}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {sub}
      </p>
    </div>
  );
}

function ExtremaGraph() {
  return (
    <svg
      viewBox="0 0 500 250"
      className="mx-auto w-full max-w-lg"
      aria-label="函数最大值和最小值示意图"
    >
      <line
        x1="35"
        y1="210"
        x2="470"
        y2="210"
        stroke="#cbd5e1"
      />

      <line
        x1="65"
        y1="230"
        x2="65"
        y2="20"
        stroke="#cbd5e1"
      />

      <path
        d="M90 150 C135 55, 180 50, 220 130 C260 210, 315 200, 355 105 C385 35, 420 55, 450 95"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle
        cx="158"
        cy="62"
        r="6"
        fill="#2563eb"
      />

      <circle
        cx="288"
        cy="191"
        r="6"
        fill="#2563eb"
      />

      <text
        x="175"
        y="53"
        fontSize="13"
        fill="#475569"
      >
        最大值
      </text>

      <text
        x="300"
        y="205"
        fontSize="13"
        fill="#475569"
      >
        最小值
      </text>

      <text
        x="460"
        y="203"
        fontSize="12"
        fill="#94a3b8"
      >
        x
      </text>

      <text
        x="73"
        y="25"
        fontSize="12"
        fill="#94a3b8"
      >
        y
      </text>
    </svg>
  );
}

function QuadraticCard({
  title,
  expression,
  conclusion,
  type,
}: {
  title: string;
  expression: string;
  conclusion: string;
  type: "up" | "down";
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {expression}
          </p>
        </div>

        <span className="text-2xl text-blue-600">
          {type === "up" ? "∪" : "∩"}
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-700">
        {conclusion}
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

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}

function MonotonicCard({
  arrow,
  title,
  min,
  max,
}: {
  arrow: string;
  title: string;
  min: string;
  max: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl text-blue-600">
          {arrow}
        </span>

        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-500">
        <p>{min}</p>
        <p>{max}</p>
      </div>
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

      {question.formula && (
        <div className="my-5 text-center font-serif text-xl text-slate-900">
          {question.formula}
        </div>
      )}

      <p className="text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen = selected === option.key;
          const correct =
            submitted && option.key === question.answer;

          const wrongChosen =
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
                  : wrongChosen
                    ? "border-red-300 bg-red-50 text-red-600"
                    : chosen
                      ? "border-slate-400 bg-slate-50 text-slate-900"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
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
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              正确答案：{question.answer}
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