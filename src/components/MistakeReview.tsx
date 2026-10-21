"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ownRows, workspaceSetupMessage } from "@/lib/learning-workspace";
import { reviewCauses, reviewStatuses, type ReviewState } from "@/lib/review-plan";
export function useMistakeReviews(userId: string | null) {
    const client = useMemo(() => createClient(), []);
    const [states, setStates] = useState<ReviewState[]>([]);
    const [error, setError] = useState("");
    const refresh = useCallback(async () => {
        if (!userId) {
            setStates([]);
            return;
        }
        try {
            setStates(await ownRows<ReviewState>(client, "mistake_reviews", userId, "updated_at"));
            setError("");
        }
        catch {
            setError(workspaceSetupMessage);
        }
    }, [client, userId]);
    useEffect(() => { let active = true; if (!userId)
        return; void ownRows<ReviewState>(client, "mistake_reviews", userId, "updated_at").then(rows => { if (active) {
        setStates(rows);
        setError("");
    } }).catch(() => { if (active)
        setError(workspaceSetupMessage); }); return () => { active = false; }; }, [client, userId]);
    return { states, error, refresh };
}
type Event = {
    id: number;
    cause: string;
    status: string;
    event_type: string;
    result: boolean | null;
    created_at: string;
};
export default function MistakeReview({ userId, questionId, state, onSaved, unavailable }: {
    userId: string;
    questionId: string;
    state?: ReviewState;
    onSaved: () => Promise<void>;
    unavailable: boolean;
}) {
    const client = useMemo(() => createClient(), []);
    const [cause, setCause] = useState(state?.cause ?? "未分类");
    const [status, setStatus] = useState(state?.status ?? "待复习");
    const [message, setMessage] = useState("");
    const [busy, setBusy] = useState(false);
    const [events, setEvents] = useState<Event[] | null>(null);
    async function save() {
        setBusy(true);
        setMessage("");
        try {
            const result = state ? await client.from("mistake_reviews").update({ cause, status }).eq("user_id", userId).eq("question_id", questionId).select("question_id").single()
                : await client.from("mistake_reviews").insert({ user_id: userId, question_id: questionId, cause, status }).select("question_id").single();
            if (result.error || result.data?.question_id !== questionId)
                throw result.error;
            await onSaved();
            setEvents(null);
            setMessage("已保存，原错题与历史记录继续保留。");
        }
        catch {
            setMessage("保存未完成，请刷新后重试；分类草稿仍在本页。");
        }
        finally {
            setBusy(false);
        }
    }
    async function history() {
        try {
            const { data, error } = await client.from("mistake_review_events").select("*").eq("user_id", userId).eq("question_id", questionId).order("created_at", { ascending: false }).order("id", { ascending: false }).limit(20);
            if (error)
                throw error;
            setEvents(data);
            setMessage("");
        }
        catch {
            setMessage("复习历史暂时无法读取，请稍后重试。");
        }
    }
    return <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm">
    <p className="font-semibold text-slate-800">复习管理 · {state?.status ?? "待复习"}</p>
    <p className="mt-2 leading-6 text-slate-500">再次答错会回到待复习；答对进入复练中。已掌握由你确认，题目和历史仍保留。客观题连续答对 {state?.correct_streak ?? 0} 次。</p>
    <div className="mt-3 flex flex-wrap items-end gap-3">
      <label className="grid gap-1">错因<select aria-label="错因" value={cause} onChange={e => setCause(e.target.value as typeof cause)} className="rounded-lg border border-slate-200 bg-white p-2">{reviewCauses.map(value => <option key={value}>{value}</option>)}</select></label>
      <label className="grid gap-1">掌握状态<select aria-label="掌握状态" value={status} onChange={e => setStatus(e.target.value as typeof status)} className="rounded-lg border border-slate-200 bg-white p-2">{reviewStatuses.map(value => <option key={value}>{value}</option>)}</select></label>
      <button disabled={busy || unavailable} onClick={save} className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-40">{busy ? "保存中…" : "保存复习状态"}</button>
      <button disabled={unavailable} onClick={history} className="rounded-lg border border-slate-200 bg-white px-3 py-2 disabled:opacity-40">查看复习历史</button>
    </div>
    <p role="status" className="mt-2 text-slate-600">{message}</p>
    {events && <div className="mt-3 space-y-2"><p className="text-xs text-slate-500">最近 20 条状态变化；更早的历史仍保存在云端。</p>{events.length === 0 ? <p>暂无复习历史。</p> : events.map(event => <p key={event.id} className="rounded-lg bg-white p-2 text-xs leading-6">{new Date(event.created_at).toLocaleString("zh-CN")} · {event.event_type === "practice" ? event.result ? "复练答对 / 自评完整" : "复练需订正" : event.event_type === "created" ? "建立复习档案" : "更新分类或状态"} · {event.cause} · {event.status}</p>)}</div>}
  </div>;
}
