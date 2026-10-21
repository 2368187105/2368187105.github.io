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
      <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第一模块 · 1.4</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">充分条件与必要条件</h1>
      <p className="mt-5 leading-8">用箭头和解集包含判断充分必要条件，能用反例否定，并完整证明充要关系。</p>
      <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">交互探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
      <section id="knowledge" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先写箭头再下结论</h3><p className="mt-3 leading-8">{"p 是 q 的充分条件表示 p⇒q；p 是 q 的必要条件表示 q⇒p。两向都成立才是充要条件。充分不必要需要正向证明与反向反例，不能只举一个例子证明正向。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 转化为解集包含</h3><p className="mt-3 leading-8">{"若 P、Q 分别是 p、q 的解集，充分条件对应 P⊆Q，必要条件对应 Q⊆P。真包含对应充分不必要或必要不充分；相等对应充要。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 范围会改变条件关系</h3><p className="mt-3 leading-8">{"例如 x²=y² 未必推出 x=y，因为还可能 x=−y；若再限定 x、y 非负，反向则成立。所有反例必须满足题目中的定义范围。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"p\\Rightarrow q\\iff P\\subseteq Q,\\qquad p\\Leftrightarrow q\\iff P=Q"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/sets/conditions">回看高一基础课程 →</Link></section>
      <section id="explore" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">交互探索</h2><Explore /></section>
      <section id="examples" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">双向判断</summary><p className="mt-4 leading-8">{"判断“x=1”是“x²=1”的什么条件。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"若 x=1，平方得 x²=1，正向成立。"}</li><li>{"反向取 x=−1，有 x²=1 但 x≠1，因此反向不成立。"}</li><li>{"由正向成立、反向不成立，得充分不必要条件。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">充分条件求参数</summary><p className="mt-4 leading-8">{"p：−1≤x≤2，q：a≤x≤a+4。求 p 是 q 的充分条件时 a 的范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"写出 p⇒q，即 [−1,2]⊆[a,a+4]。"}</li><li>{"左端要求 a≤−1，右端要求 a+4≥2，即 a≥−2。"}</li><li>{"联立得 −2≤a≤−1。代入两个边界，包含关系均成立。"}</li></ol></details></section>
      <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把必要条件的箭头写反；用例子代替一般证明；反例不满足变量范围；把充分条件自动认作充分不必要条件。</p></aside>
      <section id="practice" className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先在纸上独立完成推导，再查看解析；解答题按关键步骤自评，不混入客观题正确率。登录后保存记录，未掌握的题目进入错题本。</p><Link href={"/practice/?topic=" + encodeURIComponent("高三集合与逻辑·充分必要条件")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
      <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sets-logic/operations">← 上一节</Link><Link href="/grade3/sets-logic/quantifiers">下一节 →</Link></div>
    </article></main>;
}

function Explore() {
 const [a,setA]=useState(2);
 return <div className="mt-5"><p>p：x&gt;a；q：x&gt;2。</p><label className="mt-4 block">参数 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="0" max="4" step="0.5" value={a} onChange={e=>setA(Number(e.target.value))}/></label><p role="status" className="mt-4">{a===2 ? '两个解集相等，p 是 q 的充要条件。' : a>2 ? 'p 的解集真包含于 q 的解集，p 是 q 的充分不必要条件。' : 'q 的解集真包含于 p 的解集，p 是 q 的必要不充分条件。'}</p><p className="mt-3 text-sm">先比较 (a,+∞) 与 (2,+∞)，再判断箭头方向。</p></div>;
}
