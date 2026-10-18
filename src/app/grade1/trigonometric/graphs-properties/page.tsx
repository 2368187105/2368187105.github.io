"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuizOption = {
  key: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "trig-graphs-quiz-1",
    question: "函数 y=sin x 的最小正周期是：",
    options: [
      { key: "A", text: "π/2" },
      { key: "B", text: "π" },
      { key: "C", text: "2π" },
      { key: "D", text: "4π" },
    ],
    correctAnswer: "C",
    explanation:
      "正弦函数满足 sin(x+2π)=sin x，因此最小正周期是 2π。",
  },
  {
    id: "trig-graphs-quiz-2",
    question: "函数 y=cos x 是：",
    options: [
      { key: "A", text: "奇函数" },
      { key: "B", text: "偶函数" },
      { key: "C", text: "非奇非偶函数" },
      { key: "D", text: "常函数" },
    ],
    correctAnswer: "B",
    explanation:
      "cos(−x)=cos x，所以余弦函数是偶函数。",
  },
  {
    id: "trig-graphs-quiz-3",
    question: "函数 y=tan x 的最小正周期是：",
    options: [
      { key: "A", text: "π/2" },
      { key: "B", text: "π" },
      { key: "C", text: "2π" },
      { key: "D", text: "4π" },
    ],
    correctAnswer: "B",
    explanation:
      "tan(x+π)=tan x，因此正切函数的最小正周期是 π。",
  },
];

export default function GraphsPropertiesPage() {
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
            href="/grade1/trigonometric"
            className="hover:text-slate-700"
          >
            三角函数
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            三角函数的图象与性质
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 05 章 · 第 04 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                图象与性质
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              三角函数的图象与性质
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节从图象出发，
              系统学习正弦函数、余弦函数和正切函数的定义域、
              值域、周期性、奇偶性和单调性。
              三角函数图象是后续函数变换和综合题的重要基础。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sin-graph"
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                本节小测
              </a>
            </div>
          </div>
        </section>

        {/* 学习目标 */}
        <section className="py-10">
          <SectionTitle
            label="LEARNING GOALS"
            title="本节学习目标"
            description="重点掌握三种基本三角函数图象的整体形态和核心性质。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="看懂图象"
              description="能够识别 sin、cos、tan 的基本图象。"
            />

            <GoalCard
              number="02"
              title="掌握周期"
              description="理解周期函数和最小正周期。"
            />

            <GoalCard
              number="03"
              title="掌握性质"
              description="判断奇偶性、单调性和值域。"
            />

            <GoalCard
              number="04"
              title="利用图象"
              description="根据图象解决简单求值和区间问题。"
            />
          </div>
        </section>

        {/* 正弦图象 */}
        <section
          id="sin-graph"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="正弦函数 y=sin x 的图象"
            description="正弦函数图象是一条连续、重复变化的波形曲线。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
            <SineGraph />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PropertyCard
              title="定义域"
              text="R"
            />

            <PropertyCard
              title="值域"
              text="[−1，1]"
            />

            <PropertyCard
              title="最小正周期"
              text="2π"
            />

            <PropertyCard
              title="奇偶性"
              text="奇函数"
            />
          </div>
        </section>

        {/* 正弦关键点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="正弦函数的五个关键点"
            description="画一个周期的正弦图象，只需要抓住五个典型位置。"
          />

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[700px] text-center text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    x
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    0
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    π/2
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    π
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    3π/2
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    2π
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-4 font-semibold text-blue-600">
                    sin x
                  </td>
                  <td className="px-4 py-4 text-slate-700">0</td>
                  <td className="px-4 py-4 text-slate-700">1</td>
                  <td className="px-4 py-4 text-slate-700">0</td>
                  <td className="px-4 py-4 text-slate-700">−1</td>
                  <td className="px-4 py-4 text-slate-700">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <RelationBox>
              0 → 1 → 0 → −1 → 0
            </RelationBox>
          </div>
        </section>

        {/* 正弦单调性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="正弦函数的单调性"
            description="在一个周期内，正弦函数会交替上升和下降。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="递增区间">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\left[-\frac{\pi}{2}+2k\pi,\ \frac{\pi}{2}+2k\pi\right]`}
                />
              </FormulaBox>

              <p>其中 k 为整数。</p>
            </KnowledgeCard>

            <KnowledgeCard title="递减区间">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\left[\frac{\pi}{2}+2k\pi,\ \frac{3\pi}{2}+2k\pi\right]`}
                />
              </FormulaBox>

              <p>其中 k 为整数。</p>
            </KnowledgeCard>
          </div>
        </section>

        {/* 正弦最值 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="正弦函数的最大值与最小值"
            description="从图象可以直接看出函数值始终不会超过 1，也不会小于 −1。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="最大值">
              <RelationBox>
                当 x = π/2 + 2kπ 时，sin x = 1
              </RelationBox>
            </KnowledgeCard>

            <KnowledgeCard title="最小值">
              <RelationBox>
                当 x = 3π/2 + 2kπ 时，sin x = −1
              </RelationBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 余弦 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="余弦函数 y=cos x 的图象"
            description="余弦函数与正弦函数形状相同，但起始位置不同。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
            <CosineGraph />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PropertyCard
              title="定义域"
              text="R"
            />

            <PropertyCard
              title="值域"
              text="[−1，1]"
            />

            <PropertyCard
              title="最小正周期"
              text="2π"
            />

            <PropertyCard
              title="奇偶性"
              text="偶函数"
            />
          </div>
        </section>

        {/* 余弦关键点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="余弦函数的五个关键点"
            description="一个周期内同样可以通过五个点快速画图。"
          />

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[700px] text-center text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    x
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    0
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    π/2
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    π
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    3π/2
                  </th>
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    2π
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-4 font-semibold text-blue-600">
                    cos x
                  </td>
                  <td className="px-4 py-4 text-slate-700">1</td>
                  <td className="px-4 py-4 text-slate-700">0</td>
                  <td className="px-4 py-4 text-slate-700">−1</td>
                  <td className="px-4 py-4 text-slate-700">0</td>
                  <td className="px-4 py-4 text-slate-700">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <RelationBox>
              1 → 0 → −1 → 0 → 1
            </RelationBox>
          </div>
        </section>

        {/* 余弦单调性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="余弦函数的单调性"
            description="余弦函数和正弦函数的增减区间并不相同。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="递增区间">
              <FormulaBox>
                <BlockMath
                  math={String.raw`[-\pi+2k\pi,\ 2k\pi]`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <KnowledgeCard title="递减区间">
              <FormulaBox>
                <BlockMath
                  math={String.raw`[2k\pi,\ \pi+2k\pi]`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 正弦余弦关系 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="正弦图象与余弦图象的关系"
            description="两条曲线形状完全相同，只是在水平方向上发生了平移。"
          />

          <div className="mt-7">
            <KnowledgeCard title="相位平移">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\cos x=\sin\left(x+\frac{\pi}{2}\right)`}
                />
              </FormulaBox>

              <p>
                可以理解为：把正弦函数图象向左平移 π/2，
                就得到余弦函数图象。
              </p>
            </KnowledgeCard>
          </div>
        </section>

        {/* 正切 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="正切函数 y=tan x 的图象"
            description="正切函数与正弦、余弦最大的区别，是存在没有定义的位置。"
          />

          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">
            <TangentGraph />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PropertyCard
              title="定义域"
              text="x ≠ π/2 + kπ"
            />

            <PropertyCard
              title="值域"
              text="R"
            />

            <PropertyCard
              title="最小正周期"
              text="π"
            />

            <PropertyCard
              title="奇偶性"
              text="奇函数"
            />
          </div>
        </section>

        {/* 正切单调性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="正切函数的单调性"
            description="正切函数在每一个连续定义区间上都单调递增。"
          />

          <div className="mt-7">
            <KnowledgeCard title="单调递增区间">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\left(-\frac{\pi}{2}+k\pi,\ \frac{\pi}{2}+k\pi\right)`}
                />
              </FormulaBox>

              <p>
                其中 k 为整数。
              </p>
            </KnowledgeCard>
          </div>

          <NoticeBox title="注意">
            正切函数虽然在每个定义区间上都递增，
            但不能说它在整个定义域上是单调递增函数，
            因为定义域被多个间断点分开。
          </NoticeBox>
        </section>

        {/* 周期函数 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="什么是周期函数？"
            description="三角函数图象不断重复，核心原因就是周期性。"
          />

          <div className="mt-7">
            <KnowledgeCard title="周期函数定义">
              <p>
                如果存在非零常数 T，
                对定义域内每一个 x 都有：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`f(x+T)=f(x)`}
                />
              </FormulaBox>

              <p>
                那么称 f(x) 为周期函数，
                T 称为函数的一个周期。
              </p>
            </KnowledgeCard>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <PropertyCard
              title="sin x"
              text="最小正周期 2π"
            />

            <PropertyCard
              title="cos x"
              text="最小正周期 2π"
            />

            <PropertyCard
              title="tan x"
              text="最小正周期 π"
            />
          </div>
        </section>

        {/* 奇偶性 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="12"
            title="三角函数的奇偶性"
            description="可以通过诱导公式，也可以直接通过图象对称性判断。"
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <KnowledgeCard title="正弦函数">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\sin(-x)=-\sin x`}
                />
              </FormulaBox>

              <RelationBox>
                奇函数 · 关于原点对称
              </RelationBox>
            </KnowledgeCard>

            <KnowledgeCard title="余弦函数">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\cos(-x)=\cos x`}
                />
              </FormulaBox>

              <RelationBox>
                偶函数 · 关于 y 轴对称
              </RelationBox>
            </KnowledgeCard>

            <KnowledgeCard title="正切函数">
              <FormulaBox>
                <BlockMath
                  math={String.raw`\tan(-x)=-\tan x`}
                />
              </FormulaBox>

              <RelationBox>
                奇函数 · 关于原点对称
              </RelationBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 三函数对比 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="13"
            title="三种基本三角函数对比"
            description="把核心性质放在一起更容易建立完整知识结构。"
          />

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] text-center text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-4">函数</th>
                  <th className="px-4 py-4">定义域</th>
                  <th className="px-4 py-4">值域</th>
                  <th className="px-4 py-4">周期</th>
                  <th className="px-4 py-4">奇偶性</th>
                </tr>
              </thead>

              <tbody>
                <CompareRow
                  name="sin x"
                  domain="R"
                  range="[−1，1]"
                  period="2π"
                  parity="奇函数"
                />

                <CompareRow
                  name="cos x"
                  domain="R"
                  range="[−1，1]"
                  period="2π"
                  parity="偶函数"
                />

                <CompareRow
                  name="tan x"
                  domain="x ≠ π/2+kπ"
                  range="R"
                  period="π"
                  parity="奇函数"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* 利用图象比较大小 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="14"
            title="利用单调性比较大小"
            description="先确定两个角位于同一个单调区间，再比较自变量大小。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 1"
              question="比较 sin(π/6) 与 sin(π/3) 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                在区间 [−π/2，π/2] 上，
                正弦函数单调递增。
              </p>

              <RelationBox>
                π/6 &lt; π/3
              </RelationBox>

              <RelationBox>
                sin(π/6) &lt; sin(π/3)
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="比较 cos(π/6) 与 cos(π/3) 的大小。"
            >
              <p className="text-sm leading-7 text-slate-600">
                在区间 [0，π] 上，
                余弦函数单调递减。
              </p>

              <RelationBox>
                π/6 &lt; π/3
              </RelationBox>

              <RelationBox>
                cos(π/6) &gt; cos(π/3)
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 图象读值 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="15"
            title="根据图象判断函数值范围"
            description="三角函数图象可以直接反映最大值、最小值和零点。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard
              number="1"
              title="先看值域"
              description="确定函数值整体可能出现的范围。"
            />

            <StepCard
              number="2"
              title="找关键点"
              description="确定零点、最大值点和最小值点。"
            />

            <StepCard
              number="3"
              title="结合区间"
              description="只研究题目指定区间内的图象部分。"
            />
          </div>
        </section>

        {/* 图象变换预览 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="16"
            title="简单图象变换"
            description="后续会经常遇到 y=A sin(ωx+φ) 这一类函数。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            <KnowledgeCard title="振幅">
              <FormulaBox>
                <BlockMath
                  math={String.raw`y=A\sin x`}
                />
              </FormulaBox>

              <p>
                |A| 决定图象上下振动的幅度。
              </p>
            </KnowledgeCard>

            <KnowledgeCard title="周期">
              <FormulaBox>
                <BlockMath
                  math={String.raw`y=\sin(\omega x)`}
                />
              </FormulaBox>

              <p>
                ω 会改变图象横向伸缩。
              </p>
            </KnowledgeCard>

            <KnowledgeCard title="平移">
              <FormulaBox>
                <BlockMath
                  math={String.raw`y=\sin(x+\varphi)`}
                />
              </FormulaBox>

              <p>
                φ 会影响图象在水平方向的位置。
              </p>
            </KnowledgeCard>
          </div>

          <NoticeBox title="本节先掌握基础">
            这里只需要先认识变换思想，
            复杂的参数图象问题后续再系统展开。
          </NoticeBox>
        </section>

        {/* 方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="图象与性质题的解题顺序"
            description="遇到三角函数性质题时，可以先按这个顺序检查。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="确认函数类型"
              description="先判断是 sin、cos 还是 tan。"
            />

            <StepCard
              number="2"
              title="看定义域和值域"
              description="特别注意 tan 的无定义点。"
            />

            <StepCard
              number="3"
              title="看周期和奇偶"
              description="利用重复性和对称性简化问题。"
            />

            <StepCard
              number="4"
              title="最后看单调性"
              description="结合具体区间比较大小或求最值。"
            />
          </div>
        </section>

        {/* 易错 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="图象题最容易混淆周期、单调区间以及正切定义域。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="把 sin 和 cos 的周期记成 π"
              wrong="sin x 的周期是 π"
              correct="sin x 和 cos x 的最小正周期都是 2π"
            />

            <MistakeCard
              number="02"
              title="认为 tan 在所有实数上有定义"
              wrong="tan x 的定义域是 R"
              correct="x = π/2 + kπ 时 tan x 没有定义"
            />

            <MistakeCard
              number="03"
              title="忽略函数的单调区间"
              wrong="只要 x₁<x₂，就一定有 sin x₁<sin x₂"
              correct="只有在同一个递增区间内才能这样比较"
            />

            <MistakeCard
              number="04"
              title="把余弦函数当成奇函数"
              wrong="cos(−x)=−cos x"
              correct="cos(−x)=cos x，所以 cos x 是偶函数"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="三张图象和四类性质是本节最重要的内容。"
          />

          <div className="mt-7 space-y-3">
            <SummaryText
              title="sin x"
              text="定义域 R，值域 [−1，1]，周期 2π，奇函数。"
            />

            <SummaryText
              title="cos x"
              text="定义域 R，值域 [−1，1]，周期 2π，偶函数。"
            />

            <SummaryText
              title="tan x"
              text="定义域排除 π/2+kπ，值域 R，周期 π，奇函数。"
            />

            <SummaryText
              title="核心方法"
              text="通过图象判断周期、奇偶性、单调性、最值和零点。"
            />
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
            description="完成 3 道基础题，检查三角函数图象与性质是否掌握。"
          />

          <div className="mt-7 space-y-5">
            {quizQuestions.map((question, index) => (
              <QuizCard
                key={question.id}
                number={index + 1}
                question={question}
              />
            ))}
          </div>
        </section>

        {/* 下一节 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-amber-600">
                  NEXT
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  05 · 三角恒等变换
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  下一节将学习两角和差公式、
                  二倍角公式以及常见三角表达式的化简与求值。
                </p>
              </div>

              <Link
                href="/grade1/trigonometric"
                className="shrink-0 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
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
   通用组件
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

function PropertyCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-semibold text-slate-900">
        {text}
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
    <div className="overflow-x-auto rounded-xl bg-slate-50 px-4 py-4 text-center">
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
      <span className="text-base font-medium tracking-wide text-slate-700">
        {children}
      </span>
    </div>
  );
}

function NoticeBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/50 p-5">
      <p className="text-sm font-semibold text-amber-700">
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {children}
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

function CompareRow({
  name,
  domain,
  range,
  period,
  parity,
}: {
  name: string;
  domain: string;
  range: string;
  period: string;
  parity: string;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-b-0">
      <td className="px-4 py-4 font-semibold text-blue-600">
        {name}
      </td>

      <td className="px-4 py-4 text-slate-700">
        {domain}
      </td>

      <td className="px-4 py-4 text-slate-700">
        {range}
      </td>

      <td className="px-4 py-4 text-slate-700">
        {period}
      </td>

      <td className="px-4 py-4 text-slate-700">
        {parity}
      </td>
    </tr>
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

      <div className="mt-4 rounded-lg bg-red-50/60 px-4 py-3">
        <p className="text-xs text-red-500">
          错误
        </p>

        <p className="mt-2 text-sm text-slate-700">
          {wrong}
        </p>
      </div>

      <div className="mt-3 rounded-lg bg-emerald-50/60 px-4 py-3">
        <p className="text-xs text-emerald-600">
          正确
        </p>

        <p className="mt-2 text-sm text-slate-700">
          {correct}
        </p>
      </div>
    </div>
  );
}

function SummaryText({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[150px_1fr] sm:items-center">
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}

/* =========================
   图象
========================= */

function SineGraph() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        y = sin x
      </p>

      <svg
        viewBox="0 0 800 300"
        className="h-auto w-full"
        role="img"
        aria-label="正弦函数图象"
      >
        <line
          x1="50"
          y1="150"
          x2="750"
          y2="150"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="400"
          y1="30"
          x2="400"
          y2="270"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="50"
          y1="80"
          x2="750"
          y2="80"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
          className="text-slate-200"
        />

        <line
          x1="50"
          y1="220"
          x2="750"
          y2="220"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
          className="text-slate-200"
        />

        <path
          d="
            M50 150
            C95 150 110 80 137 80
            C165 80 180 150 225 150
            C270 150 285 220 312 220
            C340 220 355 150 400 150
            C445 150 460 80 487 80
            C515 80 530 150 575 150
            C620 150 635 220 662 220
            C690 220 705 150 750 150
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <text x="405" y="165" className="fill-slate-500 text-[13px]">
          0
        </text>

        <text x="478" y="170" className="fill-slate-500 text-[13px]">
          π/2
        </text>

        <text x="570" y="170" className="fill-slate-500 text-[13px]">
          π
        </text>

        <text x="650" y="170" className="fill-slate-500 text-[13px]">
          3π/2
        </text>

        <text x="735" y="170" className="fill-slate-500 text-[13px]">
          2π
        </text>

        <text x="410" y="85" className="fill-slate-500 text-[13px]">
          1
        </text>

        <text x="410" y="225" className="fill-slate-500 text-[13px]">
          −1
        </text>
      </svg>
    </div>
  );
}

function CosineGraph() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        y = cos x
      </p>

      <svg
        viewBox="0 0 800 300"
        className="h-auto w-full"
        role="img"
        aria-label="余弦函数图象"
      >
        <line
          x1="50"
          y1="150"
          x2="750"
          y2="150"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="400"
          y1="30"
          x2="400"
          y2="270"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="50"
          y1="80"
          x2="750"
          y2="80"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
          className="text-slate-200"
        />

        <line
          x1="50"
          y1="220"
          x2="750"
          y2="220"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 5"
          className="text-slate-200"
        />

        <path
          d="
            M50 80
            C90 80 115 150 137 150
            C165 150 185 220 225 220
            C265 220 290 150 312 150
            C340 150 360 80 400 80
            C440 80 465 150 487 150
            C515 150 535 220 575 220
            C615 220 640 150 662 150
            C690 150 710 80 750 80
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <text x="405" y="165" className="fill-slate-500 text-[13px]">
          0
        </text>

        <text x="478" y="170" className="fill-slate-500 text-[13px]">
          π/2
        </text>

        <text x="570" y="170" className="fill-slate-500 text-[13px]">
          π
        </text>

        <text x="650" y="170" className="fill-slate-500 text-[13px]">
          3π/2
        </text>

        <text x="735" y="170" className="fill-slate-500 text-[13px]">
          2π
        </text>
      </svg>
    </div>
  );
}

function TangentGraph() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        y = tan x
      </p>

      <svg
        viewBox="0 0 800 320"
        className="h-auto w-full"
        role="img"
        aria-label="正切函数图象"
      >
        <line
          x1="50"
          y1="160"
          x2="750"
          y2="160"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="400"
          y1="30"
          x2="400"
          y2="290"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="225"
          y1="30"
          x2="225"
          y2="290"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="text-amber-300"
        />

        <line
          x1="575"
          y1="30"
          x2="575"
          y2="290"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="text-amber-300"
        />

        <path
          d="
            M70 275
            C120 250 165 210 205 65
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <path
          d="
            M245 275
            C300 245 350 205 400 160
            C450 115 500 75 555 45
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <path
          d="
            M595 275
            C640 245 690 205 730 65
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <text x="208" y="305" className="fill-slate-500 text-[13px]">
          −π/2
        </text>

        <text x="395" y="178" className="fill-slate-500 text-[13px]">
          0
        </text>

        <text x="562" y="305" className="fill-slate-500 text-[13px]">
          π/2
        </text>
      </svg>
    </div>
  );
}

/* =========================
   小测
========================= */

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
    selectedAnswer === question.correctAnswer;

  function submit() {
    if (!selectedAnswer) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-500">
          {number}
        </span>

        <p className="font-medium text-slate-900">
          {question.question}
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const selected =
            selectedAnswer === option.key;

          const correct =
            submitted &&
            option.key === question.correctAnswer;

          const wrong =
            submitted &&
            selected &&
            option.key !== question.correctAnswer;

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
        })}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!selectedAnswer}
          onClick={submit}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
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