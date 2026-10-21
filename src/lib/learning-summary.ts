export type AttemptSummaryInput = {
  question_id: string;
  topic: string;
  selected_answer?: string | null;
  is_correct: boolean;
};

// 输入按时间倒序排列。旧选择题记录没有 kind，仍按客观题处理。
export function summarizeLearning(attempts: AttemptSummaryInput[], writtenIds: ReadonlySet<string>) {
  const objective = attempts.filter(attempt =>
    !writtenIds.has(attempt.question_id) && !attempt.selected_answer?.startsWith("self:")
  );
  const correct = objective.filter(attempt => attempt.is_correct).length;
  return {
    total: objective.length,
    correct,
    wrong: objective.length - correct,
    accuracy: objective.length ? Math.round(correct / objective.length * 100) : 0,
    selfAssessed: attempts.length - objective.length,
    latestTopic: attempts[0]?.topic ?? null,
  };
}
