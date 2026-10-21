"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/sequences" className="text-sm text-blue-600">← 数列复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第五章 · 5.5</p><h1 className="mt-3 text-3xl font-bold text-slate-900">递推数列的转化</h1><p className="mt-5 leading-8">根据递推结构选择平移、除以指数或取倒数，先写新数列初值，再求通项并还原；取倒数前说明非零前提。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 含常数的线性递推：找不动点</h3><p className="mt-3 leading-8">aₙ₊₁=paₙ+c，p≠1 时，先解 L=pL+c，得 L=c/(1−p)，再看 aₙ−L。变换后的新首项是 a₁−L，不能照搬原首项。若 p=1，原数列直接是公差 c 的等差数列，不需要除以 1−p。若 p=0，则从第二项起恒为 c。p≠0、1 时，若新首项为零，原数列恒为 L；新首项非零时，新数列才是各项非零的等比数列。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 同底指数或项号系数：按结构相除</h3><p className="mt-3 leading-8">出现 aₙ₊₁=qaₙ+qⁿ 时，可除以 qⁿ，尝试 bₙ=aₙ/qⁿ⁻¹；出现 (n+1)/n 的倍率时，可尝试 aₙ/n。每次相除都要确保分母非零，并准确对应下一项的指数或项号。</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 分式递推：先保证可以取倒数</h3><p className="mt-3 leading-8">{"若 aₙ₊₁=aₙ/(1+caₙ)，且各项非零、分母有定义，取倒数可得到 1/aₙ₊₁=1/aₙ+c。正项与 c>0 时可从初值用递推说明正性；求得通项后还要检查它不使原分母为零。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"a_{n+1}=pa_n+c\\ \\Longrightarrow\\ b_n=a_n-L,\\ L=pL+c,\\ b_{n+1}=pb_n\\quad(p\\ne1)"}/></div><Link href="/grade2/sequences/concept" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">减去不动点</summary><p className="mt-4 leading-8">已知 a₁=3，aₙ₊₁=2aₙ+2，求通项。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>先解 L=2L+2，得 L=−2。因此把递推改写为 aₙ₊₁+2=2(aₙ+2)。</li><li>令 bₙ=aₙ+2，则 b₁=5、bₙ₊₁=2bₙ，故 bₙ=5·2ⁿ⁻¹。</li><li>还原得到 aₙ=5·2ⁿ⁻¹−2。代入 n=1 得 3。</li><li>代回右边：2aₙ+2=10·2ⁿ⁻¹−2=5·2ⁿ−2=aₙ₊₁，初值和递推均验证。</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">取倒数前先说明正性</summary><p className="mt-4 leading-8">已知 a₁=1/2，aₙ₊₁=aₙ/(1+aₙ)，求通项。</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"由 a₁>0，若 aₙ>0，则分母 1+aₙ>0，aₙ₊₁>0。因此每一项都为正，可取倒数。"}</li><li>1/aₙ₊₁=(1+aₙ)/aₙ=1/aₙ+1。令 bₙ=1/aₙ，则 b₁=2，公差为 1。</li><li>bₙ=2+(n−1)=n+1，因此 aₙ=1/(n+1)。</li><li>{"n≥1 时原分母 1+aₙ=(n+2)/(n+1)>0；代回递推得到 1/(n+2)，与下一项相符。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">平移常数的正负号写反；新数列初值仍用原首项；除以指数时错一位；未说明非零就取倒数；只求新数列忘记还原。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写出首项检验、代数变形、求和首尾项和整数边界。解答题先独立完成，再展开完整过程逐步自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三数列·递推转化")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sequences/summation">← 上一节</Link><Link href="/grade3/sequences/comprehensive">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [mode,setMode]=useState('shift'),[n,setN]=useState(6),r=(v:number)=>Number(v.toFixed(3));
 const original=(k:number)=>mode==='shift'?1+3**(k-1):mode==='divide'?k*2**(k-1):1/(2*k-1);
 const transformed=(k:number)=>mode==='shift'?3**(k-1):mode==='divide'?k:2*k-1;
 const values=Array.from({length:n},(_,i)=>original(i+1)),other=Array.from({length:n},(_,i)=>transformed(i+1));
 const sa=180/Math.max(...values),sb=180/Math.max(...other);
 const explanation=mode==='shift'?'aₙ₊₁=3aₙ−2，bₙ=aₙ−1，b₁=1，公比 3。':mode==='divide'?'aₙ₊₁=2aₙ+2ⁿ，bₙ=aₙ/2ⁿ⁻¹，b₁=1，公差 1。':'aₙ₊₁=aₙ/(1+2aₙ)，bₙ=1/aₙ，b₁=1，公差 2；原数列始终为正，可取倒数。';
 return <div className="mt-5"><div className="flex flex-wrap gap-5"><label>转化方法<select aria-label="转化方法" value={mode} onChange={e=>setMode(e.target.value)} className="ml-2 rounded border p-2"><option value="shift">平移 aₙ−1</option><option value="divide">除以 2ⁿ⁻¹</option><option value="reciprocal">取倒数 1/aₙ</option></select></label><label>项数 {n}<input aria-label="显示项数" type="range" min="1" max="8" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="ml-3 align-middle"/></label></div><svg role="img" aria-label="原递推数列与转化数列" viewBox="0 0 640 320" className="mt-5 h-auto w-full"><title>左侧为原数列 a，右侧为转化后的 b；两侧纵轴独立缩放</title><text x="40" y="30" fill="#2563eb" fontSize="14">原数列 aₙ</text><text x="360" y="30" fill="#059669" fontSize="14">转化数列 bₙ</text><line x1="25" x2="300" y1="265" y2="265" stroke="#94a3b8"/><line x1="345" x2="620" y1="265" y2="265" stroke="#94a3b8"/>{values.map((value,i)=><g key={i}><circle cx={40+i*35} cy={r(265-value*sa)} r="4" fill="#2563eb"/><circle cx={360+i*35} cy={r(265-other[i]*sb)} r="4" fill="#059669"/><text x={40+i*35} y="290" fontSize="12" textAnchor="middle">{i+1}</text><text x={360+i*35} y="290" fontSize="12" textAnchor="middle">{i+1}</text></g>)}</svg><p role="status" className="mt-3 text-sm leading-8">{explanation} 当前 a({n})≈{r(values[n-1])}，b({n})={r(other[n-1])}。</p><p className="mt-2 text-xs leading-6 text-slate-500">左右纵轴独立缩放，不能用视觉高度直接比较 a、b 的大小。显示小数为近似值，数列实际计算使用完整精度。</p></div>;
}
