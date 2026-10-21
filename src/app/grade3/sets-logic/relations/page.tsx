"use client";

import Link from "next/link";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
  return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader />
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Link href="/grade3/sets-logic" className="text-sm text-blue-600">← 集合与逻辑复习目录</Link>
      <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第一章 · 1.2</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">集合关系与参数范围</h1>
      <p className="mt-5 leading-8">把子集、真子集与相等转化为可检验的条件，处理含参区间时主动检查空集。</p>
      <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">交互探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
      <section id="knowledge" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 包含关系看每一个元素</h3><p className="mt-3 leading-8">{"A⊆B 表示每个属于 A 的元素都属于 B。要否定包含，只需找到一个属于 A 而不属于 B 的元素。空集是任意集合的子集。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 真子集还要排除相等</h3><p className="mt-3 leading-8">{"先证明包含，再证明不相等。集合相等需要双向包含。对非空闭区间，左端点和右端点分别比较；开闭端点不同可能改变边界是否可取。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 含参区间先判空</h3><p className="mt-3 leading-8">{"{x | a≤x≤2a+1} 在 a>2a+1 时为空。空集情形自动满足子集关系，不能只列端点不等式而漏掉这部分参数。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"A\\subseteq B\\iff \\forall x\\in A,\\ x\\in B"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/sets/relations">回看高一基础课程 →</Link></section>
      <section id="explore" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">交互探索</h2><Explore /></section>
      <section id="examples" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">区间包含</summary><p className="mt-4 leading-8">{"求 [a,a+1]⊆[0,3] 时 a 的范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"因 a+1>a，左边始终为非空区间。"}</li><li>{"左端点需 a≥0，右端点需 a+1≤3，即 a≤2。"}</li><li>{"联立得 a∈[0,2]。a=0、2 时均满足，故保留两个边界。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">不能漏掉空集</summary><p className="mt-4 leading-8">{"A={x | a≤x≤2a+1}，求 A⊆[0,5] 时 a 的范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"a<−1 时左端点大于右端点，A=∅，满足包含关系。"}</li><li>{"a≥−1 时 A 非空，要求 a≥0 且 2a+1≤5，得 0≤a≤2。"}</li><li>{"合并为 (−∞,−1)∪[0,2]。a=−1 时 A={−1}，不满足，应排除。"}</li></ol></details></section>
      <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">默认集合非空；把子集误当成真子集；端点相接时没有核对元素是否属于两个集合。</p></aside>
      <section id="practice" className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先在纸上独立完成推导，再查看解析；解答题按关键步骤自评，不混入客观题正确率。登录后保存记录，未掌握的题目进入错题本。</p><Link href={"/practice/?topic=" + encodeURIComponent("高三集合与逻辑·集合关系与参数")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
      <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sets-logic/concept">← 上一节</Link><Link href="/grade3/sets-logic/operations">下一节 →</Link></div>
    </article></main>;
}

function Explore() {
 const [a,setA]=useState(0);
 const empty=a < -1;
 const contained=empty || (a>=0 && a<=2);
 return <div className="mt-5"><label>参数 a = {a}<input aria-label="参数 a" className="mt-3 block w-full" type="range" min="-3" max="3" step="0.5" value={a} onChange={e=>setA(Number(e.target.value))}/></label><p className="mt-4 leading-8">A={'{x | '+a+'≤x≤'+(2*a+1)+'}'}；B=[0,5]。</p><p role="status">{empty ? 'A 是空集，所以 A⊆B。' : contained ? 'A 非空且两个端点都在 B 内，所以 A⊆B。' : 'A 非空且存在端点不属于 B，所以 A 不是 B 的子集。'}</p><p className="mt-3 text-sm">特别比较 a=−1 与 a&lt;−1，理解单点集与空集的不同。</p></div>;
}
