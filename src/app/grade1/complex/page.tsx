
"use client";

import Link from "next/link";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   第七章：复数
   共5节教学课程
========================= */

const lessons = [
  {
    number: "01",
    title: "复数的概念与代数表示",
    description:
      "从虚数单位 i 出发，学习复数的标准形式、实部与虚部、复数的分类及复数相等的条件。",
    href: "/grade1/complex/concept",
    formula: String.raw`z=a+bi`,
    tags: ["虚数单位", "复数分类", "复数相等"],
  },
  {
    number: "02",
    title: "复数的几何意义",
    description:
      "建立复数与复平面内点、向量的对应关系，理解复数的模和共轭复数的几何性质。",
    href: "/grade1/complex/geometry",
    formula: String.raw`|z|=\sqrt{a^2+b^2}`,
    tags: ["复平面", "复数的模", "共轭复数"],
  },
  {
    number: "03",
    title: "复数的加法与减法",
    description:
      "掌握复数加减法的运算法则，通过平行四边形法则理解复数加法的几何意义。",
    href: "/grade1/complex/addition-subtraction",
    formula: String.raw`(a+bi)+(c+di)=(a+c)+(b+d)i`,
    tags: ["加减运算", "运算律", "几何意义"],
  },
  {
    number: "04",
    title: "复数的乘法与除法",
    description:
      "掌握虚数单位的乘方规律、复数乘法以及利用共轭复数进行分母实数化的方法。",
    href: "/grade1/complex/multiplication-division",
    formula: String.raw`z\overline{z}=|z|^2`,
    tags: ["乘方规律", "复数乘法", "复数除法"],
  },
  {
    number: "05",
    title: "复数的综合应用",
    description:
      "综合运用复数知识解决参数求解、混合运算、复平面距离、圆的轨迹和复数方程问题。",
    href: "/grade1/complex/applications",
    formula: String.raw`AB=|z_B-z_A|`,
    tags: ["综合运算", "距离与轨迹", "复数方程"],
  },
];

/* =========================
   章节首页
========================= */

export default function ComplexChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* =========================
            面包屑导航
        ========================= */}

        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
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

          <span className="font-medium text-slate-700">
            第七章 · 复数
          </span>
        </nav>

        {/* =========================
            章节介绍
        ========================= */}

        <section className="relative mt-9 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  CHAPTER 07
                </span>

                <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  高一数学
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                复数
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                从实数到复数，是数学数系的一次重要扩充。
                本章将带你认识虚数单位，
                学习复数的代数表示与几何意义，
                掌握复数的四则运算，
                并运用复数知识解决综合数学问题。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "数系扩充",
                  "代数运算",
                  "复平面",
                  "几何应用",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/grade1/complex/concept"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                开始学习第一节
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 章节信息 */}
            <div className="rounded-2xl border border-white bg-white/85 p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                章节课程概览
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-blue-600">
                  05
                </span>

                <span className="pb-1.5 text-sm text-slate-400">
                  / 05 节已开放
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">
                    5
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    系统课程
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">
                    15
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    随堂练习
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                以上表示教学内容已开放，
                不是个人学习完成进度。
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            主体：课程目录 + 学习路线
        ========================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-start">
          {/* 左侧课程目录 */}
          <section>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-wide text-blue-600">
                  COURSE CONTENT
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  章节课程目录
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  由浅入深，共五节课程，建议按照顺序学习。
                </p>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500">
                共 5 节
              </span>
            </div>

            <div className="mt-7 space-y-4">
              {lessons.map((lesson) => (
                <Link
                  href={lesson.href}
                  key={lesson.number}
                  className="group block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* 章节编号 */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      {lesson.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-medium text-blue-600">
                          LESSON {lesson.number}
                        </span>

                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                          已开放
                        </span>
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-slate-900 transition group-hover:text-blue-700">
                        {lesson.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {lesson.description}
                      </p>

                      {/* 本节公式预览 */}
                      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        <InlineMath math={lesson.formula} />
                      </div>

                      {/* 本节知识点 */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {lesson.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="text-xs text-slate-400">
                          知识讲解 · 典型例题 · 互动练习
                        </span>

                        <span className="text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
                          进入学习 →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* =========================
              右侧学习路线
          ========================= */}

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                LEARNING PATH
              </p>

              <h3 className="mt-3 text-lg font-bold text-slate-900">
                本章学习路线
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                复数知识可以归纳为三个阶段。
              </p>

              <div className="mt-6 space-y-0">
                <PathStep
                  number="01"
                  title="认识复数"
                  description="了解虚数单位、复数形式、复平面及复数的模。"
                  isLast={false}
                />

                <PathStep
                  number="02"
                  title="掌握运算"
                  description="学习加减乘除，熟练进行复数的代数计算。"
                  isLast={false}
                />

                <PathStep
                  number="03"
                  title="综合应用"
                  description="利用复数解决参数、距离、轨迹与方程问题。"
                  isLast
                />
              </div>
            </div>

            {/* 核心知识 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">
                本章核心知识
              </h3>

              <div className="mt-5 space-y-4">
                <FormulaPreview
                  label="复数的代数形式"
                  formula={String.raw`z=a+bi`}
                />

                <FormulaPreview
                  label="虚数单位"
                  formula={String.raw`i^2=-1`}
                />

                <FormulaPreview
                  label="复数的模"
                  formula={String.raw`|z|=\sqrt{a^2+b^2}`}
                />

                <FormulaPreview
                  label="共轭复数"
                  formula={String.raw`\overline{z}=a-bi`}
                />
              </div>
            </div>

            {/* 学习建议 */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
              <h3 className="text-sm font-bold text-slate-900">
                学习建议
              </h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                建议先理解复数的概念与几何意义，
                再练习四则运算。
                最后一节的综合题会用到前面多个知识点，
                遇到不会的问题可以返回对应课程复习。
              </p>

              <p className="mt-4 border-t border-blue-100 pt-4 text-xs leading-6 text-slate-500">
                每节末尾的3道随堂练习可即时判题。
                专题训练题库将在后续步骤接入。
              </p>
            </div>
          </aside>
        </div>

        {/* =========================
            章节底部
        ========================= */}

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium text-blue-600">
                CHAPTER 07
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                准备开始学习复数了吗？
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                从第一节开始，逐步建立完整的复数知识体系。
              </p>
            </div>

            <Link
              href="/grade1/complex/concept"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              开始学习 →
            </Link>
          </div>
        </section>

        {/* 返回导航 */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/grade1"
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            ← 返回高一数学
          </Link>

          <span className="text-xs text-slate-400">
            彻凌数学 · 山海连云，巍巍交大。
          </span>
        </div>
      </div>
    </main>
  );
}

/* =========================
   学习路线组件
========================= */

function PathStep({
  number,
  title,
  description,
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
          {number}
        </span>

        {!isLast && (
          <div className="my-2 min-h-8 w-px flex-1 bg-blue-100" />
        )}
      </div>

      <div className={isLast ? "" : "pb-7"}>
        <h4 className="text-sm font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================
   核心公式预览
========================= */

function FormulaPreview({
  label,
  formula,
}: {
  label: string;
  formula: string;
}) {
  return (
    <div className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-2 max-w-full overflow-x-auto text-sm text-slate-800">
        <InlineMath math={formula} />
      </div>
    </div>
  );
}
