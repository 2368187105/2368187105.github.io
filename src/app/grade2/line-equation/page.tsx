import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    number: "1.1",
    title: "直线的斜率与倾斜角",
    description:
      "理解直线倾斜角和斜率的定义，掌握两者之间的关系及两点间的斜率公式。",
    href: "/grade2/line-equation/slope-angle",
    open: true,
  },
  {
    number: "1.2",
    title: "直线的方程",
    description: "学习直线方程的基本形式及不同条件下的求解方法。",
    href: "/grade2/line-equation/equation",
    open: true,
  },
  {
    number: "1.3",
    title: "两条直线的平行与垂直",
    description: "掌握两条直线平行和垂直的判定条件。",
    href: "/grade2/line-equation/parallel-perpendicular",
    open: true,
  },
  {
    number: "1.4",
    title: "两条直线的交点",
    description: "通过联立方程求交点，并分析直线的位置关系。",
    href: "/grade2/line-equation/intersection",
    open: true,
  },
  {
    number: "1.5",
    title: "平面上的距离",
    description: "学习两点间距离及点到直线的距离等相关知识。",
    href: "/grade2/line-equation/distance",
    open: true,
  },
];

const openLessonCount = lessons.filter((lesson) => lesson.open && lesson.href).length;
const totalLessonCount = lessons.length;
const openPercent =
  totalLessonCount === 0
    ? 0
    : Math.round((openLessonCount / totalLessonCount) * 100);

export default function LineEquationPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade2" className="transition hover:text-blue-600">
            高二数学
          </Link>
          <span>/</span>
          <span className="text-slate-700">直线与方程</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 01
            </span>
            <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              五节课程全部开放
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            直线与方程
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从直线的斜率与倾斜角出发，逐步学习直线方程、两条直线的位置关系、
            交点以及距离问题，建立解析几何的基础知识体系。五个小节均已开放，
            可以按顺序学习，也可以直接选择需要复习的内容。
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">本章小节</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {totalLessonCount.toString().padStart(2, "0")} 节
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">已开放课程</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {openLessonCount.toString().padStart(2, "0")} 节
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-slate-100 bg-white p-4 sm:col-span-1">
              <p className="text-sm text-slate-500">开放进度</p>
              <p className="mt-2 text-lg font-bold text-blue-700">{openPercent}%</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${openPercent}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              本章课程目录
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              五个小节均可直接进入，选择任意课程开始学习。
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                    {lesson.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold leading-7 text-slate-900">
                        {lesson.title}
                      </h3>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
                        已开放
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {lesson.description}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={lesson.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        开始学习 <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            href="/grade2"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            ← 返回高二数学目录
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            返回网站首页
          </Link>
        </div>
      </div>
    </main>
  );
}
