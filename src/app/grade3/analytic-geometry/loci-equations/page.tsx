"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七模块 · 7.6</p><h1 className="mt-3 text-3xl font-bold text-slate-900">轨迹方程与参数范围</h1><p className="mt-5 leading-8">将动点条件转成坐标关系，消参数后逐一保留范围与排除点，并用反向构造证明候选方程没有多余点或遗漏。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先写原条件，再消去参数</h3><p className="mt-3 leading-8">{"常见轨迹来自点点等距、点线等距、距离和或差、固定比例和中点关系。先明确哪个点在动、哪个点待求，分别设坐标，再把关系写成等式。点线距离要取绝对值；平方前后应说明是否等价。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 方程必须连同范围一起保留</h3><p className="mt-3 leading-8">{"代数方程有时只表示候选曲线，原条件的非重合、非零线段、上下半支、线段参数范围等限制不能在消元后消失。椭圆、双曲线和抛物线的定义也各有非退化前提。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 反过来能否构造原动点</h3><p className="mt-3 leading-8">{"证明必要性后，再任取候选轨迹上的允许点，用坐标关系构造原动点，检查它在原曲线上且满足全部附加条件。这样才能说明所得轨迹恰好成立，而不是只含在某条曲线上。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"P(x,y),\\quad M(u,v)=\\left(\\frac{x+2}2,\\frac y2\\right)\\Longrightarrow x=2u-2,\\ y=2v"}/></div><Link href="/grade2/conic-sections/parabola" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">中点轨迹的反向构造</summary><p className="mt-4 leading-8">{"P 在 x²+y²=9 上，M 为 OP 中点。求 M 的轨迹。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设 M(u,v)，则原动点 P=(2u,2v)。代入圆得 4u²+4v²=9，即 u²+v²=9/4。"}</li><li>{"反过来，任取该圆上的点 M，构造 P=(2u,2v)，其坐标平方和为 9，所以 P 在原圆上。"}</li><li>{"该 P 与原点的中点正是 M，因此整条半径 3/2 的圆都能取得，没有额外排除点。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">等距线段的垂直平分线</summary><p className="mt-4 leading-8">{"动点 P 到 A(−2,0)、B(4,0) 距离相等，求轨迹。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设 P(x,y)，两距离都非负，可等价平方：(x+2)²+y²=(x−4)²+y²。"}</li><li>{"展开消去平方项，得 12x=12，所以 x=1，y 任意。"}</li><li>{"反过来，x=1 时两距离平方均为 9+y²，因此距离相等，轨迹为整条直线 x=1。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">只消参数不检查范围；点线距离不取绝对值；平方引入候选却不核验；原动点被排除的位置忘记迁移到新点；未证明轨迹可达。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·轨迹方程")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/chords-midpoints">← 上一节</Link><Link href="/grade3/analytic-geometry/comprehensive">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [degrees,setDegrees]=useState(120);
 const origin:[number,number]=[320,250],scale=85;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const t=degrees*Math.PI/180,p=[2*Math.cos(t),2*Math.sin(t)],m=[1+Math.cos(t),Math.sin(t)],allowed=degrees!==0&&degrees!==360;
 const markers=allowed?[{p:[2,0],label:'A'},{p,label:'P'},{p:m,label:degrees===180?'M=O':'M'}]:[{p:[2,0],label:'A=P=M（排除）'}];
 const shapes=<><circle cx={px(0)} cy={py(0)} r="170" fill="none" stroke="#2563eb" strokeWidth="2"/><circle cx={px(1)} cy={py(0)} r="85" fill="#dcfce7" fillOpacity="0.4" stroke="#059669" strokeWidth="2" strokeDasharray="5 4"/>{allowed&&<line x1={px(2)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#d97706"/>}<circle cx={px(2)} cy={py(0)} r="6" fill="white" stroke="#dc2626" strokeWidth="2"/></>;
 const status=allowed?`P≈(${r(p[0])},${r(p[1])})，中点 M≈(${r(m[0])},${r(m[1])})，满足 (x−1)²+y²=1。原动点 P≠A 的限制，对应轨迹圆排除 (2,0)。`:'当前 P=A，原条件禁止此位置；对应的 M=A 也必须从绿色轨迹圆上排除。方程成立并不自动满足全部原条件。';
 const controls=<label>圆上参数角 θ={degrees}°<input aria-label="圆上参数角" type="range" min="0" max="360" step="30" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="轨迹方程与参数范围交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>轨迹方程与参数范围：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
