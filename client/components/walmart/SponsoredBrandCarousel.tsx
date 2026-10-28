import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";
import PLPRating from "@/components/walmart/PLPRating";

export default function SponsoredBrandCarousel({
  items,
  onSelect,
}: {
  items: WalmartItem[];
  onSelect: (item: WalmartItem) => void;
}) {
  return (
    <section className="flex flex-col gap-3 bg-white py-4">
      <div className="flex items-center gap-3 px-4">
        <span
          aria-label="VEATOOL"
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center text-[#1B2A6B]"
        >
          <svg width="22" height="16" viewBox="0 0 24 18" fill="none">
            <circle cx="12" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5 9h3l2-4 3 8 2-4h4" stroke="#E4007C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[7px] font-bold leading-[8px] tracking-wide">VEATOOL</span>
        </span>
        <div className="flex flex-col">
          <h2 className="text-[16px] font-bold leading-5 text-ld-text-default">
            Sounds always twice the price
          </h2>
          <span className="text-[13px] leading-4 text-[#74767C]">Sponsored by VEATOOL</span>
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <div key={item.id} className="flex w-[330px] shrink-0 snap-start items-start gap-3">
            <button
              type="button"
              onClick={() => onSelect(item)}
              aria-label={item.title}
              className="relative h-[120px] w-[110px] shrink-0 bg-white"
            >
              <img src={item.image} alt="" className="h-full w-full object-contain" />
              <span className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                <Heart size={14} />
              </span>
            </button>
            <div className="flex w-0 flex-1 flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
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
                onClick={() => onSelect(item)}
                className="line-clamp-2 text-left text-[14px] leading-5 text-ld-text-default"
              >
                {item.title}
              </button>
              <PLPRating
                rating={item.rating}
                count={item.ratingCount}
                idPrefix={`brand-${item.id}`}
              />
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="mt-1 flex h-10 items-center justify-center rounded-full bg-walmart-blue text-[15px] font-bold text-white active:opacity-90"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
