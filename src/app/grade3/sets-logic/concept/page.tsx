"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
  return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader />
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Link href="/grade3/sets-logic" className="text-sm text-blue-600">← 集合与逻辑复习目录</Link>
      <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第一章 · 1.1</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">集合的概念与表示</h1>
      <p className="mt-5 leading-8">区分元素、集合与点集，能从方程和取值约束确定集合，并检查重根和重复元素。</p>
      <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">交互探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
      <section id="knowledge" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先看代表元素</h3><p className="mt-3 leading-8">{"描述法中，竖线左侧决定元素是什么。{x | …} 的元素是数；{(x,y) | …} 的元素是有序数对。还要读清 R、Z、N 等范围限制。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 确定性、互异性和无序性</h3><p className="mt-3 leading-8">{"同一元素不因多次列出而重复计数。方程重根只产生一个集合元素；元素排列顺序不影响集合。空集是没有元素的集合，不是含元素 0 的集合。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 含参题的检查顺序</h3><p className="mt-3 leading-8">{"先由属于关系或方程得到候选参数，再代回原集合，核对元素数量、互异性及原有取值条件。候选值不一定全部有效。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"A=\\{x\\in\\mathbb R\\mid (x-1)(x-a)=0\\}=\\{1,a\\}"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/sets/concept">回看高一基础课程 →</Link></section>
      <section id="explore" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">交互探索</h2><Explore /></section>
      <section id="examples" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">重根与集合元素</summary><p className="mt-4 leading-8">{"A={x∈R | (x−2)²(x+1)=0}，求 A 及元素个数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"由乘积为零，分别解 x−2=0 和 x+1=0，得到 x=2 或 x=−1。"}</li><li>{"根 2 的重数为 2，但集合元素不重复计数，因此 A={−1,2}。"}</li><li>{"A 有 2 个元素；重根的重数与集合元素个数是不同概念。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">含参元素检查</summary><p className="mt-4 leading-8">{"A={a+1,a²−1}，若 0∈A 且 A 有两个元素，求 a。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"由 0∈A，得 a+1=0 或 a²−1=0，候选 a=−1、1。"}</li><li>{"a=−1 时两个表达式都为 0，A={0}，不符合两个元素的要求。"}</li><li>{"a=1 时两个表达式为 2 和 0，A={0,2}，符合要求，所以 a=1。"}</li></ol></details></section>
      <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把重根重复计数；忽略代表元素；求出参数后不代回；把 ∅ 与 {"{0}"} 混为一谈。</p></aside>
      <section id="practice" className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先在纸上独立完成推导，再查看解析；解答题按关键步骤自评，不混入客观题正确率。登录后保存记录，未掌握的题目进入错题本。</p><Link href={"/practice/?topic=" + encodeURIComponent("高三集合与逻辑·集合的概念")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
      <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sets-logic">← 章节目录</Link><Link href="/grade3/sets-logic/relations">下一节 →</Link></div>
    </article></main>;
}

function Explore() {
 const [a,setA]=useState(1);
 const elements=[...new Set([1,a])].sort((x,y)=>x-y);
 return <div className="mt-5"><label className="block text-sm">参数 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="-2" max="3" step="1" value={a} onChange={e=>setA(Number(e.target.value))}/></label><p className="mt-4 leading-8">方程 (x−1)(x−a)=0 的解集为 {'{'+elements.join(',')+'}'}，共有 {elements.length} 个元素。</p><p className="text-sm leading-7">移动 a，观察 a=1 时两个根重合。根的重数不增加集合元素个数。</p></div>;
}
