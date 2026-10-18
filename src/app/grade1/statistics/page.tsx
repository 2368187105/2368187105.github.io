
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "随机抽样",
    description:
      "理解总体、个体、样本和样本量，学习简单随机抽样及抽样方法。",
    href: "/grade1/statistics/random-sampling",
    tags: ["总体与样本", "随机抽样", "抽样方法"],
  },
  {
    number: "02",
    title: "数据的收集与整理",
    description:
      "学习收集数据、整理数据和制作频数分布表，认识数据的分布特征。",
    href: "/grade1/statistics/data-organization",
    tags: ["数据收集", "频数与频率", "数据整理"],
  },
  {
    number: "03",
    title: "统计图表",
    description:
      "学习条形图、折线图、扇形图和直方图，利用图表描述和比较数据。",
    href: "/grade1/statistics/statistical-graphs",
    tags: ["条形图", "折线图", "直方图"],
  },
  {
    number: "04",
    title: "数据的数字特征",
    description:
      "掌握平均数、中位数、众数、方差和标准差，理解它们反映的数据特征。",
    href: "/grade1/statistics/numerical-characteristics",
    tags: ["平均数", "中位数与众数", "方差"],
  },
  {
    number: "05",
    title: "统计综合应用",
    description:
      "综合运用抽样、统计图表和数字特征，解决数据分析与实际问题。",
    href: "/grade1/statistics/statistical-application",
    tags: ["数据分析", "统计推断", "实际应用"],
  },
];

export default function StatisticsIndexPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade1" className="transition hover:text-blue-600">
            高一数学
          </Link>
          <span>/</span>
          <span className="text-slate-700">统计</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_250px] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  CHAPTER 09
                </span>
                <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  高一数学
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                统计
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                从数据的收集与抽样开始，逐步学习数据整理、统计图表和数字特征。
                通过典型例题与互动练习，掌握基本统计方法，提高数据分析能力。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["随机抽样", "数据整理", "统计图表", "数字特征"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={lessons[0].href}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  开始学习第一节 →
                </Link>

                <Link
                  href="/grade1"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  返回高一目录
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium text-slate-400">
                COURSE OVERVIEW
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-600">05</span>
                <span className="text-sm text-slate-400">节课程</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-50">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-bold text-slate-900">05</p>
                  <p className="mt-1 text-xs text-slate-500">学习专题</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-bold text-slate-900">综合</p>
                  <p className="mt-1 text-xs text-slate-500">练习与应用</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-400">
                按课程顺序学习，逐步建立完整的统计知识体系。
              </p>
            </div>
          </div>
        </section>

        <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_280px]">
          <section>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-wide text-blue-600">
                  COURSE CONTENT
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  章节课程目录
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  从数据收集到统计分析，循序渐进地掌握五节课程。
                </p>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
                共 5 节
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {lessons.map((lesson) => (
                <article
                  key={lesson.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                      {lesson.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium tracking-wide text-blue-600">
                        LESSON {lesson.number}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        {lesson.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {lesson.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {lesson.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex justify-end border-t border-slate-100 pt-4">
                        <Link
                          href={lesson.href}
                          className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                          进入学习 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING PATH
              </p>
              <h2 className="mt-2 font-bold text-slate-900">
                本章学习路线
              </h2>

              <div className="mt-5 space-y-4">
                {[
                  ["01", "收集数据", "明确研究对象，选择合适的抽样方法。"],
                  ["02", "整理数据", "通过表格与统计图描述数据分布。"],
                  ["03", "分析数据", "利用数字特征比较数据并得出结论。"],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                      {number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <h2 className="font-bold text-slate-900">学习目标</h2>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <li>• 理解总体、样本与随机抽样。</li>
                <li>• 能够读懂常见统计图表。</li>
                <li>• 会计算并解释常用数字特征。</li>
                <li>• 能够根据数据分析实际问题。</li>
              </ul>
            </section>
          </aside>
        </div>

        <div className="mt-8">
          <Link
            href="/grade1"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            ← 返回高一数学目录
          </Link>
        </div>
      </div>
    </main>
  );
}
