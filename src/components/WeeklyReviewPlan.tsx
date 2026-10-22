"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { buildReviewTasks, courseForTopic, reviewWeek, taskProgress, type ReviewAttempt, type ReviewState, type ReviewTask } from "@/lib/review-plan";
import { workspaceSetupMessage } from "@/lib/learning-workspace";
type Plan = {
    tasks: ReviewTask[];
    created_at: string;
};
export default function WeeklyReviewPlan({ userId, grade, attempts, states }: {
    userId: string;
    grade: string;
    attempts: ReviewAttempt[];
    states: ReviewState[];
}) {
    const client = useMemo(() => createClient(), []);
    const [plan, setPlan] = useState<Plan | null>(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [busy, setBusy] = useState(false);
    const week = reviewWeek();
    const candidates = buildReviewTasks(attempts, states, grade);
    useEffect(() => { let active = true; void client.from("weekly_review_plans").select("tasks,created_at").eq("user_id", userId).eq("week_start", week).eq("grade", grade).maybeSingle().then(({ data, error }) => { if (active) {
        setPlan(data as Plan | null);
        setMessage(error ? workspaceSetupMessage : "");
        setLoading(false);
    } }); return () => { active = false; }; }, [client, userId, grade, week]);
    async function generate() {
        setBusy(true);
        try {
            const result = await client.from("weekly_review_plans").insert({ user_id: userId, week_start: week, grade, tasks: candidates }).select("tasks,created_at").single();
            if (result.error?.code === "23505") {
                const existing = await client.from("weekly_review_plans").select("tasks,created_at").eq("user_id", userId).eq("week_start", week).eq("grade", grade).single();
                if (existing.error)
                    throw existing.error;
                setPlan(existing.data as Plan);
            }
            else {
                if (result.error)
                    throw result.error;
                setPlan(result.data as Plan);
            }
            setMessage("本周清单已保存。完成复练后刷新报告，核对新结果。");
        }
        catch {
            setMessage("清单保存未完成，请检查数据库脚本及网络后重试。");
        }
        finally {
            setBusy(false);
        }
    }
    const tasks = plan?.tasks ?? candidates;
    return <section className="my-8 rounded-2xl border border-blue-200 bg-white p-5 sm:p-7">
    <h2 className="text-xl font-bold text-slate-900">本周复习清单</h2>
    <p className="mt-3 text-sm leading-7 text-slate-500">{week} 起的一周 · 最多 5 道待复习题。先回看对应课程，再独立复练；清单生成后的作答才计入完成。解答题按自评单独标注。</p>
    {loading ? <p className="mt-4">正在读取清单…</p> : <>
      {!plan && <p className="mt-3 text-sm text-amber-700">下方为建议预览，保存后固定本周清单与比较起点。</p>}
      {tasks.length === 0 ? <p className="mt-4 text-sm text-slate-600">当前年级暂无待复习题。完成专题训练后，这里会根据错题与复练状态给出建议。</p> : <ol className="mt-5 space-y-4">{tasks.map(task => {
                    const progress = plan ? taskProgress(task, attempts, plan.created_at) : null;
                    const course = courseForTopic(task.topic);
                    return <li key={task.questionId} className="rounded-xl bg-slate-50 p-4 text-sm leading-7">
          <p className="font-semibold text-slate-900">{progress?.done ? "✓ " : "○ "}{task.title} · {task.kind === "written" ? "解答题" : "客观题"}</p>
          <p className="text-slate-500">{progress ? progress.done ? progress.written ? "本次自评完整，仍建议隔日复练" : "已重新答对，可继续隔日巩固" : progress.attempted ? "已复练，仍需订正" : "待独立复练" : "待保存清单"}</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2"><Link href={course?.href ?? task.courseHref} className="text-blue-600">回看《{course?.title ?? task.courseTitle}》课程 →</Link><Link href={"/practice/?topic=" + encodeURIComponent(task.topic) + "&question=" + encodeURIComponent(task.questionId)} className="text-blue-600">复练这道题 →</Link></div>
          {progress && !progress.written && <p className="mt-2 text-xs text-slate-500">同专题客观题：清单前 {progress.before === null ? "暂无样本" : `${progress.before}%（${progress.beforeCount} 题次）`}；清单后 {progress.after === null ? "等待新作答" : `${progress.after}%（${progress.afterCount} 题次）`}。样本较少或重复作答时，仅作参考。</p>}
        </li>;
                })}</ol>}
      {!plan && candidates.length > 0 && <button disabled={busy || !!message.includes("尚未连接")} onClick={generate} className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-sm text-white disabled:opacity-40">{busy ? "保存中…" : "保存本周复习清单"}</button>}
    </>}
    <p role="status" className="mt-3 text-sm leading-6 text-slate-600">{message}</p>
  </section>;
}
