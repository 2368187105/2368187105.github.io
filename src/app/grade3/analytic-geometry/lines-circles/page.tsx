"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七模块 · 7.1</p><h1 className="mt-3 text-3xl font-bold text-slate-900">直线与圆的综合复习</h1><p className="mt-5 leading-8">用一般式保留竖直直线，按圆心、半径和点线距离处理相交、相切、弦长及切线，核对位置与非零前提。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 直线方程先核对覆盖范围</h3><p className="mt-3 leading-8">{"一般式 Ax+By+C=0 要求 A、B 不同时为零，能表示竖直直线。斜率式 y=kx+b 不能表示竖直直线；过定点求全体直线时，应单独检查，或采用能够覆盖相应方向的另一种参数式。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 圆的一般式先配方</h3><p className="mt-3 leading-8">{"把 x²、y²系数归一后配方，得到圆心和半径平方。半径平方严格为正才是非退化圆；为零是单点，为负没有实点。点在圆内、圆上或圆外时，可比较到圆心的距离与半径。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 位置关系与弦长共用圆心距离</h3><p className="mt-3 leading-8">{"直线到圆心距离 d 与半径 r 比较：d<r 有两个交点，d=r 相切，d>r 相离。截弦时半径、圆心到弦的垂线与半弦组成直角三角形；算出半弦后必须乘 2。过圆外点的切线段长也来自半径与切线垂直。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}},\\quad(A,B)\\ne(0,0);\\qquad L=2\\sqrt{r^2-d^2}\\ (d<r)"}/></div><Link href="/grade2/circle-equation/line-circle" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">中点约束求圆与弦</summary><p className="mt-4 leading-8">{"圆过 (0,0)、(2,0)，圆心在 x+y=1 上，求圆方程和 y=1/2 所截弦长。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设圆心 (h,k)，等距给出 h²+k²=(h−2)²+k²，所以 4h=4，h=1。"}</li><li>{"由 h+k=1 得 k=0，半径为 1，圆为 (x−1)²+y²=1。"}</li><li>{mathText("代入 y=1/2 得 (x−1)²=3/4，两端点横坐标为 1±√3/2，所以弦长为 √3。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">参数直线的分类</summary><p className="mt-4 leading-8">{"圆 x²+y²=4 与直线 3x+4y=q，求交点个数的参数条件，并求 q=6 时弦长。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("圆心到直线距离为 |q|/√25=|q|/5，半径为 2。")}</li><li>{"所以 |q|<10 时两交点，|q|=10 时相切，|q|>10 时无交点。"}</li><li>{mathText("q=6 时 d=6/5，半弦长 √[4−36/25]=8/5，整弦长为 16/5。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">用斜率式漏掉竖直直线；配方符号反了；半径平方当半径；半弦忘乘 2；圆外点、切点与圆心位置未核对。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·直线与圆")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry">← 回看立体几何与空间向量</Link><Link href="/grade3/analytic-geometry/ellipse">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [height,setHeight]=useState(1);
 const origin:[number,number]=[320,250],scale=50;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const d=Math.abs(height),half=d<=3?Math.sqrt(Math.max(0,9-d*d)):0;
 const markers=d<3?[{p:[-half,height],label:'A'},{p:[half,height],label:'B'},{p:[0,0],label:'O'}]:d===3?[{p:[0,height],label:'T'},{p:[0,0],label:'O'}]:[{p:[0,0],label:'O'}];
 const shapes=<><circle cx={px(0)} cy={py(0)} r="150" fill="#eff6ff" fillOpacity="0.4" stroke="#2563eb" strokeWidth="2"/><line x1={px(-4.5)} x2={px(4.5)} y1={py(height)} y2={py(height)} stroke="#d97706" strokeWidth="2"/><line x1={px(0)} x2={px(0)} y1={py(0)} y2={py(height)} stroke="#059669" strokeDasharray="5 4"/></>;
 const status=`圆 x²+y²=9，直线 y=${height}，圆心距 d=${d}。`+(d<3?`两个不同交点，弦长=2√(9−${height*height})≈${r(2*half)}。`:d===3?'直线相切，只有一个交点 T，不再是两个不同端点组成的弦。':'直线与圆相离，没有实交点。');
 const controls=<label>截线高度 h={height}<input aria-label="截线高度" type="range" min="-4" max="4" step="0.5" value={height} onChange={e=>setHeight(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="直线与圆的综合复习交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>直线与圆的综合复习：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
