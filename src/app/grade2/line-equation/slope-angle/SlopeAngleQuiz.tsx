
"use client";

import { useState } from "react";
import { grade2Questions } from "@/data/questions";

const lessonQuestions = grade2Questions.filter(
  (question) => question.topic === "直线的斜率与倾斜角"
);

export default function SlopeAngleQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = lessonQuestions.filter(
    (question) => Boolean(answers[question.id])
  ).length;

  const allAnswered = answeredCount === lessonQuestions.length;

  const score = lessonQuestions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length;

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section
      id="lesson-quiz"
      className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
    >
      <p className="text-xs font-semibold tracking-wide text-blue-600">
        KNOWLEDGE CHECK
      </p>

      <h2 className="mt-2 text-xl font-bold text-slate-900">
        五、课堂选择题
      </h2>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        共 3 道单项选择题。请选择答案，提交后查看得分与详细解析。
      </p>

      <div className="mt-6 space-y-6">
        {lessonQuestions.map((question, index) => (
          <article
            key={question.id}
            className="rounded-xl border border-slate-100 p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                {index + 1}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-7 text-slate-900">
                  {question.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {question.question}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.key;
                const isCorrect = option.key === question.correctAnswer;
                const showCorrect = submitted && isCorrect;
                const showWrong = submitted && selected && !isCorrect;

                let optionStyle =
                  "border-slate-200 bg-white hover:border-blue-300";

                if (selected && !submitted) {
                  optionStyle = "border-blue-500 bg-blue-50";
                } else if (showCorrect) {
                  optionStyle = "border-emerald-300 bg-emerald-50";
                } else if (showWrong) {
                  optionStyle = "border-red-300 bg-red-50";
                }

                return (
                  <label
                    key={option.key}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${optionStyle} ${
                      submitted ? "cursor-default" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.key}
                      checked={selected}
                      disabled={submitted}
                      onChange={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [question.id]: option.key,
                        }))
                      }
                      className="mt-1 accent-blue-600"
                    />

                    <span className="flex-1 text-sm leading-6 text-slate-700">
                      {option.key}. {option.text}
                    </span>

                    {showCorrect && (
                      <span className="shrink-0 text-xs font-medium text-emerald-700">
                        正确答案
                      </span>
                    )}

                    {showWrong && (
                      <span className="shrink-0 text-xs font-medium text-red-600">
                        你的选择
                      </span>
                    )}
                  </label>
                );
              })}
            </div>

            {submitted && (
              <div className="mt-4 rounded-xl bg-slate-50 p-4">
                <p
                  className={`text-sm font-semibold ${
                    answers[question.id] === question.correctAnswer
                      ? "text-emerald-700"
                      : "text-red-600"
                  }`}
                >
                  {answers[question.id] === question.correctAnswer
                    ? "回答正确"
                    : `回答错误，正确答案是 ${question.correctAnswer}`}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {question.explanation}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {!submitted && (
        <div className="mt-6">
          <p className="mb-3 text-sm text-slate-500">
            已完成 {answeredCount}/{lessonQuestions.length} 道题
          </p>

          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            提交答案
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
          <p className="text-sm text-slate-600">本次练习成绩</p>

          <p className="mt-2 text-3xl font-bold text-blue-700">
            {score}/{lessonQuestions.length}
          </p>

          <p className="mt-2 text-sm text-slate-600">
            正确率：
            {Math.round((score / lessonQuestions.length) * 100)}%
          </p>

          <button
            type="button"
            onClick={resetQuiz}
            className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-300"
          >
            重新作答
          </button>
        </div>
      )}
    </section>
  );
}
