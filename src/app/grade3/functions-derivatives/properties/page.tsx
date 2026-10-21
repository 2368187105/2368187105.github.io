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
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二章 · 2.2</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">单调性、奇偶性与周期性</h1><p className="mt-5 leading-8">用定义域和等式核实奇偶性，用作差或导数证明单调性，将周期与对称性质用于函数值和不等式。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 奇偶性先看定义域</h3><p className="mt-3 leading-8">{"定义域必须关于原点对称，再比较 f(−x) 与 f(x)。奇函数图象关于原点对称，偶函数关于 y 轴对称。奇函数只有在 0 属于定义域时，才可推出 f(0)=0。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 单调性有区间条件</h3><p className="mt-3 leading-8">{"作差法先任取同一区间内 x₁<x₂，再严格判断 f(x₂)−f(x₁) 的符号。导数法也必须在函数定义且可导的区间内使用。两段递增区间不能直接称其并集上递增。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 周期归约不擅自认最小周期</h3><p className="mt-3 leading-8">{"已知 f(x+T)=f(x) 可沿整数倍 T 平移输入；不能仅凭此式断言 T 是最小正周期。和奇偶性质联合使用时，应把每一次输入变换写出来。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"f(-x)=-f(x),\\qquad f(x+T)=f(x)\\quad(T>0)"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/functions/parity">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">按定义证明奇函数</summary><p className="mt-4 leading-8">{"证明 f(x)=ln((2+x)/(2−x)) 是奇函数，并求定义域。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"先解 (2+x)/(2−x)>0。分子分母同号的有效区间是 −2<x<2，定义域关于原点对称。"}</li><li>{"将 −x 代入，得 f(−x)=ln((2−x)/(2+x))。"}</li><li>{"因真数为正，可用对数运算，f(−x)=−ln((2+x)/(2−x))=−f(x)，故是奇函数。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">奇函数与单调性联合</summary><p className="mt-4 leading-8">{"f 是 R 上严格递增奇函数，解 f(x−2)+f(2x+1)>0。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"移项得 f(x−2)>−f(2x+1)。"}</li><li>{"利用奇函数，右边等于 f(−2x−1)。"}</li><li>{"利用严格递增，等价于 x−2>−2x−1，即 3x>1，所以 x>1/3。"}</li><li>{"所有输入均在 R 内，变形可逆，故解集为 (1/3,+∞)。等号时函数值和为 0，应排除。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"仅凭图象外观判断奇偶性；不检查定义域对称；把导数非负直接当作所有情形下严格递增的充分证明；把一个周期认作最小周期。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·函数性质")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/domain-range">← 上一节</Link><Link href="/grade3/functions-derivatives/elementary-functions">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [kind,setKind]=useState('odd'),[point,setPoint]=useState(1);
 const domain=[-2,2],fn=(x:number)=>kind==='odd'?x*x*x+x:x*x;
 const controls=<><label>函数类型<select className="ml-3 rounded border p-2" value={kind} onChange={e=>setKind(e.target.value)}><option value="odd">x³+x（奇函数）</option><option value="even">x²（偶函数）</option></select></label><label className="mt-4 block">观察输入 x = {point}<input aria-label="观察输入 x" className="mt-3 block w-full" type="range" min="-2" max="2" step="0.5" value={point} onChange={e=>setPoint(Number(e.target.value))}/></label></>;
 const status=`f(${point})=${fn(point)}，f(${-point})=${fn(-point)}；${kind==='odd'?'关于原点对称，两个值互为相反数':'关于 y 轴对称，两个值相等'}。`;
 const xMin=-3,xMax=3,yMin=-11,yMax=11;
 const extra: [number,number][][]=[[[point,0],[point,fn(point)]],[[-point,0],[-point,fn(-point)]]];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="单调性、奇偶性与周期性交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>单调性、奇偶性与周期性：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-properties"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-properties)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
