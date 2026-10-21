"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/solid-geometry" className="text-sm text-blue-600">← 立体几何与空间向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第六章 · 6.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">空间距离与体积的转化</h1><p className="mt-5 leading-8">从法向量的投影求点面距离与垂足，用同一几何体换底求高；始终区分所选底面、垂直高度和斜线长度。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 距离是垂线长度，不是随意连线</h3><p className="mt-3 leading-8">{vectorText("点面距离等于从点到平面的垂足线段长。设 P 为已知点、A 在平面内，n 为非零法向量，则距离为 |AP·n|/|n|。分子取绝对值，结果非负；点在平面上时距离为零。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 求垂足要同时满足方向和位置</h3><p className="mt-3 leading-8">{vectorText("过 P 沿法向量作直线，设 H=P−t n，再将 H 坐标代入平面方程求 t。最后核验 H 在平面内且 PH 平行于 n。垂足可以落在题图有限三角片之外，因为整个平面无限延伸。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 同体积换底连接面积与距离</h3><p className="mt-3 leading-8">{vectorText("四面体体积不随选底方式改变。先选易算的底面求体积，再用新底面积与 V=底面积×对应高/3 求距离。若方向向量已知，点线距离也可由投影分解求得；不要把点到坐标轴的距离误当成点到原点的距离。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\alpha:Ax+By+Cz+D=0,\\quad d(P,\\alpha)=\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}},\\quad (A,B,C)\\ne(0,0,0)"}/></div><Link href="/grade2/spatial-vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看基础课程 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">垂足沿法线方向求交</summary><p className="mt-4 leading-8">{vectorText("P(2,1,3)，平面为 x+y+z=3，求垂足和距离。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("法向量 n=(1,1,1)，设 H=P−t n=(2−t,1−t,3−t)。")}</li><li>{vectorText("代入平面方程，6−3t=3，得 t=1，所以 H=(1,0,2)。")}</li><li>{vectorText("PH=(−1,−1,−1)，模为 √3；H 坐标和为 3，且 PH=−n，位置与垂直方向均满足，所以距离为 √3。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">坐标轴距离与原点距离不同</summary><p className="mt-4 leading-8">{vectorText("P(2,3,4)，求 P 到 z 轴的距离，并与到原点的距离比较。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("z 轴上点为 (0,0,t)，与 P 的距离平方为 2²+3²+(4−t)²。")}</li><li>{vectorText("平方在 t=4 时最小，垂足为 (0,0,4)，最短距离为 √13。")}</li><li>{vectorText("P 到原点的距离为 √(4+9+16)=√29；由于原点通常不是垂足，两种距离不能混用。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">点面距离分子未取绝对值；用斜棱代替垂直高；只求出平面内的点却未证垂直；换底后仍沿用原高度；把点轴距离当成点到原点距离。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整解析写清位置前提、建系理由、法向量、角的范围与参数回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三立体几何与空间向量·距离与体积")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry/angles">← 上一节</Link><Link href="/grade3/solid-geometry/moving-points">下一节 →</Link></div>
 </article></main>;
}

type P3=[number,number,number];
function Explore() {
 const [position,setPosition]=useState(1),[yaw,setYaw]=useState(35);
 const p:P3=[position,1,2],h:P3=[2*position/3,1-position/3,2-position/3];
 const origin:[number,number]=[310,315],scale=65;

 const r=(value:number)=>Number(value.toFixed(3)),angle=yaw*Math.PI/180;
 const project=(p:P3):[number,number]=>[r(origin[0]+scale*(p[0]*Math.cos(angle)-p[1]*Math.sin(angle))),r(origin[1]+scale*(.35*(p[0]*Math.sin(angle)+p[1]*Math.cos(angle))-p[2]))];
 const points=(ps:P3[])=>ps.map(p=>project(p).join(',')).join(' ');
 const objects=<><polygon points={points([[3,0,0],[0,3,0],[0,0,3]])} fill="#dbeafe" fillOpacity="0.7" stroke="#94a3b8"/><Segment project={project} from={p} to={h} color="#d97706" dashed/>{position===0?<Point project={project} at={p} label="P=H"/>:<><Point project={project} at={p} label="P"/><Point project={project} at={h} label="H"/></>}<Point project={project} at={[3,0,0]} label="A"/><Point project={project} at={[0,3,0]} label="B"/><Point project={project} at={[0,0,3]} label="C"/></>;
 const status=`平面 x+y+z=3，P=(${position},1,2)，H≈(${r(h[0])},${r(h[1])},${r(h[2])})。H 的坐标和为 3，PH 是法向量 (1,1,1) 的倍数。距离=|${position}|/√3≈${r(Math.abs(position)/Math.sqrt(3))}。`+(position===0?'当前 P=H，点在平面上，距离为 0。':'');
 const controls=<label>点 P 的横坐标 s={position}<input aria-label="点的横坐标" type="range" min="-1" max="3" step="0.5" value={position} onChange={e=>setPosition(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="grid gap-4 sm:grid-cols-2">{controls}<label>观察方位 {yaw}°<input aria-label="观察方位" type="range" min="20" max="70" step="5" value={yaw} onChange={e=>setYaw(Number(e.target.value))} className="mt-3 w-full"/></label></div><svg role="img" aria-label="点面距离、垂足与零距离交互图形" viewBox="0 0 640 460" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>点面距离、垂足与零距离：斜投影中的屏幕角度不代表空间真角</title><defs><marker id="arrow-distances-volume" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs>{objects}</svg><p role="status" className="mt-3 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图为斜投影，屏幕中的角度、长度不代表空间真实值；计算按三维坐标完成。坐标显示最多三位小数。彩色面片仅标出平面的一部分，整个平面无限延伸。</p></div>;
}


function Segment({project,from,to,color='#64748b',dashed=false}:{project:(p:P3)=>[number,number];from:P3;to:P3;color?:string;dashed?:boolean}) {const a=project(from),b=project(to);return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2" strokeDasharray={dashed?'5 4':undefined}/>;}
function Point({project,at,label}:{project:(p:P3)=>[number,number];at:P3;label:string}) {const p=project(at);return <g><circle cx={p[0]} cy={p[1]} r="3.5" fill="#334155"/><text x={p[0]+7} y={p[1]+17} fontSize="14" fill="#334155">{label}</text></g>;}
