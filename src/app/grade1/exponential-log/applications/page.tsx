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
    id: "exp-log-app-quiz-1",
    question: "方程 2^(x+1)=8 的解为：",
    options: [
      {
        key: "A",
        text: "x=1",
      },
      {
        key: "B",
        text: "x=2",
      },
      {
        key: "C",
        text: "x=3",
      },
      {
        key: "D",
        text: "x=4",
      },
    ],
    correctAnswer: "B",
    explanation:
      "8=2³，所以 x+1=3，得到 x=2。",
  },
  {
    id: "exp-log-app-quiz-2",
    question: "方程 log₂(x−1)=3 的解为：",
    options: [
      {
        key: "A",
        text: "x=7",
      },
      {
        key: "B",
        text: "x=8",
      },
      {
        key: "C",
        text: "x=9",
      },
      {
        key: "D",
        text: "x=10",
      },
    ],
    correctAnswer: "C",
    explanation:
      "log₂(x−1)=3 等价于 x−1=2³=8，所以 x=9，并满足 x−1>0。",
  },
  {
    id: "exp-log-app-quiz-3",
    question:
      "若 log₁/₂x > log₁/₂4，则 x 的取值范围为：",
    options: [
      {
        key: "A",
        text: "x > 4",
      },
      {
        key: "B",
        text: "0 < x < 4",
      },
      {
        key: "C",
        text: "x ≥ 4",
      },
      {
        key: "D",
        text: "x < 0",
      },
    ],
    correctAnswer: "B",
    explanation:
      "底数 1/2 在 0 和 1 之间，对数函数单调递减，所以 x<4；同时真数要求 x>0，因此 0<x<4。",
  },
];

export default function ApplicationsPage() {
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
            综合应用
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 04 章 · 第 05 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                综合应用
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              指数函数与对数函数的综合应用
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节把前四节内容联系起来，
              综合使用指数运算、对数运算、函数单调性以及定义域条件，
              解决指数方程、对数方程、不等式、比较大小和实际应用问题。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#strategy"
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
            description="重点不是记新公式，而是学会判断什么时候使用什么方法。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="综合运算"
              description="熟练进行指数式、对数式的变形与互化。"
            />

            <GoalCard
              number="02"
              title="解决方程"
              description="掌握指数方程和对数方程的基本求解思路。"
            />

            <GoalCard
              number="03"
              title="解决不等式"
              description="利用函数单调性处理指数和对数不等式。"
            />

            <GoalCard
              number="04"
              title="建立模型"
              description="理解指数增长、指数衰减等实际问题。"
            />
          </div>
        </section>

        {/* 01 总体策略 */}
        <section
          id="strategy"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="综合题先判断类型"
            description="看到题目以后，先判断它属于哪一种问题。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StrategyCard
              number="1"
              title="指数方程"
              description="优先考虑统一底数，再比较指数。"
            />

            <StrategyCard
              number="2"
              title="对数方程"
              description="先检查真数，再利用定义或运算法则化简。"
            />

            <StrategyCard
              number="3"
              title="不等式"
              description="先判断底数，再根据函数单调性比较。"
            />

            <StrategyCard
              number="4"
              title="实际问题"
              description="先找初始量、变化率和时间，再建立函数模型。"
            />
          </div>
        </section>

        {/* 02 指数方程 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="指数方程：统一底数"
            description="能够化成同底数时，这是最直接的方法。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 1"
              question="解方程 2^(x+1)=16。"
            >
              <BlockMath
                math={String.raw`2^{x+1}=16`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                将 16 写成 2 的幂：
              </p>

              <BlockMath
                math={String.raw`16=2^4`}
              />

              <BlockMath
                math={String.raw`2^{x+1}=2^4`}
              />

              <BlockMath
                math={String.raw`x+1=4`}
              />

              <BlockMath
                math={String.raw`x=3`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="解方程 9ˣ=27。"
            >
              <BlockMath
                math={String.raw`9^x=27`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                将两边统一写成以 3 为底：
              </p>

              <BlockMath
                math={String.raw`(3^2)^x=3^3`}
              />

              <BlockMath
                math={String.raw`3^{2x}=3^3`}
              />

              <BlockMath
                math={String.raw`2x=3`}
              />

              <BlockMath
                math={String.raw`x=\frac32`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 03 用对数解指数方程 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="不能统一底数时：取对数"
            description="对于一般指数方程，可以借助对数把指数移下来。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 3"
              question="解方程 2ˣ=5。"
            >
              <BlockMath
                math={String.raw`2^x=5`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                两边同时取对数：
              </p>

              <BlockMath
                math={String.raw`\lg(2^x)=\lg5`}
              />

              <BlockMath
                math={String.raw`x\lg2=\lg5`}
              />

              <BlockMath
                math={String.raw`x=\frac{\lg5}{\lg2}`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-500">
                这实际上就是：
                <InlineMath
                  math={String.raw`x=\log_2 5`}
                />
                。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 04 对数方程 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="对数方程"
            description="对数方程最重要的是先检查真数条件。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 4"
              question="解方程 log₂(x−1)=3。"
            >
              <RelationBox>
                真数条件：x−1 &gt; 0，即 x &gt; 1
              </RelationBox>

              <BlockMath
                math={String.raw`\log_2(x-1)=3`}
              />

              <BlockMath
                math={String.raw`x-1=2^3`}
              />

              <BlockMath
                math={String.raw`x=9`}
              />

              <p className="mt-3 text-sm leading-7 text-slate-600">
                x=9 满足 x&gt;1，因此原方程的解为 x=9。
              </p>
            </ExampleCard>

            <ExampleCard
              title="例 5"
              question="解方程 log₂x + log₂(x−2)=3。"
            >
              <RelationBox>
                定义域：x &gt; 2
              </RelationBox>

              <BlockMath
                math={String.raw`\log_2[x(x-2)]=3`}
              />

              <BlockMath
                math={String.raw`x(x-2)=2^3`}
              />

              <BlockMath
                math={String.raw`x^2-2x-8=0`}
              />

              <BlockMath
                math={String.raw`(x-4)(x+2)=0`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                得到 x=4 或 x=−2。
                结合定义域 x&gt;2，最终：
              </p>

              <RelationBox>
                x = 4
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 05 指数不等式 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="指数不等式"
            description="核心是利用指数函数的单调性。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 6"
              question="解不等式 3^(2x−1) > 27。"
            >
              <BlockMath
                math={String.raw`3^{2x-1}>27`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 27=3³，且底数 3&gt;1，函数单调递增。
              </p>

              <RelationBox>
                2x−1 &gt; 3
              </RelationBox>

              <RelationBox>
                x &gt; 2
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 7"
              question="解不等式 (1/2)^(x+1) > (1/2)³。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为 0&lt;1/2&lt;1，
                指数函数单调递减。
              </p>

              <RelationBox>
                x+1 &lt; 3
              </RelationBox>

              <RelationBox>
                x &lt; 2
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 06 对数不等式 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="对数不等式"
            description="先求定义域，再根据底数判断单调性。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 8"
              question="解不等式 log₂(x−1) > 2。"
            >
              <RelationBox>
                定义域：x &gt; 1
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为底数 2&gt;1，函数单调递增。
              </p>

              <BlockMath
                math={String.raw`\log_2(x-1)>2`}
              />

              <RelationBox>
                x−1 &gt; 4
              </RelationBox>

              <RelationBox>
                x &gt; 5
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 9"
              question="解不等式 log₁/₂x > 2。"
            >
              <RelationBox>
                定义域：x &gt; 0
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 0&lt;1/2&lt;1，
                函数单调递减。
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                又因为：
              </p>

              <BlockMath
                math={String.raw`2=\log_{\frac12}\frac14`}
              />

              <RelationBox>
                0 &lt; x &lt; 1/4
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 07 比较大小 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="指数与对数的比较大小"
            description="比较大小时，优先寻找共同的中间值，例如 0 或 1。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 10"
              question="比较 2^0.3 与 1 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为底数 2&gt;1，
                且指数 0.3&gt;0：
              </p>

              <RelationBox>
                2^0.3 &gt; 2⁰ = 1
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 11"
              question="比较 log₂3 与 1 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为：
              </p>

              <BlockMath
                math={String.raw`1=\log_2 2`}
              />

              <p className="mt-3 text-sm leading-7 text-slate-600">
                而底数 2&gt;1，对数函数单调递增。
              </p>

              <RelationBox>
                3 &gt; 2，因此 log₂3 &gt; 1
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 08 定义域综合 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="含对数函数的定义域"
            description="看到对数，第一反应就是令真数大于 0。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 12"
              question="求函数 y=log₂(x−3) 的定义域。"
            >
              <p className="text-sm leading-7 text-slate-600">
                真数必须大于 0：
              </p>

              <RelationBox>
                x−3 &gt; 0
              </RelationBox>

              <RelationBox>
                x &gt; 3
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                所以定义域为：
              </p>

              <RelationBox>
                (3，+∞)
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 09 指数增长 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="指数增长模型"
            description="当一个量按照固定比例不断增加时，经常使用指数函数描述。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="基本模型">
              <FormulaBox>
                <BlockMath
                  math={String.raw`N=N_0(1+r)^t`}
                />
              </FormulaBox>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <ModelItem
                  label="N₀"
                  text="初始数量"
                />

                <ModelItem
                  label="r"
                  text="每期增长率"
                />

                <ModelItem
                  label="t"
                  text="经过的期数"
                />
              </div>
            </KnowledgeCard>

            <ExampleCard
              title="例 13"
              question="某数量初始为 100，每期增长 10%，2 期后是多少？"
            >
              <BlockMath
                math={String.raw`N=100(1+0.1)^2`}
              />

              <BlockMath
                math={String.raw`=100\times1.21`}
              />

              <RelationBox>
                N = 121
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 10 指数衰减 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="指数衰减模型"
            description="如果一个量按照固定比例不断减少，可以建立指数衰减模型。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="基本模型">
              <FormulaBox>
                <BlockMath
                  math={String.raw`N=N_0(1-r)^t`}
                />
              </FormulaBox>

              <p>
                其中 r 表示每期减少的比例。
              </p>
            </KnowledgeCard>

            <ExampleCard
              title="例 14"
              question="某物质初始质量为 200 g，每期减少 20%，2 期后剩余多少？"
            >
              <BlockMath
                math={String.raw`N=200(1-0.2)^2`}
              />

              <BlockMath
                math={String.raw`=200\times0.8^2`}
              />

              <BlockMath
                math={String.raw`=200\times0.64`}
              />

              <RelationBox>
                N = 128 g
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 11 已知结果求时间 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="利用对数求时间"
            description="当未知数出现在指数位置时，对数可以把它移下来。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 15"
              question="若 100×2ᵗ=800，求 t。"
            >
              <BlockMath
                math={String.raw`100\cdot2^t=800`}
              />

              <BlockMath
                math={String.raw`2^t=8`}
              />

              <BlockMath
                math={String.raw`8=2^3`}
              />

              <RelationBox>
                t = 3
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                如果右边不能直接写成相同底数，
                就可以取对数进行求解。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 方法选择 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="综合题的方法选择"
            description="判断题型比盲目计算更重要。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="先检查条件"
              description="特别是对数真数必须大于 0。"
            />

            <StepCard
              number="2"
              title="尝试统一底数"
              description="指数方程和不等式优先考虑同底化。"
            />

            <StepCard
              number="3"
              title="利用函数性质"
              description="比较大小和不等式重点使用单调性。"
            />

            <StepCard
              number="4"
              title="必要时取对数"
              description="未知数在指数位置且无法同底时使用对数。"
            />
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="综合应用常见错误"
            description="综合题往往不是不会计算，而是忽略了条件。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <TextMistakeCard
              number="01"
              title="对数方程不求定义域"
              wrong="直接计算方程，不检查真数"
              correct="先令每个对数真数大于 0"
            />

            <TextMistakeCard
              number="02"
              title="底数小于 1 时不变号"
              wrong="递减函数仍按递增函数比较"
              correct="0 < a < 1 时，不等号方向要反转"
            />

            <TextMistakeCard
              number="03"
              title="把增长率直接相加"
              wrong="连续增长 10% 两次就直接增加 20%"
              correct="应使用 (1+10%)²"
            />

            <TextMistakeCard
              number="04"
              title="有增根却不检验"
              wrong="代数方程所有根都保留"
              correct="必须回到原题检查定义域条件"
            />
          </div>
        </section>

        {/* 本章总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="CHAPTER SUMMARY"
            title="第 04 章知识结构"
            description="到这里，指数函数与对数函数这一章的知识体系已经完整。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            <ChapterCard
              number="01"
              title="指数运算"
              text="根式与分数指数幂"
            />

            <ChapterCard
              number="02"
              title="指数函数"
              text="图象、性质与单调性"
            />

            <ChapterCard
              number="03"
              title="对数运算"
              text="定义、互化与运算法则"
            />

            <ChapterCard
              number="04"
              title="对数函数"
              text="图象、性质与单调性"
            />

            <ChapterCard
              number="05"
              title="综合应用"
              text="方程、不等式与模型"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <p className="text-sm font-semibold text-emerald-700">
              本章完成
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              完成本节后，第 04 章的 5 个知识点已经全部覆盖。
              接下来可以通过专题训练和错题复习巩固本章内容。
            </p>
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
            description="完成 3 道题，检查方程、不等式以及定义域条件。"
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

        {/* 完成 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-emerald-600">
                  第 04 章完成
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  指数函数与对数函数 · 5 / 5
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  根式与分数指数幂、指数函数、
                  对数与对数运算、对数函数以及综合应用
                  已全部完成。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  专题训练
                </Link>

                <Link
                  href="/grade1/exponential-log"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  返回本章目录
                </Link>
              </div>
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

function StrategyCard({
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
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
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

function RelationBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 rounded-xl bg-slate-50 px-4 py-5 text-center">
      <span className="text-base font-medium tracking-wide text-slate-700 sm:text-lg">
        {children}
      </span>
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

function ModelItem({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 text-center">
      <p className="font-semibold text-slate-800">
        {label}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {text}
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

        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
          {wrong}
        </p>
      </div>

      <div className="mt-3 rounded-lg bg-emerald-50/60 px-4 py-4">
        <p className="text-xs text-emerald-600">
          正确
        </p>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
          {correct}
        </p>
      </div>
    </div>
  );
}

function ChapterCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-semibold text-emerald-600">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>

      <p className="mt-4 text-xs font-medium text-emerald-600">
        ✓ 已完成
      </p>
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