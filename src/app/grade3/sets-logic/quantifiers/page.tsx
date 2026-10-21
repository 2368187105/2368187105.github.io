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
      <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第一模块 · 1.5</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">量词、命题否定与综合应用</h1>
      <p className="mt-5 leading-8">保持变量范围不变，正确否定量词与结论，并用最值区分恒成立和存在性。</p>
      <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">交互探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
      <section id="knowledge" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 量词和结论同时否定</h3><p className="mt-3 leading-8">{"全称命题的否定是存在命题；存在命题的否定是全称命题。≥ 的否定是 <，> 的否定是 ≤，= 的否定是 ≠。变量的定义范围不改变。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 全称需覆盖所有情况</h3><p className="mt-3 leading-8">{"证明全称命题要给出一般论证，否定它只需一个反例。存在命题给出一个满足条件的见证即可；否定存在命题需要对所有允许变量证明结论不成立。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 恒成立与存在性用最值</h3><p className="mt-3 leading-8">{"若最小值能取到，函数恒正等价于最小值大于 0，存在非正值等价于最小值不大于 0。若最值取不到，需要单独分析严格不等号边界，不能机械套用。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\neg(\\forall x\\in D,\\ P(x))\\iff \\exists x\\in D,\\ \\neg P(x)"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/sets/quantifiers">回看高一基础课程 →</Link></section>
      <section id="explore" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">交互探索</h2><Explore /></section>
      <section id="examples" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">否定与反例</summary><p className="mt-4 leading-8">{"否定“对任意实数 x，x²≥x”，并给出反例。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"量词由任意改为存在，范围仍为 R；≥ 的否定为 <。"}</li><li>{"否定为“存在 x∈R，使 x²<x”。解 x(x−1)<0，得 0<x<1。"}</li><li>{"取 x=1/2，x²=1/4<1/2，确实构成反例。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">同一最值，两种量词</summary><p className="mt-4 leading-8">{"f(x)=x²−2x+a。分别求 f 恒正与存在非正值时的 a。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"配方 f(x)=(x−1)²+a−1，最小值为 a−1，在 x=1 处取得。"}</li><li>{"恒正需要 a−1>0，故 a>1；反之 f(x)≥a−1>0，条件充分。"}</li><li>{"存在非正值需要 a−1≤0，故 a≤1；反之取 x=1 可得 f(1)≤0。两种命题互为否定。"}</li></ol></details></section>
      <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">只否定量词而不否定结论；改变原来的变量范围；混淆恒成立与存在；忽略最值是否能取到及严格不等号。</p></aside>
      <section id="practice" className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先在纸上独立完成推导，再查看解析；解答题按关键步骤自评，不混入客观题正确率。登录后保存记录，未掌握的题目进入错题本。</p><Link href={"/practice/?topic=" + encodeURIComponent("高三集合与逻辑·量词与综合应用")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
      <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sets-logic/conditions">← 上一节</Link><Link href="/grade3/sets-logic">完成本模块，返回目录 →</Link></div>
    </article></main>;
}

function Explore() {
 const [a,setA]=useState(1);
 return <div className="mt-5"><p>f(x)=(x−1)²+a−1，x∈R。</p><label className="mt-4 block">参数 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="-1" max="3" step="0.5" value={a} onChange={e=>setA(Number(e.target.value))}/></label><p className="mt-4">最小值 f(1)={a-1}，且能够取到。</p><p role="status" className="mt-3">{a>1 ? '对任意 x，f(x)>0 为真；不存在非正函数值。' : '存在 x 使 f(x)≤0 为真：取 x=1 即可；恒正命题为假。'}</p><p className="mt-3 text-sm">观察 a=1：最小值等于 0，必须归入“存在非正值”的情形。</p></div>;
}
