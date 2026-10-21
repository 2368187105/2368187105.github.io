"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/solid-geometry" className="text-sm text-blue-600">← 立体几何与空间向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第六模块 · 6.2</p><h1 className="mt-3 text-3xl font-bold text-slate-900">空间平行与垂直的证明</h1><p className="mt-5 leading-8">按位置前提、平行方向与相交垂线组织证明，写清“线线→线面→面面”的每一步，避免把图上看起来垂直当作证据。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 平行判定要补位置前提</h3><p className="mt-3 leading-8">{vectorText("证明直线平行于平面，先在平面内找一条与它平行的直线，再说明原直线不在该平面内。证明两平面平行，通常需要一个平面内两条相交直线分别平行于另一个平面。一个方向不够决定平面。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 线面垂直要找两个独立方向</h3><p className="mt-3 leading-8">{vectorText("平面内两条相交直线提供两个不共线方向。若所用直线与待证垂线不直接相交，可过交点作平行线，把方向垂直转成共点的垂直。两条平行直线只能提供一个方向，不能替代判定中的两条相交直线。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 面面垂直从一条垂线进入</h3><p className="mt-3 leading-8">{vectorText("若一个平面内含有一条垂直于另一平面的直线，则两个平面垂直。反过来，两个平面垂直并不意味着其中每条直线都垂直于另一平面；还要在一个面内找垂直于交线的直线。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\ell\\perp\\alpha:\\quad \\text{找 }m,k\\subset\\alpha,\\ m\\cap k=O,\\ \\ell\\perp m,\\ \\ell\\perp k"}/></div><Link href="/grade1/solid-geometry/line-plane-relations" className="mt-5 inline-block text-sm text-blue-600">回看基础课程 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">中点线段的平行结论</summary><p className="mt-4 leading-8">{vectorText("三棱锥 S-ABC 中，E、F 分别为 SA、SB 的中点。证明 EF∥平面 ABC。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("在三角形 SAB 中，E、F 是两边中点，由中位线定理 EF∥AB。")}</li><li>{vectorText("S 不在底面，A 在底面，E 是 SA 的内部点。若 E 也在底面，则直线 SA 由两个底面内点确定而落在底面内，与 S 在底面外矛盾。")}</li><li>{vectorText("所以 EF 不在平面 ABC 内；又 AB 在平面 ABC 内，由线面平行判定得到 EF∥平面 ABC。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">由一条垂线证明面面垂直</summary><p className="mt-4 leading-8">{vectorText("四棱锥 S-ABCD 的底面为正方形，SA⊥底面。证明平面 SAB⊥平面 SBC。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("正方形中 BC⊥AB，SA⊥底面给出 BC 的方向与 SA 方向垂直。")}</li><li>{vectorText("在平面 SAB 内过 B 作直线 m∥SA，则 BC⊥m；m 与 AB 在 B 相交，且均在平面 SAB 内。")}</li><li>{vectorText("由线面垂直判定，BC⊥平面 SAB。又 BC 在平面 SBC 内，由面面垂直判定得平面 SBC⊥平面 SAB。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">只说平行于平面内一条直线，漏位置前提；用两条平行线判线面垂直；把面面垂直误推成任意两条线垂直；证明时只引用示意图。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整解析写清位置前提、建系理由、法向量、角的范围与参数回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三立体几何与空间向量·平行与垂直")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry/solids-measurement">← 上一节</Link><Link href="/grade3/solid-geometry/coordinates-normals">下一节 →</Link></div>
 </article></main>;
}

type P3=[number,number,number];
function Explore() {
 const [t,setT]=useState(0.5),[yaw,setYaw]=useState(35);
 const a:P3=[0,0,0],b:P3=[3,0,0],c:P3=[3,3,0],d:P3=[0,3,0],s:P3=[0,0,3],e:P3=[3*t,3*t,3*(1-t)],f:P3=[0,3*t,3*(1-t)];
 const origin:[number,number]=[310,315],scale=65;

 const r=(value:number)=>Number(value.toFixed(3)),angle=yaw*Math.PI/180;
 const project=(p:P3):[number,number]=>[r(origin[0]+scale*(p[0]*Math.cos(angle)-p[1]*Math.sin(angle))),r(origin[1]+scale*(.35*(p[0]*Math.sin(angle)+p[1]*Math.cos(angle))-p[2]))];
 const points=(ps:P3[])=>ps.map(p=>project(p).join(',')).join(' ');
 const objects=<><polygon points={points([a,b,c,d])} fill="#dbeafe" fillOpacity="0.6" stroke="#94a3b8"/>{[a,b,c,d].map((p,i)=><Segment project={project} key={i} from={s} to={p} dashed={i===3}/>)}<Segment project={project} from={e} to={f} color="#d97706"/><Point project={project} at={a} label="A"/><Point project={project} at={b} label="B"/><Point project={project} at={c} label="C"/><Point project={project} at={d} label="D"/><Point project={project} at={s} label="S"/>{t>0&&t<1&&<><Point project={project} at={e} label="E"/><Point project={project} at={f} label="F"/></>}</>;
 const status=t===0?'t=0 时 E=F=S，两个点重合，不能定义直线 EF。':t===1?'t=1 时 E=C、F=D，EF=CD 在底面内，不能称 EF∥底面。':`t=${t}：E、F 到底面高度均为 ${r(3*(1-t))}>0，EF∥CD，所以 EF∥底面；t=1/2 时它是侧面中位线。`;
 const controls=<label>同比分点参数 t={t}<input aria-label="分点参数" type="range" min="0" max="1" step="0.1" value={t} onChange={e=>setT(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="grid gap-4 sm:grid-cols-2">{controls}<label>观察方位 {yaw}°<input aria-label="观察方位" type="range" min="20" max="70" step="5" value={yaw} onChange={e=>setYaw(Number(e.target.value))} className="mt-3 w-full"/></label></div><svg role="img" aria-label="同比分点与线面平行交互图形" viewBox="0 0 640 460" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>同比分点与线面平行：斜投影中的屏幕角度不代表空间真角</title><defs><marker id="arrow-parallel-perpendicular" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs>{objects}</svg><p role="status" className="mt-3 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图为斜投影，屏幕中的角度、长度不代表空间真实值；计算按三维坐标完成。坐标显示最多三位小数。彩色面片仅标出平面的一部分，整个平面无限延伸。</p></div>;
}


function Segment({project,from,to,color='#64748b',dashed=false}:{project:(p:P3)=>[number,number];from:P3;to:P3;color?:string;dashed?:boolean}) {const a=project(from),b=project(to);return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2" strokeDasharray={dashed?'5 4':undefined}/>;}
function Point({project,at,label}:{project:(p:P3)=>[number,number];at:P3;label:string}) {const p=project(at);return <g><circle cx={p[0]} cy={p[1]} r="3.5" fill="#334155"/><text x={p[0]+7} y={p[1]+17} fontSize="14" fill="#334155">{label}</text></g>;}
