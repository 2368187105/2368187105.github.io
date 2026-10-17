"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuickQuestion = {
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

const quickQuestions: QuickQuestion[] = [
  {
    id: 1,
    question: "函数在实数范围内的单调性为：",
    formula: "f(x)=3x-2",
    options: [
      {
        key: "A",
        text: "在 R 上单调递增",
      },
      {
        key: "B",
        text: "在 R 上单调递减",
      },
      {
        key: "C",
        text: "先增后减",
      },
      {
        key: "D",
        text: "先减后增",
      },
    ],
    answer: "A",
    explanation:
      "一次函数 f(x)=kx+b 中，当 k>0 时，函数在 R 上单调递增。这里斜率 k=3>0。",
  },
  {
    id: 2,
    question: "函数的单调区间正确的是：",
    formula: "f(x)=-(x-2)^2+1",
    options: [
      {
        key: "A",
        text: "在 (-∞, 2] 上递减，在 [2, +∞) 上递增",
      },
      {
        key: "B",
        text: "在 (-∞, 2] 上递增，在 [2, +∞) 上递减",
      },
      {
        key: "C",
        text: "在整个实数范围内递增",
      },
      {
        key: "D",
        text: "在整个实数范围内递减",
      },
    ],
    answer: "B",
    explanation:
      "该函数是开口向下的抛物线，顶点横坐标为 2。顶点左侧函数值随 x 增大而增大，右侧随 x 增大而减小。",
  },
  {
    id: 3,
    question: "函数的单调区间正确的是：",
    formula: "f(x)=(x+1)^2-4",
    options: [
      {
        key: "A",
        text: "在 (-∞, 1] 上递减，在 [1, +∞) 上递增",
      },
      {
        key: "B",
        text: "在 (-∞, -1] 上递增，在 [-1, +∞) 上递减",
      },
      {
        key: "C",
        text: "在 (-∞, -1] 上递减，在 [-1, +∞) 上递增",
      },
      {
        key: "D",
        text: "在整个实数范围内递增",
      },
    ],
    answer: "C",
    explanation:
      "函数顶点横坐标为 -1，且抛物线开口向上。因此顶点左侧递减，顶点右侧递增。",
  },
];

export default function MonotonicityPage() {
  const [answers, setAnswers] = useState<
    Record<number, string>
  >({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(
    questionId: number,
    answer: string
  ) {
    if (submitted[questionId]) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  }

  function submitAnswer(questionId: number) {
    if (!answers[questionId]) {
      return;
    }

    setSubmitted((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  }

  function resetQuestion(questionId: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-slate-700"
          >
            首页
          </Link>

          <span>/</span>

          <Link
            href="/grade1"
            className="transition hover:text-slate-700"
          >
            高一数学
          </Link>

          <span>/</span>

          <Link
            href="/grade1/functions"
            className="transition hover:text-slate-700"
          >
            函数的概念与性质
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            函数的单调性
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                03 · 函数性质
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心知识点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              函数的单调性
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              单调性描述函数值随着自变量变化所呈现的整体趋势。
              学会判断函数“什么时候增加、什么时候减少”，
              是后续研究函数图像、最值以及各种基本函数的重要基础。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#concept"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/practice"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                直接去做题
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          {/* 左侧正文 */}
          <div className="min-w-0 space-y-14">
            {/* 1 概念 */}
            <LearningSection
              id="concept"
              number="01"
              title="什么是函数的单调性？"
            >
              <p className="leading-8 text-slate-600">
                观察一个函数时，我们不仅关心某个点的函数值，
                还关心函数值随着
                <InlineMath math="x" />
                的变化呈现什么趋势。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ConceptCard
                  title="单调递增"
                  description="当 x 增大时，函数值也随之增大。"
                  symbol="↗"
                />

                <ConceptCard
                  title="单调递减"
                  description="当 x 增大时，函数值反而减小。"
                  symbol="↘"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="font-semibold text-slate-900">
                  严格的数学定义
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  设函数
                  <InlineMath math="f(x)" />
                  的定义域中某个区间为
                  <InlineMath math="I" />
                  。如果对于区间
                  <InlineMath math="I" />
                  内任意两个值
                  <InlineMath math="x_1,x_2" />
                  ，当
                  <InlineMath math="x_1<x_2" />
                  时都有：
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <BlockMath math="f(x_1)<f(x_2)" />

                    <p className="text-center text-sm text-slate-500">
                      则函数在区间 I 上单调递增
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <BlockMath math="f(x_1)>f(x_2)" />

                    <p className="text-center text-sm text-slate-500">
                      则函数在区间 I 上单调递减
                    </p>
                  </div>
                </div>
              </div>

              <TipBox>
                判断单调性时，一定要关注
                <strong className="mx-1 text-slate-800">
                  “在什么区间上”
                </strong>
                。同一个函数在不同区间上可能具有不同的单调性。
              </TipBox>
            </LearningSection>

            {/* 2 图像理解 */}
            <LearningSection
              id="graph"
              number="02"
              title="从函数图像理解单调性"
            >
              <p className="leading-8 text-slate-600">
                图像是理解单调性最直观的方法。
                想象我们的视线从左向右移动：
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <GraphCard
                  type="increasing"
                  title="单调递增"
                  description="从左向右看，函数图像整体向上。"
                />

                <GraphCard
                  type="decreasing"
                  title="单调递减"
                  description="从左向右看，函数图像整体向下。"
                />
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="grid gap-7 md:grid-cols-[1fr_1fr] md:items-center">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      一个重要例子
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      二次函数不是一直增或一直减
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      对于开口向上的抛物线，
                      函数通常在顶点左侧递减，
                      在顶点右侧递增。
                    </p>

                    <div className="mt-4">
                      <BlockMath math="f(x)=x^2-2x+3" />
                    </div>

                    <p className="mt-3 text-sm text-slate-500">
                      配方得到：
                    </p>

                    <BlockMath math="f(x)=(x-1)^2+2" />
                  </div>

                  <QuadraticGraph />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <InlineMath math="(-\infty,1]" />
                    ：单调递减
                  </div>

                  <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <InlineMath math="[1,+\infty)" />
                    ：单调递增
                  </div>
                </div>
              </div>
            </LearningSection>

            {/* 3 方法 */}
            <LearningSection
              id="method"
              number="03"
              title="怎样判断函数的单调性？"
            >
              <div className="space-y-4">
                <MethodCard
                  number="方法一"
                  title="根据函数图像判断"
                  description="从左向右观察函数图像。如果图像向上，则对应区间递增；如果向下，则对应区间递减。"
                  suitable="适合已经知道函数图像或可以快速画出图像的题目。"
                />

                <MethodCard
                  number="方法二"
                  title="利用函数定义判断"
                  description="在给定区间内取 x₁<x₂，通过比较 f(x₁) 与 f(x₂) 的大小判断函数增减。"
                  suitable="适合需要进行严格证明的题目。"
                />

                <MethodCard
                  number="方法三"
                  title="利用熟悉的基本函数"
                  description="对于一次函数、二次函数等熟悉模型，可以直接根据斜率、开口方向和对称轴判断。"
                  suitable="适合基础选择题和快速判断题。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="font-semibold text-slate-900">
                  用定义证明单调性的基本步骤
                </p>

                <div className="mt-5 space-y-4">
                  <StepItem
                    number="1"
                    title="取值"
                    text="在目标区间内任取 x₁、x₂，并设 x₁<x₂。"
                  />

                  <StepItem
                    number="2"
                    title="作差"
                    text="计算 f(x₂)-f(x₁)。"
                  />

                  <StepItem
                    number="3"
                    title="判断符号"
                    text="根据区间条件判断这个差是正还是负。"
                  />

                  <StepItem
                    number="4"
                    title="得出结论"
                    text="如果差大于 0，则递增；如果差小于 0，则递减。"
                    last
                  />
                </div>
              </div>
            </LearningSection>

            {/* 4 例题 */}
            <LearningSection
              id="example"
              number="04"
              title="典型例题"
            >
              <ExampleCard
                tag="例题 1"
                title="判断一次函数的单调性"
              >
                <p className="text-slate-600">
                  判断函数
                  <InlineMath math="f(x)=2x+3" />
                  在
                  <InlineMath math="\mathbb{R}" />
                  上的单调性。
                </p>

                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-800">
                    解：
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    任取
                    <InlineMath math="x_1<x_2" />
                    ，则：
                  </p>

                  <BlockMath
                    math={
                      "f(x_2)-f(x_1)=2x_2+3-(2x_1+3)"
                    }
                  />

                  <BlockMath
                    math={
                      "=2(x_2-x_1)>0"
                    }
                  />

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    因此
                    <InlineMath math="f(x_2)>f(x_1)" />
                    ，所以函数
                    <InlineMath math="f(x)=2x+3" />
                    在
                    <InlineMath math="\mathbb{R}" />
                    上单调递增。
                  </p>
                </div>
              </ExampleCard>

              <div className="mt-5">
                <ExampleCard
                  tag="例题 2"
                  title="判断二次函数的单调区间"
                >
                  <p className="text-slate-600">
                    求函数
                    <InlineMath math="f(x)=x^2-4x+5" />
                    的单调区间。
                  </p>

                  <div className="mt-5 rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-800">
                      解：
                    </p>

                    <p className="mt-3 text-sm text-slate-600">
                      先配方：
                    </p>

                    <BlockMath
                      math={
                        "f(x)=(x-2)^2+1"
                      }
                    />

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      这是开口向上的抛物线，
                      顶点横坐标为
                      <InlineMath math="x=2" />
                      。
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <p>
                        在
                        <InlineMath math="(-\infty,2]" />
                        上单调递减；
                      </p>

                      <p>
                        在
                        <InlineMath math="[2,+\infty)" />
                        上单调递增。
                      </p>
                    </div>
                  </div>
                </ExampleCard>
              </div>
            </LearningSection>

            {/* 5 易错 */}
            <LearningSection
              id="mistakes"
              number="05"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeItem
                  title="把“函数值大”理解成“函数递增”"
                  wrong="f(2)>f(1)，所以函数一定递增。"
                  correct="单调性要求比较整个区间内任意两点，而不是只比较一组数据。"
                />

                <MistakeItem
                  title="忽略单调性对应的区间"
                  wrong="f(x)=x² 是单调函数。"
                  correct="f(x)=x² 在 (-∞,0] 上递减，在 [0,+∞) 上递增，不能笼统说它在 R 上单调。"
                />

                <MistakeItem
                  title="看图像时把方向看反"
                  wrong="图像从左往右下降，所以函数递增。"
                  correct="永远按 x 增大的方向，也就是从左向右观察。向上是递增，向下是递减。"
                />

                <MistakeItem
                  title="把两个单调区间合并"
                  wrong="f(x)=x² 在 (-∞,0]∪[0,+∞) 上单调。"
                  correct="两个区间上的单调性不同，应分别描述，不能合并成一个单调区间。"
                />
              </div>
            </LearningSection>

            {/* 6 即时练习 */}
            <LearningSection
              id="quiz"
              number="06"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道基础题，检查是否真正理解了函数单调性。
              </p>

              <div className="mt-6 space-y-5">
                {quickQuestions.map(
                  (question, index) => (
                    <QuickQuestionCard
                      key={question.id}
                      question={question}
                      index={index}
                      selected={
                        answers[question.id]
                      }
                      submitted={
                        submitted[question.id] ??
                        false
                      }
                      onChoose={(answer) =>
                        chooseAnswer(
                          question.id,
                          answer
                        )
                      }
                      onSubmit={() =>
                        submitAnswer(question.id)
                      }
                      onReset={() =>
                        resetQuestion(question.id)
                      }
                    />
                  )
                )}
              </div>
            </LearningSection>

            {/* 完成 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                完成本节学习
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                接下来，用题目把知识真正掌握下来
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                单调性最重要的是能够在具体题目中判断增减区间。
                建议完成专题训练，并将错误题目保存到错题本中再次复习。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  去做专题训练
                </Link>

                <Link
                  href="/mistakes"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  查看我的错题
                </Link>

                <Link
                  href="/grade1/functions"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
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
                <AnchorLink
                  href="#concept"
                  label="01 基本概念"
                />

                <AnchorLink
                  href="#graph"
                  label="02 图像理解"
                />

                <AnchorLink
                  href="#method"
                  label="03 判断方法"
                />

                <AnchorLink
                  href="#example"
                  label="04 典型例题"
                />

                <AnchorLink
                  href="#mistakes"
                  label="05 易错点"
                />

                <AnchorLink
                  href="#quiz"
                  label="06 即时练习"
                />
              </nav>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-400">
                  学习建议
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  先理解定义和图像，
                  再学习判断方法，
                  最后通过练习检验掌握情况。
                </p>
              </div>
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
    <section
      id={id}
      className="scroll-mt-24"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function ConceptCard({
  title,
  description,
  symbol,
}: {
  title: string;
  description: string;
  symbol: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-xl text-blue-600">
        {symbol}
      </div>

      <h3 className="mt-4 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
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

function GraphCard({
  type,
  title,
  description,
}: {
  type: "increasing" | "decreasing";
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <svg
        viewBox="0 0 300 170"
        className="h-40 w-full"
        aria-label={title}
      >
        <line
          x1="35"
          y1="140"
          x2="275"
          y2="140"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        <line
          x1="55"
          y1="155"
          x2="55"
          y2="20"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        <text
          x="278"
          y="145"
          fontSize="12"
          fill="#94a3b8"
        >
          x
        </text>

        <text
          x="48"
          y="18"
          fontSize="12"
          fill="#94a3b8"
        >
          y
        </text>

        {type === "increasing" ? (
          <path
            d="M70 125 C110 110, 150 90, 190 65 C220 47, 242 33, 260 25"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M70 30 C105 45, 145 65, 180 88 C210 108, 238 123, 260 132"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
      </svg>

      <h3 className="mt-3 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function QuadraticGraph() {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <svg
        viewBox="0 0 300 210"
        className="w-full"
        aria-label="二次函数图像"
      >
        <line
          x1="25"
          y1="165"
          x2="280"
          y2="165"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        <line
          x1="80"
          y1="190"
          x2="80"
          y2="20"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        <path
          d="M30 42 C75 115, 112 150, 150 154 C190 150, 225 110, 270 40"
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <line
          x1="150"
          y1="154"
          x2="150"
          y2="165"
          stroke="#64748b"
          strokeDasharray="4 4"
        />

        <circle
          cx="150"
          cy="154"
          r="5"
          fill="#2563eb"
        />

        <text
          x="145"
          y="184"
          fontSize="12"
          fill="#64748b"
        >
          1
        </text>

        <text
          x="265"
          y="158"
          fontSize="12"
          fill="#94a3b8"
        >
          x
        </text>

        <text
          x="68"
          y="25"
          fontSize="12"
          fill="#94a3b8"
        >
          y
        </text>
      </svg>

      <p className="mt-2 text-center text-xs text-slate-400">
        顶点横坐标为 x = 1
      </p>
    </div>
  );
}

function MethodCard({
  number,
  title,
  description,
  suitable,
}: {
  number: string;
  title: string;
  description: string;
  suitable: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="shrink-0 text-xs font-semibold text-blue-600">
          {number}
        </span>

        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {description}
          </p>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            {suitable}
          </p>
        </div>
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

      <div className="pb-2">
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

function ExampleCard({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
          {tag}
        </span>

        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}

function MistakeItem({
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

function QuickQuestionCard({
  question,
  index,
  selected,
  submitted,
  onChoose,
  onSubmit,
  onReset,
}: {
  question: QuickQuestion;
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

      {question.formula && (
        <div className="my-5">
          <BlockMath math={question.formula} />
        </div>
      )}

      <p className="text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen =
            selected === option.key;

          const correct =
            submitted &&
            option.key === question.answer;

          const wrongChosen =
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
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div
            className={`rounded-lg p-4 ${
              isCorrect
                ? "bg-emerald-50/70"
                : "bg-slate-50"
            }`}
          >
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
            className="mt-3 text-sm text-slate-400 transition hover:text-slate-700"
          >
            重新作答
          </button>
        </div>
      )}
    </div>
  );
}

function AnchorLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
    >
      {label}
    </a>
  );
}