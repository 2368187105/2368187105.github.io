"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { workspaceSetupMessage } from "@/lib/learning-workspace";
type Record = {
    id: string;
    chapter: string;
    title: string;
    objective_score: number;
    self_score: number;
    submitted_at: string;
};
export default function AssessmentHistory({ userId }: {
    userId: string;
}) {
    const client = useMemo(() => createClient(), []);
    const [rows, setRows] = useState<Record[]>([]), [message, setMessage] = useState("正在读取测评记录…");
    useEffect(() => { let active = true; void client.from("chapter_assessments").select("id,chapter,title,objective_score,self_score,submitted_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(20).then(({ data, error }) => { if (active) {
        setRows(data ?? []);
        setMessage(error ? workspaceSetupMessage : "");
    } }); return () => { active = false; }; }, [client, userId]);
    return <section className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><h2 className="text-xl font-bold text-slate-900">章末测评记录</h2><p className="mt-3 text-sm leading-7 text-slate-500">最近 20 次已保存测评。总分含解答题自评；客观题正确率仅统计选择、填空。重复保存同一场测评不会重复计数。</p>{message ? <p role="status" className="mt-4 text-sm text-slate-500">{message}</p> : rows.length === 0 ? <p className="mt-4 text-sm text-slate-600">暂无测评记录。<Link href="/grade3/chapter-tests/" className="text-blue-600">选择章节开始 →</Link></p> : <ul className="mt-4 space-y-3">{rows.map(row => <li key={row.id} className="rounded-xl bg-slate-50 p-4 text-sm leading-7"><Link href={`/assessment/?chapter=${encodeURIComponent(row.chapter)}&run=${row.id}`} className="font-semibold text-blue-600">{row.title} · {row.objective_score + row.self_score}/60 分 →</Link><p>客观题 {row.objective_score}/36 · 解答题自评 {row.self_score}/24</p><p className="text-xs text-slate-500">{new Date(row.submitted_at).toLocaleString("zh-CN")}</p></li>)}</ul>}</section>;
}
