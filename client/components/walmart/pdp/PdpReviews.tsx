import type { WalmartItem } from "@/lib/walmart-items";
import type { PdpContent, PdpReview } from "@/lib/pdp-content";
import BottomSheet from "@/components/walmart/BottomSheet";
import { Close } from "@/components/walmart/icons";
import { Collapsible, Stars } from "@/components/walmart/pdp/ui";

function Check({ good }: { good: boolean }) {
  return good ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#2A8703]">
      <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#74767C]">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ReviewCard({ r }: { r: PdpReview }) {
  return (
    <article className="flex flex-col gap-1 border-t border-[#E3E4E5] py-3">
      <Stars rating={r.rating} size={13} />
      {r.title && <h3 className="text-[14px] font-bold leading-5 text-ld-text-default">{r.title}</h3>}
      {r.text && <p className="text-[14px] leading-5 text-ld-text-default">{r.text}</p>}
      <p className="text-[12px] leading-4 text-[#74767C]">
        {r.author ?? "Customer"}
        {r.date ? ` · ${r.date}` : ""}
        {r.verified ? " · Verified purchase" : ""}
      </p>
    </article>
  );
}

export function ReviewHighlights({
  content,
  onOpenReviews,
}: {
  content: PdpContent;
  onOpenReviews: () => void;
}) {
  const { positive, negative } = content.reviewSummary;
  if (positive.length === 0 && negative.length === 0) return null;
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={onOpenReviews}
        className="flex w-fit items-center gap-1 text-[14px] font-bold leading-5 text-ld-text-default"
      >
        Customer review highlights
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[...positive.map((t) => [t, true] as const), ...negative.map((t) => [t, false] as const)]
          .slice(0, 6)
          .map(([t, good]) => (
            <span
              key={t}
              className="flex shrink-0 items-center gap-1 rounded-full border border-[#BABBBE] px-3 py-1.5 text-[13px] leading-4 text-ld-text-default"
            >
              <Check good={good} /> {t}
            </span>
          ))}
      </div>
    </div>
  );
}

export function ReviewsSummary({
  item,
  content,
  onOpenReviews,
}: {
  item: WalmartItem;
  content: PdpContent;
  onOpenReviews: () => void;
}) {
  const s = content.reviewSummary;
  const hist = s.histogram;
  const total = hist ? Object.values(hist).reduce((a, b) => a + b, 0) : 0;

  return (
    <Collapsible title="Reviews summary" defaultOpen>
      <div className="flex items-center gap-3">
        <span className="text-[32px] font-bold leading-10 text-ld-text-default">{item.rating}</span>
        <div className="flex flex-col gap-0.5">
          <Stars rating={item.rating} size={16} />
          <span className="text-[13px] leading-4 text-[#74767C]">{item.ratingCount} reviews</span>
        </div>
      </div>

      {hist && total > 0 && (
        <div className="mt-3 flex flex-col gap-1">
          {["5", "4", "3", "2", "1"].map((k) => (
            <div key={k} className="flex items-center gap-2 text-[12px] leading-4 text-[#74767C]">
              <span className="w-3">{k}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E3E4E5]">
                <div
                  className="h-full rounded-full bg-[#FFC220]"
                  style={{ width: `${Math.round(((hist[k] ?? 0) / total) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {(s.positive.length > 0 || s.negative.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {s.positive.map((t) => (
            <span key={t} className="flex items-center gap-1 rounded-full border border-[#BABBBE] px-3 py-1.5 text-[13px] leading-4 text-ld-text-default">
              <Check good /> {t}
            </span>
          ))}
          {s.negative.map((t) => (
            <span key={t} className="flex items-center gap-1 rounded-full border border-[#BABBBE] px-3 py-1.5 text-[13px] leading-4 text-ld-text-default">
              <Check good={false} /> {t}
            </span>
          ))}
        </div>
      )}

      {content.reviews.slice(0, 2).map((r, i) => (
        <ReviewCard key={i} r={r} />
      ))}

      <button
        type="button"
        onClick={onOpenReviews}
        className="mt-2 flex h-10 w-full items-center justify-center rounded-full border border-[#2E2F32] text-[14px] font-bold text-ld-text-default active:bg-walmart-gray-bg"
      >
        View all reviews
      </button>
    </Collapsible>
  );
}

export function PdpReviewsSheet({
  open,
  onClose,
  item,
  content,
}: {
  open: boolean;
  onClose: () => void;
  item: WalmartItem;
  content: PdpContent;
}) {
  return (
    <BottomSheet open={open} onClose={onClose} heightClass="h-[92%]">
      <div className="flex items-center justify-between px-4 pt-4">
        <h2 className="text-[18px] font-bold leading-6 text-ld-text-default">Customer reviews</h2>
        <button type="button" aria-label="Close" onClick={onClose}>
          <Close size={20} className="text-[#2E2F32]" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[32px] font-bold leading-10 text-ld-text-default">{item.rating}</span>
          <div className="flex flex-col gap-0.5">
            <Stars rating={item.rating} size={16} />
            <span className="text-[13px] leading-4 text-[#74767C]">{item.ratingCount} reviews</span>
          </div>
        </div>
        <div className="mt-3">
          {content.reviews.length > 0 ? (
            content.reviews.map((r, i) => <ReviewCard key={i} r={r} />)
          ) : (
            <p className="py-6 text-[14px] leading-5 text-[#74767C]">
              Reviews for this item aren&apos;t available in the prototype.
            </p>
          )}
        </div>
      </div>
    </BottomSheet>
  );
}
