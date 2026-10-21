"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八章 · 8.3</p><h1 className="mt-3 text-3xl font-bold text-slate-900">概率、条件概率与全概率</h1><p className="mt-5 leading-8">建立样本空间与事件关系，再处理条件、独立性和全概率；用路径概率解释倒推来源，避免把两个方向的条件概率颠倒。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 样本空间、和事件与对立</h3><p className="mt-3 leading-8">{"古典概型要求有限且等可能，概率才是有利样本数除以全部样本数。和事件概率要减去交集，互斥时才可直接相加；至少一次常用一减去一次也没有。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 条件与独立是不同概念</h3><p className="mt-3 leading-8">{"P(B)>0 时，P(A|B)=P(AB)/P(B)。条件事件成为新的样本空间。独立由 P(AB)=P(A)P(B) 判断，不需要除以零概率；正概率的互斥事件不能同时独立。连续不放回抽样通常不独立。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 全概率与倒推来源</h3><p className="mt-3 leading-8">{"若 B₁,…,Bₘ 互斥并覆盖样本空间，按来源汇总 P(A)=ΣP(Bᵢ)P(A|Bᵢ)。当 P(A)>0，倒推来源用 P(Bⱼ|A)=P(Bⱼ)P(A|Bⱼ)/P(A)。分母应为全部导致 A 的路径概率，不能只选一条路径。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"P(A\\cup B)=P(A)+P(B)-P(AB),\\quad P(A\\mid B)=\\frac{P(AB)}{P(B)}\\ (P(B)>0)"}/></div><Link href="/grade2/probability/conditional" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">独立且有交集</summary><p className="mt-4 leading-8">{"A、B 独立，概率分别为 1/2、1/3。求同时发生、至少发生一个、恰发生一个的概率。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"同时发生概率为 (1/2)(1/3)=1/6。"}</li><li>{"至少一个为 1/2+1/3−1/6=2/3。"}</li><li>{"恰一个可由 P(A)+P(B)−2P(AB) 求得，结果为 1/2。也可将 A非B 和 非AB 两条互斥路径相加。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">来源比例不能忽略</summary><p className="mt-4 leading-8">{"甲箱被选概率 1/3，红球率 3/4；乙箱被选概率 2/3，红球率 1/4。先选箱再抽球，已知红球，求来自甲箱的概率。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"甲且红的概率为 (1/3)(3/4)=1/4，乙且红为 (2/3)(1/4)=1/6。"}</li><li>{"红球总概率为 1/4+1/6=5/12。"}</li><li>{"倒推甲箱为 (1/4)/(5/12)=3/5。该值既不是甲箱红率 3/4，也不是甲箱选择概率 1/3。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">未确认等可能就按个数相除；把互斥当独立；条件已变仍沿用原分母；将 P(A|B) 直接当作 P(B|A)；分母为零仍定义条件概率。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·条件概率与全概率")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/binomial-theorem">← 上一节</Link><Link href="/grade3/probability-statistics/discrete-variables">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [base,setBase]=useState(10),[falseRate,setFalseRate]=useState(20);
 const defect=base/100,positiveDefect=defect*.8,positiveGood=(1-defect)*falseRate/100,total=positiveDefect+positiveGood;
 const controls=<><label>次品率（%）<input aria-label="次品率" type="range" min="0" max="100" step="10" value={base} onChange={e=>setBase(Number(e.target.value))}/></label><label>合格品报警率（%）<input aria-label="合格品报警率" type="range" min="0" max="100" step="10" value={falseRate} onChange={e=>setFalseRate(Number(e.target.value))}/></label></>;
 const shapes=<><text x="50" y="50" fontSize="14">报警的两条互斥路径（次品报警率固定 80%）</text><rect x="50" y="95" width={r(520*positiveDefect)} height="45" fill="#2563eb"/><text x="50" y="165" fontSize="14">次品且报警：{r(positiveDefect)}</text><rect x="50" y="205" width={r(520*positiveGood)} height="45" fill="#d97706"/><text x="50" y="275" fontSize="14">合格且报警：{r(positiveGood)}</text><line x1="50" x2="570" y1="305" y2="305" stroke="#94a3b8"/><text x="50" y="330" fontSize="12">0</text><text x="570" y="330" fontSize="12">1</text></>;
 const status=`次品率 ${base}%，合格品报警率 ${falseRate}%。P(报警)=${r(total)}。`+(total>0?`P(次品|报警)≈${r(positiveDefect/total)}，分子=${r(positiveDefect)}。`:'报警概率为 0，P(次品|报警) 未定义，不能作除法。');
 const note='条长按相同概率比例表示，不是随机模拟。次品率为零时不调用以次品为条件的概率定义，固定 80% 仅为生成模型参数。显示小数为近似值。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="概率、条件概率与全概率交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>概率、条件概率与全概率</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
