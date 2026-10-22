import { curricula, type CurriculumId } from "@/data/curriculum";
import { questions, type Question } from "@/data/questions";
import { reviewVariantGroups } from "@/data/review-variants";
import { courseForTopic, type ReviewAttempt, type ReviewState } from "./review-plan";

const questionMap = new Map(questions.map(q => [q.id, q]));
const dayMs = 86400000;
export function learningDay(time: number | string | Date) {
  return Math.floor((new Date(time).getTime() + 8 * 3600000) / dayMs);
}
export function questionGrade(question: Question) {
  return courseForTopic(question.topic)?.grade;
}
export function practiceHref(question: Question, queue: string[] = []) {
  const query = new URLSearchParams({ topic: question.topic, question: question.id });
  if (queue.length) query.set("queue", queue.join(","));
  return "/practice/?" + query;
}
export function practiceQueue(value: string | null): Question[] {
  const valid = [...new Set((value ?? "").split(","))].slice(0, 5).flatMap(id => questionMap.get(id) ? [questionMap.get(id)!] : []);
  return valid.filter(q => questionGrade(q) === (valid[0] && questionGrade(valid[0])));
}
export type ScheduledReview = {
  question: Question; dueDay: number; interval: number; successfulDays: number; selfAssessed: boolean;
};
export function scheduledReviews(attempts: ReviewAttempt[], states: ReviewState[], now = new Date()): ScheduledReview[] {
  const histories = new Map<string, ReviewAttempt[]>();
  for (const attempt of attempts) {
    if (!questionMap.has(attempt.question_id) || !Number.isFinite(Date.parse(attempt.created_at)) || Date.parse(attempt.created_at) > now.getTime()) continue;
    histories.set(attempt.question_id, [...(histories.get(attempt.question_id) ?? []), attempt]);
  }
  const stateMap = new Map(states.map(state => [state.question_id, state]));
  return [...histories.entries()].flatMap(([id, history]) => {
    history.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    const state = stateMap.get(id), latest = history[0];
    if (!state && !history.some(attempt => !attempt.is_correct)) return [];
    const successfulDays = new Set<number>();
    for (const attempt of history) { if (!attempt.is_correct) break; successfulDays.add(learningDay(attempt.created_at)); }
    const interval = state?.status === "已掌握" ? 14 : !latest.is_correct ? 0 : successfulDays.size < 2 ? 1 : successfulDays.size < 3 ? 3 : 7;
    const lastDay = Math.max(learningDay(latest.created_at), state?.status === "已掌握" && Number.isFinite(Date.parse(state.updated_at)) ? learningDay(state.updated_at) : -Infinity);
    return [{ question: questionMap.get(id)!, dueDay: lastDay + interval, interval, successfulDays: successfulDays.size, selfAssessed: questionMap.get(id)!.kind === "written" }];
  }).sort((a, b) => a.dueDay - b.dueDay || a.question.id.localeCompare(b.question.id));
}
export function relatedPractice(question: Question, attempts: ReviewAttempt[], after: string) {
  const cutoff = Date.parse(after);
  const tried = new Set(attempts.filter(a => Date.parse(a.created_at) >= cutoff).map(a => a.question_id));
  const group = reviewVariantGroups.find(group => group.ids.includes(question.id));
  const paired = group?.ids.map(id => questionMap.get(id)).find((q): q is Question => !!q && q.id !== question.id && questionGrade(q) === questionGrade(question) && !tried.has(q.id));
  if (paired) return { question: paired, label: "同知识点变式" as const, skill: group!.skill };
  const other = questions.find(q => q.topic === question.topic && q.id !== question.id && q.kind !== "written" && !tried.has(q.id));
  return other ? { question: other, label: "同专题巩固" as const, skill: question.topic } : null;
}
export type DailyTask = { question: Question; label: string; sourceId?: string };
export function dailyLearning(attempts: ReviewAttempt[], states: ReviewState[], grade: CurriculumId, now = new Date()) {
  const bank = questions.filter(q => questionGrade(q) === grade);
  const ids = new Set(bank.map(q => q.id));
  const history = attempts.filter(a => ids.has(a.question_id) && Number.isFinite(Date.parse(a.created_at)) && Date.parse(a.created_at) <= now.getTime()).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  const today = learningDay(now), answeredToday = new Set(history.filter(a => learningDay(a.created_at) === today).map(a => a.question_id));
  const schedule = scheduledReviews(history, states, now).filter(r => questionGrade(r.question) === grade);
  const due = schedule.filter(r => r.dueDay <= today);
  const tasks: DailyTask[] = [];
  const goal = 5, limit = Math.max(1, goal - Math.min(goal - 1, answeredToday.size));
  function add(question: Question, label: string, sourceId?: string) {
    if (tasks.length >= limit || tasks.some(t => t.question.id === question.id) || (question.kind === "written" && tasks.some(t => t.question.kind === "written"))) return;
    tasks.push({ question, label, sourceId });
  }
  due.forEach(r => add(r.question, r.selfAssessed ? "解答题隔日自评" : "原题复练"));
  for (const item of schedule) {
    const latest = history.find(a => a.question_id === item.question.id);
    if (!latest?.is_correct || item.dueDay <= today) continue;
    const related = relatedPractice(item.question, history, latest.created_at);
    if (related && !answeredToday.has(related.question.id)) add(related.question, related.label, item.question.id);
  }
  const recentHistory = history.filter(a => learningDay(a.created_at) >= today - 6);
  const topicStats = [...new Set(recentHistory.filter(a => !a.selected_answer.startsWith("self:") && questionMap.get(a.question_id)?.kind !== "written").map(a => questionMap.get(a.question_id)!.topic))].map(topic => {
    const rows = recentHistory.filter(a => questionMap.get(a.question_id)?.topic === topic && !a.selected_answer.startsWith("self:") && questionMap.get(a.question_id)?.kind !== "written");
    return { topic, count: rows.length, correct: rows.filter(a => a.is_correct).length };
  }).filter(t => t.count >= 3).sort((a, b) => a.correct / a.count - b.correct / b.count);
  const weak = topicStats.find(t => t.correct < t.count) ?? null;
  const focusTopic = weak?.topic ?? (history[0] && questionMap.get(history[0].question_id)?.topic) ?? bank[0]?.topic;
  const tried = new Set(history.map(a => a.question_id));
  [...bank.filter(q => q.topic === focusTopic), ...bank].filter(q => !tried.has(q.id)).forEach(q => add(q, weak && q.topic === weak.topic ? "薄弱专题巩固" : "基础巩固"));
  const latest = history[0] && questionMap.get(history[0].question_id);
  const nextInTopic = latest && history[0].is_correct ? bank.find(q => q.topic === latest.topic && !tried.has(q.id)) : null;
  return { tasks, due, schedule, weak, completed: answeredToday.size, goal, latest: nextInTopic ?? latest ?? null, minutes: tasks.reduce((sum, task) => sum + (task.question.kind === "written" ? 8 : 2), 0) };
}
export const learningGrades = curricula.map(g => ({ id: g.id, label: g.label }));
