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
    id: "logarithm-quiz-1",
    question: "若 log₂8=x，则 x 的值为：",
    options: [
      {
        key: "A",
        text: "2",
      },
      {
        key: "B",
        text: "3",
      },
      {
        key: "C",
        text: "4",
      },
      {
        key: "D",
        text: "8",
      },
    ],
    correctAnswer: "B",
    explanation:
      "log₂8=x 等价于 2ˣ=8，而 8=2³，所以 x=3。",
  },
  {
    id: "logarithm-quiz-2",
    question: "下列计算正确的是：",
    options: [
      {
        key: "A",
        text: "log₂(4×8)=log₂4+log₂8",
      },
      {
        key: "B",
        text: "log₂(4+8)=log₂4+log₂8",
      },
      {
        key: "C",
        text: "log₂(8÷4)=log₂8+log₂4",
      },
      {
        key: "D",
        text: "log₂4²=2+log₂4",
      },
    ],
    correctAnswer: "A",
    explanation:
      "对数的乘法公式为 logₐ(MN)=logₐM+logₐN。对数不能把加法直接拆开。",
  },
  {
    id: "logarithm-quiz-3",
    question: "方程 log₃(x−1)=2 的解为：",
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
    correctAnswer: "D",
    explanation:
      "log₃(x−1)=2 等价于 3²=x−1，因此 x−1=9，得到 x=10，并且满足 x−1>0。",
  },
];

export default function LogarithmPage() {
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
            对数与对数运算
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 04 章 · 第 03 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                运算基础
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              对数与对数运算
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节从指数式出发建立对数概念，
              学习指数式与对数式之间的互化，
              并掌握常用对数、自然对数以及对数的基本运算法则。
              对数是指数运算的逆运算，也是学习对数函数的基础。
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
            description="核心是理解对数来源，而不是只背运算法则。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解对数定义"
              description="理解对数与指数之间的逆运算关系。"
            />

            <GoalCard
              number="02"
              title="掌握互化"
              description="熟练进行指数式与对数式之间的转换。"
            />

            <GoalCard
              number="03"
              title="掌握对数运算"
              description="掌握积、商和幂的对数运算法则。"
            />

            <GoalCard
              number="04"
              title="解决基础问题"
              description="能够进行对数计算并求解简单对数方程。"
            />
          </div>
        </section>

        {/* 01 对数定义 */}
        <section
          id="definition"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="对数的定义"
            description="对数本质上是在回答：底数的多少次方等于这个数？"
          />

          <div className="mt-7 space-y-6">
            <KnowledgeCard title="从指数式出发">
              <p>
                如果
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^b=N`}
                />
              </FormulaBox>

              <p>
                那么数
                <InlineMath
                  math={String.raw`b`}
                />
                叫做以
                <InlineMath
                  math={String.raw`a`}
                />
                为底
                <InlineMath
                  math={String.raw`N`}
                />
                的对数，记作：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`b=\log_a N`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <KnowledgeCard title="定义中的条件">
              <p>
                对数
                <InlineMath
                  math={String.raw`\log_a N`}
                />
                有意义时，需要满足：
              </p>

              <RelationBox>
                a &gt; 0，a ≠ 1，N &gt; 0
              </RelationBox>

              <div className="grid gap-4 sm:grid-cols-3">
                <ConditionCard
                  title="底数"
                  text="a > 0"
                />

                <ConditionCard
                  title="底数"
                  text="a ≠ 1"
                />

                <ConditionCard
                  title="真数"
                  text="N > 0"
                />
              </div>
            </KnowledgeCard>

            <ImportantBox title="对数最重要的条件">
              对数的真数必须大于 0。
              因此 logₐ0 没有意义，
              真数为负数的对数在实数范围内也没有意义。
            </ImportantBox>
          </div>
        </section>

        {/* 02 指数式与对数式互化 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="指数式与对数式的互化"
            description="这是整个对数章节最基础、最重要的关系。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-xl bg-slate-50 px-5 py-6 text-center">
                <p className="text-xs font-medium text-slate-400">
                  指数式
                </p>

                <BlockMath
                  math={String.raw`a^b=N`}
                />
              </div>

              <div className="text-center text-2xl text-blue-600">
                ⇄
              </div>

              <div className="rounded-xl bg-slate-50 px-5 py-6 text-center">
                <p className="text-xs font-medium text-slate-400">
                  对数式
                </p>

                <BlockMath
                  math={String.raw`\log_a N=b`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 1"
              question="把指数式 2³=8 写成对数式。"
            >
              <BlockMath
                math={String.raw`2^3=8`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                底数为 2，指数为 3，结果为 8。
              </p>

              <BlockMath
                math={String.raw`\log_2 8=3`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="把对数式 log₅25=2 写成指数式。"
            >
              <BlockMath
                math={String.raw`\log_5 25=2`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                底数为 5，对数值为 2，真数为 25。
              </p>

              <BlockMath
                math={String.raw`5^2=25`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 03 基本性质 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="对数的两个基本性质"
            description="这两个结论可以直接由对数定义得到。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="1 的对数">
              <p>
                因为：
              </p>

              <BlockMath
                math={String.raw`a^0=1`}
              />

              <p>
                所以：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a 1=0`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <KnowledgeCard title="底数本身的对数">
              <p>
                因为：
              </p>

              <BlockMath
                math={String.raw`a^1=a`}
              />

              <p>
                所以：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a a=1`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>

          <div className="mt-5">
            <KnowledgeCard title="对数与指数互相抵消">
              <p>
                根据对数定义，还可以得到：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^{\log_a N}=N`}
                />
              </FormulaBox>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a a^x=x`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 04 常用对数和自然对数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="常用对数与自然对数"
            description="某些特殊底数的对数有专门的简写。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="常用对数">
              <p>
                以 10 为底的对数叫做常用对数。
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_{10}N=\lg N`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`\lg100=2`}
                />
              </ExampleLine>

              <p>
                因为
                <InlineMath
                  math={String.raw`10^2=100`}
                />
                。
              </p>
            </KnowledgeCard>

            <KnowledgeCard title="自然对数">
              <p>
                以无理数
                <InlineMath
                  math={String.raw`e`}
                />
                为底的对数叫做自然对数。
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_eN=\ln N`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`\ln e=1`}
                />
              </ExampleLine>
            </KnowledgeCard>
          </div>
        </section>

        {/* 05 积的对数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="积的对数"
            description="乘法可以转化为对数的加法。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="运算法则">
              <p>
                当 M&gt;0、N&gt;0 时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a(MN)=\log_aM+\log_aN`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 3"
              question="计算 log₂4 + log₂8。"
            >
              <BlockMath
                math={String.raw`\log_2 4+\log_2 8`}
              />

              <BlockMath
                math={String.raw`=\log_2(4\times8)`}
              />

              <BlockMath
                math={String.raw`=\log_2 32=5`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 06 商的对数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="商的对数"
            description="除法可以转化为对数的减法。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="运算法则">
              <p>
                当 M&gt;0、N&gt;0 时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a\frac{M}{N}=\log_aM-\log_aN`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 4"
              question="计算 log₂32 − log₂4。"
            >
              <BlockMath
                math={String.raw`\log_2 32-\log_2 4`}
              />

              <BlockMath
                math={String.raw`=\log_2\frac{32}{4}`}
              />

              <BlockMath
                math={String.raw`=\log_2 8=3`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 07 幂的对数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="幂的对数"
            description="真数的指数可以移动到对数前面。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="运算法则">
              <p>
                当 M&gt;0 时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_a(M^n)=n\log_aM`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 5"
              question="计算 log₂(8²)。"
            >
              <BlockMath
                math={String.raw`\log_2(8^2)`}
              />

              <BlockMath
                math={String.raw`=2\log_2 8`}
              />

              <BlockMath
                math={String.raw`=2\times3=6`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 08 三条公式总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="三条基本运算法则"
            description="乘法变加法，除法变减法，指数移到前面。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            <FormulaCard
              number="01"
              title="积"
              formula={String.raw`\log_a(MN)=\log_aM+\log_aN`}
              memory="乘 → 加"
            />

            <FormulaCard
              number="02"
              title="商"
              formula={String.raw`\log_a\frac{M}{N}=\log_aM-\log_aN`}
              memory="除 → 减"
            />

            <FormulaCard
              number="03"
              title="幂"
              formula={String.raw`\log_a(M^n)=n\log_aM`}
              memory="指数 → 前面"
            />
          </div>

          <ImportantBox title="不能把加法拆开">
            对数运算法则只有积、商和幂，
            没有“和的对数公式”。
            因此 logₐ(M+N) 一般不能写成
            logₐM + logₐN。
          </ImportantBox>
        </section>

        {/* 09 换底公式 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="换底公式"
            description="当底数不方便计算时，可以把它换成另一个底数。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="换底公式">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\log_aN=\frac{\log_bN}{\log_ba}`}
                />
              </FormulaBox>

              <RelationBox>
                a &gt; 0，a ≠ 1，b &gt; 0，b ≠ 1，N &gt; 0
              </RelationBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 6"
              question="用常用对数表示 log₂5。"
            >
              <BlockMath
                math={String.raw`\log_2 5`}
              />

              <BlockMath
                math={String.raw`=\frac{\lg5}{\lg2}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 10 简单计算 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="对数的简单计算"
            description="能化为同底指数时，优先使用定义直接计算。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 7"
              question="计算 log₂16。"
            >
              <BlockMath
                math={String.raw`\log_2 16`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 16=2⁴，所以：
              </p>

              <BlockMath
                math={String.raw`\log_2 16=4`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 8"
              question="计算 log₃(1/27)。"
            >
              <BlockMath
                math={String.raw`\log_3\frac{1}{27}`}
              />

              <BlockMath
                math={String.raw`\frac{1}{27}=3^{-3}`}
              />

              <BlockMath
                math={String.raw`\log_3\frac{1}{27}=-3`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 11 简单对数方程 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="简单对数方程"
            description="基本方法是把对数式转化为指数式。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 9"
              question="解方程 log₂x=4。"
            >
              <BlockMath
                math={String.raw`\log_2x=4`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                根据对数定义，转化为指数式：
              </p>

              <BlockMath
                math={String.raw`x=2^4`}
              />

              <BlockMath
                math={String.raw`x=16`}
              />

              <RelationBox>
                检验：x &gt; 0，符合真数条件。
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 10"
              question="解方程 log₃(x−1)=2。"
            >
              <BlockMath
                math={String.raw`\log_3(x-1)=2`}
              />

              <BlockMath
                math={String.raw`x-1=3^2`}
              />

              <BlockMath
                math={String.raw`x-1=9`}
              />

              <BlockMath
                math={String.raw`x=10`}
              />

              <RelationBox>
                真数条件：x−1 &gt; 0，即 x &gt; 1。
              </RelationBox>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                x=10 满足定义域条件，因此原方程的解为 x=10。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="对数运算题的基本思路"
            description="基础题通常可以按照下面四步处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <StepCard
              number="1"
              title="先检查条件"
              description="特别注意真数必须大于 0。"
            />

            <StepCard
              number="2"
              title="判断能否互化"
              description="简单对数优先转化为指数形式。"
            />

            <StepCard
              number="3"
              title="识别运算法则"
              description="积变加、商变减、幂的指数移到前面。"
            />

            <StepCard
              number="4"
              title="最后检验"
              description="方程求出结果后，要检查真数是否为正。"
            />
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="对数运算最容易在真数条件和公式使用上出错。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <TextMistakeCard
              number="01"
              title="忽略真数必须为正"
              wrong="认为 log₂0 或 log₂(−3) 有意义"
              correct="对数真数必须满足 N > 0"
            />

            <TextMistakeCard
              number="02"
              title="错误拆分加法"
              wrong="logₐ(M+N)=logₐM+logₐN"
              correct="对数没有这种加法拆分公式"
            />

            <TextMistakeCard
              number="03"
              title="商的公式符号写错"
              wrong="logₐ(M/N)=logₐM+logₐN"
              correct="logₐ(M/N)=logₐM−logₐN"
            />

            <TextMistakeCard
              number="04"
              title="方程求解后不检验"
              wrong="求出 x 后直接作为答案"
              correct="必须检查所有真数是否大于 0"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="对数的定义和三条运算法则是本节的核心。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-6">
              <SummaryMathItem
                number="01"
                title="定义"
                formula={String.raw`a^b=N\Longleftrightarrow\log_aN=b`}
              />

              <SummaryTextItem
                number="02"
                title="条件"
                text="a > 0，a ≠ 1，N > 0"
              />

              <SummaryMathItem
                number="03"
                title="特殊值"
                formula={String.raw`\log_a1=0,\quad\log_aa=1`}
              />

              <SummaryMathItem
                number="04"
                title="积"
                formula={String.raw`\log_a(MN)=\log_aM+\log_aN`}
              />

              <SummaryMathItem
                number="05"
                title="商"
                formula={String.raw`\log_a\frac{M}{N}=\log_aM-\log_aN`}
              />

              <SummaryMathItem
                number="06"
                title="幂"
                formula={String.raw`\log_a(M^n)=n\log_aM`}
              />

              <SummaryMathItem
                number="07"
                title="换底"
                formula={String.raw`\log_aN=\frac{\log_bN}{\log_ba}`}
              />

              <SummaryTextItem
                number="08"
                title="常用对数"
                text="lg N = log₁₀N"
              />

              <SummaryTextItem
                number="09"
                title="自然对数"
                text="ln N = logₑN"
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
            description="完成 3 道题，检查对数定义、运算法则和方程求解。"
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
                  第 03 节完成
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  下一节：对数函数
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  下一步将从对数运算进入对数函数，
                  学习对数函数的定义、图象、定义域和值域、
                  单调性以及与指数函数之间的关系。
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

function ConditionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center">
      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-semibold text-slate-800">
        {text}
      </p>
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

function FormulaCard({
  number,
  title,
  formula,
  memory,
}: {
  number: string;
  title: string;
  formula: string;
  memory: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-blue-600">
          {number}
        </span>

        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
          {memory}
        </span>
      </div>

      <h3 className="mt-3 font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 px-3 py-4">
        <BlockMath math={formula} />
      </div>
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