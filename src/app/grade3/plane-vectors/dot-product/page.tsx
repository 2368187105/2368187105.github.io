"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四模块 · 4.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">数量积、夹角与投影</h1><p className="mt-5 leading-8">用数量积连接夹角、垂直、模的平方与投影，辨认实数结果，区分有符号投影与投影长度。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 数量积是实数</h3><p className="mt-3 leading-8">{vectorText("数量积可正、可负、可零，结果不是向量。坐标式是对应分量乘积之和；几何式中夹角 θ∈[0,π]，只对非零向量定义。两个非零向量垂直等价于数量积为零。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 模平方展开保留交叉项</h3><p className="mt-3 leading-8">{vectorText("|u±v|²=|u|²±2u·v+|v|²。数乘出现在向量里面时，交叉项也要乘相应系数。先算模平方，再利用模非负开方，不能把平方最值直接当模的最值。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 数量投影可以为负</h3><p className="mt-3 leading-8">{vectorText("本节用数量投影表示 v 在 u 指向上的有符号投影，等于 v·(u/|u|)，要求 u≠0；投影长度是其绝对值。投影向量则还要乘方向单位向量，是另一种对象。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\vec u\\cdot\\vec v=x_1x_2+y_1y_2=|\\vec u||\\vec v|\\cos\\theta,\\quad \\text{数量投影}=\\frac{\\vec v\\cdot\\vec u}{|\\vec u|}"}/></div><Link href="/grade1/vectors/dot-product" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">夹角与符号</summary><p className="mt-4 leading-8">{vectorText("u=(1,1)、v=(1,−2)，求数量积与夹角的余弦。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("u·v=1×1+1×(−2)=−1。|u|=√2，|v|=√5，均非零。")}</li><li>{vectorText("cosθ=(u·v)/(|u||v|)=−1/√10=−√10/10。")}</li><li>{vectorText("余弦为负，夹角为钝角，不需强行求非特殊角的精确度数。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">投影与投影长度</summary><p className="mt-4 leading-8">{vectorText("求 v=(−2,3) 在 u=(1,0) 方向的数量投影及投影长度。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("u 已为单位向量，数量投影 v·u=−2。")}</li><li>{vectorText("负号说明投影指向与 u 相反；投影长度为 |−2|=2。")}</li><li>{vectorText("若还求投影向量，则为 (−2)u=(−2,0)，要和实数 −2、长度 2 分开。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("把数量积当成坐标向量；模平方展开漏交叉项；夹角公式忘记非零条件；数量投影一开始就取绝对值。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·数量积与投影")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors/coordinates">← 上一节</Link><Link href="/grade3/plane-vectors/geometry-applications">下一节 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [degrees,setDegrees]=useState(60),theta=degrees*Math.PI/180;
 const u: Pair=[3,0],v: Pair=[2*Math.cos(theta),2*Math.sin(theta)],foot: Pair=[v[0],0];
 const scale=80,origin: Pair=[260,270];
 const controls=<label>夹角 θ={degrees}°<input aria-label="夹角 θ" type="range" min="0" max="180" step="15" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 block w-full"/></label>;
 const objects=<><Arrow from={[0,0]} to={u} label="u" color="#2563eb"/><Arrow from={[0,0]} to={v} label="v" color="#d97706"/><line x1={project(v)[0]} y1={project(v)[1]} x2={project(foot)[0]} y2={project(foot)[1]} stroke="#94a3b8" strokeDasharray="5 3"/><Arrow from={[0,0]} to={foot} label="投影向量" color="#059669" labelDy={26}/></>;
 const status=`|u|=3、|v|=2，u·v≈${Number((6*Math.cos(theta)).toFixed(3))}；v 在 u 方向的数量投影约 ${Number((2*Math.cos(theta)).toFixed(3))}。绿色箭头表示投影向量，投影长度取数量投影的绝对值；θ>90° 时数量投影为负。`;
 function Arrow({from,to,label,color,labelDy=0}:{from:Pair;to:Pair;label:string;color:string;labelDy?:number}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-dot-product)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9+labelDy)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 return <div className="mt-5">{controls}<svg role="img" aria-label="数量积、夹角与投影交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>数量积、夹角与投影：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-dot-product" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
