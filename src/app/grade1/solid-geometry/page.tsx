
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "01",
    title: "空间几何体",
    description: "认识多面体、旋转体及常见几何体的结构特征。",
    href: "/grade1/solid-geometry/spatial-solids",
    tags: ["多面体", "旋转体", "结构特征"],
  },
  {
    number: "02",
    title: "空间几何体的表面积与体积",
    description: "掌握常见几何体的表面积、侧面积和体积公式。",
    href: "/grade1/solid-geometry/surface-volume",
    tags: ["表面积", "侧面积", "体积公式"],
  },
  {
    number: "03",
    title: "空间点、直线与平面的位置关系",
    description: "认识空间基本对象，学习确定平面的条件与基本性质。",
    href: "/grade1/solid-geometry/spatial-relations",
    tags: ["空间点线面", "平面的确定", "基本性质"],
  },
  {
    number: "04",
    title: "直线与平面的位置关系",
    description: "学习线面平行、垂直的判定定理和性质定理。",
    href: "/grade1/solid-geometry/line-plane-relations",
    tags: ["线面平行", "线面垂直", "判定与性质"],
  },
  {
    number: "05",
    title: "平面与平面的位置关系",
    description: "掌握面面平行、垂直的判定与性质。",
    href: "/grade1/solid-geometry/plane-plane-relations",
    tags: ["面面平行", "面面垂直", "综合应用"],
  },
];

const learningPath = [
  {
    number: "01",
    title: "认识空间几何体",
    description: "掌握多面体、旋转体的结构特征。",
    href: lessons[0].href,
  },
  {
    number: "02",
    title: "掌握表面积与体积",
    description: "理解公式并解决几何计算问题。",
    href: lessons[1].href,
  },
  {
    number: "03",
    title: "理解空间位置关系",
    description: "认识点、直线、平面之间的关系。",
    href: lessons[2].href,
  },
  {
    number: "04",
    title: "学习线面关系",
    description: "掌握直线与平面平行、垂直的性质。",
    href: lessons[3].href,
  },
  {
    number: "05",
    title: "学习面面关系",
    description: "理解平面与平面的位置关系。",
    href: lessons[4].href,
  },
];

export default function SolidGeometryIndexPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* 面包屑 */}
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
          <span className="text-slate-700">第八章 · 立体几何初步</span>
        </nav>

        {/* 顶部章节介绍 */}
        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_230px] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  CHAPTER 08
                </span>
                <span className="rounded-lg border border-blue-100 bg-white px-3 py-1.5 text-xs text-blue-700">
                  高一数学
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                立体几何初步
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">
                从空间几何体的结构认识出发，逐步学习表面积与体积、
                空间点线面的位置关系，以及直线与平面的平行和垂直，
                建立完整的立体几何知识体系。
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["空间几何体", "表面积与体积", "空间位置关系", "平行与垂直"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs text-slate-500"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <Link
                href={lessons[0].href}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                开始学习第一节
                <span>→</span>
              </Link>
            </div>

            {/* 章节进度 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-xs text-slate-400">
                章节课程进度
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-blue-600">
                  05
                </span>
                <span className="pb-1 text-xs text-slate-400">
                  / 05 节已开放
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-bold text-slate-900">5</p>
                  <p className="mt-1 text-xs text-slate-500">
                    系统课程
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-bold text-slate-900">5</p>
                  <p className="mt-1 text-xs text-slate-500">
                    学习环节
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-400">
                本章五节课程均已开放，可以按顺序学习。
              </p>
            </div>
          </div>
        </section>

        {/* 课程列表 + 右侧学习路径 */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* 左侧课程目录 */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  COURSE CONTENT
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  章节课程目录
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  由浅入深，共五节课程，建议按照顺序学习。
                </p>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
                共 5 节
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {lessons.map((lesson) => (
                <article
                  key={lesson.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                      {lesson.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-medium tracking-wide text-blue-600">
                            LESSON {lesson.number}
                          </p>
                          <h3 className="mt-1.5 font-bold leading-7 text-slate-900">
                            {lesson.title}
                          </h3>
                        </div>

                        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                          已开放
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {lesson.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {lesson.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs text-slate-400">
                          知识讲解 · 典型例题 · 互动练习
                        </span>

                        <Link
                          href={lesson.href}
                          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                          进入学习
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 右侧栏 */}
          <aside className="space-y-4">
            {/* 学习路径 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-blue-600">
                LEARNING PATH
              </p>
              <h2 className="mt-2 text-base font-bold text-slate-900">
                本章学习路线
              </h2>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                按照五个学习环节，逐步掌握立体几何基础。
              </p>

              <div className="relative mt-5 space-y-5">
                <div className="absolute bottom-4 left-[11px] top-3 w-px bg-blue-100" />

                {learningPath.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="group relative flex gap-3"
                  >
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-semibold text-blue-600 ring-4 ring-white">
                      {item.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-slate-800 transition group-hover:text-blue-600">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* 核心知识 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-bold text-slate-900">
                本章核心知识
              </h2>

              <div className="mt-4 divide-y divide-slate-100">
                <div className="py-3 first:pt-0">
                  <p className="text-xs text-slate-400">
                    空间几何体
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-800">
                    多面体与旋转体
                  </p>
                </div>

                <div className="py-3">
                  <p className="text-xs text-slate-400">
                    表面积与体积
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-800">
                    公式理解与几何计算
                  </p>
                </div>

                <div className="py-3">
                  <p className="text-xs text-slate-400">
                    空间位置关系
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-800">
                    点、直线与平面
                  </p>
                </div>

                <div className="py-3 last:pb-0">
                  <p className="text-xs text-slate-400">
                    平行与垂直
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-800">
                    判定定理与性质定理
                  </p>
                </div>
              </div>
            </section>

            {/* 学习工具 */}
            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
              <h2 className="text-sm font-bold text-slate-900">
                配套学习工具
              </h2>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                学完课程后，可以通过专题训练和错题复习巩固知识。
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  href="/practice"
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  专题训练
                  <span>→</span>
                </Link>

                <Link
                  href="/mistakes"
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  我的错题
                  <span>→</span>
                </Link>

                <Link
                  href="/report"
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  学习报告
                  <span>→</span>
                </Link>
              </div>
            </section>
          </aside>
        </section>

        {/* 底部导航 */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <Link
            href="/grade1"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
          >
            ← 返回高一目录
          </Link>

          <Link
            href={lessons[0].href}
            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            开始学习第一节 →
          </Link>
        </div>
      </div>
    </main>
  );
}
