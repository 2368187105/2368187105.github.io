"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/sequences" className="text-sm text-blue-600">← 数列复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第五模块 · 5.1</p><h1 className="mt-3 text-3xl font-bold text-slate-900">数列的通项、递推与前 n 项和</h1><p className="mt-5 leading-8">把数列看作正整数上的函数，分清项号、项值、通项与递推。由前 n 项和求通项时，首项必须单独检验。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 数列的定义域是正整数</h3><p className="mt-3 leading-8">本模块中项号 n 均取正整数，Sₙ表示从第 1 项到第 n 项的有限和。解出候选项号后，要筛去零、负数和非整数。图中只画整数项号处的点，不能把连续函数图象上的任意点当作数列的一项。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 通项与递推各有用途</h3><p className="mt-3 leading-8">通项直接给出项号与项值的关系；递推依靠初值及前后项关系确定数列。递推计算要从初值开始，aₙ₊₁中的 n 对应前一项。只有递推式而无适当初值时，一般不能唯一确定整个数列。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 由部分和求项要分两段</h3><p className="mt-3 leading-8">首项是 S₁；只有 n≥2 时，Sₙ与 Sₙ₋₁都由题设定义，才能作差。求出 n≥2 的表达式后代入 n=1 核验：相符可以合并，不符必须保留分段式。反向求和时也应分离特殊首项。</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"a_1=S_1,\\qquad a_n=S_n-S_{n-1}\\ (n\\ge2),\\qquad S_n=\\sum_{k=1}^n a_k"}/></div><Link href="/grade2/sequences/concept" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">首项需要分段的情形</summary><p className="mt-4 leading-8">已知 Sₙ=2n²+1，求通项，并核对前三项。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>首项 a₁=S₁=2+1=3。不能直接把 n=1 代入尚未求出的差分表达式。</li><li>n≥2 时，aₙ=(2n²+1)−[2(n−1)²+1]=2[n²−(n²−2n+1)]=4n−2。</li><li>把 n=1 代入 4n−2 得 2，不等于真实首项 3，所以通项是 a₁=3，n≥2 时 aₙ=4n−2。</li><li>前三项为 3、6、10；部分和依次是 3、9、19，分别等于 2×1²+1、2×2²+1、2×3²+1。</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">累加递推要写清下标</summary><p className="mt-4 leading-8">已知 a₁=2，aₙ₊₁−aₙ=2n，求 aₙ。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>n≥2 时，从 a₂−a₁=2×1 写到 aₙ−aₙ₋₁=2(n−1)。共 n−1 条等式。</li><li>逐项相加，左边中间项抵消为 aₙ−2；右边为 2[1+2+…+(n−1)]=n(n−1)。</li><li>得到 aₙ=n²−n+2。代入 n=1 得 2，符合初值，因此适用于所有正整数 n。</li><li>代回检验：aₙ₊₁−aₙ=[(n+1)²−(n+1)+2]−[n²−n+2]=2n，递推也成立。</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把项号当实数而不筛选；从第一项到第 n 项误算成 n 次递推；在 n=1 时直接使用 Sₙ−Sₙ₋₁；忽略特殊首项。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写出首项检验、代数变形、求和首尾项和整数边界。解答题先独立完成，再展开完整过程逐步自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三数列·通项与递推")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors">← 回看平面向量</Link><Link href="/grade3/sequences/arithmetic">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [n,setN]=useState(5),r=(v:number)=>Number(v.toFixed(3));
 const terms=Array.from({length:n},(_,i)=>i===0?3:2*(i+1)),sum=n*n+n+1;
 const px=(k:number)=>55+(k-1)*50,py=(v:number)=>270-v*11;
 return <div className="mt-5"><p className="text-sm leading-8">固定 Sₙ=n²+n+1。橙点是特殊首项 3，蓝点是 n≥2 时的 aₙ=2n。</p><label className="mt-4 block">显示到第 {n} 项<input aria-label="显示项数" type="range" min="1" max="10" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="mt-3 w-full"/></label><svg role="img" aria-label="部分和差分与特殊首项" viewBox="0 0 580 320" className="mt-5 h-auto w-full"><title>离散项值图，首项单独检验</title><line x1="35" x2="555" y1="270" y2="270" stroke="#94a3b8"/><line x1="35" x2="35" y1="25" y2="270" stroke="#94a3b8"/>{terms.map((value,i)=><g key={i}><line x1={px(i+1)} x2={px(i+1)} y1="270" y2={r(py(value))} stroke="#cbd5e1" strokeDasharray="3 3"/><circle cx={px(i+1)} cy={r(py(value))} r="5" fill={i===0?'#d97706':'#2563eb'}/><text x={px(i+1)} y={r(py(value)-12)} textAnchor="middle" fontSize="13" fill="#334155">{value}</text><text x={px(i+1)} y="291" textAnchor="middle" fontSize="12">{i+1}</text></g>)}<text x="15" y="20" fontSize="12">aₙ</text><text x="554" y="291" fontSize="12">n</text></svg><p role="status" className="mt-3 text-sm leading-8">a₁=3，a{n===1?'₁':`(${n})`}={terms[n-1]}；实际累加={terms.reduce((a,b)=>a+b,0)}，S({n})={sum}。{n===1?'首项不等于 2×1，不能直接使用 n≥2 的公式。':`S(${n})−S(${n-1})=${sum}-`+(n*(n-1)+1)+`=${2*n}，与当前蓝点一致。`}</p><p className="mt-2 text-xs leading-6 text-slate-500">只在正整数项号取点；公式判断包含所有正整数，图中仅显示前十项。</p></div>;
}
