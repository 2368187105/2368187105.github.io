"use client";
import Link from "next/link";
import { scheduledReviews, learningDay, relatedPractice, practiceHref } from "@/lib/daily-learning";
import { courseForTopic, type ReviewAttempt, type ReviewState } from "@/lib/review-plan";

export default function SpacedReview({ attempts, states, grade }: { attempts: ReviewAttempt[]; states: ReviewState[]; grade: string }) {
  const now = new Date(), today = learningDay(now);
  const schedule = scheduledReviews(attempts, states, now).filter(r => courseForTopic(r.question.topic)?.grade === grade);
  const due = schedule.filter(r => r.dueDay <= today), future = schedule.filter(r => r.dueDay > today);
  return <section className="my-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><h2 className="text-xl font-bold text-slate-900">间隔复习</h2><p className="mt-3 text-sm leading-7 text-slate-500">答对后隔 1 天再练，连续跨日答对后延长为 3 天、7 天；手动标记已掌握后隔 14 天回顾。再次答错重新安排。同一天重复答对不加快进度，解答题按自评单独提示。</p><p className="mt-3 text-sm text-slate-700">当前到期 {due.length} 道 · 后续安排 {future.length} 道。</p>{schedule.length === 0 ? <p className="mt-3 text-sm text-slate-500">还没有需要安排的错题，完成训练后会根据实际记录生成。</p> : <ol className="mt-4 space-y-3">{[...due, ...future].slice(0, 5).map(item => { const latest = [...attempts].filter(a => a.question_id === item.question.id).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0]; const related = latest?.is_correct && relatedPractice(item.question, attempts, latest.created_at); return <li key={item.question.id} className="rounded-xl bg-slate-50 p-4 text-sm leading-7"><p className="font-semibold text-slate-800">{item.question.title} · {item.dueDay <= today ? "现在可复习" : `${item.dueDay - today} 天后复习`}{item.selfAssessed ? " · 解答题自评" : ""}</p><div className="mt-2 flex flex-wrap gap-x-5 gap-y-2"><Link className="text-blue-600" href={practiceHref(item.question, [item.question.id])}>原题复练 →</Link>{related && <Link className="text-blue-600" href={practiceHref(related.question, [related.question.id])}>{related.label}：{related.skill} →</Link>}</div></li>; })}</ol>}<Link href="/#today" className="mt-4 inline-block text-sm text-blue-600">回到首页开始今日训练 →</Link></section>;
}
