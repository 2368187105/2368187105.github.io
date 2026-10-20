import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "3.1",
    title: "椭圆",
    description: "从到两定点的距离之和出发，理解椭圆的定义、标准方程、焦点与离心率。",
    href: "/grade2/conic-sections/ellipse"
  },
  {
    number: "3.2",
    title: "双曲线",
    description: "从到两定点的距离差的绝对值出发，掌握双曲线的方程、两支、渐近线与离心率。",
    href: "/grade2/conic-sections/hyperbola"
  },
  {
    number: "3.3",
    title: "抛物线",
    description: "用到定点与定直线的等距关系建立抛物线，认识四种标准方程、焦点、准线和焦半径。",
    href: "/grade2/conic-sections/parabola"
  }
];

export const metadata: Metadata = { title: "第三章 圆锥曲线与方程 · 彻凌数学" };

export default function ConicChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">圆锥曲线与方程</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 03</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">三节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">圆锥曲线与方程</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">从距离条件出发，认识椭圆、双曲线与抛物线。通过标准方程、几何性质和交互图形，建立圆锥曲线的知识体系。</p><Link href="/grade2/conic-sections/ellipse" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 3.1 椭圆开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="椭圆、双曲线和抛物线示意图" className="mx-auto w-48 sm:w-full"><path d="M15 100H205 M110 185V15" stroke="#cbd5e1"/><ellipse cx="110" cy="100" rx="75" ry="43" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5"/><path d="M30 30Q110 100 30 170 M190 30Q110 100 190 170" fill="none" stroke="#d97706" strokeWidth="2"/><path d="M180 25Q-20 100 180 175" fill="none" stroke="#059669" strokeWidth="2"/></svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["03", "知识课程"], ["09", "专题训练题"], ["03", "交互图形"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-3">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先掌握两点间距离、点到直线的距离与圆的坐标表示。学习时比较三种曲线的定义、参数关系和焦点方向，避免混用公式。</p><Link href="/grade2/line-equation/distance" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习第一章：平面上的距离 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/circle-equation" className="text-slate-500 hover:text-blue-600">第二章：圆与方程</Link></div>
      </div>
    </main>
  );
}
