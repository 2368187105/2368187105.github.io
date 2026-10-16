"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";

type Option = {
  id: string;
  text: string;
};

export default function MultipleChoiceQuestion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = "B";

  const options: Option[] = [
    {
      id: "A",
      text: "在整个实数范围内单调递增",
    },
    {
      id: "B",
      text: "在 (-∞, 1] 上递减，在 [1, +∞) 上递增",
    },
    {
      id: "C",
      text: "在 (-∞, 1] 上递增，在 [1, +∞) 上递减",
    },
    {
      id: "D",
      text: "在整个实数范围内单调递减",
    },
  ];

  const isCorrect = selected === correctAnswer;

  function submitAnswer() {
    if (!selected) {
      return;
    }

    setSubmitted(true);
  }

  function resetQuestion() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold text-blue-600">
        06
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        在线自测
      </h2>

      <p className="mt-5 leading-7 text-slate-700">
        已知函数
      </p>

      <BlockMath math="f(x)=x^2-2x+3" />

      <p className="leading-7 text-slate-700">
        下列关于该函数单调性的说法正确的是：
      </p>

      <div className="mt-6 space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              if (!submitted) {
                setSelected(option.id);
              }
            }}
            className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
              selected === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <span className="font-semibold">
              {option.id}.
            </span>

            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={submitAnswer}
          disabled={!selected}
          className={`mt-6 rounded-lg px-6 py-3 text-sm font-medium text-white ${
            selected
              ? "bg-slate-900 hover:bg-slate-700"
              : "cursor-not-allowed bg-slate-300"
          }`}
        >
          提交答案
        </button>
      )}

      {submitted && (
        <div className="mt-6">
          {isCorrect ? (
            <div className="rounded-xl bg-green-50 p-5">
              <p className="font-bold text-green-700">
                ✓ 回答正确
              </p>

              <p className="mt-2 text-slate-700">
                正确答案：B
              </p>
            </div>
          ) : (
            <div className="rounded-xl bg-red-50 p-5">
              <p className="font-bold text-red-700">
                ✕ 回答错误
              </p>

              <p className="mt-2 text-slate-700">
                你的答案：{selected}
              </p>

              <p className="mt-1 text-slate-700">
                正确答案：B
              </p>
            </div>
          )}

          <div className="mt-4 rounded-xl bg-slate-50 p-6">
            <p className="font-bold text-slate-900">
              解析
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              将函数配方：
            </p>

            <BlockMath math="f(x)=(x-1)^2+2" />

            <p className="leading-7 text-slate-700">
              二次函数开口向上，对称轴为 x = 1，
              因此在对称轴左侧单调递减，在右侧单调递增。
            </p>
          </div>

          <button
            onClick={resetQuestion}
            className="mt-5 rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            重新作答
          </button>
        </div>
      )}
    </div>
  );
}