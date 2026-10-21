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
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二章 · 2.8</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">导数综合与分类讨论</h1><p className="mt-5 leading-8">把求导、最值、零点与参数边界合为一条完整推理链，对对数与指数方程逐类核对根的存在、唯一和取值范围。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先整理参数出现的位置</h3><p className="mt-3 leading-8">{"参数可以独立成水平线高度时，优先研究一个固定函数；参数进入导数零点时，按参数决定的根数和位置分类。每一类都要保留原定义域。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 每个根数结论都要有依据</h3><p className="mt-3 leading-8">{"单调分支上至多一个交点，连续且覆盖目标高度才保证至少一个。只有最值还不足以断言两侧都有根；还要说明分支两端的变化或给出异号区间。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 临界参数单独核查</h3><p className="mt-3 leading-8">{"水平线经过极值点时两个交点可能合并，渐近高度可能永远取不到，重根不增加不同根数。最后核对分类是否覆盖全部参数，以及边界是否相互重叠或遗漏。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"g(x)=\\frac{\\ln x}{x},\\quad g'(x)=\\frac{1-\\ln x}{x^2},\\quad \\max g=\\frac1e"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade2/derivatives/applications">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">三次函数与水平线</summary><p className="mt-4 leading-8">{"讨论 x³−3x=a 的不同实根个数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设 F=x³−3x，F′=3(x−1)(x+1)，所以在 (−∞,−1] 递增、[−1,1] 递减、[1,+∞) 递增。"}</li><li>{"F(−1)=2，F(1)=−2；两端分别趋于负无穷和正无穷，且每个分支连续。"}</li><li>{"−2<a<2 时三支各有一个交点，共 3 根。a=2 时根为 −1（重根）及 2；a=−2 时为 1（重根）及 −2，均共 2 个不同根。"}</li><li>{"a>2 或 a<−2 时仅有一个外侧分支达到该高度，所以只有 1 根。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">分离参数后的根数</summary><p className="mt-4 leading-8">{"讨论 ln x=ax 在 a=0、a=1/e 及 0<a<1/e 时的不同正根个数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"x>0，可除以 x，研究 g=ln x/x。导数为 (1−ln x)/x²，故在 (0,e] 递增、[e,+∞) 递减。"}</li><li>{"g(1)=0，最大值 g(e)=1/e；右支始终为正并趋于 0。"}</li><li>{"a=0 时唯一根为 x=1，右支接近 0 不意味着还能交到 0。a=1/e 时唯一根为 x=e。"}</li><li>{"0<a<1/e 时左支在 (1,e) 有一个交点，右支在 (e,+∞) 也有一个，共 2 根；完整的全参数论证见本节解答题。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"只画大致图象而不给分支单调与覆盖范围；把渐近高度当成可取值；临界参数不单列；忘记重根只算一个不同根。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·导数综合")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/parameter-inequalities">← 上一节</Link><Link href="/grade3/functions-derivatives">完成本章，返回目录 →</Link></div>
  </article></main>;
}

function Explore() {
 const [mode,setMode]=useState('log'),[choice,setChoice]=useState('0.2');
 const a=choice==='critical'?1/Math.E:Number(choice);
 const domain=mode==='log'?[0.12,8]:[-3,3];
 const fn=(x:number)=>mode==='log'?Math.log(x)/x:Math.exp(x)-x;
 const count=mode==='log'?(a>1/Math.E?0:choice==='critical'?1:a>0?2:1):(a<1?0:a===1?1:2);
 const controls=<div className="flex flex-wrap gap-4"><label>研究函数<select className="ml-2 rounded border p-2" value={mode} onChange={e=>setMode(e.target.value)}><option value="log">ln x / x</option><option value="exp">e^x−x</option></select></label><label>高度 a<select className="ml-2 rounded border p-2" value={choice} onChange={e=>setChoice(e.target.value)}><option value="-0.5">−0.5</option><option value="0">0</option><option value="0.2">0.2</option><option value="critical">1/e</option><option value="0.6">0.6</option><option value="1">1</option><option value="2">2</option></select></label></div>;
 const status=`${mode==='log'?'ln x=ax（x>0）':'e^x−x=a'} 在全定义域有 ${count} 个不同实根。图中只画有限窗口，远处交点可能不在窗口内；根数按完整解析判断。`;
 const xMin=mode==='log'?0:-3,xMax=mode==='log'?8:3,yMin=mode==='log'?-1:0,yMax=mode==='log'?2.5:22;
 const extra: [number,number][][]=[[[xMin,a],[xMax,a]]];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="导数综合与分类讨论交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>导数综合与分类讨论：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-comprehensive"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-comprehensive)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
