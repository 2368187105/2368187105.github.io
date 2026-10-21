import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import CurriculumStats from "@/components/CurriculumStats";
import { curriculumFor, type CurriculumId } from "@/data/curriculum";

export default function GradeDirectory({ id }: { id: CurriculumId }) {
  const grade = curriculumFor(id);
  return <main className="min-h-screen bg-[#fafafa]">
    <SiteHeader />
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <nav aria-label="当前位置" className="flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/" className="hover:text-blue-600">首页</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-slate-700">{grade.label}</span></nav>
      <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-semibold tracking-wide text-blue-600">{grade.english}</p><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">全部开放</span></div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{grade.label}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{grade.description}</p>
        {id === "grade3" && <p className="mt-2 text-sm leading-7 text-slate-500">一轮复习 · 选择、填空与解答题配套完整解析，解答题支持分步自评。</p>}
        <div className="mt-6"><CurriculumStats chapters={grade.chapters.length} lessons={grade.lessonCount} questions={grade.questionCount} /></div>
        <div className="mt-5 flex flex-wrap gap-3"><Link href={grade.chapters[0].lessons[0].href} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">开始学习 →</Link><Link href={`/practice/?grade=${id}`} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">专题训练</Link><Link href={`/report/?grade=${id}`} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">学习报告</Link></div>
      </section>
      <section aria-labelledby="directory-heading" className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 id="directory-heading" className="text-2xl font-bold text-slate-900">课程目录</h2><p className="mt-2 text-sm leading-7 text-slate-500">按章节学习，也可直接选择具体课程。</p></div><p className="text-xs text-slate-500">开放数量不代表个人学习进度</p></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {grade.chapters.map((chapter, index) => <article key={chapter.href} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold text-blue-600">第 {String(index + 1).padStart(2, "0")} 章</p>
            <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900"><Link href={chapter.href} className="hover:text-blue-600">{chapter.title}</Link></h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{chapter.description}</p>
            <p className="mt-3 text-xs text-slate-500">{chapter.lessons.length} 节课程 · {chapter.questionCount} 道训练题</p>
            <ol className="mt-4 flex-1 space-y-2 border-t border-slate-100 pt-4">
              {chapter.lessons.map((lesson, lessonIndex) => <li key={lesson.href}><Link href={lesson.href} className="flex gap-2 rounded-lg py-1.5 text-sm leading-6 text-slate-600 hover:text-blue-600"><span className="shrink-0 tabular-nums text-slate-400">{index + 1}.{lessonIndex + 1}</span><span>{lesson.title}</span></Link></li>)}
            </ol>
            <Link href={chapter.href} className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium text-blue-600 hover:text-blue-700">进入本章目录 →</Link>
          </article>)}
        </div>
      </section>
      {id === "grade3" && <section className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 sm:p-7"><h2 className="text-xl font-bold text-slate-900">章末综合训练</h2><p className="mt-3 text-sm leading-7 text-slate-600">八章共 96 道综合训练，含 48 道选择、24 道填空、24 道解答题，均配套完整解析。可进行 45 分钟限时测评，也可打印题目与完整解析。已包含在上方训练题总数中。</p><p className="mt-2 text-xs leading-6 text-slate-500">全部 573 道训练题包含 468 道课程配套题、96 道章末综合题与 9 道函数进阶复练题。客观题自动判分，解答题核对解析后分步自评。</p><Link href="/grade3/chapter-tests" className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white">进入章末综合训练 →</Link></section>}
      <Link href="/" className="mt-8 inline-flex text-sm text-slate-500 hover:text-blue-600">← 返回首页</Link>
    </div>
  </main>;
}
