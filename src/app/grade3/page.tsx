import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = { title: "高三数学 · 一轮复习 | 彻凌数学" };
const modules = [
  { name: "集合与逻辑", href: "/grade3/sets-logic", status: "第一批已开放 · 5 节 · 45 道训练" },
  { name: "函数与导数", href: "/grade3/functions-derivatives", status: "第二批已开放 · 8 节 · 72 道新题" },
  { name: "三角函数与解三角形", href: "/grade3/trigonometry", status: "第三批已开放 · 6 节 · 54 道训练" }, { name: "平面向量", href: "/grade3/plane-vectors", status: "第四批已开放 · 6 节 · 54 道训练" }, { name: "数列", href: "/grade3/sequences", status: "第五批已开放 · 6 节 · 54 道训练" },
  { name: "立体几何与空间向量", href: "/grade3/solid-geometry", status: "第六批已开放 · 6 节 · 54 道训练" }, { name: "解析几何", href: "/grade3/analytic-geometry", status: "第七批已开放 · 7 节 · 63 道训练" }, { name: "计数、概率与统计", href: "/grade3/probability-statistics", status: "第八批已开放 · 8 节 · 72 道训练" },
];
export default function Grade3Page() {
  return <main className="min-h-screen bg-[#fafafa]"><SiteHeader />
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link href="/" className="text-sm text-blue-600">← 首页</Link>
      <p className="mt-10 text-sm font-semibold tracking-wider text-blue-600">GRADE 12 · 一轮复习</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">高三数学 · 系统复习</h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-600">面向江苏考生，按新高考全国Ⅰ卷方向建设复习内容。依次梳理知识、方法与规范书写，用选择题、填空题和解答题查漏补缺。八个模块均已开放，可按顺序复习，也可针对薄弱内容训练。</p>
      <section className="mt-9 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-semibold text-blue-600">最新开放 · 第八模块</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">计数、概率与统计</h2>
        <p className="mt-4 leading-8 text-slate-600">8 节课程、16 个典型例题、32 道选择题、24 道填空题、16 道解答题。从排列组合、二项式定理到概率分布与统计推断，逐步写清模型条件、计算过程与结论的适用范围。</p>
        <Link href="/grade3/probability-statistics" className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">开始计数、概率与统计复习 →</Link>
      </section>
      <p className="mt-5 text-sm leading-7 text-slate-500">当前已开放集合与逻辑、函数与导数、三角函数与解三角形、平面向量、数列、立体几何与空间向量、解析几何、计数概率与统计八个模块，共 52 节复习课、468 道配套训练题，另有 96 道章末综合训练题，并保留 9 道原有函数复练题。</p>
      <section className="mt-12"><h2 className="text-2xl font-bold text-slate-900">一轮复习 · 八个模块</h2>
        <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-5">{modules.map((module, index) => <div key={module.name} className="flex flex-wrap items-center justify-between gap-3 py-5">
          {module.href ? <Link href={module.href} className="font-medium text-blue-700">{index + 1}. {module.name} →</Link> : <span className="text-slate-600">{index + 1}. {module.name}</span>}
          <span className="text-sm text-slate-500">{module.status ?? "准备中"}</span>
        </div>)}</div>
      </section>
      <section className="mt-8 rounded-2xl border border-blue-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-900">八章综合训练已开放</h2><p className="mt-3 leading-8 text-slate-600">每章 12 题，共 48 道选择、24 道填空、24 道解答。分为基础巩固、综合应用与提升，配套完整分步解析。</p><Link href="/grade3/chapter-tests" className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white">进入八章综合训练 →</Link></section>
      <aside className="mt-8 rounded-xl bg-blue-50 p-6 text-sm leading-8 text-slate-600">填空题提供完整推导；解答题先独立作答，再按小问与关键步骤自评。学习报告分别展示客观题成绩和解答题自评。需要补基础时，可从每节课返回对应基础课程。</aside>
    </article>
  </main>;
}
