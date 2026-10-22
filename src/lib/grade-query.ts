export type GradeLabel = "高一" | "高二" | "高三";
const gradeIds = { 高一: "grade1", 高二: "grade2", 高三: "grade3" } as const;

export function gradeFromQuery(search: string): GradeLabel | null {
  const id = new URLSearchParams(search).get("grade");
  return (["高一", "高二", "高三"] as const).find(label => gradeIds[label] === id) ?? null;
}

export function gradeUrl(path: string, grade: GradeLabel) {
  return `${path.replace(/\/+$/, "")}/?grade=${gradeIds[grade]}`;
}

export function queryAfterGradeChange(search: string, grade: GradeLabel) {
  const params = new URLSearchParams(search);
  params.set("grade", gradeIds[grade]);
  params.delete("topic");
  params.delete("question");
  params.delete("queue");
  return `?${params.toString()}`;
}
