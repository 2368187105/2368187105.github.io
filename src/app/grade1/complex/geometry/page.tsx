
"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   本节互动练习
========================= */

const exercises = [
  {
    title: "复数对应的点",
    question:
      "复数 z=-2+3i 在复平面内对应的点是：",
    formula: String.raw`z=-2+3i`,
    options: [
      String.raw`(-2,3)`,
      String.raw`(2,-3)`,
      String.raw`(3,-2)`,
      String.raw`(-3,2)`,
    ],
    answer: 0,
    explanation:
      "复数 z=a+bi 在复平面内对应点 Z(a,b)。这里实部为 -2，虚部为 3，所以对应点 (-2,3)。",
  },
  {
    title: "复数的模",
    question: "下列复数的模等于多少？",
    formula: String.raw`z=3-4i`,
    options: [
      String.raw`7`,
      String.raw`1`,
      String.raw`5`,
      String.raw`\sqrt{7}`,
    ],
    answer: 2,
    explanation:
      "复数的模等于对应点到原点的距离，因此 |z|=√(3²+(-4)²)=√25=5。",
  },
  {
    title: "共轭复数",
    question: "下列复数的共轭复数是：",
    formula: String.raw`z=-1+2i`,
    options: [
      String.raw`1-2i`,
      String.raw`-1-2i`,
      String.raw`1+2i`,
      String.raw`-2+i`,
    ],
    answer: 1,
    explanation:
      "共轭复数的实部相同、虚部互为相反数。因此 -1+2i 的共轭复数为 -1-2i。",
  },
];

/* =========================
   复平面绘图组件
   使用 SVG 绘制坐标轴
========================= */

function ComplexPlane({
  real,
  imaginary,
  showConjugate = false,
}: {
  real: number;
  imaginary: number;
  showConjugate?: boolean;
}) {
  const originX = 240;
  const originY = 160;
  const unit = 42;

  const pointX = originX + real * unit;
  const pointY = originY - imaginary * unit;

  const conjugateX = pointX;
  const conjugateY = originY + imaginary * unit;

  const xTicks = [-4, -3, -2, -1, 1, 2, 3, 4];
  const yTicks = [-3, -2, -1, 1, 2, 3];

  const numberText =
    imaginary >= 0
      ? `${real}+${imaginary}i`
      : `${real}${imaginary}i`;

  const conjugateText =
    imaginary >= 0
      ? `${real}-${imaginary}i`
      : `${real}+${-imaginary}i`;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <svg
        viewBox="0 0 480 320"
        className="mx-auto h-auto w-full max-w-[570px]"
        role="img"
        aria-label={`复平面示意图，复数 ${numberText} 对应点 (${real}, ${imaginary})`}
      >
        {/* 背景网格 */}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map(
          (n) => (
            <line
              key={`vertical-${n}`}
              x1={originX + n * unit}
              y1="20"
              x2={originX + n * unit}
              y2="300"
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {[-3, -2, -1, 0, 1, 2, 3].map(
          (n) => (
            <line
              key={`horizontal-${n}`}
              x1="35"
              y1={originY - n * unit}
              x2="448"
              y2={originY - n * unit}
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {/* 实轴 */}
        <line
          x1="30"
          y1={originY}
          x2="450"
          y2={originY}
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="455,160 443,154 443,166"
          fill="#64748b"
        />

        {/* 虚轴 */}
        <line
          x1={originX}
          y1="302"
          x2={originX}
          y2="17"
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="240,12 234,24 246,24"
          fill="#64748b"
        />

        {/* 实轴刻度 */}
        {xTicks.map((n) => (
          <g key={`x-${n}`}>
            <line
              x1={originX + n * unit}
              y1={originY - 4}
              x2={originX + n * unit}
              y2={originY + 4}
              stroke="#94a3b8"
            />

            <text
              x={originX + n * unit}
              y={originY + 19}
              textAnchor="middle"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          </g>
        ))}

        {/* 虚轴刻度 */}
        {yTicks.map((n) => (
          <g key={`y-${n}`}>
            <line
              x1={originX - 4}
              y1={originY - n * unit}
              x2={originX + 4}
              y2={originY - n * unit}
              stroke="#94a3b8"
            />

            <text
              x={originX - 14}
              y={originY - n * unit + 4}
              textAnchor="end"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          </g>
        ))}

        {/* 坐标轴标记 */}
        <text
          x={originX - 12}
          y={originY + 18}
          fontSize="12"
          fill="#64748b"
        >
          O
        </text>

        <text
          x="420"
          y="148"
          fontSize="12"
          fill="#475569"
        >
          实轴
        </text>

        <text
          x="252"
          y="25"
          fontSize="12"
          fill="#475569"
        >
          虚轴
        </text>

        {/* 共轭复数连线 */}
        {showConjugate && (
          <>
            <line
              x1={conjugateX}
              y1={originY}
              x2={conjugateX}
              y2={conjugateY}
              stroke="#10b981"
              strokeDasharray="5 5"
              strokeWidth="1.5"
            />

            <line
              x1={originX}
              y1={originY}
              x2={conjugateX}
              y2={conjugateY}
              stroke="#10b981"
              strokeWidth="2"
            />

            <circle
              cx={conjugateX}
              cy={conjugateY}
              r="6"
              fill="#10b981"
              stroke="white"
              strokeWidth="2"
            />

            <text
              x={conjugateX + 12}
              y={conjugateY + 6}
              fontSize="13"
              fontWeight="600"
              fill="#059669"
            >
              Z̅
            </text>
          </>
        )}

        {/* 当前复数的辅助线 */}
        <line
          x1={pointX}
          y1={pointY}
          x2={pointX}
          y2={originY}
          stroke="#60a5fa"
          strokeDasharray="5 5"
          strokeWidth="1.5"
        />

        <line
          x1={pointX}
          y1={pointY}
          x2={originX}
          y2={pointY}
          stroke="#60a5fa"
          strokeDasharray="5 5"
          strokeWidth="1.5"
        />

        {/* 原点到复数对应点的向量 */}
        <line
          x1={originX}
          y1={originY}
          x2={pointX}
          y2={pointY}
          stroke="#2563eb"
          strokeWidth="2.5"
        />

        {/* 复数对应点 */}
        <circle
          cx={pointX}
          cy={pointY}
          r="6"
          fill="#2563eb"
          stroke="white"
          strokeWidth="2"
        />

        <text
          x={pointX + 12}
          y={pointY - 10}
          fontSize="13"
          fontWeight="600"
          fill="#1d4ed8"
        >
          Z
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          {`z = ${numberText}`}
        </span>

        {showConjugate && (
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {`共轭复数 = ${conjugateText}`}
          </span>
        )}
      </div>
    </div>
  );
}

/* =========================
   页面主体
========================= */

export default function ComplexGeometryPage() {
  const [answers, setAnswers] = useState<
    Record<number, number>
  >({});

  const completed = Object.keys(answers).length;

  const correctCount = exercises.filter(
    (exercise, index) =>
      answers[index] === exercise.answer
  ).length;

  function chooseAnswer(
    exerciseIndex: number,
    optionIndex: number
  ) {
    if (answers[exerciseIndex] !== undefined) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [exerciseIndex]: optionIndex,
    }));
  }

  function resetExercises() {
    setAnswers({});
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            首页
          </Link>
          <span>/</span>

          <Link
            href="/grade1"
            className="hover:text-blue-600"
          >
            高一数学
          </Link>
          <span>/</span>
          <span>复数</span>
          <span>/</span>

          <span className="text-slate-700">
            第2节
          </span>
        </div>

        {/* 课程标题 */}
        <section className="border-b border-slate-200 pb-10 pt-10">
          <p className="text-sm font-medium text-blue-600">
            CHAPTER 07 · LESSON 02
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            复数的几何意义
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            上一节我们学习了复数的代数形式。
            这一节将复数与平面上的点建立对应关系，
            通过复平面直观理解复数的位置、
            模以及共轭复数的几何性质。
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "复平面",
              "复数与点",
              "复数与向量",
              "复数的模",
              "共轭复数",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 01 学习目标 */}
        <section className="py-10">
          <SectionHeading
            number="01"
            title="学习目标"
            description="本节重点掌握复数在平面内的几何表示。"
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <GoalCard
              number="1"
              text="理解复平面，能够区分实轴、虚轴。"
            />

            <GoalCard
              number="2"
              text="掌握复数与复平面内点、向量的对应关系。"
            />

            <GoalCard
              number="3"
              text="掌握复数模的定义及计算公式。"
            />

            <GoalCard
              number="4"
              text="理解共轭复数及其几何意义。"
            />
          </div>
        </section>

        {/* 02 复平面 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="02"
            title="复平面的概念"
            description="将复数放到平面直角坐标系中，就形成了复平面。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              复平面是用来表示复数的平面直角坐标系。
              在复平面内，横轴称为
              <strong className="text-slate-900">
                实轴
              </strong>
              ，纵轴称为
              <strong className="text-slate-900">
                虚轴
              </strong>
              。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <ConceptCard
                title="实轴"
                formula={String.raw`x=a`}
                description="横轴表示复数的实部。实数对应的点全部位于实轴上。"
              />

              <ConceptCard
                title="虚轴"
                formula={String.raw`y=b`}
                description="纵轴表示复数的虚部。纯虚数对应虚轴上除原点外的点。"
              />
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
              <p className="text-sm font-semibold text-blue-700">
                特别注意
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                复平面的原点对应复数 0。
                原点同时位于实轴和虚轴上，
                但复数 0 是实数，不是纯虚数。
              </p>
            </div>
          </div>
        </section>

        {/* 03 复数与点 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="03"
            title="复数与平面内的点"
            description="每一个复数，都可以唯一对应复平面上的一个点。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              对于复数：
            </p>

            <KeyFormula
              formula={String.raw`z=a+bi\quad(a,b\in\mathbb{R})`}
              description="对应复平面上的点 Z(a,b)。"
            />

            <ComplexPlane real={3} imaginary={2} />

            <p className="text-sm leading-8 text-slate-600">
              观察上图，复数
              {" "}
              <InlineMath
                math={String.raw`z=3+2i`}
              />
              {" "}
              的实部为 3，虚部为 2，因此对应点
              {" "}
              <InlineMath
                math={String.raw`Z(3,2)`}
              />
              。
            </p>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-semibold text-slate-900">
                复数与点的一一对应
              </h3>

              <div className="mt-4 overflow-x-auto">
                <BlockMath
                  math={String.raw`z=a+bi\quad\longleftrightarrow\quad Z(a,b)`}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                知道复数可以确定对应点；
                反过来，知道点的坐标，也能确定对应复数。
              </p>
            </div>

            <ExampleCard
              number="例题 1"
              title="确定复数对应的点"
              question="复数 z=-3+2i 在复平面内对应哪个点？"
              formula={String.raw`z=-3+2i`}
              steps={[
                "复数的实部为 -3，虚部为 2。",
                "对应点的横坐标是实部，纵坐标是虚部。",
                "因此对应点为 Z(-3,2)，位于第二象限。",
              ]}
              answer={String.raw`Z(-3,2)`}
            />
          </div>
        </section>

        {/* 04 复数与向量 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="04"
            title="复数与平面向量"
            description="复数也能用以原点为起点的向量表示。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              如果复数 z 对应复平面上的点 Z(a,b)，
              那么它也对应从原点 O 指向点 Z 的向量。
            </p>

            <KeyFormula
              formula={String.raw`z=a+bi\quad\longleftrightarrow\quad\overrightarrow{OZ}=(a,b)`}
              description="复数、复平面内的点，以及以原点为起点的向量可以相互对应。"
            />

            <p className="text-sm leading-8 text-slate-600">
              例如，复数 3+2i 对应点 Z(3,2)，
              也对应从原点 O 指向 Z(3,2) 的向量。
              图中蓝色线段表示该向量的长度及方向。
            </p>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                易错提醒
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                复数本身是数，而对应的向量是几何对象。
                二者之间存在对应关系，
                不应将复数直接理解为普通实数的大小比较。
              </p>
            </div>
          </div>
        </section>

        {/* 05 复数的模 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="05"
            title="复数的模"
            description="复数的模，就是复数对应点到原点的距离。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              对于复数 z=a+bi，
              对应点为 Z(a,b)。
              根据勾股定理，点 Z 到原点 O 的距离为：
            </p>

            <KeyFormula
              formula={String.raw`|z|=\sqrt{a^2+b^2}`}
              description="复数的模一定是非负实数。"
            />

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-900">
                几何意义
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                复数的模表示点 Z 到原点 O 的距离，
                也等于对应向量的长度。
              </p>

              <div className="mt-4 overflow-x-auto">
                <BlockMath
                  math={String.raw`|z|=|\overrightarrow{OZ}|=OZ`}
                />
              </div>
            </div>

            <ExampleCard
              number="例题 2"
              title="计算复数的模"
              question="已知复数 z=3-4i，求 |z|。"
              formula={String.raw`z=3-4i`}
              steps={[
                "复数的实部为 3，虚部为 -4。",
                "代入模长公式：|z|=√(3²+(-4)²)。",
                "计算得到 |z|=√25=5。",
              ]}
              answer={String.raw`|z|=5`}
            />

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
              <p className="text-sm font-semibold text-blue-700">
                延伸理解
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                当复数的模固定时，
                它在复平面内对应的点到原点距离固定。
                因此满足
                {" "}
                <InlineMath
                  math={String.raw`|z|=r`}
                />
                {" "}
                的复数（r 为正常数），对应的点构成
                以原点为圆心、r 为半径的圆。
              </p>
            </div>
          </div>
        </section>

        {/* 06 共轭复数 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="06"
            title="共轭复数"
            description="共轭复数对应的两个点关于实轴对称。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              对于复数 z=a+bi，
              保持实部不变，将虚部变为相反数，
              得到它的共轭复数。
            </p>

            <KeyFormula
              formula={String.raw`\overline{z}=a-bi`}
              description="z 与其共轭复数的实部相同，虚部互为相反数。"
            />

            <ComplexPlane
              real={3}
              imaginary={2}
              showConjugate
            />

            <p className="text-sm leading-8 text-slate-600">
              图中蓝点表示 3+2i，
              绿点表示其共轭复数 3-2i。
              两个点的横坐标相同，
              纵坐标互为相反数，
              因此关于实轴对称。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <ConceptCard
                title="关于实轴对称"
                formula={String.raw`(a,b)\longleftrightarrow(a,-b)`}
                description="复数与其共轭复数对应点关于实轴对称。"
              />

              <ConceptCard
                title="模相等"
                formula={String.raw`|z|=|\overline{z}|`}
                description="共轭复数到原点的距离相等。"
              />
            </div>

            <ExampleCard
              number="例题 3"
              title="求共轭复数与模"
              question="已知 z=-2+3i，求它的共轭复数及共轭复数的模。"
              formula={String.raw`z=-2+3i`}
              steps={[
                "保持实部 -2 不变，将虚部 3 变成 -3。",
                "所以共轭复数为 -2-3i。",
                "根据模长公式，模为 √((-2)²+(-3)²)=√13。",
              ]}
              answer={String.raw`\overline{z}=-2-3i,\qquad|\overline{z}|=\sqrt{13}`}
            />
          </div>
        </section>

        {/* 07 知识总结 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="07"
            title="本节知识总结"
            description="掌握四条核心公式与几何对应关系。"
          />

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              {
                title: "复数与点",
                formula: String.raw`z=a+bi\longleftrightarrow Z(a,b)`,
              },
              {
                title: "复数与向量",
                formula: String.raw`z=a+bi\longleftrightarrow\overrightarrow{OZ}=(a,b)`,
              },
              {
                title: "复数的模",
                formula: String.raw`|z|=\sqrt{a^2+b^2}`,
              },
              {
                title: "共轭复数",
                formula: String.raw`\overline{z}=a-bi`,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index === 3
                    ? ""
                    : "border-b border-slate-100"
                }`}
              >
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>

                <div className="max-w-full overflow-x-auto">
                  <BlockMath math={item.formula} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 08 随堂练习 */}
        <section className="border-t border-slate-200 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-blue-600">
                PRACTICE
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                随堂练习
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                共 3 道选择题。
                选中答案后立即判断，并展示解析。
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600">
              已完成 {completed} / {exercises.length}
            </span>
          </div>

          <div className="mt-7 space-y-5">
            {exercises.map((exercise, index) => {
              const chosen = answers[index];
              const answered = chosen !== undefined;
              const isCorrect = chosen === exercise.answer;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-blue-600">
                      第 {index + 1} 题
                    </p>

                    <p className="text-xs text-slate-400">
                      {exercise.title}
                    </p>
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-8 text-slate-900">
                    {exercise.question}
                  </h3>

                  <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 px-3 py-4">
                    <BlockMath math={exercise.formula} />
                  </div>

                  <div className="space-y-3">
                    {exercise.options.map(
                      (option, optionIndex) => {
                        const selected =
                          chosen === optionIndex;

                        const correct =
                          answered &&
                          optionIndex === exercise.answer;

                        const wrong =
                          answered &&
                          selected &&
                          optionIndex !== exercise.answer;

                        return (
                          <button
                            key={optionIndex}
                            type="button"
                            disabled={answered}
                            onClick={() =>
                              chooseAnswer(index, optionIndex)
                            }
                            className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition ${
                              correct
                                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                : wrong
                                  ? "border-red-300 bg-red-50 text-red-600"
                                  : selected
                                    ? "border-blue-300 bg-blue-50"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-semibold">
                              {String.fromCharCode(
                                65 + optionIndex
                              )}
                            </span>

                            <div className="min-w-0 overflow-x-auto text-sm">
                              <InlineMath math={option} />
                            </div>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {answered && (
                    <div
                      className={`mt-5 rounded-xl p-5 ${
                        isCorrect
                          ? "bg-emerald-50"
                          : "bg-red-50"
                      }`}
                    >
                      <p
                        className={`font-semibold ${
                          isCorrect
                            ? "text-emerald-700"
                            : "text-red-600"
                        }`}
                      >
                        {isCorrect
                          ? "回答正确"
                          : "回答错误"}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {exercise.explanation}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {completed === exercises.length && (
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/50 p-6">
              <p className="text-lg font-bold text-slate-900">
                本节练习完成
              </p>

              <p className="mt-3 text-sm text-slate-600">
                答对 {correctCount} / {exercises.length} 题
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${
                      (correctCount / exercises.length) * 100
                    }%`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={resetExercises}
                className="mt-5 rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
              >
                重新练习
              </button>
            </div>
          )}
        </section>

        {/* 底部导航 */}
        <section className="border-t border-slate-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/grade1/complex/concept"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← 上一节：复数的概念
            </Link>

            <span className="text-sm text-slate-400">
              下一节：复数的加法与减法（待开发）
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================
   通用组件
========================= */

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-blue-600">
        SECTION {number}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function GoalCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
        {number}
      </span>

      <p className="text-sm leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

function ConceptCard({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <div className="my-4 overflow-x-auto">
        <BlockMath math={formula} />
      </div>

      <p className="text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function KeyFormula({
  formula,
  description,
}: {
  formula: string;
  description: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-blue-200 bg-blue-50/40 p-6">
      <BlockMath math={formula} />

      <p className="mt-3 text-center text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  question,
  formula,
  steps,
  answer,
}: {
  number: string;
  title: string;
  question: string;
  formula: string;
  steps: string[];
  answer: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-medium text-blue-600">
          {number}
        </p>

        <h3 className="mt-2 font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          {question}
        </p>
      </div>

      <div className="px-6 py-5">
        <div className="overflow-x-auto rounded-lg bg-slate-50 px-3 py-3">
          <BlockMath math={formula} />
        </div>

        <p className="mt-5 text-sm font-semibold text-slate-800">
          解题过程
        </p>

        <div className="mt-3 space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-3 text-sm leading-7 text-slate-600"
            >
              <span className="shrink-0 font-medium text-blue-600">
                {index + 1}.
              </span>

              <p>{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-x-auto border-t border-slate-100 pt-5">
          <p className="text-xs font-semibold text-emerald-600">
            最终答案
          </p>

          <BlockMath math={answer} />
        </div>
      </div>
    </div>
  );
}
