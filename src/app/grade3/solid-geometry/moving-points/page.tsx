"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/solid-geometry" className="text-sm text-blue-600">← 立体几何与空间向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第六章 · 6.6</p><h1 className="mt-3 text-3xl font-bold text-slate-900">立体几何综合与动点问题</h1><p className="mt-5 leading-8">用线段参数表达动点，依次处理方向、法向量、角与距离；每个候选都回代原条件并检查范围、非零和退化情形。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 动点先写参数范围</h3><p className="mt-3 leading-8">{vectorText("线段 BD 上的点写成 P=B+t(D−B)，t∈[0,1]；射线、整条直线与线段的参数范围不同。坐标既要符合直线方程，也要满足题目实际允许的位置。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 存在性从方程到回代完整闭合</h3><p className="mt-3 leading-8">{vectorText("垂直列数量积为零，线面角列正弦公式，点在平面内代入平面方程。方程解出后检查参数范围；平方或约分后还要核对原式正负、分母非零及所求方向非零，才能断言存在或不存在。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 最短问题先平方再检验取点</h3><p className="mt-3 leading-8">{vectorText("模平方常可配方为开口向上的二次式。配方中心若在线段范围内，取该点；若在范围外，应比较允许端点。得到最小平方后再开根求长度。若得到的点还是几何垂足，可用垂直条件交叉核验。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"P=B+t(D-B),\\quad 0\\le t\\le1;\\qquad |\\overrightarrow{SP}|^2=8\\left(t-\\frac12\\right)^2+6"}/></div><Link href="/grade2/spatial-vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看基础课程 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">垂直方程有根，线段上却无解</summary><p className="mt-4 leading-8">{vectorText("单位正方体中 P=(1,t,0)，0≤t≤1，A₁=(0,0,1)、C=(1,1,0)。判断是否存在 P，使 A₁P⊥AC。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("A₁P=(1,t,−1)，AC=(1,1,0)，两向量都非零。")}</li><li>{vectorText("垂直要求 A₁P·AC=1+t=0，候选 t=−1。")}</li><li>{vectorText("候选不在 [0,1]，所以在线段 BC 上不存在这样的点。若范围改为整条直线 BC，则候选可取；结论依赖位置范围。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">最短模回到真实长度</summary><p className="mt-4 leading-8">{vectorText("S(0,0,2)，P=(2−2t,2t,0)，0≤t≤1，求 SP 最小长度。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("SP=(2−2t,2t,−2)，平方为 4(1−t)²+4t²+4。")}</li><li>{vectorText("展开配方为 8(t−1/2)²+6。t=1/2 在允许范围内，因此最小平方为 6。")}</li><li>{vectorText("最短长度为 √6，取点 P=(1,1,0)。不能把平方最小值 6 当成长度。")}</li><li>{vectorText("若线段方向为 BD=(−2,2,0)，该处 SP=(1,1,−2) 与 BD 数量积为零，证实最短点确为垂足。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">解出参数便结束，漏筛线段范围；平方后不回代；忽略零方向与退化面；最小平方忘开根；图中没有交点就武断说全空间无解。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整解析写清位置前提、建系理由、法向量、角的范围与参数回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三立体几何与空间向量·动点综合")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry/distances-volume">← 上一节</Link><Link href="/grade3/solid-geometry">完成本章，返回目录 →</Link></div>
 </article></main>;
}

type P3=[number,number,number];
function Explore() {
 const [t,setT]=useState(0.25),[yaw,setYaw]=useState(35);
 const a:P3=[0,0,0],b:P3=[2,0,0],c:P3=[2,2,0],d:P3=[0,2,0],s:P3=[0,0,2],p:P3=[2-2*t,2*t,0];
 const origin:[number,number]=[310,315],scale=85;

 const r=(value:number)=>Number(value.toFixed(3)),angle=yaw*Math.PI/180;
 const project=(p:P3):[number,number]=>[r(origin[0]+scale*(p[0]*Math.cos(angle)-p[1]*Math.sin(angle))),r(origin[1]+scale*(.35*(p[0]*Math.sin(angle)+p[1]*Math.cos(angle))-p[2]))];
 const points=(ps:P3[])=>ps.map(p=>project(p).join(',')).join(' ');
 const objects=<><polygon points={points([a,b,c,d])} fill="#dbeafe" fillOpacity="0.6" stroke="#94a3b8"/>{[a,b,c,d].map((v,i)=><Segment project={project} key={i} from={s} to={v} dashed={i===3}/>)}<Segment project={project} from={b} to={d} color="#d97706" dashed/><Arrow project={project} from={s} to={p} label="SP" color="#2563eb"/><Point project={project} at={a} label="A"/><Point project={project} at={b} label="B"/><Point project={project} at={c} label="C"/><Point project={project} at={d} label="D"/><Point project={project} at={s} label="S"/>{t>0&&t<1&&<Point project={project} at={p} label="P"/>}</>;
 const status=`t=${t}，P=(${r(p[0])},${r(p[1])},0)，SP·BD=${r(8*t-4)}，|SP|²=${r(8*(t-.5)**2+6)}，|SP|≈${r(Math.sqrt(8*(t-.5)**2+6))}。`+(t===.5?'当前 P 为 BD 中点，SP⊥BD，恰取最短长度 √6。':'数量积尚不为零；最短位置在允许的 t=1/2。');
 const controls=<label>线段参数 t={t}<input aria-label="线段参数" type="range" min="0" max="1" step="0.05" value={t} onChange={e=>setT(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="grid gap-4 sm:grid-cols-2">{controls}<label>观察方位 {yaw}°<input aria-label="观察方位" type="range" min="20" max="70" step="5" value={yaw} onChange={e=>setYaw(Number(e.target.value))} className="mt-3 w-full"/></label></div><svg role="img" aria-label="线段动点与最短位置交互图形" viewBox="0 0 640 460" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>线段动点与最短位置：斜投影中的屏幕角度不代表空间真角</title><defs><marker id="arrow-moving-points" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs>{objects}</svg><p role="status" className="mt-3 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图为斜投影，屏幕中的角度、长度不代表空间真实值；计算按三维坐标完成。坐标显示最多三位小数。彩色面片仅标出平面的一部分，整个平面无限延伸。</p></div>;
}


const roundSvg=(value:number)=>Number(value.toFixed(3));
function Segment({project,from,to,color='#64748b',dashed=false}:{project:(p:P3)=>[number,number];from:P3;to:P3;color?:string;dashed?:boolean}) {const a=project(from),b=project(to);return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2" strokeDasharray={dashed?'5 4':undefined}/>;}
function Point({project,at,label}:{project:(p:P3)=>[number,number];at:P3;label:string}) {const p=project(at);return <g><circle cx={p[0]} cy={p[1]} r="3.5" fill="#334155"/><text x={p[0]+7} y={p[1]+17} fontSize="14" fill="#334155">{label}</text></g>;}
function Arrow({project,from,to,label,color}:{project:(p:P3)=>[number,number];from:P3;to:P3;label:string;color:string}) {const a=project(from),b=project(to),nonzero=Math.hypot(...to.map((v,i)=>v-from[i]))>1e-9;return <g><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-moving-points)':undefined}/>{nonzero&&<text x={roundSvg((a[0]+b[0])/2+10)} y={roundSvg((a[1]+b[1])/2-12)} fontSize="15" fill={color}>{vectorSvgLabel(label)}</text>}</g>;}
