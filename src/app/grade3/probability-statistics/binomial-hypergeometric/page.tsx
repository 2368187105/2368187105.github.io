"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八章 · 8.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">二项分布与超几何分布</h1><p className="mt-5 leading-8">对照抽取机制辨别二项与超几何模型，按“恰好、至少、至多”组织事件，再求数字特征，比较放回与不放回的影响。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 二项模型的四个前提</h3><p className="mt-3 leading-8">{"固定 n 次试验、彼此独立、每次成功或失败、成功率恒为 p，成功次数 X 才服从 B(n,p)。概率包含成功位置的组合数。p=0 或 1 时分布退化为常数，仍有期望 np 和方差零。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 超几何是不放回抽样</h3><p className="mt-3 leading-8">{"总体 N 件有 M 件目标，不放回等可能抽 n 件，X 为目标数。可取整数范围为 max(0,n−N+M)≤k≤min(n,M)。分母 C(N,n)，分子 C(M,k)C(N−M,n−k)。E(X)=nM/N；一般不能把各次当作独立。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 先翻译事件再计算</h3><p className="mt-3 leading-8">{"恰 k 次只算一个取值；至少 k 次累加所有允许值，至少一次常用一减零次。超几何的方差在 N>1 时为 np(1−p)(N−n)/(N−1)，p=M/N；有限总体修正体现不放回的波动变化。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"P_{B(n,p)}(X=k)=C_n^kp^k(1-p)^{n-k},\\quad P_{H(N,M,n)}(X=k)=\\frac{C_M^kC_{N-M}^{n-k}}{C_N^n}"}/></div><Link href="/grade2/probability/discrete-distributions" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">独立两次以上事件</summary><p className="mt-4 leading-8">{"独立操作 4 次，每次成功概率 1/2，求至少成功 3 次的概率和成功次数期望。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"四项前提成立，X～B(4,1/2)。"}</li><li>{"P(X≥3)=C(4,3)/16+C(4,4)/16=(4+1)/16=5/16。"}</li><li>{"E(X)=4×1/2=2。期望 2 与本问至少 3 次的事件概率是不同量。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">超几何取值范围</summary><p className="mt-4 leading-8">{"6 件中有 2 件目标，不放回抽 5 件，列目标数分布并求期望。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"至少抽中 5−4=1 件目标，最多 2 件，因此 X 只能取 1、2，不能取 0。"}</li><li>{"总选法 C(6,5)=6。P(X=1)=C(2,1)C(4,4)/6=1/3。"}</li><li>{"P(X=2)=C(2,2)C(4,3)/6=2/3，和为 1。"}</li><li>{"E(X)=1/3+4/3=5/3，也等于 5×2/6。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">概率相同就擅自认定独立；不放回套二项；至少漏加最后一种；超几何取值越界；期望相同就认为方差也相同。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·二项与超几何分布")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/discrete-variables">← 上一节</Link><Link href="/grade3/probability-statistics/normal-distribution">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [model,setModel]=useState('without'),[draws,setDraws]=useState(2);
 const comb=(n:number,k:number)=>{if(k<0||k>n)return 0;let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v;};
 const xs=Array.from({length:draws+1},(_,k)=>k),ps=xs.map(k=>model==='with'?comb(draws,k)*.6**k*.4**(draws-k):comb(3,k)*comb(2,draws-k)/comb(5,draws));
 const mean=xs.reduce((s,x,i)=>s+x*ps[i],0),variance=xs.reduce((s,x,i)=>s+(x-mean)**2*ps[i],0);
 const controls=<><label>抽取方式<select aria-label="抽取方式" value={model} onChange={e=>setModel(e.target.value)} className="ml-2 rounded border p-2"><option value="without">不放回：超几何</option><option value="with">放回混匀：二项</option></select></label><label>抽取次数<input aria-label="抽取次数" type="range" min="1" max="4" step="1" value={draws} onChange={e=>setDraws(Number(e.target.value))}/></label></>;
 const shapes=<><line x1="60" x2="590" y1="280" y2="280" stroke="#94a3b8"/>{xs.map((k,i)=>{const x=r(100+i*440/draws),h=r(ps[i]*210);return <g key={k}><rect x={x-22} y={280-h} width="44" height={h} fill="#2563eb"/><text x={x} y={260-h} textAnchor="middle" fontSize="13">{r(ps[i])}</text><text x={x} y="310" textAnchor="middle" fontSize="14">X={k}</text></g>;})}</>;
 const status=`总体 5 球，3 红 2 蓝，抽 ${draws} 次，X 为红球数。${model==='with'?'放回并混匀，X～B(n,0.6)。':'不放回，按超几何概率，越界取值概率为 0。'}E(X)=${r(mean)}，D(X)=${r(variance)}，概率和≈${r(ps.reduce((s,v)=>s+v,0))}。`;
 const note='柱高为概率，计算使用完整精度，显示保留三位小数。相同抽取数下两模型的期望相同；n=1 时分布也相同，多次抽取时方差通常不同。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="二项分布与超几何分布交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>二项分布与超几何分布</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
