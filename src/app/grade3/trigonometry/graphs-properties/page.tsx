"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/trigonometry" className="text-sm text-blue-600">← 三角函数与解三角形目录</Link>
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三模块 · 3.3</p><h1 className="mt-3 text-3xl font-bold text-slate-900">三角函数图象与性质</h1><p className="mt-5 leading-8">将 A、ω、φ 与振幅、周期、水平移动联系起来，整体求单调区间、对称轴和中心，并核对定义域。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 振幅、周期与平移分清</h3><p className="mt-3 leading-8">{"振幅为 |A|，纵向中心为 b。对非零 A、ω，正弦和余弦最小正周期为 2π/|ω|，正切为 π/|ω|。水平移动量为 −φ/ω，不能把 φ 直接当作平移距离。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 整体角区间逐步解回</h3><p className="mt-3 leading-8">{"先令 t=ωx+φ，套基本正弦或余弦的单调区间，再解出 x。若 A<0 或 ω<0，增减方向需相应改变。对称轴由极值角位置确定，对称中心由中心高度对应的角位置确定。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 定义域与区间限制仍然优先</h3><p className="mt-3 leading-8">{"正切要排除 π/2+kπ 等无定义点，不能跨这些点称为一段递增区间。给定有限 x 区间时，最值需看整体角是否达到峰谷，否则应比较端点。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"y=A\\sin(\\omega x+\\varphi)+b,\\quad T=\\frac{2\\pi}{|\\omega|}\\quad(A\\ne0,\\ \\omega\\ne0)"}/></div><Link href="/grade1/trigonometric/graphs-properties" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">周期、水平移动与值域</summary><p className="mt-4 leading-8">{"求 y=3sin(2x+π/2)−1 的周期、值域，并说明由 y=3sin2x 如何平移。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"角频率为 2，最小正周期 T=2π/2=π。"}</li><li>{"正弦值在 [−1,1]，乘 3 再减 1 得值域 [−4,2]。"}</li><li>{"2x+π/2=2(x+π/4)，所以先把 y=3sin2x 左移 π/4，再下移 1。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">对称轴不能只列一条</summary><p className="mt-4 leading-8">{"求 y=sin(3x−π/6) 的全部对称轴。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"基本正弦的对称轴在整体角 t=π/2+kπ 处。"}</li><li>{"因此 3x−π/6=π/2+kπ，得 3x=2π/3+kπ。"}</li><li>{"除以 3，得到 x=2π/9+kπ/3，k∈Z。相邻轴的间距为 π/3，是周期 2π/3 的一半。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"把相位直接当平移量；解区间时忘记除以 ω；把正切的多个分支合为全域递增；漏掉对称轴的整数参数。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·图象与性质")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry/identities">← 上一节</Link><Link href="/grade3/trigonometry/equations-inequalities">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [amplitude,setAmplitude]=useState(2),[frequency,setFrequency]=useState(2),[phase,setPhase]=useState('third');
 const phi=phase==='third'?Math.PI/3:phase==='negative'?-Math.PI/3:0;
 const points=Array.from({length:241},(_,i)=>{const x=-Math.PI+2*Math.PI*i/240,y=amplitude*Math.sin(frequency*x+phi);return `${Number((40+(x+Math.PI)/(2*Math.PI)*520).toFixed(3))},${Number((160-y*35).toFixed(3))}`;}).join(' ');
 const period=frequency===1?'2π':frequency===2?'π':'2π/3';
 return <div className="mt-5"><div className="flex flex-wrap gap-4"><label>振幅 A<select value={amplitude} onChange={e=>setAmplitude(Number(e.target.value))} className="ml-2 rounded border p-2">{[1,2,3].map(n=><option key={n} value={n}>{n}</option>)}</select></label><label>角频率 ω<select value={frequency} onChange={e=>setFrequency(Number(e.target.value))} className="ml-2 rounded border p-2">{[1,2,3].map(n=><option key={n} value={n}>{n}</option>)}</select></label><label>相位 φ<select value={phase} onChange={e=>setPhase(e.target.value)} className="ml-2 rounded border p-2"><option value="third">π/3</option><option value="zero">0</option><option value="negative">−π/3</option></select></label></div><svg role="img" aria-label="正弦型函数的振幅周期与平移" className="mt-5 h-auto w-full" viewBox="0 0 600 320"><title>改变振幅、角频率与相位观察图象</title><line x1="40" x2="560" y1="160" y2="160" stroke="#94a3b8"/><line x1="300" x2="300" y1="30" y2="290" stroke="#94a3b8"/><polyline points={points} fill="none" stroke="#2563eb" strokeWidth="2.5"/><text x="40" y="310" fontSize="12">−π</text><text x="550" y="310" fontSize="12">π</text></svg><p role="status" className="mt-3 text-sm leading-8">值域 [−{amplitude},{amplitude}]，最小正周期 {period}。相对 y=A sin(ωx)，水平移动量 −φ/ω≈{Number((-phi/frequency).toFixed(3))} 弧度（正数向右，负数向左）。</p></div>;
}
