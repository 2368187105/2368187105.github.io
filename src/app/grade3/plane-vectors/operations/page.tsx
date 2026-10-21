"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四模块 · 4.1</p><h1 className="mt-3 text-3xl font-bold text-slate-900">向量概念与线性运算</h1><p className="mt-5 leading-8">区分有方向的位移与无方向的长度，正确使用加减、数乘和模，说明零向量及夹角的适用前提。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 向量与长度是不同对象</h3><p className="mt-3 leading-8">{vectorText("向量由大小和方向确定，可平移比较；起点不同不妨碍两向量相等。模是非负实数，位移为零时得到零向量。夹角只对两个非零向量定义，不能给零向量强行指定方向和角度。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 路径法统一加减</h3><p className="mt-3 leading-8">{vectorText("首尾相接的位移之和指向总终点；同起点相减可改成相反向量相加。每一步写出起点、终点，尤其注意减法顺序。闭合路径的位移和为零，不意味着路径总长度为零。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 数乘与模的取等条件</h3><p className="mt-3 leading-8">{vectorText("数乘系数正负决定方向是否反转，模只乘系数绝对值。一般只有 |u+v|≤|u|+|v|，两个非零向量同向时取等；不能把向量线性运算套到模上。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC},\\quad \\overrightarrow{OA}-\\overrightarrow{OB}=\\overrightarrow{BA},\\quad|\\lambda\\vec u|=|\\lambda|\\,|\\vec u|"}/></div><Link href="/grade1/vectors/linear-operations" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">同起点相减</summary><p className="mt-4 leading-8">{vectorText("用一个向量表示 OA+AB−OB。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("先沿路径 O→A→B，得 OA+AB=OB。")}</li><li>{vectorText("代回原式得到 OB−OB=0，即零向量。")}</li><li>{vectorText("这是位移抵消，不是说路径 OA 与 AB 的长度和为零。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">平行四边形与中点</summary><p className="mt-4 leading-8">{vectorText("平行四边形 ABCD 中 AB=u、AD=v，N 为 CD 中点，求 AN、BN。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("因为 CD=−AB=−u，故 DN=DC/2=u/2。")}</li><li>{vectorText("AN=AD+DN=v+u/2。")}</li><li>{vectorText("BN=BA+AN=−u+(v+u/2)=v−u/2。每一步都按有向路径相接。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("把模当作向量；相减时写反方向；负倍数的模写为负；忘记同向才可能在三角不等式取等。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·概念与运算")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors">← 模块目录</Link><Link href="/grade3/plane-vectors/basis-collinearity">下一节 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [lambda,setLambda]=useState(1);
 const u: Pair=[2,1],v: Pair=[lambda,2*lambda],sum: Pair=[2+lambda,1+2*lambda];
 const scale=35,origin: Pair=[220,220];
 const controls=<label>参数 λ={lambda}<input aria-label="参数 λ" type="range" min="-2" max="2" step="0.5" value={lambda} onChange={e=>setLambda(Number(e.target.value))} className="mt-3 block w-full"/></label>;
 const objects=<><Arrow from={[0,0]} to={u} label="u" color="#2563eb"/><Arrow from={[0,0]} to={v} label="λv" color="#d97706"/><Arrow from={u} to={sum} label="λv" color="#d97706"/><Arrow from={[0,0]} to={sum} label="u+λv" color="#059669"/></>;
 const status=`固定 u=(2,1)、v=(1,2)，u+λv=(${sum[0]},${sum[1]})。λ<0 时 λv 与 v 反向；λ=0 时 λv 为零向量，不绘制方向箭头。`;
 function Arrow({from,to,label,color}:{from:Pair;to:Pair;label:string;color:string}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-operations)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 return <div className="mt-5">{controls}<svg role="img" aria-label="向量概念与线性运算交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>向量概念与线性运算：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-operations" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
