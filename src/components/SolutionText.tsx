import { mathText } from "./MathText";
import { vectorText } from "./VectorText";

export default function SolutionText({ text, vectors = false, className = "" }: { text: string; vectors?: boolean; className?: string }) {
  const lines = text.split("\n");
  const long = lines.some(line => /[^\s\u3400-\u9fff，。；：！？]{32,}/u.test(line));
  return <div className={`solution-text min-w-0 max-w-full ${className}`}>
    {long && <p className="print-controls mb-1 text-xs font-normal text-slate-500">较长计算式可在所在行左右滑动查看。</p>}
    {lines.map((line, index) => <p key={index} className={/[^\s\u3400-\u9fff，。；：！？]{32,}/u.test(line) ? "solution-line max-w-full overflow-x-auto whitespace-pre py-1" : "whitespace-pre-wrap"}>{vectors ? vectorText(line) : mathText(line)}{!line && <br />}</p>)}
  </div>;
}
