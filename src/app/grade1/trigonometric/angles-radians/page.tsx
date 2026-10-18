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
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "angles-radians-quiz-1",
    question: "角 750° 与下列哪个角终边相同？",
    options: [
      {
        key: "A",
        text: "30°",
      },
      {
        key: "B",
        text: "60°",
      },
      {
        key: "C",
        text: "90°",
      },
      {
        key: "D",
        text: "120°",
      },
    ],
    correctAnswer: "A",
    explanation:
      "750°−2×360°=30°，因此 750° 与 30° 终边相同。",
  },
  {
    id: "angles-radians-quiz-2",
    question: "120° 化为弧度是：",
    options: [
      {
        key: "A",
        text: "π/3",
      },
      {
        key: "B",
        text: "2π/3",
      },
      {
        key: "C",
        text: "3π/4",
      },
      {
        key: "D",
        text: "5π/6",
      },
    ],
    correctAnswer: "B",
    explanation:
      "120°×π/180°=2π/3。",
  },
  {
    id: "angles-radians-quiz-3",
    question: "角 −π/3 的终边位于第几象限？",
    options: [
      {
        key: "A",
        text: "第一象限",
      },
      {
        key: "B",
        text: "第二象限",
      },
      {
        key: "C",
        text: "第三象限",
      },
      {
        key: "D",
        text: "第四象限",
      },
    ],
    correctAnswer: "D",
    explanation:
      "−π/3=−60°，从 x 轴正方向顺时针旋转 60°，终边位于第四象限。",
  },
];

export default function AnglesRadiansPage() {
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
            href="/grade1/trigonometric"
            className="transition hover:text-slate-700"
          >
            三角函数
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            任意角与弧度制
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 05 章 · 第 01 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础概念
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              任意角与弧度制
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              初中阶段主要研究 0° 到 180° 之间的角。
              进入三角函数以后，
              我们需要把角推广到任意大小，
              甚至允许角为负数。
              同时还要引入弧度制，
              为后续三角函数的定义和图象学习做准备。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#arbitrary-angle"
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                开始学习
              </a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
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
            description="重点掌握任意角、象限角、终边相同的角以及角度制和弧度制之间的转换。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解任意角"
              description="认识正角、负角和零角。"
            />

            <GoalCard
              number="02"
              title="判断象限"
              description="能够根据终边位置判断象限角。"
            />

            <GoalCard
              number="03"
              title="终边相同"
              description="掌握终边相同角的一般表示方法。"
            />

            <GoalCard
              number="04"
              title="弧度制"
              description="掌握角度与弧度之间的互化。"
            />
          </div>
        </section>

        {/* 任意角 */}
        <section
          id="arbitrary-angle"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="任意角"
            description="角可以看成一条射线绕着端点旋转形成的图形。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="角的形成">
              <p>
                一条射线绕着它的端点从一个位置旋转到另一个位置，
                就形成一个角。
              </p>

              <p>
                射线开始的位置叫做
                <strong className="font-semibold text-slate-900">
                  始边
                </strong>
                ，旋转结束的位置叫做
                <strong className="font-semibold text-slate-900">
                  终边
                </strong>
                。
              </p>
            </KnowledgeCard>

            <KnowledgeCard title="旋转方向">
              <div className="space-y-3">
                <DirectionItem
                  symbol="+"
                  title="正角"
                  description="按照逆时针方向旋转形成的角。"
                />

                <DirectionItem
                  symbol="−"
                  title="负角"
                  description="按照顺时针方向旋转形成的角。"
                />

                <DirectionItem
                  symbol="0"
                  title="零角"
                  description="射线没有发生旋转，始边与终边重合。"
                />
              </div>
            </KnowledgeCard>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
            <AngleDirectionDiagram />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <SimpleCard
              title="60°"
              text="逆时针旋转 60°，是正角。"
            />

            <SimpleCard
              title="−45°"
              text="顺时针旋转 45°，是负角。"
            />

            <SimpleCard
              title="720°"
              text="逆时针旋转两周，仍然是一个合法的角。"
            />
          </div>
        </section>

        {/* 象限角 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="象限角"
            description="通常把角的顶点放在坐标原点，始边与 x 轴正半轴重合。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <QuadrantDiagram />
            </div>

            <div className="space-y-4">
              <QuadrantCard
                title="第一象限角"
                description="终边落在第一象限。"
                example="例如 30°、60°"
              />

              <QuadrantCard
                title="第二象限角"
                description="终边落在第二象限。"
                example="例如 120°、150°"
              />

              <QuadrantCard
                title="第三象限角"
                description="终边落在第三象限。"
                example="例如 210°、240°"
              />

              <QuadrantCard
                title="第四象限角"
                description="终边落在第四象限。"
                example="例如 300°、330°"
              />
            </div>
          </div>

          <NoticeBox title="注意">
            如果角的终边恰好落在 x 轴或 y 轴上，
            那么这个角不属于任何象限。
          </NoticeBox>
        </section>

        {/* 终边相同 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="终边相同的角"
            description="相差整数个整周的角，终边完全相同。"
          />

          <div className="mt-7 space-y-5">
            <KnowledgeCard title="一般表示">
              <p>
                如果角 α 已知，
                那么所有与 α 终边相同的角都可以写成：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\beta=\alpha+k\cdot360^\circ,\quad k\in\mathbb Z`}
                />
              </FormulaBox>

              <p>
                这里的 k 可以取任意整数，
                包括正整数、负整数和 0。
              </p>
            </KnowledgeCard>

            <ExampleCard
              title="例 1"
              question="写出与 30° 终边相同的角的一般形式。"
            >
              <BlockMath
                math={String.raw`\beta=30^\circ+k\cdot360^\circ,\quad k\in\mathbb Z`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                例如：
              </p>

              <RelationBox>
                30°，390°，750°，−330°……
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 2"
              question="判断 750° 与哪个 0° 到 360° 范围内的角终边相同。"
            >
              <BlockMath
                math={String.raw`750^\circ-2\times360^\circ=30^\circ`}
              />

              <RelationBox>
                750° 与 30° 终边相同
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 象限判断 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="如何判断大角或负角所在象限"
            description="先找到一个与它终边相同的 0° 到 360° 范围内的角。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard
              number="1"
              title="加减 360°"
              description="把原角化到一个比较熟悉的范围。"
            />

            <StepCard
              number="2"
              title="找到等效角"
              description="找到 0° 到 360° 之间终边相同的角。"
            />

            <StepCard
              number="3"
              title="判断象限"
              description="根据等效角的终边位置确定象限。"
            />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 3"
              question="判断 500° 是第几象限角。"
            >
              <BlockMath
                math={String.raw`500^\circ-360^\circ=140^\circ`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                140° 位于 90° 与 180° 之间。
              </p>

              <RelationBox>
                500° 是第二象限角
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 4"
              question="判断 −60° 是第几象限角。"
            >
              <p className="text-sm leading-7 text-slate-600">
                可以给 −60° 加上 360°：
              </p>

              <BlockMath
                math={String.raw`-60^\circ+360^\circ=300^\circ`}
              />

              <RelationBox>
                −60° 是第四象限角
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 弧度制 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="弧度制"
            description="除了角度制，我们还可以用弧长与半径的关系来表示角。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <KnowledgeCard title="1 弧度">
              <p>
                在半径为 r 的圆中，
                如果一段弧的长度也恰好等于 r，
                那么这段弧所对的圆心角就是
                <strong className="font-semibold text-slate-900">
                  1 弧度
                </strong>
                。
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\alpha=\frac{l}{r}`}
                />
              </FormulaBox>

              <p>
                其中 l 表示弧长，r 表示半径。
              </p>
            </KnowledgeCard>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <RadianDiagram />
            </div>
          </div>
        </section>

        {/* 180=pi */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="角度制与弧度制的核心关系"
            description="这一条关系是所有角度和弧度互化的基础。"
          />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center">
            <p className="text-sm text-slate-500">
              半圆所对的圆心角
            </p>

            <div className="mt-4 overflow-x-auto">
              <BlockMath
                math={String.raw`180^\circ=\pi\ \text{rad}`}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ConversionCard
              degree="30°"
              radian="π/6"
            />

            <ConversionCard
              degree="45°"
              radian="π/4"
            />

            <ConversionCard
              degree="60°"
              radian="π/3"
            />

            <ConversionCard
              degree="90°"
              radian="π/2"
            />

            <ConversionCard
              degree="120°"
              radian="2π/3"
            />

            <ConversionCard
              degree="180°"
              radian="π"
            />

            <ConversionCard
              degree="270°"
              radian="3π/2"
            />

            <ConversionCard
              degree="360°"
              radian="2π"
            />
          </div>
        </section>

        {/* 角转弧度 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="角度化为弧度"
            description="角度乘以 π/180°。"
          />

          <div className="mt-7">
            <FormulaBox>
              <BlockMath
                math={String.raw`\text{弧度数}=\text{角度数}\times\frac{\pi}{180^\circ}`}
              />
            </FormulaBox>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 5"
              question="将 120° 化为弧度。"
            >
              <BlockMath
                math={String.raw`120^\circ\times\frac{\pi}{180^\circ}`}
              />

              <BlockMath
                math={String.raw`=\frac{2\pi}{3}`}
              />

              <RelationBox>
                120° = 2π/3
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 6"
              question="将 −45° 化为弧度。"
            >
              <BlockMath
                math={String.raw`-45^\circ\times\frac{\pi}{180^\circ}`}
              />

              <BlockMath
                math={String.raw`=-\frac{\pi}{4}`}
              />

              <RelationBox>
                −45° = −π/4
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 弧度转角度 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="弧度化为角度"
            description="弧度乘以 180°/π。"
          />

          <div className="mt-7">
            <FormulaBox>
              <BlockMath
                math={String.raw`\text{角度数}=\text{弧度数}\times\frac{180^\circ}{\pi}`}
              />
            </FormulaBox>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ExampleCard
              title="例 7"
              question="将 5π/6 化为角度。"
            >
              <BlockMath
                math={String.raw`\frac{5\pi}{6}\times\frac{180^\circ}{\pi}`}
              />

              <BlockMath
                math={String.raw`=150^\circ`}
              />

              <RelationBox>
                5π/6 = 150°
              </RelationBox>
            </ExampleCard>

            <ExampleCard
              title="例 8"
              question="将 −π/3 化为角度。"
            >
              <BlockMath
                math={String.raw`-\frac{\pi}{3}\times\frac{180^\circ}{\pi}`}
              />

              <BlockMath
                math={String.raw`=-60^\circ`}
              />

              <RelationBox>
                −π/3 = −60°
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 弧长 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="弧长公式"
            description="使用弧度制后，圆中的弧长公式非常简洁。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="弧长公式">
              <FormulaBox>
                <BlockMath
                  math={String.raw`l=|\alpha|r`}
                />
              </FormulaBox>

              <p>
                α 必须使用弧度制。
                如果只讨论弧长大小，
                使用角的弧度数绝对值。
              </p>
            </KnowledgeCard>

            <ExampleCard
              title="例 9"
              question="半径为 3，圆心角为 2π/3，求弧长。"
            >
              <BlockMath
                math={String.raw`l=\frac{2\pi}{3}\times3`}
              />

              <BlockMath
                math={String.raw`=2\pi`}
              />

              <RelationBox>
                弧长为 2π
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 扇形面积 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="扇形面积"
            description="弧度制下，扇形面积也可以直接表示。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="扇形面积公式">
              <FormulaBox>
                <BlockMath
                  math={String.raw`S=\frac12|\alpha|r^2`}
                />
              </FormulaBox>

              <p>
                也可以结合
                <InlineMath math={String.raw`l=|\alpha|r`} />
                得到：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`S=\frac12lr`}
                />
              </FormulaBox>
            </KnowledgeCard>

            <ExampleCard
              title="例 10"
              question="半径为 4，圆心角为 π/3，求扇形面积。"
            >
              <BlockMath
                math={String.raw`S=\frac12\times\frac{\pi}{3}\times4^2`}
              />

              <BlockMath
                math={String.raw`=\frac{8\pi}{3}`}
              />

              <RelationBox>
                扇形面积为 8π/3
              </RelationBox>
            </ExampleCard>
          </div>
        </section>

        {/* 方法总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="本节常用解题步骤"
            description="任意角与弧度制的问题大多可以按照固定流程处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="先看单位"
              description="先判断题目使用的是角度还是弧度。"
            />

            <StepCard
              number="2"
              title="化等效角"
              description="大角和负角可通过加减整周化简。"
            />

            <StepCard
              number="3"
              title="判断象限"
              description="根据终边落在坐标系的位置判断象限。"
            />

            <StepCard
              number="4"
              title="使用 π 转换"
              description="牢记 180°=π，完成角度与弧度互化。"
            />
          </div>
        </section>

        {/* 易错点 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="这些问题在后面的三角函数学习中会频繁出现。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="把负角理解成角度大小为负"
              wrong="认为 −60° 不存在"
              correct="−60° 表示顺时针旋转 60°"
            />

            <MistakeCard
              number="02"
              title="把终边相同理解成角相等"
              wrong="30°=390°"
              correct="30° 与 390° 不相等，但终边相同"
            />

            <MistakeCard
              number="03"
              title="忘记弧度与角度单位不同"
              wrong="π=180"
              correct="π rad = 180°"
            />

            <MistakeCard
              number="04"
              title="弧长公式直接代角度数"
              wrong="l=60r"
              correct="使用 l=αr 时，α 必须是弧度"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="掌握下面这些内容，就已经具备学习三角函数定义的基础。"
          />

          <div className="mt-7 space-y-3">
            <SummaryText
              title="任意角"
              text="逆时针为正角，顺时针为负角，不旋转为零角。"
            />

            <SummaryText
              title="终边相同"
              text="α+k·360°，其中 k 为任意整数。"
            />

            <SummaryText
              title="象限角"
              text="根据角的终边落在第几象限进行判断。"
            />

            <SummaryMath
              title="角度与弧度"
              formula={String.raw`180^\circ=\pi`}
            />

            <SummaryMath
              title="弧长"
              formula={String.raw`l=|\alpha|r`}
            />

            <SummaryMath
              title="扇形面积"
              formula={String.raw`S=\frac12|\alpha|r^2=\frac12lr`}
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
            description="完成 3 道基础题，检查任意角、象限角和弧度制是否掌握。"
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
                  02 · 三角函数的概念与基本关系
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  下一节将利用单位圆正式定义
                  sin α、cos α 和 tan α，
                  并学习同角三角函数之间的基本关系。
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
    <div className="my-4 rounded-xl bg-slate-50 px-4 py-5 text-center">
      <span className="text-base font-medium tracking-wide text-slate-700 sm:text-lg">
        {children}
      </span>
    </div>
  );
}

function DirectionItem({
  symbol,
  title,
  description,
}: {
  symbol: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-700">
        {symbol}
      </span>

      <div>
        <p className="font-semibold text-slate-900">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function SimpleCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="font-bold text-slate-900">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function QuadrantCard({
  title,
  description,
  example,
}: {
  title: string;
  description: string;
  example: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {example}
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

function ConversionCard({
  degree,
  radian,
}: {
  degree: string;
  radian: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <p className="text-lg font-bold text-slate-900">
        {degree}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        =
      </p>

      <p className="mt-2 font-semibold text-blue-600">
        {radian}
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

function AngleDirectionDiagram() {
  return (
    <div>
      <p className="mb-5 text-sm font-semibold text-slate-900">
        正角与负角
      </p>

      <svg
        viewBox="0 0 700 280"
        className="h-auto w-full"
        role="img"
        aria-label="正角与负角示意图"
      >
        <line
          x1="350"
          y1="30"
          x2="350"
          y2="250"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-200"
        />

        <line
          x1="80"
          y1="140"
          x2="620"
          y2="140"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-200"
        />

        <line
          x1="350"
          y1="140"
          x2="560"
          y2="140"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-slate-700"
        />

        <line
          x1="350"
          y1="140"
          x2="465"
          y2="65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-blue-500"
        />

        <path
          d="M 450 140 A 100 100 0 0 0 434 84"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-500"
        />

        <polygon
          points="431,80 442,84 435,92"
          fill="currentColor"
          className="text-blue-500"
        />

        <line
          x1="350"
          y1="140"
          x2="465"
          y2="215"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-amber-500"
        />

        <path
          d="M 450 140 A 100 100 0 0 1 434 196"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-amber-500"
        />

        <polygon
          points="431,200 442,196 435,188"
          fill="currentColor"
          className="text-amber-500"
        />

        <text
          x="500"
          y="55"
          className="fill-blue-600 text-[16px]"
        >
          正角
        </text>

        <text
          x="500"
          y="225"
          className="fill-amber-600 text-[16px]"
        >
          负角
        </text>

        <text
          x="565"
          y="130"
          className="fill-slate-500 text-[14px]"
        >
          始边
        </text>
      </svg>
    </div>
  );
}

function QuadrantDiagram() {
  return (
    <div>
      <p className="mb-5 text-sm font-semibold text-slate-900">
        象限示意
      </p>

      <svg
        viewBox="0 0 420 360"
        className="mx-auto h-auto w-full max-w-[420px]"
        role="img"
        aria-label="四个象限示意图"
      >
        <line
          x1="40"
          y1="180"
          x2="380"
          y2="180"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300"
        />

        <line
          x1="210"
          y1="25"
          x2="210"
          y2="335"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300"
        />

        <polygon
          points="380,180 369,174 369,186"
          fill="currentColor"
          className="text-slate-400"
        />

        <polygon
          points="210,25 204,36 216,36"
          fill="currentColor"
          className="text-slate-400"
        />

        <circle
          cx="210"
          cy="180"
          r="4"
          fill="currentColor"
          className="text-slate-700"
        />

        <text
          x="290"
          y="105"
          className="fill-blue-600 text-[16px]"
        >
          第一象限
        </text>

        <text
          x="90"
          y="105"
          className="fill-slate-500 text-[16px]"
        >
          第二象限
        </text>

        <text
          x="90"
          y="270"
          className="fill-slate-500 text-[16px]"
        >
          第三象限
        </text>

        <text
          x="290"
          y="270"
          className="fill-slate-500 text-[16px]"
        >
          第四象限
        </text>

        <text
          x="385"
          y="175"
          className="fill-slate-500 text-[14px]"
        >
          x
        </text>

        <text
          x="220"
          y="30"
          className="fill-slate-500 text-[14px]"
        >
          y
        </text>
      </svg>
    </div>
  );
}

function RadianDiagram() {
  return (
    <div>
      <p className="mb-5 text-sm font-semibold text-slate-900">
        1 弧度示意
      </p>

      <svg
        viewBox="0 0 420 340"
        className="mx-auto h-auto w-full max-w-[420px]"
        role="img"
        aria-label="弧度定义示意图"
      >
        <circle
          cx="210"
          cy="180"
          r="110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-200"
        />

        <line
          x1="210"
          y1="180"
          x2="320"
          y2="180"
          stroke="currentColor"
          strokeWidth="3"
          className="text-slate-600"
        />

        <line
          x1="210"
          y1="180"
          x2="270"
          y2="88"
          stroke="currentColor"
          strokeWidth="3"
          className="text-slate-600"
        />

        <path
          d="M 320 180 A 110 110 0 0 0 270 88"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-blue-500"
        />

        <path
          d="M 265 180 A 55 55 0 0 0 240 134"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-amber-500"
        />

        <text
          x="260"
          y="205"
          className="fill-slate-600 text-[15px]"
        >
          r
        </text>

        <text
          x="300"
          y="115"
          className="fill-blue-600 text-[15px]"
        >
          l = r
        </text>

        <text
          x="240"
          y="153"
          className="fill-amber-600 text-[14px]"
        >
          1 rad
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