import { questions as chapterQuestions, practiceTopics } from "@/data/questions-part13";
import { curriculumFor } from "@/data/curriculum";
import type { Question } from "@/data/questions";
import { checkAnswer } from "./answer-checking";
export const chapterAssessments = curriculumFor("grade3").chapters.map((chapter, i) => ({
    id: chapter.href.split("/").filter(Boolean).at(-1)!, title: chapter.title, courseHref: chapter.href,
    topic: practiceTopics[i], minutes: 45, questions: chapterQuestions.filter(q => q.topic === practiceTopics[i]), total: 60,
}));
export type AssessmentPaper = typeof chapterAssessments[number];
export type AssessmentDraft = {
    id: string;
    chapter: string;
    startedAt: string;
    deadline: string;
    submittedAt: string | null;
    answers: Record<string, string>;
    scores: Record<string, number[]>;
};
export function newAssessment(paper: AssessmentPaper, id: string, now = new Date()): AssessmentDraft {
    return { id, chapter: paper.id, startedAt: now.toISOString(), deadline: new Date(now.getTime() + paper.minutes * 60000).toISOString(), submittedAt: null, answers: {}, scores: {} };
}
export function remainingSeconds(draft: AssessmentDraft, now: number) {
    return Math.max(0, Math.ceil((Date.parse(draft.deadline) - now) / 1000));
}
export function scoringSteps(question: Question) {
    const checkpoints = question.checkpoints ?? [];
    return checkpoints.map((label, i) => ({ label, points: Math.floor(8 / checkpoints.length) + (i < 8 % checkpoints.length ? 1 : 0) }));
}
export function assessmentResult(paper: AssessmentPaper, draft: AssessmentDraft) {
    const objective = paper.questions.filter(q => q.kind !== "written");
    const written = paper.questions.filter(q => q.kind === "written");
    const correct = objective.filter(q => !!draft.answers[q.id]?.trim() && checkAnswer(q, draft.answers[q.id])).length;
    const complete = written.every(q => scoringSteps(q).every((step, i) => Number.isInteger(draft.scores[q.id]?.[i]) && draft.scores[q.id][i] >= 0 && draft.scores[q.id][i] <= step.points));
    const selfScore = written.reduce((sum, q) => sum + scoringSteps(q).reduce((sub, step, i) => sub + Math.max(0, Math.min(step.points, draft.scores[q.id]?.[i] ?? 0)), 0), 0);
    return { objective: correct * 4, correct, objectiveTotal: objective.length, selfScore, complete, total: correct * 4 + selfScore };
}
export function validAssessmentDraft(value: unknown, paper: AssessmentPaper): value is AssessmentDraft {
    if (!value || typeof value !== "object")
        return false;
    const d = value as AssessmentDraft;
    return typeof d.id === "string" && /^[0-9a-f-]{36}$/i.test(d.id) && d.chapter === paper.id && Number.isFinite(Date.parse(d.startedAt)) && Number.isFinite(Date.parse(d.deadline)) && Date.parse(d.deadline) - Date.parse(d.startedAt) === paper.minutes * 60000 && (d.submittedAt === null || typeof d.submittedAt === "string" && Number.isFinite(Date.parse(d.submittedAt))) && !!d.answers && typeof d.answers === "object" && !Array.isArray(d.answers) && Object.values(d.answers).every(a => typeof a === "string" && a.length <= 4000) && !!d.scores && typeof d.scores === "object" && Object.values(d.scores).every(s => Array.isArray(s) && s.every(x => Number.isInteger(x) && x >= -1 && x <= 8));
}
