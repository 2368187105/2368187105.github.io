"use client";
import { useEffect } from "react";
import { gradeFromQuery, type GradeLabel } from "@/lib/grade-query";

export function useGradeQuery(setGrade: (grade: GradeLabel) => void) {
  useEffect(() => {
    function apply() {
      const grade = gradeFromQuery(window.location.search);
      if (grade) setGrade(grade);
    }
    const frame = window.requestAnimationFrame(apply);
    window.addEventListener("popstate", apply);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("popstate", apply); };
  }, [setGrade]);
}
