
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
    title: "平面向量的概念与表示",
    description:
      "理解向量的基本概念，掌握有向线段、向量的模、零向量、单位向量，以及相等向量和共线向量。",
    topics: [
      "向量概念",
      "几何表示",
      "向量的模",
      "相等与共线",
    ],
    href: "/grade1/vectors/concept",
  },
  {
    number: "02",
    title: "平面向量的线性运算",
    description:
      "学习向量加法、减法、数乘运算，理解三角形法则、平行四边形法则及向量共线条件。",
    topics: [
      "向量加法",
      "向量减法",
      "向量数乘",
      "运算规律",
      "共线条件",
    ],
    href: "/grade1/vectors/linear-operations",
  },
  {
    number: "03",
    title: "平面向量基本定理与坐标表示",
    description:
      "掌握平面向量基本定理、向量基底、坐标表示与运算，以及两点确定的向量和共线的坐标条件。",
    topics: [
      "平面向量基本定理",
      "基底",
      "坐标运算",
      "两点坐标",
      "共线判定",
    ],
    href: "/grade1/vectors/coordinates",
  },
  {
    number: "04",
    title: "平面向量的数量积",
    description:
      "理解数量积的定义与几何意义，掌握坐标运算、向量夹角、垂直判定和模长计算。",
    topics: [
      "数量积定义",
      "几何意义",
      "坐标计算",
      "夹角",
      "垂直条件",
    ],
    href: "/grade1/vectors/dot-product",
  },
  {
    number: "05",
    title: "平面向量的综合应用",
    description:
      "综合运用向量线性运算、坐标表示和数量积解决三角形、线段中点、重心、长度与实际位移问题。",
    topics: [
      "三角形",
      "线段中点",
      "重心",
      "长度与夹角",
      "实际应用",
    ],
    href: "/grade1/vectors/applications",
  },
];

export default function VectorsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-slate-700"
          >
            首页
          </Link>

          <span>/</span>

          <Link
            href="/grade1"
            className="transition hover:text-slate-700"
          >
            高一数学
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            平面向量
          </span>
        </div>

        {/* 章节标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                第 06 章
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                平面向量
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                从向量的基本概念出发，
                系统学习向量的线性运算、
                平面向量基本定理与坐标表示、
                数量积及其综合应用。
                本章五节课程已经全部开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/vectors/concept"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  从第一节开始
                </Link>

                <Link
                  href="/grade1/vectors/applications"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  学习最后一节
                </Link>

                <Link
                  href="/grade1"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  返回高一数学
                </Link>
              </div>
            </div>

            {/* 右侧数据 */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              <Stat
                label="知识点"
                value="5"
                suffix="节"
              />

              <Stat
                label="已开放"
                value="5"
                suffix="节"
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

        {/* 完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  第六章已经全部开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                  向量概念、线性运算、
                  基本定理与坐标表示、
                  数量积及综合应用五节课程均已完成。
                  每节都包含知识讲解、典型例题和即时检测。
                </p>
              </div>

              <Link
                href="/grade1/vectors/applications"
                className="shrink-0 text-sm font-medium text-slate-900 hover:text-blue-600"
              >
                学习综合应用 →
              </Link>
            </div>
          </div>
        </section>

        {/* 章节目录 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  章节目录
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  全部五节课程已经开放，建议按照顺序学习。
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

            {/* 右侧栏 */}
            <aside className="space-y-4">
              {/* 进度 */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">
                    课程开放进度
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

              {/* 学习建议 */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-400">
                  学习建议
                </p>

                <h3 className="mt-3 font-semibold text-slate-900">
                  从几何理解到坐标计算
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  平面向量兼具几何意义和代数表示。
                  建议先理解向量的大小与方向，
                  再掌握线性运算、坐标计算和数量积，
                  最后结合图形完成综合练习。
                </p>
              </div>

              {/* 专题训练 */}
              <Link
                href="/practice"
                className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  专题训练
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  当前可以练习前五章内容。
                  平面向量专题题库将在下一步统一加入。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  前往专题训练 →
                </p>
              </Link>

              {/* 错题本 */}
              <Link
                href="/mistakes"
                className="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  我的错题
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  错题会保存在个人错题本中，
                  支持复习和重新作答。
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

            <p className="mt-2 text-sm text-slate-500">
              完成本章后，你应该能够：
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Goal
              number="01"
              title="理解向量的概念"
              description="理解向量的大小、方向和几何表示，区分相等向量、相反向量与共线向量。"
            />

            <Goal
              number="02"
              title="熟练进行向量线性运算"
              description="掌握向量加法、减法、数乘及运算规律，理解共线条件。"
            />

            <Goal
              number="03"
              title="掌握向量坐标表示"
              description="理解平面向量基本定理，熟练进行坐标运算和共线判断。"
            />

            <Goal
              number="04"
              title="掌握数量积"
              description="理解数量积的定义和几何意义，计算夹角并判断向量垂直关系。"
            />

            <Goal
              number="05"
              title="解决平面几何问题"
              description="利用向量研究三角形、中点、重心、长度和角度。"
            />

            <Goal
              number="06"
              title="建立数形结合思想"
              description="灵活使用几何图形与坐标运算解决综合问题。"
            />
          </div>
        </section>

        {/* 下一章节 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  下一章节
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  07 · 复数
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                  下一章将学习复数的概念、
                  代数表示、几何意义以及复数的四则运算。
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                即将开放
              </span>
            </div>
          </div>
        </section>

        {/* 返回 */}
        <div className="mt-10">
          <Link
            href="/grade1"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            ← 返回高一数学总目录
          </Link>
        </div>
      </div>
    </main>
  );
}

/* =========================
   统计卡片
========================= */

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

/* =========================
   章节列表
========================= */

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
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-semibold text-slate-900">
              {lesson.title}
            </h3>

            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600">
              已开放
            </span>
          </div>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            {lesson.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
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

/* =========================
   学习目标
========================= */

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

        <p className="mt-2 text-sm leading-7 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
