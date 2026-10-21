"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四模块 · 4.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">向量的几何应用</h1><p className="mt-5 leading-8">将中点、重心、共线和垂足转为向量等式或数量积，再用坐标或基底计算，并用另一种几何关系检验。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 几何关系先翻译</h3><p className="mt-3 leading-8">{vectorText("中点对应平均，重心对应三顶点位置平均，共线对应数乘，垂直对应数量积为零。先写关系再算数值，可避免在图中凭视觉判断比例或垂足是否在线段内。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 选合适的起点或坐标系</h3><p className="mt-3 leading-8">{vectorText("基底法通常统一从同一顶点出发；坐标法可把一边放在坐标轴上减少计算。点的位置与边的有向位移要分开，不能把坐标平均与向量相减混用。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 直线条件与线段条件不同</h3><p className="mt-3 leading-8">{vectorText("设 H=B+tBC 表示 H 在直线 BC 上，先允许 t∈R。求出垂足后再核对 0≤t≤1；若不满足，垂足在延长线上，距离与面积公式仍可使用，但图形说明要准确。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0,\\qquad \\overrightarrow{AH}\\cdot\\overrightarrow{BC}=0"}/></div><Link href="/grade1/vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">重心坐标与向量和</summary><p className="mt-4 leading-8">{vectorText("A(0,0)、B(3,0)、C(0,6)，求重心 G 并检验 GA+GB+GC。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("重心 G=((0+3+0)/3,(0+0+6)/3)=(1,2)。")}</li><li>{vectorText("分别求位移：GA=(−1,−2)，GB=(2,−2)，GC=(−1,4)。")}</li><li>{vectorText("三个向量逐分量相加为 (0,0)，验证重心向量关系。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">点到直线的垂足</summary><p className="mt-4 leading-8">{vectorText("A(0,0)、B(2,0)、C(0,2)，求 A 到 BC 的垂足 H 与距离。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("BC=(−2,2)，设 H=B+tBC=(2−2t,2t)。")}</li><li>{vectorText("AH·BC=(2−2t)(−2)+(2t)2=−4+8t=0，得 t=1/2。")}</li><li>{vectorText("H=(1,1)，|AH|=√2。参数 1/2 在 [0,1] 内，垂足在线段 BC 上。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("没有先列几何关系就盲目运算；统一起点时符号错误；默认垂足在线段内；由数量积为零直接忽略零向量。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·几何应用")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors/dot-product">← 上一节</Link><Link href="/grade3/plane-vectors/parameters-extrema">下一节 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [cx,setCx]=useState(2),[cy,setCy]=useState(3);
 const a: Pair=[0,0],b: Pair=[4,0],c: Pair=[cx,cy],g: Pair=[(4+cx)/3,cy/3],m: Pair=[2,0];
 const scale=70,origin: Pair=[100,330];
 const controls=<div className="space-y-4"><label className="block">C 的横坐标 x={cx}<input aria-label="C 的横坐标" type="range" min="1" max="3" step="0.5" value={cx} onChange={e=>setCx(Number(e.target.value))} className="mt-3 block w-full"/></label><label className="block">C 的纵坐标 y={cy}<input aria-label="C 的纵坐标" type="range" min="2" max="4" step="0.5" value={cy} onChange={e=>setCy(Number(e.target.value))} className="mt-3 block w-full"/></label></div>;
 const objects=<><polygon points={[a,b,c].map(p=>project(p).join(',')).join(' ')} fill="#eff6ff" stroke="#94a3b8"/><line x1={project(c)[0]} y1={project(c)[1]} x2={project(m)[0]} y2={project(m)[1]} stroke="#94a3b8" strokeDasharray="5 3"/><Arrow from={g} to={a} label="GA" color="#2563eb"/><Arrow from={g} to={b} label="GB" color="#d97706"/><Arrow from={g} to={c} label="GC" color="#059669"/><Point at={a} label="A"/><Point at={b} label="B"/><Point at={c} label="C"/><Point at={g} label="G"/><Point at={m} label="M"/></>;
 const status=`重心 G≈(${g[0].toFixed(3)},${g[1].toFixed(3)})，M 为 AB 中点。GA+GB+GC=0，|CG|:|GM|=2:1。改变 C 后这两种关系仍成立。`;
 function Arrow({from,to,label,color}:{from:Pair;to:Pair;label:string;color:string}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-geometry-applications)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 function Point({at,label}:{at:Pair;label:string}) { const [x,y]=project(at);return <g><circle cx={x} cy={y} r="4" fill="#334155"/><text x={x+7} y={y+18} fontSize="13" fill="#334155">{label}</text></g>;}
 return <div className="mt-5">{controls}<svg role="img" aria-label="向量的几何应用交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>向量的几何应用：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-geometry-applications" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
