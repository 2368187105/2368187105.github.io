"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/trigonometry" className="text-sm text-blue-600">← 三角函数与解三角形目录</Link>
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三章 · 3.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">正弦定理、余弦定理与多解</h1><p className="mt-5 leading-8">明确边 a、b、c 与对角 A、B、C 的对应，按已知条件选定理，并在两边一对角问题中完整排查多解与退化。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 边角对应与内角范围</h3><p className="mt-3 leading-8">{"本节统一用小写边 a、b、c 分别表示 A、B、C 的对边。三边必须为正，满足两边之和大于第三边，内角在 (0,π)，且角和为 π。给定边角后应先确认是否能构成非退化三角形。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 按信息选正弦或余弦定理</h3><p className="mt-3 leading-8">{"已知两角一边、两边一对角，通常用正弦定理；已知两边夹角求第三边，或三边求角，通常用余弦定理。扩展正弦定理中的 2R 是外接圆直径，而不是半径。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. SSA 多解要检查第三角</h3><p className="mt-3 leading-8">{"由 sinB=s 得到锐角 β 后，还可能有 B=π−β。每个候选都必须满足 A+B<π；s=1 时两支合并，s>1 时无解。临界处 C=0 的退化三角形必须排除。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}=2R,\\qquad a^2=b^2+c^2-2bc\\cos A"}/></div><Link href="/grade1/trigonometric/definition-relations" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">两边夹角求第三边与面积</summary><p className="mt-4 leading-8">{"在 △ABC 中，b=2、c=4、A=60°，求 a 与面积。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"余弦定理：a²=2²+4²−2×2×4×cos60°=4+16−8=12。"}</li><li>{mathText("边长为正，a=√12=2√3。")}</li><li>{mathText("面积 S=bc sinA/2=2×4×(√3/2)/2=2√3。两边夹角确定唯一三角形。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">两个候选角中的无效解</summary><p className="mt-4 leading-8">{mathText("在 △ABC 中，A=120°、a=√3、b=1，求 B、C。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("正弦定理得 sinB=b sinA/a=(√3/2)/√3=1/2。")}</li><li>{"B 候选为 30° 或 150°。因 A=120°，必须 B<60°；150° 会使角和超过 180°，应舍去。"}</li><li>{"保留 B=30°，C=180°−120°−30°=30°。sinB 的两解不等于三角形一定有两解。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"边与对角对应错误；把 2R 当成 R；sinB 求出后只取锐角或两解都不检查；把 C=0 的退化情形保留。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·正余弦定理")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry/equations-inequalities">← 上一节</Link><Link href="/grade3/trigonometry/triangle-applications">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [a,setA]=useState(1.5),round=(v:number)=>Number(v.toFixed(3));
 const delta=a*a-1;
 const distances=delta < 0?[]:delta===0?[Math.sqrt(3)]:[Math.sqrt(3)-Math.sqrt(delta),Math.sqrt(3)+Math.sqrt(delta)].filter(t=>t>1e-9);
 const vertices=distances.map(t=>[170+70*t*Math.cos(Math.PI/6),250-70*t*Math.sin(Math.PI/6)]);
 return <div className="mt-5"><p className="text-sm leading-8">固定 A=30°、b=AC=2，B 在从 A 出发的 30° 射线上，且与 C 的距离为 a。</p><label className="mt-3 block">对边 a={a}<input aria-label="边长 a" type="range" min="0.5" max="3" step="0.25" value={a} onChange={e=>setA(Number(e.target.value))} className="mt-3 block w-full"/></label><svg role="img" aria-label="两边一对角的三角形多解探索" className="mt-5 h-auto w-full" viewBox="0 0 600 500"><title>圆与射线的有效交点给出所有三角形</title><circle cx="310" cy="250" r={round(70*a)} fill="none" stroke="#94a3b8" strokeDasharray="5 4"/><line x1="170" y1="250" x2="310" y2="250" stroke="#64748b" strokeWidth="2"/><line x1="170" y1="250" x2="470" y2={round(250-300/Math.sqrt(3))} stroke="#94a3b8" strokeDasharray="5 4"/>{vertices.map((point,i)=><g key={i}><polygon points={`170,250 310,250 ${round(point[0])},${round(point[1])}`} fill={i===0?'#2563eb':'#d97706'} fillOpacity="0.08" stroke={i===0?'#2563eb':'#d97706'} strokeWidth="2"/><circle cx={round(point[0])} cy={round(point[1])} r="4" fill={i===0?'#2563eb':'#d97706'}/><text x={round(point[0]+8)} y={round(point[1]-8)} fontSize="13">B{i+1}</text></g>)}<text x="152" y="275" fontSize="14">A</text><text x="312" y="275" fontSize="14">C</text><text x="215" y="278" fontSize="13">b=2</text><text x="195" y="243" fontSize="12">30°</text></svg><p role="status" className="mt-3 text-sm leading-8">a={a} 时有 {vertices.length} 个非退化三角形。a&lt;1 无解；a=1 一解；1&lt;a&lt;2 两解；a≥2 一解。a=2 时与 A 重合的交点不能作为顶点 B。</p></div>;
}
