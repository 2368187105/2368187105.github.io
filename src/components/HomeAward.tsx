"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/images/math-competition-2018.jpg",
    width: 1115,
    height: 750,
    title: "数学竞赛证书",
    detail: "2018 年 · 连云港市 · 高中组一等奖",
    alt: "2018 年连云港市数学竞赛高中组一等奖证书，姓名首字为孟，其余部分遮挡",
    maskName: true,
  },
  {
    src: "/images/sjtu-masters-admission.jpg",
    width: 1786,
    height: 1280,
    title: "硕士录取通知书",
    detail: "上海交通大学 · 硕士研究生录取通知书",
    alt: "上海交通大学硕士研究生录取通知书红色封面",
    maskName: false,
  },
];
type Photo = typeof photos[number];

function Photograph({ photo, thumbnail = false, enlarged = false }: { photo: Photo; thumbnail?: boolean; enlarged?: boolean }) {
  return <div className="relative w-full" style={thumbnail ? { maxWidth: 78 * photo.width / photo.height } : enlarged ? { width: "max(100%, 1100px)" } : undefined}>
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
      sizes={thumbnail ? "144px" : "(max-width: 768px) 100vw, 1100px"}
      className={`block h-auto w-full ${photo.maskName ? "brightness-[1.08] contrast-[1.06] saturate-[0.9]" : ""}`} />
    {/* The overlay scales with the actual photo, preserving the visible surname 孟. */}
    {photo.maskName && <span aria-hidden="true" className="pointer-events-none absolute left-[61%] top-[6%] h-[18%] w-[10.2%] bg-[#dededc]" />}
  </div>;
}

export default function HomeAward() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Photo | null>(null);
  const [enlarged, setEnlarged] = useState(false);
  const open = selected !== null;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function showPhoto(photo: Photo) {
    setSelected(photo);
    setEnlarged(false);
    dialog.current?.showModal();
  }

  return <section id="math-story" aria-labelledby="math-story-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-6 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5">
      <div>
        <h2 id="math-story-heading" className="text-sm font-semibold text-slate-600">学习路上的记录</h2>
        <p className="mt-1 text-xs leading-6 text-slate-500">竞赛证书与录取通知书 · 点击照片查看大图</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:flex sm:shrink-0 sm:gap-4">
        {photos.map(photo => <figure key={photo.src} className="min-w-0 sm:w-36">
          <button type="button" onClick={() => showPhoto(photo)} aria-label={`放大查看${photo.title}`} aria-haspopup="dialog"
            className="flex h-20 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-md border border-slate-100 bg-slate-50 transition hover:border-slate-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
            <Photograph photo={photo} thumbnail />
          </button>
          <figcaption className="mt-1.5 text-center text-xs leading-5 text-slate-500">{photo.title}</figcaption>
        </figure>)}
      </div>
    </div>
    <dialog ref={dialog} aria-labelledby="award-dialog-heading" onClose={() => { setSelected(null); setEnlarged(false); }}
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      className="fixed inset-0 m-auto max-h-[94svh] w-[calc(100%-1.5rem)] max-w-6xl overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-2xl backdrop:bg-slate-950/70">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-6">
        <div><h3 id="award-dialog-heading" className="font-semibold text-slate-900">{selected?.title ?? "照片预览"}</h3><p className="mt-1 text-xs text-slate-500">{selected?.detail}</p></div>
        <div className="flex items-center gap-2">
          <button type="button" aria-pressed={enlarged} onClick={() => setEnlarged(value => !value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">{enlarged ? "适合屏幕" : "放大细节"}</button>
          <button type="button" autoFocus onClick={() => dialog.current?.close()} className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">关闭</button>
        </div>
      </div>
      <div className="max-h-[calc(94svh-13rem)] overflow-auto bg-[#f5f3ee] p-3 sm:max-h-[72svh] sm:p-5" tabIndex={0} aria-label="照片，可滚动查看放大细节">
        {selected && <Photograph photo={selected} enlarged={enlarged} />}
      </div>
      <p className="px-4 py-3 text-xs leading-6 text-slate-500">{selected?.maskName ? "姓名首字保留“孟”，其余部分遮挡。" : ""}放大后可左右滑动查看；按 Esc 或点击空白处关闭。</p>
    </dialog>
  </section>;
}
