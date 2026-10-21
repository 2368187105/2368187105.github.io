"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader />
  <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
   <Link href="/grade3/functions-derivatives" className="text-sm text-blue-600">← 函数与导数复习目录</Link>
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二模块 · 2.3</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">基本初等函数与图象变换</h1><p className="mt-5 leading-8">整理幂、指数、对数及绝对值函数的定义域、单调方向与图象变换，处理复合和指数换元问题。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 同底比较需看底数</h3><p className="mt-3 leading-8">{"指数函数和对数函数均要求 a>0 且 a≠1。a>1 时严格递增，0<a<1 时严格递减；对数还需真数为正。同底比较前先核对定义域，再确定不等号方向。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 图象变换用点追踪</h3><p className="mt-3 leading-8">{"y=f(x−h)+k 对应把原图上的点 (t,f(t)) 变为 (t+h,f(t)+k)。y=|f(x)| 保留 x 轴上方部分，把下方翻上来；y=f(|x|) 保留右半图象，再关于 y 轴复制。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 复合与换元都要跟踪范围</h3><p className="mt-3 leading-8">{"复合函数的内层输出必须落在外层定义域中。将 t=a^x 换元后必有 t>0，还要结合 x 的额外限制；求新函数最值后应把取等条件还原为 x。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"a^{\\log_a x}=x\\quad(a>0,\\ a\\ne1,\\ x>0)"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/exponential-log/applications">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">底数小于 1 的对数不等式</summary><p className="mt-4 leading-8">{"解 log₁/₂(x−1)≥−1。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"先由 x−1>0 得 x>1。"}</li><li>{"右边 −1=log₁/₂2；底数 1/2 小于 1，函数递减，因此 x−1≤2。"}</li><li>{"联立 x>1 与 x≤3，得到解集 (1,3]。x=3 可取，x=1 不在定义域。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">指数换元与范围</summary><p className="mt-4 leading-8">{"求 f(x)=9^x−4·3^x+6 在 x≥1 时的最小值。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"令 t=3^x。由 x≥1 及底数大于 1，得 t≥3。"}</li><li>{"整理 f=t²−4t+6=(t−2)²+2。顶点 t=2 不属于 t≥3，不能取到形式上的最小值 2。"}</li><li>{"在 t≥3 上，(t−2)² 随 t 递增，所以最小值在 t=3 取得，为 1+2=3。"}</li><li>{"还原 t=3^x=3，得 x=1，满足原条件。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"忽略底数小于 1 时的不等号反向；把平移方向记反；在换元范围之外取顶点；不核对对数真数。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·基本初等函数")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/properties">← 上一节</Link><Link href="/grade3/functions-derivatives/zeros-equations">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [kind,setKind]=useState('exp'),[h,setH]=useState(0);
 const domain=kind==='log'?[h+0.08,5]:[-3,5];
 const fn=(x:number)=>kind==='log'?Math.log2(x-h):kind==='half'?2**(-(x-h)):2**(x-h);
 const controls=<><label>选择函数<select className="ml-3 rounded border p-2" value={kind} onChange={e=>setKind(e.target.value)}><option value="exp">2^(x−h)</option><option value="half">(1/2)^(x−h)</option><option value="log">log₂(x−h)</option></select></label><label className="mt-4 block">水平平移 h = {h}<input aria-label="平移参数 h" className="mt-3 block w-full" type="range" min="-2" max="2" step="0.5" value={h} onChange={e=>setH(Number(e.target.value))}/></label></>;
 const status=kind==='log'?`定义域 x>${h}，值域 R；函数严格递增，竖直渐近线 x=${h}。`:`定义域 R，值域 (0,+∞)；函数严格${kind==='half'?'递减':'递增'}，在 x=${h} 时函数值为 1。`;
 const xMin=-3,xMax=5,yMin=-5,yMax=12;
 const extra: [number,number][][]=[];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="基本初等函数与图象变换交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>基本初等函数与图象变换：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-elementary-functions"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-elementary-functions)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
