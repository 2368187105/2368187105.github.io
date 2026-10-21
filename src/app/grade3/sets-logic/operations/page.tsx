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
      <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第一模块 · 1.3</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">集合的交并补运算</h1>
      <p className="mt-5 leading-8">先求集合本身，再进行交、并、补运算，准确判断每个端点并处理参数位置关系。</p>
      <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">交互探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
      <section id="knowledge" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先求集合，再运算</h3><p className="mt-3 leading-8">{"若集合由方程或不等式定义，先解出具体范围。二次不等式需检查二次项系数、根与等号，不能直接凭符号猜区间。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 交、并、补对应逻辑</h3><p className="mt-3 leading-8">{"交集要求同时属于两集，并集要求至少属于一集；补集必须相对于指定全集。交集逐点同时检查，并集在相接处至少有一侧包含即可。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 含参数时画数轴</h3><p className="mt-3 leading-8">{"先固定一个集合，再移动另一个区间。交集为空通常分左右两侧；相接时有无公共点取决于开闭端点。德摩根律将交并互换，补集作用于每个集合。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"\\complement_U(A\\cup B)=(\\complement_U A)\\cap(\\complement_U B)"} /></div><Link className="mt-5 inline-block text-sm text-blue-600" href="/grade1/sets/operations">回看高一基础课程 →</Link></section>
      <section id="explore" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">交互探索</h2><Explore /></section>
      <section id="examples" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">交并补一起处理</summary><p className="mt-4 leading-8">{"U=R，A={x | x²−3x+2≤0}，B=(0,+∞)，求交集、并集及 A 的补集。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"因式分解得 (x−1)(x−2)≤0，故 A=[1,2]。"}</li><li>{"A⊆B，因此 A∩B=[1,2]，A∪B=(0,+∞)。"}</li><li>{"从 R 中排除 [1,2]，得到 A 的补集 (−∞,1)∪(2,+∞)，两端均开。"}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">交集为空的临界位置</summary><p className="mt-4 leading-8">{"A=[−1,2]，B=(a,a+1)，求 A∩B=∅ 时 a 的范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"B 在左侧时需 a+1≤−1，得到 a≤−2。相接点 −1 不在 B，故可取等号。"}</li><li>{"B 在右侧时需 a≥2。相接点 2 不在 B，也可取等号。"}</li><li>{"若 −2<a<2，两区间存在公共点。故合并为 a≤−2 或 a≥2。"}</li></ol></details></section>
      <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">交并集混淆；补集不写全集；并集相接处错误挖去一个点；交集端点只检查其中一个集合。</p></aside>
      <section id="practice" className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。先在纸上独立完成推导，再查看解析；解答题按关键步骤自评，不混入客观题正确率。登录后保存记录，未掌握的题目进入错题本。</p><Link href={"/practice/?topic=" + encodeURIComponent("高三集合与逻辑·集合运算")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
      <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/sets-logic/relations">← 上一节</Link><Link href="/grade3/sets-logic/conditions">下一节 →</Link></div>
    </article></main>;
}

function Explore() {
 const [operation,setOperation]=useState('intersection');
 const universe=[1,2,3,4,5,6], a=[1,2,3,4], b=[3,4,5];
 const values=universe.filter(x=>operation==='intersection' ? a.includes(x)&&b.includes(x) : operation==='union' ? a.includes(x)||b.includes(x) : !a.includes(x));
 return <div className="mt-5"><p>U={'{1,2,3,4,5,6}'}，A={'{1,2,3,4}'}，B={'{3,4,5}'}。</p><label className="mt-4 block">选择运算<select className="ml-3 rounded border p-2" value={operation} onChange={e=>setOperation(e.target.value)}><option value="intersection">A∩B</option><option value="union">A∪B</option><option value="complement">A 在 U 中的补集</option></select></label><div className="mt-5 flex flex-wrap gap-3">{universe.map(x=><span key={x} className={'rounded-full border px-4 py-2 '+(values.includes(x)?'bg-blue-600 text-white':'text-slate-400')}>{x}</span>)}</div><p role="status" className="mt-4">结果：{'{'+values.join(',')+'}'}。蓝色表示该元素属于运算结果。</p></div>;
}
