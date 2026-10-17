import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Lesson = {
  number: string;
  title: string;
  description: string;
  topics: string[];
  href: string;
};

const lessons: Lesson[] = [
  {
    number: "01",
    title: "集合的概念",
    description:
      "理解集合与元素的含义，掌握元素与集合之间的关系以及集合的常用表示方法。",
    topics: ["集合", "元素", "属于", "不属于", "列举法", "描述法"],
    href: "/grade1/sets/concept",
  },
  {
    number: "02",
    title: "集合间的基本关系",
    description:
      "理解子集、真子集、集合相等和空集等基本概念。",
    topics: ["子集", "真子集", "集合相等", "空集"],
    href: "/grade1/sets/relations",
  },
  {
    number: "03",
    title: "集合的基本运算",
    description:
      "掌握交集、并集和补集的含义及基本计算方法，并能够利用 Venn 图和数轴解决问题。",
    topics: ["交集", "并集", "补集", "Venn 图", "区间运算"],
    href: "/grade1/sets/operations",
  },
  {
    number: "04",
    title: "充分条件与必要条件",
    description:
      "理解充分条件、必要条件、充分不必要条件、必要不充分条件以及充要条件。",
    topics: [
      "充分条件",
      "必要条件",
      "充分不必要",
      "必要不充分",
      "充要条件",
    ],
    href: "/grade1/sets/conditions",
  },
  {
    number: "05",
    title: "全称量词与存在量词",
    description:
      "理解全称量词、存在量词，掌握全称命题与存在命题的真假判断以及含量词命题的否定。",
    topics: [
      "全称量词",
      "存在量词",
      "∀",
      "∃",
      "命题真假",
      "命题否定",
    ],
    href: "/grade1/sets/quantifiers",
  },
];

export default function SetsPage() {
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

          <span className="text-slate-600">
            集合与常用逻辑用语
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                第 01 模块
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                集合与常用逻辑用语
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                从集合与元素开始，学习集合间关系、
                集合基本运算、充分必要条件以及全称量词和存在量词。
                本模块的全部知识点现在已经开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/sets/quantifiers"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  学习最后一节
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  专题训练
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              <Stat label="知识点" value="5" suffix="个" />
              <Stat label="已开放" value="5" suffix="个" />
              <Stat label="完成度" value="100%" />
              <Stat label="学习方式" value="学 + 练" />
            </div>
          </div>
        </section>

        {/* 完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  集合与常用逻辑用语已全部开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  可以从第一节开始完整学习，
                  也可以进入专题训练检查对集合和逻辑知识的掌握情况。
                </p>
              </div>

              <Link
                href="/practice"
                className="shrink-0 text-sm font-medium text-slate-900"
              >
                开始专题训练 →
              </Link>
            </div>
          </div>
        </section>

        {/* 章节目录 */}
        <section className="border-t border-slate-200 py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  章节目录
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  五个知识点已经全部开放，建议按照顺序学习。
                </p>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {lessons.map((lesson) => (
                  <LessonRow
                    key={lesson.number}
                    lesson={lesson}
                  />
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-400">
                  模块进度
                </p>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-2xl font-bold text-slate-900">
                    5
                  </span>

                  <span className="pb-0.5 text-sm text-slate-400">
                    / 5
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs font-medium text-emerald-600">
                  全部知识点已开放
                </p>
              </div>

              <Link
                href="/practice"
                className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  专题训练
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  通过练习检查本模块掌握情况。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  去做题 →
                </p>
              </Link>

              <Link
                href="/mistakes"
                className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  错题复习
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  回看答错题目并重新作答。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  查看错题 →
                </p>
              </Link>
            </aside>
          </div>
        </section>

        {/* 学习目标 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              本模块学习目标
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              完成本模块后，你应该能够：
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Goal
              number="01"
              title="理解集合与元素"
              description="掌握集合、元素、属于与不属于以及集合表示方法。"
            />

            <Goal
              number="02"
              title="判断集合关系"
              description="掌握子集、真子集、集合相等和空集。"
            />

            <Goal
              number="03"
              title="进行集合运算"
              description="熟练计算交集、并集、补集以及区间集合运算。"
            />

            <Goal
              number="04"
              title="判断充分必要关系"
              description="根据两个方向的推出关系判断四种常见条件关系。"
            />

            <Goal
              number="05"
              title="理解逻辑量词"
              description="掌握全称量词、存在量词以及含量词命题的否定。"
            />

            <Goal
              number="06"
              title="规范数学表达"
              description="正确使用 ∈、⊆、∩、∪、∀、∃ 等数学符号。"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="bg-white p-4">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-2 flex items-end gap-1">
        <span className="font-semibold text-slate-900">
          {value}
        </span>

        {suffix && (
          <span className="text-xs text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function LessonRow({
  lesson,
}: {
  lesson: Lesson;
}) {
  return (
    <Link
      href={lesson.href}
      className="group block px-2"
    >
      <div className="grid gap-4 py-6 transition group-hover:bg-white sm:grid-cols-[55px_1fr_auto] sm:items-center">
        <span className="text-sm font-semibold text-blue-600">
          {lesson.number}
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-slate-900">
              {lesson.title}
            </h3>

            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
              已开放
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {lesson.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {lesson.topics.map((topic) => (
              <span
                key={topic}
                className="text-xs text-slate-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <span className="text-sm font-medium text-slate-700 transition group-hover:translate-x-1">
          开始学习 →
        </span>
      </div>
    </Link>
  );
}

function Goal({
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
      <span className="text-xs font-semibold text-slate-300">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}