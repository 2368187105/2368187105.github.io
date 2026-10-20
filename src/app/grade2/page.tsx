import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Chapter = {
  number: string;
  title: string;
  description: string;
  sections: string[];
  href?: string;
  sectionHrefs?: string[];
  openSections?: number;
};

const chapters: Chapter[] = [
  {
    number: "01",
    title: "直线与方程",
    description: "学习直线的斜率、倾斜角、直线方程及两条直线的位置关系。",
    href: "/grade2/line-equation",
    openSections: 5,
    sectionHrefs: [
      "/grade2/line-equation/slope-angle",
      "/grade2/line-equation/equation",
      "/grade2/line-equation/parallel-perpendicular",
      "/grade2/line-equation/intersection",
      "/grade2/line-equation/distance",
    ],
    sections: [
      "1.1 直线的斜率与倾斜角",
      "1.2 直线的方程",
      "1.3 两条直线的平行与垂直",
      "1.4 两条直线的交点",
      "1.5 平面上的距离",
    ],
  },
  {
    number: "02",
    title: "圆与方程",
    href: "/grade2/circle-equation",
    openSections: 3,
    sectionHrefs: [
      "/grade2/circle-equation/equation",
      "/grade2/circle-equation/line-circle",
      "/grade2/circle-equation/circle-circle",
    ],
    description: "掌握圆的方程，以及直线与圆、圆与圆的位置关系。",
    sections: ["2.1 圆的方程", "2.2 直线与圆的位置关系", "2.3 圆与圆的位置关系"],
  },
  {
    number: "03",
    title: "圆锥曲线与方程",
    href: "/grade2/conic-sections",
    openSections: 3,
    sectionHrefs: [
      "/grade2/conic-sections/ellipse",
      "/grade2/conic-sections/hyperbola",
      "/grade2/conic-sections/parabola",
    ],
    description: "学习椭圆、双曲线和抛物线的定义、方程及几何性质。",
    sections: ["3.1 椭圆", "3.2 双曲线", "3.3 抛物线"],
  },
  {
    number: "04",
    title: "数列",
    href: "/grade2/sequences",
    openSections: 4,
    sectionHrefs: ["/grade2/sequences/concept", "/grade2/sequences/arithmetic", "/grade2/sequences/geometric", "/grade2/sequences/induction"],
    description: "学习数列、等差数列、等比数列及数学归纳法。",
    sections: ["4.1 数列", "4.2 等差数列", "4.3 等比数列", "4.4 数学归纳法*"],
  },
  {
    number: "05",
    title: "导数及其应用",
    href: "/grade2/derivatives",
    openSections: 3,
    sectionHrefs: ["/grade2/derivatives/concept", "/grade2/derivatives/operations", "/grade2/derivatives/applications"],
    description: "学习导数的概念与运算，以及导数在研究函数中的应用。",
    sections: ["5.1 导数的概念", "5.2 导数的运算", "5.3 导数在研究函数中的应用"],
  },
  {
    number: "06",
    title: "空间向量与立体几何",
    href: "/grade2/spatial-vectors",
    openSections: 3,
    sectionHrefs: ["/grade2/spatial-vectors/operations", "/grade2/spatial-vectors/coordinates", "/grade2/spatial-vectors/applications"],
    description: "掌握空间向量的运算、坐标表示和几何应用。",
    sections: ["6.1 空间向量及其运算", "6.2 空间向量的坐标表示", "6.3 空间向量的应用"],
  },
  {
    number: "07",
    title: "计数原理",
    href: "/grade2/counting",
    openSections: 4,
    sectionHrefs: ["/grade2/counting/principles", "/grade2/counting/permutations", "/grade2/counting/combinations", "/grade2/counting/binomial"],
    description: "掌握两个基本计数原理、排列、组合和二项式定理。",
    sections: ["7.1 两个基本计数原理", "7.2 排列", "7.3 组合", "7.4 二项式定理"],
  },
  {
    number: "08",
    title: "概率",
    href: "/grade2/probability",
    openSections: 3,
    sectionHrefs: ["/grade2/probability/conditional", "/grade2/probability/discrete-distributions", "/grade2/probability/normal-distribution"],
    description: "学习条件概率、离散型随机变量及正态分布。",
    sections: ["8.1 条件概率", "8.2 离散型随机变量及其分布列", "8.3 正态分布"],
  },
  {
    number: "09",
    title: "统计",
    href: "/grade2/statistics",
    openSections: 2,
    sectionHrefs: ["/grade2/statistics/linear-regression", "/grade2/statistics/independence-test"],
    description: "学习线性回归分析与独立性检验。",
    sections: ["9.1 线性回归分析", "9.2 独立性检验"],
  },
];

const totalSections = chapters.reduce(
  (total, chapter) => total + chapter.sections.length,
  0
);

const openSections = chapters.reduce(
  (total, chapter) => total + Math.min(chapter.openSections ?? 0, chapter.sections.length),
  0
);

const openChapters = chapters.filter(
  (chapter) => (chapter.openSections ?? 0) > 0
).length;

const openPercent =
  totalSections === 0 ? 0 : Math.round((openSections / totalSections) * 100);

export default function Grade2Page() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <span className="text-slate-700">高二数学</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
            GRADE 11
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            高二数学
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            按照教材目录，系统学习直线与圆、圆锥曲线、数列、导数、
            空间向量、计数原理、概率与统计，逐步建立完整的数学知识体系。
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">教材章节</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {chapters.length} <span className="text-sm font-medium">章</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4">
              <p className="text-sm text-slate-500">教材小节</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {totalSections} <span className="text-sm font-medium">节</span>
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-slate-100 bg-white p-4 sm:col-span-1">
              <p className="text-sm text-slate-500">当前进度</p>
              <p className="mt-2 text-lg font-bold text-blue-700">
                九章三十节全部开放
              </p>
              <p className="mt-1 text-xs text-slate-400">
                已开放 {openSections}/{totalSections} 节（{openPercent}%）
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                高二数学课程目录
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                九章共三十节课程已全部开放，可点击具体小节直接学习。
              </p>
            </div>

            <span className="text-sm text-slate-400">
              共 {chapters.length} 章 · {totalSections} 节
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {chapters.map((chapter) => {
              const chapterOpenSections = Math.min(
                chapter.openSections ?? 0,
                chapter.sections.length
              );

              return (
                <article
                  key={chapter.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                        {chapter.number}
                      </div>

                      <div>
                        <p className="text-xs font-medium text-blue-600">
                          CHAPTER {chapter.number}
                        </p>
                        <h3 className="mt-1 font-bold leading-6 text-slate-900">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${
                        chapterOpenSections > 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {chapterOpenSections > 0
                        ? `${chapterOpenSections}/${chapter.sections.length} 节开放`
                        : "待开发"}
                    </span>
                  </div>

                  <p className="mt-4 min-h-14 text-sm leading-7 text-slate-500">
                    {chapter.description}
                  </p>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold text-slate-700">
                      本章教材小节
                    </p>
                    <ul className="mt-3 space-y-2">
                      {chapter.sections.map((section, index) => {
                        const sectionHref = chapter.sectionHrefs?.[index];

                        return (
                          <li key={section} className="text-sm leading-6">
                            {sectionHref ? (
                              <Link
                                href={sectionHref}
                                className="text-blue-600 transition hover:text-blue-800 hover:underline"
                              >
                                {section}
                                <span className="ml-1 text-xs" aria-hidden="true">
                                  ↗
                                </span>
                              </Link>
                            ) : (
                              <span className="text-slate-500">{section}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    {chapter.href ? (
                      <Link
                        href={chapter.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        进入本章目录 <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className="text-sm text-slate-400">
                        课程开发中，敬请期待
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-blue-600"
          >
            ← 返回网站首页
          </Link>
        </div>
      </div>
    </main>
  );
}
