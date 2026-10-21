"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八模块 · 8.6</p><h1 className="mt-3 text-3xl font-bold text-slate-900">正态分布与标准化</h1><p className="mt-5 leading-8">分清均值、标准差与方差，以标准化连接正态表；完整处理区间、单侧尾部、线性变换和人数估计，并明确近似结论。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 参数、对称性与单点概率</h3><p className="mt-3 leading-8">{"N(μ,σ²) 的中心是 μ，标准差为 σ>0，第二参数为方差。密度曲线总面积为 1，关于 μ 对称，曲线高度不是单点概率。连续分布中 P(X=c)=0，因此区间端点取等不改变概率。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 标准化后查表</h3><p className="mt-3 leading-8">{"用 Z=(X−μ)/σ 化为标准正态。常用题给近似 P(|Z|≤1)=0.6827、P(|Z|≤2)=0.9545、P(|Z|≤3)=0.9973；不在这些区间时应查题给表值，不能线性插值假装精确。两尾合计需除以二才是单尾。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 线性变换与估计含义</h3><p className="mt-3 leading-8">{"a≠0 时 aX+b 仍正态，均值 aμ+b、方差 a²σ²；a=0 时成为常数，不再是非退化正态。模型概率乘人数是平均水平的估计，实际人数会波动；用四位表值反推参数也应标明近似。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"X\\sim N(\\mu,\\sigma^2),\\quad Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1),\\quad \\sigma>0"}/></div><Link href="/grade2/probability/normal-distribution" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">上下两尾与中间区间</summary><p className="mt-4 leading-8">{"X～N(50,4²)，给定 P(|Z|≤1)≈0.6827、P(|Z|≤2)≈0.9545。求 P(X>58) 与 P(46≤X≤58)。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"58=50+2×4，所以 P(X>58)≈(1−0.9545)/2=0.02275。"}</li><li>{"46=50−4，对应 Z=−1；58 对应 Z=2。"}</li><li>{"Φ(2)≈(1+0.9545)/2=0.97725，Φ(−1)≈(1−0.6827)/2=0.15865。"}</li><li>{"中间区间概率约为 0.97725−0.15865=0.8186。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">反向变换也要保留方差平方</summary><p className="mt-4 leading-8">{"X～N(10,2²)，Y=30−2X，求 Y 的分布，并将事件 Y≥14 转回 X。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"E(Y)=30−2×10=10，D(Y)=(−2)²×4=16。"}</li><li>{"因此 Y～N(10,16)，标准差为 4。"}</li><li>{"30−2X≥14 等价于 −2X≥−16，除以负数翻转不等号，得到 X≤8。"}</li><li>{"对应标准化 Z≤−1，若采用 0.6827 的题给一倍标准差概率，则概率约 (1−0.6827)/2=0.15865。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把方差当标准差；把密度高度当概率；单侧尾部没有除二；标准化除以 σ²；近似概率反推结果写成绝对精确；人数估计当成确定人数。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·正态分布")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/binomial-hypergeometric">← 上一节</Link><Link href="/grade3/probability-statistics/sampling-estimation">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [mu,setMu]=useState(50),[sigma,setSigma]=useState(4),[k,setK]=useState(1);
 const density=(z:number)=>Math.exp(-z*z/2)/(sigma*Math.sqrt(2*Math.PI));
 const pts=Array.from({length:161},(_,i)=>{const z=-4+i*.05;return `${r(320+65*z)},${r(270-900*density(z))}`;}).join(' ');
 const fillPts=[`${r(320-65*k)},270`,...Array.from({length:81},(_,i)=>{const z=-k+2*k*i/80;return `${r(320+65*z)},${r(270-900*density(z))}`;}),`${r(320+65*k)},270`].join(' ');
 const probabilities:Record<number,number>={1:.6827,2:.9545,3:.9973};
 const controls=<><label>均值 μ<select aria-label="均值" value={mu} onChange={e=>setMu(Number(e.target.value))} className="ml-2 rounded border p-2">{[40,50,60].map(v=><option key={v}>{v}</option>)}</select></label><label>标准差 σ<select aria-label="标准差" value={sigma} onChange={e=>setSigma(Number(e.target.value))} className="ml-2 rounded border p-2">{[2,4,6,8,10].map(v=><option key={v}>{v}</option>)}</select></label><label>区间倍数<select aria-label="区间倍数" value={k} onChange={e=>setK(Number(e.target.value))} className="ml-2 rounded border p-2">{[1,2,3].map(v=><option key={v}>{v}</option>)}</select></label></>;
 const shapes=<><line x1="40" x2="600" y1="270" y2="270" stroke="#94a3b8"/><polygon points={fillPts} fill="#bfdbfe"/><polyline points={pts} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{[-4,-2,0,2,4].map(z=><g key={z}><line x1={320+65*z} x2={320+65*z} y1="270" y2="277" stroke="#64748b"/><text x={320+65*z} y="300" textAnchor="middle" fontSize="13">{mu+sigma*z}</text></g>)}<text x="50" y="35" fontSize="13">纵轴：原变量概率密度</text><text x="590" y="330" fontSize="13">x</text></>;
 const status=`X～N(${mu},${sigma**2})，标准差 ${sigma}。阴影区间 [${mu-k*sigma},${mu+k*sigma}] 的概率≈${probabilities[k]}；两侧每个尾部概率≈${r((1-probabilities[k])/2)}。`;
 const note='为便于标准化比较，横轴窗口随参数调整为 μ±4σ，横向像素比例会改变；纵轴密度按固定比例显示。阴影表示区间概率，不能直接把屏幕面积或曲线高度当概率。四位概率采用本节给定表值。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="正态分布与标准化交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>正态分布与标准化</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
