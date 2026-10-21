export type RadicalSegment = { start: number; end: number; source: string; math: string };

const superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻";
const normalScripts = "0123456789+-";
const scriptValue = (value: string) => [...value].map(c => normalScripts[superscripts.indexOf(c)]).join("");

// This is a display-only reader for the site's authored √ notation, not an
// expression evaluator. A root consumes one atom or one balanced bracket group.
// In particular √3sinx means sqrt(3) times sinx, while √(3sinx) has a longer bar.
function rootAt(text: string, start: number): RadicalSegment | undefined {
  let cursor = start;
  let index = "";
  if (text[cursor] === "∛" || text[cursor] === "∜") {
    index = text[cursor++] === "∛" ? "3" : "4";
  } else {
    const prefix = /^[⁰¹²³⁴⁵⁶⁷⁸⁹]+(?=√)/.exec(text.slice(cursor));
    if (prefix) { index = scriptValue(prefix[0]); cursor += prefix[0].length; }
    if (text[cursor] !== "√") return;
    cursor++;
  }
  while (text[cursor] === " ") cursor++;
  const open = text[cursor];
  const pairs: Record<string, string> = { "(": ")", "[": "]", "（": "）", "{": "}" };
  let body: string;
  if (pairs[open]) {
    const stack = [pairs[open]];
    const bodyStart = ++cursor;
    while (cursor < text.length && stack.length) {
      if (pairs[text[cursor]]) stack.push(pairs[text[cursor]]);
      else if (text[cursor] === stack[stack.length - 1]) stack.pop();
      cursor++;
    }
    if (stack.length) return;
    body = text.slice(bodyStart, cursor - 1);
  } else {
    const atom = /^(?:\d+(?:\.\d+)?|[A-Za-zΑ-Ωα-ω][₀-₉]*[⁰¹²³⁴⁵⁶⁷⁸⁹]*|方差)/.exec(text.slice(cursor));
    if (!atom) return;
    body = atom[0]; cursor += body.length;
  }
  if (!body.trim()) return;
  return { start, end: cursor, source: text.slice(start, cursor), math: `\\sqrt${index ? `[${index}]` : ""}{${radicandToLatex(body)}}` };
}

export function radicalSegments(text: string): RadicalSegment[] {
  const result: RadicalSegment[] = [];
  for (let i = 0; i < text.length; i++) {
    if (!/[√∛∜⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(text[i])) continue;
    const segment = rootAt(text, i);
    if (segment) { result.push(segment); i = segment.end - 1; }
  }
  return result;
}

export function radicandToLatex(text: string): string {
  // Keep nested roots grouped before converting ordinary powers and operators.
  const nested = radicalSegments(text);
  const plain = (value: string) => value
    .replace(/[\\{}%&#$]/g, c => c === "\\" ? "\\backslash{}" : `\\${c}`)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g, s => `^{${scriptValue(s)}}`)
    .replace(/[₀-₉]+/g, s => `_{${[...s].map(c => c.charCodeAt(0) - 0x2080).join("")}}`)
    .replace(/sin|cos|tan|ln|log/g, s => `\\${s} `)
    .replace(/[−–]/g, "-").replace(/×/g, "\\times ").replace(/·/g, "\\cdot ")
    .replace(/÷/g, "\\div ").replace(/π/g, "\\pi ").replace(/Δ/g, "\\Delta ")
    .replace(/≤/g, "\\le ").replace(/≥/g, "\\ge ").replace(/≠/g, "\\ne ")
    .replace(/±/g, "\\pm ").replace(/∞/g, "\\infty ")
    .replace(/[\u3400-\u9fff]+/g, s => `\\text{${s}}`);
  let result = "", end = 0;
  for (const part of nested) { result += plain(text.slice(end, part.start)) + part.math; end = part.end; }
  return result + plain(text.slice(end));
}
