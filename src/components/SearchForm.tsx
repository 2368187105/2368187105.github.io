export default function SearchForm({ initial = "" }: { initial?: string }) {
  return <form action="/search/" role="search" className="flex min-w-0 gap-2">
    <label htmlFor="site-keyword" className="sr-only">搜索课程和题目</label>
    <input id="site-keyword" type="search" name="q" defaultValue={initial} required maxLength={100} placeholder="搜索课程和题目，如：导数、空间向量" className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 focus:border-blue-500" />
    <button className="shrink-0 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white">搜索</button>
  </form>;
}
