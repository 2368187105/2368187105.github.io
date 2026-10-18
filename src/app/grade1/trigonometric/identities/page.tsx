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
    id: "trig-identities-quiz-1",
    question: "sin75° 的值为：",
    options: [
      {
        key: "A",
        text: "(√6+√2)/4",
      },
      {
        key: "B",
        text: "(√6−√2)/4",
      },
      {
        key: "C",
        text: "√3/2",
      },
      {
        key: "D",
        text: "1/2",
      },
    ],
    correctAnswer: "A",
    explanation:
      "75°=45°+30°，利用正弦和角公式可得 sin75°=(√6+√2)/4。",
  },
  {
    id: "trig-identities-quiz-2",
    question:
      "若 sin α=3/5，cos α=4/5，则 sin 2α 等于：",
    options: [
      {
        key: "A",
        text: "7/25",
      },
      {
        key: "B",
        text: "12/25",
      },
      {
        key: "C",
        text: "24/25",
      },
      {
        key: "D",
        text: "1",
      },
    ],
    correctAnswer: "C",
    explanation:
      "sin2α=2sinαcosα=2×3/5×4/5=24/25。",
  },
  {
    id: "trig-identities-quiz-3",
    question: "cos²α−sin²α 等于：",
    options: [
      {
        key: "A",
        text: "sin2α",
      },
      {
        key: "B",
        text: "cos2α",
      },
      {
        key: "C",
        text: "tan2α",
      },
      {
        key: "D",
        text: "1",
      },
    ],
    correctAnswer: "B",
    explanation:
      "根据余弦二倍角公式，cos2α=cos²α−sin²α。",
  },
];

export default function TrigIdentitiesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700"
          >
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
            href="/grade1/trigonometric"
            className="hover:text-slate-700"
          >
            三角函数
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            三角恒等变换
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 05 章 · 第 05 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                公式与综合应用
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              三角恒等变换
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              本节学习两角和与差公式、二倍角公式以及常见三角恒等变换。
              通过拆角、公式代换和结构观察，
              把复杂的三角表达式转化为熟悉、容易计算的形式。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#sum-difference"
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
            description="重点掌握和差公式、二倍角公式以及常见三角式化简。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="和差公式"
              description="掌握正弦、余弦和正切的两角和差公式。"
            />

            <GoalCard
              number="02"
              title="二倍角公式"
              description="掌握 sin2α、cos2α 和 tan2α。"
            />

            <GoalCard
              number="03"
              title="特殊角求值"
              description="把 15°、75° 等角拆成常见特殊角。"
            />

            <GoalCard
              number="04"
              title="恒等化简"
              description="利用公式识别和化简复杂三角表达式。"
            />
          </div>
        </section>

        {/* 核心思想 */}
        <section
          id="sum-difference"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="三角恒等变换的核心思想"
            description="先观察角和表达式的结构，再选择合适公式。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard
              number="1"
              title="拆角"
              description="把陌生角拆成两个熟悉特殊角的和或差。"
            />

            <StepCard
              number="2"
              title="套公式"
              description="根据正弦、余弦或正切选择对应公式。"
            />

            <StepCard
              number="3"
              title="继续化简"
              description="代入特殊角值，并使用基本关系整理结果。"
            />
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例"
              question="75° 可以怎样拆？"
            >
              <RelationBox>
                75° = 45° + 30°
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                这样就可以使用 45° 和 30°
                的特殊三角函数值进行计算。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 余弦和差 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="两角和与差的余弦公式"
            description="余弦和差公式是三角恒等变换中最重要的公式之一。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <FormulaCard
              title="两角和"
              formula={String.raw`\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta`}
            />

            <FormulaCard
              title="两角差"
              formula={String.raw`\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta`}
            />
          </div>

          <MemoryBox
            title="记忆规律"
            text="余弦公式中，括号里的符号与展开后的中间符号相反：和变减，差变加。"
          />
        </section>

        {/* 余弦例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="余弦和差公式应用"
            description="利用 45°、30° 等特殊角，可以计算 15°、75°。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 1"
              question="求 cos75°。"
            >
              <BlockMath
                math={String.raw`75^\circ=45^\circ+30^\circ`}
              />

              <BlockMath
                math={String.raw`\cos75^\circ=\cos(45^\circ+30^\circ)`}
              />

              <BlockMath
                math={String.raw`=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=\frac{\sqrt6-\sqrt2}{4}`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="求 cos15°。"
            >
              <BlockMath
                math={String.raw`15^\circ=45^\circ-30^\circ`}
              />

              <BlockMath
                math={String.raw`\cos15^\circ=\cos(45^\circ-30^\circ)`}
              />

              <BlockMath
                math={String.raw`=\frac{\sqrt6+\sqrt2}{4}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 正弦和差 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="两角和与差的正弦公式"
            description="正弦和差公式展开后的中间符号与原来的符号一致。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <FormulaCard
              title="两角和"
              formula={String.raw`\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta`}
            />

            <FormulaCard
              title="两角差"
              formula={String.raw`\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta`}
            />
          </div>

          <MemoryBox
            title="记忆规律"
            text="正弦公式中的中间符号不变：和还是加，差还是减。"
          />
        </section>

        {/* 正弦例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="正弦和差公式应用"
            description="通过拆角可以得到一些常用的非基本特殊角值。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 3"
              question="求 sin75°。"
            >
              <BlockMath
                math={String.raw`\sin75^\circ=\sin(45^\circ+30^\circ)`}
              />

              <BlockMath
                math={String.raw`=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=\frac{\sqrt6+\sqrt2}{4}`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 4"
              question="求 sin15°。"
            >
              <BlockMath
                math={String.raw`\sin15^\circ=\sin(45^\circ-30^\circ)`}
              />

              <BlockMath
                math={String.raw`=\frac{\sqrt6-\sqrt2}{4}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 正切和差 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="两角和与差的正切公式"
            description="正切公式是分式结构，使用时要特别注意分母。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <FormulaCard
              title="两角和"
              formula={String.raw`\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}`}
            />

            <FormulaCard
              title="两角差"
              formula={String.raw`\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}`}
            />
          </div>

          <NoticeBox title="注意">
            使用正切和差公式时，
            原来的正切函数以及公式中的分母都必须有意义。
          </NoticeBox>
        </section>

        {/* 正切例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="正切和差公式应用"
            description="利用 45° 和 30° 可以直接计算 tan75°。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 5"
              question="求 tan75°。"
            >
              <BlockMath
                math={String.raw`\tan75^\circ=\tan(45^\circ+30^\circ)`}
              />

              <BlockMath
                math={String.raw`=\frac{\tan45^\circ+\tan30^\circ}{1-\tan45^\circ\tan30^\circ}`}
              />

              <BlockMath
                math={String.raw`=\frac{1+\frac{\sqrt3}{3}}{1-\frac{\sqrt3}{3}}`}
              />

              <BlockMath
                math={String.raw`=2+\sqrt3`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 公式对比 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="和差公式对比"
            description="把三组三角函数公式放在一起，更容易理解结构。"
          />

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    函数
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    α + β
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    α − β
                  </th>
                </tr>
              </thead>

              <tbody>
                <FormulaTableRow
                  name="sin"
                  plus="sinα cosβ + cosα sinβ"
                  minus="sinα cosβ − cosα sinβ"
                />

                <FormulaTableRow
                  name="cos"
                  plus="cosα cosβ − sinα sinβ"
                  minus="cosα cosβ + sinα sinβ"
                />

                <FormulaTableRow
                  name="tan"
                  plus="(tanα+tanβ)/(1−tanαtanβ)"
                  minus="(tanα−tanβ)/(1+tanαtanβ)"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* 二倍角正弦 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="二倍角的正弦公式"
            description="在正弦和角公式中令 β=α，就得到二倍角公式。"
          />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
            <BlockMath
              math={String.raw`\sin2\alpha=2\sin\alpha\cos\alpha`}
            />
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 6"
              question="已知 sinα=3/5，cosα=4/5，求 sin2α。"
            >
              <BlockMath
                math={String.raw`\sin2\alpha=2\sin\alpha\cos\alpha`}
              />

              <BlockMath
                math={String.raw`=2\times\frac35\times\frac45`}
              />

              <BlockMath
                math={String.raw`=\frac{24}{25}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 二倍角余弦 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="二倍角的余弦公式"
            description="余弦二倍角有三种常用形式。"
          />

          <div className="mt-7 space-y-4">
            <FormulaCard
              title="基本形式"
              formula={String.raw`\cos2\alpha=\cos^2\alpha-\sin^2\alpha`}
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <FormulaCard
                title="只含 cos"
                formula={String.raw`\cos2\alpha=2\cos^2\alpha-1`}
              />

              <FormulaCard
                title="只含 sin"
                formula={String.raw`\cos2\alpha=1-2\sin^2\alpha`}
              />
            </div>
          </div>

          <MemoryBox
            title="三种形式怎么来的？"
            text="利用 sin²α+cos²α=1，可以分别消去 sin²α 或 cos²α。"
          />
        </section>

        {/* 余弦二倍角例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="选择合适的余弦二倍角公式"
            description="根据题目已经给出的三角函数值选择最方便的形式。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 7"
              question="已知 cosα=3/5，求 cos2α。"
            >
              <BlockMath
                math={String.raw`\cos2\alpha=2\cos^2\alpha-1`}
              />

              <BlockMath
                math={String.raw`=2\times\frac9{25}-1`}
              />

              <BlockMath
                math={String.raw`=-\frac7{25}`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 8"
              question="已知 sinα=3/5，求 cos2α。"
            >
              <BlockMath
                math={String.raw`\cos2\alpha=1-2\sin^2\alpha`}
              />

              <BlockMath
                math={String.raw`=1-2\times\frac9{25}`}
              />

              <BlockMath
                math={String.raw`=\frac7{25}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 二倍角正切 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="12"
            title="二倍角的正切公式"
            description="由正切和角公式令两个角相同得到。"
          />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
            <BlockMath
              math={String.raw`\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}`}
            />
          </div>

          <NoticeBox title="注意">
            正切二倍角公式中，
            分母 1−tan²α 不能为 0，
            同时原来的正切函数也必须有定义。
          </NoticeBox>
        </section>

        {/* 降幂 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="13"
            title="降幂公式"
            description="利用余弦二倍角公式，可以把平方形式改写成一次形式。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <FormulaCard
              title="sin²α"
              formula={String.raw`\sin^2\alpha=\frac{1-\cos2\alpha}{2}`}
            />

            <FormulaCard
              title="cos²α"
              formula={String.raw`\cos^2\alpha=\frac{1+\cos2\alpha}{2}`}
            />
          </div>
        </section>

        {/* 辅助角 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="14"
            title="把 sin x + cos x 合并"
            description="一些正弦和余弦的组合，可以写成一个三角函数。"
          />

          <div className="mt-7">
            <KnowledgeCard title="基本过程">
              <BlockMath
                math={String.raw`\sin x+\cos x`}
              />

              <BlockMath
                math={String.raw`=\sqrt2\left(\frac{\sqrt2}{2}\sin x+\frac{\sqrt2}{2}\cos x\right)`}
              />

              <BlockMath
                math={String.raw`=\sqrt2\sin\left(x+\frac{\pi}{4}\right)`}
              />
            </KnowledgeCard>
          </div>

          <div className="mt-5">
            <RelationBox>
              sin x + cos x = √2 sin(x + π/4)
            </RelationBox>
          </div>
        </section>

        {/* 最值 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="15"
            title="利用辅助角形式求最值"
            description="合并成一个正弦函数后，最大值和最小值非常容易判断。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 9"
              question="求 y=sin x+cos x 的最大值和最小值。"
            >
              <BlockMath
                math={String.raw`y=\sqrt2\sin\left(x+\frac{\pi}{4}\right)`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为：
              </p>

              <RelationBox>
                −1 ≤ sin(x+π/4) ≤ 1
              </RelationBox>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                所以：
              </p>

              <RelationBox>
                −√2 ≤ y ≤ √2
              </RelationBox>

              <p className="mt-4 text-sm font-medium text-slate-700">
                最大值为 √2，最小值为 −√2。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 综合求值 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="16"
            title="已知两个角的三角函数值"
            description="先用平方关系补出缺少的值，再代入和差公式。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 10"
              question="已知 sinα=3/5，cosβ=5/13，且 α、β 都是第一象限角，求 sin(α+β)。"
            >
              <p className="text-sm leading-7 text-slate-600">
                因为 α 在第一象限：
              </p>

              <BlockMath
                math={String.raw`\cos\alpha=\frac45`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 β 在第一象限：
              </p>

              <BlockMath
                math={String.raw`\sin\beta=\frac{12}{13}`}
              />

              <BlockMath
                math={String.raw`\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta`}
              />

              <BlockMath
                math={String.raw`=\frac35\cdot\frac5{13}+\frac45\cdot\frac{12}{13}`}
              />

              <BlockMath
                math={String.raw`=\frac{63}{65}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 结构识别 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="17"
            title="常见结构识别"
            description="很多题不需要完整展开，直接识别公式结构更快。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 11"
              question="化简 2sinαcosα。"
            >
              <BlockMath
                math={String.raw`2\sin\alpha\cos\alpha=\sin2\alpha`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 12"
              question="化简 cos²α−sin²α。"
            >
              <BlockMath
                math={String.raw`\cos^2\alpha-\sin^2\alpha=\cos2\alpha`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="三角恒等变换的解题顺序"
            description="看到复杂三角式时，可以先从结构入手。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="看角"
              description="是否可以拆成 30°、45°、60° 等特殊角。"
            />

            <StepCard
              number="2"
              title="看平方"
              description="出现 sin² 或 cos² 时想到平方关系和二倍角。"
            />

            <StepCard
              number="3"
              title="看乘积"
              description="出现 2sinαcosα 时想到 sin2α。"
            />

            <StepCard
              number="4"
              title="看组合"
              description="出现 sin x+cos x 时考虑辅助角合并。"
            />
          </div>
        </section>

        {/* 易错 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="最常见的问题是公式结构、符号以及二倍角误用。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="把正弦和角直接拆开"
              wrong="sin(α+β)=sinα+sinβ"
              correct="sin(α+β)=sinαcosβ+cosαsinβ"
            />

            <MistakeCard
              number="02"
              title="余弦和角符号写错"
              wrong="cos(α+β)=cosαcosβ+sinαsinβ"
              correct="cos(α+β)=cosαcosβ−sinαsinβ"
            />

            <MistakeCard
              number="03"
              title="把 sin2α 写成 2sinα"
              wrong="sin2α=2sinα"
              correct="sin2α=2sinαcosα"
            />

            <MistakeCard
              number="04"
              title="开平方后忽略象限"
              wrong="知道 sin²α 后直接取正值"
              correct="最终正负仍要结合角所在象限判断"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="优先掌握和差公式与三组二倍角公式。"
          />

          <div className="mt-7 space-y-3">
            <SummaryMath
              title="正弦和差"
              formula={String.raw`\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta`}
            />

            <SummaryMath
              title="余弦和差"
              formula={String.raw`\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta`}
            />

            <SummaryMath
              title="正弦二倍角"
              formula={String.raw`\sin2\alpha=2\sin\alpha\cos\alpha`}
            />

            <SummaryMath
              title="余弦二倍角"
              formula={String.raw`\cos2\alpha=\cos^2\alpha-\sin^2\alpha`}
            />

            <SummaryMath
              title="正切二倍角"
              formula={String.raw`\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}`}
            />

            <SummaryText
              title="基本方法"
              text="拆角 → 套公式 → 判断符号 → 代入特殊值 → 继续化简。"
            />
          </div>
        </section>

        {/* 章节完成 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="CHAPTER COMPLETE"
            title="第 05 章知识结构"
            description="完成本节后，三角函数章节的 5 个主要模块已经全部学习。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-5">
            <ChapterCard
              number="01"
              title="任意角"
              text="角与弧度制"
            />

            <ChapterCard
              number="02"
              title="三角函数"
              text="定义与基本关系"
            />

            <ChapterCard
              number="03"
              title="诱导公式"
              text="角的转化"
            />

            <ChapterCard
              number="04"
              title="图象性质"
              text="周期与单调"
            />

            <ChapterCard
              number="05"
              title="恒等变换"
              text="和差与二倍角"
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
            description="完成 3 道基础题，检查和差公式和二倍角公式是否掌握。"
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

        {/* 完成 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-emerald-600">
                  CHAPTER COMPLETE
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  第 05 章 · 三角函数已完成
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  从任意角与弧度制到三角恒等变换，
                  本章 5 节课程页面已经全部完成。
                </p>
              </div>

              <Link
                href="/grade1/trigonometric"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700"
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

function FormulaCard({
  title,
  formula,
}: {
  title: string;
  formula: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-center text-xs font-medium text-slate-400">
        {title}
      </p>

      <div className="mt-4 overflow-x-auto">
        <BlockMath math={formula} />
      </div>
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

function MemoryBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
      <p className="text-sm font-semibold text-blue-700">
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {text}
      </p>
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

function FormulaTableRow({
  name,
  plus,
  minus,
}: {
  name: string;
  plus: string;
  minus: string;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-b-0">
      <td className="px-5 py-5 font-semibold text-blue-600">
        {name}
      </td>

      <td className="px-5 py-5 text-slate-700">
        {plus}
      </td>

      <td className="px-5 py-5 text-slate-700">
        {minus}
      </td>
    </tr>
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

function SummaryMath({
  title,
  formula,
}: {
  title: string;
  formula: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[150px_1fr] sm:items-center">
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <div className="overflow-x-auto">
        <BlockMath math={formula} />
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