"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七模块 · 7.3</p><h1 className="mt-3 text-3xl font-bold text-slate-900">双曲线的方程与渐近线</h1><p className="mt-5 leading-8">分清实轴与虚轴、平方和关系与渐近线；联立直线时先看方程次数，处理与渐近线平行的特殊方向。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 正号项决定实轴方向</h3><p className="mt-3 leading-8">{"到两焦点距离差的绝对值为 2a，且 0<2a<2c 时，轨迹为双曲线两支。标准式等于 1 时，x²项为正则实轴沿 x 轴，y²项为正则实轴沿 y 轴。a、b 都取正数；虚轴长不表示曲线上有对应的两个截点。焦点关系为 c²=a²+b²，离心率大于 1。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 渐近线来自二次齐次部分</h3><p className="mt-3 leading-8">{"把标准式右侧常数改成零，再因式分解得到两条渐近线。对 x²/a²−y²/b²=1，斜率是 ±b/a；换成纵轴双曲线时要重新从方程推导，不能机械照抄。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 一个交点未必是切线</h3><p className="mt-3 leading-8">{"直线代入后，二次项系数可能在渐近线方向上变为零。此时按一次方程或常数矛盾分类，不再使用二次判别式。与渐近线平行的另一条直线可能只有一个有限交点，却不是切线。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1,\\quad c^2=a^2+b^2,\\quad e>1,\\qquad y=\\pm\\frac ba x"}/></div><Link href="/grade2/conic-sections/hyperbola" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">完整计算三个参数</summary><p className="mt-4 leading-8">{"求 x²/16−y²/9=1 的焦点、离心率和渐近线。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"a=4、b=3，c²=16+9=25，故 c=5。焦点为 (±5,0)。"}</li><li>{"离心率 e=5/4>1，符合双曲线范围。"}</li><li>{"令 x²/16−y²/9=0，得 y²=9x²/16，渐近线为 y=±3x/4。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">二次项消失后重新分类</summary><p className="mt-4 leading-8">{"联立 x²/4−y²/9=1 与 y=(3/2)x+3，求交点并判断是否为切线。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"代入展开后，x²/4 项相互抵消，得到 −x−1=1，所以 x=−2。"}</li><li>{"代回直线得 y=0，唯一交点为 (−2,0)。"}</li><li>{"该点是双曲线左顶点，切线为竖直直线 x=−2，而给定直线斜率为 3/2，因此不是切线。"}</li><li>{"这里的单交点来自方程降为一次，不能当作非退化二次方程的重根。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把 a²、b²作差求 c²；正负项决定实轴时看错；渐近线斜率颠倒；忽略二次项系数为零；把所有单交点都当成相切。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·双曲线")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/ellipse">← 上一节</Link><Link href="/grade3/analytic-geometry/parabola">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [branch,setBranch]=useState(1),[parameter,setParameter]=useState(0.4);
 const origin:[number,number]=[320,250],scale=45;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const poly=(points:number[][])=>points.map(p=>`${px(p[0])},${py(p[1])}`).join(' ');
 const p=[branch*2*Math.cosh(parameter),3*Math.sinh(parameter)],c=Math.sqrt(13),d1=Math.hypot(p[0]+c,p[1]),d2=Math.hypot(p[0]-c,p[1]);
 const markers=[{p:[-c,0],label:'F₁'},{p:[c,0],label:'F₂'},{p,label:'P'}];
 const shapes=<>{[-1,1].map(sign=><polyline key={sign} points={poly(Array.from({length:121},(_,i)=>{const bound=Math.asinh(5/3),t=-bound+2*bound*i/120;return [sign*2*Math.cosh(t),3*Math.sinh(t)];}))} fill="none" stroke="#2563eb" strokeWidth="2"/>)}{[-1,1].map(sign=><line key={sign} x1={px(-3.4)} y1={py(sign*-5.1)} x2={px(3.4)} y2={py(sign*5.1)} stroke="#94a3b8" strokeDasharray="5 4"/>)}<line x1={px(-c)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#d97706"/><line x1={px(c)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#059669"/></>;
 const status=`P≈(${r(p[0])},${r(p[1])})，PF₁≈${r(d1)}，PF₂≈${r(d2)}，距离差绝对值≈${r(Math.abs(d1-d2))}=2a。左右两支都满足；渐近线为 y=±(3/2)x。`;
 const controls=<><label>所在分支<select aria-label="所在分支" value={branch} onChange={e=>setBranch(Number(e.target.value))} className="ml-2 rounded border p-2"><option value="1">右支</option><option value="-1">左支</option></select></label><label>位置参数 t={parameter}<input aria-label="位置参数" type="range" min="-1.2" max="1.2" step="0.2" value={parameter} onChange={e=>setParameter(Number(e.target.value))} className="mt-3 w-full"/></label></>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="双曲线的方程与渐近线交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>双曲线的方程与渐近线：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
