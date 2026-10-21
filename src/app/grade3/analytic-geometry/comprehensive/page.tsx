"use client";

import Link from "next/link";
import { mathText } from "@/components/MathText";
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

export default function LessonPage() {
 return <main className="min-h-screen bg-[#fafafa] text-slate-600"><SiteHeader/><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
  <Link href="/grade3/analytic-geometry" className="text-sm text-blue-600">← 解析几何复习目录</Link><p className="mt-8 text-sm font-semibold text-blue-600">高三一轮复习 · 第七模块 · 7.7</p><h1 className="mt-3 text-3xl font-bold text-slate-900">解析几何综合与最值</h1><p className="mt-5 leading-8">先把弦、面积或距离写成有范围的单变量式，再配方或估界求最值；用能覆盖特殊方向的参数方式检验取等条件。</p>
  <nav aria-label="本节导航" className="my-7 flex flex-wrap gap-4 text-sm text-blue-600"><a href="#knowledge">知识与方法</a><a href="#explore">图形探索</a><a href="#examples">典型例题</a><a href="#practice">分层训练</a></nav>
  <section id="knowledge" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-xl font-bold text-slate-900">知识梳理与方法</h2><section className="mt-6"><h3 className="font-semibold text-slate-900">1. 先建立真实允许范围</h3><p className="mt-3 leading-8">{"两个不同交点要求严格的判别式条件；三角形非退化还要排除顶点落在弦上。先把这些限制写入参数范围，再求最值。不能把切点、零面积或范围外参数当成可取位置。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">2. 非负目标可以先平方</h3><p className="mt-3 leading-8">{"弦长、面积和距离均非负，平方后常可消根式并配方。平方最值算完后必须开根，还要逐一检查全部取等点；上下对称的位置可能同时达到最大值。"}</p></section>
<section className="mt-6"><h3 className="font-semibold text-slate-900">3. 换参数避免漏掉最值方向</h3><p className="mt-3 leading-8">{"过中心直线可用单位方向 (cosθ,sinθ) 表示，既覆盖有限斜率也覆盖竖直方向。无论用哪种参数，最终应回到真实直线、交点和几何条件检查，不能只给抽象参数值。"}</p></section><div className="mt-6 overflow-x-auto rounded-xl bg-slate-50 p-4"><BlockMath math={"S=3|h|\\sqrt{1-\\frac{h^2}4},\\quad S^2=9-\\frac94(h^2-2)^2\\le9,\\qquad 0<|h|<2"}/></div><Link href="/grade2/conic-sections/ellipse" className="mt-5 inline-block text-sm text-blue-600">回看高二基础 →</Link></section>
  <section id="explore" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">图形探索</h2><Explore/></section>
  <section id="examples" className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">典型例题 · 先思考再展开</h2><details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">从圆的面积最值迁移到椭圆</summary><p className="mt-4 leading-8">{"圆 x²+y²=4 的水平弦与原点构成非退化三角形，求面积最大值。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{mathText("设弦 y=h，必须 0<|h|<2。半弦长为 √(4−h²)，所以面积 S=|h|√(4−h²)。")}</li><li>{"平方得 S²=4h²−h⁴=4−(h²−2)²≤4，面积非负，所以 S≤2。"}</li><li>{mathText("h=±√2 均在允许范围内，最大面积为 2。h=0 虽有两交点，但三角形退化，不能作为允许情形。")}</li></ol></details>
<details className="mt-5 rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-semibold text-slate-900">单位方向使参数差成为长度</summary><p className="mt-4 leading-8">{"求椭圆 x²/9+y²/4=1 的中心弦长度范围。"}</p><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8"><li>{"设直线上点为 (s cosθ,s sinθ)，θ∈[0,π)、s∈R。代入得 s²D=1，其中 D=cos²θ/9+sin²θ/4>0。"}</li><li>{mathText("两端点对应 s=±1/√D。因方向为单位长度，所以真实弦长为参数差 2/√D。")}</li><li>{"D=1/9+(5/36)sin²θ∈[1/9,1/4]，因此弦长在 [4,6] 内。"}</li><li>{"竖直方向 x=0 取得 4，水平方向 y=0 取得 6，两端均能达到。"}</li></ol></details></section>
  <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold text-slate-900">易错提醒</h2><p className="mt-3 leading-8">最大平方当成最大长度或面积；忽略非退化条件；只列一个对称取点；有限斜率法漏掉竖直方向；图中看不到便当作没有交点。</p></aside>
  <section id="practice" className="mt-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">分层训练</h2><p className="mt-3 leading-8">4 道选择题、3 道填空题、2 道解答题，均为本站原创。解析逐步展开方程整理、次数分类、范围筛选和取等回代。解答题先独立书写，再按步骤自评；登录后沿用练习记录、错题与学习报告。</p><Link href={"/practice/?topic="+encodeURIComponent("高三解析几何·综合与最值")} className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始本节 9 道训练 →</Link></section>
  <div className="mt-8 flex justify-between gap-4 text-sm text-blue-600"><Link href="/grade3/analytic-geometry/loci-equations">← 上一节</Link><Link href="/grade3/analytic-geometry">完成本模块，返回目录 →</Link></div>
 </article></main>;
}

function Explore() {
 const [level,setLevel]=useState('one');
 const origin:[number,number]=[320,250],scale=60;
 const r=(value:number)=>Number(value.toFixed(3));
 const px=(x:number)=>r(origin[0]+scale*x),py=(y:number)=>r(origin[1]-scale*y);
 const poly=(points:number[][])=>points.map(p=>`${px(p[0])},${py(p[1])}`).join(' ');
 const levels:Record<string,number>={negOutside:-2.5,negTangent:-2,negMax:-Math.SQRT2,negOne:-1,zero:0,one:1,max:Math.SQRT2,tangent:2,outside:2.5},h=levels[level],inside=Math.abs(h)<2,tangent=Math.abs(h)===2;
 const half=inside?3*Math.sqrt(1-h*h/4):0,area=inside?Math.abs(h)*half:null;
 const markers=inside?[{p:[-half,h],label:'A'},{p:[half,h],label:'B'},{p:[0,0],label:'O'}]:tangent?[{p:[0,h],label:'T'},{p:[0,0],label:'O'}]:[{p:[0,0],label:'O'}];
 const shapes=<><ellipse cx={px(0)} cy={py(0)} rx="180" ry="120" fill="#eff6ff" fillOpacity="0.4" stroke="#2563eb" strokeWidth="2"/>{inside&&h!==0&&<polygon points={poly([[0,0],[-half,h],[half,h]])} fill="#fed7aa" fillOpacity="0.6" stroke="#d97706"/>}<line x1={px(-4.5)} x2={px(4.5)} y1={py(h)} y2={py(h)} stroke="#d97706" strokeWidth="2"/></>;
 const status=`椭圆 x²/9+y²/4=1，截线高度 h≈${r(h)}。`+(inside?(h===0?'有两个不同交点，但 O 在线上，三角形退化，面积为 0。':`弦长≈${r(2*half)}，面积≈${r(area!)}。`+(level==='max'||level==='negMax'?'此处 h=±√2，达到最大面积 3。':'最大面积为 3，在 h=±√2 取得。')):tangent?'只有一个切点，没有两个不同端点组成的弦。':'没有实交点，不能构成所求三角形。');
 const controls=<label>截线高度<select aria-label="截线高度" value={level} onChange={e=>setLevel(e.target.value)} className="ml-2 rounded border p-2"><option value="negOutside">−2.5</option><option value="negTangent">−2（相切）</option><option value="negMax">−根号 2（最大值）</option><option value="negOne">−1</option><option value="zero">0（退化）</option><option value="one">1</option><option value="max">根号 2（最大值）</option><option value="tangent">2（相切）</option><option value="outside">2.5</option></select></label>;
 return <div className="mt-5"><div className="flex flex-wrap items-center gap-5">{controls}</div><svg role="img" aria-label="解析几何综合与最值交互图形" viewBox="0 0 640 500" className="mx-auto mt-5 h-auto w-full max-w-3xl"><title>解析几何综合与最值：横纵坐标使用相同比例</title><line x1="20" x2="620" y1={py(0)} y2={py(0)} stroke="#cbd5e1"/><line x1={px(0)} x2={px(0)} y1="20" y2="480" stroke="#cbd5e1"/>{shapes}{markers.map((marker,i)=><g key={i}><circle cx={px(marker.p[0])} cy={py(marker.p[1])} r="4" fill="#334155"/><text x={px(marker.p[0])+8} y={py(marker.p[1])+(marker.label==='M'? -12:18)} fontSize="14" fill="#334155">{marker.label}</text></g>)}<text x="615" y={py(0)+18} fontSize="13">x</text><text x={px(0)+10} y="25" fontSize="13">y</text></svg><p role="status" className="mt-3 text-sm leading-8">{mathText(status)}</p><p className="mt-2 text-xs leading-6 text-slate-500">横纵坐标使用同一比例，显示小数是近似值。有限图窗不能替代全体实交点判断；根式选项表示精确参数，仍应按解析核对次数、范围与退化条件。</p></div>;
}
