"use client";

import { queryAfterGradeChange, type GradeLabel } from "@/lib/grade-query";
export type { GradeLabel } from "@/lib/grade-query";

export default function GradeSelector({ value, onChange, disabled = false }: {
  value: GradeLabel; onChange: (grade: GradeLabel) => void; disabled?: boolean;
}) {
  function selectGrade(grade: GradeLabel) {
    if (grade === value) return;
    window.history.replaceState(null, "", `${window.location.pathname}${queryAfterGradeChange(window.location.search, grade)}${window.location.hash}`);
    onChange(grade);
  }
  return <div aria-label="选择年级" className="grid grid-cols-3 gap-2">
    {(["高一", "高二", "高三"] as const).map(grade => <button key={grade} type="button" disabled={disabled} aria-pressed={value === grade} onClick={() => selectGrade(grade)} className={`min-w-0 rounded-lg border px-2 py-2.5 text-sm font-semibold transition disabled:opacity-50 ${value === grade ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>{grade}数学</button>)}
  </div>;
}
