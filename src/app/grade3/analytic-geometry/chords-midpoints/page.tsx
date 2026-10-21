"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七章 · 7.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">直线与圆锥曲线、弦与中点</h1><p className="mt-5 leading-8">按方程次数、判别式和韦达定理处理交点，再连接弦长、中点与面积；点差法得到候选后补上交点存在性。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 联立后先数清次数</h3><p className="mt-3 leading-8">{"把直线代入曲线后，先检查二次项系数是否非零，再使用判别式：严格大于零对应两个不同实交点。若降为一次或常数式，必须另行分类。竖直直线可直接代 x=常数，避免强行使用斜率。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 弦长的投影差不是实际长度</h3><p className="mt-3 leading-8">{mathText("非竖直直线 y=kx+b 上两点的距离是横坐标差绝对值乘 √(1+k²)。根和、根积可以避免显式求根。竖直弦直接用纵坐标差；水平弦则用横坐标差。三角形面积还需乘顶点到弦所在直线的垂直距离。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 中点弦点差法要补充分性</h3><p className="mt-3 leading-8">{"将两个端点的曲线方程相减，用平方差与中点关系求斜率。相除前先排除横坐标差为零；得到候选直线后重新联立，证明有两个不同交点且其中点确为题设点。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"L=\\sqrt{1+k^2}\\,|x_1-x_2|,\\quad (x_1-x_2)^2=(x_1+x_2)^2-4x_1x_2,\\qquad M\\left(\\frac{x_1+x_2}2,\\frac{y_1+y_2}2\\right)"}/></div><Link href="/grade2/conic-sections/ellipse" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">水平弦连接面积</summary><p className="mt-4 leading-8">{"椭圆 x²/16+y²/9=1 与 y=3/2 交于 A、B，求弦长和三角形 OAB 面积。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("代入得到 x²/16=1−1/4=3/4，x=±2√3。")}</li><li>{mathText("弦长为 4√3。原点到 y=3/2 的距离为 3/2，所以面积为 (1/2)×4√3×3/2=3√3。")}</li><li>{"高度不为零且两端点不同，因此三角形确为非退化。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">点差给候选，联立作确认</summary><p className="mt-4 leading-8">{"椭圆 x²/9+y²/4=1 的弦中点为 M(1,1)，求弦所在直线。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"端点作差后，由横坐标和为 2、纵坐标和为 2，得到 (2/9)Δx+(1/2)Δy=0。"}</li><li>{"若 Δx=0，则 Δy=0，与两个不同端点矛盾，所以斜率 k=−4/9，候选直线为 4x+9y=13。"}</li><li>{"在候选直线上设 x=1+s、y=1−4s/9，代入椭圆得 13/36+13s²/81=1。"}</li><li>{"由此 s²=207/52>0，两个相反非零参数对应两个不同交点，平均坐标确为 M，候选直线成立。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">未看二次项系数就套判别式；把横坐标差当斜弦长；根和根积符号写反；点差法只给必要条件便结束；相除前漏掉竖直情况。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·弦与中点")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/parabola">← 上一节</Link><Link href="/grade3/analytic-geometry/loci-equations">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [slope,setSlope]=useState(1),[offset,setOffset]=useState('one');
 const origin:[number,number]=[320,250],scale=45;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const poly=(points:number[][])=>points.map(p=>`${px(p[0])},${py(p[1])}`).join(' ');
 const offsets:Record<string,number>={neg3:-3,negRoot:-Math.sqrt(7),zero:0,one:1,root:Math.sqrt(7),three:3},b=offsets[offset];
 const A=9-4*slope*slope,B=-8*slope*b,C=-4*b*b-36,delta=B*B-4*A*C;
 let roots:number[]=[];
 if(Math.abs(A)<1e-9){if(Math.abs(B)>1e-9)roots=[-C/B];}else if(delta>1e-9){roots=[(-B-Math.sqrt(delta))/(2*A),(-B+Math.sqrt(delta))/(2*A)];}else if(Math.abs(delta)<=1e-9)roots=[-B/(2*A)];
 roots.sort((a,b)=>a-b);
 const visible=roots.map(x=>[x,slope*x+b]).filter(p=>Math.abs(p[0])<=6.5&&Math.abs(p[1])<=5);
 const low=slope===0?-6.5:Math.max(-6.5,(-5-b)/slope),high=slope===0?6.5:Math.min(6.5,(5-b)/slope);
 const markers=visible.map((p,i)=>({p,label:roots.length===1?(Math.abs(A)<1e-9?'P':'T'):String.fromCharCode(65+i)}));
 const shapes=<>{[-1,1].map(sign=><polyline key={sign} points={poly(Array.from({length:121},(_,i)=>{const bound=Math.asinh(5/3),t=-bound+2*bound*i/120;return [sign*2*Math.cosh(t),3*Math.sinh(t)];}))} fill="none" stroke="#2563eb" strokeWidth="2"/>)}<line x1={px(low)} y1={py(slope*low+b)} x2={px(high)} y2={py(slope*high+b)} stroke="#d97706" strokeWidth="2"/></>;
 const status=`双曲线 x²/4−y²/9=1，直线 y=${slope}x+b，b≈${r(b)}。消元系数 A=${r(A)}、B≈${r(B)}、C≈${r(C)}。`+(Math.abs(A)<1e-9?(Math.abs(B)<1e-9?'二次项与一次项均为零，常数式矛盾，无交点。':'方程降为一次，有一个有限交点；不能仅据此称为相切。'):`仍为二次方程，Δ≈${r(delta)}，共有 ${roots.length} 个不同实交点。`)+`当前窗口内显示 ${visible.length} 个；窗口外的实交点仍计入总数。`;
 const controls=<><label>斜率 k<select aria-label="斜率" value={slope} onChange={e=>setSlope(Number(e.target.value))} className="ml-2 rounded border p-2">{[0,1,1.5,2].map(k=><option key={k} value={k}>{k===1.5?'3/2':k}</option>)}</select></label><label>截距 b<select aria-label="截距" value={offset} onChange={e=>setOffset(e.target.value)} className="ml-2 rounded border p-2"><option value="neg3">−3</option><option value="negRoot">−根号 7</option><option value="zero">0</option><option value="one">1</option><option value="root">根号 7</option><option value="three">3</option></select></label></>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="直线与圆锥曲线、弦与中点交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>直线与圆锥曲线、弦与中点：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
