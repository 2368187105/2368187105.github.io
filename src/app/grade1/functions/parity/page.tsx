"use client";

import Link from "next/link";
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
    question: "下列函数中，属于偶函数的是：",
    options: [
      {
        key: "A",
        text: "f(x)=x³",
      },
      {
        key: "B",
        text: "f(x)=x²+1",
      },
      {
        key: "C",
        text: "f(x)=x²+x",
      },
      {
        key: "D",
        text: "f(x)=2x+1",
      },
    ],
    answer: "B",
    explanation:
      "对于 f(x)=x²+1，有 f(-x)=(-x)²+1=x²+1=f(x)，所以它是偶函数。",
  },
  {
    id: 2,
    question: "如果函数满足 f(-x)=-f(x)，并且定义域关于原点对称，那么该函数是：",
    options: [
      {
        key: "A",
        text: "奇函数",
      },
      {
        key: "B",
        text: "偶函数",
      },
      {
        key: "C",
        text: "既不是奇函数也不是偶函数",
      },
      {
        key: "D",
        text: "无法判断",
      },
    ],
    answer: "A",
    explanation:
      "在定义域关于原点对称的前提下，如果对任意 x 都有 f(-x)=-f(x)，函数就是奇函数。",
  },
  {
    id: 3,
    question: "函数 f(x)=x³-x 的奇偶性为：",
    options: [
      {
        key: "A",
        text: "奇函数",
      },
      {
        key: "B",
        text: "偶函数",
      },
      {
        key: "C",
        text: "非奇非偶函数",
      },
      {
        key: "D",
        text: "无法判断",
      },
    ],
    answer: "A",
    explanation:
      "f(-x)=(-x)³-(-x)=-x³+x=-(x³-x)=-f(x)，所以 f(x)=x³-x 是奇函数。",
  },
];

export default function ParityPage() {
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
            函数的奇偶性
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                04 · 函数性质
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                重要考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              函数的奇偶性
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              奇偶性描述函数图像的对称特征。
              偶函数的图像关于 y 轴对称，
              奇函数的图像关于坐标原点对称。
              判断奇偶性的核心，是比较 f(-x) 与 f(x) 的关系。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#prerequisite"
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
            {/* 01 前提 */}
            <LearningSection
              id="prerequisite"
              number="01"
              title="判断奇偶性之前，先看定义域"
            >
              <p className="leading-8 text-slate-600">
                一个函数要讨论奇偶性，首先必须满足一个重要条件：
                <strong className="mx-1 text-slate-800">
                  定义域关于原点对称。
                </strong>
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <DomainCard
                  title="可以讨论奇偶性"
                  range="[-3,3]"
                  description="如果 x 在定义域内，那么 -x 也在定义域内。"
                  valid
                />

                <DomainCard
                  title="不能成为奇函数或偶函数"
                  range="[0,+∞)"
                  description="例如 x=2 在定义域内，但 -2 不在定义域内。"
                  valid={false}
                />
              </div>

              <TipBox>
                不要一看到函数解析式就马上计算 f(-x)。
                <strong className="mx-1 text-slate-800">
                  第一步永远先看定义域。
                </strong>
              </TipBox>
            </LearningSection>

            {/* 02 偶函数 */}
            <LearningSection
              id="even"
              number="02"
              title="什么是偶函数？"
            >
              <p className="leading-8 text-slate-600">
                如果函数的定义域关于原点对称，并且对于定义域内任意
                <InlineMath math="x" />
                ，都有：
              </p>

              <FormulaText>f(-x) = f(x)</FormulaText>

              <p className="mt-5 leading-8 text-slate-600">
                那么函数
                <InlineMath math="f(x)" />
                就叫做
                <strong className="mx-1 text-slate-800">
                  偶函数
                </strong>
                。
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium text-blue-600">
                    代数特征
                  </p>

                  <FormulaText>f(-x) = f(x)</FormulaText>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    把 x 换成 -x 后，函数值保持不变。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium text-blue-600">
                    图像特征
                  </p>

                  <EvenGraph />

                  <p className="mt-3 text-center text-sm text-slate-500">
                    图像关于 y 轴对称
                  </p>
                </div>
              </div>

              <ExampleCard title="例：判断 f(x)=x²+2 的奇偶性">
                <p className="text-sm leading-7 text-slate-600">
                  定义域为 R，关于原点对称。
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  把 x 替换成 -x：
                </p>

                <BlockMath math="f(-x)=(-x)^2+2" />

                <BlockMath math="f(-x)=x^2+2" />

                <p className="mt-4 text-sm text-slate-600">
                  因此：
                </p>

                <FormulaText>f(-x) = f(x)</FormulaText>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  所以
                  <InlineMath math="f(x)=x^2+2" />
                  是偶函数。
                </p>
              </ExampleCard>
            </LearningSection>

            {/* 03 奇函数 */}
            <LearningSection
              id="odd"
              number="03"
              title="什么是奇函数？"
            >
              <p className="leading-8 text-slate-600">
                如果函数的定义域关于原点对称，并且对于定义域内任意
                <InlineMath math="x" />
                ，都有：
              </p>

              <FormulaText>f(-x) = -f(x)</FormulaText>

              <p className="mt-5 leading-8 text-slate-600">
                那么函数
                <InlineMath math="f(x)" />
                就叫做
                <strong className="mx-1 text-slate-800">
                  奇函数
                </strong>
                。
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium text-blue-600">
                    代数特征
                  </p>

                  <FormulaText>f(-x) = -f(x)</FormulaText>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    把 x 换成 -x 后，函数值变成原来的相反数。
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-medium text-blue-600">
                    图像特征
                  </p>

                  <OddGraph />

                  <p className="mt-3 text-center text-sm text-slate-500">
                    图像关于坐标原点对称
                  </p>
                </div>
              </div>

              <ExampleCard title="例：判断 f(x)=x³-x 的奇偶性">
                <p className="text-sm leading-7 text-slate-600">
                  定义域为 R，关于原点对称。
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  计算 f(-x)：
                </p>

                <BlockMath math="f(-x)=(-x)^3-(-x)" />

                <BlockMath math="f(-x)=-x^3+x" />

                <BlockMath math="f(-x)=-(x^3-x)" />

                <p className="mt-4 text-sm text-slate-600">
                  所以：
                </p>

                <FormulaText>f(-x) = -f(x)</FormulaText>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  因此
                  <InlineMath math="f(x)=x^3-x" />
                  是奇函数。
                </p>
              </ExampleCard>
            </LearningSection>

            {/* 04 非奇非偶 */}
            <LearningSection
              id="neither"
              number="04"
              title="什么情况下既不是奇函数也不是偶函数？"
            >
              <p className="leading-8 text-slate-600">
                很多函数既不是奇函数，也不是偶函数。
                常见情况主要有两类。
              </p>

              <div className="mt-6 space-y-4">
                <CaseCard
                  number="情况一"
                  title="定义域不关于原点对称"
                  description="这种情况下，直接可以判断函数不是奇函数，也不是偶函数。"
                />

                <CaseCard
                  number="情况二"
                  title="定义域对称，但两个等式都不成立"
                  description="如果 f(-x) 既不等于 f(x)，也不等于 -f(x)，那么函数非奇非偶。"
                />
              </div>

              <ExampleCard title="例：判断 f(x)=x²+x 的奇偶性">
                <p className="text-sm leading-7 text-slate-600">
                  定义域为 R，关于原点对称。
                </p>

                <p className="mt-4 text-sm text-slate-600">
                  计算：
                </p>

                <BlockMath math="f(-x)=(-x)^2+(-x)" />

                <BlockMath math="f(-x)=x^2-x" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  显然它既不等于
                  <InlineMath math="f(x)=x^2+x" />
                  ，也不等于
                  <InlineMath math="-f(x)" />
                  。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-800">
                  因此这个函数既不是奇函数，也不是偶函数。
                </p>
              </ExampleCard>
            </LearningSection>

            {/* 05 判断步骤 */}
            <LearningSection
              id="steps"
              number="05"
              title="判断函数奇偶性的标准步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="先求或观察定义域"
                  text="判断定义域是否关于原点对称。"
                />

                <StepItem
                  number="2"
                  title="计算 f(-x)"
                  text="将解析式中的所有 x 替换成 -x，并认真化简。"
                />

                <StepItem
                  number="3"
                  title="比较"
                  text="比较 f(-x)、f(x) 和 -f(x) 三者之间的关系。"
                />

                <StepItem
                  number="4"
                  title="得出结论"
                  text="f(-x)=f(x) 为偶函数；f(-x)=-f(x) 为奇函数；否则通常为非奇非偶函数。"
                  last
                />
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="grid grid-cols-[1fr_1fr] border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                  <span>判断条件</span>
                  <span>结论</span>
                </div>

                <SummaryRow
                  left="定义域关于原点对称，且 f(-x)=f(x)"
                  right="偶函数"
                />

                <SummaryRow
                  left="定义域关于原点对称，且 f(-x)=-f(x)"
                  right="奇函数"
                />

                <SummaryRow
                  left="定义域不关于原点对称"
                  right="非奇非偶"
                />

                <SummaryRow
                  left="定义域对称，但两种等式都不成立"
                  right="非奇非偶"
                  last
                />
              </div>
            </LearningSection>

            {/* 06 图像 */}
            <LearningSection
              id="symmetry"
              number="06"
              title="从图像快速识别奇偶性"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <SymmetryCard
                  title="偶函数"
                  subtitle="关于 y 轴对称"
                  type="even"
                />

                <SymmetryCard
                  title="奇函数"
                  subtitle="关于原点对称"
                  type="odd"
                />
              </div>

              <TipBox>
                图像法非常直观，但考试中如果题目要求
                “证明函数为奇函数或偶函数”，
                仍然要通过
                <strong className="mx-1 text-slate-800">
                  f(-x)
                </strong>
                与 f(x) 的关系进行说明。
              </TipBox>
            </LearningSection>

            {/* 07 特殊结论 */}
            <LearningSection
              id="special"
              number="07"
              title="几个容易考到的特殊结论"
            >
              <div className="space-y-4">
                <KnowledgeCard
                  title="奇函数在原点有定义时，必有 f(0)=0"
                  description="因为奇函数满足 f(-0)=-f(0)，也就是 f(0)=-f(0)，所以 f(0)=0。"
                />

                <KnowledgeCard
                  title="偶函数左右两侧函数值对应相等"
                  description="如果 f(x) 是偶函数，那么 f(-2)=f(2)、f(-5)=f(5)。"
                />

                <KnowledgeCard
                  title="奇函数左右两侧函数值互为相反数"
                  description="如果 f(x) 是奇函数，那么 f(-2)=-f(2)。"
                />

                <KnowledgeCard
                  title="零函数既是奇函数，也是偶函数"
                  description="对于 f(x)=0，同时满足 f(-x)=f(x) 和 f(-x)=-f(x)。"
                />
              </div>
            </LearningSection>

            {/* 08 易错点 */}
            <LearningSection
              id="mistakes"
              number="08"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="没有先检查定义域"
                  wrong="直接算 f(-x)，发现等式成立，就判断是奇函数或偶函数。"
                  correct="奇偶性的前提是定义域关于原点对称，必须先检查定义域。"
                />

                <MistakeCard
                  title="计算 f(-x) 时漏掉括号"
                  wrong="f(x)=x²+x，则 f(-x)=-x²-x。"
                  correct="应该把每一个 x 都替换成 (-x)，所以 f(-x)=(-x)²+(-x)=x²-x。"
                />

                <MistakeCard
                  title="把图像对称关系记反"
                  wrong="奇函数关于 y 轴对称，偶函数关于原点对称。"
                  correct="偶函数关于 y 轴对称；奇函数关于原点对称。"
                />

                <MistakeCard
                  title="认为所有函数非奇即偶"
                  wrong="一个函数一定只能是奇函数或偶函数。"
                  correct="大量函数既不是奇函数也不是偶函数，零函数甚至既奇又偶。"
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
                完成下面 3 道题，检查是否掌握了奇偶性的基本判断。
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
                下一步：函数的最大值与最小值
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                学会单调性和奇偶性之后，
                下一步研究函数在给定范围内能够取得的最大值和最小值，
                完成本章最后一个核心知识点。
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/grade1/functions"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  返回章节目录
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  去做专题训练
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
                <Anchor
                  href="#prerequisite"
                  label="01 判断前提"
                />
                <Anchor href="#even" label="02 偶函数" />
                <Anchor href="#odd" label="03 奇函数" />
                <Anchor href="#neither" label="04 非奇非偶" />
                <Anchor href="#steps" label="05 判断步骤" />
                <Anchor href="#symmetry" label="06 图像对称" />
                <Anchor href="#special" label="07 特殊结论" />
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

      {children}
    </section>
  );
}

function FormulaText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 text-center font-serif text-xl italic text-slate-900 sm:text-2xl">
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

function DomainCard({
  title,
  range,
  description,
  valid,
}: {
  title: string;
  range: string;
  description: string;
  valid: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            valid
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {valid ? "对称" : "不对称"}
        </span>
      </div>

      <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center font-serif text-xl text-slate-800">
        {range}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function EvenGraph() {
  return (
    <svg
      viewBox="0 0 300 170"
      className="mt-4 h-36 w-full"
      aria-label="偶函数图像"
    >
      <line
        x1="25"
        y1="140"
        x2="280"
        y2="140"
        stroke="#cbd5e1"
      />

      <line
        x1="150"
        y1="155"
        x2="150"
        y2="15"
        stroke="#cbd5e1"
      />

      <path
        d="M55 35 C85 95, 112 128, 150 132 C188 128, 215 95, 245 35"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <line
        x1="150"
        y1="20"
        x2="150"
        y2="145"
        stroke="#94a3b8"
        strokeDasharray="5 5"
      />

      <text
        x="270"
        y="134"
        fontSize="12"
        fill="#94a3b8"
      >
        x
      </text>

      <text
        x="157"
        y="24"
        fontSize="12"
        fill="#94a3b8"
      >
        y
      </text>
    </svg>
  );
}

function OddGraph() {
  return (
    <svg
      viewBox="0 0 300 170"
      className="mt-4 h-36 w-full"
      aria-label="奇函数图像"
    >
      <line
        x1="25"
        y1="85"
        x2="280"
        y2="85"
        stroke="#cbd5e1"
      />

      <line
        x1="150"
        y1="155"
        x2="150"
        y2="15"
        stroke="#cbd5e1"
      />

      <path
        d="M45 135 C85 130, 115 110, 150 85 C185 60, 215 40, 255 35"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle
        cx="150"
        cy="85"
        r="4"
        fill="#2563eb"
      />

      <text
        x="270"
        y="79"
        fontSize="12"
        fill="#94a3b8"
      >
        x
      </text>

      <text
        x="157"
        y="24"
        fontSize="12"
        fill="#94a3b8"
      >
        y
      </text>
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
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <div className="mt-5">
        {children}
      </div>
    </div>
  );
}

function CaseCard({
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
          {description}
        </p>
      </div>
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

function SummaryRow({
  left,
  right,
  last = false,
}: {
  left: string;
  right: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_1fr] px-5 py-4 text-sm ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <span className="pr-4 text-slate-500">
        {left}
      </span>

      <span className="font-medium text-slate-800">
        {right}
      </span>
    </div>
  );
}

function SymmetryCard({
  title,
  subtitle,
  type,
}: {
  title: string;
  subtitle: string;
  type: "even" | "odd";
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {subtitle}
      </p>

      {type === "even" ? (
        <EvenGraph />
      ) : (
        <OddGraph />
      )}
    </div>
  );
}

function KnowledgeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        {description}
      </p>
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

      {question.formula && (
        <div className="my-5">
          <BlockMath math={question.formula} />
        </div>
      )}

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

          const wrongChosen =
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