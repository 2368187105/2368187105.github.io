"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Question = {
  id: number;
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question:
      "对于一元二次方程 x²−5x+6=0，其判别式 Δ 的值为：",
    options: [
      {
        key: "A",
        text: "1",
      },
      {
        key: "B",
        text: "5",
      },
      {
        key: "C",
        text: "13",
      },
      {
        key: "D",
        text: "25",
      },
    ],
    answer: "A",
    explanation:
      "a=1，b=-5，c=6，所以 Δ=b²−4ac=25−24=1。",
  },
  {
    id: 2,
    question:
      "若一元二次方程 ax²+bx+c=0 的判别式 Δ<0，则该方程：",
    options: [
      {
        key: "A",
        text: "有两个不相等的实数根",
      },
      {
        key: "B",
        text: "有两个相等的实数根",
      },
      {
        key: "C",
        text: "没有实数根",
      },
      {
        key: "D",
        text: "一定有根 x=0",
      },
    ],
    answer: "C",
    explanation:
      "判别式 Δ<0 时，一元二次方程没有实数根，对应的二次函数图像与 x 轴没有交点。",
  },
  {
    id: 3,
    question:
      "函数 f(x)=x²−3x+2 的零点是：",
    options: [
      {
        key: "A",
        text: "1 和 2",
      },
      {
        key: "B",
        text: "-1 和 -2",
      },
      {
        key: "C",
        text: "0 和 3",
      },
      {
        key: "D",
        text: "只有 1",
      },
    ],
    answer: "A",
    explanation:
      "令 f(x)=0，得到 x²−3x+2=0，即 (x−1)(x−2)=0，所以零点为 1 和 2。",
  },
];

export default function QuadraticEquationPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, answer: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  }

  function submitAnswer(id: number) {
    if (!answers[id]) return;

    setSubmitted((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  function resetQuestion(id: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

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

          <Link
            href="/grade1"
            className="hover:text-slate-700"
          >
            高一数学
          </Link>

          <span>/</span>

          <Link
            href="/grade1/quadratic"
            className="hover:text-slate-700"
          >
            一元二次函数、方程和不等式
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            一元二次函数与一元二次方程
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                03 · 二次函数与方程
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                核心联系
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              一元二次函数与一元二次方程
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              一元二次方程并不是一个孤立知识点。
              方程的根、二次函数的零点以及抛物线与 x 轴的交点，
              本质上描述的是同一个问题。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#quadratic"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/quadratic"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          <div className="min-w-0 space-y-14">
            {/* 01 */}
            <Section
              id="quadratic"
              number="01"
              title="一元二次函数"
            >
              <p className="leading-8 text-slate-600">
                一般地，形如：
              </p>

              <MathBox>
                y = ax² + bx + c
              </MathBox>

              <p className="text-center text-sm text-slate-400">
                其中 a≠0
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                的函数叫做一元二次函数。
                它的图像是一条
                <strong className="mx-1 text-slate-900">
                  抛物线
                </strong>
                。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <PropertyCard
                  title="a > 0"
                  main="抛物线开口向上"
                  description="函数通常存在最小值。"
                />

                <PropertyCard
                  title="a < 0"
                  main="抛物线开口向下"
                  description="函数通常存在最大值。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <ParabolaGraph />
              </div>
            </Section>

            {/* 02 */}
            <Section
              id="equation"
              number="02"
              title="一元二次方程"
            >
              <p className="leading-8 text-slate-600">
                一般地，形如：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <p className="text-center text-sm text-slate-400">
                其中 a≠0
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                的方程叫做一元二次方程。
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  x² − 5x + 6 = 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因式分解：
                </p>

                <MathBox>
                  (x − 2)(x − 3) = 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因此：
                </p>

                <MathBox>
                  x₁ = 2，x₂ = 3
                </MathBox>
              </ExampleCard>
            </Section>

            {/* 03 */}
            <Section
              id="connection"
              number="03"
              title="函数与方程的核心联系"
            >
              <p className="leading-8 text-slate-600">
                对于二次函数：
              </p>

              <MathBox>
                y = ax² + bx + c
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                如果我们研究它与 x 轴的交点，
                那么交点处纵坐标必然满足：
              </p>

              <MathBox>y = 0</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                所以需要解：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
                <p className="text-center text-sm font-medium text-blue-600">
                  三种说法，本质相同
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ConnectionCard
                    title="方程角度"
                    text="方程的实数根"
                  />

                  <ConnectionCard
                    title="函数角度"
                    text="函数的零点"
                  />

                  <ConnectionCard
                    title="图像角度"
                    text="抛物线与 x 轴交点的横坐标"
                  />
                </div>
              </div>
            </Section>

            {/* 04 */}
            <Section
              id="zero"
              number="04"
              title="函数的零点"
            >
              <p className="leading-8 text-slate-600">
                一般地，如果：
              </p>

              <MathBox>f(x₀) = 0</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                那么实数 x₀ 就叫做函数 f(x) 的
                <strong className="mx-1 text-slate-900">
                  零点
                </strong>
                。
              </p>

              <TipBox>
                零点是
                <strong className="mx-1 text-slate-900">
                  x 的值
                </strong>
                ，不是坐标点。
                如果零点是 x=2，对应的图像交点才是 (2,0)。
              </TipBox>

              <ExampleCard title="例如">
                <MathBox>
                  f(x) = x² − 3x + 2
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  求零点，就是令：
                </p>

                <MathBox>
                  x² − 3x + 2 = 0
                </MathBox>

                <MathBox>
                  (x − 1)(x − 2) = 0
                </MathBox>

                <AnswerBox>
                  函数的两个零点为 1 和 2
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="discriminant"
              number="05"
              title="判别式 Δ"
            >
              <p className="leading-8 text-slate-600">
                对一元二次方程：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                我们定义判别式：
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7">
                <MathBox>
                  Δ = b² − 4ac
                </MathBox>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Δ 的正负决定方程有多少个实数根。
              </p>

              <div className="mt-6 space-y-3">
                <DeltaCard
                  delta="Δ > 0"
                  roots="两个不相等的实数根"
                  graph="抛物线与 x 轴有两个交点"
                />

                <DeltaCard
                  delta="Δ = 0"
                  roots="两个相等的实数根"
                  graph="抛物线与 x 轴有一个公共点"
                />

                <DeltaCard
                  delta="Δ < 0"
                  roots="没有实数根"
                  graph="抛物线与 x 轴没有交点"
                />
              </div>
            </Section>

            {/* 06 */}
            <Section
              id="graph"
              number="06"
              title="判别式与图像位置"
            >
              <p className="leading-8 text-slate-600">
                判别式不仅能判断方程根的个数，
                还可以直接判断抛物线与 x 轴的位置关系。
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <GraphCard
                  type="two"
                  title="Δ > 0"
                  text="两个交点"
                />

                <GraphCard
                  type="one"
                  title="Δ = 0"
                  text="一个公共点"
                />

                <GraphCard
                  type="none"
                  title="Δ < 0"
                  text="没有交点"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-center text-sm font-medium text-slate-700">
                  根的个数 = 零点个数 = 抛物线与 x 轴交点个数
                </p>
              </div>
            </Section>

            {/* 07 */}
            <Section
              id="formula"
              number="07"
              title="一元二次方程求根公式"
            >
              <p className="leading-8 text-slate-600">
                当 Δ≥0 时，一元二次方程：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                可以使用求根公式：
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7">
                <MathBox>
                  x = (−b ± √Δ) / 2a
                </MathBox>
              </div>

              <ExampleCard title="例如">
                <MathBox>
                  x² − 5x + 6 = 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  a=1，b=-5，c=6。
                </p>

                <MathBox>
                  Δ = 25 − 24 = 1
                </MathBox>

                <MathBox>
                  x = (5 ± 1) / 2
                </MathBox>

                <MathBox>
                  x₁ = 2，x₂ = 3
                </MathBox>
              </ExampleCard>
            </Section>

            {/* 08 */}
            <Section
              id="vieta"
              number="08"
              title="根与系数的关系"
            >
              <p className="leading-8 text-slate-600">
                如果一元二次方程：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                有两个实数根 x₁、x₂，那么：
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <FormulaCard
                  label="两根之和"
                  formula="x₁ + x₂ = −b/a"
                />

                <FormulaCard
                  label="两根之积"
                  formula="x₁x₂ = c/a"
                />
              </div>

              <ExampleCard title="例如">
                <MathBox>
                  x² − 5x + 6 = 0
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两根为 2、3，因此：
                </p>

                <MathBox>
                  x₁ + x₂ = 2 + 3 = 5
                </MathBox>

                <MathBox>
                  x₁x₂ = 2 × 3 = 6
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  这与 −b/a=5、c/a=6 完全一致。
                </p>
              </ExampleCard>
            </Section>

            {/* 09 */}
            <Section
              id="steps"
              number="09"
              title="这类题的基本解题步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="写出标准形式"
                  text="把方程整理成 ax²+bx+c=0，并确定 a、b、c。"
                />

                <StepItem
                  number="2"
                  title="计算判别式"
                  text="计算 Δ=b²−4ac，先判断实数根的个数。"
                />

                <StepItem
                  number="3"
                  title="需要时求根"
                  text="可以使用因式分解、配方法或求根公式。"
                />

                <StepItem
                  number="4"
                  title="转化到函数图像"
                  text="方程实数根就是函数零点，也对应抛物线与 x 轴交点的横坐标。"
                  last
                />
              </div>
            </Section>

            {/* 10 */}
            <Section
              id="examples"
              number="10"
              title="典型例题"
            >
              <ExampleCard title="例 1：判断根的个数">
                <p className="text-sm leading-7 text-slate-600">
                  判断方程 x²−4x+5=0 的实数根个数。
                </p>

                <MathBox>
                  Δ = (−4)² − 4×1×5
                </MathBox>

                <MathBox>
                  Δ = 16 − 20 = −4
                </MathBox>

                <AnswerBox>
                  Δ&lt;0，所以方程没有实数根
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 2：求函数零点">
                <p className="text-sm leading-7 text-slate-600">
                  求函数 f(x)=x²−4 的零点。
                </p>

                <MathBox>
                  x² − 4 = 0
                </MathBox>

                <MathBox>
                  (x − 2)(x + 2) = 0
                </MathBox>

                <AnswerBox>
                  零点为 −2 和 2
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 3：判断图像交点">
                <p className="text-sm leading-7 text-slate-600">
                  二次函数 y=x²+2x+1 与 x 轴有几个公共点？
                </p>

                <MathBox>
                  Δ = 2² − 4×1×1 = 0
                </MathBox>

                <AnswerBox>
                  与 x 轴只有一个公共点
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 11 */}
            <Section
              id="mistakes"
              number="11"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="判别式中 b 的符号写错"
                  wrong="方程 x²−5x+6=0 中直接取 b=5"
                  correct="标准式中 b=-5，所以计算 Δ 时必须使用 (-5)²。"
                />

                <MistakeCard
                  title="把零点写成坐标"
                  wrong="函数零点是 (1,0) 和 (2,0)"
                  correct="函数的零点是 1 和 2；(1,0)、(2,0) 是图像与 x 轴的交点。"
                />

                <MistakeCard
                  title="Δ=0 时认为只有一个根"
                  wrong="Δ=0 所以方程只有一个根"
                  correct="更准确地说，方程有两个相等的实数根。"
                />

                <MistakeCard
                  title="方程根与函数值混淆"
                  wrong="x=2 是函数值"
                  correct="x=2 是使函数值等于 0 的自变量值，也就是函数零点。"
                />
              </div>
            </Section>

            {/* 12 */}
            <Section
              id="quiz"
              number="12"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查二次函数、方程、零点和判别式之间的联系是否已经掌握。
              </p>

              <div className="mt-6 space-y-5">
                {questions.map((question, index) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    index={index}
                    selected={answers[question.id]}
                    submitted={submitted[question.id] ?? false}
                    onChoose={(answer) =>
                      chooseAnswer(question.id, answer)
                    }
                    onSubmit={() =>
                      submitAnswer(question.id)
                    }
                    onReset={() =>
                      resetQuestion(question.id)
                    }
                  />
                ))}
              </div>
            </Section>

            {/* 下一节 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                完成本节
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                下一步：一元二次不等式
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将继续利用二次函数图像，
                根据抛物线在 x 轴上方或下方的位置，
                求解 ax²+bx+c&gt;0 或 ax²+bx+c&lt;0。
              </p>

              <Link
                href="/grade1/quadratic"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回章节目录
              </Link>
            </section>
          </div>

          {/* 右侧 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#quadratic" label="01 二次函数" />
                <Anchor href="#equation" label="02 二次方程" />
                <Anchor href="#connection" label="03 函数与方程" />
                <Anchor href="#zero" label="04 函数零点" />
                <Anchor href="#discriminant" label="05 判别式" />
                <Anchor href="#graph" label="06 图像位置" />
                <Anchor href="#formula" label="07 求根公式" />
                <Anchor href="#vieta" label="08 根与系数" />
                <Anchor href="#steps" label="09 解题步骤" />
                <Anchor href="#examples" label="10 典型例题" />
                <Anchor href="#mistakes" label="11 易错点" />
                <Anchor href="#quiz" label="12 即时练习" />
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function MathBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 text-center font-serif text-xl text-slate-900 sm:text-2xl">
      {children}
    </div>
  );
}

function PropertyCard({
  title,
  main,
  description,
}: {
  title: string;
  main: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-semibold text-slate-900">
        {main}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function ConnectionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 text-center">
      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {text}
      </p>
    </div>
  );
}

function DeltaCard({
  delta,
  roots,
  graph,
}: {
  delta: string;
  roots: string;
  graph: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[100px_1fr_1.2fr] sm:items-center">
      <p className="font-serif text-lg font-semibold text-blue-600">
        {delta}
      </p>

      <p className="text-sm font-medium text-slate-800">
        {roots}
      </p>

      <p className="text-sm leading-6 text-slate-500">
        {graph}
      </p>
    </div>
  );
}

function FormulaCard({
  label,
  formula,
}: {
  label: string;
  formula: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-3 font-serif text-xl font-semibold text-slate-900">
        {formula}
      </p>
    </div>
  );
}

function ExampleCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

function AnswerBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-lg bg-emerald-50/60 px-5 py-4 text-center text-sm font-semibold text-emerald-700">
      {children}
    </div>
  );
}

function TipBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4 text-sm leading-7 text-slate-600">
      <span className="mr-2 font-semibold text-blue-600">
        提示
      </span>

      {children}
    </div>
  );
}

function ParabolaGraph() {
  return (
    <svg
      viewBox="0 0 500 260"
      className="mx-auto w-full max-w-lg"
      aria-label="二次函数抛物线示意图"
    >
      <line
        x1="40"
        y1="190"
        x2="460"
        y2="190"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <line
        x1="250"
        y1="25"
        x2="250"
        y2="235"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <path
        d="M 90 45 Q 250 310 410 45"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
      />

      <text
        x="450"
        y="180"
        fill="#64748b"
        fontSize="14"
      >
        x
      </text>

      <text
        x="260"
        y="35"
        fill="#64748b"
        fontSize="14"
      >
        y
      </text>
    </svg>
  );
}

function GraphCard({
  type,
  title,
  text,
}: {
  type: "two" | "one" | "none";
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <MiniGraph type={type} />

      <p className="mt-3 text-center text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-center text-xs text-slate-500">
        {text}
      </p>
    </div>
  );
}

function MiniGraph({
  type,
}: {
  type: "two" | "one" | "none";
}) {
  const path =
    type === "two"
      ? "M 25 20 Q 100 145 175 20"
      : type === "one"
        ? "M 25 25 Q 100 115 175 25"
        : "M 25 10 Q 100 85 175 10";

  const axisY =
    type === "two"
      ? 80
      : type === "one"
        ? 115
        : 110;

  return (
    <svg
      viewBox="0 0 200 130"
      className="w-full"
      aria-label="抛物线与x轴位置示意"
    >
      <line
        x1="10"
        y1={axisY}
        x2="190"
        y2={axisY}
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <path
        d={path}
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
      />
    </svg>
  );
}

function StepItem({
  number,
  title,
  text,
  last = false,
}: {
  number: string;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-4">
      {!last && (
        <div className="absolute left-[15px] top-8 h-[calc(100%+16px)] w-px bg-slate-200" />
      )}

      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500">
        {number}
      </div>

      <div className="pb-6">
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function MistakeCard({
  title,
  wrong,
  correct,
}: {
  title: string;
  wrong: string;
  correct: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-red-50/60 p-4">
          <p className="text-xs font-medium text-red-500">
            常见错误
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {wrong}
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50/60 p-4">
          <p className="text-xs font-medium text-emerald-600">
            正确理解
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {correct}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  selected,
  submitted,
  onChoose,
  onSubmit,
  onReset,
}: {
  question: Question;
  index: number;
  selected?: string;
  submitted: boolean;
  onChoose: (answer: string) => void;
  onSubmit: () => void;
  onReset: () => void;
}) {
  const isCorrect =
    selected === question.answer;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-blue-600">
          第 {index + 1} 题
        </span>

        {submitted && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              isCorrect
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}
          >
            {isCorrect ? "回答正确" : "回答错误"}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen =
            selected === option.key;

          const correct =
            submitted &&
            option.key === question.answer;

          const wrong =
            submitted &&
            chosen &&
            option.key !== question.answer;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() =>
                onChoose(option.key)
              }
              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                correct
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : wrong
                    ? "border-red-300 bg-red-50 text-red-600"
                    : chosen
                      ? "border-slate-500 bg-slate-50 text-slate-900"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
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
          onClick={onSubmit}
          disabled={!selected}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              {isCorrect
                ? "回答正确"
                : `正确答案：${question.answer}`}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {question.explanation}
            </p>
          </div>

          <button
            type="button"
            onClick={onReset}
            className="mt-3 text-sm text-slate-400 hover:text-slate-700"
          >
            重新作答
          </button>
        </div>
      )}
    </div>
  );
}

function Anchor({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    >
      {label}
    </a>
  );
}