"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八章 · 8.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">离散型随机变量与数字特征</h1><p className="mt-5 leading-8">从事件到数值取值建立分布列，检查概率非负与和为一；分别计算期望、方差和线性变换，明确平均水平与波动的不同含义。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先列取值再分配概率</h3><p className="mt-3 leading-8">{"离散型随机变量将每个试验结果对应到实数。先明确所有可能取值，逐一写出事件与概率，检查概率非负且总和为 1。同一个数值可能由多个互斥结果产生，必须合并。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 期望和方差的计算</h3><p className="mt-3 leading-8">{"期望是按概率加权的平均，不要求它本身是某次可取值。方差是关于期望的平方偏差平均，可用 E(X²)−[E(X)]² 简化；E(X²) 与 [E(X)]² 不同。方差非负是重要检查。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 线性变换与解释</h3><p className="mt-3 leading-8">{"Y=aX+b 的期望是 aE(X)+b，方差是 a²D(X)。常数平移改变中心但不改变离散程度。随机变量相加时期望总可相加；若两个变量独立且方差存在，方差也可相加，不能在未给独立等条件时直接相加方差。比较方案时同时看中心和波动；同一期望不代表分布、风险或每次结果相同。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"E(X)=\\sum_i x_i p_i,\\quad D(X)=\\sum_i(x_i-E(X))^2p_i=E(X^2)-[E(X)]^2"}/></div><Link href="/grade2/probability/discrete-distributions" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">分布列参数和数字特征</summary><p className="mt-4 leading-8">{"X 取 0、1、3，对应概率 a、1/2、1/4。求 a、E(X)、D(X)。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"由 a+1/2+1/4=1 得 a=1/4，三个概率均非负。"}</li><li>{"E(X)=0/4+1/2+3/4=5/4。"}</li><li>{"E(X²)=0+1/2+9/4=11/4。"}</li><li>{"D(X)=11/4−25/16=19/16>0。分布中没有取值 5/4，仍可有该期望。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">对同一变量做线性变换</summary><p className="mt-4 leading-8">{"已知 E(X)=2、D(X)=3，Y=−2X+5，求 E(Y)、D(Y)。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"E(Y)=−2E(X)+5=−4+5=1。"}</li><li>{"D(Y)=(−2)²D(X)=4×3=12。负号改变方向，平方后不产生负方差。"}</li><li>{"加 5 只平移分布，不能在方差中再加 5 或 25。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">取值未列全；忽视同值结果合并；把概率直接平均；用期望平方代替平方期望；方差倍数忘记平方；期望当成每次结果。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·离散型随机变量")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/conditional-probability">← 上一节</Link><Link href="/grade3/probability-statistics/binomial-hypergeometric">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [profile,setProfile]=useState('balanced'),[factor,setFactor]=useState(1);
 const probs:Record<string,number[]>={balanced:[.25,.5,.25],skewed:[.1,.2,.7],constant:[0,1,0]},ps=probs[profile],xs=[0,1,2].map(x=>factor*x+1);
 const mean=xs.reduce((s,x,i)=>s+x*ps[i],0),variance=xs.reduce((s,x,i)=>s+(x-mean)**2*ps[i],0);
 const controls=<><label>原分布<select aria-label="原分布" value={profile} onChange={e=>setProfile(e.target.value)} className="ml-2 rounded border p-2"><option value="balanced">对称：1/4、1/2、1/4</option><option value="skewed">偏向 2：0.1、0.2、0.7</option><option value="constant">恒取 1</option></select></label><label>变换 Y=aX+1，a<select aria-label="变换系数" value={factor} onChange={e=>setFactor(Number(e.target.value))} className="ml-2 rounded border p-2">{[-1,1,2].map(v=><option key={v}>{v}</option>)}</select></label></>;
 const shapes=<><line x1="70" x2="570" y1="270" y2="270" stroke="#94a3b8"/>{ps.map((prob,i)=><g key={i}><rect x={120+160*i} y={r(270-200*prob)} width="60" height={r(200*prob)} fill="#2563eb"/><text x={150+160*i} y={r(255-200*prob)} textAnchor="middle" fontSize="14">p={prob}</text><text x={150+160*i} y="300" textAnchor="middle" fontSize="14">Y={xs[i]}</text></g>)}</>;
 const status=`变换 Y=${factor}X+1，E(Y)=${r(mean)}，D(Y)=${r(variance)}。各概率之和为 1。`+(profile==='constant'?'原变量恒取 1，变换后也为常数，方差为 0。':'平移不改变方差，倍数对方差的影响要平方。');
 const note='三个取值按原 X 的位置排列，a 为负时 Y 标签顺序可能递减；柱高表示概率，不表示取值大小。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="离散型随机变量与数字特征交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>离散型随机变量与数字特征</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
