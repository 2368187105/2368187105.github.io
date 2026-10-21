"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/trigonometry" className="text-sm text-blue-600">← 三角函数与解三角形目录</Link>
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三模块 · 3.6</p><h1 className="mt-3 text-3xl font-bold text-slate-900">三角形面积与综合应用</h1><p className="mt-5 leading-8">用面积连接边角、内切圆与外接圆，结合正余弦定理求范围和最值，检查取等位置与三角形非退化条件。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 面积的几种表达相互衔接</h3><p className="mt-3 leading-8">{"两边及夹角已知，用 bc sinA/2。内切圆半径 r 与半周长 p 满足 S=pr；将三角形按内心分成三个高为 r 的小三角形即可证明。再由 a=2RsinA，得到 S=abc/(4R)。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 先求角或正弦，再算面积</h3><p className="mt-3 leading-8">{mathText("三边已知时可先由余弦定理求 cosA，再用 sinA=√(1−cos²A)；内角正弦为正，所以此处取正根。求角还须限定在 (0,π)，不能留下区间外的周期解。")}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 最值与退化边界要分清</h3><p className="mt-3 leading-8">{"固定两边，面积随 sinA 变化，在 A=π/2 时达到最大。第三边范围为两边之差与和之间的开区间，端点对应退化三角形，不能取作实际最值取点。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"S=\\frac12bc\\sin A=pr=\\frac{abc}{4R},\\qquad p=\\frac{a+b+c}{2}"}/></div><Link href="/grade1/trigonometric/identities" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">三边求面积</summary><p className="mt-4 leading-8">{"求三边为 3、5、7 的三角形面积。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"三边满足 3+5>7，确可成三角形。设 C 对边为 7。"}</li><li>{"cosC=(3²+5²−7²)/(2×3×5)=(9+25−49)/30=−1/2。"}</li><li>{mathText("因 C∈(0,π)，得 C=2π/3，sinC=√3/2。")}</li><li>{mathText("S=3×5×sinC/2=15√3/4。余弦为负不意味着面积或正弦为负。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">固定两边时求面积最大值</summary><p className="mt-4 leading-8">{"两边为 2、5，夹角 θ∈(0,π)，求面积最大值及此时第三边。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"S=(1/2)×2×5sinθ=5sinθ，且 sinθ≤1。"}</li><li>{"θ=π/2 时取等，确能组成直角三角形，因此面积最大值为 5。"}</li><li>{mathText("余弦定理给出第三边平方为 2²+5²−2×2×5cos(π/2)=29，所以第三边为 √29。")}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"面积公式漏掉 1/2；半周长错当周长；由余弦求正弦时忽略内角范围；把退化三角形边界写成可取端点。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·面积与综合")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry/sine-cosine-laws">← 上一节</Link><Link href="/grade3/trigonometry">完成本模块，返回目录 →</Link></div>
 </article></main>;
}

function Explore() {
 const [degrees,setDegrees]=useState(60),angle=degrees*Math.PI/180;
 const cx=260+240*Math.cos(angle),cy=300-240*Math.sin(angle),round=(v:number)=>Number(v.toFixed(3));
 const side=Math.sqrt(52-48*Math.cos(angle)),area=12*Math.sin(angle);
 return <div className="mt-5"><label>夹角 A={degrees}°，AB=4、AC=6<input aria-label="夹角 A" type="range" min="15" max="165" step="15" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 block w-full"/></label><svg role="img" aria-label="固定两边时的三角形面积" className="mt-5 h-auto w-full" viewBox="0 0 600 380"><title>保持 AB 与 AC 不变，改变夹角观察第三边与面积</title><line x1="20" x2="565" y1="300" y2="300" stroke="#cbd5e1" strokeDasharray="4 4"/><polygon points={`260,300 420,300 ${round(cx)},${round(cy)}`} fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5"/><line x1={round(cx)} x2={round(cx)} y1={round(cy)} y2="300" stroke="#d97706" strokeDasharray="5 3"/><text x="244" y="323" fontSize="14">A</text><text x="426" y="322" fontSize="14">B</text><text x={round(cx+8)} y={round(cy-8)} fontSize="14">C</text><text x="330" y="322" fontSize="13">4</text></svg><p role="status" className="mt-3 text-sm leading-8">BC≈{round(side)}，面积 S≈{round(area)}。S=12sinA，在 A=90° 时达到最大值 12；第三边满足 2&lt;BC&lt;10，两端对应退化三角形，不能取到。</p></div>;
}
