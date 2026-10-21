"use client";

import Link from "next/link";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SiteHeader from "@/components/SiteHeader";

const lessons = [
  {
    "title": "函数的概念、定义域与值域",
    "slug": "domain-range",
    "topic": "高三函数与导数·定义域与值域"
  },
  {
    "title": "单调性、奇偶性与周期性",
    "slug": "properties",
    "topic": "高三函数与导数·函数性质"
  },
  {
    "title": "基本初等函数与图象变换",
    "slug": "elementary-functions",
    "topic": "高三函数与导数·基本初等函数"
  },
  {
    "title": "函数零点与方程根数",
    "slug": "zeros-equations",
    "topic": "高三函数与导数·零点与方程"
  },
  {
    "title": "导数运算与切线方程",
    "slug": "rules-tangent",
    "topic": "高三函数与导数·导数运算与切线"
  },
  {
    "title": "导数、单调性与极值最值",
    "slug": "monotonic-extrema",
    "topic": "高三函数与导数·单调性与最值"
  },
  {
    "title": "含参不等式与恒成立问题",
    "slug": "parameter-inequalities",
    "topic": "高三函数与导数·含参不等式"
  },
  {
    "title": "导数综合与分类讨论",
    "slug": "comprehensive",
    "topic": "高三函数与导数·导数综合"
  }
];

const examples = [
  {
    title: "定义域与切线：先核对条件，再计算",
    question: "求函数的定义域，以及在 x=1 处的切线方程。",
    formula: String.raw`f(x)=\ln x+x^2`,
    cue: "出现对数先检查真数；求某点处的切线，要同时求函数值和导数值。",
    steps: ["由 x>0 得定义域为 (0，+∞)。", "f′(x)=1/x+2x，所以 f(1)=1，f′(1)=3。", "代入点斜式 y−1=3(x−1)，得到 y=3x−2。"],
    error: "不要把 f′(1)=3 当作切点的纵坐标。题目说“在 x=1 处”，才可以直接把 x=1 当作切点横坐标。",
  },
  {
    title: "单调性与最值：先列表，再比较",
    question: "求函数在 [−2，2] 上的单调区间和最大、最小值。",
    formula: String.raw`f(x)=x^3-3x,\qquad f'(x)=3(x-1)(x+1)`,
    cue: "闭区间最值题，导数用于找候选点，最后还要比较端点。",
    steps: ["导数在 (−2，−1)、(1，2) 上为正，在 (−1，1) 上为负。", "因此在 [−2，−1]、[1，2] 上递增，在 [−1，1] 上递减。", "f(−2)=−2，f(−1)=2，f(1)=−2，f(2)=2。最大值为 2，最小值为 −2。"],
    error: "极值描述局部变化，最值比较整个指定区间。不要只求驻点，也不要把两个递增区间合写成它们的并集并称在并集上递增。",
  },
  {
    title: "零点与参数：把根数变成交点数",
    question: "讨论方程 x³−3x=a 的不同实根个数。",
    formula: String.raw`f(-1)=2,\qquad f(1)=-2`,
    cue: "参数独立出现在等号一侧时，可以考虑函数图象与水平线的交点。",
    steps: ["利用上一例的单调性，函数从负无穷增至 2，再减至 −2，最后增向正无穷。", "−2<a<2 时三个单调区间各有一个交点，故有三个不同实根。", "a=±2 时有两个不同实根；a>2 或 a<−2 时只有一个实根。"],
    error: "边界 a=±2 必须单独讨论。相切处的重根在“不同实根个数”中只算一次。",
  },
  {
    title: "恒成立不等式：分离参数，求全域最值",
    question: "若对一切 x>0 都有 ln x≤ax，求实数 a 的范围。",
    formula: String.raw`a\ge\frac{\ln x}{x},\qquad g'(x)=\frac{1-\ln x}{x^2}`,
    cue: "先确认除数 x 为正，再分离参数。恒成立要求参数覆盖函数的全部取值。",
    steps: ["设 g(x)=ln x/x，定义域为 (0，+∞)。", "0<x<e 时 g′(x)>0；x>e 时 g′(x)<0，所以 g 在 x=e 处取得全域最大值 1/e。", "因此 a≥1/e；边界可以取到，因为原题使用非严格不等号。"],
    error: "不能把“对一切 x”替换成“存在 x”。分离参数前必须检查乘除因子的正负与是否为零。",
  },
];

export default function FunctionsDerivativesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-700">
      <SiteHeader />
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Link href="/grade3" className="text-sm text-blue-600 hover:underline">← 高三复习目录</Link>
        <p className="mt-8 text-sm font-semibold text-blue-600">一轮复习 · 第二章 · 八节已开放</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">函数与导数</h1>
        <p className="mt-5 leading-8">从函数概念与性质到导数综合，八节课程包含 16 个典型例题、32 道选择题、24 道填空题和 16 道解答题。原有 4 个汇总例题与 9 道选择题继续保留，可用于复练。</p>
        <nav aria-label="专题内容" className="my-8 flex flex-wrap gap-3">
          {[["lessons", "八节复习课"], ["review", "基础回顾"], ["examples", "典型题型"], ["practice", "分层练习"], ["review-errors", "错因与复练"]].map(([id, name]) => <a key={id} href={`#${id}`} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm hover:border-blue-400">{name}</a>)}
        </nav>
        <section id="lessons" className="mb-10 scroll-mt-24"><h2 className="text-2xl font-bold text-slate-900">八节系统复习课</h2><p className="mt-3 leading-8">建议依次学习，每节包含知识梳理、图象探索、两个例题和 9 道配套训练题，涵盖选择、填空、解答。解答题先独立书写，再按完整解析逐步自评。</p><div className="mt-5 grid gap-4 sm:grid-cols-2">{lessons.map((lesson,index)=><Link key={lesson.slug} href={"/grade3/functions-derivatives/"+lesson.slug} className="rounded-xl border border-blue-200 bg-white p-5 transition hover:border-blue-500"><p className="text-sm text-blue-600">2.{index+1} · 9 道训练</p><h3 className="mt-3 text-lg font-semibold text-slate-900">{lesson.title}</h3><p className="mt-3 text-sm text-slate-500">4 选择 · 3 填空 · 2 解答</p><p className="mt-4 text-sm font-medium text-blue-600">开始本节复习 →</p></Link>)}</div></section>
        <section id="review" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">01 基础回顾</h2>
          <ul className="mt-5 list-disc space-y-4 pl-5 leading-8">
            <li><strong>定义域：</strong>分母不为零，偶次根式的被开方数非负，对数真数为正。多个条件取交集。</li>
            <li><strong>求导：</strong>先辨认和、积、商或复合结构，再用相应法则；复合函数别漏乘内层导数。</li>
            <li><strong>单调性：</strong>在区间内可导时，导数恒正可推出递增，恒负可推出递减。个别点导数为零不妨碍严格单调，例如 x³。</li>
            <li><strong>极值：</strong>对本专题中的可导函数，检查驻点两侧导数是否变号。正变负为极大值，负变正为极小值。</li>
            <li><strong>最值：</strong>连续函数在闭区间上取最值。比较端点、区间内驻点及可能的不可导点；本专题例题在区间内均可导。</li>
          </ul>
          <div className="my-5 overflow-x-auto"><BlockMath math={String.raw`(x^n)'=nx^{n-1},\quad (\ln x)'=\frac1x\ (x>0),\quad (e^x)'=e^x`} /></div>
          <p className="text-sm leading-7 text-slate-500">幂函数求导公式在函数定义且可导的范围内使用。</p>
          <h3 className="mt-6 font-semibold text-slate-900">基础还不熟悉？先回到这些课程</h3>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-700">
            <Link href="/grade1/functions/domain-range">定义域与值域 →</Link>
            <Link href="/grade1/functions/monotonicity">函数单调性 →</Link>
            <Link href="/grade2/derivatives/operations">导数运算 →</Link>
            <Link href="/grade2/derivatives/applications">导数的应用 →</Link>
          </div>
        </section>
        <section id="examples" className="mt-10 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900">02 典型题型</h2>
          <div className="mt-5 space-y-5">
            {examples.map((example, i) => (
              <div key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
                <p className="text-sm text-blue-600">例题 {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{example.title}</h3>
                <p className="mt-4 leading-8">{example.question}</p>
                <div className="overflow-x-auto"><BlockMath math={example.formula} /></div>
                <p className="mt-4 border-l-2 border-blue-300 pl-4 leading-7"><strong>识别方法：</strong>{example.cue}</p>
                <details className="mt-5 rounded-xl bg-slate-50 p-4">
                  <summary className="cursor-pointer font-medium text-blue-700">展开完整解析与错因</summary>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 leading-8">{example.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                  <p className="mt-4 leading-7 text-amber-800"><strong>易错提醒：</strong>{example.error}</p>
                </details>
              </div>
            ))}
          </div>
        </section>
        <section id="practice" className="mt-10 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900">03 原有分层复练</h2>
          <p className="mt-3 leading-8">以下保留原有 9 道原创选择题，不是真题。新建三种题型训练请从上方八节复习课进入。建议从基础档开始；某档出错时先阅读解析，回看对应例题后再复练。登录后沿用专题训练的云端记录与错题功能。</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["基础巩固", "定义域、切线与驻点", "对应例题 1、2"],
              ["综合应用", "闭区间最值、零点与单调性参数", "对应例题 2、3"],
              ["进阶挑战", "对数函数、分离参数与量词", "对应例题 3、4"],
            ].map(([name, desc, hint], i) => <Link key={name} href={`/practice?topic=${encodeURIComponent((["高三函数与导数·基础巩固","高三函数与导数·综合应用","高三函数与导数·进阶挑战"] as const)[i])}`} className="rounded-xl border border-blue-200 bg-white p-5 transition hover:border-blue-500"><h3 className="text-lg font-semibold text-slate-900">{name}</h3><p className="mt-3 leading-7">{desc}</p><p className="mt-2 text-sm text-slate-500">{hint}</p><p className="mt-5 font-medium text-blue-700">开始 3 道练习 →</p></Link>)}
          </div>
        </section>
        <section id="review-errors" className="mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">04 错因与复练</h2>
          <p className="mt-4 leading-8">复盘时先确定错在哪一步：漏定义域、求导错误、符号判断、遗漏端点、漏参数边界，还是混淆“恒成立”和“存在”。重新独立完成推导，再看答案。</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-8"><li>定义域、切线出错：回看例题 1，再练基础档。</li><li>极值、最值、根数出错：回看例题 2、3，画出单调变化再练综合档。</li><li>参数范围出错：回看例题 4，写清量词和取等条件后再练进阶档。</li></ul>
          <div className="mt-6 flex flex-wrap gap-5 text-blue-700"><Link href="/mistakes">进入错题本，选择高三 →</Link><Link href="/report">查看学习报告，选择高三 →</Link></div>
        </section>
      <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><h2 className="text-xl font-bold text-slate-900">章末综合训练</h2><p className="mt-3 text-sm leading-8 text-slate-600">完成本章后，用 6 道选择、3 道填空和 3 道解答题检验知识联系。包含基础巩固、综合应用与提升，解析逐步展开。</p><Link href={"/practice/?topic="+encodeURIComponent("高三函数与导数·章末综合")} className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-3 text-sm text-white">开始本章综合训练 →</Link><Link href="/grade3/chapter-tests" className="ml-4 inline-block text-sm text-blue-600">查看八章综合训练 →</Link></section></article>
    </main>
  );
}
