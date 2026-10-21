"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/sequences" className="text-sm text-blue-600">← 数列复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第五模块 · 5.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">数列求和的常用方法</h1><p className="mt-5 leading-8">先识别结构，再选择公式、分组、裂项或错位相减。每次写清求和范围、首尾项以及被提出的系数。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先看能否分组或直接用公式</h3><p className="mt-3 leading-8">和的通项若是若干简单项之和，可拆成多个和；常数 c 连加 n 次为 nc。遇到交错项，先明确总项数奇偶；有限和按原顺序分组不会引入无限级数的问题。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 裂项要跟踪跨距与系数</h3><p className="mt-3 leading-8">把分式拆成相邻或隔项之差，列出前几项和末几项，再消去中间部分。跨距为 r 时常有系数 1/r，首尾各留下 r 项；小项数情形可以由表达式直接核验，不凭视觉重叠草率删项。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 错位相减按相同幂次对齐</h3><p className="mt-3 leading-8">等差因子乘等比因子的和，先整体乘公比，再按幂次相减。左边是 (q−1)Tₙ而非 Tₙ，首项和最高次项通常没有配对，必须保留。最后代入 n=1 或一个小整数作独立检验。</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\frac1{k(k+r)}=\\frac1r\\left(\\frac1k-\\frac1{k+r}\\right)\\ (r\\in\\mathbb{N}^*),\\qquad \\sum_{k=1}^n k2^{k-1}=(n-1)2^n+1"}/></div><Link href="/grade2/sequences/geometric" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">相邻裂项完整相消</summary><p className="mt-4 leading-8">求 Tₙ=1/(1×2)+1/(2×3)+…+1/[n(n+1)]。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>对任意 k≥1，有 1/[k(k+1)]=1/k−1/(k+1)。</li><li>依次相加：Tₙ=(1−1/2)+(1/2−1/3)+…+(1/n−1/(n+1))。</li><li>中间项抵消，留下 Tₙ=1−1/(n+1)=n/(n+1)。</li><li>{"n=1 时为 1/2，等于原式第一项。每个有限 n 都有 Tₙ<1，不能把上界直接当作有限和。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">错位相减不能遗漏首尾</summary><p className="mt-4 leading-8">求 Tₙ=1+2·2+3·2²+…+n·2ⁿ⁻¹。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>乘 2 后为 2Tₙ=2+2·2²+…+(n−1)2ⁿ⁻¹+n·2ⁿ。</li><li>按幂次相减，Tₙ=2Tₙ−Tₙ=n·2ⁿ−(1+2+…+2ⁿ⁻¹)。最高次 n·2ⁿ与最初的 −1 均保留。</li><li>等比和 1+2+…+2ⁿ⁻¹=2ⁿ−1，所以 Tₙ=(n−1)2ⁿ+1。</li><li>n=1 时公式为 1；n=3 时为 2×8+1=17，直接相加 1+4+12=17，都一致。</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">裂项漏乘 1/r；消项后只保留一个首项而漏掉第二个；错位时按项号而不按幂次对齐；算出 (q−1)Tₙ后忘记除以 q−1。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写出首项检验、代数变形、求和首尾项和整数边界。解答题先独立完成，再展开完整过程逐步自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三数列·求和方法")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sequences/geometric">← 上一节</Link><Link href="/grade3/sequences/recurrence">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [mode,setMode]=useState('telescoping'),[n,setN]=useState(5),r=(v:number)=>Number(v.toFixed(3));
 const term=(k:number)=>mode==='telescoping'?1/(k*(k+1)):k*2**(k-1);
 const partial=(k:number)=>mode==='telescoping'?k/(k+1):(k-1)*2**k+1;
 const scale=210/Math.max(1,partial(n)),last=Array.from({length:n},(_,i)=>term(i+1)).reduce((a,b)=>a+b,0);
 return <div className="mt-5"><div className="flex flex-wrap gap-5"><label>求和结构<select aria-label="求和结构" value={mode} onChange={e=>setMode(e.target.value)} className="ml-2 rounded border p-2"><option value="telescoping">裂项：1/[k(k+1)]</option><option value="shift">错位：k·2ᵏ⁻¹</option></select></label><label>项数 {n}<input aria-label="显示项数" type="range" min="1" max="10" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="ml-3 align-middle"/></label></div><svg role="img" aria-label="通项与部分和的比较" viewBox="0 0 600 330" className="mt-5 h-auto w-full"><title>蓝色细条为单项，橙色点为截至该项的部分和，同一纵轴比例</title><line x1="30" x2="580" y1="275" y2="275" stroke="#94a3b8"/>{Array.from({length:n},(_,i)=>{const k=i+1,x=50+i*52;return <g key={k}><line x1={x} x2={x} y1="275" y2={r(275-term(k)*scale)} stroke="#2563eb" strokeWidth="8"/><circle cx={x} cy={r(275-partial(k)*scale)} r="5" fill="#d97706"/>{k===n&&<text x={x} y={r(260-partial(k)*scale)} textAnchor="middle" fontSize="13">{r(partial(k))}</text>}<text x={x} y="300" textAnchor="middle" fontSize="12">{k}</text></g>})}<text x="580" y="300" fontSize="12">n</text></svg><p role="status" className="mt-3 text-sm leading-8">蓝条 a({n})≈{r(term(n))}；橙点 T({n})≈{r(partial(n))}；逐项累加≈{r(last)}。{mode==='telescoping'?'Tₙ=n/(n+1)，相消后保留 1 与 −1/(n+1)。':'Tₙ=(n−1)2ⁿ+1，错位相减保留最后的 n·2ⁿ与最前的 −1。'}</p><p className="mt-2 text-xs leading-6 text-slate-500">同一图中的单项与部分和使用相同单位；切换结构时纵轴重新缩放，图示近似值不能代替精确推导。</p></div>;
}
