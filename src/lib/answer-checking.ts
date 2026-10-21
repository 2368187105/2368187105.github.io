import type { Question } from "@/data/questions";

// 只做显式等价形式匹配，不执行用户输入的表达式。
export function normalizeAnswer(value: string): string {
  let text = value.normalize("NFKC").replace(/\s+/g, "")
    .replace(/[−–]/g, "-").replace(/，/g, ",")
    .replace(/>=/g, "≥").replace(/<=/g, "≤")
    .replace(/!=/g, "≠").replace(/([+-]?)(?:infinity|inf)/gi, (_, sign: string) => sign === "-" ? "-∞" : "+∞");
  // 数值只接受有限十进制或分数；不使用浮点近似容差，避免边界误判。
  const number = /^([+-]?\d+)(?:\.(\d+))?$/.exec(text);
  const fraction = /^([+-]?\d+)\/([+-]?\d+)$/.exec(text);
  if ((number || fraction) && text.length <= 100) {
    let numerator: bigint;
    let denominator: bigint;
    if (fraction) {
      numerator = BigInt(fraction[1]); denominator = BigInt(fraction[2]);
      if (denominator === BigInt(0)) return text;
    } else {
      const decimals = number![2] ?? "";
      denominator = BigInt(10) ** BigInt(decimals.length);
      numerator = BigInt(number![1]) * denominator + BigInt((number![1].startsWith("-") ? "-" : "") + (decimals || "0"));
    }
    if (denominator < BigInt(0)) { numerator = -numerator; denominator = -denominator; }
    let a = numerator < BigInt(0) ? -numerator : numerator, b = denominator;
    while (b !== BigInt(0)) { const remainder = a % b; a = b; b = remainder; }
    return `${numerator / a}/${denominator / a}`;
  }
  // 本轮题目只有数值有限集；排序使元素顺序不影响判分。
  if (/^\{[+\-\d,./]+\}$/.test(text)) {
    const elements = text.slice(1, -1).split(",");
    if (elements.every(element => /^[+-]?\d+(?:\.\d+|\/[+-]?\d+)?$/.test(element) && !/\/[-+]?0+$/.test(element))) {
      text = "{" + [...new Set(elements.map(normalizeAnswer))].sort().join(",") + "}";
    }
  }
  return text;
}

export function checkAnswer(question: Question, answer: string): boolean {
  return (question.acceptedAnswers ?? [question.correctAnswer])
    .some(expected => normalizeAnswer(expected) === normalizeAnswer(answer));
}

export function answerLabel(answer: string): string {
  if (!answer.startsWith("self:")) return answer;
  try {
    const saved = JSON.parse(answer.slice(5)) as { work: string; checks: number[] };
    return `解答题自评：${saved.checks.map((score, i) => `步骤${i + 1} ${["未掌握", "部分完成", "完整完成"][score] ?? "未评"}`).join("；")}\n作答草稿：${saved.work}`;
  } catch { return "解答题自评记录"; }
}
