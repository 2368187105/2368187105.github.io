"use client";
import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";
export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
<Link href="/grade3/probability-statistics" className="text-sm text-blue-600">← 计数、概率与统计复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第八章 · 8.2</p><h1 className="mt-3 text-3xl font-bold text-slate-900">二项式定理与系数</h1><p className="mt-5 leading-8">以一般项为核心，逐步确定次数、项号与系数；完整保留负号和幂，区分二项式系数、实际项系数和赋值后的系数和。</p>
<nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
<section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 一般项先写完整</h3><p className="mt-3 leading-8">{"(a+b)ⁿ 的第 r+1 项为 C(n,r)aⁿ⁻ʳbʳ，r 为 0 到 n 的整数。指数 r 与项号 r+1 不同。字母中含 x、负号或分式时，把整个 a、b 代入，再整理 x 的次数。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 常数项与指定次数</h3><p className="mt-3 leading-8">{"令一般项中 x 的总指数等于目标次数，求 r；必须检查 r 是允许范围内的整数，否则该项不存在。常数项指 x 的次数为零，不等于“二项式系数最大的一项”。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 赋值与参数筛选</h3><p className="mt-3 leading-8">{"多项式各项实际系数之和是 x=1 时的值，偶次与奇次系数可借 x=−1 分离。二项式系数之和始终是 2ⁿ，但实际系数会受常数、符号影响。系数方程涉及平方时保留正负解，再按其他条件筛选。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"(a+b)^n=\\sum_{r=0}^{n}C_n^r a^{n-r}b^r,\\qquad T_{r+1}=C_n^r a^{n-r}b^r"}/></div><Link href="/grade2/counting/binomial" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
<section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
<section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">非整数指数位置应排除</summary><p className="mt-4 leading-8">{"求 (x²−1/x)⁵ 中的常数项及 x⁴ 的系数，x≠0。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"一般项为 C(5,r)(−1)ʳx¹⁰⁻³ʳ，r=0,…,5。"}</li><li>{"常数要求 10−3r=0，r=10/3 不是整数，因此没有常数项，常数系数为 0。"}</li><li>{"x⁴ 要求 10−3r=4，得 r=2，系数 C(5,2)(−1)²=10。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">偶次与奇次系数之和</summary><p className="mt-4 leading-8">{"设 (1+2x)⁴ 展开式的偶次项系数和为 E，奇次项系数和为 O，求 E、O。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"令 x=1，得到 E+O=(1+2)⁴=81。"}</li><li>{"令 x=−1，偶次保号、奇次变号，因此 E−O=(1−2)⁴=1。"}</li><li>{"相加得 2E=82，所以 E=41；相减得 2O=80，所以 O=40。"}</li><li>{"这两者是实际系数之和；二项式系数之和则是 2⁴=16。"}</li></ol></details></section>
<aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">把 r 当成项号；负号没随幂变化；解得非整数 r 仍取项；把实际系数和写成 2ⁿ；反求参数只保留正根。</p></aside>
<section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。完整列出计数依据、事件与模型条件、代入计算及统计结论。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三计数概率统计·二项式定理")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
<div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/probability-statistics/counting-combinations">← 上一节</Link><Link href="/grade3/probability-statistics/conditional-probability">下一节 →</Link></div>
</article></main>;
}
function Explore() {
 const r=(value:number)=>Number(value.toFixed(3));

 const [n,setN]=useState(5),[sign,setSign]=useState(1);
 const comb=(a:number,b:number)=>{let v=1;for(let j=1;j<=b;j++)v=v*(a-j+1)/j;return v;};
 const values=Array.from({length:n+1},(_,r)=>comb(n,r)*sign**r),maximum=Math.max(...values.map(Math.abs));
 const controls=<><label>指数 n<input aria-label="展开指数" type="range" min="2" max="8" step="1" value={n} onChange={e=>setN(Number(e.target.value))} className="ml-3 align-middle"/></label><label>展开式<select aria-label="展开式" value={sign} onChange={e=>setSign(Number(e.target.value))} className="ml-2 rounded border p-2"><option value="1">(1+x)ⁿ</option><option value="-1">(1−x)ⁿ</option></select></label></>;
 const shapes=<><line x1="40" x2="600" y1="165" y2="165" stroke="#64748b"/>{values.map((v,i)=>{const h=r(Math.abs(v)/maximum*105),x=r(65+i*500/n);return <g key={i}><rect x={x-17} y={v>=0?165-h:165} width="34" height={h} fill={v>=0?'#2563eb':'#d97706'}/><text x={x} y={v>=0?150-h:184+h} textAnchor="middle" fontSize="13">{v}</text><text x={x} y="320" textAnchor="middle" fontSize="12">r={i}</text></g>;})}</>;
 const status=`n=${n}，共 ${n+1} 项；实际系数依次为 ${values.join('，')}。系数和为 ${values.reduce((a,b)=>a+b,0)}，二项式系数之和为 ${2**n}。`;
 const note='柱高按当前最大绝对系数归一显示，柱旁数字为精确系数；横轴 r 为 x 的次数，第 r+1 项才是项号。';

 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5 text-sm">{controls}</div><svg role="img" aria-label="二项式定理与系数交互图形" viewBox="0 0 640 360" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>二项式定理与系数</title>{shapes}</svg><p role="status" className="mt-3 text-sm leading-8">{status}</p><p className="mt-2 text-xs leading-6 text-slate-500">{note}</p></div>;
}
