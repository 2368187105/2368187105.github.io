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
      "已知 A={1,2,3}，B={2,3,4}，则 A∩B 等于：",
    options: [
      { key: "A", text: "{1,2,3,4}" },
      { key: "B", text: "{2,3}" },
      { key: "C", text: "{1,4}" },
      { key: "D", text: "∅" },
    ],
    answer: "B",
    explanation:
      "交集由两个集合中共同具有的元素组成。A 和 B 共同含有 2、3，所以 A∩B={2,3}。",
  },
  {
    id: 2,
    question:
      "已知 A={1,2,3}，B={2,3,4}，则 A∪B 等于：",
    options: [
      { key: "A", text: "{2,3}" },
      { key: "B", text: "{1,4}" },
      { key: "C", text: "{1,2,3,4}" },
      { key: "D", text: "{1,2,2,3,3,4}" },
    ],
    answer: "C",
    explanation:
      "并集包含属于 A 或属于 B 的所有元素。集合中的相同元素只写一次，因此 A∪B={1,2,3,4}。",
  },
  {
    id: 3,
    question:
      "全集 U={1,2,3,4,5}，A={1,3,5}，则 A 在 U 中的补集为：",
    options: [
      { key: "A", text: "{1,3,5}" },
      { key: "B", text: "{2,4}" },
      { key: "C", text: "{1,2,3,4,5}" },
      { key: "D", text: "∅" },
    ],
    answer: "B",
    explanation:
      "补集是在全集 U 中，但不在集合 A 中的元素组成的集合，因此补集为 {2,4}。",
  },
];

export default function SetOperationsPage() {
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
            href="/grade1/sets"
            className="hover:text-slate-700"
          >
            集合与常用逻辑用语
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            集合的基本运算
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                03 · 集合运算
              </span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                高频考点
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              集合的基本运算
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              集合之间不仅存在包含关系，还可以进行运算。
              本节重点学习交集、并集和补集，
              并结合 Venn 图和数轴理解集合运算。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#intersection"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始学习
              </a>

              <Link
                href="/grade1/sets"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                返回章节目录
              </Link>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_250px]">
          {/* 左侧 */}
          <div className="min-w-0 space-y-14">
            {/* 01 交集 */}
            <Section
              id="intersection"
              number="01"
              title="交集"
            >
              <p className="leading-8 text-slate-600">
                一般地，由所有
                <strong className="mx-1 text-slate-900">
                  既属于集合 A，又属于集合 B
                </strong>
                的元素组成的集合，称为 A 与 B 的交集。
              </p>

              <MathBox>A ∩ B</MathBox>

              <p className="text-center text-sm text-slate-400">
                读作：A 交 B
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  A = {"{1,2,3}"}
                </MathBox>

                <MathBox>
                  B = {"{2,3,4}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  两个集合共同具有的元素是 2、3，因此：
                </p>

                <MathBox>
                  A ∩ B = {"{2,3}"}
                </MathBox>
              </ExampleCard>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-slate-400">
                  Venn 图理解
                </p>

                <IntersectionGraph />

                <p className="mt-4 text-center text-sm text-slate-500">
                  两个集合重叠的部分就是交集
                </p>
              </div>

              <TipBox>
                记忆方法：
                <strong className="mx-1 text-slate-800">
                  交集找“共同”
                </strong>
                。
              </TipBox>
            </Section>

            {/* 02 并集 */}
            <Section
              id="union"
              number="02"
              title="并集"
            >
              <p className="leading-8 text-slate-600">
                一般地，由所有属于集合 A
                <strong className="mx-1 text-slate-900">
                  或
                </strong>
                属于集合 B 的元素组成的集合，
                称为 A 与 B 的并集。
              </p>

              <MathBox>A ∪ B</MathBox>

              <p className="text-center text-sm text-slate-400">
                读作：A 并 B
              </p>

              <ExampleCard title="例如">
                <MathBox>
                  A = {"{1,2,3}"}
                </MathBox>

                <MathBox>
                  B = {"{2,3,4}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  把两个集合中的所有元素合并，并去掉重复元素：
                </p>

                <MathBox>
                  A ∪ B = {"{1,2,3,4}"}
                </MathBox>
              </ExampleCard>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-slate-400">
                  Venn 图理解
                </p>

                <UnionGraph />

                <p className="mt-4 text-center text-sm text-slate-500">
                  两个集合覆盖到的全部区域就是并集
                </p>
              </div>

              <TipBox>
                记忆方法：
                <strong className="mx-1 text-slate-800">
                  并集找“全部”
                </strong>
                ，但是重复元素只写一次。
              </TipBox>
            </Section>

            {/* 03 补集 */}
            <Section
              id="complement"
              number="03"
              title="补集"
            >
              <p className="leading-8 text-slate-600">
                在研究集合问题时，如果所有研究对象组成一个集合 U，
                我们称 U 为
                <strong className="mx-1 text-slate-900">
                  全集
                </strong>
                。
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                对于全集 U 的一个子集 A，
                由 U 中
                <strong className="mx-1 text-slate-900">
                  不属于 A
                </strong>
                的所有元素组成的集合，
                称为 A 相对于 U 的补集。
              </p>

              <MathBox>∁ᵤA</MathBox>

              <ExampleCard title="例如">
                <MathBox>
                  U = {"{1,2,3,4,5}"}
                </MathBox>

                <MathBox>
                  A = {"{1,3,5}"}
                </MathBox>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  全集 U 中不属于 A 的元素为 2、4，因此：
                </p>

                <MathBox>
                  ∁ᵤA = {"{2,4}"}
                </MathBox>
              </ExampleCard>

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <ComplementGraph />

                <p className="mt-4 text-center text-sm text-slate-500">
                  全集 U 中除去 A 后剩下的部分，就是 A 的补集
                </p>
              </div>
            </Section>

            {/* 04 基本性质 */}
            <Section
              id="properties"
              number="04"
              title="集合运算的基本性质"
            >
              <p className="leading-8 text-slate-600">
                下面这些关系非常常用，建议直接理解并记住。
              </p>

              <div className="mt-6 space-y-3">
                <PropertyCard
                  expression="A ∩ A = A"
                  description="一个集合与自己取交集，仍然是它自己。"
                />

                <PropertyCard
                  expression="A ∪ A = A"
                  description="一个集合与自己取并集，仍然是它自己。"
                />

                <PropertyCard
                  expression="A ∩ ∅ = ∅"
                  description="任何集合与空集没有共同元素。"
                />

                <PropertyCard
                  expression="A ∪ ∅ = A"
                  description="加入空集不会增加任何元素。"
                />

                <PropertyCard
                  expression="A ∩ U = A"
                  description="A 中的元素本来都属于全集 U。"
                />

                <PropertyCard
                  expression="A ∪ U = U"
                  description="全集已经包含所有研究对象。"
                />
              </div>
            </Section>

            {/* 05 区间 */}
            <Section
              id="interval"
              number="05"
              title="数轴上的集合运算"
            >
              <p className="leading-8 text-slate-600">
                当集合用区间表示时，
                可以借助数轴快速判断交集和并集。
              </p>

              <ExampleCard title="例：求两个区间的交集">
                <MathBox>
                  A = [1,5]
                </MathBox>

                <MathBox>
                  B = [3,7]
                </MathBox>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  两个区间共同覆盖的是从 3 到 5，因此：
                </p>

                <MathBox>
                  A ∩ B = [3,5]
                </MathBox>

                <IntervalIntersection />
              </ExampleCard>

              <ExampleCard title="例：求两个区间的并集">
                <MathBox>
                  A = [1,5]
                </MathBox>

                <MathBox>
                  B = [3,7]
                </MathBox>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  两个区间合起来连续覆盖 1 到 7，因此：
                </p>

                <MathBox>
                  A ∪ B = [1,7]
                </MathBox>
              </ExampleCard>
            </Section>

            {/* 06 运算步骤 */}
            <Section
              id="steps"
              number="06"
              title="集合运算的解题步骤"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <StepItem
                  number="1"
                  title="看清题目要求"
                  text="先判断要求的是交集、并集还是补集。"
                />

                <StepItem
                  number="2"
                  title="明确每个集合中的元素"
                  text="如果是区间，可以先画数轴；如果是有限集合，可以直接列出元素。"
                />

                <StepItem
                  number="3"
                  title="按照定义进行运算"
                  text="交集找共同，并集找全部，补集找全集中不属于原集合的部分。"
                />

                <StepItem
                  number="4"
                  title="规范写出结果"
                  text="有限集合注意使用花括号，区间注意端点是否包含。"
                  last
                />
              </div>
            </Section>

            {/* 07 易错 */}
            <Section
              id="mistakes"
              number="07"
              title="常见易错点"
            >
              <div className="space-y-3">
                <MistakeCard
                  title="把交集和并集记反"
                  wrong="A∩B 表示两个集合所有元素合在一起"
                  correct="A∩B 找共同元素；A∪B 才是把两个集合的元素合并。"
                />

                <MistakeCard
                  title="并集中重复写元素"
                  wrong="{1,2}∪{2,3}={1,2,2,3}"
                  correct="集合中的元素具有互异性，所以结果是 {1,2,3}。"
                />

                <MistakeCard
                  title="求补集时忘记全集"
                  wrong="只知道 A 就直接写 A 的补集"
                  correct="补集依赖于全集 U，同一个集合在不同全集中的补集可能不同。"
                />

                <MistakeCard
                  title="区间端点处理错误"
                  wrong="没有判断端点是否属于两个集合"
                  correct="计算区间交并集时，要同时关注大小关系以及圆括号、方括号。"
                />
              </div>
            </Section>

            {/* 08 练习 */}
            <Section
              id="quiz"
              number="08"
              title="即时练习"
            >
              <p className="leading-8 text-slate-600">
                完成下面 3 道题，检查交集、并集和补集是否已经掌握。
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
                下一步：充分条件与必要条件
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                下一节开始进入常用逻辑用语，
                学习“如果 p，那么 q”中充分条件、必要条件以及充要条件的判断。
              </p>

              <Link
                href="/grade1/sets"
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
                <Anchor href="#intersection" label="01 交集" />
                <Anchor href="#union" label="02 并集" />
                <Anchor href="#complement" label="03 补集" />
                <Anchor href="#properties" label="04 基本性质" />
                <Anchor href="#interval" label="05 区间运算" />
                <Anchor href="#steps" label="06 解题步骤" />
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

function PropertyCard({
  expression,
  description,
}: {
  expression: string;
  description: string;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[180px_1fr] sm:items-center">
      <p className="font-serif text-lg font-semibold text-blue-600">
        {expression}
      </p>

      <p className="text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function IntersectionGraph() {
  return (
    <svg
      viewBox="0 0 500 250"
      className="mx-auto w-full max-w-lg"
      aria-label="交集 Venn 图"
    >
      <defs>
        <clipPath id="intersection-a">
          <circle cx="200" cy="125" r="90" />
        </clipPath>
      </defs>

      <circle
        cx="200"
        cy="125"
        r="90"
        fill="#f8fafc"
        stroke="#64748b"
        strokeWidth="2"
      />

      <circle
        cx="300"
        cy="125"
        r="90"
        fill="#f8fafc"
        stroke="#64748b"
        strokeWidth="2"
      />

      <circle
        cx="300"
        cy="125"
        r="90"
        fill="#dbeafe"
        clipPath="url(#intersection-a)"
      />

      <text
        x="150"
        y="65"
        fill="#475569"
        fontSize="18"
      >
        A
      </text>

      <text
        x="335"
        y="65"
        fill="#475569"
        fontSize="18"
      >
        B
      </text>

      <text
        x="238"
        y="132"
        fill="#2563eb"
        fontSize="16"
        fontWeight="600"
      >
        A∩B
      </text>
    </svg>
  );
}

function UnionGraph() {
  return (
    <svg
      viewBox="0 0 500 250"
      className="mx-auto w-full max-w-lg"
      aria-label="并集 Venn 图"
    >
      <circle
        cx="200"
        cy="125"
        r="90"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="2"
      />

      <circle
        cx="300"
        cy="125"
        r="90"
        fill="#dbeafe"
        fillOpacity="0.8"
        stroke="#2563eb"
        strokeWidth="2"
      />

      <text
        x="150"
        y="65"
        fill="#2563eb"
        fontSize="18"
      >
        A
      </text>

      <text
        x="335"
        y="65"
        fill="#2563eb"
        fontSize="18"
      >
        B
      </text>

      <text
        x="235"
        y="132"
        fill="#1e40af"
        fontSize="16"
        fontWeight="600"
      >
        A∪B
      </text>
    </svg>
  );
}

function ComplementGraph() {
  return (
    <svg
      viewBox="0 0 500 260"
      className="mx-auto w-full max-w-lg"
      aria-label="补集示意图"
    >
      <rect
        x="40"
        y="25"
        width="420"
        height="210"
        rx="16"
        fill="#dbeafe"
        stroke="#64748b"
        strokeWidth="2"
      />

      <circle
        cx="250"
        cy="130"
        r="75"
        fill="#ffffff"
        stroke="#2563eb"
        strokeWidth="2"
      />

      <text
        x="60"
        y="55"
        fill="#475569"
        fontSize="18"
      >
        U
      </text>

      <text
        x="242"
        y="137"
        fill="#2563eb"
        fontSize="18"
        fontWeight="600"
      >
        A
      </text>

      <text
        x="345"
        y="195"
        fill="#1d4ed8"
        fontSize="16"
      >
        ∁ᵤA
      </text>
    </svg>
  );
}

function IntervalIntersection() {
  return (
    <svg
      viewBox="0 0 500 150"
      className="mt-5 w-full"
      aria-label="区间交集示意图"
    >
      <line
        x1="45"
        y1="75"
        x2="455"
        y2="75"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      <line
        x1="120"
        y1="70"
        x2="120"
        y2="80"
        stroke="#64748b"
      />

      <line
        x1="210"
        y1="70"
        x2="210"
        y2="80"
        stroke="#64748b"
      />

      <line
        x1="300"
        y1="70"
        x2="300"
        y2="80"
        stroke="#64748b"
      />

      <line
        x1="390"
        y1="70"
        x2="390"
        y2="80"
        stroke="#64748b"
      />

      <text x="114" y="100" fill="#64748b" fontSize="13">
        1
      </text>

      <text x="204" y="100" fill="#64748b" fontSize="13">
        3
      </text>

      <text x="294" y="100" fill="#64748b" fontSize="13">
        5
      </text>

      <text x="384" y="100" fill="#64748b" fontSize="13">
        7
      </text>

      <line
        x1="120"
        y1="48"
        x2="300"
        y2="48"
        stroke="#94a3b8"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <line
        x1="210"
        y1="60"
        x2="390"
        y2="60"
        stroke="#94a3b8"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <line
        x1="210"
        y1="75"
        x2="300"
        y2="75"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
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