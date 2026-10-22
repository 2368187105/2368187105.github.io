"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SearchForm from "@/components/SearchForm";
import { searchSite } from "@/lib/site-search";
import { mathText } from "@/components/MathText";
import { vectorText } from "@/components/VectorText";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState("all");
  const [kind, setKind] = useState("all");
  const [limit, setLimit] = useState(20);
  useEffect(() => {
    const read = () => { setQuery((new URLSearchParams(window.location.search).get("q") ?? "").slice(0, 100)); setLimit(20); };
    const frame = requestAnimationFrame(read);
    window.addEventListener("popstate", read);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("popstate", read); };
  }, []);
  const all = searchSite(query, grade);
  const results = kind === "all" ? all : all.filter(r => r.kind === kind);
  return <main className="math-copy min-h-screen bg-slate-50"><SiteHeader /><div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
    <h1 className="text-3xl font-bold text-slate-900">搜索课程和题目</h1>
    <p className="mt-3 text-sm leading-7 text-slate-500">按课程名称、知识点或题干关键词查找。多个词用空格分隔，例如“导数 单调”。</p>
    <div className="mt-6"><SearchForm key={query} initial={query} /></div>
    <div className="mt-6 flex flex-wrap items-center gap-3"><label className="text-sm">年级 <select value={grade} onChange={e => { setGrade(e.target.value); setLimit(20); }} className="ml-2 rounded-lg border border-slate-200 bg-white p-2"><option value="all">全部年级</option><option value="grade1">高一</option><option value="grade2">高二</option><option value="grade3">高三</option></select></label>
      {[["all", "全部"], ["course", "课程"], ["question", "题目"]].map(([value, label]) => <button key={value} aria-pressed={kind === value} onClick={() => { setKind(value); setLimit(20); }} className={`rounded-lg border px-3 py-2 text-sm ${kind === value ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white"}`}>{label}{query.trim() ? ` ${value === "all" ? all.length : all.filter(r => r.kind === value).length}` : ""}</button>)}
    </div>
    <p role="status" className="mt-6 text-sm text-slate-500">{query.trim() ? `“${query}”找到 ${results.length} 项结果` : "输入关键词开始搜索。"}</p>
    {query.trim() && !results.length && <p className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7">没有匹配结果。试试更短的知识点名称，或切换到全部年级。</p>}
    <div className="mt-4 space-y-3">{results.slice(0, limit).map(result => <Link href={result.href} key={result.id} className="block min-w-0 rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300"><div className="flex flex-wrap items-center gap-2 text-xs text-slate-500"><span className="rounded bg-blue-50 px-2 py-1 text-blue-700">{result.typeLabel}</span><span>{({ grade1: "高一", grade2: "高二", grade3: "高三" })[result.grade]}</span></div><h2 className="mt-3 font-semibold text-slate-900">{result.title}</h2><div className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{result.detail.includes("向量") ? vectorText(result.detail) : mathText(result.detail)}</div><p className="mt-3 text-xs font-medium text-blue-600">{result.kind === "course" ? "学习这节课" : "练习这道题"} →</p></Link>)}</div>
    {results.length > limit && <button onClick={() => setLimit(n => n + 20)} className="mt-6 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm">加载更多（已显示 {Math.min(limit, results.length)} / {results.length}）</button>}
  </div></main>;
}
