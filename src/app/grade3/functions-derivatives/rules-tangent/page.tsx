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
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二模块 · 2.5</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">导数运算与切线方程</h1><p className="mt-5 leading-8">辨认和、积、商、复合结构，完整求导；区分“在某处的切线”与“经过某点的切线”，逐项求切点和斜率。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 结构比公式更先一步</h3><p className="mt-3 leading-8">{"先确定函数在哪些点有定义且可导，再辨认外层与内层。复合函数求导要乘内层导数；常数因子保留。对数求导使用真数正的范围，商法则需分母不为零。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 切点和斜率分别求</h3><p className="mt-3 leading-8">{"在 x=t 处的切线，切点为 (t,f(t))，斜率为 f′(t)。先算函数值，再算导数值，最后代入点斜式。切线斜率为零不代表函数值为零。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 经过点时设未知切点</h3><p className="mt-3 leading-8">{"若只说切线经过 P，P 未必在原曲线上。应设切点横坐标 t，写出一般切线，再代入 P 解 t；解出多个 t 时分别写线并检验。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"(uv)'=u'v+uv',\\quad\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2},\\quad y-f(t)=f'(t)(x-t)"} /></div><h3 className="mt-6 font-semibold text-slate-900">基本求导公式与使用范围</h3><div className="mt-3 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"(x^n)'=nx^{n-1},\\quad (\\ln x)'=\\frac1x,\\quad (e^x)'=e^x"} /></div><div className="mt-3 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"(\\sin x)'=\\cos x,\\quad (\\cos x)'=-\\sin x,\\quad (a^x)'=a^x\\ln a"} /></div><div className="mt-3 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"(\\log_a x)'=\\frac1{x\\ln a},\\quad [F(u(x))]'=F'(u(x))u'(x)"} /></div><p className="mt-3 text-sm leading-8">对数要求 x&gt;0，底数 a&gt;0 且 a≠1；幂函数公式在相应定义且可导的范围使用。三角函数求导时角度采用弧度制。复合结构需再乘内层导数。</p><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade2/derivatives/operations">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">乘积与链式法则组合</summary><p className="mt-4 leading-8">{"求 f(x)=x·ln(2x+1) 的导数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"定义域要求 2x+1>0，所以 x>−1/2。"}</li><li>{"设 u=x，v=ln(2x+1)，则 u′=1，v′=2/(2x+1)。"}</li><li>{"乘积法则给出 f′=u′v+uv′=ln(2x+1)+2x/(2x+1)。"}</li><li>{"结果在 x>−1/2 的范围内使用，不能遗漏求导时的定义条件。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">经过曲线外一点的切线</summary><p className="mt-4 leading-8">{"求 y=x² 经过点 (0,−4) 的切线。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设切点 (t,t²)，导数为 2t，切线为 y−t²=2t(x−t)，即 y=2tx−t²。"}</li><li>{"代入 (0,−4)，得 −4=−t²，所以 t=±2。"}</li><li>{"t=2 对应切点 (2,4)，切线 y=4x−4；t=−2 对应 (−2,4)，切线 y=−4x−4。"}</li><li>{"两线在 x=0 时均给出 y=−4，且在各自切点斜率等于曲线导数，故两条都符合。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"把乘积导数写成两导数相乘；复合函数漏乘内层导数；把给定经过点直接当切点；只求出一条切线。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·导数运算与切线")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/zeros-equations">← 上一节</Link><Link href="/grade3/functions-derivatives/monotonic-extrema">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [t,setT]=useState(1);
 const domain=[-3,3],fn=(x:number)=>x*x;
 const controls=<label>切点横坐标 t = {t}<input aria-label="切点横坐标 t" className="mt-3 block w-full" type="range" min="-2" max="2" step="0.5" value={t} onChange={e=>setT(Number(e.target.value))}/></label>;
 const status=`切点 (${t},${t*t})，斜率 ${2*t}，切线 y=${2*t}x−(${t*t})。切点纵坐标与斜率分别由函数值、导数值确定。`;
 const xMin=-3,xMax=3,yMin=-5,yMax=10;
 const extra: [number,number][][]=[[[-3,2*t*(-3)-t*t],[3,2*t*3-t*t]]];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="导数运算与切线方程交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>导数运算与切线方程：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-rules-tangent"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-rules-tangent)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
