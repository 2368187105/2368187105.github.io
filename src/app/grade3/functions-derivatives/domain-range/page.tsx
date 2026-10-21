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
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二章 · 2.1</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">函数的概念、定义域与值域</h1><p className="mt-5 leading-8">从函数三要素出发，确定定义域，区分函数值与值域；对分式、根式和换元问题保留所有取值限制。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 函数是对应关系</h3><p className="mt-3 leading-8">{"判断函数先确定输入集合和对应法则，每个允许输入只能有一个输出。解析式相同但定义域不同，不是同一个函数；值域是实际能得到的所有输出，不是随意指定的数集。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 定义域是条件的交集</h3><p className="mt-3 leading-8">{"分母不为零、偶次根式内非负、对数真数为正，多个约束要同时满足。分段函数逐段检查适用条件；约分或换元后，不能扩大原定义域。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 值域要同时证明界与可取</h3><p className="mt-3 leading-8">{"先证所有输出都落在候选范围内，再说明范围中的值能取到。可用配方、基本不等式、单调性或换元，但必须跟踪新变量范围；严格不等号和缺失输入会造成开端点或缺值。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"D=\\{x\\mid x-1\\ge0,\\ 3-x\\ge0\\}=[1,3]"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/functions/domain-range">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">分母与根式的联合限制</summary><p className="mt-4 leading-8">{mathText("求 f(x)=√(4−x)/(x−2) 的定义域。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"根式有意义要求 4−x≥0，即 x≤4。"}</li><li>{"分母非零要求 x−2≠0，即 x≠2。"}</li><li>{"取交集得到 (−∞,2)∪(2,4]。4 允许，2 不允许，二者不能一起改成开端点。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">受限区间上的二次值域</summary><p className="mt-4 leading-8">{"求 f(x)=x²−2x+3 在 [−1,2] 上的值域。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"配方 f(x)=(x−1)²+2，顶点 x=1 属于定义区间，所以最小值为 2。"}</li><li>{"在 [−1,1] 上平方项随 x 递减，在 [1,2] 上递增；最大值需比较端点。"}</li><li>{"f(−1)=1+2+3=6，f(2)=4−4+3=3，所以最大值为 6。"}</li><li>{"函数在整个闭区间连续，因此 2 到 6 之间的值均可取到，值域为 [2,6]。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"把约分后的解析式当作新的原函数；换元后忘记范围；只求最值却不说明最值是否取得；把定义域和值域混用。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·定义域与值域")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives">← 章节目录</Link><Link href="/grade3/functions-derivatives/properties">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [a,setA]=useState(2);
 const domain=[0,4], fn=(x:number)=>(x-a)**2;
 const maximum=Math.max(a*a,(4-a)**2);
 const controls=<label>顶点横坐标 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="0" max="4" step="0.5" value={a} onChange={e=>setA(Number(e.target.value))}/></label>;
 const status=`f(x)=(x−${a})²，x∈[0,4]；最小值 0 在 x=${a} 取得，最大值为 ${maximum}，值域为 [0,${maximum}]。`;
 const xMin=-1,xMax=5,yMin=-2,yMax=18;
 const extra: [number,number][][]=[];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="函数的概念、定义域与值域交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>函数的概念、定义域与值域：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-domain-range"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-domain-range)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
