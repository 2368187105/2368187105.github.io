
"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   随堂练习题
========================= */

const exercises = [
  {
    title: "复数加法",
    question: "计算下列两个复数的和。",
    formula: String.raw`(3+2i)+(1-5i)`,
    options: [
      String.raw`4-3i`,
      String.raw`4+7i`,
      String.raw`2-3i`,
      String.raw`3-5i`,
    ],
    answer: 0,
    explanation:
      "实部相加得到 3+1=4，虚部相加得到 2+(-5)=-3，因此结果为 4-3i。",
  },
  {
    title: "复数减法",
    question: "计算下列复数的差。",
    formula: String.raw`(2-3i)-(-1+4i)`,
    options: [
      String.raw`1+i`,
      String.raw`3-7i`,
      String.raw`3+i`,
      String.raw`1-7i`,
    ],
    answer: 1,
    explanation:
      "去括号得到 2-3i+1-4i，合并实部与虚部，结果为 3-7i。注意减号需要作用于第二个复数的每一项。",
  },
  {
    title: "复数相等与加法",
    question:
      "已知 x、y 为实数，两个复数相加后满足下式，求 x、y。",
    formula: String.raw`(x+2i)+(3+yi)=5-i`,
    options: [
      String.raw`x=5,\ y=-1`,
      String.raw`x=2,\ y=3`,
      String.raw`x=2,\ y=-3`,
      String.raw`x=8,\ y=-3`,
    ],
    answer: 2,
    explanation:
      "整理左边得到 (x+3)+(2+y)i。由复数相等的条件，x+3=5，2+y=-1，因此 x=2，y=-3。",
  },
];

/* =========================
   复数加法几何示意图

   z1 = 2+i
   z2 = 1+2i
   z1+z2 = 3+3i
========================= */

function ComplexAdditionDiagram() {
  const ox = 120;
  const oy = 270;
  const unit = 60;

  const point = (x: number, y: number) => ({
    x: ox + x * unit,
    y: oy - y * unit,
  });

  const a = point(2, 1);
  const b = point(1, 2);
  const c = point(3, 3);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold text-slate-900">
          复数加法的平行四边形法则
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          蓝色表示第一个复数，绿色表示第二个复数，
          紫色表示它们的和。
        </p>
      </div>

      <svg
        viewBox="0 0 550 335"
        className="mx-auto h-auto w-full max-w-[620px]"
        role="img"
        aria-label="复数 2+i 与 1+2i 相加，结果为 3+3i 的复平面几何示意图"
      >
        {/* 网格 */}
        {[-1, 0, 1, 2, 3, 4, 5, 6].map(
          (n) => (
            <line
              key={`v-${n}`}
              x1={ox + n * unit}
              y1="20"
              x2={ox + n * unit}
              y2="310"
              stroke="#eef2f7"
              strokeWidth="1"
            />
          )
        )}

        {[-1, 0, 1, 2, 3, 4].map((n) => (
          <line
            key={`h-${n}`}
            x1="35"
            y1={oy - n * unit}
            x2="520"
            y2={oy - n * unit}
            stroke="#eef2f7"
            strokeWidth="1"
          />
        ))}

        {/* 坐标轴 */}
        <line
          x1="35"
          y1={oy}
          x2="518"
          y2={oy}
          stroke="#64748b"
          strokeWidth="1.6"
        />

        <polygon
          points="526,270 514,264 514,276"
          fill="#64748b"
        />

        <line
          x1={ox}
          y1="310"
          x2={ox}
          y2="18"
          stroke="#64748b"
          strokeWidth="1.6"
        />

        <polygon
          points="120,10 114,22 126,22"
          fill="#64748b"
        />

        {/* 刻度 */}
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <text
            key={`xt-${n}`}
            x={ox + n * unit}
            y={oy + 21}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="12"
          >
            {n}
          </text>
        ))}

        {[1, 2, 3, 4].map((n) => (
          <text
            key={`yt-${n}`}
            x={ox - 16}
            y={oy - n * unit + 5}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="12"
          >
            {n}
          </text>
        ))}

        <text
          x={ox - 16}
          y={oy + 19}
          fontSize="12"
          fill="#64748b"
        >
          O
        </text>

        <text
          x="480"
          y="257"
          fontSize="12"
          fill="#475569"
        >
          实轴
        </text>

        <text
          x="133"
          y="24"
          fontSize="12"
          fill="#475569"
        >
          虚轴
        </text>

        {/* 平行四边形辅助线 */}
        <line
          x1={a.x}
          y1={a.y}
          x2={c.x}
          y2={c.y}
          stroke="#10b981"
          strokeWidth="1.8"
          strokeDasharray="6 6"
        />

        <line
          x1={b.x}
          y1={b.y}
          x2={c.x}
          y2={c.y}
          stroke="#2563eb"
          strokeWidth="1.8"
          strokeDasharray="6 6"
        />

        {/* 向量箭头定义 */}
        <defs>
          <marker
            id="complex-add-arrow-blue"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path
              d="M0 0 L7 3.5 L0 7 Z"
              fill="#2563eb"
            />
          </marker>

          <marker
            id="complex-add-arrow-green"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path
              d="M0 0 L7 3.5 L0 7 Z"
              fill="#10b981"
            />
          </marker>

          <marker
            id="complex-add-arrow-purple"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path
              d="M0 0 L7 3.5 L0 7 Z"
              fill="#8b5cf6"
            />
          </marker>
        </defs>

        {/* 第一个复数 */}
        <line
          x1={ox}
          y1={oy}
          x2={a.x}
          y2={a.y}
          stroke="#2563eb"
          strokeWidth="3"
          markerEnd="url(#complex-add-arrow-blue)"
        />

        {/* 第二个复数 */}
        <line
          x1={ox}
          y1={oy}
          x2={b.x}
          y2={b.y}
          stroke="#10b981"
          strokeWidth="3"
          markerEnd="url(#complex-add-arrow-green)"
        />

        {/* 相加后的复数 */}
        <line
          x1={ox}
          y1={oy}
          x2={c.x}
          y2={c.y}
          stroke="#8b5cf6"
          strokeWidth="3"
          markerEnd="url(#complex-add-arrow-purple)"
        />

        {/* 点 */}
        <circle
          cx={a.x}
          cy={a.y}
          r="5"
          fill="#2563eb"
        />

        <circle
          cx={b.x}
          cy={b.y}
          r="5"
          fill="#10b981"
        />

        <circle
          cx={c.x}
          cy={c.y}
          r="6"
          fill="#8b5cf6"
          stroke="white"
          strokeWidth="2"
        />

        {/* 标签 */}
        <text
          x={a.x + 12}
          y={a.y + 19}
          fontSize="15"
          fill="#2563eb"
          fontWeight="600"
        >
          z₁
        </text>

        <text
          x={b.x - 26}
          y={b.y - 14}
          fontSize="15"
          fill="#059669"
          fontWeight="600"
        >
          z₂
        </text>

        <text
          x={c.x + 12}
          y={c.y - 12}
          fontSize="15"
          fill="#7c3aed"
          fontWeight="600"
        >
          z₁+z₂
        </text>
      </svg>

      <div className="mt-4 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
        <DiagramLegend
          color="bg-blue-600"
          label="第一个复数"
          formula={String.raw`z_1=2+i`}
        />

        <DiagramLegend
          color="bg-emerald-500"
          label="第二个复数"
          formula={String.raw`z_2=1+2i`}
        />

        <DiagramLegend
          color="bg-violet-500"
          label="相加结果"
          formula={String.raw`z_1+z_2=3+3i`}
        />
      </div>
    </div>
  );
}

function DiagramLegend({
  color,
  label,
  formula,
}: {
  color: string;
  label: string;
  formula: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${color}`}
        />

        <span className="text-xs text-slate-500">
          {label}
        </span>
      </div>

      <div className="mt-2 overflow-x-auto text-sm">
        <InlineMath math={formula} />
      </div>
    </div>
  );
}

/* =========================
   页面主体
========================= */

export default function ComplexAdditionSubtractionPage() {
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
          <Link href="/" className="hover:text-blue-600">
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
            第3节
          </span>
        </div>

        {/* 课程标题 */}
        <section className="border-b border-slate-200 pb-10 pt-10">
          <p className="text-sm font-medium text-blue-600">
            CHAPTER 07 · LESSON 03
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            复数的加法与减法
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            复数不仅可以表示为代数形式，
            还可以像平面向量一样进行加减运算。
            本节通过代数运算法则和几何图形，
            理解复数加减法的基本方法与实际应用。
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "复数加法",
              "复数减法",
              "运算律",
              "几何意义",
              "综合计算",
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
            description="本节重点掌握以下四项内容。"
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <GoalCard
              number="1"
              text="掌握复数加法的代数运算法则。"
            />

            <GoalCard
              number="2"
              text="掌握复数减法的运算法则及去括号方法。"
            />

            <GoalCard
              number="3"
              text="理解复数加法与平面向量加法的关系。"
            />

            <GoalCard
              number="4"
              text="能够解决复数加减法的综合计算问题。"
            />
          </div>
        </section>

        {/* 02 复数加法 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="02"
            title="复数的加法"
            description="实部与实部相加，虚部与虚部相加。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设有两个复数：
            </p>

            <FormulaCard
              formula={String.raw`z_1=a+bi,\qquad z_2=c+di`}
            />

            <p className="text-sm leading-8 text-slate-600">
              根据复数加法的定义，
              将两个复数的实部分别相加，
              虚部分别相加，得到：
            </p>

            <KeyFormula
              formula={String.raw`(a+bi)+(c+di)=(a+c)+(b+d)i`}
              description="复数加法：实部加实部，虚部加虚部。"
            />

            <ExampleCard
              number="例题 1"
              title="复数加法的基本计算"
              question="计算 (2+3i)+(4-5i)。"
              formula={String.raw`(2+3i)+(4-5i)`}
              steps={[
                "先把两个复数的实部分别相加：2+4=6。",
                "再把虚部分别相加：3+(-5)=-2。",
                "将结果写成复数的代数形式，得到 6-2i。",
              ]}
              answer={String.raw`6-2i`}
            />

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
              <p className="text-sm font-semibold text-blue-700">
                计算方法
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                可以暂时把复数中的虚数单位 i
                看成一个需要保留的符号，
                分别合并不含 i 的项与含 i 的项。
                注意最后仍需写成 a+bi 的标准形式。
              </p>
            </div>
          </div>
        </section>

        {/* 03 复数减法 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="03"
            title="复数的减法"
            description="实部与实部相减，虚部与虚部相减。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设两个复数分别为
              {" "}
              <InlineMath
                math={String.raw`z_1=a+bi`}
              />
              {" "}
              和
              {" "}
              <InlineMath
                math={String.raw`z_2=c+di`}
              />
              ，则：
            </p>

            <KeyFormula
              formula={String.raw`(a+bi)-(c+di)=(a-c)+(b-d)i`}
              description="复数减法：对应实部相减，对应虚部相减。"
            />

            <ExampleCard
              number="例题 2"
              title="复数减法的基本计算"
              question="计算 (5+2i)-(3-4i)。"
              formula={String.raw`(5+2i)-(3-4i)`}
              steps={[
                "去掉括号时，第二个括号中的每一项都要改变符号。",
                "原式变成 5+2i-3+4i。",
                "合并实部：5-3=2；合并虚部：2+4=6。",
                "因此最终结果为 2+6i。",
              ]}
              answer={String.raw`2+6i`}
            />

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                易错提醒
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                复数减法最常见的错误是去括号时漏掉负号。
                特别注意：
              </p>

              <div className="mt-4 overflow-x-auto rounded-lg bg-white p-3">
                <BlockMath
                  math={String.raw`-(3-4i)=-3+4i`}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                括号前为减号时，括号内的实部和虚部都必须变号。
              </p>
            </div>
          </div>
        </section>

        {/* 04 运算律 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="04"
            title="复数加法的运算律"
            description="复数的加法满足交换律与结合律。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ConceptCard
              title="交换律"
              formula={String.raw`z_1+z_2=z_2+z_1`}
              description="交换两个复数的加法顺序，结果不变。"
            />

            <ConceptCard
              title="结合律"
              formula={String.raw`(z_1+z_2)+z_3=z_1+(z_2+z_3)`}
              description="三个复数相加时，改变计算的先后顺序不影响结果。"
            />
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">
              复数加法与减法的关系
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              减去一个复数，
              相当于加上这个复数的相反数。
            </p>

            <div className="mt-4 overflow-x-auto">
              <BlockMath
                math={String.raw`z_1-z_2=z_1+(-z_2)`}
              />
            </div>
          </div>
        </section>

        {/* 05 几何意义 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="05"
            title="复数加法的几何意义"
            description="复数加法在复平面内与平面向量加法对应。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              上一节我们学习了复数与平面向量的对应关系。
              两个复数相加，相当于它们对应的平面向量相加。
            </p>

            <KeyFormula
              formula={String.raw`\overrightarrow{OZ_1}+\overrightarrow{OZ_2}=\overrightarrow{OZ}`}
              description="其中 Z 表示复数 z₁+z₂ 对应的点。"
            />

            <ComplexAdditionDiagram />

            <p className="text-sm leading-8 text-slate-600">
              如图所示，复数
              {" "}
              <InlineMath
                math={String.raw`z_1=2+i`}
              />
              {" "}
              与
              {" "}
              <InlineMath
                math={String.raw`z_2=1+2i`}
              />
              {" "}
              分别对应两个平面向量。
              利用平行四边形法则，
              两个向量的和对应复数
              {" "}
              <InlineMath
                math={String.raw`z_1+z_2=3+3i`}
              />
              。
            </p>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                复数减法的几何理解
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                若复平面上的点 A、B
                分别对应复数 z₁、z₂，
                则从 A 指向 B 的向量对应复数 z₂-z₁。
              </p>

              <div className="mt-4 overflow-x-auto">
                <BlockMath
                  math={String.raw`\overrightarrow{AB}\longleftrightarrow z_2-z_1`}
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                这与前面学习的向量坐标计算完全一致：
                终点坐标减去起点坐标。
              </p>
            </div>
          </div>
        </section>

        {/* 06 综合应用 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="06"
            title="复数加减法的综合应用"
            description="将运算法则与复数相等、平面坐标结合起来。"
          />

          <div className="mt-6 space-y-5">
            <ExampleCard
              number="例题 3"
              title="根据复数的和求未知复数"
              question="已知 z₁=2+3i，且 z₁+z₂=5-2i，求 z₂。"
              formula={String.raw`z_1=2+3i,\qquad z_1+z_2=5-2i`}
              steps={[
                "由 z₁+z₂=5-2i，可得 z₂=(5-2i)-z₁。",
                "将 z₁=2+3i 代入，得到 z₂=(5-2i)-(2+3i)。",
                "合并实部与虚部，得到 z₂=3-5i。",
              ]}
              answer={String.raw`z_2=3-5i`}
            />

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                解题思路
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                遇到复数加减法综合题时，
                可以按照以下顺序处理：
                先根据题意列出复数关系式，
                再进行加减运算，
                最后通过比较实部与虚部求出未知量。
              </p>
            </div>
          </div>
        </section>

        {/* 07 知识总结 */}
        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="07"
            title="本节知识总结"
            description="重点记住加减法公式和几何对应关系。"
          />

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              {
                title: "复数加法",
                formula:
                  String.raw`(a+bi)+(c+di)=(a+c)+(b+d)i`,
              },
              {
                title: "复数减法",
                formula:
                  String.raw`(a+bi)-(c+di)=(a-c)+(b-d)i`,
              },
              {
                title: "加法交换律",
                formula:
                  String.raw`z_1+z_2=z_2+z_1`,
              },
              {
                title: "加法结合律",
                formula:
                  String.raw`(z_1+z_2)+z_3=z_1+(z_2+z_3)`,
              },
              {
                title: "复数减法与向量",
                formula:
                  String.raw`\overrightarrow{AB}\longleftrightarrow z_B-z_A`,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index === 4
                    ? ""
                    : "border-b border-slate-100"
                }`}
              >
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>

                <div className="max-w-full overflow-x-auto text-slate-900">
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
                选择答案后立即判断，并显示解析。
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
                      (correctCount / exercises.length) *
                      100
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
              href="/grade1/complex/geometry"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← 上一节：复数的几何意义
            </Link>

            <span className="text-sm text-slate-400">
              下一节：复数的乘法与除法（待开发）
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

function FormulaCard({
  formula,
}: {
  formula: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white px-4 py-5">
      <BlockMath math={formula} />
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
