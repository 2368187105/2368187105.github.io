"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/trigonometry" className="text-sm text-blue-600">← 三角函数与解三角形目录</Link>
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三章 · 3.2</p><h1 className="mt-3 text-3xl font-bold text-slate-900">三角恒等变换与辅助角</h1><p className="mt-5 leading-8">从目标结构选择和差角、二倍角、降幂或辅助角公式，核对分母与取值范围，避免等式变形引入无效点。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 公式按结构选择</h3><p className="mt-3 leading-8">{"和差角适合拆成特殊角或合并两个乘积；二倍角连接 sinxcosx 与 sin2x；cos2x 可写成 cos²x−sin²x、1−2sin²x 或 2cos²x−1。选式时观察题目希望保留哪个函数。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 辅助角要逐项匹配</h3><p className="mt-3 leading-8">{mathText("a sinx+b cosx=Rsin(x+φ)，其中 R=√(a²+b²)>0，cosφ=a/R，sinφ=b/R。φ 的象限由两个系数共同决定，不能只记振幅。受限区间的最值要同步变换角范围。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 约分与平方都要检查条件</h3><p className="mt-3 leading-8">{"除以 sinx、cosx 等因子会排除它们为零的情形；约分必须保留原分母限制。平方可能丢失正负信息，求出候选后应回到原式检查。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta,\\quad\\sin2x=2\\sin x\\cos x"}/></div><Link href="/grade1/trigonometric/identities" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">差角求精确值</summary><p className="mt-4 leading-8">{"求 cos15° 的精确值。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"15°=45°−30°，使用 cos(α−β)=cosαcosβ+sinαsinβ。"}</li><li>{mathText("代入特殊角，得 (√2/2)(√3/2)+(√2/2)(1/2)。")}</li><li>{mathText("通分合并得到 (√6+√2)/4。注意余弦差角公式中间为加号。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">辅助角与区间</summary><p className="mt-4 leading-8">{mathText("求 f(x)=sinx+√3cosx 在 x∈[0,π/2] 上的最值。")}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("匹配系数：f(x)=2sin(x+π/3)，因为 2cos(π/3)=1，2sin(π/3)=√3。")}</li><li>{"令 t=x+π/3，则 t∈[π/3,5π/6]。区间包含 π/2，最大正弦值为 1。"}</li><li>{mathText("两端正弦为 √3/2 与 1/2，最小为 1/2，所以 f 的最大值为 2、最小值为 1。")}</li><li>{"最大值在 x=π/6，最小值在 x=π/2 取得；不能直接套全域范围 [−2,2]。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"差角公式符号混淆；辅助角系数匹配反了；约分时丢掉原定义域；受限区间中直接套用全域最值。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·恒等变换")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry/angles-relations">← 上一节</Link><Link href="/grade3/trigonometry/graphs-properties">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [phase,setPhase]=useState('sixth'),[amplitude,setAmplitude]=useState(2);
 const phi=phase==='sixth'?Math.PI/6:phase==='third'?Math.PI/3:Math.PI/4;
 const a=amplitude*Math.cos(phi),b=amplitude*Math.sin(phi);
 const curves=[(x:number)=>a*Math.sin(x)+b*Math.cos(x),(x:number)=>amplitude*Math.sin(x+phi)];
 const project=(x:number,y:number)=>`${Number((40+(x+Math.PI)/(2*Math.PI)*520).toFixed(3))},${Number((160-y*35).toFixed(3))}`;
 return <div className="mt-5"><div className="flex flex-wrap gap-4"><label>辅助角 φ<select value={phase} onChange={e=>setPhase(e.target.value)} className="ml-2 rounded border p-2"><option value="sixth">π/6</option><option value="third">π/3</option><option value="quarter">π/4</option></select></label><label>振幅 R<select value={amplitude} onChange={e=>setAmplitude(Number(e.target.value))} className="ml-2 rounded border p-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></label></div><svg role="img" aria-label="辅助角变换前后图象比较" className="mt-5 h-auto w-full" viewBox="0 0 600 320"><title>蓝色为展开式，橙色虚线为辅助角形式，两曲线重合</title><line x1="40" x2="560" y1="160" y2="160" stroke="#94a3b8"/><line x1="300" x2="300" y1="30" y2="290" stroke="#94a3b8"/>{curves.map((fn,index)=><polyline key={index} points={Array.from({length:241},(_,i)=>{const x=-Math.PI+2*Math.PI*i/240;return project(x,fn(x));}).join(' ')} fill="none" stroke={index===0?'#2563eb':'#d97706'} strokeWidth={index===0?3:2} strokeDasharray={index===0?undefined:'6 4'}/>)}<text x="40" y="310" fontSize="12">−π</text><text x="550" y="310" fontSize="12">π</text></svg><p role="status" className="mt-3 text-sm leading-8">a≈{a.toFixed(3)}，b≈{b.toFixed(3)}，R={amplitude}。两式 a sinx+b cosx 与 Rsin(x+φ) 图象重合；系数分别是 Rcosφ、Rsinφ，显示的小数为近似值。</p></div>;
}
