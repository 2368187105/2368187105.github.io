import { curricula } from "@/data/curriculum";
import { questions } from "@/data/questions";
import { accuracyPercent } from "./learning-summary";
const questionById = new Map(questions.map(question => [question.id, question]));
function attemptTopic(attempt: ReviewAttempt) {
    return questionById.get(attempt.question_id)?.topic ?? attempt.topic;
}
export const reviewCauses = ["未分类", "概念不清", "计算错误", "条件遗漏", "方法不会"] as const;
export const reviewStatuses = ["待复习", "复练中", "已掌握"] as const;
export type ReviewState = {
    question_id: string;
    cause: typeof reviewCauses[number];
    status: typeof reviewStatuses[number];
    review_count: number;
    correct_streak: number;
    updated_at: string;
};
export type ReviewAttempt = {
    question_id: string;
    topic: string;
    selected_answer: string;
    is_correct: boolean;
    created_at: string;
};
export type ReviewTask = {
    questionId: string;
    topic: string;
    title: string;
    courseHref: string;
    courseTitle: string;
    kind: string;
};
// Monday 00:00 in China; never use the browser's timezone for week boundaries.
export function reviewWeek(now = new Date()) {
    const local = new Date(now.getTime() + 8 * 3600000);
    const day = (local.getUTCDay() + 6) % 7;
    local.setUTCDate(local.getUTCDate() - day);
    local.setUTCHours(0, 0, 0, 0);
    return local.toISOString().slice(0, 10);
}
export function courseForTopic(topic: string) {
    for (const grade of curricula) {
        const chapter = grade.chapters.find(chapter => chapter.topics.includes(topic));
        if (chapter)
            return { grade: grade.id, title: chapter.title, href: chapter.href };
    }
    return null;
}
export function buildReviewTasks(attempts: ReviewAttempt[], states: ReviewState[], grade: string): ReviewTask[] {
    const stateById = new Map(states.map(state => [state.question_id, state]));
    const latest = new Map<string, ReviewAttempt>();
    for (const attempt of [...attempts].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)))
        if (!latest.has(attempt.question_id))
            latest.set(attempt.question_id, attempt);
    return [...latest.values()].filter(attempt => {
        const state = stateById.get(attempt.question_id);
        return (!attempt.is_correct || !!state) && state?.status !== "已掌握" && courseForTopic(attemptTopic(attempt))?.grade === grade;
    }).sort((a, b) => Number(a.is_correct) - Number(b.is_correct) || Date.parse(b.created_at) - Date.parse(a.created_at))
        .slice(0, 5).flatMap(attempt => {
        const question = questionById.get(attempt.question_id);
        const course = courseForTopic(attemptTopic(attempt));
        return question && course ? [{ questionId: question.id, topic: question.topic, title: question.title, courseHref: course.href, courseTitle: course.title, kind: question.kind ?? "choice" }] : [];
    });
}
export function taskProgress(task: ReviewTask, attempts: ReviewAttempt[], createdAt: string) {
    const after = attempts.filter(a => a.question_id === task.questionId && Date.parse(a.created_at) >= Date.parse(createdAt)).sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    const before = attempts.filter(a => attemptTopic(a) === task.topic && Date.parse(a.created_at) < Date.parse(createdAt) && !a.selected_answer.startsWith("self:") && !a.question_id.includes("-written-"));
    const topicAfter = attempts.filter(a => attemptTopic(a) === task.topic && Date.parse(a.created_at) >= Date.parse(createdAt) && !a.selected_answer.startsWith("self:") && !a.question_id.includes("-written-"));
    const current = after[0];
    return { done: !!current?.is_correct, attempted: after.length, written: task.kind === "written", before: before.length ? accuracyPercent(before.filter(a => a.is_correct).length, before.length) : null,
        after: topicAfter.length ? accuracyPercent(topicAfter.filter(a => a.is_correct).length, topicAfter.length) : null, beforeCount: before.length, afterCount: topicAfter.length };
}
