import { curricula, type CurriculumId } from "@/data/curriculum";
import { questions } from "@/data/questions";
import { practiceHref, questionGrade } from "@/lib/daily-learning";

export type SearchResult = { id: string; title: string; detail: string; grade: CurriculumId; kind: "course" | "question"; href: string; typeLabel: string };
export function normalizeSearch(value: string) {
  return value.normalize("NFKC").toLowerCase().replace(/\\sqrt|√/g, "根号").replace(/\s+/g, " ").trim();
}
const entries: SearchResult[] = curricula.flatMap(grade => grade.chapters.flatMap(chapter => chapter.lessons.map(lesson => ({
  id: lesson.href, title: lesson.title, detail: `${grade.label} · ${chapter.title}`, grade: grade.id,
  kind: "course" as const, href: lesson.href, typeLabel: "课程",
}))));
entries.push(...questions.flatMap(q => {
  const grade = questionGrade(q);
  return grade ? [{ id: q.id, title: q.title, detail: `${q.topic} · ${q.question}${q.formula ? " " + q.formula : ""}`,
    grade, kind: "question" as const, href: practiceHref(q, [q.id]), typeLabel: q.kind === "written" ? "解答题" : q.kind === "fill" ? "填空题" : "选择题" }] : [];
}));
const indexed = entries.map(entry => ({ entry, title: normalizeSearch(entry.title), text: normalizeSearch(`${entry.title} ${entry.detail} ${entry.typeLabel}`) }));
export function searchSite(query: string, grade = "all", kind = "all"): SearchResult[] {
  const tokens = normalizeSearch(query).slice(0, 100).split(" ").filter(Boolean);
  if (!tokens.length) return [];
  return indexed.filter(({ entry, text }) => (grade === "all" || entry.grade === grade) && (kind === "all" || entry.kind === kind) && tokens.every(token => text.includes(token)))
    .map(item => ({ ...item, score: tokens.reduce((score, token) => score + (item.title === token ? 4 : item.title.includes(token) ? 2 : 0), 0) }))
    .sort((a, b) => b.score - a.score).map(item => item.entry);
}
