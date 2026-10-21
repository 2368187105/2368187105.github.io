import { Fragment, type ReactNode } from "react";
import { InlineMath } from "react-katex";
import { radicalSegments, type RadicalSegment } from "@/lib/radical-formatting";

export function renderRadical(part: RadicalSegment) {
  return <span key={`root-${part.start}`} className="math-radical" role="img" aria-label={part.source}><InlineMath math={part.math}/></span>;
}

// Only the radical is typeset. Prose, coefficients and surrounding punctuation
// keep their original meaning, and inputs/answer matching keep their raw strings.
export function mathText(value: ReactNode): ReactNode {
  if (Array.isArray(value)) return value.map((child, i) => <Fragment key={i}>{mathText(child)}</Fragment>);
  if (typeof value !== "string") return value;
  const parts = radicalSegments(value);
  if (!parts.length) return value;
  const result: ReactNode[] = [];
  let end = 0;
  for (const part of parts) {
    result.push(value.slice(end, part.start), renderRadical(part));
    end = part.end;
  }
  result.push(value.slice(end));
  return <Fragment>{result}</Fragment>;
}
