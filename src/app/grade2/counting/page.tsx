import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "7.1",
    title: "两个基本计数原理",
    description: "辨别分类完成与分步完成，用加法、乘法及适当的排除方法计数。",
    href: "/grade2/counting/principles"
  },
  {
    number: "7.2",
    title: "排列",
    description: "理解顺序影响结果的计数任务，掌握排列数及相邻、特殊位置限制的处理。",
    href: "/grade2/counting/permutations"
  },
  {
    number: "7.3",
    title: "组合",
    description: "理解只与选取元素有关的计数任务，掌握组合数及分组、至少条件的处理。",
    href: "/grade2/counting/combinations"
  },
  {
    number: "7.4",
    title: "二项式定理",
    description: "用组合计数理解二项展开，区分二项式系数、项的系数和常数项。",
    href: "/grade2/counting/binomial"
  }
];

export const metadata: Metadata = { title: "第七章 计数原理 · 彻凌数学" };

export default function CountingChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">计数原理</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 07</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">四节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">计数原理</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">从分类与分步出发，辨别有序排列与无序组合，再用组合计数理解二项展开。通过枚举与公式互相核对，避免重复和遗漏。</p><Link href="/grade2/counting/principles" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 7.1 两个基本计数原理开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="树状计数示意图" className="mx-auto w-48 sm:w-full"><path d="M110 20L55 80M110 20L165 80M55 80L25 155M55 80L85 155M165 80L135 155M165 80L195 155" fill="none" stroke="#93c5fd" strokeWidth="3"/>{[[110,20],[55,80],[165,80],[25,155],[85,155],[135,155],[195,155]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="8" fill={i<3?"#2563eb":"#059669"}/>)}</svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["04", "知识课程"], ["12", "专题训练题"], ["04", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-2">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先复习集合、指数运算与数列中的求和记号。每次计数先说明完整方案是什么，再检查是否区分顺序、是否允许重复。</p><Link href="/grade1/sets/operations" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：集合的基本运算 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/spatial-vectors" className="text-slate-500 hover:text-blue-600">第六章：空间向量与立体几何</Link></div>
      </div>
    </main>
  );
}
