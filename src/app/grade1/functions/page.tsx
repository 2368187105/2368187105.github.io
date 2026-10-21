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
    title: "函数的概念",
    description:
      "理解函数的基本概念，认识自变量、函数值、定义域以及函数对应关系。",
    topics: [
      "函数定义",
      "对应关系",
      "函数表示",
    ],
    href: "/grade1/functions/concept",
  },
  {
    number: "02",
    title: "函数的定义域与值域",
    description:
      "掌握函数定义域的基本求法，并理解函数值域所表示的意义。",
    topics: [
      "定义域",
      "值域",
      "函数取值",
    ],
    href: "/grade1/functions/domain-range",
  },
  {
    number: "03",
    title: "函数的单调性",
    description:
      "理解函数的单调递增与单调递减，并能够判断函数的单调区间。",
    topics: [
      "单调递增",
      "单调递减",
      "单调区间",
      "图像判断",
    ],
    href: "/grade1/functions/monotonicity",
  },
  {
    number: "04",
    title: "函数的奇偶性",
    description:
      "理解奇函数与偶函数的定义，并结合解析式和图像判断函数的对称性质。",
    topics: [
      "奇函数",
      "偶函数",
      "f(-x)",
      "图像对称",
    ],
    href: "/grade1/functions/parity",
  },
  {
    number: "05",
    title: "函数的最大值与最小值",
    description:
      "认识函数最值，理解最大值和最小值在函数图像以及实际问题中的意义。",
    topics: [
      "最大值",
      "最小值",
      "函数图像",
      "区间最值",
    ],
    href: "/grade1/functions/extrema",
  },
];

export default function FunctionsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700"
          >
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

          <span className="text-slate-600">
            函数的概念与性质
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                第 03 章
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                函数的概念与性质
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                从函数的基本概念开始，
                系统学习定义域与值域、单调性、奇偶性以及最大值和最小值。
                本章全部内容现在已经开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/functions/extrema"
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
              <Stat
                label="知识点"
                value="5"
                suffix="个"
              />

              <Stat
                label="已开放"
                value="5"
                suffix="个"
              />

              <Stat
                label="开放进度"
                value="100%"
              />

              <Stat
                label="学习方式"
                value="学 + 练"
              />
            </div>
          </div>
        </section>

        {/* 章节完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  函数章节已经全部开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  函数概念、定义域与值域、单调性、
                  奇偶性以及最大值与最小值均可进入学习。
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
        <section className="border-t border-slate-200 pt-10">
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

            {/* 右侧 */}
            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">
                    当前开放进度
                  </p>

                  <span className="text-xs font-medium text-emerald-600">
                    100%
                  </span>
                </div>

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

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-400">
                  学习建议
                </p>

                <h3 className="mt-3 font-semibold text-slate-900">
                  先理解，再做题
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  函数各知识点之间联系很强。
                  建议理解概念与图像，
                  再通过即时练习和专题训练巩固。
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
                  学完知识点后，通过练习检查掌握情况。
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
                  回顾函数专题训练中出现的错误题目。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  查看错题 →
                </p>
              </Link>
            </aside>
          </div>
        </section>

        {/* 学习目标 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              本章学习目标
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              完成本章后，你应该能够：
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Goal
              number="01"
              title="理解函数概念"
              description="理解函数、自变量、函数值以及函数对应关系。"
            />

            <Goal
              number="02"
              title="求定义域和值域"
              description="根据解析式和函数性质确定函数的定义域和值域。"
            />

            <Goal
              number="03"
              title="判断函数单调性"
              description="理解单调递增和单调递减，并判断常见函数单调区间。"
            />

            <Goal
              number="04"
              title="判断函数奇偶性"
              description="根据定义域和 f(-x) 判断奇函数与偶函数。"
            />

            <Goal
              number="05"
              title="求函数最值"
              description="理解最大值和最小值，并利用图像、单调性和配方法求最值。"
            />

            <Goal
              number="06"
              title="综合分析函数"
              description="结合定义域、单调性、奇偶性和最值研究函数性质。"
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