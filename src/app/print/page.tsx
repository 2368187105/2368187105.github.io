"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";
import SiteHeader from "@/components/SiteHeader";
import { mathText } from "@/components/MathText";
import { vectorText } from "@/components/VectorText";
import { questions, practiceTopics, type Question } from "@/data/questions";
import { scoringSteps } from "@/lib/assessment";
export default function PrintPage() {
    const [items, setItems] = useState<Question[]>([]), [solutions, setSolutions] = useState(false), [ready, setReady] = useState(false), [title, setTitle] = useState("学习练习单"), [message, setMessage] = useState("");
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            const query = new URLSearchParams(window.location.search), ids = query.get("ids")?.split(",").filter(Boolean);
            const topic = query.get("topic");
            const selected = ids ? [...new Set(ids)].flatMap(id => { const question = questions.find(q => q.id === id); return question ? [question] : []; }) : questions.filter(q => q.topic === topic);
            setItems(selected.slice(0, 60));
            setSolutions(query.get("mode") === "solutions");
            setTitle(topic ?? "错题复习练习单");
            if (ids && selected.length < new Set(ids).size)
                setMessage("部分题号已无法识别，仅显示当前题库中仍存在的题目。");
            if (selected.length > 60)
                setMessage("每次最多导出 60 题，请分批打印。");
            setReady(true);
        });
        return () => cancelAnimationFrame(frame);
    }, []);
    function changeMode(value: boolean) { setSolutions(value); const query = new URLSearchParams(window.location.search); query.set("mode", value ? "solutions" : "questions"); window.history.replaceState(null, "", `/print/?${query}`); }
    return <main className="print-page min-h-screen bg-slate-100"><div className="print-controls"><SiteHeader /></div><div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
  <section className="print-controls mb-6 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7"><h1 className="text-xl font-bold text-slate-900">打印与导出</h1><p className="mt-3 text-slate-600">选择题目版或完整解析版，再点击“打印 / 保存为 PDF”。在浏览器打印窗口选择打印机，或选择“另存为 PDF”；建议使用 A4 纵向。</p><div className="mt-4 flex flex-wrap gap-3"><button aria-pressed={!solutions} onClick={() => changeMode(false)} className={`rounded-lg border px-4 py-2 ${!solutions ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200"}`}>仅题目与答题区</button><button aria-pressed={solutions} onClick={() => changeMode(true)} className={`rounded-lg border px-4 py-2 ${solutions ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200"}`}>题目与完整解析</button><button disabled={!ready || items.length === 0} onClick={() => window.print()} className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-40">打印 / 保存为 PDF</button><Link href="/grade3/chapter-tests/" className="py-2 text-blue-600">选择章末试卷 →</Link></div>
   <label className="mt-4 block">或选择其他专题<select aria-label="打印专题" value="" onChange={e => { const topic = e.target.value; if (!topic)
        return; setItems(questions.filter(q => q.topic === topic).slice(0, 60)); setTitle(topic); setMessage(""); window.history.replaceState(null, "", `/print/?topic=${encodeURIComponent(topic)}&mode=${solutions ? "solutions" : "questions"}`); }} className="mt-2 block w-full rounded-lg border border-slate-200 bg-white p-2"><option value="">请选择专题</option>{practiceTopics.map(topic => <option key={topic}>{topic}</option>)}</select></label>{message && <p role="status" className="mt-3 text-amber-700">{message}</p>}
  </section>
  {!ready ? <p>正在整理题目…</p> : items.length === 0 ? <p className="print-controls rounded-xl bg-white p-6 text-sm">尚未选择题目，请从上方选择专题，或从错题本、专题训练进入。</p> : <article className="print-sheet bg-white p-6 text-slate-900 sm:p-10">
   <header className="border-b border-slate-300 pb-5"><p className="text-xs tracking-wide text-slate-500">彻凌数学 · 学习练习单</p><h2 className="mt-3 text-2xl font-bold">{title}</h2><p className="mt-3 text-sm">{items.length} 题 · {solutions ? "完整解析版" : "题目版"}</p>{!solutions && <p className="mt-5 text-sm">姓名：____________　日期：____________　用时：____________</p>}</header>
   <div className="mt-6 space-y-8">{items.map((question, index) => {
                const render = (value: string) => question.topic.includes("向量") ? vectorText(value) : mathText(value);
                const steps = scoringSteps(question);
                return <section key={question.id} className="print-question"><h3 className="font-semibold leading-8">{index + 1}. {render(question.question)}</h3>{question.formula && <div className="my-3 overflow-x-auto"><BlockMath math={question.formula}/></div>}{question.options.length > 0 && <ol className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">{question.options.map(option => <li key={option.key}>{option.key}. {render(option.text)}</li>)}</ol>}
     {solutions ? <div className="mt-4 space-y-3 text-sm leading-8"><p className="font-semibold">参考答案：{render(question.correctAnswer)}</p><p className="whitespace-pre-wrap">{render(question.explanation)}</p>{steps.length > 0 && <div className="rounded-lg border border-slate-200 p-3"><h4 className="font-semibold">{question.id.startsWith("g3-review-") ? "步骤评分建议（8 分，学生自评）" : "解答检查点"}</h4><ol>{steps.map((step, i) => <li key={i}>{i + 1}. {render(step.label)}{question.id.startsWith("g3-review-") ? `（${step.points} 分）` : ""}</li>)}</ol></div>}</div> : question.kind === "written" ? <div className="print-workspace mt-4 min-h-52 border-b border-dashed border-slate-300"><p className="text-xs text-slate-400">解答过程：</p></div> : <p className="mt-6 text-sm">答案：________________________</p>}
     <p className="mt-3 break-all text-[10px] text-slate-400">题号：{question.id}</p>
    </section>;
            })}</div>
   <footer className="mt-8 border-t border-slate-300 pt-4 text-xs leading-6 text-slate-500">彻凌数学 · 本站学习题库 · {solutions ? "请逐步核对推导、条件和结论。" : "请独立完成，再对照完整解析订正。"}</footer>
  </article>}
 </div></main>;
}
