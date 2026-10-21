"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/plane-vectors" className="text-sm text-blue-600">← 平面向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第四章 · 4.3</p><h1 className="mt-3 text-3xl font-bold text-slate-900">平面向量的坐标表示</h1><p className="mt-5 leading-8">用终点减起点求位移，逐分量运算；将坐标、向量与距离分清，用不除分量的判据解决共线问题。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 向量坐标是差，不是终点坐标</h3><p className="mt-3 leading-8">{vectorText("点 A 与点 B 的坐标描述位置，AB 的坐标描述位移，必须终点减起点。知道起点和位移，还原终点时逐分量相加。原点为起点时两种数值才恰好相同。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 线性运算与模</h3><p className="mt-3 leading-8">{vectorText("加减和数乘逐分量进行，模用勾股公式取非负根。中点坐标是两点坐标平均，和向量的位移差不同。一般点间距离等于对应位移向量的模。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 共线优先交叉相乘</h3><p className="mt-3 leading-8">{vectorText("坐标向量共线的判据为 x₁y₂−y₁x₂=0，包括分量为零的情况。若要进一步判断同向、反向或夹角，应先确认两个向量非零，再比较比例或数量积。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\overrightarrow{AB}=(x_B-x_A,y_B-y_A),\\quad |\\vec u|=\\sqrt{x^2+y^2},\\quad x_1y_2-y_1x_2=0"}/></div><Link href="/grade1/vectors/coordinates" className="mt-5 inline-block text-sm text-blue-600">回看高一基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">位移与距离</summary><p className="mt-4 leading-8">{vectorText("A(−2,1)、B(1,5)，求 AB、BA 与两点距离。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("终点减起点：AB=(1−(−2),5−1)=(3,4)。")}</li><li>{vectorText("反向位移 BA=(−3,−4)=−AB。")}</li><li>{vectorText("两点距离为 |AB|=√(9+16)=5，与方向无关。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">共线且不漏零分量</summary><p className="mt-4 leading-8">{vectorText("求 u=(t,1)、v=(2,3) 共线时 t。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("由交叉乘积为零，得 3t−2=0，所以 t=2/3。")}</li><li>{vectorText("回代 u=(2/3,1)，v=3u，比例为正且两向量非零，因此同向。")}</li><li>{vectorText("没有使用除以 t 的步骤，所以即使候选曾包含 t=0 也不会被无依据排除。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{vectorText("起终点顺序写反；把中点当差坐标；模开方取负值；用分量之比时默认分母非零。")}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。向量采用箭头记号，模与参数区分；解析展开基底、坐标、数量积与边界检验。先独立完成解答，再分步自评，登录后保存练习记录与未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三平面向量·坐标表示")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/plane-vectors/basis-collinearity">← 上一节</Link><Link href="/grade3/plane-vectors/dot-product">下一节 →</Link></div>
 </article></main>;
}

type Pair=[number,number];
function Explore() {
 const round=(value:number)=>Number(value.toFixed(3));
 const project=(point:Pair):Pair=>[round(origin[0]+scale*point[0]),round(origin[1]-scale*point[1])];
 const [bx,setBx]=useState(3),[by,setBy]=useState(2);
 const a: Pair=[-1,1],b: Pair=[bx,by],dx=bx+1,dy=by-1;
 const scale=60,origin: Pair=[200,240];
 const controls=<div className="space-y-4"><label className="block">B 的横坐标 x={bx}<input aria-label="B 的横坐标" type="range" min="-2" max="4" step="1" value={bx} onChange={e=>setBx(Number(e.target.value))} className="mt-3 block w-full"/></label><label className="block">B 的纵坐标 y={by}<input aria-label="B 的纵坐标" type="range" min="-2" max="3" step="1" value={by} onChange={e=>setBy(Number(e.target.value))} className="mt-3 block w-full"/></label></div>;
 const objects=<><Arrow from={a} to={b} label="AB" color="#2563eb"/>{dx===0&&dy===0?<Point at={a} label="A=B"/>:<><Point at={a} label="A"/><Point at={b} label="B"/></>}</>;
 const status=`A(−1,1)，B(${bx},${by})，AB=(${dx},${dy})，|AB|≈${Math.hypot(dx,dy).toFixed(3)}。终点减起点；两点重合时得到零向量，夹角无定义。`;
 function Arrow({from,to,label,color}:{from:Pair;to:Pair;label:string;color:string}) {
  const start=project(from),end=project(to),nonzero=Math.hypot(to[0]-from[0],to[1]-from[1])>1e-9;
  return <g><line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-coordinates)':undefined}/>{nonzero&&<text x={round((start[0]+end[0])/2+8)} y={round((start[1]+end[1])/2-9)} fontSize="14" fill={color}>{vectorSvgLabel(label)}</text>}</g>;
 }
 function Point({at,label}:{at:Pair;label:string}) { const [x,y]=project(at);return <g><circle cx={x} cy={y} r="4" fill="#334155"/><text x={x+7} y={y+18} fontSize="13" fill="#334155">{label}</text></g>;}
 return <div className="mt-5">{controls}<svg role="img" aria-label="平面向量的坐标表示交互图形" className="mx-auto mt-5 h-auto w-full max-w-3xl" viewBox="0 0 600 400"><title>平面向量的坐标表示：箭头表示向量，点名不加箭头</title><defs><marker id="arrow-coordinates" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs><line x1="20" x2="580" y1={origin[1]} y2={origin[1]} stroke="#e2e8f0"/><line x1={origin[0]} x2={origin[0]} y1="20" y2="380" stroke="#e2e8f0"/>{objects}<text x={origin[0]-16} y={origin[1]+18} fontSize="12" fill="#64748b">O</text></svg><p role="status" className="mt-4 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图中按同一比例显示横纵坐标；零向量不画有向箭头。读图后仍须用本节公式完成推导。</p></div>;
}
