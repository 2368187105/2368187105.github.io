import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "8.1",
    title: "条件概率",
    description: "在已知事件发生的条件下重新确定概率，理解乘法公式、独立性与全概率方法。",
    href: "/grade2/probability/conditional"
  },
  {
    number: "8.2",
    title: "离散型随机变量及其分布列",
    description: "用分布列描述随机变量，计算期望与方差，认识两点分布、二项分布和不放回抽样。",
    href: "/grade2/probability/discrete-distributions"
  },
  {
    number: "8.3",
    title: "正态分布",
    description: "认识正态密度曲线的对称性与参数，理解区间面积、标准化及常用概率近似。",
    href: "/grade2/probability/normal-distribution"
  }
];

export const metadata: Metadata = { title: "第八章 概率 · 彻凌数学" };

export default function ProbabilityChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">概率</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 08</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">三节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">概率</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">从已知条件下的事件概率出发，用分布列描述随机变量，再认识期望、方差、二项分布与正态分布，建立概率模型与实际问题的联系。</p><Link href="/grade2/probability/conditional" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 8.1 条件概率开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="概率分布示意图" className="mx-auto w-48 sm:w-full"><path d="M15 165H205" stroke="#94a3b8"/><path d="M20 163C55 163 65 45 110 45C155 45 165 163 200 163" fill="none" stroke="#2563eb" strokeWidth="3"/><path d="M110 35V165" stroke="#d97706" strokeDasharray="5 4"/></svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["03", "知识课程"], ["09", "专题训练题"], ["03", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-3">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先掌握高一概率、组合数与二项式定理。先明确事件、随机变量与抽样方式，再检查独立性、概率总和及分布模型的条件。</p><Link href="/grade1/probability/classical-probability" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：古典概型 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/counting" className="text-slate-500 hover:text-blue-600">第七章：计数原理</Link></div>
      </div>
    </main>
  );
}
