import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "6.1",
    title: "空间向量及其运算",
    description: "把平面向量推广到空间，理解线性运算、共线共面与数量积。",
    href: "/grade2/spatial-vectors/operations"
  },
  {
    number: "6.2",
    title: "空间向量的坐标表示",
    description: "建立空间直角坐标系，用三维坐标计算向量、距离、夹角与垂直关系。",
    href: "/grade2/spatial-vectors/coordinates"
  },
  {
    number: "6.3",
    title: "空间向量的应用",
    description: "利用方向向量和法向量，将空间中的位置关系、夹角与距离转化为代数问题。",
    href: "/grade2/spatial-vectors/applications"
  }
];

export const metadata: Metadata = { title: "第六章 空间向量与立体几何 · 彻凌数学" };

export default function SpatialChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">空间向量与立体几何</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 06</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">三节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">空间向量与立体几何</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">将平面向量推广到三维空间，掌握坐标、数量积、方向向量与法向量，用代数方法研究空间中的位置关系、夹角与距离。</p><Link href="/grade2/spatial-vectors/operations" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 6.1 空间向量及其运算开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="空间坐标与向量示意图" className="mx-auto w-48 sm:w-full"><path d="M110 145L25 180 M110 145L195 180 M110 145V15" stroke="#94a3b8" strokeWidth="2"/><path d="M40 170L110 195L180 170L110 145Z" fill="#dbeafe" stroke="#bfdbfe"/><path d="M110 145L165 65" stroke="#2563eb" strokeWidth="3"/><path d="M110 145L165 165L165 65" fill="none" stroke="#d97706" strokeDasharray="5 4"/><circle cx="165" cy="65" r="4" fill="#2563eb"/></svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["03", "知识课程"], ["09", "专题训练题"], ["03", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-3">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先掌握高一平面向量与立体几何。建系时优先选择互相垂直的方向；空间图形用于辅助观察，计算始终使用真实的三维向量。</p><Link href="/grade1/vectors/coordinates" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：平面向量基本定理与坐标表示 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/derivatives" className="text-slate-500 hover:text-blue-600">第五章：导数及其应用</Link></div>
      </div>
    </main>
  );
}
