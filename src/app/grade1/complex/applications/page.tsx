
"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   本节随堂练习
========================= */

const exercises = [
  {
    title: "复数相等与参数",
    question:
      "已知 x、y 都是实数，若下面两个复数相等，求 x、y。",
    formula: String.raw`(x-1)+(y+2)i=3-4i`,
    options: [
      String.raw`x=4,\quad y=-6`,
      String.raw`x=2,\quad y=-2`,
      String.raw`x=4,\quad y=6`,
      String.raw`x=-4,\quad y=-6`,
    ],
    answer: 0,
    explanation:
      "两个复数相等，实部和虚部分别相等。由 x-1=3 得 x=4；由 y+2=-4 得 y=-6。",
  },
  {
    title: "复数乘法综合",
    question: "计算下面两个复数的乘积。",
    formula: String.raw`(1+2i)(2-i)`,
    options: [
      String.raw`4+3i`,
      String.raw`4-3i`,
      String.raw`3+4i`,
      String.raw`3-4i`,
    ],
    answer: 0,
    explanation:
      "展开得 2-i+4i-2i²。因为 i²=-1，所以结果为 2+3i+2=4+3i。",
  },
  {
    title: "复数模的几何意义",
    question:
      "在复平面内，满足下列条件的点组成什么图形？圆心和半径分别是多少？",
    formula: String.raw`|z-(2-i)|=3`,
    options: [
      String.raw`(2,-1),\quad r=3`,
      String.raw`(-2,1),\quad r=3`,
      String.raw`(2,1),\quad r=9`,
      String.raw`(-2,-1),\quad r=3`,
    ],
    answer: 0,
    explanation:
      "复数 2-i 对应点 (2,-1)。|z-(2-i)| 表示点 Z 到点 (2,-1) 的距离，距离恒等于3，因此轨迹是以 (2,-1) 为圆心、半径为3的圆。",
  },
];

/* =========================
   复数距离示意图

   zA = 1+2i
   zB = 4-2i
   |zB-zA| = 5
========================= */

function DistanceDiagram() {
  const originX = 200;
  const originY = 185;
  const unit = 40;

  function point(x: number, y: number) {
    return {
      x: originX + x * unit,
      y: originY - y * unit,
    };
  }

  const a = point(1, 2);
  const b = point(4, -2);
  const corner = point(4, 2);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold text-slate-900">
          复数与复数之间的距离
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          两个复数对应两个点，点之间的距离等于它们的差的模。
        </p>
      </div>

      <svg
        viewBox="0 0 520 350"
        className="mx-auto h-auto w-full max-w-[620px]"
        role="img"
        aria-label="复平面内 A(1,2) 和 B(4,-2) 两点之间距离为5的示意图"
      >
        {/* 网格 */}
        {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map(
          (n) => (
            <line
              key={`v-${n}`}
              x1={originX + n * unit}
              y1="20"
              x2={originX + n * unit}
              y2="325"
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {[-3, -2, -1, 0, 1, 2, 3, 4].map(
          (n) => (
            <line
              key={`h-${n}`}
              x1="35"
              y1={originY - n * unit}
              x2="495"
              y2={originY - n * unit}
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {/* 坐标轴 */}
        <line
          x1="35"
          y1={originY}
          x2="498"
          y2={originY}
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="505,185 493,179 493,191"
          fill="#64748b"
        />

        <line
          x1={originX}
          y1="328"
          x2={originX}
          y2="15"
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="200,8 194,20 206,20"
          fill="#64748b"
        />

        {/* 刻度 */}
        {[-3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(
          (n) => (
            <text
              key={`xt-${n}`}
              x={originX + n * unit}
              y={originY + 18}
              textAnchor="middle"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          )
        )}

        {[-3, -2, -1, 1, 2, 3, 4].map(
          (n) => (
            <text
              key={`yt-${n}`}
              x={originX - 15}
              y={originY - n * unit + 4}
              textAnchor="end"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          )
        )}

        <text
          x={originX - 16}
          y={originY + 18}
          fontSize="12"
          fill="#64748b"
        >
          O
        </text>

        <text
          x="462"
          y="171"
          fontSize="12"
          fill="#475569"
        >
          实轴
        </text>

        <text
          x="213"
          y="25"
          fontSize="12"
          fill="#475569"
        >
          虚轴
        </text>

        {/* 直角三角形辅助线 */}
        <line
          x1={a.x}
          y1={a.y}
          x2={corner.x}
          y2={corner.y}
          stroke="#94a3b8"
          strokeWidth="1.8"
          strokeDasharray="6 5"
        />

        <line
          x1={corner.x}
          y1={corner.y}
          x2={b.x}
          y2={b.y}
          stroke="#94a3b8"
          strokeWidth="1.8"
          strokeDasharray="6 5"
        />

        {/* 距离线 */}
        <line
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="#8b5cf6"
          strokeWidth="3"
        />

        {/* 三角形直角符号 */}
        <path
          d={`M ${corner.x - 12} ${corner.y}
              L ${corner.x - 12} ${corner.y + 12}
              L ${corner.x} ${corner.y + 12}`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
        />

        {/* A点 */}
        <circle
          cx={a.x}
          cy={a.y}
          r="6"
          fill="#2563eb"
          stroke="white"
          strokeWidth="2"
        />

        {/* B点 */}
        <circle
          cx={b.x}
          cy={b.y}
          r="6"
          fill="#10b981"
          stroke="white"
          strokeWidth="2"
        />

        {/* 标签 */}
        <text
          x={a.x - 10}
          y={a.y - 14}
          fontSize="14"
          fontWeight="600"
          fill="#1d4ed8"
          textAnchor="middle"
        >
          A(1,2)
        </text>

        <text
          x={b.x + 11}
          y={b.y + 19}
          fontSize="14"
          fontWeight="600"
          fill="#059669"
        >
          B(4,-2)
        </text>

        <text
          x={(a.x + corner.x) / 2}
          y={a.y - 11}
          fontSize="13"
          textAnchor="middle"
          fill="#64748b"
        >
          3
        </text>

        <text
          x={b.x + 13}
          y={(a.y + b.y) / 2}
          fontSize="13"
          fill="#64748b"
        >
          4
        </text>

        <rect
          x="285"
          y="176"
          width="36"
          height="25"
          rx="8"
          fill="#f5f3ff"
        />

        <text
          x="303"
          y="193"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#7c3aed"
        >
          5
        </text>
      </svg>

      <div className="mt-4 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
        <DiagramLegend
          color="bg-blue-600"
          label="复数 A"
          formula={String.raw`z_A=1+2i`}
        />

        <DiagramLegend
          color="bg-emerald-500"
          label="复数 B"
          formula={String.raw`z_B=4-2i`}
        />

        <DiagramLegend
          color="bg-violet-500"
          label="两点距离"
          formula={String.raw`AB=5`}
        />
      </div>
    </div>
  );
}

/* =========================
   复数轨迹示意图

   |z-(1+i)| = 2
   圆心 C(1,1)，半径2
========================= */

function CircleDiagram() {
  const originX = 230;
  const originY = 205;
  const unit = 50;

  const centerX = originX + unit;
  const centerY = originY - unit;
  const radius = 2 * unit;

  const pointX = centerX + radius;
  const pointY = centerY;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold text-slate-900">
          复数模的轨迹：圆
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          平面上到固定点距离相等的所有点，构成一个圆。
        </p>
      </div>

      <svg
        viewBox="0 0 540 400"
        className="mx-auto h-auto w-full max-w-[620px]"
        role="img"
        aria-label="复平面内以C(1,1)为圆心、半径为2的圆"
      >
        {/* 网格 */}
        {[-3, -2, -1, 0, 1, 2, 3, 4, 5].map(
          (n) => (
            <line
              key={`v-${n}`}
              x1={originX + n * unit}
              y1="20"
              x2={originX + n * unit}
              y2="380"
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {[-3, -2, -1, 0, 1, 2, 3].map(
          (n) => (
            <line
              key={`h-${n}`}
              x1="25"
              y1={originY - n * unit}
              x2="510"
              y2={originY - n * unit}
              stroke="#edf2f7"
              strokeWidth="1"
            />
          )
        )}

        {/* 实轴 */}
        <line
          x1="25"
          y1={originY}
          x2="510"
          y2={originY}
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="518,205 506,199 506,211"
          fill="#64748b"
        />

        {/* 虚轴 */}
        <line
          x1={originX}
          y1="380"
          x2={originX}
          y2="18"
          stroke="#64748b"
          strokeWidth="1.7"
        />

        <polygon
          points="230,10 224,22 236,22"
          fill="#64748b"
        />

        {/* 刻度 */}
        {[-3, -2, -1, 1, 2, 3, 4, 5].map(
          (n) => (
            <text
              key={`xt-${n}`}
              x={originX + n * unit}
              y={originY + 20}
              textAnchor="middle"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          )
        )}

        {[-3, -2, -1, 1, 2, 3].map(
          (n) => (
            <text
              key={`yt-${n}`}
              x={originX - 15}
              y={originY - n * unit + 4}
              textAnchor="end"
              fontSize="11"
              fill="#94a3b8"
            >
              {n}
            </text>
          )
        )}

        <text
          x={originX - 17}
          y={originY + 18}
          fill="#64748b"
          fontSize="12"
        >
          O
        </text>

        <text
          x="475"
          y="191"
          fill="#475569"
          fontSize="12"
        >
          实轴
        </text>

        <text
          x="243"
          y="25"
          fill="#475569"
          fontSize="12"
        >
          虚轴
        </text>

        {/* 圆形轨迹 */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="#eff6ff"
          fillOpacity="0.55"
          stroke="#2563eb"
          strokeWidth="3"
        />

        {/* 半径 */}
        <line
          x1={centerX}
          y1={centerY}
          x2={pointX}
          y2={pointY}
          stroke="#8b5cf6"
          strokeWidth="3"
        />

        {/* 圆心 */}
        <circle
          cx={centerX}
          cy={centerY}
          r="6"
          fill="#10b981"
          stroke="white"
          strokeWidth="2"
        />

        {/* 圆周上一点 */}
        <circle
          cx={pointX}
          cy={pointY}
          r="6"
          fill="#2563eb"
          stroke="white"
          strokeWidth="2"
        />

        <text
          x={centerX - 12}
          y={centerY - 17}
          textAnchor="end"
          fill="#059669"
          fontSize="14"
          fontWeight="600"
        >
          C(1,1)
        </text>

        <text
          x={pointX + 12}
          y={pointY - 12}
          fill="#1d4ed8"
          fontSize="14"
          fontWeight="600"
        >
          P(3,1)
        </text>

        <text
          x={(centerX + pointX) / 2}
          y={centerY - 12}
          textAnchor="middle"
          fill="#7c3aed"
          fontSize="14"
          fontWeight="700"
        >
          r=2
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-5 border-t border-slate-100 pt-5 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          圆心 C(1,1)
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          圆形轨迹
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
          半径 2
        </span>
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

export default function ComplexApplicationsPage() {
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
        {/* =========================
            面包屑
        ========================= */}

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
            第5节
          </span>
        </div>

        {/* =========================
            课程标题
        ========================= */}

        <section className="border-b border-slate-200 pb-10 pt-10">
          <p className="text-sm font-medium text-blue-600">
            CHAPTER 07 · LESSON 05
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            复数的综合应用
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
            本节是复数章节的综合提升课程。
            我们将前面学习的复数相等、四则运算、
            复数的模及几何意义结合起来，
            解决参数计算、复平面距离、
            几何轨迹和方程求解等问题。
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "复数相等",
              "混合运算",
              "复数距离",
              "复数轨迹",
              "复数方程",
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

        {/* =========================
            01 学习目标
        ========================= */}

        <section className="py-10">
          <SectionHeading
            number="01"
            title="学习目标"
            description="本节重点提升复数知识的综合运用能力。"
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <GoalCard
              number="1"
              text="掌握复数相等与实数参数的求解方法。"
            />

            <GoalCard
              number="2"
              text="能够正确完成复数的乘除混合运算。"
            />

            <GoalCard
              number="3"
              text="掌握复数模在距离计算中的应用。"
            />

            <GoalCard
              number="4"
              text="理解复数轨迹，并会求简单方程的复数根。"
            />
          </div>
        </section>

        {/* =========================
            02 核心知识回顾
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="02"
            title="核心知识回顾"
            description="综合题往往需要同时使用多个复数知识点。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ConceptCard
              title="复数的代数形式"
              formula={String.raw`z=a+bi`}
              description="a 是实部，b 是虚部。"
            />

            <ConceptCard
              title="虚数单位"
              formula={String.raw`i^2=-1`}
              description="复数乘方与乘法计算的基础。"
            />

            <ConceptCard
              title="共轭复数"
              formula={String.raw`\overline{z}=a-bi`}
              description="可用于复数除法中的分母实数化。"
            />

            <ConceptCard
              title="复数的模"
              formula={String.raw`|z|=\sqrt{a^2+b^2}`}
              description="表示复数对应点到原点的距离。"
            />
          </div>
        </section>

        {/* =========================
            03 复数相等求参数
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="03"
            title="复数相等与参数求解"
            description="通过实部和虚部分别相等，将复数问题转化为实数方程组。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              如果 a、b、c、d 都是实数，
              那么两个复数相等的充要条件是：
            </p>

            <KeyFormula
              formula={String.raw`a+bi=c+di\iff a=c,\quad b=d`}
              description="实部相等，虚部相等。"
            />

            <p className="text-sm leading-8 text-slate-600">
              综合题中，经常把未知参数放在复数的实部
              或虚部中。只需分别列出方程求解即可。
            </p>

            <ExampleCard
              number="例题 1"
              title="根据复数相等求参数"
              question="已知 m、n 为实数，且下列复数相等，求 m、n。"
              formula={String.raw`(2m-1)+(n+2)i=5-3i`}
              steps={[
                "因为两个复数相等，所以实部和虚部分别相等。",
                "比较实部：2m-1=5，解得 m=3。",
                "比较虚部：n+2=-3，解得 n=-5。",
                "将结果代回原式，可以验证两边均为 5-3i。",
              ]}
              answer={String.raw`m=3,\qquad n=-5`}
            />

            <NoteBox
              title="解题提示"
              text="先确认题目中的参数都是实数，再分别比较实部和虚部。不能只比较实部，也不能把虚数单位 i 当成未知参数。"
              tone="blue"
            />
          </div>
        </section>

        {/* =========================
            04 复数混合运算
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="04"
            title="复数的乘除混合运算"
            description="先算乘方、乘法，再通过共轭复数完成除法。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              在复数混合运算中，
              需要同时运用乘法展开、
              虚数单位的性质与分母实数化。
            </p>

            <KeyFormula
              formula={String.raw`\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{c^2+d^2}`}
              description="当分母复数不为零时，分子分母同乘分母的共轭复数。"
            />

            <ExampleCard
              number="例题 2"
              title="复数乘除法综合计算"
              question="计算下面的复数表达式。"
              formula={String.raw`\frac{(2+i)(1-i)}{1+i}`}
              steps={[
                "先计算分子：(2+i)(1-i)=2-2i+i-i²。",
                "利用 i²=-1，得到分子为 3-i。",
                "原式化为 (3-i)/(1+i)。",
                "分子分母同时乘以 1-i。",
                "分母为 (1+i)(1-i)=2，分子为 (3-i)(1-i)=2-4i。",
                "最终结果为 (2-4i)/2=1-2i。",
              ]}
              answer={String.raw`1-2i`}
            />

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "乘法展开",
                  text: "按照多项式乘法运算法则展开。",
                },
                {
                  number: "02",
                  title: "分母实数化",
                  text: "同乘分母的共轭复数。",
                },
                {
                  number: "03",
                  title: "整理答案",
                  text: "写成 a+bi 的标准形式。",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold text-blue-600">
                    {item.number}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            05 复数模与距离
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="05"
            title="复数的模与两点距离"
            description="两个复数之差的模，可以表示复平面内两点之间的距离。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设复数 z₁、z₂ 在复平面内分别对应点 A、B。
              根据平面向量与复数的对应关系，
              从 A 指向 B 的向量对应复数 z₂-z₁。
            </p>

            <KeyFormula
              formula={String.raw`AB=|z_2-z_1|`}
              description="两点之间的距离等于对应复数之差的模。"
            />

            <p className="text-sm leading-8 text-slate-600">
              如果已知：
            </p>

            <FormulaCard
              formula={String.raw`z_1=a+bi,\qquad z_2=c+di`}
            />

            <p className="text-sm leading-8 text-slate-600">
              则两点之间的距离可以表示为：
            </p>

            <FormulaCard
              formula={String.raw`AB=\sqrt{(c-a)^2+(d-b)^2}`}
            />

            <DistanceDiagram />

            <ExampleCard
              number="例题 3"
              title="计算复平面内两点的距离"
              question="已知 z₁=1+2i，z₂=4-2i，求对应两点之间的距离。"
              formula={String.raw`z_1=1+2i,\qquad z_2=4-2i`}
              steps={[
                "先求两个复数的差：z₂-z₁=(4-2i)-(1+2i)。",
                "整理得到 z₂-z₁=3-4i。",
                "两点距离等于这个复数的模。",
                "根据模的计算公式，得到 √(3²+(-4)²)=5。",
              ]}
              answer={String.raw`AB=|z_2-z_1|=5`}
            />

            <NoteBox
              title="与平面向量的联系"
              text="复数之间的距离问题，本质上与平面向量的模长计算相同。先求坐标差，再利用勾股定理计算长度。"
              tone="blue"
            />
          </div>
        </section>

        {/* =========================
            06 复数的轨迹
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="06"
            title="复数的几何轨迹"
            description="利用复数的模，可以描述复平面上的圆。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              设 z 表示复平面上的动点，
              z₀ 表示复平面上的一个定点。
            </p>

            <p className="text-sm leading-8 text-slate-600">
              如果动点 z 到定点 z₀ 的距离始终等于正常数 r，
              则满足：
            </p>

            <KeyFormula
              formula={String.raw`|z-z_0|=r\qquad(r>0)`}
              description="复平面内对应的轨迹是一个以 z₀ 对应点为圆心、r 为半径的圆。"
            />

            <CircleDiagram />

            <ExampleCard
              number="例题 4"
              title="求复数模方程表示的轨迹"
              question="在复平面内，求满足下列条件的点组成的图形。"
              formula={String.raw`|z-(1+i)|=2`}
              steps={[
                "设 z=x+yi，其中 x、y 为实数。",
                "代入原式，得到 |(x-1)+(y-1)i|=2。",
                "根据复数模的计算公式，得到 √((x-1)²+(y-1)²)=2。",
                "两边平方，得到 (x-1)²+(y-1)²=4。",
                "因此轨迹是以 (1,1) 为圆心、2 为半径的圆。",
              ]}
              answer={String.raw`(x-1)^2+(y-1)^2=4`}
            />

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-slate-900">
                轨迹题的判断方法
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                看见
                {" "}
                <InlineMath
                  math={String.raw`|z-z_0|=r`}
                />
                {" "}
                这类表达式，可以先理解为
                “动点到定点的距离等于一个常数”，
                再确定圆心和半径。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            07 方程的复数根
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="07"
            title="拓展：方程的复数根"
            description="复数的引入，使一些在实数范围内无解的方程有了解。"
          />

          <div className="mt-6 space-y-5">
            <p className="text-sm leading-8 text-slate-600">
              在实数范围内，平方不能得到负数。
              但在复数范围内，由于
              {" "}
              <InlineMath
                math={String.raw`i^2=-1`}
              />
              ，我们可以求解一些没有实数根的二次方程。
            </p>

            <ExampleCard
              number="例题 5"
              title="求一元二次方程的复数根"
              question="在复数范围内解下面的方程。"
              formula={String.raw`x^2-2x+5=0`}
              steps={[
                "将方程移项并配方。",
                "得到 (x-1)²=-4。",
                "因为 (2i)²=-4，所以 x-1=2i 或 x-1=-2i。",
                "因此方程有两个复数根：1+2i 和 1-2i。",
                "这两个复数根互为共轭复数。",
              ]}
              answer={String.raw`x=1\pm 2i`}
            />

            <NoteBox
              title="知识拓展"
              text="实系数一元二次方程如果出现两个非实复数根，它们一定互为共轭复数。这也说明复数扩充了方程的求解范围。"
              tone="blue"
            />
          </div>
        </section>

        {/* =========================
            08 综合解题策略
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="08"
            title="综合题解题策略"
            description="根据题目的特点，选择合适的知识与方法。"
          />

          <div className="mt-6 space-y-3">
            {[
              {
                title: "遇到复数相等",
                description:
                  "比较实部与虚部，列出实数方程组。",
              },
              {
                title: "遇到乘除混合运算",
                description:
                  "先展开乘法，再利用共轭复数进行分母实数化。",
              },
              {
                title: "遇到两点距离",
                description:
                  "先求两个复数的差，再计算其模。",
              },
              {
                title: "遇到模的轨迹",
                description:
                  "把模理解为距离，判断是否满足圆的定义。",
              },
              {
                title: "遇到没有实数根的二次方程",
                description:
                  "利用 i²=-1，在复数范围内求解。",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            09 本章知识总结
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <SectionHeading
            number="09"
            title="复数章节知识总结"
            description="通过五节课程，复数的主要知识已经串联起来。"
          />

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              {
                title: "复数的形式",
                formula: String.raw`z=a+bi`,
              },
              {
                title: "虚数单位",
                formula: String.raw`i^2=-1`,
              },
              {
                title: "复数加减法",
                formula: String.raw`(a+bi)\pm(c+di)=(a\pm c)+(b\pm d)i`,
              },
              {
                title: "复数乘法",
                formula: String.raw`(a+bi)(c+di)=(ac-bd)+(ad+bc)i`,
              },
              {
                title: "共轭复数",
                formula: String.raw`\overline{z}=a-bi`,
              },
              {
                title: "复数的模",
                formula: String.raw`|z|=\sqrt{a^2+b^2}`,
              },
              {
                title: "两点距离",
                formula: String.raw`AB=|z_B-z_A|`,
              },
              {
                title: "圆的轨迹",
                formula: String.raw`|z-z_0|=r`,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index === 7
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

        {/* =========================
            10 随堂练习
        ========================= */}

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
                共 3 道综合选择题。
                选择后立即判断，并展示详细解析。
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600">
              已完成 {completed} / {exercises.length}
            </span>
          </div>

          <div className="mt-7 space-y-5">
            {exercises.map((exercise, index) => {
              const chosen = answers[index];

              const answered =
                chosen !== undefined;

              const isCorrect =
                chosen === exercise.answer;

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
                              chooseAnswer(
                                index,
                                optionIndex
                              )
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

          {/* 练习成绩 */}
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

        {/* =========================
            章节完成提示
        ========================= */}

        <section className="border-t border-slate-200 py-10">
          <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-blue-600">
              CHAPTER 07
            </p>

            <h2 className="mt-3 text-xl font-bold text-slate-900">
              第七章 · 复数
            </h2>

            <p className="mt-3 text-sm leading-8 text-slate-500">
              至此，复数的五节教学内容已经全部覆盖。
              你可以回顾前面的章节内容，
              进一步巩固复数的基础知识与综合运算能力。
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                {
                  name: "第1节：复数的概念与代数表示",
                  href: "/grade1/complex/concept",
                },
                {
                  name: "第2节：复数的几何意义",
                  href: "/grade1/complex/geometry",
                },
                {
                  name: "第3节：复数的加法与减法",
                  href: "/grade1/complex/addition-subtraction",
                },
                {
                  name: "第4节：复数的乘法与除法",
                  href: "/grade1/complex/multiplication-division",
                },
              ].map((lesson) => (
                <Link
                  key={lesson.href}
                  href={lesson.href}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {lesson.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            底部导航
        ========================= */}

        <section className="border-t border-slate-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/grade1/complex/multiplication-division"
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← 上一节：复数的乘法与除法
            </Link>

            <Link
              href="/grade1"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              返回高一数学 →
            </Link>
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

function NoteBox({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "blue" | "amber";
}) {
  const blue = tone === "blue";

  return (
    <div
      className={`rounded-xl border p-5 ${
        blue
          ? "border-blue-100 bg-blue-50/50"
          : "border-amber-200 bg-amber-50/50"
      }`}
    >
      <p
        className={`text-sm font-semibold ${
          blue ? "text-blue-700" : "text-amber-800"
        }`}
      >
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {text}
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
