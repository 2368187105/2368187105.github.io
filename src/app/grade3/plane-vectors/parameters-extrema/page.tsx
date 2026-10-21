"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四模块 · 4.6</p><h1 className="mt-3 text-3xl font-bold text-slate-900">含参向量与模的最值</h1><p className="mt-5 leading-8">把平行、垂直和模的最值转成参数方程或配方，处理零向量、轨迹与非退化筛选，完整说明取等条件。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 含参关系先写判据</h3><p className="mt-3 leading-8">{vectorText("共线用交叉乘积，垂直用数量积。得到参数后回代，尤其检查题目是否要求两个向量非零。代数判据成立，不一定满足夹角、非退化三角形等额外条件。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 最小模先平方配方</h3><p className="mt-3 leading-8">{vectorText("若 u 固定、v 非零，|u+tv|² 是关于 t 的开口向上二次式。配方给出最小平方及取点，再开根得到最小模。若 t 被限制在区间内，需检查配方中心是否可取。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 轨迹的代数解还要筛选</h3><p className="mt-3 leading-8">{vectorText("由距离相等或数量积为零得到轨迹方程后，回到原几何条件排除零向量、退化点和被除因子为零的情形。最后验证剩余点确实都满足，才能写成完整轨迹。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"|\\vec u+t\\vec v|^2=|\\vec v|^2\\left(t+\\frac{\\vec u\\cdot\\vec v}{|\\vec v|^2}\\right)^2+|\\vec u|^2-\\frac{(\\vec u\\cdot\\vec v)^2}{|\\vec v|^2}\\quad(\\vec v\\ne\\vec0)"}/></div><Link href="/grade1/vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">配方求最短模</summary><p className="mt-4 leading-8">{vectorText("求 u(t)=(t,4−t) 的模的最小值和取点。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("|u(t)|²=t²+(4−t)²=2t²−8t+16。")}</li><li>{vectorText("配方得 2(t−2)²+8，所以最小平方为 8，在 t=2 取得。")}</li><li>{vectorText("最小模为 √8=2√2，对应向量 (2,2)。若题目另限制 t，还要重新检查 t=2 是否允许。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">等距轨迹</summary><p className="mt-4 leading-8">{vectorText("A(0,0)、B(4,0)，求满足 |PA|=|PB| 的点 P(x,y) 的轨迹。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("两距离非负，等价平方：x²+y²=(x−4)²+y²。")}</li><li>{vectorText("展开消去同类项，得 8x=16，即 x=2，y 任意。")}</li><li>{vectorText("反过来，x=2 时两边平方均为 4+y²，故两距离相等；轨迹正是线段 AB 的垂直平分线。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("把共线与垂直判据混用；参数回代后漏掉零向量；平方最小值没有开根；轨迹方程中保留退化点。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·参数与最值")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors/geometry-applications">← 上一节</Link><Link href="/grade3/plane-vectors">完成本模块，返回目录 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [t,setT]=useState(0);
 const current: Pair=[t,2-t],h: Pair=[1,1];
 const scale=70,origin: Pair=[200,290];
 const controls=<label>参数 t={t}<input aria-label="参数 t" type="range" min="-1" max="3" step="0.25" value={t} onChange={e=>setT(Number(e.target.value))} className="mt-3 block w-full"/></label>;
 const objects=<><line x1={project([-1,3])[0]} y1={project([-1,3])[1]} x2={project([3,-1])[0]} y2={project([3,-1])[1]} stroke="#94a3b8" strokeDasharray="5 3"/><Arrow from={[0,0]} to={current} label="u" color="#2563eb"/>{t!==1&&<Arrow from={[0,0]} to={h} label="OH" color="#059669"/>}<Point at={h} label="H"/></>;
 const status=`u=(${t},${2-t})，|u|²=${t*t+(2-t)**2}，|u|≈${Math.hypot(t,2-t).toFixed(3)}。配方为 2(t−1)²+2，在 t=1 取得最小模 √2；H(1,1) 是原点到直线 x+y=2 的垂足。`;
 function Arrow({from,to,label,color}:{from:Pair;to:Pair;label:string;color:string}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-parameters-extrema)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 function Point({at,label}:{at:Pair;label:string}) { const [x,y]=project(at);return <g><circle cx={x} cy={y} r="4" fill="#334155"/><text x={x+7} y={y+18} fontSize="13" fill="#334155">{label}</text></g>;}
 return <div className="mt-5">{controls}<svg role="img" aria-label="含参向量与模的最值交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>含参向量与模的最值：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-parameters-extrema" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
