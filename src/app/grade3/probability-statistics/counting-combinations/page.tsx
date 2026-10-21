"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八章 · 8.1</p><h1 className="mt-3 text-3xl font-bold text-slate-900">计数原理与排列组合</h1><p className="mt-5 leading-8">从“完成一件事”的分类与分步入手，区分排列和组合，处理相邻、不相邻、至少以及数字首位限制，逐项解释是否重复、是否遗漏。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 分类相加，分步相乘</h3><p className="mt-3 leading-8">{"一次选择可由互斥的不同类别完成，用加法；必须依次完成多个步骤，按各步在已有选择下的可选数量相乘。类别有重叠时须去重，各步可选数依赖前面选择时不能机械使用同一个数。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 排列有序，组合无序</h3><p className="mt-3 leading-8">{"从 n 个不同元素取 r 个，0≤r≤n。不同职务、位置、顺序会产生不同结果，使用排列 A(n,r)=n!/(n−r)!；只选一个集合使用组合 C(n,r)=n!/[r!(n−r)!]，并约定 0!=1。分组若有组名、组长或组内顺序，须分别核实。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 限制条件决定方法</h3><p className="mt-3 leading-8">{"相邻常用捆绑，再乘块内排列；不相邻常用插空或补集。至少一人通常从全部减去零人，也可按人数互斥分类。数字问题先处理首位不能为零、末位奇偶等特殊位置。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"A_n^r=\\frac{n!}{(n-r)!},\\qquad C_n^r=\\frac{n!}{r!(n-r)!},\\qquad C_n^r=C_n^{n-r}"}/></div><Link href="/grade2/counting" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">按女生人数分类</summary><p className="mt-4 leading-8">{"5 名男生、4 名女生中选 4 人，至少 2 名女生，共多少种？"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"女生人数只能为 2、3、4，这三类互不重叠且覆盖全部允许情况。"}</li><li>{"分别为 C(4,2)C(5,2)=60，C(4,3)C(5,1)=20，C(4,4)C(5,0)=1。"}</li><li>{"分类相加得到 60+20+1=81。选出的四人没有职务，不再乘 4!。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">先处理偶数末位与零</summary><p className="mt-4 leading-8">{"用 0 到 5 组成无重复数字的三位偶数，求个数。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"末位为 0 时，百位可选 1 到 5 共 5 种，十位再从余下 4 个选，共 20 种。"}</li><li>{"末位为 2 或 4 时，每一个末位选择下，百位不能为零或该末位，有 4 种；十位可用余下 4 个，得到各 16 种。"}</li><li>{"三类按末位互斥，总数 20+16+16=52。不能将所有偶数末位按相同首位数量相乘。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">类别重叠却直接相加；把选组和安排职务混为一谈；捆绑后漏乘内部顺序；插空时忽略两端；首位选零。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·计数与排列组合")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry">← 回看解析几何</Link><Link href="/grade3/probability-statistics/binomial-theorem">下一节 →</Link></div>
</article></main>;
}
function Explore() {

 const [n,setN]=useState(4),[mode,setMode]=useState('combination');
 const total=mode==='combination'?n*(n-1)/2:n*(n-1);
 const controls=<><label>元素个数 n<select aria-label="元素个数" value={n} onChange={e=>setN(Number(e.target.value))} className="ml-2 rounded border p-2">{[3,4,5,6].map(v=><option key={v}>{v}</option>)}</select></label><label>是否计顺序<select aria-label="是否计顺序" value={mode} onChange={e=>setMode(e.target.value)} className="ml-2 rounded border p-2"><option value="combination">组合：只取 i&lt;j</option><option value="permutation">排列：i≠j 均计</option></select></label></>;
 const shapes=<>{Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>{const valid=mode==='combination'?i<j:i!==j;return <g key={`${i}-${j}`}><rect x={100+j*65} y={35+i*38} width="58" height="30" rx="4" fill={valid?'#dbeafe':'#f1f5f9'} stroke={valid?'#2563eb':'#cbd5e1'}/><text x={129+j*65} y={55+i*38} textAnchor="middle" fontSize="13" fill={valid?'#1d4ed8':'#94a3b8'}>{i+1},{j+1}</text></g>;}))}</>;
 const status=`从 ${n} 个不同元素取两个，蓝格对应允许结果，共 ${total} 种。`+(mode==='combination'?'每一对只计一次，交换次序不另计。':'两个位置不同，交换次序另计；对角线排除重复元素。');
 const note='每个格子表示有序对 (i,j)。灰格不计，组合用上三角代表每个无序集合一次。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="计数原理与排列组合交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>计数原理与排列组合</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
