"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

type QuickQuestion = {
  id: number;
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: QuickQuestion[] = [
  {
    id: 1,
    question: "下列对应关系中，能构成函数的是：",
    options: [
      {
        key: "A",
        text: "每个学生对应自己喜欢的所有学科",
      },
      {
        key: "B",
        text: "每个实数 x 对应它的平方 x²",
      },
      {
        key: "C",
        text: "每个正数对应两个平方根",
      },
      {
        key: "D",
        text: "每个学生对应班级中所有同学",
      },
    ],
    answer: "B",
    explanation:
      "函数要求定义域中的每一个 x，都必须有唯一确定的函数值与它对应。每个实数 x 的平方只有唯一结果 x²。",
  },
  {
    id: 2,
    question: "函数 f(x)=1/(x−2) 的定义域是：",
    options: [
      {
        key: "A",
        text: "R",
      },
      {
        key: "B",
        text: "(-∞, 2)",
      },
      {
        key: "C",
        text: "(2, +∞)",
      },
      {
        key: "D",
        text: "(-∞, 2) ∪ (2, +∞)",
      },
    ],
    answer: "D",
    explanation:
      "分母不能等于 0，因此 x ≠ 2，所以定义域是所有实数中去掉 2。",
  },
  {
    id: 3,
    question: "判断两个函数是否为同一个函数，主要看：",
    options: [
      {
        key: "A",
        text: "函数名称是否相同",
      },
      {
        key: "B",
        text: "解析式写法是否完全相同",
      },
      {
        key: "C",
        text: "定义域和对应关系是否相同",
      },
      {
        key: "D",
        text: "函数值是否都为正数",
      },
    ],
    answer: "C",
    explanation:
      "判断两个函数是否相同，关键看定义域和对应关系是否分别相同，而不是只比较解析式的外观。",
  },
];

export default function FunctionConceptPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});

  function chooseAnswer(questionId: number, answer: string) {
    if (submitted[questionId]) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  }

  function submitAnswer(questionId: number) {
    if (!answers[questionId]) {
      return;
    }

    setSubmitted((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  }

  function resetQuestion(questionId: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[questionId];
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
            函数的概念
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                01 · 函数基础
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                基础知识点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              函数的概念
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              函数描述两个变量之间确定的对应关系。
              它是高中函数体系的起点，也是后续学习单调性、
              奇偶性、指数函数、对数函数和三角函数的基础。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#definition"
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
            {/* 01 */}
            <LearningSection
              id="definition"
              number="01"
              title="什么是函数？"
            >
              <p className="leading-8 text-slate-600">
                设
                <InlineMath math="A" />
                、
                <InlineMath math="B" />
                是非空数集。如果按照某种确定的对应关系
                <InlineMath math="f" />
                ，使对于集合
                <InlineMath math="A" />
                中的
                <strong className="mx-1 text-slate-800">
                  任意一个
                </strong>
                数
                <InlineMath math="x" />
                ，在集合
                <InlineMath math="B" />
                中都有
                <strong className="mx-1 text-slate-800">
                  唯一确定
                </strong>
                的数
                <InlineMath math="y" />
                和它对应，那么就称这种对应关系为函数。
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-center text-sm text-slate-400">
                  函数最核心的对应关系
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-center sm:gap-8">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-800">
                      x
                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                      自变量
                    </p>
                  </div>

                  <span className="text-2xl text-blue-600">
                    →
                  </span>

                  <div className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
                    对应关系 f
                  </div>

                  <span className="text-2xl text-blue-600">
                    →
                  </span>

                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-800">
                      y
                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                      函数值
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <BlockMath math="y=f(x)" />
                </div>
              </div>

              <TipBox>
                判断一个对应关系是不是函数，最重要的一句话是：
                <strong className="mx-1 text-slate-800">
                  每一个 x 都必须对应唯一一个 y。
                </strong>
              </TipBox>
            </LearningSection>

            {/* 02 */}
            <LearningSection
              id="elements"
              number="02"
              title="函数的三个重要组成部分"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <InfoCard
                  number="1"
                  title="定义域"
                  description="自变量 x 所有允许取值组成的集合。"
                />

                <InfoCard
                  number="2"
                  title="对应关系"
                  description="规定 x 如何得到对应函数值 y 的规则。"
                />

                <InfoCard
                  number="3"
                  title="值域"
                  description="函数实际能够得到的所有函数值组成的集合。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">
                  例如：
                </p>

                <BlockMath math="f(x)=x^2,\quad x\in[-2,3]" />

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <SmallFact
                    label="定义域"
                    value="[-2, 3]"
                  />

                  <SmallFact
                    label="对应关系"
                    value="x → x²"
                  />

                  <SmallFact
                    label="值域"
                    value="[0, 9]"
                  />
                </div>
              </div>

              <TipBox>
                定义域研究
                <strong className="mx-1 text-slate-800">
                  x 能取什么值
                </strong>
                ，值域研究
                <strong className="mx-1 text-slate-800">
                  y 最终能取什么值
                </strong>
                。
              </TipBox>
            </LearningSection>

            {/* 03 */}
            <LearningSection
              id="domain"
              number="03"
              title="怎样确定函数的定义域？"
            >
              <p className="leading-8 text-slate-600">
                求定义域的核心原则是：
                <strong className="mx-1 text-slate-800">
                  保证函数解析式有意义。
                </strong>
              </p>

              <div className="mt-6 space-y-4">
                <RuleCard
                  title="分式"
                  description="分母不能为 0"
                  formula="\frac{1}{x-2}"
                  condition="x − 2 ≠ 0"
                  result="x ≠ 2"
                />

                <RuleCard
                  title="偶次根式"
                  description="被开方数必须大于或等于 0"
                  formula="\sqrt{x-3}"
                  condition="x − 3 ≥ 0"
                  result="x ≥ 3"
                />

                <RuleCard
                  title="一般整式"
                  description="通常对所有实数都有意义"
                  formula="x^2-3x+1"
                  condition="x 可以取任意实数"
                  result="定义域为 R"
                />
              </div>
            </LearningSection>

            {/* 04 */}
            <LearningSection
              id="representation"
              number="04"
              title="函数的三种常用表示方法"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <MethodCard
                  title="解析法"
                  description="利用数学表达式表示函数关系。"
                >
                  <BlockMath math="f(x)=2x+1" />
                </MethodCard>

                <MethodCard
                  title="列表法"
                  description="利用表格列出自变量和函数值。"
                >
                  <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 text-center text-sm">
                    <div className="grid grid-cols-4 bg-slate-50">
                      <span className="p-2">x</span>
                      <span className="p-2">0</span>
                      <span className="p-2">1</span>
                      <span className="p-2">2</span>
                    </div>

                    <div className="grid grid-cols-4 border-t border-slate-200">
                      <span className="p-2">y</span>
                      <span className="p-2">1</span>
                      <span className="p-2">3</span>
                      <span className="p-2">5</span>
                    </div>
                  </div>
                </MethodCard>

                <MethodCard
                  title="图像法"
                  description="在坐标系中利用图像表示函数关系。"
                >
                  <SimpleLineGraph />
                </MethodCard>
              </div>
            </LearningSection>

            {/* 05 */}
            <LearningSection
              id="same"
              number="05"
              title="怎样判断两个函数是否相同？"
            >
              <p className="leading-8 text-slate-600">
                两个函数相同，需要同时满足两个条件：
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  number="①"
                  title="定义域相同"
                  description="两个函数允许的自变量取值必须完全一致。"
                />

                <InfoCard
                  number="②"
                  title="对应关系相同"
                  description="对于相同的 x，得到的函数值必须完全一致。"
                />
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">
                  一个容易出错的例子
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <BlockMath math="f(x)=x" />

                    <p className="text-center text-xs text-slate-400">
                      定义域：R
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-4">
                    <BlockMath math="g(x)=\frac{x^2}{x}" />

                    <p className="text-center text-xs text-slate-400">
                      定义域：x ≠ 0
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  虽然当 x ≠ 0 时，
                  <InlineMath math="\frac{x^2}{x}=x" />
                  ，但两个函数的定义域不同，因此
                  <strong className="mx-1 text-slate-800">
                    不是同一个函数
                  </strong>
                  。
                </p>
              </div>
            </LearningSection>

            {/* 06 */}
            <LearningSection
              id="examples"
              number="06"
              title="典型例题"
            >
              <ExampleCard title="例题 1：判断是否构成函数">
                <p className="text-sm leading-7 text-slate-600">
                  对于每一个实数
                  <InlineMath math="x" />
                  ，规定
                  <InlineMath math="y=x^2" />
                  。这个对应关系是否构成函数？
                </p>

                <div className="mt-4 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm leading-7 text-slate-600">
                    构成函数。
                    因为对于任意一个实数 x，
                    都有唯一确定的 x² 与它对应。
                  </p>
                </div>
              </ExampleCard>

              <div className="mt-5">
                <ExampleCard title="例题 2：求函数定义域">
                  <p className="text-sm text-slate-600">
                    求函数
                  </p>

                  <BlockMath math="f(x)=\frac{\sqrt{x+1}}{x-2}" />

                  <p className="mt-5 text-sm text-slate-600">
                    根式要求：
                  </p>

                  <MathText>x + 1 ≥ 0</MathText>

                  <p className="text-center text-sm text-slate-400">
                    即 x ≥ −1
                  </p>

                  <p className="mt-5 text-sm text-slate-600">
                    同时分母不能为 0：
                  </p>

                  <MathText>x − 2 ≠ 0</MathText>

                  <p className="text-center text-sm text-slate-400">
                    即 x ≠ 2
                  </p>

                  <p className="mt-5 text-sm text-slate-600">
                    所以定义域为：
                  </p>

                  <BlockMath math="[-1,2)\cup(2,+\infty)" />
                </ExampleCard>
              </div>
            </LearningSection>

            {/* 07 */}
            <LearningSection
              id="mistakes"
              number="07"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="一个 x 对应多个 y"
                  wrong="y²=x 可以直接认为 y 是 x 的函数。"
                  correct="当 x>0 时，同一个 x 会对应两个 y，因此不满足函数的唯一性要求。"
                />

                <MistakeCard
                  title="只看解析式，不看定义域"
                  wrong="x 和 x²/x 化简结果一样，所以一定是同一个函数。"
                  correct="x²/x 要求 x≠0，而 f(x)=x 的定义域可以是 R，因此二者不是同一个函数。"
                />

                <MistakeCard
                  title="混淆定义域和值域"
                  wrong="定义域就是函数所有 y 的取值。"
                  correct="定义域描述 x 的允许取值，值域描述实际得到的 y 的取值。"
                />
              </div>
            </LearningSection>

            {/* 08 */}
            <LearningSection
              id="quiz"
              number="08"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查函数基础概念是否已经掌握。
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
                下一步：定义域与值域
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                理解函数概念之后，
                下一步系统学习各种函数定义域的求法，
                以及如何确定函数值能够取得的范围。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/grade1/functions/domain-range"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  学习定义域与值域 →
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
                <Anchor href="#definition" label="01 函数定义" />
                <Anchor href="#elements" label="02 函数三要素" />
                <Anchor href="#domain" label="03 定义域" />
                <Anchor
                  href="#representation"
                  label="04 表示方法"
                />
                <Anchor href="#same" label="05 同一函数" />
                <Anchor href="#examples" label="06 典型例题" />
                <Anchor href="#mistakes" label="07 易错点" />
                <Anchor href="#quiz" label="08 即时练习" />
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

      {children}
    </section>
  );
}

function MathText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 text-center font-serif text-xl text-slate-900 sm:text-2xl">
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

function InfoCard({
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

function SmallFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-800">
        {value}
      </p>
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
      <div className="grid gap-5 md:grid-cols-[140px_1fr_1fr] md:items-center">
        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-2">
          <BlockMath math={formula} />
        </div>

        <div className="text-sm text-slate-600">
          <p>
            条件：
            <span className="ml-1 font-medium text-slate-800">
              {condition}
            </span>
          </p>

          <p className="mt-2">
            得到：
            <span className="ml-1 font-medium text-slate-800">
              {result}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MethodCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {children}
    </div>
  );
}

function SimpleLineGraph() {
  return (
    <svg
      viewBox="0 0 220 130"
      className="mt-4 h-28 w-full"
      aria-label="一次函数图像"
    >
      <line
        x1="20"
        y1="105"
        x2="205"
        y2="105"
        stroke="#cbd5e1"
      />

      <line
        x1="55"
        y1="120"
        x2="55"
        y2="15"
        stroke="#cbd5e1"
      />

      <path
        d="M30 100 L185 30"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
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
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-5">
        {children}
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
  question: QuickQuestion;
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

      <p className="mt-4 text-sm leading-7 text-slate-700">
        {question.question}
      </p>

      <div className="mt-5 grid gap-2">
        {question.options.map((option) => {
          const chosen = selected === option.key;

          const correct =
            submitted && option.key === question.answer;

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
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
        >
          提交答案
        </button>
      ) : (
        <div className="mt-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">
              正确答案：{question.answer}
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