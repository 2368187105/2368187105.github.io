"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type Question = {
  id: number;
  question: string;
  formula?: string;
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
    question: "函数的定义域是：",
    formula: "f(x)=\\sqrt{2x-4}",
    options: [
      {
        key: "A",
        text: "x > 2",
      },
      {
        key: "B",
        text: "x ≥ 2",
      },
      {
        key: "C",
        text: "x ≤ 2",
      },
      {
        key: "D",
        text: "R",
      },
    ],
    answer: "B",
    explanation:
      "偶次根式要求被开方数大于或等于 0，因此 2x-4 ≥ 0，解得 x ≥ 2。",
  },
  {
    id: 2,
    question: "函数的定义域是：",
    formula: "f(x)=\\frac{1}{x^2-4}",
    options: [
      {
        key: "A",
        text: "R",
      },
      {
        key: "B",
        text: "x ≠ 2",
      },
      {
        key: "C",
        text: "x ≠ -2",
      },
      {
        key: "D",
        text: "x ≠ ±2",
      },
    ],
    answer: "D",
    explanation:
      "分母不能为 0。x²-4 ≠ 0，即 (x-2)(x+2) ≠ 0，所以 x ≠ ±2。",
  },
  {
    id: 3,
    question: "函数在 x∈[0,3] 时的值域是：",
    formula: "f(x)=x^2+1",
    options: [
      {
        key: "A",
        text: "[0,9]",
      },
      {
        key: "B",
        text: "[1,10]",
      },
      {
        key: "C",
        text: "[1,9]",
      },
      {
        key: "D",
        text: "[0,10]",
      },
    ],
    answer: "B",
    explanation:
      "在 [0,3] 上，x² 从 0 增加到 9，因此 x²+1 从 1 增加到 10，值域为 [1,10]。",
  },
];

export default function DomainRangePage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, answer: string) {
    if (submitted[id]) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  }

  function submitAnswer(id: number) {
    if (!answers[id]) {
      return;
    }

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

          <Link href="/grade1" className="hover:text-slate-700">
            高一数学
          </Link>

          <span>/</span>

          <Link
            href="/grade1/functions"
            className="hover:text-slate-700"
          >
            函数的概念与性质
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            定义域与值域
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                02 · 函数基础
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                高频考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              函数的定义域与值域
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              定义域研究“自变量 x 可以取哪些值”，
              值域研究“函数值 y 最终可以取哪些值”。
              这是分析函数性质、求最值和研究函数图像的重要基础。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#domain"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/functions"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          {/* 左侧正文 */}
          <div className="min-w-0 space-y-14">
            {/* 01 定义域 */}
            <LearningSection
              id="domain"
              number="01"
              title="什么是定义域？"
            >
              <p className="leading-8 text-slate-600">
                函数中自变量
                <InlineMath math="x" />
                所有允许取值组成的集合，叫做函数的
                <strong className="mx-1 text-slate-800">
                  定义域
                </strong>
                。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">
                  例如：
                </p>

                <BlockMath math="f(x)=\frac{1}{x-3}" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因为分母不能为 0，所以：
                </p>

                <MathText>x − 3 ≠ 0</MathText>

                <p className="mt-2 text-sm text-slate-600">
                  得到：
                </p>

                <MathText>x ≠ 3</MathText>

                <p className="mt-4 text-sm text-slate-600">
                  因此定义域为：
                </p>

                <BlockMath math="(-\infty,3)\cup(3,+\infty)" />
              </div>

              <TipBox>
                求定义域的本质只有一句话：
                <strong className="mx-1 text-slate-800">
                  让函数解析式有意义。
                </strong>
              </TipBox>
            </LearningSection>

            {/* 02 常见限制 */}
            <LearningSection
              id="rules"
              number="02"
              title="求定义域的常见限制"
            >
              <div className="space-y-4">
                <RuleCard
                  title="分式"
                  description="分母不能等于 0。"
                  formula="\frac{1}{x+2}"
                  condition="x + 2 ≠ 0"
                  result="x ≠ -2"
                />

                <RuleCard
                  title="偶次根式"
                  description="被开方数必须大于或等于 0。"
                  formula="\sqrt{x-5}"
                  condition="x − 5 ≥ 0"
                  result="x ≥ 5"
                />

                <RuleCard
                  title="分母中含根式"
                  description="不仅要满足根式有意义，还必须保证分母不能等于 0。"
                  formula="\frac{1}{\sqrt{x-1}}"
                  condition="x − 1 > 0"
                  result="x > 1"
                />

                <RuleCard
                  title="整式函数"
                  description="整式函数通常对所有实数都有意义。"
                  formula="x^2-3x+7"
                  condition="x 可以取任意实数"
                  result="定义域为 R"
                />
              </div>
            </LearningSection>

            {/* 03 多个条件 */}
            <LearningSection
              id="combined"
              number="03"
              title="多个条件要同时满足"
            >
              <p className="leading-8 text-slate-600">
                如果一个函数同时包含分式、根式等结构，
                必须让
                <strong className="mx-1 text-slate-800">
                  所有限制条件同时成立
                </strong>
                。
              </p>

              <ExampleCard title="例：求函数定义域">
                <BlockMath math="f(x)=\frac{\sqrt{x+2}}{x-1}" />

                <p className="mt-5 text-sm text-slate-500">
                  第一步：根号中的式子不能小于 0。
                </p>

                <MathText>x + 2 ≥ 0</MathText>

                <p className="text-center text-sm text-slate-400">
                  ↓
                </p>

                <MathText>x ≥ −2</MathText>

                <p className="mt-5 text-sm text-slate-500">
                  第二步：分母不能等于 0。
                </p>

                <MathText>x − 1 ≠ 0</MathText>

                <p className="text-center text-sm text-slate-400">
                  ↓
                </p>

                <MathText>x ≠ 1</MathText>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  两个条件必须同时满足，因此定义域为：
                </p>

                <BlockMath math="[-2,1)\cup(1,+\infty)" />
              </ExampleCard>

              <TipBox>
                多个限制条件同时出现时，不是任选一个条件，
                而是取所有条件都满足的部分，也就是求
                <strong className="mx-1 text-slate-800">
                  交集
                </strong>
                。
              </TipBox>
            </LearningSection>

            {/* 04 值域 */}
            <LearningSection
              id="range"
              number="04"
              title="什么是值域？"
            >
              <p className="leading-8 text-slate-600">
                当自变量
                <InlineMath math="x" />
                在定义域中取值时，函数所有可能得到的
                <InlineMath math="y=f(x)" />
                的值组成的集合，叫做函数的
                <strong className="mx-1 text-slate-800">
                  值域
                </strong>
                。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="定义域"
                  main="x 能取什么值？"
                  sub="研究输入范围"
                />

                <InfoCard
                  title="值域"
                  main="y 能取什么值？"
                  sub="研究输出范围"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">
                  例如：
                </p>

                <BlockMath math="f(x)=x^2" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当
                  <InlineMath math="x\in\mathbb{R}" />
                  时，
                  <InlineMath math="x^2" />
                  永远不会小于 0。
                </p>

                <MathText>x² ≥ 0</MathText>

                <p className="mt-4 text-sm text-slate-600">
                  因此它的值域为：
                </p>

                <BlockMath math="[0,+\infty)" />
              </div>
            </LearningSection>

            {/* 05 求值域方法 */}
            <LearningSection
              id="range-methods"
              number="05"
              title="求值域的常用方法"
            >
              <div className="space-y-4">
                <MethodCard
                  number="方法一"
                  title="直接观察"
                  description="对于熟悉的基本函数，可以根据函数图像和基本性质直接判断值域。"
                />

                <MethodCard
                  number="方法二"
                  title="利用单调性"
                  description="当函数在给定区间上单调时，可以通过端点函数值判断最大值和最小值。"
                />

                <MethodCard
                  number="方法三"
                  title="配方法"
                  description="二次函数经常通过配方找到顶点，从而判断最大值或最小值。"
                />

                <MethodCard
                  number="方法四"
                  title="换元或整理解析式"
                  description="把复杂解析式转化成更熟悉的形式，再分析函数值能够取得的范围。"
                />
              </div>
            </LearningSection>

            {/* 06 二次函数值域 */}
            <LearningSection
              id="quadratic"
              number="06"
              title="二次函数值域：配方法"
            >
              <ExampleCard title="例：求函数的值域">
                <BlockMath math="f(x)=x^2-4x+7" />

                <p className="mt-5 text-sm text-slate-600">
                  配方：
                </p>

                <BlockMath math="f(x)=(x-2)^2+3" />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  平方数一定大于或等于 0，因此：
                </p>

                <MathText>(x − 2)² ≥ 0</MathText>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  所以：
                </p>

                <MathText>f(x) ≥ 3</MathText>

                <p className="mt-4 text-sm text-slate-600">
                  因此值域为：
                </p>

                <BlockMath math="[3,+\infty)" />
              </ExampleCard>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">
                  快速理解
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-700">
                      抛物线开口向上
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      顶点对应最小值，所以函数值不会低于最小值。
                    </p>

                    <BlockMath math="[y_{\min},+\infty)" />
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-700">
                      抛物线开口向下
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      顶点对应最大值，所以函数值不会超过最大值。
                    </p>

                    <BlockMath math="(-\infty,y_{\max}]" />
                  </div>
                </div>
              </div>
            </LearningSection>

            {/* 07 指定区间 */}
            <LearningSection
              id="interval"
              number="07"
              title="指定区间上的值域"
            >
              <p className="leading-8 text-slate-600">
                如果题目规定了
                <InlineMath math="x" />
                的取值范围，那么求值域时必须在这个范围内分析。
              </p>

              <ExampleCard title="例：求指定区间上的值域">
                <BlockMath math="f(x)=x^2-2x+3,\quad x\in[0,3]" />

                <p className="mt-5 text-sm text-slate-600">
                  先配方：
                </p>

                <BlockMath math="f(x)=(x-1)^2+2" />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  顶点横坐标为
                  <InlineMath math="x=1" />
                  ，而 1 在区间 [0,3] 内。
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  所以最小值为：
                </p>

                <BlockMath math="f(1)=2" />

                <p className="mt-5 text-sm text-slate-600">
                  再计算两个端点：
                </p>

                <BlockMath math="f(0)=3,\qquad f(3)=6" />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  因此最小值是 2，最大值是 6，值域为：
                </p>

                <BlockMath math="[2,6]" />
              </ExampleCard>
            </LearningSection>

            {/* 08 易错点 */}
            <LearningSection
              id="mistakes"
              number="08"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="忘记分母不能为 0"
                  wrong="1/(x−2) 的定义域是 R。"
                  correct="必须排除 x=2，因此定义域是所有实数中去掉 2。"
                />

                <MistakeCard
                  title="把根式条件写成严格大于"
                  wrong="√(x−1) 要求 x−1>0。"
                  correct="根号内允许等于 0，因此正确条件应为 x−1≥0。"
                />

                <MistakeCard
                  title="忽略多个条件"
                  wrong="只处理根式限制，却忘记分母限制。"
                  correct="一个解析式中出现的所有限制条件都必须同时满足。"
                />

                <MistakeCard
                  title="求值域时忽略定义域"
                  wrong="看到二次函数就直接使用整个实数范围上的最值。"
                  correct="如果题目限定了 x 的范围，必须在指定区间内重新判断最大值和最小值。"
                />
              </div>
            </LearningSection>

            {/* 09 即时练习 */}
            <LearningSection
              id="quiz"
              number="09"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查定义域和值域是否已经掌握。
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
            </LearningSection>

            {/* 下一节 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-600">
                完成本节
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                下一步：函数的单调性
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                掌握定义域和值域之后，
                下一步开始研究函数值随着自变量变化时呈现出的增减规律。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/grade1/functions/monotonicity"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  学习函数单调性 →
                </Link>

                <Link
                  href="/grade1/functions"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  返回章节目录
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
                <Anchor href="#domain" label="01 定义域概念" />
                <Anchor href="#rules" label="02 常见限制" />
                <Anchor href="#combined" label="03 条件交集" />
                <Anchor href="#range" label="04 值域概念" />
                <Anchor
                  href="#range-methods"
                  label="05 求值域方法"
                />
                <Anchor
                  href="#quadratic"
                  label="06 二次函数值域"
                />
                <Anchor
                  href="#interval"
                  label="07 区间值域"
                />
                <Anchor href="#mistakes" label="08 易错点" />
                <Anchor href="#quiz" label="09 即时练习" />
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LearningSection({
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

      {mathText(children)}
    </section>
  );
}

function MathText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 text-center font-serif text-xl text-slate-900 sm:text-2xl">
      {mathText(children)}
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

      {mathText(children)}
    </div>
  );
}

function RuleCard({
  title,
  description,
  formula,
  condition,
  result,
}: {
  title: string;
  description: string;
  formula: string;
  condition: string;
  result: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="grid gap-5 md:grid-cols-[160px_1fr_1fr] md:items-center">
        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            {mathText(description)}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50">
          <BlockMath math={formula} />
        </div>

        <div className="text-sm text-slate-600">
          <p>
            条件：
            <span className="ml-1 font-medium text-slate-800">
              {mathText(condition)}
            </span>
          </p>

          <p className="mt-2">
            得到：
            <span className="ml-1 font-medium text-slate-800">
              {mathText(result)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  main,
  sub,
}: {
  title: string;
  main: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-3 font-semibold text-slate-900">
        {mathText(main)}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {mathText(sub)}
      </p>
    </div>
  );
}

function MethodCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <span className="shrink-0 text-xs font-semibold text-blue-600">
        {number}
      </span>

      <div>
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          {mathText(description)}
        </p>
      </div>
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

      <div className="mt-5">
        {mathText(children)}
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
            {mathText(wrong)}
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50/60 p-4">
          <p className="text-xs font-medium text-emerald-600">
            正确理解
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {mathText(correct)}
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
  const isCorrect = selected === question.answer;

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

      {question.formula && (
        <div className="my-5">
          <BlockMath math={question.formula} />
        </div>
      )}

      <p className="text-sm leading-7 text-slate-700">
        {mathText(question.question)}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen = selected === option.key;

          const correct =
            submitted &&
            option.key === question.answer;

          const wrongChosen =
            submitted &&
            chosen &&
            option.key !== question.answer;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onChoose(option.key)}
              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                correct
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : wrongChosen
                    ? "border-red-300 bg-red-50 text-red-600"
                    : chosen
                      ? "border-slate-400 bg-slate-50 text-slate-900"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
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
          onClick={onSubmit}
          disabled={!selected}
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              正确答案：{mathText(question.answer)}
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {mathText(question.explanation)}
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