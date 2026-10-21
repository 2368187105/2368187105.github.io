"use client";
import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八模块 · 8.7</p><h1 className="mt-3 text-3xl font-bold text-slate-900">抽样、统计图表与总体估计</h1><p className="mt-5 leading-8">将抽样方案、图表信息与统计量连接起来，按总体结构加权估计；明确直方图面积、方差口径和分组数据近似，不把样本结果当作总体真值。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 随机抽样与比例分层</h3><p className="mt-3 leading-8">{"总体分层后，按总体各层比例分配样本，并在各层内部随机抽取。抽样框遗漏、选择偏差和未回应偏差都可能影响代表性。总体均值估计按总体层权重加权；不按比例抽样时不能盲目等权合并。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 直方图与分位数</h3><p className="mt-3 leading-8">{"频率分布直方图的纵轴是频率/组距，矩形面积才是组频率，全部面积为 1。分位数涉及累计比例；原始数据与分组数据的计算口径要分清，组内线性估计是近似，不能从分组数据恢复每个原始值。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 均值、方差与数据变换</h3><p className="mt-3 leading-8">{"本节样本方差采用分母 n 的高中描述统计口径，题目另有定义时从其定义。分组均值、方差常用组中值加权估计。平移不改方差，整体乘 a 后方差乘 a²。极端值会影响均值和方差，中位数反映不同的中心位置。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\bar x=\\frac1n\\sum_{i=1}^nx_i,\\quad s^2=\\frac1n\\sum_{i=1}^n(x_i-\\bar x)^2,\\quad \\bar x_{\\text{分层}}\\approx\\sum_j w_j\\bar x_j"}/></div><Link href="/grade2/statistics/linear-regression" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">不等组距直方图</summary><p className="mt-4 leading-8">{"两个相邻组 [0,10)、[10,30] 的频数分别 20、30，共 50 个，求频率密度和组中值均值估计。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"两组频率为 20/50=0.4、30/50=0.6，组距分别为 10、20。"}</li><li>{"纵轴高度应为 0.4/10=0.04、0.6/20=0.03，因此人数较多的第二组柱子反而较矮。"}</li><li>{"以组中值 5、20 估计均值：0.4×5+0.6×20=14。它只是分组近似。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">数据变换一次处理</summary><p className="mt-4 leading-8">{"一组数据均值 8、方差 5，把每个数据变为 y=3x−2，求新均值、方差与标准差。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"新均值 3×8−2=22。"}</li><li>{"各点到新均值的偏差是原偏差的 3 倍，因此新方差为 3²×5=45。"}</li><li>{mathText("新标准差为 √45=3√5，不是 45。平移 −2 不影响离散程度。")}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把频率当直方图高度；不等人数直接平均各组均值；将 n 与 n−1 口径混用；组中值结果写成原始精确值；样本有偏仍盲目推广。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·抽样与总体估计")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/normal-distribution">← 上一节</Link><Link href="/grade3/probability-statistics/regression-independence">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [middle,setMiddle]=useState(5);
 const counts=[2,middle,3],mids=[5,15,25],total=middle+5,freq=counts.map(n=>n/total),mean=mids.reduce((s,x,i)=>s+x*freq[i],0),variance=mids.reduce((s,x,i)=>s+(x-mean)**2*freq[i],0);
 const controls=<label>中间组频数<input aria-label="中间组频数" type="range" min="2" max="8" step="1" value={middle} onChange={e=>setMiddle(Number(e.target.value))} className="ml-3 align-middle"/></label>;
 const shapes=<><line x1="70" x2="550" y1="280" y2="280" stroke="#94a3b8"/>{counts.map((v,i)=>{const h=r(freq[i]*260);return <g key={i}><rect x={90+i*145} y={280-h} width="145" height={h} fill="#bfdbfe" stroke="#2563eb"/><text x={162.5+i*145} y={260-h} textAnchor="middle" fontSize="13">密度 {r(freq[i]/10)}</text><text x={162.5+i*145} y="310" textAnchor="middle" fontSize="13">{i*10}～{i*10+10}</text></g>})}<text x="70" y="35" fontSize="13">纵轴为频率密度；每组组距 10</text></>;
 const status=`三组频数为 2、${middle}、3，总样本数 ${total}。按组中值 5、15、25 估计，均值≈${r(mean)}，方差≈${r(variance)}（分母 n）。频率之和为 1。`;
 const note='组距均为 10，柱高=频率/10，面积对应组频率；图中纵向按统一比例放大。这里使用组中值近似，不能据此确定原始数据的精确均值、方差或中位数。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="抽样、统计图表与总体估计交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>抽样、统计图表与总体估计</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">{mathText(note)}</p></div>;
}
