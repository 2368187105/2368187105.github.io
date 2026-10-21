"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
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
    id: "powers-quiz-1",
    question: "计算下列式子的值：",
    formula: String.raw`81^{\frac{3}{4}}`,
    options: [
      {
        key: "A",
        text: "9",
      },
      {
        key: "B",
        text: "18",
      },
      {
        key: "C",
        text: "27",
      },
      {
        key: "D",
        text: "81",
      },
    ],
    correctAnswer: "C",
    explanation:
      "81 的四次方根为 3，因此 81^(3/4)=(81^(1/4))³=3³=27。",
  },
  {
    id: "powers-quiz-2",
    question: "计算下列式子的值：",
    formula: String.raw`32^{-\frac{2}{5}}`,
    options: [
      {
        key: "A",
        text: "4",
      },
      {
        key: "B",
        text: "1/4",
      },
      {
        key: "C",
        text: "1/8",
      },
      {
        key: "D",
        text: "8",
      },
    ],
    correctAnswer: "B",
    explanation:
      "32^(1/5)=2，所以 32^(-2/5)=1/(32^(2/5))=1/2²=1/4。",
  },
  {
    id: "powers-quiz-3",
    question:
      "若 x 为实数，下列等式中正确的是：",
    options: [
      {
        key: "A",
        text: "⁴√(x⁴)=x",
      },
      {
        key: "B",
        text: "⁴√(x⁴)=|x|",
      },
      {
        key: "C",
        text: "⁴√(x⁴)=−x",
      },
      {
        key: "D",
        text: "⁴√(x⁴)=x²",
      },
    ],
    correctAnswer: "B",
    explanation:
      "偶次根的结果必须是非负数，因此 ⁴√(x⁴)=|x|，不能直接写成 x。",
  },
];

export default function PowersPage() {
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
            根式与分数指数幂
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 04 章 · 第 01 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础知识
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              根式与分数指数幂
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节从整数指数幂和根式出发，
              建立分数指数幂的概念，
              并进一步统一指数幂的运算法则。
              这些内容是学习指数函数和对数函数的运算基础。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#root"
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
            description="学习时重点理解定义和条件，不要只记公式。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解根式"
              description="理解 n 次方根和根式的基本含义。"
            />

            <GoalCard
              number="02"
              title="掌握根式性质"
              description="特别注意偶次根与绝对值之间的关系。"
            />

            <GoalCard
              number="03"
              title="理解分数指数幂"
              description="理解分数指数与根式之间的互化关系。"
            />

            <GoalCard
              number="04"
              title="熟练进行指数运算"
              description="掌握正指数、负指数和分数指数的统一运算。"
            />
          </div>
        </section>

        {/* 1 根式 */}
        <section
          id="root"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="n 次方根与根式"
            description="根式是理解分数指数幂的第一步。"
          />

          <div className="mt-7 space-y-6">
            <KnowledgeCard title="n 次方根">
              <p>
                一般地，如果
                <InlineMath
                  math={String.raw`x^n=a`}
                />
                ，那么
                <InlineMath
                  math={String.raw`x`}
                />
                叫做
                <InlineMath
                  math={String.raw`a`}
                />
                的
                <InlineMath
                  math={String.raw`n`}
                />
                次方根。
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`x^n=a`}
                />
              </FormulaBox>

              <p>
                用根式表示时，通常写成：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\sqrt[n]{a}`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <div className="grid gap-5 lg:grid-cols-2">
              <KnowledgeCard title="当 n 为奇数">
                <p>
                  当
                  <InlineMath
                    math={String.raw`n`}
                  />
                  为奇数时，
                  任意实数都有唯一的实数
                  <InlineMath
                    math={String.raw`n`}
                  />
                  次方根。
                </p>

                <FormulaBox>
                  <BlockMath
                    math={String.raw`\sqrt[3]{-8}=-2`}
                  />
                </FormulaBox>

                <p className="text-sm text-slate-500">
                  因为：
                </p>

                <BlockMath
                  math={String.raw`(-2)^3=-8`}
                />
              </KnowledgeCard>

              <KnowledgeCard title="当 n 为偶数">
                <p>
                  当
                  <InlineMath
                    math={String.raw`n`}
                  />
                  为偶数时，
                  在实数范围内，
                  被开方数必须满足：
                </p>

                <FormulaBox>
                  <BlockMath
                    math={String.raw`a\ge 0`}
                  />
                </FormulaBox>

                <p>
                  根式
                  <InlineMath
                    math={String.raw`\sqrt[n]{a}`}
                  />
                  表示非负的那个
                  <InlineMath
                    math={String.raw`n`}
                  />
                  次方根。
                </p>
              </KnowledgeCard>
            </div>

            <ImportantBox title="必须记住">
              偶次根的结果规定为非负数。
              所以开偶次方根时，
              经常会出现绝对值。
            </ImportantBox>
          </div>
        </section>

        {/* 2 根式性质 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="根式的重要性质"
            description="这一部分最容易因为忽略绝对值而出错。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="奇次根">
              <p>
                当
                <InlineMath
                  math={String.raw`n`}
                />
                为奇数时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\sqrt[n]{a^n}=a`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`\sqrt[3]{(-2)^3}=-2`}
                />
              </ExampleLine>
            </KnowledgeCard>

            <KnowledgeCard title="偶次根">
              <p>
                当
                <InlineMath
                  math={String.raw`n`}
                />
                为偶数时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\sqrt[n]{a^n}=|a|`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`\sqrt{(-3)^2}=3`}
                />
              </ExampleLine>
            </KnowledgeCard>
          </div>

          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/60 p-6">
            <p className="text-sm font-semibold text-red-600">
              高频错误
            </p>

            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">
                  错误写法：
                </p>

                <BlockMath
                  math={String.raw`\sqrt{x^2}=x`}
                />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  正确写法：
                </p>

                <BlockMath
                  math={String.raw`\sqrt{x^2}=|x|`}
                />
              </div>
            </div>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              原因是平方根本身必须是非负数。
              当
              <InlineMath
                math={String.raw`x<0`}
              />
              时，
              <InlineMath
                math={String.raw`\sqrt{x^2}`}
              />
              不能等于负数
              <InlineMath
                math={String.raw`x`}
              />
              ，而应等于
              <InlineMath
                math={String.raw`|x|`}
              />
              。
            </p>
          </div>
        </section>

        {/* 3 整数指数幂 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="整数指数幂的扩展"
            description="先把整数指数理解清楚，再进入分数指数。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="零指数幂">
              <p>
                当
                <InlineMath
                  math={String.raw`a\ne 0`}
                />
                时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^0=1`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`5^0=1`}
                />
              </ExampleLine>
            </KnowledgeCard>

            <KnowledgeCard title="负整数指数幂">
              <p>
                当
                <InlineMath
                  math={String.raw`a\ne 0`}
                />
                ，
                <InlineMath
                  math={String.raw`n\in\mathbb{N}^*`}
                />
                时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^{-n}=\frac{1}{a^n}`}
                />
              </FormulaBox>

              <ExampleLine>
                <InlineMath
                  math={String.raw`2^{-3}=\frac{1}{2^3}=\frac18`}
                />
              </ExampleLine>
            </KnowledgeCard>
          </div>
        </section>

        {/* 4 分数指数幂 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="分数指数幂"
            description="分数指数幂把根式和指数幂统一起来。"
          />

          <div className="mt-7 space-y-6">
            <KnowledgeCard title="正分数指数幂">
              <p>
                当
                <InlineMath
                  math={String.raw`a>0`}
                />
                ，
                <InlineMath
                  math={String.raw`m,n\in\mathbb{N}^*`}
                />
                时，规定：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^{\frac{m}{n}}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m`}
                />
              </FormulaBox>

              <p className="text-sm text-slate-500">
                可以理解为：
                分母表示“开几次方根”，
                分子表示“几次方”。
              </p>
            </KnowledgeCard>

            <ExampleCard
              title="例 1"
              question="计算 16 的 3/4 次方。"
            >
              <BlockMath
                math={String.raw`16^{\frac34}`}
              />

              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-700">
                  解：
                </p>

                <BlockMath
                  math={String.raw`16^{\frac34}=\left(\sqrt[4]{16}\right)^3=2^3=8`}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                分母 4 表示先开四次方根，
                分子 3 表示再做三次方。
              </p>
            </ExampleCard>

            <KnowledgeCard title="负分数指数幂">
              <p>
                当
                <InlineMath
                  math={String.raw`a>0`}
                />
                时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`a^{-\frac{m}{n}}=\frac{1}{a^{\frac{m}{n}}}`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 2"
              question="计算 27 的 −2/3 次方。"
            >
              <BlockMath
                math={String.raw`27^{-\frac23}`}
              />

              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-700">
                  解：
                </p>

                <BlockMath
                  math={String.raw`27^{-\frac23}=\frac{1}{27^{\frac23}}`}
                />

                <BlockMath
                  math={String.raw`=\frac{1}{\left(\sqrt[3]{27}\right)^2}`}
                />

                <BlockMath
                  math={String.raw`=\frac{1}{3^2}=\frac19`}
                />
              </div>
            </ExampleCard>
          </div>
        </section>

        {/* 5 运算法则 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="指数幂的运算法则"
            description="整数指数幂的运算法则可以自然推广到分数指数幂。"
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <FormulaKnowledgeCard
              title="同底数幂相乘"
              formula={String.raw`a^r\cdot a^s=a^{r+s}`}
              example={String.raw`2^{\frac12}\cdot 2^{\frac32}=2^2=4`}
            />

            <FormulaKnowledgeCard
              title="同底数幂相除"
              formula={String.raw`\frac{a^r}{a^s}=a^{r-s}`}
              example={String.raw`\frac{3^{\frac52}}{3^{\frac12}}=3^2=9`}
            />

            <FormulaKnowledgeCard
              title="幂的乘方"
              formula={String.raw`\left(a^r\right)^s=a^{rs}`}
              example={String.raw`\left(4^{\frac12}\right)^3=4^{\frac32}=8`}
            />

            <FormulaKnowledgeCard
              title="积的乘方"
              formula={String.raw`(ab)^r=a^rb^r`}
              example={String.raw`(4\cdot9)^{\frac12}=4^{\frac12}9^{\frac12}=6`}
            />
          </div>

          <ImportantBox title="关于运算条件">
            当指数是分数时，
            高中阶段通常在正实数范围内讨论这些运算法则，
            即一般取 a&gt;0、b&gt;0。
            做题时要特别注意题目给出的定义域条件。
          </ImportantBox>
        </section>

        {/* 6 根式与指数式互化 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="根式与分数指数幂的互化"
            description="考试中两种形式经常来回转换。"
          />

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              <TableCell
                title="根式"
                content={
                  <InlineMath
                    math={String.raw`\sqrt[3]{a^2}`}
                  />
                }
              />

              <TableCell
                title="分数指数幂"
                content={
                  <InlineMath
                    math={String.raw`a^{\frac23}`}
                  />
                }
              />

              <TableCell
                title="对应关系"
                content="根指数 → 分母；幂指数 → 分子"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 3"
              question="将根式写成分数指数幂。"
            >
              <BlockMath
                math={String.raw`\sqrt[5]{x^3}`}
              />

              <BlockMath
                math={String.raw`\sqrt[5]{x^3}=x^{\frac35}`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 4"
              question="将分数指数幂写成根式。"
            >
              <BlockMath
                math={String.raw`a^{\frac47}`}
              />

              <BlockMath
                math={String.raw`a^{\frac47}=\sqrt[7]{a^4}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 解题方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="指数运算的基本思路"
            description="复杂指数运算题通常可以按固定顺序处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            <StepCard
              number="1"
              title="统一形式"
              description="尽量把根式转化为分数指数幂。"
            />

            <StepCard
              number="2"
              title="统一底数"
              description="能写成相同底数的尽量化成同底数。"
            />

            <StepCard
              number="3"
              title="使用指数法则"
              description="利用指数相加、相减、相乘进行化简。"
            />

            <StepCard
              number="4"
              title="检查条件"
              description="关注底数正负、零以及根式是否有意义。"
            />
          </div>
        </section>

        {/* 综合例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="EXAMPLES"
            title="典型例题"
            description="通过例题把根式、分数指数幂和指数运算联系起来。"
          />

          <div className="mt-7 space-y-5">
            <ExampleCard
              title="例 5"
              question="计算下式的值。"
            >
              <BlockMath
                math={String.raw`8^{\frac23}\cdot 2^{-1}`}
              />

              <div className="mt-4 border-t border-slate-100 pt-4">
                <BlockMath
                  math={String.raw`8^{\frac23}=\left(\sqrt[3]{8}\right)^2=4`}
                />

                <BlockMath
                  math={String.raw`2^{-1}=\frac12`}
                />

                <BlockMath
                  math={String.raw`8^{\frac23}\cdot2^{-1}=4\cdot\frac12=2`}
                />
              </div>
            </ExampleCard>

            <ExampleCard
              title="例 6"
              question="化简下式。"
            >
              <BlockMath
                math={String.raw`a^{\frac12}\cdot a^{\frac32}`}
              />

              <div className="mt-4 border-t border-slate-100 pt-4">
                <BlockMath
                  math={String.raw`a^{\frac12}\cdot a^{\frac32}=a^{\frac12+\frac32}=a^2`}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                同底数幂相乘，指数相加。
              </p>
            </ExampleCard>

            <ExampleCard
              title="例 7"
              question="化简下式。"
            >
              <BlockMath
                math={String.raw`\sqrt{x^2}`}
              />

              <div className="mt-4 border-t border-slate-100 pt-4">
                <BlockMath
                  math={String.raw`\sqrt{x^2}=|x|`}
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                不能直接写成 x。
                因为平方根的结果必须是非负数。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="这些错误在指数函数章节中还会继续出现。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="偶次根忘记绝对值"
              wrong={String.raw`\sqrt{x^2}=x`}
              correct={String.raw`\sqrt{x^2}=|x|`}
            />

            <MistakeCard
              number="02"
              title="负指数理解错误"
              wrong={String.raw`a^{-2}=-a^2`}
              correct={String.raw`a^{-2}=\frac{1}{a^2}`}
            />

            <MistakeCard
              number="03"
              title="分数指数分子分母弄反"
              wrong={String.raw`a^{\frac23}=\sqrt{a^3}`}
              correct={String.raw`a^{\frac23}=\sqrt[3]{a^2}`}
            />

            <MistakeCard
              number="04"
              title="同底数幂相乘时指数相乘"
              wrong={String.raw`a^m\cdot a^n=a^{mn}`}
              correct={String.raw`a^m\cdot a^n=a^{m+n}`}
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="掌握下面几条关系，本节的主体内容就基本建立起来了。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="space-y-6">
              <SummaryItem
                number="01"
                title="负指数"
                formula={String.raw`a^{-n}=\frac{1}{a^n}`}
              />

              <SummaryItem
                number="02"
                title="分数指数"
                formula={String.raw`a^{\frac{m}{n}}=\sqrt[n]{a^m}`}
              />

              <SummaryItem
                number="03"
                title="负分数指数"
                formula={String.raw`a^{-\frac{m}{n}}=\frac{1}{a^{\frac{m}{n}}}`}
              />

              <SummaryItem
                number="04"
                title="偶次根"
                formula={String.raw`\sqrt[n]{a^n}=|a|\quad(n\text{ 为偶数})`}
              />

              <SummaryItem
                number="05"
                title="同底数幂相乘"
                formula={String.raw`a^r\cdot a^s=a^{r+s}`}
              />

              <SummaryItem
                number="06"
                title="幂的乘方"
                formula={String.raw`\left(a^r\right)^s=a^{rs}`}
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
            description="完成 3 道题，检查自己是否真正理解本节内容。"
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
                  第 01 节完成
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  下一节：指数函数
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  下一步将从指数运算进入函数，
                  学习指数函数的定义、图象、
                  单调性以及底数变化带来的影响。
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
        {mathText(description)}
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
        {mathText(description)}
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
        {mathText(children)}
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
      {mathText(children)}
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
      {mathText(children)}
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
        {mathText(children)}
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
        {mathText(children)}
      </div>
    </div>
  );
}

function FormulaKnowledgeCard({
  title,
  formula,
  example,
}: {
  title: string;
  formula: string;
  example: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>

      <p className="mt-4 text-xs font-medium text-slate-400">
        示例
      </p>

      <div className="mt-2 overflow-x-auto">
        <BlockMath math={example} />
      </div>
    </div>
  );
}

function TableCell({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 text-center">
      <p className="text-xs font-medium text-slate-400">
        {title}
      </p>

      <div className="mt-3 text-sm font-medium text-slate-700">
        {mathText(content)}
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
        {mathText(description)}
      </p>
    </div>
  );
}

function MistakeCard({
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

      <div className="mt-4 rounded-lg bg-red-50/60 px-3 py-3">
        <p className="text-xs text-red-500">
          错误
        </p>

        <BlockMath math={wrong} />
      </div>

      <div className="mt-3 rounded-lg bg-emerald-50/60 px-3 py-3">
        <p className="text-xs text-emerald-600">
          正确
        </p>

        <BlockMath math={correct} />
      </div>
    </div>
  );
}

function SummaryItem({
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
          {mathText(question.question)}
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

                {mathText(option.text)}
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
            {mathText(question.explanation)}
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedAnswer(
                null
              );
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