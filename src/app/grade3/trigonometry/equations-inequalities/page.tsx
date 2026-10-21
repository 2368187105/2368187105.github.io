"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/trigonometry" className="text-sm text-blue-600">← 三角函数与解三角形目录</Link>
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三模块 · 3.4</p><h1 className="mt-3 text-3xl font-bold text-slate-900">三角方程与不等式</h1><p className="mt-5 leading-8">先求基本角的周期解，再按整体角或原变量范围筛选；解不等式时说明区间选择、等号端点与定义域。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 等值角往往不止一支</h3><p className="mt-3 leading-8">{"sin t=c 的两支来自单位圆两个相同纵坐标；cos t=c 也要保留两侧。c=±1 时分支会合并，应去重；|c|>1 则无解。正切的周期为 π，同时注意其定义域。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 有限区间要逐支筛整数</h3><p className="mt-3 leading-8">{"先写 t=ωx+φ 的通解，再分别解出 x，最后用定义区间确定整数 k。另一种方法是先把 x 范围转为 t 范围，再筛周期区间，两种方法均应写明筛选依据。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 不等式与因式分解</h3><p className="mt-3 leading-8">{"严格不等号排除等值边界，非严格则保留，但原函数无定义点不能纳入。方程含公共因子时先移项因式分解，若直接除以可能为零的因子，会漏解。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\sin t=\\sin\\alpha\\iff t=\\alpha+2k\\pi\\ \\text{或}\\ t=\\pi-\\alpha+2k\\pi,\\quad k\\in\\mathbb Z"}/></div><Link href="/grade1/trigonometric/definition-relations" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">倍角方程逐支筛选</summary><p className="mt-4 leading-8">{"解 cos2x=1/2，x∈[0,π]。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"令 t=2x，范围为 [0,2π]。cos t=1/2 在此范围内的解为 t=π/3、5π/3。"}</li><li>{"分别除以 2，得 x=π/6、5π/6。"}</li><li>{"两端 x=0、π 时 cos2x=1，不满足，所以没有额外端点解。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">公共因子不能直接约掉</summary><p className="mt-4 leading-8">{"解 sinxcosx=sinx，x∈[0,2π)。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"移项得 sinx(cosx−1)=0，故 sinx=0 或 cosx=1。"}</li><li>{"第一支在区间内给出 x=0、π；第二支给出 x=0。"}</li><li>{"合并去重，解集为 {0,π}。如果先除以 sinx，只剩 cosx=1，就会漏掉 π。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"只取反正弦主值；忘记两支通解；整体角筛选后未还原 x；直接除以公共因子；半开区间误收右端点。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·方程与不等式")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry/graphs-properties">← 上一节</Link><Link href="/grade3/trigonometry/sine-cosine-laws">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [choice,setChoice]=useState('half');
 const level=choice==='half'?0.5:choice==='one'?1:choice==='negative'?-0.5:0;
 const answer=choice==='half'?'[π/12,5π/12]':choice==='one'?'{π/4}':choice==='negative'?'[0,7π/12]∪[11π/12,π]':'[0,π/2]∪{π}';
 const points=Array.from({length:241},(_,i)=>{const x=Math.PI*i/240;return `${Number((40+520*i/240).toFixed(3))},${Number((160-100*Math.sin(2*x)).toFixed(3))}`;}).join(' ');
 const line=Number((160-100*level).toFixed(3));
 return <div className="mt-5"><label>比较高度 c<select value={choice} onChange={e=>setChoice(e.target.value)} className="ml-2 rounded border p-2"><option value="negative">−1/2</option><option value="zero">0</option><option value="half">1/2</option><option value="one">1</option></select></label><svg role="img" aria-label="在有限区间求正弦不等式的解" className="mt-5 h-auto w-full" viewBox="0 0 600 320"><title>蓝线 sin2x，橙线高度 c，取蓝线不低于橙线的横坐标</title><line x1="40" x2="560" y1="160" y2="160" stroke="#94a3b8"/><polyline points={points} fill="none" stroke="#2563eb" strokeWidth="2.5"/><line x1="40" x2="560" y1={line} y2={line} stroke="#d97706" strokeDasharray="6 3"/><text x="40" y="305" fontSize="12">0</text><text x="550" y="305" fontSize="12">π</text></svg><p role="status" className="mt-3 text-sm leading-8">在 x∈[0,π] 内，sin2x≥{level} 的解集为 {answer}。非严格不等式保留等值点；c=0 时还要检查孤立的端点 x=π。</p></div>;
}
