import type { SupabaseClient } from "@supabase/supabase-js";
import type { Question } from "@/data/questions";

// Keep the existing tables/columns and question IDs so older learning records
// remain readable. A failed cloud write never changes the local answer result.
export async function savePracticeRecord(client: SupabaseClient, userId: string, question: Question, answer: string, correct: boolean) {
  const label = question.kind === "written" ? "自评记录" : "答题记录";
  try {
    const { error } = await client.from("practice_attempts").insert({
      user_id: userId, question_id: question.id, topic: question.topic,
      selected_answer: answer, correct_answer: question.correctAnswer, is_correct: correct,
    });
    if (error) return { saved: false, message: "本地结果已生成，但云端练习记录保存失败，请检查网络后重试。" };
    if (!correct) {
      const mistake = {
        user_id: userId, question_id: question.id, topic: question.topic,
        question: question.question, user_answer: answer,
        correct_answer: question.correctAnswer, explanation: question.explanation,
      };
      const { error: insertError } = await client.from("mistakes").insert(mistake);
      if (insertError?.code === "23505") {
        // Repeated errors should show the latest answer/self-assessment rather
        // than silently keep an older draft. Never touch another user's row.
        const { data: updatedMistake, error: updateError } = await client.from("mistakes").update(mistake)
          .eq("user_id", userId).eq("question_id", question.id)
          .select("question_id,user_answer").maybeSingle();
        // Row-level security can hide every matching row without returning an
        // error. Confirm the returned row before claiming the answer changed.
        if (updateError || updatedMistake?.question_id !== question.id || updatedMistake?.user_answer !== answer) {
          return { saved: true, message: "练习记录已保存，但错题更新未确认，请稍后重试。" };
        }
      } else if (insertError) return { saved: true, message: "练习记录已保存，但错题保存失败，请稍后重试。" };
      return { saved: true, message: `${label}已保存，需要复练的题目已加入错题本。` };
    }
    return { saved: true, message: `${label}已保存到云端。` };
  } catch {
    return { saved: false, message: "云端连接未完成，本地结果仍可查看。请检查网络后重新作答保存。" };
  }
}
