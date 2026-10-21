"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七章 · 7.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">抛物线的方程与焦点弦</h1><p className="mt-5 leading-8">从点线等距定义确定开口和焦点位置，用焦半径与韦达定理求焦点弦，明确切线判定和竖直方向的覆盖。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先确认教材参数的约定</h3><p className="mt-3 leading-8">{"本节采用 y²=2px，p>0，此时焦点为 (p/2,0)，准线 x=−p/2。也可写 y²=4ax，此时 a=p/2。两种记法都正确，但不能把同一个系数直接混用。负号改变开口方向，交换 x、y 改变对称轴。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 焦半径来自准线距离</h3><p className="mt-3 leading-8">{"抛物线上点到焦点与到准线的距离相等。向右开口时曲线上 x≥0，故到准线 x=−p/2 的距离可写成 x+p/2。向左、向上或向下时应按对应坐标与绝对值重新判断。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 焦点弦与切线各有前提</h3><p className="mt-3 leading-8">{"求弦长前要有两个不同交点。过焦点且平行对称轴的直线只得到一个有限点，不构成通常的焦点弦；使用 x=my+p/2 可覆盖垂直于对称轴的短弦。切线判别式方法要求消元后确为非退化二次方程。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"y^2=2px\\ (p>0):\\quad F\\left(\\frac p2,0\\right),\\quad x=-\\frac p2,\\quad PF=x+\\frac p2"}/></div><Link href="/grade2/conic-sections/parabola" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">向下开口的焦半径</summary><p className="mt-4 leading-8">{"求 x²=−8y 的焦点与准线，并求曲线上点 (4,−2) 的焦半径。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"写成 x²=−4ay，a=2，所以焦点为 (0,−2)，准线为 y=2。"}</li><li>{"点 (4,−2) 满足 16=−8×(−2)，确在曲线上。"}</li><li>{"到准线的距离是 |−2−2|=4，因此到焦点的距离也为 4；直接计算两点距离同样得到 4。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">用横坐标参数保留竖直弦</summary><p className="mt-4 leading-8">{"抛物线 y²=8x，过焦点直线写成 x=my+2，求焦点弦长。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"焦点为 (2,0)。代入得 y²−8my−16=0，判别式为 64(m²+1)>0，根和 8m、根积 −16。"}</li><li>{"两纵坐标异号，所以焦点在两交点之间。两横坐标和为 m×8m+4=8m²+4。"}</li><li>{"准线为 x=−2，两个焦半径分别为 x₁+2、x₂+2，因此弦长为 8m²+8=8(m²+1)。"}</li><li>{"最短长度为 8，在 m=0、竖直直线 x=2 时达到。参数式没有覆盖水平轴线，但该轴线本来就没有两个不同有限交点。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把 2p 当成 p；交换坐标后焦点方向未变；准线距离忽略绝对值；焦点不在弦内却直接相加；用有限斜率遗漏最短竖直弦。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·抛物线")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/hyperbola">← 上一节</Link><Link href="/grade3/analytic-geometry/chords-midpoints">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [ordinate,setOrdinate]=useState(2);
 const origin:[number,number]=[180,250],scale=50;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const poly=(points:number[][])=>points.map(p=>`${px(p[0])},${py(p[1])}`).join(' ');
 const p=[ordinate*ordinate/4,ordinate],h=[-1,ordinate],distance=p[0]+1;
 const markers=[{p:[1,0],label:'F'},{p:h,label:'H'},{p,label:ordinate===0?'P=O':'P'}];
 const shapes=<><polyline points={poly(Array.from({length:161},(_,i)=>{const y=-4+8*i/160;return [y*y/4,y];}))} fill="none" stroke="#2563eb" strokeWidth="2"/><line x1={px(-1)} x2={px(-1)} y1="20" y2="480" stroke="#94a3b8" strokeDasharray="5 4"/><line x1={px(1)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#d97706"/><line x1={px(-1)} y1={py(ordinate)} x2={px(p[0])} y2={py(p[1])} stroke="#059669"/><text x={px(-1)-12} y="25" textAnchor="end" fontSize="13">准线 x=−1</text></>;
 const status=`y²=4x，F(1,0)，P=(${r(p[0])},${ordinate})。PF≈${r(Math.hypot(p[0]-1,p[1]))}，到准线的距离 PH=${r(distance)}，两者相等。`+(ordinate===0?'顶点 O 也满足定义，距离为 1。':'');
 const controls=<label>动点纵坐标 y={ordinate}<input aria-label="动点纵坐标" type="range" min="-4" max="4" step="0.5" value={ordinate} onChange={e=>setOrdinate(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="抛物线的方程与焦点弦交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>抛物线的方程与焦点弦：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
