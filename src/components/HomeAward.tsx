"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const certificateAlt = "2018 年连云港市数学竞赛高中组一等奖证书，姓名首字为孟，其余部分遮挡";

function CertificatePhoto({ enlarged = false }: { enlarged?: boolean }) {
  return <div className="relative" style={enlarged ? { width: "max(100%, 1100px)" } : undefined}>
    <Image src="/images/math-competition-2018.jpg" alt={certificateAlt} width={1115} height={750}
      sizes="(max-width: 768px) 100vw, 700px"
      className="block h-auto w-full brightness-[1.08] contrast-[1.06] saturate-[0.9]" />
    {/* Keep the visible surname 孟. Cover only the already obscured remainder;
        the source photo and all award text/seals are preserved without AI redraw. */}
    <span aria-hidden="true" className="pointer-events-none absolute left-[61%] top-[6%] h-[18%] w-[10.2%] bg-[#dededc]" />
  </div>;
}

export default function HomeAward() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function showCertificate() {
    dialog.current?.showModal();
    setOpen(true);
  }

  return <section id="math-story" aria-labelledby="math-story-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white sm:rounded-3xl">
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center bg-[#eff5ff] p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold tracking-wider text-blue-600">热爱数学 · 认真积累</p>
          <h2 id="math-story-heading" className="mt-4 text-2xl font-bold leading-snug tracking-tight text-slate-900 lg:text-3xl">把热爱，变成<br className="hidden lg:block" />一步步的积累。</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">重视每一步推导，也珍惜每一次进步。从知识理解、典型例题到独立训练，让学习有方法，让思考有过程。</p>
          <div className="mt-6 border-l-2 border-blue-500 pl-4">
            <p className="text-xs font-medium text-blue-600">2018 年 · 连云港市数学竞赛</p>
            <p className="mt-2 text-lg font-bold text-slate-900">高中组一等奖</p>
          </div>
          <a href="#curriculum" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">从一节课开始 <span aria-hidden="true">→</span></a>
        </div>
        <figure className="flex min-w-0 flex-col justify-center bg-[#f5f3ee] p-4 sm:p-6">
          <button type="button" onClick={showCertificate} aria-label="放大查看数学竞赛获奖证书" aria-haspopup="dialog"
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-black/5 bg-white text-left shadow-[0_8px_30px_rgba(15,23,42,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            <CertificatePhoto />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition group-hover:bg-blue-50 group-hover:text-blue-700">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5M10.5 7.5v6M7.5 10.5h6"/></svg>
              点击查看大图
            </span>
          </button>
          <figcaption className="mt-3 text-center text-xs leading-6 text-slate-500">获奖证书照片 · 保留原始内容，部分姓名已遮挡</figcaption>
        </figure>
      </div>
    </div>
    <dialog ref={dialog} aria-labelledby="award-dialog-heading" onClose={() => { setOpen(false); setEnlarged(false); }}
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      className="fixed inset-0 m-auto max-h-[94svh] w-[calc(100%-1.5rem)] max-w-6xl overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-2xl backdrop:bg-slate-950/70">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-6">
        <div><h3 id="award-dialog-heading" className="font-semibold text-slate-900">数学竞赛获奖证书</h3><p className="mt-1 text-xs text-slate-500">2018 年 · 连云港市 · 高中组一等奖</p></div>
        <div className="flex items-center gap-2">
          <button type="button" aria-pressed={enlarged} onClick={() => setEnlarged(value => !value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">{enlarged ? "适合屏幕" : "放大细节"}</button>
          <button type="button" autoFocus onClick={() => dialog.current?.close()} className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">关闭</button>
        </div>
      </div>
      <div className="max-h-[calc(94svh-13rem)] overflow-auto bg-[#f5f3ee] p-3 sm:max-h-[72svh] sm:p-5" tabIndex={0} aria-label="证书图片，可滚动查看放大细节">
        {open && <CertificatePhoto enlarged={enlarged} />}
      </div>
      <p className="px-4 py-3 text-xs leading-6 text-slate-500">姓名首字按原图保留“孟”，其余部分遮挡。放大后可左右滑动查看；按 Esc 或点击空白处关闭。</p>
    </dialog>
  </section>;
}
