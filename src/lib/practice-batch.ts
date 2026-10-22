import type { Question } from "@/data/questions";
import type { SupabaseClient } from "@supabase/supabase-js";
import { checkAnswer } from "@/lib/answer-checking";

export type BatchAnswer = { text: string; paper: boolean; attempted: boolean; checks: number[] };
export type BatchDraft = { version: 1; ids: string[]; answers: Record<string, BatchAnswer>; stage: "answer" | "review" | "submitted"; submittedAt: string | null; saved: boolean };
export const emptyBatchAnswer = (): BatchAnswer => ({ text: "", paper: true, attempted: false, checks: [] });
export function newPracticeBatch(items: Question[]): BatchDraft {
  return { version: 1, ids: items.map(q => q.id), answers: {}, stage: "answer", submittedAt: null, saved: false };
}
export function batchAnswered(q: Question, answer?: BatchAnswer) {
  return !!answer && (q.kind === "written" && answer.paper ? answer.attempted : !!answer.text.trim());
}
export function batchAssessed(q: Question, answer?: BatchAnswer) {
  return q.kind !== "written" || !!answer && (q.checkpoints ?? []).every((_, i) => [0, 1, 2].includes(answer.checks[i]));
}
export function batchRecord(q: Question, answer: BatchAnswer) {
  return q.kind === "written" ? { answer: "self:" + JSON.stringify({ mode: answer.paper ? "paper" : "typed", work: answer.text.trim(), checks: answer.checks }), correct: answer.checks.every(n => n === 2) }
    : { answer: answer.text.trim(), correct: checkAnswer(q, answer.text) };
}
export function readPracticeBatch(raw: string | null, items: Question[]): BatchDraft | null {
  try {
    const value = JSON.parse(raw ?? "null") as BatchDraft;
    if (!value || value.version !== 1 || JSON.stringify(value.ids) !== JSON.stringify(items.map(q => q.id)) || !["answer", "review", "submitted"].includes(value.stage) || typeof value.saved !== "boolean" || !value.answers || typeof value.answers !== "object" || Array.isArray(value.answers)) return null;
    for (const [id, a] of Object.entries(value.answers)) {
      const q = items.find(q => q.id === id);
      if (!q || !a || typeof a.text !== "string" || a.text.length > (q.kind === "written" ? 2000 : 200) || typeof a.paper !== "boolean" || typeof a.attempted !== "boolean" || !Array.isArray(a.checks) || a.checks.length > (q.checkpoints?.length ?? 0) || !a.checks.every(n => n === null || [0, 1, 2].includes(n))) return null;
      if (q.kind !== "fill" && q.kind !== "written" && a.text && !q.options.some(o => o.key === a.text)) return null;
    }
    if (value.stage !== "answer" && !items.every(q => batchAnswered(q, value.answers[q.id]))) return null;
    if (value.stage === "submitted" && (!value.submittedAt || !Number.isFinite(Date.parse(value.submittedAt)) || !items.every(q => batchAssessed(q, value.answers[q.id])))) return null;
    if (value.stage !== "submitted" && (value.submittedAt !== null || value.saved)) return null;
    return value;
  } catch { return null; }
}

// Stable submission time survives refresh. A retry checks existing rows first;
// confirmed attempts are not inserted again when only mistake synchronization failed.
export async function savePracticeBatch(client: SupabaseClient, userId: string, items: Question[], draft: BatchDraft) {
  if (!readPracticeBatch(JSON.stringify(draft), items) || draft.stage !== "submitted") return { saved: false, message: "题组数据不完整，请检查作答。" };
  try {
    const { data: { user }, error: authError } = await client.auth.getUser();
    if (authError || user?.id !== userId) return { saved: false, message: "登录状态已变化，请登录原账号后保存。" };
    const { data, error } = await client.from("practice_attempts").select("question_id,selected_answer,is_correct")
      .eq("user_id", userId).eq("created_at", draft.submittedAt!).in("question_id", draft.ids);
    if (error || !data) return { saved: false, message: "云端记录读取失败，尚未重新写入。请检查网络后重试保存。" };
    const missing = items.filter(q => !data.some(row => row.question_id === q.id && row.selected_answer === batchRecord(q, draft.answers[q.id]).answer && row.is_correct === batchRecord(q, draft.answers[q.id]).correct));
    if (missing.length) {
      const { error: insertError } = await client.from("practice_attempts").insert(missing.map(q => {
        const result = batchRecord(q, draft.answers[q.id]);
        return { user_id: userId, question_id: q.id, topic: q.topic, selected_answer: result.answer, correct_answer: q.correctAnswer, is_correct: result.correct, created_at: draft.submittedAt };
      }));
      if (insertError) return { saved: false, message: "本地已判题，云端保存未确认。请保持此题组，检查网络后重试保存。" };
    }
    for (const q of items) {
      const result = batchRecord(q, draft.answers[q.id]);
      if (result.correct) continue;
      const mistake = { user_id: userId, question_id: q.id, topic: q.topic, question: q.question, user_answer: result.answer, correct_answer: q.correctAnswer, explanation: q.explanation };
      const { error: insertError } = await client.from("mistakes").insert(mistake);
      if (insertError?.code === "23505") {
        const { data: updated, error: updateError } = await client.from("mistakes").update(mistake).eq("user_id", userId).eq("question_id", q.id).select("question_id,user_answer").maybeSingle();
        if (updateError || updated?.question_id !== q.id || updated?.user_answer !== result.answer) return { saved: false, message: "整组答题记录已保存，但部分错题更新未确认。可重试同步，已确认的答题记录不会重复写入。" };
      } else if (insertError) return { saved: false, message: "整组答题记录已保存，但部分错题未同步。可重试保存，已确认的答题记录不会重复写入。" };
    }
    return { saved: true, message: "整组记录已保存到云端，需要复练的题目已同步到错题本。解答题自评不计入客观题正确率。" };
  } catch { return { saved: false, message: "云端连接中断，本地结果和草稿仍保留。请检查网络后重试保存。" }; }
}
