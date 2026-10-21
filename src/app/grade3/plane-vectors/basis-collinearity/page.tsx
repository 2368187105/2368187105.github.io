"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四模块 · 4.2</p><h1 className="mt-3 text-3xl font-bold text-slate-900">基底表示、共线与分点</h1><p className="mt-5 leading-8">利用不共线基底的唯一表示，处理共线、内外分点与中线交点，写清系数和、比例方向及非零前提。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 不共线保证系数唯一</h3><p className="mt-3 leading-8">{vectorText("平面上两个不共线向量组成基底，任何平面向量能唯一表示为其线性组合。若 αu+βv=0，则 α=β=0。没有不共线前提，不能机械比较系数。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 共线与分点区分</h3><p className="mt-3 leading-8">{vectorText("若 u≠0，v 与 u 共线等价于 v=λu，允许 λ=0。对直线 AB 上的点 P，AP=tAB，t∈R；若要求在线段 AB 内，还需 0≤t≤1。负系数对应反向延长线。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 统一原点后的系数和</h3><p className="mt-3 leading-8">{vectorText("OP=OA+t(OB−OA)=(1−t)OA+tOB，两个系数和为 1。若 OA、OB 不共线，反过来也能由系数和为 1 判定点在直线 AB 上。长度比需要取模，不能保留负号。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\vec p=\\alpha\\vec u+\\beta\\vec v,\\qquad \\overrightarrow{OP}=(1-t)\\overrightarrow{OA}+t\\overrightarrow{OB}"}/></div><Link href="/grade1/vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">唯一表示求参数</summary><p className="mt-4 leading-8">{vectorText("u、v 不共线，若 (t−1)u+2v=3u+(s+1)v，求 t、s。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("移项得 (t−4)u+(1−s)v=0。")}</li><li>{vectorText("由不共线基底的唯一性，t−4=0、1−s=0，所以 t=4、s=1。")}</li><li>{vectorText("回代两边都为 3u+2v，核对成立。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">内分点与起点</summary><p className="mt-4 leading-8">{vectorText("P 在线段 AB 上，|AP|:|PB|=2:3，求 OP 用 OA、OB 的表示。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("P 在线段内部且比例为 2:3，因此 AP=(2/5)AB，方向与 AB 相同。")}</li><li>{vectorText("OP=OA+AP=OA+(2/5)(OB−OA)。")}</li><li>{vectorText("合并得 OP=(3/5)OA+(2/5)OB，系数和为 1；两系数均正，符合内分位置。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("没有不共线就比较系数；把直线上的点都当线段内点；内分比例对应系数弄反；把负的数乘系数当负长度。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·基底与共线")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors/operations">← 上一节</Link><Link href="/grade3/plane-vectors/coordinates">下一节 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [alpha,setAlpha]=useState(1),[beta,setBeta]=useState(1);
 const u: Pair=[3,0],v: Pair=[1,2],first: Pair=[3*alpha,0],sum: Pair=[3*alpha+beta,2*beta];
 const scale=40,origin: Pair=[220,200];
 const controls=<div className="space-y-4"><label className="block">系数 α={alpha}<input aria-label="系数 α" type="range" min="-1" max="2" step="0.5" value={alpha} onChange={e=>setAlpha(Number(e.target.value))} className="mt-3 block w-full"/></label><label className="block">系数 β={beta}<input aria-label="系数 β" type="range" min="-1" max="2" step="0.5" value={beta} onChange={e=>setBeta(Number(e.target.value))} className="mt-3 block w-full"/></label></div>;
 const objects=<><Arrow from={[0,0]} to={u} label="" color="#94a3b8"/><Arrow from={[0,0]} to={v} label="" color="#94a3b8"/><Arrow from={[0,0]} to={first} label="αu" color="#2563eb"/><Arrow from={first} to={sum} label="βv" color="#d97706"/><Arrow from={[0,0]} to={sum} label="αu+βv" color="#059669"/></>;
 const status=`以 u=(3,0)、v=(1,2) 为不共线基底，αu+βv=(${sum[0]},${sum[1]})。两系数一旦确定，表示唯一；结果为零向量时两系数都为零。`;
 function Arrow({from,to,label,color}:{from:Pair;to:Pair;label:string;color:string}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-basis-collinearity)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 return <div className="mt-5">{controls}<svg role="img" aria-label="基底表示、共线与分点交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>基底表示、共线与分点：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-basis-collinearity" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
