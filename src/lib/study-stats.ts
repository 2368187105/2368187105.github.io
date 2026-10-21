export type RankingPeriod = "week" | "all";
export type RankingMetric = "time" | "accuracy" | "answers";

export type RankingEntry = {
  rank: number;
  nickname: string;
  value: number;
  is_me: boolean;
};

export type LearningDashboardData = {
  me: {
    total: number;
    objective: number;
    correct: number;
    accuracy: number | null;
    self_assessed: number;
    study_seconds: number;
    nickname: string;
    participating: boolean;
    latest_topic: string | null;
    ranks: Record<RankingMetric, number | null>;
  };
  boards: Record<RankingMetric, RankingEntry[]>;
};

export const STUDY_HEARTBEAT_MS = 15_000;
export const STUDY_IDLE_MS = 120_000;

export function isStudyPath(path: string) {
  const normalized = path.replace(/\/+$/, "");
  return normalized === "/practice" || /^\/grade[123]\/[^/]+/.test(normalized)
    && normalized !== "/grade3/chapter-tests";
}

export function isStudying(path: string, visible: boolean, focused: boolean, idleMs: number) {
  return isStudyPath(path) && visible && focused && idleMs >= 0 && idleMs < STUDY_IDLE_MS;
}

export function formatStudyTime(seconds: number) {
  const value = Math.max(0, Math.floor(seconds));
  if (value < 60) return `${value} 秒`;
  const minutes = Math.floor(value / 60);
  return minutes < 60 ? `${minutes} 分钟` : `${Math.floor(minutes / 60)} 小时 ${minutes % 60} 分钟`;
}

export function nicknameError(nickname: string) {
  const value = nickname.trim();
  if ([...value].length < 2 || [...value].length > 20) return "昵称需要 2～20 个字。";
  if (/@|[<>\u0000-\u001f\u007f]/.test(value)) return "请使用昵称，不要填写邮箱或特殊控制字符。";
  return "";
}

export function isDashboardUnavailable(error: { code?: string } | null) {
  return !!error && ["PGRST202", "42P01", "42883"].includes(error.code ?? "");
}
