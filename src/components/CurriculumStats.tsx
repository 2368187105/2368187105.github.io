export default function CurriculumStats({ chapters, lessons, questions }: {
  chapters: number; lessons: number; questions: number;
}) {
  return <dl className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-4 sm:gap-4">
    {[
      { label: "章节数", value: chapters, unit: "章" },
      { label: "课程数", value: lessons, unit: "节" },
      { label: "训练题数", value: questions, unit: "道" },
    ].map(item => <div key={item.label} className="min-w-0">
      <dt className="text-xs text-slate-500">{item.label}</dt>
      <dd className="mt-2 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">{item.value}<span className="ml-1 text-xs font-normal text-slate-500">{item.unit}</span></dd>
    </div>)}
  </dl>;
}
