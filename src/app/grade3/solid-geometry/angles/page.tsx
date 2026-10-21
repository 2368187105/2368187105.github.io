"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
import { vectorText, vectorSvgLabel } from "@/components/VectorText";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/solid-geometry" className="text-sm text-blue-600">← 立体几何与空间向量复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第六模块 · 6.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">异面直线角、线面角与二面角</h1><p className="mt-5 leading-8">分别选择直线角的余弦、线面角的正弦和指定二面角的平面角，先确定角的范围，再决定是否取绝对值。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 直线角取不超过直角的范围</h3><p className="mt-3 leading-8">{vectorText("两条相交或异面直线所成角在 (0°,90°] 内；平行直线可按方向角 0°处理。方向向量可以反向，因此计算直线方向夹角的余弦时取数量积绝对值。向量夹角为 120°时，直线角应为 60°。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 线面角是与投影方向的夹角</h3><p className="mt-3 leading-8">{vectorText("线面角规定在 [0°,90°] 内。直线方向与平面法向量的夹角和它互余，所以用绝对数量积比得到的是线面角的正弦。方向平行于平面时角为 0°；方向垂直于平面时角为 90°，投影线段退化但线面角仍有定义。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 指定二面角要看两条射线朝向</h3><p className="mt-3 leading-8">{vectorText("两平面所成锐角或直角，可由法向量数量积绝对值求余弦。指定形如 C-AB-P 的二面角则需在垂直棱 AB 的截面内，分别取指向 C、P 所在半平面的两条射线，其平面角可为钝角，不能一律取绝对值。")}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\begin{aligned}\\cos\\varphi_{\\text{直线}}&=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|},\\\\\\sin\\theta_{\\text{线面}}&=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}.\\end{aligned}"}/></div><Link href="/grade2/spatial-vectors/applications" className="mt-5 inline-block text-sm text-blue-600">回看基础课程 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">线面角不是法线夹角</summary><p className="mt-4 leading-8">{vectorText("直线方向 u=(1,2,2)，平面法向量 n=(0,0,1)，求线面角正弦。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("|u|=√(1+4+4)=3，|n|=1，u·n=2。")}</li><li>{vectorText("线面角 θ 的正弦为 |2|/(3×1)=2/3。")}</li><li>{vectorText("若把 2/3 当作线面角余弦，就误算成了与法线方向的角。θ 在 [0°,90°] 内，正弦能唯一确定所求角。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">两平面锐角与指定钝二面角</summary><p className="mt-4 leading-8">{vectorText("A(0,0,0)、B(2,0,0)、C(0,1,0)、P(0,−1,1)。比较两平面 ABC、ABP 的锐角与二面角 C-AB-P。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{vectorText("平面 ABC 法向量可取 n₁=(0,0,1)；由 AB=(2,0,0)、AP=(0,−1,1)，平面 ABP 法向量可取 n₂=(0,1,1)。")}</li><li>{vectorText("法向量数量积绝对值比为 1/√2，两平面所成锐角是 45°。")}</li><li>{vectorText("AC=(0,1,0)、AP=(0,−1,1) 都垂直于棱 AB，并分别指向 C、P 所在半平面，所以射线 AC、AP 的夹角就是指定二面角的平面角。")}</li><li>{vectorText("AC·AP=−1，模分别为 1、√2，得到 cosθ=−1/√2，因此 θ=135°。这里保留了半平面朝向，不能改取 45°。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把线面角正弦写成余弦；向量方向反向后直线角也跟着改变；指定二面角一律取锐角；忽略方向向量非零和角的规定范围。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整解析写清位置前提、建系理由、法向量、角的范围与参数回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三立体几何与空间向量·空间角")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/solid-geometry/coordinates-normals">← 上一节</Link><Link href="/grade3/solid-geometry/distances-volume">下一节 →</Link></div>
 </article></main>;
}

type P3=[number,number,number];
function Explore() {
 const [mode,setMode]=useState('line-plane'),[degrees,setDegrees]=useState(45),[yaw,setYaw]=useState(35);
 const theta=degrees*Math.PI/180,a:P3=[0,0,0],b:P3=[2,0,0],c:P3=[0,2.5,0];
 const p:P3=[0,(mode==='dihedral'?1.5:2)*Math.cos(theta),(mode==='dihedral'?1.5:2)*Math.sin(theta)],h:P3=[0,p[1],0];
 const origin:[number,number]=[310,290],scale=70;

 const r=(value:number)=>Number(value.toFixed(3)),angle=yaw*Math.PI/180;
 const project=(p:P3):[number,number]=>[r(origin[0]+scale*(p[0]*Math.cos(angle)-p[1]*Math.sin(angle))),r(origin[1]+scale*(.35*(p[0]*Math.sin(angle)+p[1]*Math.cos(angle))-p[2]))];
 const points=(ps:P3[])=>ps.map(p=>project(p).join(',')).join(' ');
 const objects=<><polygon points={points([a,b,[2,2.5,0],c])} fill="#dbeafe" fillOpacity="0.7" stroke="#94a3b8"/>{mode==='dihedral'?<><polygon points={points([a,b,[2,p[1],p[2]],p])} fill="#fed7aa" fillOpacity="0.45" stroke="#d97706"/><Arrow project={project} from={a} to={c} label="u" color="#2563eb"/><Arrow project={project} from={a} to={p} label="v" color="#d97706"/><Point project={project} at={p} label="P"/></>:<><Arrow project={project} from={a} to={p} label="u" color="#2563eb"/><Segment project={project} from={p} to={h} color="#d97706" dashed/>{degrees!==0&&degrees!==90&&<Point project={project} at={h} label="H"/>}<Point project={project} at={p} label={degrees===0?"P=H":"P"}/></>}<Segment project={project} from={a} to={b}/><Point project={project} at={a} label={mode==='line-plane'&&degrees===90?"A=H":"A"}/><Point project={project} at={b} label="B"/><Point project={project} at={c} label="C"/></>;
 const status=mode==='dihedral'?`指定二面角 C-AB-P 为 ${degrees}°；两平面所成锐角或直角为 ${Math.min(degrees,180-degrees)}°。射线 u、v 都垂直棱 AB，cosθ≈${Math.cos(theta).toFixed(3)}；钝二面角要保留负号。`:`直线 AP 与 z=0 的线面角为 ${degrees}°，sinθ≈${Math.sin(theta).toFixed(3)}，方向 u=(0,${r(p[1])},${r(p[2])})。`+(mode==='line-plane'&&degrees===90?'投影点 H 与 A 重合，线面角仍为 90°。':'');
 const controls=<><label>角度类型<select aria-label="角度类型" value={mode} onChange={e=>{setMode(e.target.value);setDegrees(e.target.value==='dihedral'?135:45);}} className="ml-2 rounded border p-2"><option value="line-plane">线面角</option><option value="dihedral">指定二面角</option></select></label><label>空间角 θ={degrees}°<input aria-label="空间角" type="range" min={mode==='dihedral'?15:0} max={mode==='dihedral'?165:90} step="15" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 w-full"/></label></>;
 return <div className="mt-5"><div className="grid gap-4 sm:grid-cols-2">{controls}<label>观察方位 {yaw}°<input aria-label="观察方位" type="range" min="20" max="70" step="5" value={yaw} onChange={e=>setYaw(Number(e.target.value))} className="mt-3 w-full"/></label></div><svg role="img" aria-label="线面角与指定二面角交互图形" viewBox="0 0 640 460" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>线面角与指定二面角：斜投影中的屏幕角度不代表空间真角</title><defs><marker id="arrow-angles" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="context-stroke"/></marker></defs>{objects}</svg><p role="status" className="mt-3 text-sm leading-8">{vectorText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">图为斜投影，屏幕中的角度、长度不代表空间真实值；计算按三维坐标完成。坐标显示最多三位小数。彩色面片仅标出平面的一部分，整个平面无限延伸。</p></div>;
}


const roundSvg=(value:number)=>Number(value.toFixed(3));
function Segment({project,from,to,color='#64748b',dashed=false}:{project:(p:P3)=>[number,number];from:P3;to:P3;color?:string;dashed?:boolean}) {const a=project(from),b=project(to);return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2" strokeDasharray={dashed?'5 4':undefined}/>;}
function Point({project,at,label}:{project:(p:P3)=>[number,number];at:P3;label:string}) {const p=project(at);return <g><circle cx={p[0]} cy={p[1]} r="3.5" fill="#334155"/><text x={p[0]+7} y={p[1]+17} fontSize="14" fill="#334155">{label}</text></g>;}
function Arrow({project,from,to,label,color}:{project:(p:P3)=>[number,number];from:P3;to:P3;label:string;color:string}) {const a=project(from),b=project(to),nonzero=Math.hypot(...to.map((v,i)=>v-from[i]))>1e-9;return <g><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth="2.5" markerEnd={nonzero?'url(#arrow-angles)':undefined}/>{nonzero&&<text x={roundSvg((a[0]+b[0])/2+10)} y={roundSvg((a[1]+b[1])/2-12)} fontSize="15" fill={color}>{vectorSvgLabel(label)}</text>}</g>;}
