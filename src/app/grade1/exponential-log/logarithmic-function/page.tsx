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
    id: "log-function-quiz-1",
    question: "函数 y=log₂x 的定义域是：",
    options: [
      {
        key: "A",
        text: "R",
      },
      {
        key: "B",
        text: "(0,+∞)",
      },
      {
        key: "C",
        text: "[0,+∞)",
      },
      {
        key: "D",
        text: "(−∞,0)",
      },
    ],
    correctAnswer: "B",
    explanation:
      "对数函数 y=logₐx 中真数 x 必须大于 0，因此定义域为 (0,+∞)。",
  },
  {
    id: "log-function-quiz-2",
    question:
      "函数 y=log₁/₂x 在定义域上的单调性是：",
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
      "当 0<a<1 时，对数函数 y=logₐx 在 (0,+∞) 上单调递减。",
  },
  {
    id: "log-function-quiz-3",
    question: "若 log₂x > log₂4，则：",
    options: [
      {
        key: "A",
        text: "x > 4",
      },
      {
        key: "B",
        text: "x < 4",
      },
      {
        key: "C",
        text: "x ≥ 4",
      },
      {
        key: "D",
        text: "0 < x < 4",
      },
    ],
    correctAnswer: "A",
    explanation:
      "因为底数 2>1，所以 y=log₂x 单调递增，因此 log₂x>log₂4 等价于 x>4。",
  },
];

export default function LogarithmicFunctionPage() {
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
            对数函数
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 04 章 · 第 04 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                函数基础
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              对数函数
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节在对数概念和对数运算的基础上，
              进一步学习对数函数的定义、图象、定义域和值域、
              单调性以及基本应用，并建立对数函数与指数函数之间的联系。
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
            description="重点掌握图象、定义域、值域和单调性。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解定义"
              description="掌握对数函数 y=logₐx 的标准形式和底数条件。"
            />

            <GoalCard
              number="02"
              title="认识图象"
              description="理解两类对数函数图象的基本形状。"
            />

            <GoalCard
              number="03"
              title="掌握性质"
              description="熟练判断定义域、值域和单调性。"
            />

            <GoalCard
              number="04"
              title="解决问题"
              description="利用单调性比较大小并解决简单对数不等式。"
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
            title="对数函数的定义"
            description="对数函数中的自变量位于对数的真数位置。"
          />

          <div className="mt-7 space-y-6">
            <KnowledgeCard title="定义">
              <p>
                一般地，函数
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`y=\log_a x`}
                />
              </FormulaBox>

              <p>
                叫做对数函数，其中底数需要满足：
              </p>

              <RelationBox>
                a &gt; 0，a ≠ 1
              </RelationBox>
            </KnowledgeCard>

            <ImportantBox title="注意自变量条件">
              对数函数中的 x 是对数的真数。
              对数的真数必须大于 0，
              因此对数函数只在 x&gt;0 时有意义。
            </ImportantBox>
          </div>
        </section>

        {/* 02 定义域和值域 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="定义域和值域"
            description="对数函数与指数函数的定义域和值域恰好形成对应。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="定义域">
              <p>
                因为对数的真数必须为正，
                所以：
              </p>

              <RelationBox>
                x &gt; 0
              </RelationBox>

              <FormulaBox>
                <BlockMath
                  math={String.raw`D=(0,+\infty)`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <KnowledgeCard title="值域">
              <p>
                对数值可以取任意实数，
                因此对数函数的值域为：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`R_f=\mathbb{R}`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 03 定点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="对数函数一定经过的点"
            description="所有对数函数都有一个共同定点。"
          />

          <div className="mt-7">
            <KnowledgeCard title="经过点 (1,0)">
              <p>
                因为对于任意符合条件的底数 a：
              </p>

              <BlockMath
                math={String.raw`\log_a1=0`}
              />

              <p>
                所以所有对数函数
                <InlineMath
                  math={String.raw`y=\log_a x`}
                />
                都经过：
              </p>

              <RelationBox>
                (1，0)
              </RelationBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 04 图象 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="对数函数的图象"
            description="根据底数大小，对数函数同样分为两类。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <LogGraphCard
              title="当 a > 1"
              subtitle="例如 y=log₂x"
              increasing
            />

            <LogGraphCard
              title="当 0 < a < 1"
              subtitle="例如 y=log₁/₂x"
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              两类图象的共同特点
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PropertyItem
                number="01"
                text="定义域都是 (0,+∞)"
              />

              <PropertyItem
                number="02"
                text="值域都是全体实数 R"
              />

              <PropertyItem
                number="03"
                text="都经过定点 (1,0)"
              />

              <PropertyItem
                number="04"
                text="图象始终位于 y 轴右侧"
              />
            </div>
          </div>
        </section>

        {/* 05 基本性质 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="对数函数的基本性质"
            description="底数的大小决定函数的单调性。"
          />

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid border-b border-slate-200 bg-slate-50 md:grid-cols-3">
              <TableHeader text="性质" />
              <TableHeader text="a > 1" />
              <TableHeader text="0 < a < 1" />
            </div>

            <ComparisonRow
              label="定义域"
              left="(0,+∞)"
              right="(0,+∞)"
            />

            <ComparisonRow
              label="值域"
              left="R"
              right="R"
            />

            <ComparisonRow
              label="过定点"
              left="(1,0)"
              right="(1,0)"
            />

            <ComparisonRow
              label="单调性"
              left="单调递增"
              right="单调递减"
            />

            <ComparisonRow
              label="x > 1 时"
              left="y > 0"
              right="y < 0"
            />

            <ComparisonRow
              label="0 < x < 1 时"
              left="y < 0"
              right="y > 0"
              last
            />
          </div>
        </section>

        {/* 06 单调性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="对数函数的单调性"
            description="与指数函数一样，首先要看底数。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="a > 1：单调递增">
              <p>
                当 a&gt;1 时，
                对数函数在定义域内单调递增。
              </p>

              <RelationBox>
                x₁ &lt; x₂，则 logₐx₁ &lt; logₐx₂
              </RelationBox>

              <ExampleLine>
                log₂2 &lt; log₂4 &lt; log₂8
              </ExampleLine>
            </KnowledgeCard>

            <KnowledgeCard title="0 < a < 1：单调递减">
              <p>
                当 0&lt;a&lt;1 时，
                对数函数在定义域内单调递减。
              </p>

              <RelationBox>
                x₁ &lt; x₂，则 logₐx₁ &gt; logₐx₂
              </RelationBox>

              <ExampleLine>
                log₁/₂2 &gt; log₁/₂4 &gt; log₁/₂8
              </ExampleLine>
            </KnowledgeCard>
          </div>
        </section>

        {/* 07 比较大小 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="利用单调性比较大小"
            description="同底对数比较大小时，可以直接比较真数。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 1"
              question="比较 log₂3 和 log₂5 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为底数 2&gt;1，
                所以函数 y=log₂x 单调递增。
              </p>

              <RelationBox>
                3 &lt; 5
              </RelationBox>

              <RelationBox>
                log₂3 &lt; log₂5
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="比较 log₁/₂3 和 log₁/₂5 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为 0&lt;1/2&lt;1，
                所以函数 y=log₁/₂x 单调递减。
              </p>

              <RelationBox>
                3 &lt; 5
              </RelationBox>

              <RelationBox>
                log₁/₂3 &gt; log₁/₂5
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 08 对数不等式 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="简单对数不等式"
            description="处理对数不等式时，必须同时考虑定义域和单调性。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 3"
              question="解不等式 log₂x > log₂4。"
            >
              <p className="text-sm leading-7 text-slate-600">
                首先要求真数：
              </p>

              <RelationBox>
                x &gt; 0
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为底数 2&gt;1，
                函数单调递增。
              </p>

              <RelationBox>
                x &gt; 4
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 4"
              question="解不等式 log₁/₂x > log₁/₂4。"
            >
              <RelationBox>
                x &gt; 0
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 0&lt;1/2&lt;1，
                函数单调递减，
                所以不等号方向反转。
              </p>

              <RelationBox>
                0 &lt; x &lt; 4
              </RelationBox>
            </ExampleCard>
          </div>

          <ImportantBox title="对数不等式的两件事">
            第一，先保证所有真数大于 0；
            第二，再根据底数判断函数是递增还是递减。
            这两步缺一不可。
          </ImportantBox>
        </section>

        {/* 09 对数函数与指数函数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="对数函数与指数函数的关系"
            description="它们互为反函数，图象关于直线 y=x 对称。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="互为反函数">
              <p>
                指数函数：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`y=a^x`}
                />
              </FormulaBox>

              <p>
                对数函数：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`y=\log_a x`}
                />
              </FormulaBox>

              <p>
                二者互为反函数。
              </p>
            </KnowledgeCard>

            <KnowledgeCard title="定义域和值域交换">
              <div className="space-y-3">
                <TextPair
                  left="指数函数定义域"
                  right="R"
                />

                <TextPair
                  left="指数函数值域"
                  right="(0,+∞)"
                />

                <TextPair
                  left="对数函数定义域"
                  right="(0,+∞)"
                />

                <TextPair
                  left="对数函数值域"
                  right="R"
                />
              </div>
            </KnowledgeCard>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">
              图象关系
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              函数 y=aˣ 与 y=logₐx 的图象
              关于直线 y=x 对称。
            </p>

            <div className="mt-5 flex justify-center">
              <InverseGraph />
            </div>
          </div>
        </section>

        {/* 10 图象变换 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="对数函数图象的简单变换"
            description="与前面函数图象平移的规律相同。"
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <FormulaKnowledgeCard
              title="左右平移"
              formula={String.raw`y=\log_a(x-h)`}
              description="h>0 时，由 y=logₐx 的图象向右平移 h 个单位得到。"
            />

            <FormulaKnowledgeCard
              title="上下平移"
              formula={String.raw`y=\log_a x+k`}
              description="k>0 时，由 y=logₐx 的图象向上平移 k 个单位得到。"
            />
          </div>

          <div className="mt-5">
            <ImportantBox title="平移以后定义域也会变化">
              例如 y=log₂(x−2) 中，
              真数必须满足 x−2&gt;0，
              因此定义域变为 x&gt;2。
            </ImportantBox>
          </div>
        </section>

        {/* 方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="对数函数题的基本思路"
            description="看到对数函数题，优先检查下面四件事。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <StepCard
              number="1"
              title="先看真数"
              description="先保证每一个对数的真数大于 0。"
            />

            <StepCard
              number="2"
              title="再看底数"
              description="判断底数大于 1，还是在 0 和 1 之间。"
            />

            <StepCard
              number="3"
              title="确定单调性"
              description="a>1 递增，0<a<1 递减。"
            />

            <StepCard
              number="4"
              title="处理问题"
              description="比较大小、解方程或不等式，最后检查定义域。"
            />
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="对数函数错误通常集中在定义域和单调性。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <TextMistakeCard
              number="01"
              title="把定义域写成 R"
              wrong="认为 y=logₐx 的定义域为 R"
              correct="定义域应为 (0,+∞)"
            />

            <TextMistakeCard
              number="02"
              title="认为所有对数函数都递增"
              wrong="认为 y=logₐx 一定单调递增"
              correct="当 0 < a < 1 时单调递减"
            />

            <TextMistakeCard
              number="03"
              title="解不等式时忘记定义域"
              wrong="只比较真数，不检查真数是否大于 0"
              correct="先求定义域，再利用单调性"
            />

            <TextMistakeCard
              number="04"
              title="递减时不等号不反向"
              wrong="底数小于 1 时仍保持原不等号方向"
              correct="0 < a < 1 时比较真数要反向"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="对数函数的核心性质可以归纳为下面几条。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-6">
              <SummaryMathItem
                number="01"
                title="标准形式"
                formula={String.raw`y=\log_a x`}
              />

              <SummaryTextItem
                number="02"
                title="底数条件"
                text="a > 0，a ≠ 1"
              />

              <SummaryTextItem
                number="03"
                title="定义域"
                text="(0,+∞)"
              />

              <SummaryTextItem
                number="04"
                title="值域"
                text="R"
              />

              <SummaryTextItem
                number="05"
                title="定点"
                text="(1,0)"
              />

              <SummaryTextItem
                number="06"
                title="a > 1"
                text="在 (0,+∞) 上单调递增"
              />

              <SummaryTextItem
                number="07"
                title="0 < a < 1"
                text="在 (0,+∞) 上单调递减"
              />

              <SummaryTextItem
                number="08"
                title="反函数"
                text="y=aˣ 与 y=logₐx 互为反函数"
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
            description="完成 3 道题，检查定义域、单调性和对数不等式。"
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

        {/* 下一节 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  第 04 节完成
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  下一节：指数函数与对数函数的综合应用
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  下一步将把指数运算、对数运算、
                  指数函数和对数函数联系起来，
                  综合处理方程、不等式和实际应用问题。
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

function RelationBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-5 text-center">
      <span className="text-base font-medium tracking-wide text-slate-700 sm:text-lg">
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
    <div className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 text-center text-sm font-medium text-slate-700">
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

function LogGraphCard({
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
        >
          <line
            x1="35"
            y1="150"
            x2="330"
            y2="150"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />

          <line
            x1="90"
            y1="20"
            x2="90"
            y2="210"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />

          <path
            d="M330 150 L322 146 L322 154 Z"
            fill="#94a3b8"
          />

          <path
            d="M90 20 L86 28 L94 28 Z"
            fill="#94a3b8"
          />

          <text
            x="334"
            y="155"
            fontSize="12"
            fill="#64748b"
          >
            x
          </text>

          <text
            x="96"
            y="23"
            fontSize="12"
            fill="#64748b"
          >
            y
          </text>

          <text
            x="75"
            y="167"
            fontSize="11"
            fill="#94a3b8"
          >
            O
          </text>

          <circle
            cx="155"
            cy="150"
            r="4"
            fill="#2563eb"
          />

          <text
            x="160"
            y="143"
            fontSize="11"
            fill="#2563eb"
          >
            (1,0)
          </text>

          {increasing ? (
            <path
              d="M97 205
                 C100 182,108 166,120 158
                 C132 152,145 150,155 150
                 C185 145,215 128,245 104
                 C270 84,292 63,310 42"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M97 42
                 C100 64,108 86,120 105
                 C132 124,145 143,155 150
                 C185 158,215 166,245 178
                 C270 188,292 197,310 205"
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

function InverseGraph() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="w-full max-w-[520px]"
    >
      <line
        x1="35"
        y1="220"
        x2="390"
        y2="220"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />

      <line
        x1="120"
        y1="25"
        x2="120"
        y2="255"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />

      <line
        x1="55"
        y1="250"
        x2="330"
        y2="30"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />

      <text
        x="315"
        y="42"
        fontSize="12"
        fill="#94a3b8"
      >
        y=x
      </text>

      <path
        d="M45 216
           C80 214,100 208,120 195
           C160 170,200 125,235 80
           C255 55,275 35,295 22"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M126 250
           C130 220,140 203,160 192
           C195 174,235 145,275 110
           C310 80,340 52,365 28"
        fill="none"
        stroke="#64748b"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <text
        x="250"
        y="66"
        fontSize="12"
        fill="#2563eb"
      >
        y=aˣ
      </text>

      <text
        x="300"
        y="130"
        fontSize="12"
        fill="#64748b"
      >
        y=logₐx
      </text>
    </svg>
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
        last ? "" : "border-b border-slate-100"
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

function TextPair({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-slate-500">
        {left}
      </span>

      <span className="text-sm font-semibold text-slate-800">
        {right}
      </span>
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
                  setSelectedAnswer(option.key)
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