import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
const lessons = [
  {
    number: "9.1",
    title: "线性回归分析",
    description: "从散点图识别线性趋势，用最小二乘法拟合回归直线，分析残差与预测范围。",
    href: "/grade2/statistics/linear-regression"
  },
  {
    number: "9.2",
    title: "独立性检验",
    description: "建立 2×2 列联表，计算独立假设下的期望频数与检验统计量，正确解释检验结论。",
    href: "/grade2/statistics/independence-test"
  }
];

export const metadata: Metadata = { title: "第九章 统计 · 彻凌数学" };

export default function StatisticsChapterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav aria-label="面包屑" className="flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/" className="hover:text-blue-600">首页</Link><span>/</span><Link href="/grade2" className="hover:text-blue-600">高二数学</Link><span>/</span><span className="text-slate-600">统计</span></nav>
        <section className="mt-7 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[1fr_220px] sm:items-center">
            <div><div className="flex flex-wrap gap-3"><span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">CHAPTER 09</span><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">两节课程全部开放</span></div><h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">统计</h1><p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">用散点与回归研究数值变量的线性关系，用列联表与独立性检验研究分类变量的关联。通过残差、样本条件与显著性水平，学习有依据地解释统计结论。</p><Link href="/grade2/statistics/linear-regression" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">从 9.1 线性回归分析开始 →</Link></div>
            <svg viewBox="0 0 220 200" role="img" aria-label="散点与回归直线示意图" className="mx-auto w-48 sm:w-full"><path d="M20 175H205 M20 175V20" stroke="#94a3b8"/><path d="M30 165L195 40" stroke="#2563eb" strokeWidth="3"/>{[[45,145],[75,140],[110,90],[150,85],[185,40]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill="#059669"/>)}</svg>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6">{[["02", "知识课程"], ["06", "专题训练题"], ["02", "交互演示"]].map(([value, label]) => <div key={label}><p className="text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}</div>
        </section>
        <section className="mt-10"><h2 className="text-xl font-bold">本章学习路线</h2><p className="mt-2 text-sm leading-7 text-slate-500">每节配有知识讲解、典型例题、图形探索、易错提醒与课堂自测。</p><div className="mt-6 grid gap-4 md:grid-cols-2">{lessons.map((lesson) => <article key={lesson.number} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-blue-600">{lesson.number}</span><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">已开放</span></div><h3 className="mt-5 text-lg font-bold">{lesson.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{lesson.description}</p><Link href={lesson.href} className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-800">进入课程 →</Link><Link href={`/practice?topic=${encodeURIComponent(lesson.title)}`} className="mt-3 text-sm text-slate-500 hover:text-blue-600">对应专题训练 · 3 题 →</Link></article>)}</div></section>
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold">学习前的准备</h2><p className="mt-3 text-sm leading-8 text-slate-600">建议先复习均值、方差、散点图、条件概率与独立性。统计结论依赖样本与模型前提，学习时区分关联、因果、预测和检验结论。</p><Link href="/grade1/statistics/numerical-characteristics" className="mt-4 inline-flex text-sm font-medium text-blue-600">复习：数据的数字特征 →</Link></section>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm"><Link href="/grade2" className="text-slate-500 hover:text-blue-600">← 返回高二课程目录</Link><Link href="/grade2/probability" className="text-slate-500 hover:text-blue-600">第八章：概率</Link></div>
      </div>
    </main>
  );
}
