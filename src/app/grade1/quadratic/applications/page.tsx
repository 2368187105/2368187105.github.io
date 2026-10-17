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
      "若方程 x²−2x+m=0 有两个不相等的实数根，则 m 的取值范围是：",
    options: [
      {
        key: "A",
        text: "m<1",
      },
      {
        key: "B",
        text: "m≤1",
      },
      {
        key: "C",
        text: "m>1",
      },
      {
        key: "D",
        text: "m≥1",
      },
    ],
    answer: "A",
    explanation:
      "有两个不相等实数根要求 Δ>0。Δ=(-2)²−4m=4−4m>0，所以 m<1。",
  },
  {
    id: 2,
    question:
      "函数 f(x)=x²−4x+7 的最小值是：",
    options: [
      {
        key: "A",
        text: "1",
      },
      {
        key: "B",
        text: "2",
      },
      {
        key: "C",
        text: "3",
      },
      {
        key: "D",
        text: "7",
      },
    ],
    answer: "C",
    explanation:
      "f(x)=x²−4x+7=(x−2)²+3，所以最小值为 3，在 x=2 时取得。",
  },
  {
    id: 3,
    question:
      "已知方程 x²−5x+6=0 的两个根为 x₁、x₂，则 x₁+x₂ 等于：",
    options: [
      {
        key: "A",
        text: "-5",
      },
      {
        key: "B",
        text: "5",
      },
      {
        key: "C",
        text: "6",
      },
      {
        key: "D",
        text: "-6",
      },
    ],
    answer: "B",
    explanation:
      "根据根与系数关系，x₁+x₂=-b/a=-(-5)/1=5。",
  },
];

export default function QuadraticApplicationsPage() {
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
            综合应用
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                05 · 综合应用
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                模块总结
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              二次函数、方程与不等式的综合应用
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              本节把二次函数图像、方程实数根、判别式、
              根与系数关系、一元二次不等式和最值问题综合起来，
              重点学习参数题和实际应用题的基本思路。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#overview"
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
              id="overview"
              number="01"
              title="先建立完整知识联系"
            >
              <p className="leading-8 text-slate-600">
                二次函数、方程和不等式并不是三个互相独立的知识点。
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <FlowItem
                  title="二次函数"
                  formula="y=ax²+bx+c"
                  description="研究图像、开口方向、对称轴和最值。"
                />

                <FlowArrow />

                <FlowItem
                  title="一元二次方程"
                  formula="ax²+bx+c=0"
                  description="研究函数值等于 0 时自变量的取值。"
                />

                <FlowArrow />

                <FlowItem
                  title="一元二次不等式"
                  formula="ax²+bx+c>0 或 <0"
                  description="研究函数图像位于 x 轴上方或下方的区间。"
                />
              </div>

              <TipBox>
                综合题的关键是先判断题目究竟是在研究
                <strong className="mx-1 text-slate-900">
                  图像、根、正负还是最值
                </strong>
                ，然后选择对应工具。
              </TipBox>
            </Section>

            {/* 02 */}
            <Section
              id="parameter-roots"
              number="02"
              title="参数问题：根据根的个数求参数"
            >
              <p className="leading-8 text-slate-600">
                如果题目告诉你一元二次方程有几个实数根，
                最直接的工具通常是
                <strong className="mx-1 text-slate-900">
                  判别式 Δ
                </strong>
                。
              </p>

              <div className="mt-6 space-y-3">
                <RuleRow
                  condition="有两个不相等实数根"
                  result="Δ > 0"
                />

                <RuleRow
                  condition="有两个相等实数根"
                  result="Δ = 0"
                />

                <RuleRow
                  condition="没有实数根"
                  result="Δ < 0"
                />
              </div>

              <ExampleCard title="例：方程 x²−2x+m=0 有两个不相等实数根">
                <p className="text-sm leading-7 text-slate-600">
                  根据题意：
                </p>

                <MathBox>Δ &gt; 0</MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  其中 a=1，b=-2，c=m：
                </p>

                <MathBox>
                  Δ = (−2)² − 4m
                </MathBox>

                <MathBox>
                  4 − 4m &gt; 0
                </MathBox>

                <MathBox>
                  m &lt; 1
                </MathBox>

                <AnswerBox>
                  参数范围：m&lt;1
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 03 */}
            <Section
              id="tangent"
              number="03"
              title="参数问题：抛物线与 x 轴的位置"
            >
              <p className="leading-8 text-slate-600">
                图像与 x 轴的位置关系，
                同样可以转化为判别式问题。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <SimpleCard
                  title="两个交点"
                  main="Δ > 0"
                />

                <SimpleCard
                  title="一个公共点"
                  main="Δ = 0"
                />

                <SimpleCard
                  title="没有交点"
                  main="Δ < 0"
                />
              </div>

              <ExampleCard title="例：抛物线 y=x²−4x+m 与 x 轴相切">
                <p className="text-sm leading-7 text-slate-600">
                  “与 x 轴相切”意味着只有一个公共点，所以：
                </p>

                <MathBox>Δ = 0</MathBox>

                <MathBox>
                  (−4)² − 4m = 0
                </MathBox>

                <MathBox>
                  16 − 4m = 0
                </MathBox>

                <MathBox>m = 4</MathBox>

                <AnswerBox>
                  m=4
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 04 */}
            <Section
              id="roots"
              number="04"
              title="利用根与系数关系解决问题"
            >
              <p className="leading-8 text-slate-600">
                对方程：
              </p>

              <MathBox>
                ax² + bx + c = 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                如果有两个根 x₁、x₂，则：
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <FormulaCard
                  title="两根之和"
                  formula="x₁ + x₂ = −b/a"
                />

                <FormulaCard
                  title="两根之积"
                  formula="x₁x₂ = c/a"
                />
              </div>

              <ExampleCard title="例：已知 x²−7x+10=0 的两根为 x₁、x₂">
                <MathBox>
                  x₁ + x₂ = 7
                </MathBox>

                <MathBox>
                  x₁x₂ = 10
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  如果要求：
                </p>

                <MathBox>
                  x₁² + x₂²
                </MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  可以利用：
                </p>

                <MathBox>
                  x₁² + x₂²
                </MathBox>

                <MathBox>
                  = (x₁+x₂)² − 2x₁x₂
                </MathBox>

                <MathBox>
                  = 7² − 2×10
                </MathBox>

                <MathBox>= 29</MathBox>

                <AnswerBox>
                  x₁²+x₂²=29
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="root-sign"
              number="05"
              title="判断两个根的符号"
            >
              <p className="leading-8 text-slate-600">
                两个根的正负情况，可以结合
                <strong className="mx-1 text-slate-900">
                  根的和与根的积
                </strong>
                判断。
              </p>

              <div className="mt-6 space-y-3">
                <RootSignRow
                  condition="x₁x₂ < 0"
                  conclusion="两个根一正一负"
                />

                <RootSignRow
                  condition="x₁x₂ > 0，x₁+x₂ > 0"
                  conclusion="两个根都为正"
                />

                <RootSignRow
                  condition="x₁x₂ > 0，x₁+x₂ < 0"
                  conclusion="两个根都为负"
                />
              </div>

              <TipBox>
                使用这些结论之前，还要先确认方程确实存在相应的实数根。
              </TipBox>
            </Section>

            {/* 06 */}
            <Section
              id="minimum"
              number="06"
              title="利用二次函数求最值"
            >
              <p className="leading-8 text-slate-600">
                对二次函数：
              </p>

              <MathBox>
                y = ax² + bx + c
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                配方后可以直接观察顶点。
              </p>

              <ExampleCard title="例：求 f(x)=x²−6x+11 的最小值">
                <MathBox>
                  f(x) = x² − 6x + 11
                </MathBox>

                <MathBox>
                  = (x − 3)² + 2
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为：
                </p>

                <MathBox>
                  (x − 3)² ≥ 0
                </MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  所以：
                </p>

                <MathBox>
                  f(x) ≥ 2
                </MathBox>

                <AnswerBox>
                  当 x=3 时，最小值为 2
                </AnswerBox>
              </ExampleCard>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <PropertyCard
                  title="a > 0"
                  main="开口向上"
                  description="顶点给出函数的最小值。"
                />

                <PropertyCard
                  title="a < 0"
                  main="开口向下"
                  description="顶点给出函数的最大值。"
                />
              </div>
            </Section>

            {/* 07 */}
            <Section
              id="interval"
              number="07"
              title="闭区间上的二次函数最值"
            >
              <p className="leading-8 text-slate-600">
                如果题目规定了 x 的取值范围，
                就不能只看整个抛物线的顶点。
              </p>

              <ExampleCard title="例：求 f(x)=x²−4x+5 在 [0,3] 上的最大值和最小值">
                <MathBox>
                  f(x) = (x − 2)² + 1
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  顶点 x=2 位于区间 [0,3] 内：
                </p>

                <MathBox>
                  f(2)=1
                </MathBox>

                <p className="text-sm leading-7 text-slate-600">
                  再计算两个端点：
                </p>

                <MathBox>
                  f(0)=5
                </MathBox>

                <MathBox>
                  f(3)=2
                </MathBox>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <AnswerMini
                    label="最小值"
                    value="1"
                    detail="在 x=2 时取得"
                  />

                  <AnswerMini
                    label="最大值"
                    value="5"
                    detail="在 x=0 时取得"
                  />
                </div>
              </ExampleCard>

              <TipBox>
                闭区间最值题通常检查：
                <strong className="mx-1 text-slate-900">
                  顶点 + 左端点 + 右端点
                </strong>
                ，再比较函数值。
              </TipBox>
            </Section>

            {/* 08 */}
            <Section
              id="inequality"
              number="08"
              title="利用图像解决不等式问题"
            >
              <p className="leading-8 text-slate-600">
                综合题中经常同时出现方程和不等式。
              </p>

              <ExampleCard title="例：解 x²−5x+6≤0">
                <p className="text-sm leading-7 text-slate-600">
                  先求对应方程的根：
                </p>

                <MathBox>
                  x² − 5x + 6 = 0
                </MathBox>

                <MathBox>
                  (x − 2)(x − 3)=0
                </MathBox>

                <MathBox>
                  x₁=2，x₂=3
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为抛物线开口向上，
                  小于等于 0 的部分位于两个根之间，并包含两个根。
                </p>

                <AnswerBox>
                  2≤x≤3
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 09 */}
            <Section
              id="word"
              number="09"
              title="实际问题中的二次函数模型"
            >
              <p className="leading-8 text-slate-600">
                实际应用题通常先建立二次函数，
                再利用函数最值解决“最大利润”“最大面积”等问题。
              </p>

              <ExampleCard title="例：矩形面积最大问题">
                <p className="text-sm leading-7 text-slate-600">
                  一个矩形的周长为 20，
                  设其中一边长为 x，则另一边长为 10−x。
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  面积：
                </p>

                <MathBox>
                  S = x(10 − x)
                </MathBox>

                <MathBox>
                  = −x² + 10x
                </MathBox>

                <MathBox>
                  = −(x − 5)² + 25
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为平方项前面为负，所以：
                </p>

                <MathBox>
                  S ≤ 25
                </MathBox>

                <AnswerBox>
                  当 x=5 时，矩形面积最大，最大面积为 25
                </AnswerBox>
              </ExampleCard>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="设未知量"
                  text="根据题意设一个合适的自变量 x。"
                />

                <StepItem
                  number="2"
                  title="建立函数关系"
                  text="把目标量表示成关于 x 的二次函数。"
                />

                <StepItem
                  number="3"
                  title="确定定义域"
                  text="实际问题中的长度、时间、数量等通常有现实限制。"
                />

                <StepItem
                  number="4"
                  title="求函数最值"
                  text="利用配方法、顶点或单调性得到最大值或最小值。"
                />

                <StepItem
                  number="5"
                  title="回答实际问题"
                  text="最后要结合题意写出具有实际意义的结论。"
                  last
                />
              </div>
            </Section>

            {/* 10 */}
            <Section
              id="strategy"
              number="10"
              title="综合题如何选择方法？"
            >
              <div className="space-y-3">
                <StrategyCard
                  question="题目问有几个实数根？"
                  method="优先想到判别式 Δ"
                />

                <StrategyCard
                  question="题目给出两个根，求它们的和或积？"
                  method="优先想到根与系数关系"
                />

                <StrategyCard
                  question="题目要求函数最大值或最小值？"
                  method="优先想到配方法、顶点和单调性"
                />

                <StrategyCard
                  question="题目要求 ax²+bx+c>0 或 <0？"
                  method="优先想到方程根 + 抛物线图像"
                />

                <StrategyCard
                  question="题目中有参数 m，并要求根或图像满足条件？"
                  method="把条件翻译成 Δ、根与系数或最值条件"
                />

                <StrategyCard
                  question="题目是面积、利润、距离等实际问题？"
                  method="先建立二次函数模型，再求最值"
                />
              </div>
            </Section>

            {/* 11 */}
            <Section
              id="mistakes"
              number="11"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="看到参数题就直接解方程"
                  wrong="题目只问根的个数，却直接套求根公式"
                  correct="如果只研究根的个数，通常直接使用判别式 Δ 更简单。"
                />

                <MistakeCard
                  title="忽略实际问题的定义域"
                  wrong="建立二次函数后直接在所有实数范围求最值"
                  correct="实际问题中的自变量通常受到长度、数量、时间等现实条件限制。"
                />

                <MistakeCard
                  title="根与系数公式符号写错"
                  wrong="x₁+x₂=b/a"
                  correct="正确公式是 x₁+x₂=−b/a，负号不能漏掉。"
                />

                <MistakeCard
                  title="只求出数值，没有写取得条件"
                  wrong="直接回答最大值为 25"
                  correct="最值题通常还要说明在什么自变量取值下取得最大值或最小值。"
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
                完成下面 3 道题，检查能否综合使用判别式、根与系数和二次函数最值。
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

            {/* 模块完成 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                5 / 5 全部开放
              </span>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                第二模块全部知识点已经开放
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                现在已经完成等式与不等式性质、基本不等式、
                一元二次函数与方程、一元二次不等式以及综合应用。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/grade1/quadratic"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  查看模块目录
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  去专题训练
                </Link>

                <Link
                  href="/grade1"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  返回高一数学
                </Link>
              </div>
            </section>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#overview" label="01 知识联系" />
                <Anchor href="#parameter-roots" label="02 参数与根" />
                <Anchor href="#tangent" label="03 图像与参数" />
                <Anchor href="#roots" label="04 根与系数" />
                <Anchor href="#root-sign" label="05 根的符号" />
                <Anchor href="#minimum" label="06 二次函数最值" />
                <Anchor href="#interval" label="07 区间最值" />
                <Anchor href="#inequality" label="08 不等式应用" />
                <Anchor href="#word" label="09 实际问题" />
                <Anchor href="#strategy" label="10 方法选择" />
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

function FlowItem({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5 text-center">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-serif text-lg font-semibold text-slate-900">
        {formula}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="py-2 text-center text-slate-300">
      ↓
    </div>
  );
}

function RuleRow({
  condition,
  result,
}: {
  condition: string;
  result: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <p className="text-sm text-slate-600">
        {condition}
      </p>

      <span className="hidden text-slate-300 sm:block">
        →
      </span>

      <p className="font-serif font-semibold text-slate-900">
        {result}
      </p>
    </div>
  );
}

function SimpleCard({
  title,
  main,
}: {
  title: string;
  main: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-3 font-serif text-xl font-semibold text-blue-600">
        {main}
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
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <p className="text-xs text-slate-400">
        {title}
      </p>

      <p className="mt-3 font-serif text-xl font-semibold text-slate-900">
        {formula}
      </p>
    </div>
  );
}

function RootSignRow({
  condition,
  conclusion,
}: {
  condition: string;
  conclusion: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="font-serif text-base text-blue-600">
        {condition}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-800">
        {conclusion}
      </p>
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

function AnswerMini({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 text-center">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {detail}
      </p>
    </div>
  );
}

function StrategyCard({
  question,
  method,
}: {
  question: string;
  method: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">
        {question}
      </p>

      <p className="mt-2 text-sm leading-6 text-blue-600">
        → {method}
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