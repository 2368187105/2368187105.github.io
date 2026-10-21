"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import {
  BlockMath,
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
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "induction-formulas-quiz-1",
    question: "sin(−30°) 的值为：",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "−1/2",
      },
      {
        key: "C",
        text: "√3/2",
      },
      {
        key: "D",
        text: "−√3/2",
      },
    ],
    correctAnswer: "B",
    explanation:
      "sin(−α)=−sin α，所以 sin(−30°)=−sin30°=−1/2。",
  },
  {
    id: "induction-formulas-quiz-2",
    question: "cos150° 的值为：",
    options: [
      {
        key: "A",
        text: "√3/2",
      },
      {
        key: "B",
        text: "−√3/2",
      },
      {
        key: "C",
        text: "1/2",
      },
      {
        key: "D",
        text: "−1/2",
      },
    ],
    correctAnswer: "B",
    explanation:
      "150°=180°−30°，利用 cos(180°−α)=−cos α，得到 cos150°=−√3/2。",
  },
  {
    id: "induction-formulas-quiz-3",
    question: "sin120° 可以化为：",
    options: [
      {
        key: "A",
        text: "sin60°",
      },
      {
        key: "B",
        text: "−sin60°",
      },
      {
        key: "C",
        text: "cos60°",
      },
      {
        key: "D",
        text: "−cos60°",
      },
    ],
    correctAnswer: "A",
    explanation:
      "120°=180°−60°，而 sin(180°−α)=sin α，所以 sin120°=sin60°。",
  },
];

export default function InductionFormulasPage() {
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
            诱导公式
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 05 章 · 第 03 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                公式与化简
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              诱导公式
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              当角超过第一象限，甚至出现负角、
              大角时，不需要重新计算三角函数值。
              通过诱导公式，可以把复杂角转化为熟悉的锐角，
              再结合象限判断正负。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#idea"
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
            description="重点不是死记公式，而是理解角的位置变化如何影响三角函数值。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="负角公式"
              description="掌握 −α 与 α 的三角函数关系。"
            />

            <GoalCard
              number="02"
              title="π±α"
              description="掌握第二、第三象限常用诱导公式。"
            />

            <GoalCard
              number="03"
              title="2π−α"
              description="掌握第四象限角的常见化简。"
            />

            <GoalCard
              number="04"
              title="综合化简"
              description="把任意角转化为熟悉锐角求值。"
            />
          </div>
        </section>

        {/* 核心思想 */}
        <section
          id="idea"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="诱导公式在做什么？"
            description="本质上是在研究单位圆上对称点之间的坐标关系。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <SymmetryDiagram />
            </div>

            <KnowledgeCard title="核心思路">
              <p>
                角 α 的终边与单位圆交于：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`P(\cos\alpha,\sin\alpha)`}
                />
              </FormulaBox>

              <p>
                如果把这个点关于 x 轴、y 轴或原点进行对称，
                新点的坐标就会发生符号变化。
              </p>

              <p>
                由于 cos 对应横坐标，
                sin 对应纵坐标，
                所以三角函数值也随之发生规律性的变化。
              </p>
            </KnowledgeCard>
          </div>
        </section>

        {/* 负角 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="负角公式"
            description="−α 与 α 的终边关于 x 轴对称。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin(-\alpha)=-\sin\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos(-\alpha)=\cos\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan(-\alpha)=-\tan\alpha`}
            />
          </div>

          <div className="mt-5">
            <NoticeBox title="可以顺便记住奇偶性">
              sin 和 tan 对负号会变号，
              cos 遇到负号不变。
            </NoticeBox>
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 1"
              question="求 sin(−30°)。"
            >
              <BlockMath
                math={String.raw`\sin(-30^\circ)=-\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=-\frac12`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* π-alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="π−α 型公式"
            description="π−α 对应第二象限，参考角仍然是 α。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin(\pi-\alpha)=\sin\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos(\pi-\alpha)=-\cos\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan(\pi-\alpha)=-\tan\alpha`}
            />
          </div>

          <div className="mt-5">
            <RelationBox>
              第二象限：sin 为正，cos 为负，tan 为负
            </RelationBox>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 2"
              question="求 sin150°。"
            >
              <BlockMath
                math={String.raw`150^\circ=180^\circ-30^\circ`}
              />

              <BlockMath
                math={String.raw`\sin150^\circ=\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=\frac12`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 3"
              question="求 cos150°。"
            >
              <BlockMath
                math={String.raw`\cos150^\circ=-\cos30^\circ`}
              />

              <BlockMath
                math={String.raw`=-\frac{\sqrt3}{2}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* π+alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="π+α 型公式"
            description="π+α 对应第三象限。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin(\pi+\alpha)=-\sin\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos(\pi+\alpha)=-\cos\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan(\pi+\alpha)=\tan\alpha`}
            />
          </div>

          <div className="mt-5">
            <RelationBox>
              第三象限：sin 为负，cos 为负，tan 为正
            </RelationBox>
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 4"
              question="求 tan225°。"
            >
              <BlockMath
                math={String.raw`225^\circ=180^\circ+45^\circ`}
              />

              <BlockMath
                math={String.raw`\tan225^\circ=\tan45^\circ`}
              />

              <BlockMath
                math={String.raw`=1`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 2π-alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="2π−α 型公式"
            description="2π−α 对应第四象限。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin(2\pi-\alpha)=-\sin\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos(2\pi-\alpha)=\cos\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan(2\pi-\alpha)=-\tan\alpha`}
            />
          </div>

          <div className="mt-5">
            <RelationBox>
              第四象限：sin 为负，cos 为正，tan 为负
            </RelationBox>
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 5"
              question="求 sin330°。"
            >
              <BlockMath
                math={String.raw`330^\circ=360^\circ-30^\circ`}
              />

              <BlockMath
                math={String.raw`\sin330^\circ=-\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=-\frac12`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 2π+alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="整周变化"
            description="增加或减少整数个整周，不会改变角的终边。"
          />

          <div className="mt-7">
            <KnowledgeCard title="周期性的最基础形式">
              <div className="grid gap-4 lg:grid-cols-3">
                <FormulaCard
                  title="正弦"
                  formula={String.raw`\sin(\alpha+2k\pi)=\sin\alpha`}
                />

                <FormulaCard
                  title="余弦"
                  formula={String.raw`\cos(\alpha+2k\pi)=\cos\alpha`}
                />

                <FormulaCard
                  title="正切"
                  formula={String.raw`\tan(\alpha+k\pi)=\tan\alpha`}
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                其中 k 为整数。
                正弦和余弦每转一整周重复，
                正切每转半周就会重复。
              </p>
            </KnowledgeCard>
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 6"
              question="求 sin750°。"
            >
              <BlockMath
                math={String.raw`750^\circ=720^\circ+30^\circ`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                720° 是两个整周，因此：
              </p>

              <BlockMath
                math={String.raw`\sin750^\circ=\sin30^\circ`}
              />

              <BlockMath
                math={String.raw`=\frac12`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* π/2-alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="π/2−α 型公式"
            description="遇到 π/2 时，sin 和 cos 会互相转换。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin\left(\frac\pi2-\alpha\right)=\cos\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos\left(\frac\pi2-\alpha\right)=\sin\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan\left(\frac\pi2-\alpha\right)=\frac1{\tan\alpha}`}
            />
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 7"
              question="将 sin60° 写成余弦形式。"
            >
              <BlockMath
                math={String.raw`60^\circ=90^\circ-30^\circ`}
              />

              <BlockMath
                math={String.raw`\sin60^\circ=\cos30^\circ`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* π/2+alpha */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="π/2+α 型公式"
            description="先发生函数名称变化，再根据所在象限决定符号。"
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <FormulaCard
              title="正弦"
              formula={String.raw`\sin\left(\frac\pi2+\alpha\right)=\cos\alpha`}
            />

            <FormulaCard
              title="余弦"
              formula={String.raw`\cos\left(\frac\pi2+\alpha\right)=-\sin\alpha`}
            />

            <FormulaCard
              title="正切"
              formula={String.raw`\tan\left(\frac\pi2+\alpha\right)=-\frac1{\tan\alpha}`}
            />
          </div>
        </section>

        {/* 口诀 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="诱导公式口诀"
            description="当公式数量变多以后，可以用规律代替逐条死记。"
          />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center">
            <p className="text-sm text-slate-500">
              常用记忆方法
            </p>

            <p className="mt-3 text-2xl font-bold tracking-wide text-slate-900">
              奇变偶不变，符号看象限
            </p>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="奇变偶不变">
              <p>
                这里看角中 π/2 的倍数。
              </p>

              <p>
                如果是奇数倍的 π/2，
                sin 与 cos 互换；
                如果是偶数倍，
                函数名称不变。
              </p>

              <RelationBox>
                π/2、3π/2 → 名称改变
              </RelationBox>

              <RelationBox>
                π、2π → 名称不变
              </RelationBox>
            </KnowledgeCard>

            <KnowledgeCard title="符号看象限">
              <p>
                把 α 暂时看成锐角，
                判断原来的角落在哪个象限。
              </p>

              <p>
                然后根据该象限中原三角函数的正负确定最终符号。
              </p>

              <RelationBox>
                先看象限，再定正负
              </RelationBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 使用步骤 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="诱导公式的标准解题步骤"
            description="复杂角求值可以按照固定流程处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="化角"
              description="先利用整周关系把大角缩小。"
            />

            <StepCard
              number="2"
              title="找参考角"
              description="把角写成 π±α、2π−α 等形式。"
            />

            <StepCard
              number="3"
              title="判断符号"
              description="根据原角所在象限决定正负。"
            />

            <StepCard
              number="4"
              title="求特殊值"
              description="最后计算 30°、45°、60° 等熟悉角。"
            />
          </div>
        </section>

        {/* 综合例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="综合求值"
            description="大角、负角和非第一象限角都可以逐步化简。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 8"
              question="求 cos240°。"
            >
              <BlockMath
                math={String.raw`240^\circ=180^\circ+60^\circ`}
              />

              <BlockMath
                math={String.raw`\cos240^\circ=-\cos60^\circ`}
              />

              <BlockMath
                math={String.raw`=-\frac12`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 9"
              question="求 tan315°。"
            >
              <BlockMath
                math={String.raw`315^\circ=360^\circ-45^\circ`}
              />

              <BlockMath
                math={String.raw`\tan315^\circ=-\tan45^\circ`}
              />

              <BlockMath
                math={String.raw`=-1`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 10"
              question="求 sin(−120°)。"
            >
              <BlockMath
                math={String.raw`\sin(-120^\circ)=-\sin120^\circ`}
              />

              <BlockMath
                math={String.raw`=-\sin60^\circ`}
              />

              <BlockMath
                math={String.raw`=-\frac{\sqrt3}{2}`}
              />
            </ExampleCard>

            <ExampleCard
              title="例 11"
              question="求 cos690°。"
            >
              <BlockMath
                math={String.raw`690^\circ-360^\circ=330^\circ`}
              />

              <BlockMath
                math={String.raw`330^\circ=360^\circ-30^\circ`}
              />

              <BlockMath
                math={String.raw`\cos690^\circ=\cos30^\circ`}
              />

              <BlockMath
                math={String.raw`=\frac{\sqrt3}{2}`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 象限快速判断 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="12"
            title="参考角与象限"
            description="如果 α 是锐角，四个象限常见表示如下。"
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <QuadrantCard
              number="I"
              angle="α"
              sign="sin + / cos + / tan +"
            />

            <QuadrantCard
              number="II"
              angle="π−α"
              sign="sin + / cos − / tan −"
            />

            <QuadrantCard
              number="III"
              angle="π+α"
              sign="sin − / cos − / tan +"
            />

            <QuadrantCard
              number="IV"
              angle="2π−α"
              sign="sin − / cos + / tan −"
            />
          </div>
        </section>

        {/* 易错 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="诱导公式最容易错在符号和函数名称。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="只看参考角，不看象限"
              wrong="cos150°=cos30°"
              correct="150° 在第二象限，所以 cos150°=−cos30°"
            />

            <MistakeCard
              number="02"
              title="π/2 型公式忘记换名称"
              wrong="sin(π/2−α)=sin α"
              correct="sin(π/2−α)=cos α"
            />

            <MistakeCard
              number="03"
              title="负角公式符号弄错"
              wrong="cos(−α)=−cos α"
              correct="cos(−α)=cos α"
            />

            <MistakeCard
              number="04"
              title="大角直接判断困难"
              wrong="直接判断 1110° 的三角函数"
              correct="先减去若干个 360° 再处理"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="先掌握最常用四组，再理解 π/2 型换名规律。"
          />

          <div className="mt-7 space-y-3">
            <SummaryMath
              title="负角"
              formula={String.raw`\sin(-\alpha)=-\sin\alpha,\quad \cos(-\alpha)=\cos\alpha`}
            />

            <SummaryMath
              title="π−α"
              formula={String.raw`\sin(\pi-\alpha)=\sin\alpha,\quad \cos(\pi-\alpha)=-\cos\alpha`}
            />

            <SummaryMath
              title="π+α"
              formula={String.raw`\sin(\pi+\alpha)=-\sin\alpha,\quad \cos(\pi+\alpha)=-\cos\alpha`}
            />

            <SummaryMath
              title="2π−α"
              formula={String.raw`\sin(2\pi-\alpha)=-\sin\alpha,\quad \cos(2\pi-\alpha)=\cos\alpha`}
            />

            <SummaryText
              title="记忆规律"
              text="奇变偶不变，符号看象限。"
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
            description="完成 3 道基础题，检查诱导公式是否真正掌握。"
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
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-amber-600">
                  NEXT
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  04 · 三角函数的图象与性质
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  下一节将系统学习正弦函数、
                  余弦函数和正切函数的图象，
                  并研究周期性、奇偶性、单调性和值域。
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
    <div className="overflow-x-auto rounded-xl bg-slate-50 px-4 py-4 text-center">
      {mathText(children)}
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
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-center text-xs font-medium text-slate-400">
        {title}
      </p>

      <div className="mt-3 overflow-x-auto">
        <BlockMath math={formula} />
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
        {mathText(children)}
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
    <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
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

function QuadrantCard({
  number,
  angle,
  sign,
}: {
  number: string;
  angle: string;
  sign: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-semibold text-blue-600">
        第 {number} 象限
      </span>

      <p className="mt-3 text-lg font-bold text-slate-900">
        {angle}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {sign}
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
          {mathText(wrong)}
        </p>
      </div>

      <div className="mt-3 rounded-lg bg-emerald-50/60 px-4 py-3">
        <p className="text-xs text-emerald-600">
          正确
        </p>

        <p className="mt-2 text-sm text-slate-700">
          {mathText(correct)}
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
        {mathText(text)}
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

/* =========================
   示意图
========================= */

function SymmetryDiagram() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        单位圆中的对称关系
      </p>

      <svg
        viewBox="0 0 440 380"
        className="mx-auto h-auto w-full max-w-[440px]"
        role="img"
        aria-label="诱导公式单位圆对称示意"
      >
        <line
          x1="35"
          y1="190"
          x2="405"
          y2="190"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="220"
          y1="20"
          x2="220"
          y2="360"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <circle
          cx="220"
          cy="190"
          r="125"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300"
        />

        <line
          x1="220"
          y1="190"
          x2="320"
          y2="115"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-500"
        />

        <line
          x1="220"
          y1="190"
          x2="120"
          y2="115"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-emerald-500"
        />

        <line
          x1="220"
          y1="190"
          x2="120"
          y2="265"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-amber-500"
        />

        <line
          x1="220"
          y1="190"
          x2="320"
          y2="265"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-red-400"
        />

        <circle
          cx="320"
          cy="115"
          r="5"
          fill="currentColor"
          className="text-blue-600"
        />

        <circle
          cx="120"
          cy="115"
          r="5"
          fill="currentColor"
          className="text-emerald-600"
        />

        <circle
          cx="120"
          cy="265"
          r="5"
          fill="currentColor"
          className="text-amber-600"
        />

        <circle
          cx="320"
          cy="265"
          r="5"
          fill="currentColor"
          className="text-red-500"
        />

        <text
          x="330"
          y="108"
          className="fill-blue-600 text-[14px]"
        >
          α
        </text>

        <text
          x="72"
          y="108"
          className="fill-emerald-600 text-[14px]"
        >
          π−α
        </text>

        <text
          x="68"
          y="285"
          className="fill-amber-600 text-[14px]"
        >
          π+α
        </text>

        <text
          x="328"
          y="285"
          className="fill-red-500 text-[14px]"
        >
          2π−α
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
          {mathText(question.question)}
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

              {mathText(option.text)}
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
            {mathText(question.explanation)}
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