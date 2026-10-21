"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader />
  <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
   <Link href="/grade3/functions-derivatives" className="text-sm text-blue-600">← 函数与导数复习目录</Link>
   <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第二章 · 2.7</p>
   <h1 className="mt-3 text-3xl font-bold text-slate-900">含参不等式与恒成立问题</h1><p className="mt-5 leading-8">区分恒成立与存在性，先核对乘除因子的符号，再分离参数；用最值及其能否取得确定严格不等号的边界。</p>
   <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图象探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
   <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 恒成立覆盖全域，存在性找见证</h3><p className="mt-3 leading-8">{"“任意 x”要求每个允许输入都满足；“存在 x”只需找到一个。求参数后分别证明必要性与充分性，存在题尽量给出能实现条件的具体输入。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 分离参数需要正负依据</h3><p className="mt-3 leading-8">{"除以 x 前说明 x>0 或 x<0；若符号可能变化或可为零，应分类讨论。将 a 独立后，恒大于一个函数通常需覆盖它的全部上界，不能只比较某个随意选点。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 严格边界取决于是否可取</h3><p className="mt-3 leading-8">{"若最大值 M 能取到，g(x)<a 恒成立要求 a>M；若只有上确界且不能取到，a=M 也可能成立。开区间问题先核实端点和最值，不能机械照搬闭区间结论。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\ln x\\le ax\\ (x>0)\\iff \\frac{\\ln x}{x}\\le a"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade2/derivatives/applications">回看基础课程 →</Link></section>
   <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图象探索</h2><Explore /></section>
   <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">证明对数不等式</summary><p className="mt-4 leading-8">{"证明 ln x≤x−1（x>0），并求取等条件。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"令 h=x−1−ln x，h′=(x−1)/x。"}</li><li>{"x>0，故导数在 (0,1) 为负，在 (1,+∞) 为正。h 在 x=1 取得唯一全域最小值。"}</li><li>{"h(1)=0，因而 h(x)≥0，即 ln x≤x−1；等号仅在 x=1。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">开区间上的严格不等号</summary><p className="mt-4 leading-8">{"求对所有 x∈(0,2) 都有 x<a 时 a 的范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"若 a≥2，则任意 x<2≤a，所以 x<a 恒成立。"}</li><li>{"若 a<2，因区间 (max{0,a},2) 非空，可从中取 x，此时 x>a，原式不成立。"}</li><li>{"所以 a≥2。尽管不等号严格，a=2 仍可取，因为输入 x=2 不在定义范围中。"}</li></ol></details></section>
   <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"混淆恒成立与存在；未经判断就除以含变量因子；忽略最值能否取到；求出必要条件后不证明充分性。"}</p></aside>
   <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先独立作答，再查看完整解析；解答题逐步自评，单独记入学习报告。登录后保存记录并收集未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·含参不等式")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
   <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/functions-derivatives/monotonic-extrema">← 上一节</Link><Link href="/grade3/functions-derivatives/comprehensive">下一节 →</Link></div>
  </article></main>;
}

function Explore() {
 const [choice,setChoice]=useState('critical');
 const a=choice==='critical'?1/Math.E:Number(choice);
 const domain=[0.12,8],fn=(x:number)=>Math.log(x)/x;
 const controls=<label>比较参数 a<select className="ml-3 rounded border p-2" value={choice} onChange={e=>setChoice(e.target.value)}><option value="0">0</option><option value="0.2">0.2</option><option value="critical">1/e（临界值）</option><option value="0.5">0.5</option></select></label>;
 const status=choice==='critical'?'a=1/e，水平线位于函数最高点，ln x≤ax 恒成立，仅 x=e 取等。':a>1/Math.E?'a>1/e，水平线高于全域最大值，ln x<ax 对所有 x>0 成立。':'a<1/e，取 x=e 时不满足 ln x≤ax，因此不能恒成立。';
 const xMin=0,xMax=8,yMin=-1,yMax=0.7;
 const extra: [number,number][][]=[[[0,a],[8,a]]];
 const x=(value:number)=>Number((40+(value-xMin)/(xMax-xMin)*520).toFixed(3));
 const y=(value:number)=>Number((280-(value-yMin)/(yMax-yMin)*240).toFixed(3));
 const curve=Array.from({length:181},(_,index)=>{const value=domain[0]+(domain[1]-domain[0])*index/180;return [value,fn(value)];}).filter(point=>Number.isFinite(point[1])).map(point=>x(point[0])+','+y(point[1])).join(' ');
 return <div className="mt-5">{controls}
  <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50"><svg role="img" aria-label="含参不等式与恒成立问题交互图象" className="h-auto w-full min-w-64" viewBox="0 0 600 320">
   <title>含参不等式与恒成立问题：蓝色为函数，橙色为辅助线</title><defs><clipPath id="clip-parameter-inequalities"><rect x="40" y="40" width="520" height="240" /></clipPath></defs>
   <rect x="40" y="40" width="520" height="240" fill="white" stroke="#cbd5e1"/>
   <g clipPath="url(#clip-parameter-inequalities)"><line x1="40" x2="560" y1={y(0)} y2={y(0)} stroke="#94a3b8"/><line x1={x(0)} x2={x(0)} y1="40" y2="280" stroke="#94a3b8"/><polyline points={curve} fill="none" stroke="#2563eb" strokeWidth="2.5"/>{extra.map((points,index)=><polyline key={index} points={points.map(point=>x(point[0])+','+y(point[1])).join(' ')} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3"/>)}</g>
   <text x="40" y="304" fontSize="12" fill="#64748b">{xMin}</text><text x="540" y="304" fontSize="12" fill="#64748b">{xMax}</text><text x="5" y="48" fontSize="12" fill="#64748b">{yMax}</text><text x="5" y="280" fontSize="12" fill="#64748b">{yMin}</text>
  </svg></div><p role="status" className="mt-4 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">蓝色为函数，橙色为辅助线（若有）。图象仅显示有限窗口，具体结论以定义域与完整推导为准。</p>
 </div>;
}
