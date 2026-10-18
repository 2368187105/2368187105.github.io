
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "随机事件与样本空间",
    description: "认识随机试验、随机事件和样本空间，理解基本事件与事件的表示方法。",
    href: "/grade1/probability/random-events",
    tags: ["基础知识", "样本空间"],
  },
  {
    number: "02",
    title: "事件的关系与运算",
    description: "学习事件的包含、相等、互斥与对立关系，掌握事件的交集和并集。",
    href: "/grade1/probability/event-relations",
    tags: ["事件关系", "集合运算"],
  },
  {
    number: "03",
    title: "古典概型",
    description: "掌握古典概型的有限性与等可能性，学会利用基本事件数量计算概率。",
    href: "/grade1/probability/classical-probability",
    tags: ["古典概型", "概率计算"],
  },
  {
    number: "04",
    title: "概率的基本性质",
    description: "学习概率的取值范围、对立事件概率关系及互斥事件和一般事件的加法公式。",
    href: "/grade1/probability/probability-properties",
    tags: ["概率性质", "加法公式"],
  },
  {
    number: "05",
    title: "概率综合应用",
    description: "综合运用列举法、分类计数、事件运算和对立事件解决概率问题。",
    href: "/grade1/probability/probability-application",
    tags: ["综合例题", "综合练习"],
  },
];

export default function ProbabilityIndexPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link
            href="/grade1"
            className="transition hover:text-blue-600"
          >
            高一数学
          </Link>
          <span>/</span>
          <span className="text-slate-700">概率</span>
        </nav>

        {/* 章节介绍 */}
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 10
            </span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              五节课程
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            概率
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从随机事件与样本空间出发，逐步学习事件之间的关系、
            古典概型和概率的基本性质，最终通过综合例题掌握概率问题的分析与计算方法。
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">课程总数</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                05 <span className="text-sm font-medium">节</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">学习内容</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                5 <span className="text-sm font-medium">个专题</span>
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-slate-100 bg-white p-4 sm:col-span-1">
              <p className="text-sm text-slate-500">学习方式</p>
              <p className="mt-2 text-lg font-bold text-slate-900">
                知识讲解 · 例题 · 练习
              </p>
            </div>
          </div>
        </section>

        {/* 课程目录 */}
        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                课程目录
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                按照课程顺序学习，也可以直接进入需要复习的专题。
              </p>
            </div>

            <span className="text-sm font-medium text-slate-400">
              共 {lessons.length} 节
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    {lesson.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold leading-7 text-slate-900">
                      {lesson.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {lesson.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {lesson.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      <Link
                        href={lesson.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        进入学习
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 学习路线 */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
          <h2 className="text-lg font-bold text-slate-900">
            推荐学习路线
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            按照从概念理解到计算应用的顺序，逐步建立完整的概率知识体系。
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {lessons.map((lesson, index) => (
              <div key={lesson.number} className="relative">
                <Link
                  href={lesson.href}
                  className="block h-full rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <span className="text-xs font-bold text-blue-600">
                    STEP {index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                    {lesson.title}
                  </p>
                </Link>

                {index < lessons.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-slate-300 sm:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 返回目录 */}
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
