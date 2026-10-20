import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "5.1",
    title: "导数的概念",
    description: "从平均变化率出发，理解瞬时变化率、导数与切线斜率，建立数与形的联系。",
    href: "/grade2/derivatives/concept"
  },
  {
    number: "5.2",
    title: "导数的运算",
    description: "掌握基本初等函数求导公式与四则运算法则，学习简单复合函数的求导。",
    href: "/grade2/derivatives/operations"
  },
  {
    number: "5.3",
    title: "导数在研究函数中的应用",
    description: "利用导数判断单调性、研究极值与最值，并建立简单的实际优化模型。",
    href: "/grade2/derivatives/applications"
  }
];

export const metadata: Metadata = { title: "第五章 导数及其应用 · 彻凌数学" };

export default function DerivativeChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">导数及其应用</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 05</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">三节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">导数及其应用</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">从平均变化率与切线出发，建立导数的概念，学习求导法则，再用导数研究函数的单调性、极值、最值与简单优化问题。</p><Link href="/grade2/derivatives/concept" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 5.1 导数的概念开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="抛物线与切线示意图" className="mx-auto w-48 sm:w-full"><path d="M15 170H205 M110 185V15" stroke="#cbd5e1"/><path d="M30 30Q110 280 190 30" fill="none" stroke="#2563eb" strokeWidth="3"/><path d="M110 186.25L190 61.25" stroke="#d97706" strokeWidth="2"/><circle cx="150" cy="123.75" r="4" fill="#d97706"/></svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["03", "知识课程"], ["09", "专题训练题"], ["03", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-3">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先复习函数的定义域、单调性、最值、直线斜率及指数对数运算。学习时将公式计算与图象变化相互核对。</p><Link href="/grade1/functions/monotonicity" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：函数的单调性 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/sequences" className="text-slate-500 hover:text-blue-600">第四章：数列</Link></div>
      </div>
    </main>
  );
}
