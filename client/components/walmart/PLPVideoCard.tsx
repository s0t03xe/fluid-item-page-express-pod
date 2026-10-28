import { useEffect, useState } from "react";
import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";
import PLPBadge from "@/components/walmart/PLPBadge";
import PLPRating from "@/components/walmart/PLPRating";

const HEADLINES = [
  "40mm Dynamic Drivers",
  "Bass Boosted by 90%",
  "120H Playtime",
  "Hi-Res Audio, 6-Mic Clear Calls",
];

export default function PLPVideoCard({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: () => void;
}) {
  const [headline, setHeadline] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    const t = setInterval(() => setHeadline((h) => (h + 1) % HEADLINES.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!videoEl) return;
    if (paused) videoEl.pause();
    else void videoEl.play().catch(() => undefined);
  }, [paused, videoEl]);

  return (
    <section className="px-4 py-4">
      <div className="overflow-hidden rounded-xl border border-walmart-gray-line bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full bg-black">
          <video
            ref={setVideoEl}
            src={item.galleryVideoSrc}
            poster={item.galleryVideoPoster}
            muted
            loop
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent px-3 pb-6 pr-12 pt-3">
            <p className="text-[18px] font-bold leading-6 text-white">{HEADLINES[headline]}</p>
          </div>
          <button
            type="button"
            aria-label={paused ? "Play video" : "Pause video"}
            onClick={() => setPaused((p) => !p)}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ld-text-default"
          >
            {paused ? (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 1.5v9l7-4.5-7-4.5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 1.5h2v9H3zM7 1.5h2v9H7z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-start gap-3 p-3">
          <div className="relative w-[34%] shrink-0">
            <button
              type="button"
              onClick={onSelect}
              aria-label={item.title}
              className="block aspect-square w-full"
            >
              <img src={item.image} alt="" className="h-full w-full object-contain" />
            </button>
            <div className="pointer-events-none absolute left-0 top-0">
              <PLPBadge item={item} />
            </div>
            <span className="absolute right-0 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
              <Heart size={14} />
            </span>
          </div>
          <div className="flex w-0 flex-1 flex-col gap-1">
            <span className="text-[13px] leading-4 text-[#74767C]">Sponsored</span>
            <div className="flex flex-wrap items-baseline gap-1.5">
              <span className="text-[18px] leading-6 text-ld-text-default">
                Now ${item.priceDollars}.{item.priceCents}
              </span>
              {item.priceWas && (
                <span className="text-[13px] leading-4 text-[#74767C] line-through">
                  ${item.priceWas}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={onSelect}
              className="line-clamp-2 text-left text-[14px] leading-5 text-ld-text-default"
            >
              {item.title}
            </button>
            <PLPRating rating={item.rating} count={item.ratingCount} idPrefix="video" />
            <button
              type="button"
              onClick={onSelect}
              className="mt-1 flex h-10 items-center justify-center rounded-full bg-walmart-blue text-[15px] font-bold text-white active:opacity-90"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
