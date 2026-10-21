import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HomeLearningDashboard from "@/components/HomeLearningDashboard";
import CurriculumStats from "@/components/CurriculumStats";
import { curricula, curriculumTotals } from "@/data/curriculum";

export default function Home() {
  return <main className="min-h-screen bg-[#fafafa]">
    <SiteHeader />
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">彻凌数学<span className="mx-3 font-normal text-slate-300">·</span><span className="font-normal text-slate-500">高中数学学习平台</span></p>
            <p className="mt-4 text-sm text-slate-500">山海连云，巍巍交大。</p>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.15]">把零散的知识点，<br className="hidden sm:block" />变成完整的数学体系。</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">高一、高二系统学习，高三一轮复习。结合课程讲解、交互图形与三类题型训练，逐步建立完整的数学知识体系。</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {curricula.map(grade => <Link key={grade.id} href={`/${grade.id}`} className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 hover:bg-blue-100">{grade.label}</Link>)}
              <Link href="/practice" className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">专题训练</Link>
              <Link href="/mistakes" className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">我的错题</Link>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-slate-100 pt-6 sm:grid-cols-4">
              {[["覆盖年级", curriculumTotals.grades], ["课程章节", curriculumTotals.chapters], ["课程节数", curriculumTotals.lessons], ["训练题数", curriculumTotals.questions]].map(([label, value]) => <div key={label}><dt className="text-xs text-slate-500">{label}</dt><dd className="mt-2 text-2xl font-bold tabular-nums text-slate-900">{value}</dd></div>)}
            </dl>
          </div>
          <aside aria-label="复习推荐" className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-7">
            <p className="text-xs font-semibold text-blue-600">复习推荐 · 高三一轮复习</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">八章综合训练</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">串联知识与方法，用选择、填空和解答题检验章节掌握情况。解答题提供完整过程，并按关键步骤自评。</p>
            <p className="mt-5 border-y border-blue-100 py-4 text-sm leading-7 text-slate-700">48 道选择题 · 24 道填空题<br />24 道解答题 · 全部配套解析</p>
            <Link href="/grade3/chapter-tests" className="mt-5 flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700">进入章末综合训练 →</Link>
          </aside>
        </div>
      </div>
    </section>
    <HomeLearningDashboard />
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <section id="curriculum" aria-labelledby="curriculum-heading" className="scroll-mt-24 pt-10 sm:pt-12">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 id="curriculum-heading" className="text-2xl font-bold text-slate-900">高中数学课程</h2><p className="mt-2 text-sm leading-7 text-slate-500">按年级选择课程，三个年级的课程与训练均已开放。</p></div><p className="text-xs text-slate-500">章节数、课程数与训练题数按实际内容统计</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {curricula.map(grade => <article key={grade.id} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-semibold tracking-wide text-blue-600">{grade.english}</p><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">全部开放</span></div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">{grade.label}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{grade.description}</p>
            <div className="mt-5"><CurriculumStats chapters={grade.chapters.length} lessons={grade.lessonCount} questions={grade.questionCount} /></div>
            <Link href={`/${grade.id}`} className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-700">进入{grade.label} →</Link>
          </article>)}
        </div>
      </section>
      <section className="pt-10 sm:pt-12" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-2xl font-bold text-slate-900">学习工具</h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">从理解知识到独立解题，再通过错题和报告检查掌握情况。</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "知识课程", description: "按章节学习定义、性质和方法，结合例题与交互图形理解知识。", href: "#curriculum", action: "选择课程" },
            { title: "专题训练", description: "选择、填空自动判题；解答题对照完整解析，分步自评。", href: "/practice", action: "开始训练" },
            { title: "我的错题", description: "回看错误答案、作答草稿和解析，针对薄弱内容再次练习。", href: "/mistakes", action: "复习错题" },
            { title: "学习报告", description: "查看客观题表现、薄弱专题和独立记录的解答题自评。", href: "/report", action: "查看报告" },
          ].map((tool, index) => { const ToolLink = tool.href.startsWith("#") ? "a" : Link; return <ToolLink key={tool.href} href={tool.href} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200"><p className="text-xs font-semibold text-slate-400">0{index + 1}</p><h3 className="mt-3 font-bold text-slate-900">{tool.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{tool.description}</p><p className="mt-4 text-sm font-medium text-blue-600">{tool.action} →</p></ToolLink>; })}
        </div>
      </section>
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-12 sm:p-7"><h2 className="text-xl font-bold text-slate-900">理解 → 练习 → 纠错 → 复习</h2><p className="mt-3 text-sm leading-7 text-slate-600">每次聚焦一个知识点。先理解定义与方法，再独立完成练习，记录错误原因，定期回到错题与薄弱专题复习。</p><a href="#curriculum" className="mt-4 inline-flex text-sm font-medium text-blue-600">选择课程，开始学习 →</a></section>
    </div>
    <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-4 py-7 sm:flex-row sm:items-center sm:px-6 lg:px-8"><div><p className="text-sm font-semibold text-slate-700">彻凌数学</p><p className="mt-2 text-xs text-slate-500">山海连云，巍巍交大。</p></div><nav aria-label="页脚导航" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">{curricula.map(grade => <Link key={grade.id} href={`/${grade.id}`} className="hover:text-blue-600">{grade.label}</Link>)}<Link href="/practice" className="hover:text-blue-600">专题训练</Link><Link href="/mistakes" className="hover:text-blue-600">我的错题</Link><Link href="/report" className="hover:text-blue-600">学习报告</Link></nav></div></footer>
  </main>;
}
