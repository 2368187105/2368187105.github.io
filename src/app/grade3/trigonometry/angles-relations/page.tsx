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
  <p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第三模块 · 3.1</p><h1 className="mt-3 text-3xl font-bold text-slate-900">角、弧度与三角函数关系</h1><p className="mt-5 leading-8">在角度、弧度与单位圆之间转换，用象限核对正负，完整处理同角关系、诱导公式与扇形计算。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 任意角与弧度</h3><p className="mt-3 leading-8">{"同终边角相差 2kπ，而不是只能相差一周。角度与弧度转换分别乘 π/180 和 180/π。弧长 l=rθ、扇形面积 S=r²θ/2 中 θ 必须用弧度，普通扇形还需明确所用角的范围。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 单位圆统一符号与大小</h3><p className="mt-3 leading-8">{"终边与单位圆交点 P 的横坐标为 cosα，纵坐标为 sinα。正切为纵横坐标之比，只有 cosα≠0 时才有定义。先找象限，再由平方关系开方，不能默认取正根。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 诱导公式先判断函数与符号</h3><p className="mt-3 leading-8">{"π±α、2π±α 的变换保留正弦或余弦类型，π/2±α 等变换常交换正弦与余弦。每次都可用单位圆核对，不要靠字面上的减号决定结果符号。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"P(\\cos\\alpha,\\sin\\alpha),\\quad\\sin^2\\alpha+\\cos^2\\alpha=1,\\quad\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}"}/></div><Link href="/grade1/trigonometric/angles-radians" className="mt-5 inline-block text-sm text-blue-600">回看高一相关基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">同终边角与精确值</summary><p className="mt-4 leading-8">{"求 sin(13π/6)、cos(13π/6)，并说明对应单位圆点。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"13π/6=2π+π/6，所以与 π/6 具有相同终边。"}</li><li>{mathText("正弦为 1/2，余弦为 √3/2。")}</li><li>{mathText("单位圆点的坐标顺序是 (cos,sin)，故为 (√3/2,1/2)。不能把两坐标写反。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">象限与诱导结合</summary><p className="mt-4 leading-8">{"已知 α 为第二象限角且 cosα=−5/13，求 sinα、tanα 与 sin(π+α)。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"由平方关系，sin²α=1−25/169=144/169。第二象限正弦为正，所以 sinα=12/13。"}</li><li>{"cosα 非零，tanα=(12/13)/(−5/13)=−12/5。"}</li><li>{"sin(π+α)=−sinα=−12/13。每步的符号都与象限、诱导关系一致。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">{"弧长公式中直接代入角度数；开方忽略象限；把单位圆横纵坐标写反；在余弦为零时使用正切。"}</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析写清代入、变形、分支筛选与边界检验。解答题先独立书写，再对照步骤自评；登录后保存练习记录及未掌握题目。</p><Link href={"/practice/?topic="+encodeURIComponent("高三三角与解三角形·角与基本关系")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/trigonometry">← 模块目录</Link><Link href="/grade3/trigonometry/identities">下一节 →</Link></div>
 </article></main>;
}

function Explore() {
 const [degrees,setDegrees]=useState(30);
 const angle=degrees*Math.PI/180, px=260+110*Math.cos(angle),py=170-110*Math.sin(angle);
 const round=(v:number)=>Number(v.toFixed(3));
 return <div className="mt-5"><label>角 α={degrees}°<input aria-label="角度 α" type="range" min="0" max="720" step="15" value={degrees} onChange={e=>setDegrees(Number(e.target.value))} className="mt-3 block w-full"/></label><svg role="img" aria-label="单位圆与角的终边" className="mt-5 h-auto w-full" viewBox="0 0 520 340"><title>单位圆：横坐标余弦，纵坐标正弦</title><line x1="60" x2="460" y1="170" y2="170" stroke="#94a3b8"/><line x1="260" x2="260" y1="25" y2="315" stroke="#94a3b8"/><circle cx="260" cy="170" r="110" fill="#eff6ff" fillOpacity="0.5" stroke="#94a3b8"/><path d={`M260 170L${round(px)} ${round(py)}`} stroke="#2563eb" strokeWidth="3"/><path d={`M${round(px)} 170V${round(py)}H260`} fill="none" stroke="#d97706" strokeDasharray="5 3"/><circle cx={round(px)} cy={round(py)} r="5" fill="#2563eb"/><text x={round(px+10)} y={round(py-10)} fontSize="14" fill="#2563eb">P</text><text x="450" y="190" fontSize="12">cosα</text><text x="272" y="35" fontSize="12">sinα</text></svg><p role="status" className="mt-3 text-sm leading-8">α≈{round(angle)} 弧度，P≈({round(Math.cos(angle))},{round(Math.sin(angle))})。每增加 360°，终边与两坐标重复；tanα 在 cosα=0 时无定义。</p></div>;
}
