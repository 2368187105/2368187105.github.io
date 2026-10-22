export type LessonResume = { href: string; title: string };
export function lessonAt(path: string, lessons: LessonResume[]) { return lessons.find(lesson => lesson.href.replace(/\/+$/, "") === path.replace(/\/+$/, "")) ?? null; }
export function lessonResumeKey(userId: string) { return `cheling:lesson-resume:v1:${userId}`; }
export function readLessonResume(userId: string, lessons: LessonResume[]): LessonResume | null {
  try { const text = localStorage.getItem(lessonResumeKey(userId)); if (!text) return null; const stored = JSON.parse(text); return typeof stored.href === "string" ? lessonAt(stored.href, lessons) : null; } catch { return null; }
}
