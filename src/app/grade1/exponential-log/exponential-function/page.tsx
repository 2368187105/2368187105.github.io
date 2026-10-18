"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BlockMath,
  InlineMath,
} from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuizOption = {
  key: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  question: string;
  formula?: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "exponential-function-quiz-1",
    question: "下列函数中，是指数函数的是：",
    options: [
      {
        key: "A",
        text: "y = x²",
      },
      {
        key: "B",
        text: "y = 2ˣ",
      },
      {
        key: "C",
        text: "y = x² + 1",
      },
      {
        key: "D",
        text: "y = 2x",
      },
    ],
    correctAnswer: "B",
    explanation:
      "指数函数必须具有 y=aˣ 的形式，其中 a > 0 且 a ≠ 1。y=2ˣ 符合定义。",
  },
  {
    id: "exponential-function-quiz-2",
    question:
      "函数 y=(1/3)ˣ 在实数范围内的单调性是：",
    options: [
      {
        key: "A",
        text: "单调递增",
      },
      {
        key: "B",
        text: "单调递减",
      },
      {
        key: "C",
        text: "先增后减",
      },
      {
        key: "D",
        text: "没有单调性",
      },
    ],
    correctAnswer: "B",
    explanation:
      "当 0 < a < 1 时，指数函数 y=aˣ 在 R 上单调递减。这里 a=1/3，因此单调递减。",
  },
  {
    id: "exponential-function-quiz-3",
    question: "若 2ˣ > 2³，则 x 的取值范围是：",
    options: [
      {
        key: "A",
        text: "x > 3",
      },
      {
        key: "B",
        text: "x < 3",
      },
      {
        key: "C",
        text: "x ≥ 3",
      },
      {
        key: "D",
        text: "x ≤ 3",
      },
    ],
    correctAnswer: "A",
    explanation:
      "因为底数 2 > 1，所以 y=2ˣ 单调递增，因此 2ˣ > 2³ 等价于 x > 3。",
  },
];

export default function ExponentialFunctionPage() {
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
            href="/grade1/exponential-log"
            className="transition hover:text-slate-700"
          >
            指数函数与对数函数
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            指数函数
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 04 章 · 第 02 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                函数基础
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              指数函数
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节在指数运算的基础上进入指数函数。
              重点掌握指数函数的定义、图象、定义域和值域、
              单调性，以及底数不同对函数图象和性质产生的影响。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#definition"
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                开始学习
              </a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                直接练习
              </a>
            </div>
          </div>
        </section>

        {/* 学习目标 */}
        <section className="py-10">
          <SectionTitle
            label="LEARNING GOALS"
            title="本节学习目标"
            description="指数函数是后面学习对数函数的重要基础。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解定义"
              description="掌握指数函数 y=aˣ 中底数 a 的取值条件。"
            />

            <GoalCard
              number="02"
              title="认识图象"
              description="掌握指数函数图象的基本形状及共同特征。"
            />

            <GoalCard
              number="03"
              title="掌握性质"
              description="熟练判断定义域、值域和单调性。"
            />

            <GoalCard
              number="04"
              title="解决问题"
              description="利用单调性比较大小和解决指数不等式。"
            />
          </div>
        </section>

        {/* 01 定义 */}
        <section
          id="definition"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="指数函数的定义"
            description="判断一个函数是不是指数函数，首先要看它是否符合标准形式。"
          />

          <div className="mt-7 space-y-6">
            <KnowledgeCard title="定义">
              <p>一般地，函数</p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`y=a^x`}
                />
              </FormulaBox>

              <p>
                叫做指数函数，其中底数 a 必须满足：
              </p>

              {/* 关系符号不用 KaTeX */}
              <RelationBox>
                a &gt; 0，a ≠ 1
              </RelationBox>
            </KnowledgeCard>

            <ImportantBox title="为什么要求 a > 0？">
              如果底数为负数，当指数取某些实数时，
              幂在实数范围内没有意义。
              为了保证函数对每一个实数 x 都有定义，
              必须规定 a &gt; 0。
            </ImportantBox>

            <ImportantBox title="为什么要求 a ≠ 1？">
              如果 a=1，那么无论 x 取什么值，
              都有 1ˣ=1。
              这时函数变成常数函数 y=1，
              不能体现指数函数的变化规律。
            </ImportantBox>
          </div>
        </section>

        {/* 02 判断 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="怎样判断指数函数"
            description="必须同时满足函数形式和底数条件。"
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <JudgementCard
              title="是指数函数"
              formula={String.raw`y=2^x`}
              result="是"
              explanation="底数 2 > 0 且 2 ≠ 1，变量 x 位于指数位置。"
              good
            />

            <JudgementCard
              title="不是指数函数"
              formula={String.raw`y=x^2`}
              result="不是"
              explanation="变量 x 位于底数位置，不符合 y=aˣ 的形式。"
            />

            <JudgementCard
              title="不是标准指数函数"
              formula={String.raw`y=2^{x+1}`}
              result="非标准形式"
              explanation="它是由基本指数函数 y=2ˣ 经过变换得到的函数，但不是最基本的 y=aˣ 标准形式。"
            />

            <JudgementCard
              title="不是指数函数"
              formula={String.raw`y=(-2)^x`}
              result="不是"
              explanation="底数为负数，不能保证所有实数 x 都有意义。"
            />
          </div>
        </section>

        {/* 03 图象 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="指数函数的图象"
            description="根据底数大小，指数函数分为两种基本类型。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <GraphCard
              title="当 a > 1"
              subtitle="例如 y=2ˣ"
              increasing
            />

            <GraphCard
              title="当 0 < a < 1"
              subtitle="例如 y=(1/2)ˣ"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              两类图象的共同特点
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PropertyItem
                number="01"
                text="图象始终位于 x 轴上方"
              />

              <PropertyItem
                number="02"
                text="图象一定经过点 (0,1)"
              />

              <PropertyItem
                number="03"
                text="函数值始终大于 0"
              />

              <PropertyItem
                number="04"
                text="定义域均为全体实数 R"
              />
            </div>
          </div>
        </section>

        {/* 04 基本性质 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="指数函数的基本性质"
            description="定义域、值域和单调性是最核心的三个性质。"
          />

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid border-b border-slate-200 bg-slate-50 md:grid-cols-3">
              <TableHeader text="性质" />
              <TableHeader text="a > 1" />
              <TableHeader text="0 < a < 1" />
            </div>

            <ComparisonRow
              label="定义域"
              left="R"
              right="R"
            />

            <ComparisonRow
              label="值域"
              left="(0,+∞)"
              right="(0,+∞)"
            />

            <ComparisonRow
              label="过定点"
              left="(0,1)"
              right="(0,1)"
            />

            <ComparisonRow
              label="单调性"
              left="在 R 上单调递增"
              right="在 R 上单调递减"
            />

            <ComparisonRow
              label="x > 0 时"
              left="y > 1"
              right="0 < y < 1"
            />

            <ComparisonRow
              label="x < 0 时"
              left="0 < y < 1"
              right="y > 1"
              last
            />
          </div>
        </section>

        {/* 05 定义域和值域 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="定义域和值域"
            description="指数函数的定义域和值域非常固定。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="定义域">
              <p>
                对于指数函数
                <InlineMath
                  math={String.raw`y=a^x`}
                />
                ，指数 x 可以取任意实数。
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`D=\mathbb{R}`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <KnowledgeCard title="值域">
              <p>
                无论 x 怎样变化，
                指数函数的函数值始终为正数。
              </p>

              <RelationBox>
                y &gt; 0
              </RelationBox>

              <FormulaBox>
                <BlockMath
                  math={String.raw`R_f=(0,+\infty)`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>

          <ImportantBox title="注意">
            指数函数的图象可以无限接近 x 轴，
            但是永远不会与 x 轴相交。
            因此函数值可以无限接近 0，
            但永远不会等于 0。
          </ImportantBox>
        </section>

        {/* 06 单调性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="指数函数的单调性"
            description="底数大于 1 还是小于 1，决定函数是增加还是减少。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="a > 1：单调递增">
              <FormulaBox>
                <BlockMath
                  math={String.raw`x_1<x_2\Rightarrow a^{x_1}<a^{x_2}`}
                />
              </FormulaBox>

              <p>
                指数越大，函数值越大。
              </p>

              <ExampleLine>
                <InlineMath
                  math={String.raw`2^1<2^2<2^3`}
                />
              </ExampleLine>
            </KnowledgeCard>

            <KnowledgeCard title="0 < a < 1：单调递减">
              <FormulaBox>
                <BlockMath
                  math={String.raw`x_1<x_2\Rightarrow a^{x_1}>a^{x_2}`}
                />
              </FormulaBox>

              <p>
                指数越大，函数值反而越小。
              </p>

              <ExampleLine>
                <InlineMath
                  math={String.raw`\left(\frac12\right)^1>\left(\frac12\right)^2>\left(\frac12\right)^3`}
                />
              </ExampleLine>
            </KnowledgeCard>
          </div>
        </section>

        {/* 07 比较大小 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="利用单调性比较大小"
            description="同底数指数幂比较大小时，不需要真正计算。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 1"
              question="比较 2³ 和 2⁵ 的大小。"
            >
              <BlockMath
                math={String.raw`2^3\quad\text{与}\quad2^5`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为底数 2 &gt; 1，
                所以函数 y=2ˣ 单调递增。
              </p>

              <RelationBox>
                3 &lt; 5，因此 2³ &lt; 2⁵
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="比较 (1/3)² 和 (1/3)⁵ 的大小。"
            >
              <BlockMath
                math={String.raw`\left(\frac13\right)^2\quad\text{与}\quad\left(\frac13\right)^5`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 0 &lt; 1/3 &lt; 1，
                所以函数单调递减。
              </p>

              <RelationBox>
                2 &lt; 5，因此 (1/3)² &gt; (1/3)⁵
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 08 指数方程 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="简单指数方程"
            description="如果能够把等式两边化成同底数，就可以比较指数。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 3"
              question="解方程 2ˣ=8。"
            >
              <BlockMath
                math={String.raw`2^x=8`}
              />

              <BlockMath
                math={String.raw`8=2^3`}
              />

              <BlockMath
                math={String.raw`2^x=2^3`}
              />

              <BlockMath
                math={String.raw`x=3`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 4"
              question="解方程 3^(2x−1)=27。"
            >
              <BlockMath
                math={String.raw`3^{2x-1}=27`}
              />

              <BlockMath
                math={String.raw`27=3^3`}
              />

              <BlockMath
                math={String.raw`2x-1=3`}
              />

              <BlockMath
                math={String.raw`x=2`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 09 指数不等式 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="简单指数不等式"
            description="关键仍然是先判断指数函数的单调性。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 5"
              question="解不等式 2ˣ > 2⁴。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为底数 2 &gt; 1，
                指数函数单调递增。
              </p>

              <RelationBox>
                2ˣ &gt; 2⁴
              </RelationBox>

              <RelationBox>
                x &gt; 4
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 6"
              question="解不等式 (1/2)ˣ > (1/2)³。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为 0 &lt; 1/2 &lt; 1，
                指数函数单调递减，
                所以比较指数时不等号方向发生改变。
              </p>

              <RelationBox>
                (1/2)ˣ &gt; (1/2)³
              </RelationBox>

              <RelationBox>
                x &lt; 3
              </RelationBox>
            </ExampleCard>
          </div>

          <ImportantBox title="指数不等式最容易错的地方">
            当底数大于 1 时，
            比较指数时不等号方向不变；
            当底数在 0 和 1 之间时，
            函数单调递减，
            比较指数时不等号方向要反过来。
          </ImportantBox>
        </section>

        {/* 10 图象变换 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="指数函数图象的简单变换"
            description="掌握基础图象后，可以进一步认识平移关系。"
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <FormulaKnowledgeCard
              title="左右平移"
              formula={String.raw`y=a^{x-h}`}
              description="与 y=aˣ 相比，h > 0 时图象向右平移 h 个单位。"
            />

            <FormulaKnowledgeCard
              title="上下平移"
              formula={String.raw`y=a^x+k`}
              description="与 y=aˣ 相比，k > 0 时图象向上平移 k 个单位。"
            />
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 7"
              question="函数 y=2^(x−1) 的图象如何由 y=2ˣ 得到？"
            >
              <BlockMath
                math={String.raw`y=2^{x-1}`}
              />

              <p className="mt-3 text-sm leading-7 text-slate-600">
                把 x 替换成 x−1，
                表示将原图象向右平移 1 个单位。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 解题方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="指数函数题的基本思路"
            description="大部分基础题都可以按照下面的顺序处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <StepCard
              number="1"
              title="先看底数"
              description="判断底数是大于 1，还是在 0 和 1 之间。"
            />

            <StepCard
              number="2"
              title="判断单调性"
              description="a > 1 递增，0 < a < 1 递减。"
            />

            <StepCard
              number="3"
              title="尽量统一底数"
              description="方程和不等式优先化成相同底数。"
            />

            <StepCard
              number="4"
              title="比较指数"
              description="利用单调性把指数关系转化为普通代数问题。"
            />
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="指数函数最常见的错误集中在定义和单调性上。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <TextMistakeCard
              number="01"
              title="忘记底数条件"
              wrong="把 y=(-2)ˣ 当作指数函数"
              correct="指数函数要求 a > 0，且 a ≠ 1"
            />

            <TextMistakeCard
              number="02"
              title="认为所有指数函数都递增"
              wrong="认为 y=aˣ 一定递增"
              correct="当 0 < a < 1 时，指数函数单调递减"
            />

            <TextMistakeCard
              number="03"
              title="认为指数函数可以等于 0"
              wrong="认为 aˣ 可以等于 0"
              correct="指数函数始终满足 aˣ > 0"
            />

            <TextMistakeCard
              number="04"
              title="递减函数比较大小时不变号"
              wrong="(1/2)ˣ > (1/2)³ 推出 x > 3"
              correct="正确结论应为 x < 3"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="指数函数的核心可以浓缩为下面几条。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-6">
              {/* 第一行不用 KaTeX */}
              <SummaryTextItem
                number="01"
                title="定义"
                text="y = aˣ，a > 0，a ≠ 1"
              />

              <SummaryMathItem
                number="02"
                title="定义域"
                formula={String.raw`\mathbb{R}`}
              />

              <SummaryMathItem
                number="03"
                title="值域"
                formula={String.raw`(0,+\infty)`}
              />

              <SummaryTextItem
                number="04"
                title="定点"
                text="(0, 1)"
              />

              <SummaryTextItem
                number="05"
                title="a > 1"
                text="y = aˣ 在 R 上单调递增"
              />

              <SummaryTextItem
                number="06"
                title="0 < a < 1"
                text="y = aˣ 在 R 上单调递减"
              />
            </div>
          </div>
        </section>

        {/* 小测 */}
        <section
          id="quiz"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="PRACTICE"
            title="本节小测"
            description="完成 3 道题，检查指数函数的定义、单调性和基本应用。"
          />

          <div className="mt-7 space-y-5">
            {quizQuestions.map(
              (question, index) => (
                <QuizCard
                  key={question.id}
                  number={index + 1}
                  question={question}
                />
              )
            )}
          </div>
        </section>

        {/* 下一步 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  第 02 节完成
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  下一节：对数与对数运算
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  下一步将从指数式出发建立对数概念，
                  学习指数式与对数式互化、
                  常用对数、自然对数以及对数运算法则。
                </p>
              </div>

              <Link
                href="/grade1/exponential-log"
                className="shrink-0 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                返回本章目录
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================
   公共组件
========================= */

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wider text-blue-600">
        {label}
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function GoalCard({
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

      <h3 className="mt-3 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function KnowledgeCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

function FormulaBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-xl bg-slate-50 px-4 py-3 text-center">
      {children}
    </div>
  );
}

/* 关系符号专用：不经过 KaTeX */
function RelationBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-5 text-center">
      <span className="text-lg font-medium tracking-wide text-slate-700">
        {children}
      </span>
    </div>
  );
}

function ExampleLine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 text-center">
      {children}
    </div>
  );
}

function ImportantBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50/60 p-5">
      <p className="text-sm font-semibold text-amber-700">
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {children}
      </p>
    </div>
  );
}

function JudgementCard({
  title,
  formula,
  result,
  explanation,
  good = false,
}: {
  title: string;
  formula: string;
  result: string;
  explanation: string;
  good?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            good
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {result}
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {explanation}
      </p>
    </div>
  );
}

function GraphCard({
  title,
  subtitle,
  increasing = false,
}: {
  title: string;
  subtitle: string;
  increasing?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {subtitle}
      </p>

      <div className="mt-6 flex justify-center">
        <svg
          viewBox="0 0 360 230"
          className="w-full max-w-[380px]"
          aria-label={
            increasing
              ? "递增指数函数图象"
              : "递减指数函数图象"
          }
        >
          <line
            x1="35"
            y1="185"
            x2="330"
            y2="185"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />

          <line
            x1="180"
            y1="20"
            x2="180"
            y2="210"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />

          <path
            d="M330 185 L322 181 L322 189 Z"
            fill="#94a3b8"
          />

          <path
            d="M180 20 L176 28 L184 28 Z"
            fill="#94a3b8"
          />

          <text
            x="334"
            y="190"
            fontSize="12"
            fill="#64748b"
          >
            x
          </text>

          <text
            x="186"
            y="23"
            fontSize="12"
            fill="#64748b"
          >
            y
          </text>

          <text
            x="163"
            y="202"
            fontSize="11"
            fill="#94a3b8"
          >
            O
          </text>

          <circle
            cx="180"
            cy="145"
            r="4"
            fill="#2563eb"
          />

          <text
            x="188"
            y="141"
            fontSize="11"
            fill="#2563eb"
          >
            (0,1)
          </text>

          {increasing ? (
            <path
              d="M45 181
                 C80 180,110 178,135 171
                 C155 164,170 155,180 145
                 C205 120,225 88,245 55
                 C260 35,275 22,290 14"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M70 14
                 C85 24,100 38,115 58
                 C135 88,155 120,180 145
                 C190 155,205 164,225 171
                 C250 178,280 180,315 181"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
        <p className="text-sm text-slate-600">
          {increasing
            ? "从左向右观察，函数值不断增大。"
            : "从左向右观察，函数值不断减小。"}
        </p>
      </div>
    </div>
  );
}

function PropertyItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="pt-1 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}

function TableHeader({
  text,
}: {
  text: string;
}) {
  return (
    <div className="border-b border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 md:border-b-0 md:border-r last:border-r-0">
      {text}
    </div>
  );
}

function ComparisonRow({
  label,
  left,
  right,
  last = false,
}: {
  label: string;
  left: string;
  right: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-3 ${
        last
          ? ""
          : "border-b border-slate-100"
      }`}
    >
      <div className="bg-slate-50/60 px-5 py-4 text-sm font-medium text-slate-700">
        {label}
      </div>

      <div className="px-5 py-4 text-sm text-slate-600">
        {left}
      </div>

      <div className="px-5 py-4 text-sm text-slate-600">
        {right}
      </div>
    </div>
  );
}

function ExampleCard({
  title,
  question,
  children,
}: {
  title: string;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
          {title}
        </span>

        <p className="text-sm font-medium text-slate-800">
          {question}
        </p>
      </div>

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}

function FormulaKnowledgeCard({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function StepCard({
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
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
        {number}
      </span>

      <h3 className="mt-4 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function TextMistakeCard({
  number,
  title,
  wrong,
  correct,
}: {
  number: string;
  title: string;
  wrong: string;
  correct: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-red-500">
          {number}
        </span>

        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-4 rounded-lg bg-red-50/60 px-4 py-4">
        <p className="text-xs text-red-500">
          错误
        </p>

        <p className="mt-2 text-sm font-medium text-slate-700">
          {wrong}
        </p>
      </div>

      <div className="mt-3 rounded-lg bg-emerald-50/60 px-4 py-4">
        <p className="text-xs text-emerald-600">
          正确
        </p>

        <p className="mt-2 text-sm font-medium text-slate-700">
          {correct}
        </p>
      </div>
    </div>
  );
}

function SummaryTextItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 border-b border-slate-100 pb-5 last:border-0 last:pb-0 sm:grid-cols-[45px_160px_1fr] sm:items-center">
      <span className="text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="text-sm font-medium text-slate-700">
        {title}
      </p>

      <p className="text-base font-medium text-slate-700">
        {text}
      </p>
    </div>
  );
}

function SummaryMathItem({
  number,
  title,
  formula,
}: {
  number: string;
  title: string;
  formula: string;
}) {
  return (
    <div className="grid gap-3 border-b border-slate-100 pb-5 last:border-0 last:pb-0 sm:grid-cols-[45px_160px_1fr] sm:items-center">
      <span className="text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="text-sm font-medium text-slate-700">
        {title}
      </p>

      <div className="overflow-x-auto">
        <BlockMath math={formula} />
      </div>
    </div>
  );
}

function QuizCard({
  number,
  question,
}: {
  number: number;
  question: QuizQuestion;
}) {
  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [submitted, setSubmitted] =
    useState(false);

  const isCorrect =
    selectedAnswer ===
    question.correctAnswer;

  function submit() {
    if (!selectedAnswer) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-500">
          {number}
        </span>

        <p className="font-medium text-slate-900">
          {question.question}
        </p>
      </div>

      {question.formula && (
        <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 px-4 py-4">
          <BlockMath
            math={question.formula}
          />
        </div>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {question.options.map(
          (option) => {
            const selected =
              selectedAnswer ===
              option.key;

            const correct =
              submitted &&
              option.key ===
                question.correctAnswer;

            const wrong =
              submitted &&
              selected &&
              option.key !==
                question.correctAnswer;

            return (
              <button
                key={option.key}
                type="button"
                disabled={submitted}
                onClick={() =>
                  setSelectedAnswer(
                    option.key
                  )
                }
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  correct
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                    : wrong
                      ? "border-red-300 bg-red-50 text-red-600"
                      : selected
                        ? "border-blue-400 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="mr-2 font-semibold">
                  {option.key}.
                </span>

                {option.text}
              </button>
            );
          }
        )}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!selectedAnswer}
          onClick={submit}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div
          className={`mt-5 rounded-xl p-4 ${
            isCorrect
              ? "bg-emerald-50"
              : "bg-red-50"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              isCorrect
                ? "text-emerald-700"
                : "text-red-600"
            }`}
          >
            {isCorrect
              ? "回答正确"
              : `回答错误，正确答案是 ${question.correctAnswer}`}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {question.explanation}
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedAnswer(null);
              setSubmitted(false);
            }}
            className="mt-3 text-xs font-medium text-slate-500 hover:text-slate-800"
          >
            重新作答
          </button>
        </div>
      )}
    </div>
  );
}