"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七模块 · 7.2</p><h1 className="mt-3 text-3xl font-bold text-slate-900">椭圆的方程与几何性质</h1><p className="mt-5 leading-8">从焦点距离和与标准式建立半轴、半焦距、离心率之间的关系，正确处理焦点方向、距离比和退化边界。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 长轴由较大的分母确定</h3><p className="mt-3 leading-8">{"x²下分母较大时焦点在 x 轴，y²下分母较大时焦点在 y 轴。a 是半长轴，b 是半短轴，c 是半焦距，不能把长轴长或焦距直接代成 a、c。分母相等时是圆，不属于这里 a>b 的非圆椭圆情形。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 定义中的严格条件不能丢</h3><p className="mt-3 leading-8">{"到两定点的距离和为 2a，只有 2a 大于两定点距离 2c 才形成非退化椭圆。等于时退化为两焦点之间的线段；小于时无实点。由方程求焦距时先算 c，再乘 2。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 焦点距离比先配合距离和</h3><p className="mt-3 leading-8">{"若给出两个焦半径之比，先与和为 2a 联立得到各距离。设焦点在 (±c,0)，两距离平方相减会消去 y²并得到 4cx，常比直接解两个根式更简单。解出坐标后，距离非负、上下对称符号和原比例都要回代检查。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1,\\quad a>b>0,\\quad c^2=a^2-b^2,\\quad e=\\frac ca\\in(0,1)"}/></div><Link href="/grade2/conic-sections/ellipse" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">半轴与焦点一起确定标准式</summary><p className="mt-4 leading-8">{mathText("椭圆焦点为 (±3,0)，短轴长为 2√7，求方程和离心率。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("焦点在 x 轴，c=3；短轴长为 2b，所以 b=√7、b²=7。")}</li><li>{"由 a²=b²+c²得 a²=7+9=16，因此方程为 x²/16+y²/7=1。"}</li><li>{"a=4，离心率 e=c/a=3/4。半轴与全轴、半焦距与焦距已分别核对。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">平方差消根式</summary><p className="mt-4 leading-8">{"P 在 x²/16+y²/7=1 上，且横坐标为 2。求到左右焦点的距离。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"焦点为 (−3,0)、(3,0)。设两距离分别 d₁、d₂，椭圆定义给出 d₁+d₂=8。"}</li><li>{"平方差 d₁²−d₂²=(2+3)²+y²−[(2−3)²+y²]=24。"}</li><li>{"所以 d₁−d₂=24/8=3，联立得 d₁=11/2、d₂=5/2，均为正。"}</li><li>{"可由方程求得 y²=21/4，再代回两距离平方核验：25+21/4=121/4，1+21/4=25/4。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">按 x、y 顺序而非分母大小判断长轴；误用双曲线的平方和；距离和等于焦距仍称椭圆；焦半径开方漏符号或漏对称点。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·椭圆")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/lines-circles">← 上一节</Link><Link href="/grade3/analytic-geometry/hyperbola">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [degrees,setDegrees]=useState(60);
 const origin:[number,number]=[320,250],scale=65;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const t=degrees*Math.PI/180,p=[3*Math.cos(t),2*Math.sin(t)],c=Math.sqrt(5),d1=Math.hypot(p[0]+c,p[1]),d2=Math.hypot(p[0]-c,p[1]);
 const markers=[{p:[-c,0],label:'F₁'},{p:[c,0],label:'F₂'},{p,label:'P'}];
 const shapes=<><ellipse cx={px(0)} cy={py(0)} rx="195" ry="130" fill="#eff6ff" fillOpacity="0.4" stroke="#2563eb" strokeWidth="2"/><line x1={px(-c)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#d97706"/><line x1={px(c)} y1={py(0)} x2={px(p[0])} y2={py(p[1])} stroke="#059669"/></>;
 const status=`P≈(${r(p[0])},${r(p[1])})，PF₁≈${r(d1)}，PF₂≈${r(d2)}，两距离和≈${r(d1+d2)}=2a。c=√5，离心率为 √5/3。`;
 const controls=<label>参数角 t={degrees}°<input aria-label="参数角" type="range" min="0" max="360" step="15" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 w-full"/></label>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="椭圆的方程与几何性质交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>椭圆的方程与几何性质：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
