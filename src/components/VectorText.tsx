import { Fragment, type ReactNode } from "react";
import { InlineMath } from "react-katex";
import { radicalSegments } from "@/lib/radical-formatting";
import { renderRadical } from "@/components/MathText";

// 仅用于已明确处于向量语境的文字；不处理普通课程或题目中的字母。
// k、t、λ、x/y/z 等参数与坐标分量保持标量，点名 A/B/P 等保持不变。
function tokens(text: string) {
  if (/ax\+by\+cz\+d|a、b、c 不全为零/.test(text)) return [];
  const vectorContext = /向量|均为向量/.test(text);
  const namedVector = /(?<![A-Za-z])[abcpquvwne](?:[₀-₉₁₂₃])?(?![A-Za-z])/.test(text);
  const vectorEquation = /(?<![A-Za-z₀-₉])[A-Z][₀-₉]?[A-Z][₀-₉]?\s*[+−\-·]\s*[A-Z][₀-₉]?[A-Z][₀-₉]?(?![A-Za-z₀-₉])/.test(text);
  const matches = [...text.matchAll(/(?<![A-Za-z₀-₉\\])(?:[A-Z][₀-₉]?[A-Z][₀-₉]?|[abcpquvwneij](?:[₀-₉])?|k(?=、|，|。|$))(?![A-Za-z₀-₉])/g)];
  return matches.filter(match => {
    const value = match[0];
    if (/^[A-Z][₀-₉]?[A-Z][₀-₉]?$/.test(value)) {
      const preceding = text.slice(0, match.index!);
      const following = text.slice(match.index! + value.length);
      // 明确标作直线、射线或线段的名称不是有向位移。
      if (/(?:直线|射线|线段|侧棱|底边|棱)\s*$/.test(preceding)
        || /^\s*(?:的)?中点/.test(following)) return false;
      // C-AB-P 中的 AB 是二面角的棱，保留几何名称。
      if (/[A-Z][₀-₉]?\s*[-−]\s*$/.test(preceding)
        && /^\s*[-−]\s*[A-Z][₀-₉]?(?![A-Za-z₀-₉])/.test(following)) return false;
      // AB=3 通常表示边长；但 AB+BC=0 中的 BC 仍是向量。
      const afterVectorOperator = /[+−\-·]\s*$/.test(preceding);
      if (/^\s*=\s*\d/.test(following) && !afterVectorOperator) return false;
      const insideNorm = /\|\s*$/.test(preceding) && /^\s*\|/.test(following);
      const afterCoefficient = /(?:\d|\([−+\-]?\d+\/\d+\))\s*$/.test(preceding);
      if (/边长|周长|的长度/.test(text) && !vectorContext && !namedVector && !insideNorm) return false;
      return vectorContext || namedVector || vectorEquation || /^\s*=\s*\(/.test(following)
        || insideNorm || afterCoefficient || text.trim() === value || /^[A-D][.．]\s*[A-Z]{2}$/.test(text.trim());
    }
    // 单位基向量 k 只在 i、j、k 的明确说明中使用，参数 k 不加箭头。
    return value !== "k" || /i、j、k/.test(text);
  });
}

export function vectorText(value: ReactNode): ReactNode {
  if (typeof value !== "string") return value;
  const roots = radicalSegments(value);
  const matches = tokens(value).filter(match => !roots.some(root => match.index! < root.end && match.index! + match[0].length > root.start));
  const entries = [...matches.map(match => ({ start: match.index!, match })), ...roots.map(root => ({ start: root.start, root }))].sort((a,b) => a.start-b.start);
  if (entries.length === 0) return value;
  const parts: ReactNode[] = [];
  let end = 0;
  for (const entry of entries) {
    const start = entry.start;
    parts.push(value.slice(end, start));
    if ("root" in entry) {
      parts.push(renderRadical(entry.root));
      end = entry.root.end;
      continue;
    }
    const match = entry.match;
    const name = match[0].replace(/[₀-₉]/g, digit => `_${digit.charCodeAt(0) - 0x2080}`);
    const [base, subscript] = name.split("_");
    const pointPair = /^[A-Z][₀-₉]?[A-Z][₀-₉]?$/.test(match[0]);
    const math = pointPair ? String.raw`\overrightarrow{${name}}`
      : String.raw`\overrightarrow{${base}}${subscript ? `_${subscript}` : ""}`;
    parts.push(<span key={start} role="img" aria-label={`向量 ${match[0]}`}><InlineMath math={math} /></span>);
    end = start + match[0].length;
  }
  parts.push(value.slice(end));
  return <Fragment>{parts}</Fragment>;
}

// SVG text 不能容纳 KaTeX；分行放置箭头与字母，避免组合字符缺字。
export function vectorSvgLabel(value: ReactNode): ReactNode {
  if (typeof value !== "string") return value;
  const parts: ReactNode[] = [];
  let end = 0;
  for (const match of tokens(value)) {
    const start = match.index!;
    parts.push(value.slice(end, start));
    const pointPair = /^[A-Z][₀-₉]?[A-Z][₀-₉]?$/.test(match[0]);
    parts.push(<tspan key={start}><tspan dy="-0.6em">→</tspan><tspan dx={pointPair ? (/[₀-₉]/.test(match[0]) ? "-1.4em" : "-1.15em") : "-0.8em"} dy="0.6em">{match[0]}</tspan></tspan>);
    end = start + match[0].length;
  }
  parts.push(value.slice(end));
  return parts;
}
