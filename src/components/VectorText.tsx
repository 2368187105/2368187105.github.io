import { Fragment, type ReactNode } from "react";
import { InlineMath } from "react-katex";

// 仅用于已明确处于向量语境的文字；不处理普通课程或题目中的字母。
// k、t、λ、x/y/z 等参数与坐标分量保持标量，点名 A/B/P 等保持不变。
function tokens(text: string) {
  if (/ax\+by\+cz\+d|a、b、c 不全为零/.test(text)) return [];
  const vectorContext = /向量|均为向量/.test(text);
  const namedVector = /(?<![A-Za-z])[abcpquvne](?:[₀-₉₁₂₃])?(?![A-Za-z])/.test(text);
  const vectorEquation = /[A-Z]{2}\s*[+−\-]\s*[A-Z]{2}/.test(text);
  const matches = [...text.matchAll(/(?<![A-Za-z\\])(?:[A-Z]{2}|[abcpquvneij](?:[₀-₉])?|k(?=、|，|。|$))(?![A-Za-z])/g)];
  return matches.filter(match => {
    const value = match[0];
    if (/^[A-Z]{2}$/.test(value)) {
      const following = text.slice(match.index! + value.length);
      if (/^\s*=\s*\d/.test(following)) return false;
      if (/边长|周长|的长度/.test(text) && !vectorContext && !namedVector) return false;
      return vectorContext || namedVector || vectorEquation || /^\s*=\s*\(/.test(following)
        || text.trim() === value || /^[A-D][.．]\s*[A-Z]{2}$/.test(text.trim());
    }
    // 单位基向量 k 只在 i、j、k 的明确说明中使用，参数 k 不加箭头。
    return value !== "k" || /i、j、k/.test(text);
  });
}

export function vectorText(value: ReactNode): ReactNode {
  if (typeof value !== "string") return value;
  const matches = tokens(value);
  if (matches.length === 0) return value;
  const parts: ReactNode[] = [];
  let end = 0;
  for (const match of matches) {
    const start = match.index!;
    parts.push(value.slice(end, start));
    const name = match[0].replace(/[₀-₉]/g, digit => `_${digit.charCodeAt(0) - 0x2080}`);
    const [base, subscript] = name.split("_");
    parts.push(<span key={start} role="img" aria-label={`向量 ${match[0]}`}><InlineMath math={String.raw`\overrightarrow{${base}}${subscript ? `_${subscript}` : ""}`} /></span>);
    end = start + match[0].length;
  }
  parts.push(value.slice(end));
  return <Fragment>{parts}</Fragment>;
}

// SVG 的 text 元素不能容纳 HTML/KaTeX；单字母标签用组合箭头。
export function vectorSvgLabel(value: ReactNode): ReactNode {
  if (typeof value !== "string") return value;
  const parts: ReactNode[] = [];
  let end = 0;
  for (const match of tokens(value)) {
    const start = match.index!;
    parts.push(value.slice(end, start));
    parts.push(/^[A-Z]{2}$/.test(match[0])
      ? <tspan key={start}><tspan dy="-0.55em">⟶</tspan><tspan dx="-1.1em" dy="0.55em">{match[0]}</tspan></tspan>
      : match[0].replace(/^([a-z])/, "$1\u20d7"));
    end = start + match[0].length;
  }
  parts.push(value.slice(end));
  return parts;
}
