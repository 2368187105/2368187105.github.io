"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/solid-geometry" className="text-sm text-blue-600">← 立体几何与空间向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第六模块 · 6.3</p><h1 className="mt-3 text-3xl font-bold text-slate-900">空间向量、坐标与法向量</h1><p className="mt-5 leading-8">选择正交坐标系，把起终点、基向量与坐标分量对应起来；用两个不共线方向建立法向量方程，保留非零条件。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 建系需要真实的相互垂直关系</h3><p className="mt-3 leading-8">{vectorText("优先以三条两两垂直的棱或辅助线为坐标轴，统一长度单位并明确原点。斜投影图上的三条线不一定在空间中正交，不能仅凭画法建立直角坐标系。方向向量由终点减起点，各坐标分量可正可负。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 空间数量积逐分量计算</h3><p className="mt-3 leading-8">{vectorText("向量 u、v 的数量积是三个对应分量乘积的和，结果为实数。模平方是自身数量积，模非负。若用数量积判夹角或垂直方向，必须先确认两个方向向量非零。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 法向量须同时垂直两个不共线方向</h3><p className="mt-3 leading-8">{vectorText("平面内取 u、v 两个不共线方向，设 n=(x,y,z)，联立 n·u=0、n·v=0，取一组非零解。所有非零倍数均可作法向量，不必单位化；但零向量不允许。平面过 A 时，可由 AX·n=0 得到方程。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\overrightarrow{AB}=(x_B-x_A,y_B-y_A,z_B-z_A),\\qquad \\vec n\\cdot\\vec u=\\vec n\\cdot\\vec v=0,\\ \\vec n\\ne\\vec0"}/></div><Link href="/grade2/spatial-vectors/coordinates" className="mt-5 inline-block text-sm text-blue-600">回看基础课程 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">求法向量的完整方程</summary><p className="mt-4 leading-8">{vectorText("平面内方向 u=(1,0,1)、v=(0,1,1)，求一个法向量，并说明为何不唯一。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("u、v 不成比例，因此不共线。设 n=(x,y,z)，要求 x+z=0、y+z=0。")}</li><li>{vectorText("取 z=1，可得 x=y=−1，故 n=(−1,−1,1) 非零。")}</li><li>{vectorText("回代 n·u=−1+1=0、n·v=−1+1=0。任意非零倍数 λn 仍与两个方向垂直，所以法向量不唯一；λ=0 必须排除。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">从点到方向，再到垂直</summary><p className="mt-4 leading-8">{vectorText("A(1,0,2)、B(3,1,1)，向量 v=(1,−1,1)。判断 AB 与 v 是否垂直。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("AB=(3−1,1−0,1−2)=(2,1,−1)，不是把起点坐标直接当作方向。")}</li><li>{vectorText("AB·v=2×1+1×(−1)+(−1)×1=2−1−1=0。")}</li><li>{vectorText("两个向量均非零，因此它们的方向垂直。点 A、B 本身不加向量箭头；AB 作为有向位移要加箭头。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">坐标轴未经证明就取斜棱；向量用起点减终点；法向量只垂直一个平面方向；取出全零解；把数量积写成向量。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整解析写清位置前提、建系理由、法向量、角的范围与参数回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三立体几何与空间向量·坐标与法向量")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry/parallel-perpendicular">← 上一节</Link><Link href="/grade3/solid-geometry/angles">下一节 →</Link></div>
 </article></main>;
}

type P3=[number,number,number];
function Explore() {
 const [multiple,setMultiple]=useState(1),[yaw,setYaw]=useState(35);
 const o:P3=[0,0,0],u:P3=[1,0,1],v:P3=[0,1,1],normal:P3=[-multiple,-multiple,multiple];
 const origin:[number,number]=[310,260],scale=50;

 const r=(value:number)=>Number(value.toFixed(3)),angle=yaw*Math.PI/180;
 const project=(p:P3):[number,number]=>[r(origin[0]+scale*(p[0]*Math.cos(angle)-p[1]*Math.sin(angle))),r(origin[1]+scale*(.35*(p[0]*Math.sin(angle)+p[1]*Math.cos(angle))-p[2]))];
 const points=(ps:P3[])=>ps.map(p=>project(p).join(',')).join(' ');
 const objects=<><polygon points={points([o,u,[1,1,2],v])} fill="#dbeafe" fillOpacity="0.7" stroke="#94a3b8"/><Arrow project={project} from={o} to={u} label="u" color="#2563eb"/><Arrow project={project} from={o} to={v} label="v" color="#2563eb"/><Arrow project={project} from={o} to={normal} label="n" color="#059669"/><Point project={project} at={o} label="O"/></>;
 const status=`u=(1,0,1)，v=(0,1,1)，n=(${-multiple},${-multiple},${multiple})。n·u=0，n·v=0。`+(multiple===0?'当前 n 是零向量，虽然数量积为零，但不是法向量，也不画方向箭头。':'当前 n 非零，可以作法向量；改变非零倍数不改变对应平面的方向。');
 const controls=<label>法向量倍数 λ={multiple}<input aria-label="法向量倍数" type="range" min="-2" max="2" step="0.5" value={multiple} onChange={e=>setMultiple(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="grid gap-4 sm:grid-cols-2">{controls}<label>观察方位 {yaw}°<input aria-label="观察方位" type="range" min="20" max="70" step="5" value={yaw} onChange={e=>setYaw(Number(e.target.value))} className="mt-3 w-full"/></label></div><svg role="img" aria-label="平面方向与非零法向量交互图形" viewBox="0 0 640 460" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>平面方向与非零法向量：斜投影中的屏幕角度不代表空间真角</title><defs><marker id="arrow-coordinates-normals" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs>{objects}</svg><p role="status" className="mt-3 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图为斜投影，屏幕中的角度、长度不代表空间真实值；计算按三维坐标完成。坐标显示最多三位小数。彩色面片仅标出平面的一部分，整个平面无限延伸。</p></div>;
}


const roundSvg=(value:number)=>Number(value.toFixed(3));
function Point({project,at,label}:{project:(p:P3)=>[number,number];at:P3;label:string}) {const p=project(at);return <g><circle cx={p[0]} cy={p[1]} r="3.5" fill="#334155"/><text x={p[0]+7} y={p[1]+17} fontSize="14" fill="#334155">{label}</text></g>;}
function Arrow({project,from,to,label,color}:{project:(p:P3)=>[number,number];from:P3;to:P3;label:string;color:string}) {const a=project(from),b=project(to),nonzero=Math.hypot(...to.map((v,i)=>v-from[i]))>1e-9;return <g><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-coordinates-normals)':undefined}/>{nonzero&&<text x={roundSvg((a[0]+b[0])/2+10)} y={roundSvg((a[1]+b[1])/2-12)} fontSize="15" fill={color}>{vectorSvgLabel(label)}</text>}</g>;}
