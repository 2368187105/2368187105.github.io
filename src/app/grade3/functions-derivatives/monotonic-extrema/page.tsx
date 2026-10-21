"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader />
  <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
   <Link href="/grade3/functions-derivatives" className="text-sm text-blue-600">← 函数与导数复习目录</Link>
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二章 · 2.6</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">导数、单调性与极值最值</h1><p className="mt-5 leading-8">从导数符号建立完整变化顺序，区分驻点、极值与闭区间最值；参数改变时重新确定驻点数量和位置。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先定域、求导、解临界点</h3><p className="mt-3 leading-8">{"按定义域分区间，求导后列出零点及可能的不可导点。用这些点划分区间，再判断每段导数符号。不要在分母为零或函数未定义的位置直接套用单调结论。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 极值必须检查变化</h3><p className="mt-3 leading-8">{"对本节可导函数，驻点两侧由正到负得极大值，由负到正得极小值，不变号则没有极值。导数为零只是可导函数内部极值点的必要条件，不是充分条件。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 最值比较候选点与端点</h3><p className="mt-3 leading-8">{"连续函数在闭区间上能取最值。比较端点、内部驻点和相关不可导点，列出所有相同最值的取点。含参题中，驻点是否存在、是否落在区间内也可能随参数变化。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"f'(x)=3(x^2-a),\\quad a>0\\Rightarrow x=\\pm\\sqrt a"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade2/derivatives/applications">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">闭区间最大值不一定是极大值</summary><p className="mt-4 leading-8">{"求 f(x)=x³−3x 在 [0,2] 的单调区间和最值。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"f′=3(x−1)(x+1)，在 (0,1) 为负，在 (1,2) 为正。"}</li><li>{"因此在 [0,1] 严格递减，在 [1,2] 严格递增，x=1 是极小值点。"}</li><li>{"比较 f(0)=0、f(1)=−2、f(2)=2，最小值为 −2，最大值为 2。"}</li><li>{"最小值在内部点 x=1，最大值在端点 x=2，故仅找极值不能代替闭区间最值。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">参数与极值点</summary><p className="mt-4 leading-8">{"讨论 f(x)=x³−6ax 的单调性。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"f′=3x²−6a=3(x²−2a)。若 a<0，导数恒正；若 a=0，函数为 x³，仍严格递增。"}</li><li>{mathText("若 a>0，导数为零的根为 ±√(2a)。外侧导数正，内侧负。")}</li><li>{mathText("所以 a≤0 时全域严格递增；a>0 时在两外侧区间分别递增，在 [−√(2a),√(2a)] 递减。")}</li><li>{"a>0 时两驻点分别为极大、极小点；a=0 时驻点不发生变号，没有极值。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{mathText("把驻点直接称为极值点；忽略端点或重复的最值取点；在 a<0 时写实数 √a；把局部极值当作全域最值。")}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·单调性与最值")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/rules-tangent">← 上一节</Link><Link href="/grade3/functions-derivatives/parameter-inequalities">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [a,setA]=useState(1);
 const domain=[-3,3],fn=(x:number)=>x*x*x-3*a*x;
 const controls=<label>参数 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="-1" max="3" step="0.5" value={a} onChange={e=>setA(Number(e.target.value))}/></label>;
 const status=a<=0?'a≤0，函数在 R 上严格递增，无极值。':`a>0，极大值约 ${(2*a*Math.sqrt(a)).toFixed(3)}，极小值约 ${(-2*a*Math.sqrt(a)).toFixed(3)}，分别位于 x≈${(-Math.sqrt(a)).toFixed(3)} 和 x≈${Math.sqrt(a).toFixed(3)}。`;
 const xMin=-3,xMax=3,yMin=-18,yMax=18;
 const extra: [number,number][][]=[];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="导数、单调性与极值最值交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>导数、单调性与极值最值：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-monotonic-extrema"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-monotonic-extrema)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
