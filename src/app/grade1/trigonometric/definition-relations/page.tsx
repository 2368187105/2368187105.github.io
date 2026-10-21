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
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "trig-definition-quiz-1",
    question:
      "角 α 的终边经过单位圆上的点 P(1/2，√3/2)，则 sin α 等于：",
    options: [
      {
        key: "A",
        text: "1/2",
      },
      {
        key: "B",
        text: "√3/2",
      },
      {
        key: "C",
        text: "√3",
      },
      {
        key: "D",
        text: "2",
      },
    ],
    correctAnswer: "B",
    explanation:
      "在单位圆中，点 P 的横坐标是 cos α，纵坐标是 sin α，因此 sin α=√3/2。",
  },
  {
    id: "trig-definition-quiz-2",
    question:
      "若 α 是第二象限角，则下列符号正确的是：",
    options: [
      {
        key: "A",
        text: "sin α>0，cos α>0",
      },
      {
        key: "B",
        text: "sin α>0，cos α<0",
      },
      {
        key: "C",
        text: "sin α<0，cos α<0",
      },
      {
        key: "D",
        text: "sin α<0，cos α>0",
      },
    ],
    correctAnswer: "B",
    explanation:
      "第二象限中的点横坐标为负、纵坐标为正，所以 cos α<0，sin α>0。",
  },
  {
    id: "trig-definition-quiz-3",
    question:
      "若 sin α=3/5，cos α=4/5，则 tan α 等于：",
    options: [
      {
        key: "A",
        text: "3/4",
      },
      {
        key: "B",
        text: "4/3",
      },
      {
        key: "C",
        text: "5/3",
      },
      {
        key: "D",
        text: "5/4",
      },
    ],
    correctAnswer: "A",
    explanation:
      "tan α=sin α/cos α=(3/5)/(4/5)=3/4。",
  },
];

export default function TrigDefinitionPage() {
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
            三角函数的概念与基本关系
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                第 05 章 · 第 02 节
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心概念
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              三角函数的概念与基本关系
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              上一节已经学习任意角和弧度制。
              这一节利用单位圆正式定义任意角的正弦、
              余弦和正切，并掌握三角函数值在不同象限中的符号，
              以及同角三角函数之间最重要的基本关系。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#definition"
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
            description="重点理解单位圆上的坐标与三角函数之间的关系。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <GoalCard
              number="01"
              title="理解定义"
              description="用单位圆定义 sin、cos 和 tan。"
            />

            <GoalCard
              number="02"
              title="判断符号"
              description="根据象限判断三角函数值的正负。"
            />

            <GoalCard
              number="03"
              title="特殊角"
              description="掌握常用特殊角的三角函数值。"
            />

            <GoalCard
              number="04"
              title="基本关系"
              description="掌握平方关系和商数关系。"
            />
          </div>
        </section>

        {/* 定义 */}
        <section
          id="definition"
          className="scroll-mt-24 border-t border-slate-200 py-12"
        >
          <SectionTitle
            label="01"
            title="单位圆上的三角函数定义"
            description="单位圆是圆心在原点、半径为 1 的圆。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <UnitCircleDiagram />
            </div>

            <KnowledgeCard title="定义方法">
              <p>
                设角 α 的顶点在坐标原点，
                始边与 x 轴正半轴重合。
              </p>

              <p>
                角 α 的终边与单位圆交于点：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`P(x,y)`}
                />
              </FormulaBox>

              <p>
                那么定义：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\cos\alpha=x`}
                />
              </FormulaBox>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\sin\alpha=y`}
                />
              </FormulaBox>

              <p>
                当 cos α ≠ 0 时：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`\tan\alpha=\frac{y}{x}`}
                />
              </FormulaBox>
            </KnowledgeCard>
          </div>

          <NoticeBox title="最重要的理解">
            在单位圆上，cos α 就是点 P 的横坐标，
            sin α 就是点 P 的纵坐标。
          </NoticeBox>
        </section>

        {/* 一般定义 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="02"
            title="任意半径下的定义"
            description="如果不是单位圆，也可以利用坐标和距离定义三角函数。"
          />

          <div className="mt-7">
            <KnowledgeCard title="一般形式">
              <p>
                设角 α 的终边经过点 P(x，y)，
                点 P 到原点的距离为：
              </p>

              <FormulaBox>
                <BlockMath
                  math={String.raw`r=\sqrt{x^2+y^2}`}
                />
              </FormulaBox>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <FormulaCard
                  title="正弦"
                  formula={String.raw`\sin\alpha=\frac{y}{r}`}
                />

                <FormulaCard
                  title="余弦"
                  formula={String.raw`\cos\alpha=\frac{x}{r}`}
                />

                <FormulaCard
                  title="正切"
                  formula={String.raw`\tan\alpha=\frac{y}{x}`}
                  note="x ≠ 0"
                />
              </div>
            </KnowledgeCard>
          </div>
        </section>

        {/* 例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="03"
            title="利用坐标求三角函数值"
            description="已知角终边上的一点，就可以直接求三角函数值。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 1"
              question="角 α 的终边经过点 P(3，4)，求 sin α、cos α 和 tan α。"
            >
              <p className="text-sm leading-7 text-slate-600">
                先求点 P 到原点的距离：
              </p>

              <BlockMath
                math={String.raw`r=\sqrt{3^2+4^2}=5`}
              />

              <BlockMath
                math={String.raw`\sin\alpha=\frac45`}
              />

              <BlockMath
                math={String.raw`\cos\alpha=\frac35`}
              />

              <BlockMath
                math={String.raw`\tan\alpha=\frac43`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 象限符号 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="04"
            title="三角函数值的符号"
            description="三角函数值的正负，直接由终边所在象限决定。"
          />

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <SignDiagram />
            </div>

            <div className="space-y-4">
              <SignCard
                title="第一象限"
                sin="正"
                cos="正"
                tan="正"
              />

              <SignCard
                title="第二象限"
                sin="正"
                cos="负"
                tan="负"
              />

              <SignCard
                title="第三象限"
                sin="负"
                cos="负"
                tan="正"
              />

              <SignCard
                title="第四象限"
                sin="负"
                cos="正"
                tan="负"
              />
            </div>
          </div>
        </section>

        {/* 符号口诀 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="05"
            title="快速记忆象限符号"
            description="不需要死记整张表，只要理解坐标符号即可。"
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <MemoryCard
              title="sin 看 y"
              text="纵坐标为正，sin 为正；纵坐标为负，sin 为负。"
            />

            <MemoryCard
              title="cos 看 x"
              text="横坐标为正，cos 为正；横坐标为负，cos 为负。"
            />

            <MemoryCard
              title="tan 看 y/x"
              text="x、y 同号时 tan 为正，异号时 tan 为负。"
            />
          </div>
        </section>

        {/* 特殊角 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="06"
            title="常用特殊角的三角函数值"
            description="0°、30°、45°、60°、90° 的值需要熟练掌握。"
          />

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[700px] border-collapse text-center text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-4 font-semibold text-slate-700">
                    角
                  </th>

                  <th className="px-4 py-4 font-semibold text-slate-700">
                    0°
                  </th>

                  <th className="px-4 py-4 font-semibold text-slate-700">
                    30°
                  </th>

                  <th className="px-4 py-4 font-semibold text-slate-700">
                    45°
                  </th>

                  <th className="px-4 py-4 font-semibold text-slate-700">
                    60°
                  </th>

                  <th className="px-4 py-4 font-semibold text-slate-700">
                    90°
                  </th>
                </tr>
              </thead>

              <tbody>
                <SpecialRow
                  name="sin α"
                  values={[
                    "0",
                    "1/2",
                    "√2/2",
                    "√3/2",
                    "1",
                  ]}
                />

                <SpecialRow
                  name="cos α"
                  values={[
                    "1",
                    "√3/2",
                    "√2/2",
                    "1/2",
                    "0",
                  ]}
                />

                <SpecialRow
                  name="tan α"
                  values={[
                    "0",
                    "√3/3",
                    "1",
                    "√3",
                    "不存在",
                  ]}
                />
              </tbody>
            </table>
          </div>

          <NoticeBox title="为什么 tan 90° 不存在？">
            tan α=sin α/cos α，而 cos 90°=0，
            分母不能为 0，所以 tan 90° 没有定义。
          </NoticeBox>
        </section>

        {/* 特殊角技巧 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="07"
            title="特殊角数值的快速记忆"
            description="正弦和余弦的五个基本值可以按照规律记忆。"
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <KnowledgeCard title="sin 的规律">
              <BlockMath
                math={String.raw`\sin0^\circ=\frac{\sqrt0}{2}`}
              />

              <BlockMath
                math={String.raw`\sin30^\circ=\frac{\sqrt1}{2}`}
              />

              <BlockMath
                math={String.raw`\sin45^\circ=\frac{\sqrt2}{2}`}
              />

              <BlockMath
                math={String.raw`\sin60^\circ=\frac{\sqrt3}{2}`}
              />

              <BlockMath
                math={String.raw`\sin90^\circ=\frac{\sqrt4}{2}`}
              />
            </KnowledgeCard>

            <KnowledgeCard title="cos 的规律">
              <p>
                cos 的顺序与 sin 正好相反：
              </p>

              <RelationBox>{mathText("√4/2 → √3/2 → √2/2 → √1/2 → √0/2")}</RelationBox>
            </KnowledgeCard>
          </div>
        </section>

        {/* 平方关系 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="08"
            title="同角三角函数的平方关系"
            description="这是高中三角函数中最基础、最常用的恒等关系。"
          />

          <div className="mt-7">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center">
              <BlockMath
                math={String.raw`\sin^2\alpha+\cos^2\alpha=1`}
              />
            </div>
          </div>

          <div className="mt-5">
            <KnowledgeCard title="为什么成立？">
              <p>
                单位圆上点 P 的坐标为：
              </p>

              <BlockMath
                math={String.raw`P(\cos\alpha,\sin\alpha)`}
              />

              <p>
                单位圆的方程为：
              </p>

              <BlockMath
                math={String.raw`x^2+y^2=1`}
              />

              <p>
                将 x=cos α、y=sin α 代入即可得到平方关系。
              </p>
            </KnowledgeCard>
          </div>
        </section>

        {/* 平方关系例题 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="09"
            title="利用平方关系求三角函数值"
            description="已知 sin 或 cos 中的一个，可以求另一个的大小。"
          />

          <div className="mt-7">
            <ExampleCard
              title="例 2"
              question="已知 sin α=3/5，且 α 是第一象限角，求 cos α。"
            >
              <BlockMath
                math={String.raw`\sin^2\alpha+\cos^2\alpha=1`}
              />

              <BlockMath
                math={String.raw`\left(\frac35\right)^2+\cos^2\alpha=1`}
              />

              <BlockMath
                math={String.raw`\cos^2\alpha=\frac{16}{25}`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                因为 α 是第一象限角，所以 cos α 为正。
              </p>

              <BlockMath
                math={String.raw`\cos\alpha=\frac45`}
              />
            </ExampleCard>
          </div>

          <NoticeBox title="注意">
            由平方关系开平方时会出现正负两个可能，
            最终符号必须结合角所在象限判断。
          </NoticeBox>
        </section>

        {/* 商数关系 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="10"
            title="同角三角函数的商数关系"
            description="正切可以用正弦和余弦的商表示。"
          />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center">
            <BlockMath
              math={String.raw`\tan\alpha=\frac{\sin\alpha}{\cos\alpha}`}
            />

            <p className="mt-3 text-sm text-slate-500">
              条件：cos α ≠ 0
            </p>
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 3"
              question="已知 sin α=−3/5，cos α=−4/5，求 tan α。"
            >
              <BlockMath
                math={String.raw`\tan\alpha=\frac{\sin\alpha}{\cos\alpha}`}
              />

              <BlockMath
                math={String.raw`=\frac{-\frac35}{-\frac45}`}
              />

              <BlockMath
                math={String.raw`=\frac34`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                sin α 和 cos α 都为负，
                因此 tan α 为正，这也符合第三象限的符号规律。
              </p>
            </ExampleCard>
          </div>
        </section>

        {/* 综合求值 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="11"
            title="已知一个三角函数值求其他值"
            description="一般按照“平方关系 → 判断符号 → 商数关系”的顺序处理。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard
              number="1"
              title="使用平方关系"
              description="先求出另一个三角函数值的绝对值。"
            />

            <StepCard
              number="2"
              title="判断所在象限"
              description="根据象限决定最终取正还是取负。"
            />

            <StepCard
              number="3"
              title="计算正切"
              description="再利用 tan α=sin α/cos α。"
            />
          </div>

          <div className="mt-5">
            <ExampleCard
              title="例 4"
              question="已知 cos α=−3/5，α 是第二象限角，求 sin α 和 tan α。"
            >
              <BlockMath
                math={String.raw`\sin^2\alpha=1-\cos^2\alpha`}
              />

              <BlockMath
                math={String.raw`=1-\frac9{25}=\frac{16}{25}`}
              />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                第二象限中 sin α 为正，所以：
              </p>

              <BlockMath
                math={String.raw`\sin\alpha=\frac45`}
              />

              <BlockMath
                math={String.raw`\tan\alpha=\frac{\frac45}{-\frac35}=-\frac43`}
              />
            </ExampleCard>
          </div>
        </section>

        {/* 定义域提醒 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="12"
            title="三种三角函数的定义情况"
            description="sin 和 cos 对任意角都有定义，但 tan 并不是处处有定义。"
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <DefinitionCard
              title="sin α"
              status="始终有定义"
              description="单位圆上的纵坐标始终存在。"
            />

            <DefinitionCard
              title="cos α"
              status="始终有定义"
              description="单位圆上的横坐标始终存在。"
            />

            <DefinitionCard
              title="tan α"
              status="cos α ≠ 0 时有定义"
              description="因为 tan α=sin α/cos α。"
            />
          </div>
        </section>

        {/* 方法 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="METHOD"
            title="本节解题思路"
            description="大多数基础题都围绕坐标、象限和两条基本关系展开。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StepCard
              number="1"
              title="看到坐标"
              description="先计算 r，再代入三角函数定义。"
            />

            <StepCard
              number="2"
              title="看到象限"
              description="先判断 sin、cos、tan 的符号。"
            />

            <StepCard
              number="3"
              title="已知 sin 或 cos"
              description="优先想到 sin²α+cos²α=1。"
            />

            <StepCard
              number="4"
              title="要求 tan"
              description="利用 tan α=sin α/cos α。"
            />
          </div>
        </section>

        {/* 易错 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="COMMON MISTAKES"
            title="本节常见错误"
            description="尤其注意坐标、符号以及开平方后的正负选择。"
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <MistakeCard
              number="01"
              title="把 sin 和 cos 的坐标弄反"
              wrong="sin α 看横坐标"
              correct="cos α 看横坐标，sin α 看纵坐标"
            />

            <MistakeCard
              number="02"
              title="只看绝对值不看象限"
              wrong="cos²α=16/25，所以 cos α=4/5"
              correct="还要根据所在象限判断正负"
            />

            <MistakeCard
              number="03"
              title="认为 tan 对所有角都有定义"
              wrong="tan 90° 可以直接计算"
              correct="cos α=0 时 tan α 没有定义"
            />

            <MistakeCard
              number="04"
              title="正切公式写反"
              wrong="tan α=cos α/sin α"
              correct="tan α=sin α/cos α"
            />
          </div>
        </section>

        {/* 总结 */}
        <section className="border-t border-slate-200 py-12">
          <SectionTitle
            label="SUMMARY"
            title="本节知识总结"
            description="这几条关系将贯穿整个三角函数章节。"
          />

          <div className="mt-7 space-y-3">
            <SummaryText
              title="单位圆"
              text="P(cos α，sin α)"
            />

            <SummaryText
              title="符号判断"
              text="sin 看纵坐标，cos 看横坐标，tan 看横纵坐标是否同号。"
            />

            <SummaryMath
              title="平方关系"
              formula={String.raw`\sin^2\alpha+\cos^2\alpha=1`}
            />

            <SummaryMath
              title="商数关系"
              formula={String.raw`\tan\alpha=\frac{\sin\alpha}{\cos\alpha}`}
            />

            <SummaryText
              title="正切条件"
              text="cos α ≠ 0 时，tan α 才有定义。"
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
            description="完成 3 道题，检查三角函数定义、象限符号和基本关系。"
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
                  03 · 诱导公式
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  下一节将利用单位圆和三角函数定义，
                  研究 α 与 −α、π±α、2π−α 等角之间的三角函数关系。
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
  note,
}: {
  title: string;
  formula: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-center">
      <p className="text-xs font-medium text-slate-400">
        {title}
      </p>

      <div className="mt-2 overflow-x-auto">
        <BlockMath math={formula} />
      </div>

      {note && (
        <p className="mt-1 text-xs text-slate-400">
          {mathText(note)}
        </p>
      )}
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
    <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/50 p-5">
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

function SignCard({
  title,
  sin,
  cos,
  tan,
}: {
  title: string;
  sin: string;
  cos: string;
  tan: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <span className="rounded-md bg-slate-50 px-3 py-1.5 text-slate-600">
          sin：{sin}
        </span>

        <span className="rounded-md bg-slate-50 px-3 py-1.5 text-slate-600">
          cos：{cos}
        </span>

        <span className="rounded-md bg-slate-50 px-3 py-1.5 text-slate-600">
          tan：{tan}
        </span>
      </div>
    </div>
  );
}

function MemoryCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {mathText(text)}
      </p>
    </div>
  );
}

function SpecialRow({
  name,
  values,
}: {
  name: string;
  values: string[];
}) {
  return (
    <tr className="border-b border-slate-100 last:border-b-0">
      <td className="px-4 py-4 font-semibold text-blue-600">
        {name}
      </td>

      {values.map((value, index) => (
        <td
          key={`${name}-${index}`}
          className="px-4 py-4 text-slate-700"
        >
          {mathText(value)}
        </td>
      ))}
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
        {mathText(description)}
      </p>
    </div>
  );
}

function DefinitionCard({
  title,
  status,
  description,
}: {
  title: string;
  status: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium text-blue-600">
        {mathText(status)}
      </p>

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

function UnitCircleDiagram() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        单位圆定义
      </p>

      <svg
        viewBox="0 0 420 360"
        className="mx-auto h-auto w-full max-w-[420px]"
        role="img"
        aria-label="单位圆三角函数定义示意图"
      >
        <line
          x1="35"
          y1="180"
          x2="385"
          y2="180"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <line
          x1="210"
          y1="20"
          x2="210"
          y2="340"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300"
        />

        <circle
          cx="210"
          cy="180"
          r="115"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300"
        />

        <line
          x1="210"
          y1="180"
          x2="300"
          y2="108"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-500"
        />

        <line
          x1="300"
          y1="108"
          x2="300"
          y2="180"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 5"
          className="text-slate-300"
        />

        <line
          x1="210"
          y1="108"
          x2="300"
          y2="108"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 5"
          className="text-slate-300"
        />

        <circle
          cx="300"
          cy="108"
          r="5"
          fill="currentColor"
          className="text-blue-600"
        />

        <path
          d="M 260 180 A 50 50 0 0 0 249 149"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-amber-500"
        />

        <text
          x="267"
          y="154"
          className="fill-amber-600 text-[14px]"
        >
          α
        </text>

        <text
          x="308"
          y="102"
          className="fill-blue-600 text-[14px]"
        >
          P(cos α, sin α)
        </text>

        <text
          x="255"
          y="202"
          className="fill-slate-500 text-[13px]"
        >
          cos α
        </text>

        <text
          x="305"
          y="148"
          className="fill-slate-500 text-[13px]"
        >
          sin α
        </text>
      </svg>
    </div>
  );
}

function SignDiagram() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-slate-900">
        象限符号
      </p>

      <svg
        viewBox="0 0 420 360"
        className="mx-auto h-auto w-full max-w-[420px]"
        role="img"
        aria-label="三角函数象限符号示意图"
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

        <text
          x="270"
          y="90"
          className="fill-slate-700 text-[14px]"
        >
          sin +
        </text>

        <text
          x="270"
          y="112"
          className="fill-slate-700 text-[14px]"
        >
          cos +
        </text>

        <text
          x="270"
          y="134"
          className="fill-slate-700 text-[14px]"
        >
          tan +
        </text>

        <text
          x="95"
          y="90"
          className="fill-slate-700 text-[14px]"
        >
          sin +
        </text>

        <text
          x="95"
          y="112"
          className="fill-slate-700 text-[14px]"
        >
          cos −
        </text>

        <text
          x="95"
          y="134"
          className="fill-slate-700 text-[14px]"
        >
          tan −
        </text>

        <text
          x="95"
          y="240"
          className="fill-slate-700 text-[14px]"
        >
          sin −
        </text>

        <text
          x="95"
          y="262"
          className="fill-slate-700 text-[14px]"
        >
          cos −
        </text>

        <text
          x="95"
          y="284"
          className="fill-slate-700 text-[14px]"
        >
          tan +
        </text>

        <text
          x="270"
          y="240"
          className="fill-slate-700 text-[14px]"
        >
          sin −
        </text>

        <text
          x="270"
          y="262"
          className="fill-slate-700 text-[14px]"
        >
          cos +
        </text>

        <text
          x="270"
          y="284"
          className="fill-slate-700 text-[14px]"
        >
          tan −
        </text>
      </svg>
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