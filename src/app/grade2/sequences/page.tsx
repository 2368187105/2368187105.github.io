import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "4.1",
    title: "数列",
    description: "认识数列的顺序、通项与递推关系，建立前 n 项和与第 n 项之间的联系。",
    href: "/grade2/sequences/concept"
  },
  {
    number: "4.2",
    title: "等差数列",
    description: "用恒定的相邻差刻画等差数列，掌握通项、前 n 项和及常见性质。",
    href: "/grade2/sequences/arithmetic"
  },
  {
    number: "4.3",
    title: "等比数列",
    description: "用恒定的相邻比刻画等比数列，区分公比取值，掌握通项与有限项求和。",
    href: "/grade2/sequences/geometric"
  },
  {
    number: "4.4",
    title: "数学归纳法",
    description: "通过起点验证与递推证明两个步骤，理解数学归纳法如何证明无穷多个命题。",
    href: "/grade2/sequences/induction"
  }
];

export const metadata: Metadata = { title: "第四章 数列 · 彻凌数学" };

export default function SequenceChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">数列</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 04</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">四节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">数列</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">从有序的数出发，学习通项、递推、等差与等比求和，并用数学归纳法理解从有限走向无限的证明。数学归纳法为拓展选学内容。</p><Link href="/grade2/sequences/concept" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 4.1 数列开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="数列的离散点示意图" className="mx-auto w-48 sm:w-full"><path d="M20 175H205 M20 175V20" stroke="#cbd5e1"/>{[0,1,2,3,4,5].map(i=><g key={i}><line x1={40+i*28} x2={40+i*28} y1="175" y2={150-i*22} stroke="#bfdbfe" strokeWidth="3"/><circle cx={40+i*28} cy={150-i*22} r="5" fill="#2563eb"/></g>)}</svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["04", "知识课程"], ["12", "专题训练题"], ["04", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-2">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先掌握函数、指数运算与代数恒等变形。学习时始终核对项数、首项和公式适用条件。</p><Link href="/grade1/functions/concept" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：函数的概念 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/conic-sections" className="text-slate-500 hover:text-blue-600">第三章：圆锥曲线与方程</Link></div>
      </div>
    </main>
  );
}
