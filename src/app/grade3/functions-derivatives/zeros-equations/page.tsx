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
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二模块 · 2.4</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">函数零点与方程根数</h1><p className="mt-5 leading-8">把函数零点转化为方程解，用连续与异号证明存在，用单调性控制根数；换元后准确还原不同实根个数。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 零点是横坐标</h3><p className="mt-3 leading-8">{"函数零点是方程 f(x)=0 的自变量解，不是图象交点本身。重根在不同实根个数中只计一次；偶重根附近函数可能不变号。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 存在与唯一分开证明</h3><p className="mt-3 leading-8">{"在闭区间连续且端点异号，只能推出开区间内至少一个零点。严格单调能推出至多一个，但不能单独保证存在。完整的“恰一个根”必须具备两部分论证。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 参数与换元的临界位置</h3><p className="mt-3 leading-8">{"水平线过极值点、触及取值端点或换元根越过允许范围，都是根数发生变化的位置。t=|x| 时，正 t 对应两个 x，t=0 只对应一个，负 t 应舍去。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"f(a)f(b)<0\\quad\\Longrightarrow\\quad\\exists\\xi\\in(a,b),\\ f(\\xi)=0\\quad\\text{(连续时)}"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/functions/monotonicity">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">存在性加唯一性</summary><p className="mt-4 leading-8">{"证明 x³+x−1=0 在 (0,1) 有且仅有一个实根。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设 f=x³+x−1，为多项式，在 [0,1] 连续。f(0)=−1<0，f(1)=1>0。"}</li><li>{"由连续和端点异号，至少存在一个根 ξ∈(0,1)。"}</li><li>{"f′=3x²+1>0，所以 f 在 R 上严格递增，至多一个根。"}</li><li>{"存在与至多一个相结合，方程在 (0,1) 恰有一个根，且整个 R 上也只有这一个。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">绝对值方程的根数</summary><p className="mt-4 leading-8">{"讨论 |x|²−4|x|=a 的不同实根个数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"令 t=|x|≥0，得 (t−2)²=a+4。"}</li><li>{"a<−4 时无 t；a=−4 时 t=2，对应两个 x。"}</li><li>{mathText("−4<a<0 时 t=2±√(a+4) 均正且不同，对应四个 x。")}</li><li>{mathText("a=0 时 t=0、4，对应 x=0、±4，共三个；a>0 时只保留正的 t=2+√(a+4)，对应两个 x。")}</li><li>{"所以根数依次为 0、2、4、3、2，临界参数 −4、0 都要单独列出。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"把异号定理误写成唯一性定理；遗漏连续条件；把 t=0 也对应为两个 x；把同一个重根重复计数。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·零点与方程")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/elementary-functions">← 上一节</Link><Link href="/grade3/functions-derivatives/rules-tangent">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [a,setA]=useState(0);
 const domain=[-3,3],fn=(x:number)=>x*x-2*Math.abs(x);
 const count=a < -1?0:a===-1?2:a<0?4:a===0?3:2;
 const controls=<label>水平线高度 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="-2" max="2" step="0.25" value={a} onChange={e=>setA(Number(e.target.value))}/></label>;
 const status=`x²−2|x|=${a} 有 ${count} 个不同实根。特别检查 a=−1 和 a=0。`;
 const xMin=-3,xMax=3,yMin=-2,yMax=4;
 const extra: [number,number][][]=[[[-3,a],[3,a]]];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="函数零点与方程根数交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>函数零点与方程根数：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-zeros-equations"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-zeros-equations)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
