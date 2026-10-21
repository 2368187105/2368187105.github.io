"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
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
      "已知 a>0，b>0，则基本不等式的正确形式是：",
    options: [
      {
        key: "A",
        text: "(a+b)/2 ≥ √(ab)",
      },
      {
        key: "B",
        text: "(a+b)/2 ≤ √(ab)",
      },
      {
        key: "C",
        text: "a+b ≤ 2√(ab)",
      },
      {
        key: "D",
        text: "ab ≥ (a+b)²/4",
      },
    ],
    answer: "A",
    explanation:
      "当 a>0、b>0 时，基本不等式为 (a+b)/2 ≥ √(ab)，等号当且仅当 a=b 时成立。",
  },
  {
    id: 2,
    question:
      "已知 x>0，则 x+4/x 的最小值为：",
    options: [
      {
        key: "A",
        text: "2",
      },
      {
        key: "B",
        text: "4",
      },
      {
        key: "C",
        text: "6",
      },
      {
        key: "D",
        text: "8",
      },
    ],
    answer: "B",
    explanation:
      "由基本不等式，x+4/x ≥ 2√(x·4/x)=4。当 x=2 时等号成立，所以最小值为 4。",
  },
  {
    id: 3,
    question:
      "若正数 a、b 满足 a+b=10，则 ab 的最大值为：",
    options: [
      {
        key: "A",
        text: "10",
      },
      {
        key: "B",
        text: "20",
      },
      {
        key: "C",
        text: "25",
      },
      {
        key: "D",
        text: "100",
      },
    ],
    answer: "C",
    explanation:
      "由 (a+b)/2 ≥ √(ab)，有 ab≤((a+b)/2)²=25。当 a=b=5 时等号成立，因此最大值为 25。",
  },
];

export default function BasicInequalityPage() {
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
            基本不等式
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                02 · 基本不等式
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                高频考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              基本不等式
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              基本不等式是高中数学求最值的重要工具。
              本节重点掌握基本形式、成立条件、等号成立条件，
              以及“和定积最大、积定和最小”等常见应用。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#basic"
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
              id="basic"
              number="01"
              title="从一个简单不等式开始"
            >
              <p className="leading-8 text-slate-600">
                对任意实数 a、b，都有：
              </p>

              <MathBox>
                (a − b)² ≥ 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                展开：
              </p>

              <MathBox>
                a² − 2ab + b² ≥ 0
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                移项以后得到：
              </p>

              <MathBox>
                a² + b² ≥ 2ab
              </MathBox>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                <p className="text-sm font-semibold text-blue-600">
                  等号成立条件
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  因为只有当 a−b=0 时，
                  (a−b)² 才等于 0，所以等号成立当且仅当：
                </p>

                <MathBox>a = b</MathBox>
              </div>
            </Section>

            {/* 02 */}
            <Section
              id="mean"
              number="02"
              title="基本不等式的标准形式"
            >
              <p className="leading-8 text-slate-600">
                当 a&gt;0、b&gt;0 时，
                可以得到高中阶段最常用的基本不等式：
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7">
                <MathBox>{mathText("(a + b) / 2 ≥ √(ab)")}</MathBox>

                <p className="text-center text-sm text-slate-400">
                  等号当且仅当 a = b 时成立
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                也可以写成：
              </p>

              <MathBox>{mathText("a + b ≥ 2√(ab)")}</MathBox>

              <CompareCard
                left="(a+b)/2"
                leftText="算术平均数"
                right="√(ab)"
                rightText="几何平均数"
              />

              <TipBox>
                可以记成：
                <strong className="mx-1 text-slate-900">
                  算术平均数 ≥ 几何平均数
                </strong>
                。
              </TipBox>
            </Section>

            {/* 03 */}
            <Section
              id="conditions"
              number="03"
              title="使用基本不等式的三个关键条件"
            >
              <p className="leading-8 text-slate-600">
                利用基本不等式求最值时，
                不能看到两个式子就直接套公式。
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <ConditionCard
                  number="1"
                  title="正"
                  description="参与基本不等式的两个量通常必须为正数。"
                />

                <ConditionCard
                  number="2"
                  title="定"
                  description="和或积中至少要有一个能够确定下来。"
                />

                <ConditionCard
                  number="3"
                  title="等"
                  description="必须检查两个量能否相等，确保最值真正能够取得。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-center text-lg font-semibold text-slate-900">
                  一正 · 二定 · 三相等
                </p>

                <p className="mt-2 text-center text-sm text-slate-500">
                  这是使用基本不等式求最值时最重要的检查顺序
                </p>
              </div>
            </Section>

            {/* 04 */}
            <Section
              id="sum-fixed"
              number="04"
              title="和一定，积有最大值"
            >
              <p className="leading-8 text-slate-600">
                若正数 a、b 的和一定：
              </p>

              <MathBox>a + b = S</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                根据基本不等式：
              </p>

              <MathBox>{mathText("(a + b) / 2 ≥ √(ab)")}</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                两边平方：
              </p>

              <MathBox>
                ab ≤ (S / 2)²
              </MathBox>

              <ResultCard
                title="结论"
                main="和一定，积有最大值"
                detail="最大值在 a=b 时取得。"
              />

              <ExampleCard title="例如：a+b=10">
                <p className="text-sm leading-7 text-slate-600">
                  已知 a&gt;0、b&gt;0，且 a+b=10。
                </p>

                <MathBox>
                  ab ≤ ((a+b)/2)²
                </MathBox>

                <MathBox>
                  ab ≤ 5² = 25
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当 a=b=5 时等号成立。
                </p>

                <AnswerBox>
                  ab 的最大值为 25
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 05 */}
            <Section
              id="product-fixed"
              number="05"
              title="积一定，和有最小值"
            >
              <p className="leading-8 text-slate-600">
                若正数 a、b 的积一定：
              </p>

              <MathBox>ab = P</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                根据基本不等式：
              </p>

              <MathBox>{mathText("a + b ≥ 2√(ab)")}</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                因此：
              </p>

              <MathBox>{mathText("a + b ≥ 2√P")}</MathBox>

              <ResultCard
                title="结论"
                main="积一定，和有最小值"
                detail="最小值在 a=b 时取得。"
              />

              <ExampleCard title="例如：ab=16">
                <p className="text-sm leading-7 text-slate-600">
                  已知 a&gt;0、b&gt;0，且 ab=16。
                </p>

                <MathBox>{mathText("a + b ≥ 2√16")}</MathBox>

                <MathBox>
                  a + b ≥ 8
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当 a=b=4 时等号成立。
                </p>

                <AnswerBox>
                  a+b 的最小值为 8
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 06 */}
            <Section
              id="fraction"
              number="06"
              title="常见形式：x + a/x"
            >
              <p className="leading-8 text-slate-600">
                高中题目中非常常见下面这种形式：
              </p>

              <MathBox>
                x + a/x
              </MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                当 x&gt;0、a&gt;0 时：
              </p>

              <MathBox>{mathText("x + a/x ≥ 2√a")}</MathBox>

              <p className="mt-5 leading-8 text-slate-600">
                等号成立要求：
              </p>

              <MathBox>
                x = a/x
              </MathBox>

              <MathBox>{mathText("x = √a")}</MathBox>

              <ExampleCard title="例：求 x+4/x 的最小值">
                <p className="text-sm leading-7 text-slate-600">
                  已知 x&gt;0。
                </p>

                <MathBox>{mathText("x + 4/x ≥ 2√(x·4/x)")}</MathBox>

                <MathBox>
                  x + 4/x ≥ 4
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  等号成立时：
                </p>

                <MathBox>
                  x = 4/x
                </MathBox>

                <MathBox>
                  x = 2
                </MathBox>

                <AnswerBox>
                  最小值为 4
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 07 */}
            <Section
              id="steps"
              number="07"
              title="利用基本不等式求最值的步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="判断是否为正数"
                  text="先确认准备套用基本不等式的两个量是否都为正。"
                />

                <StepItem
                  number="2"
                  title="观察和或积是否确定"
                  text="求积的最大值时通常需要和固定；求和的最小值时通常需要积固定。"
                />

                <StepItem
                  number="3"
                  title="应用基本不等式"
                  text="利用 (a+b)/2 ≥ √(ab) 得到所求式子的范围。"
                />

                <StepItem
                  number="4"
                  title="检查等号能否成立"
                  text="必须验证 a=b 是否能够满足题目的其他条件。"
                />

                <StepItem
                  number="5"
                  title="写出最值和取等条件"
                  text="最后不仅要写最大值或最小值，还要写在什么条件下取得。"
                  last
                />
              </div>
            </Section>

            {/* 08 */}
            <Section
              id="examples"
              number="08"
              title="典型例题"
            >
              <ExampleCard title="例 1：求积的最大值">
                <p className="text-sm leading-7 text-slate-600">
                  已知正数 x、y 满足 x+y=12，求 xy 的最大值。
                </p>

                <MathBox>
                  xy ≤ ((x+y)/2)²
                </MathBox>

                <MathBox>
                  xy ≤ 6² = 36
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当 x=y=6 时等号成立。
                </p>

                <AnswerBox>
                  xy 的最大值为 36
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 2：求和的最小值">
                <p className="text-sm leading-7 text-slate-600">
                  已知正数 x、y 满足 xy=9，求 x+y 的最小值。
                </p>

                <MathBox>{mathText("x + y ≥ 2√(xy)")}</MathBox>

                <MathBox>
                  x + y ≥ 6
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  当 x=y=3 时等号成立。
                </p>

                <AnswerBox>
                  x+y 的最小值为 6
                </AnswerBox>
              </ExampleCard>

              <ExampleCard title="例 3：分式型">
                <p className="text-sm leading-7 text-slate-600">
                  已知 x&gt;0，求 2x+8/x 的最小值。
                </p>

                <MathBox>
                  2x + 8/x
                </MathBox>

                <MathBox>{mathText("≥ 2√(2x·8/x)")}</MathBox>

                <MathBox>
                  = 8
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  等号成立要求 2x=8/x，
                  即 x=2。
                </p>

                <AnswerBox>
                  最小值为 8
                </AnswerBox>
              </ExampleCard>
            </Section>

            {/* 09 */}
            <Section
              id="mistakes"
              number="09"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="忘记正数条件"
                  wrong="看到 a+b 就直接使用 a+b≥2√(ab)"
                  correct="标准基本不等式涉及 √(ab) 时，需要确认 a、b 为非负；利用其求正数最值时通常要求 a、b>0。"
                />

                <MistakeCard
                  title="没有检查等号成立条件"
                  wrong="由不等式得到下界后，直接说它就是最小值"
                  correct="只有当 a=b 能够在题目条件下真正实现时，这个界才能成为取得到的最值。"
                />

                <MistakeCard
                  title="把最大值和最小值记反"
                  wrong="和一定时，积有最小值"
                  correct="正数中：和一定，积有最大值；积一定，和有最小值。"
                />

                <MistakeCard
                  title="公式中两个量选错"
                  wrong="求 2x+8/x 时直接把 x 和 8/x 当成两个量"
                  correct="应把 2x 和 8/x 看作两个正数，它们的乘积为 16，才能得到固定的下界。"
                />
              </div>
            </Section>

            {/* 10 */}
            <Section
              id="quiz"
              number="10"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查基本不等式是否已经掌握。
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
                下一步：一元二次函数与一元二次方程
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节将把二次函数图像与一元二次方程联系起来，
                重点学习判别式、方程根、函数零点以及抛物线与 x 轴的位置关系。
              </p>

              <Link
                href="/grade1/quadratic"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                返回章节目录
              </Link>
            </section>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                本节目录
              </p>

              <nav className="mt-4 space-y-1">
                <Anchor href="#basic" label="01 基础不等式" />
                <Anchor href="#mean" label="02 基本不等式" />
                <Anchor href="#conditions" label="03 使用条件" />
                <Anchor href="#sum-fixed" label="04 和定积最大" />
                <Anchor href="#product-fixed" label="05 积定和最小" />
                <Anchor href="#fraction" label="06 分式型" />
                <Anchor href="#steps" label="07 解题步骤" />
                <Anchor href="#examples" label="08 典型例题" />
                <Anchor href="#mistakes" label="09 易错点" />
                <Anchor href="#quiz" label="10 即时练习" />
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

      {mathText(children)}
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
      {mathText(children)}
    </div>
  );
}

function CompareCard({
  left,
  leftText,
  right,
  rightText,
}: {
  left: string;
  leftText: string;
  right: string;
  rightText: string;
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_60px_1fr] sm:items-center">
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
        <p className="font-serif text-xl text-slate-900">
          {mathText(left)}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          {leftText}
        </p>
      </div>

      <p className="text-center text-xl font-semibold text-slate-400">
        ≥
      </p>

      <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
        <p className="font-serif text-xl text-slate-900">
          {mathText(right)}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          {rightText}
        </p>
      </div>
    </div>
  );
}

function ConditionCard({
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

      <h3 className="mt-3 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {mathText(description)}
      </p>
    </div>
  );
}

function ResultCard({
  title,
  main,
  detail,
}: {
  title: string;
  main: string;
  detail: string;
}) {
  return (
    <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
      <p className="text-xs font-medium text-blue-600">
        {title}
      </p>

      <p className="mt-2 font-semibold text-slate-900">
        {mathText(main)}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {mathText(detail)}
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

      <div className="mt-4">{mathText(children)}</div>
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
          {mathText(text)}
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
        {mathText(question.question)}
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