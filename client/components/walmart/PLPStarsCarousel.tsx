import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";
import PLPBadge from "@/components/walmart/PLPBadge";
import PLPPrice from "@/components/walmart/PLPPrice";
import PLPRating, { Fulfillment, SaveWithPlus } from "@/components/walmart/PLPRating";

export default function PLPStarsCarousel({
  items,
  onSelect,
}: {
  items: WalmartItem[];
  onSelect: (item: WalmartItem) => void;
}) {
  return (
    <section className="border-b border-walmart-gray-line bg-white py-4">
      <div className="flex items-baseline justify-between px-4">
        <h2 className="text-[18px] font-bold leading-6 text-ld-text-default">
          4 stars and above ({items.length + 7})
        </h2>
        <span className="text-[13px] leading-4 text-[#74767C]">Sponsored</span>
      </div>

      <div className="mt-3 flex gap-3 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <div key={item.id} className="flex w-[168px] shrink-0 flex-col gap-1.5">
            <div className="relative">
              <button
                type="button"
                onClick={() => onSelect(item)}
                aria-label={item.title}
                className="block aspect-square w-full bg-white"
              >
                <img src={item.image} alt="" className="h-full w-full object-contain" />
              </button>
              <div className="pointer-events-none absolute left-0 top-0">
                <PLPBadge item={item} />
              </div>
              <button
                type="button"
                aria-label="Add to list"
                className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm"
              >
                <Heart size={14} />
              </button>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="absolute bottom-0 left-0 flex h-9 items-center rounded-full bg-walmart-blue px-3 text-[15px] font-bold text-white active:opacity-90"
              >
                + Add
              </button>
            </div>
            <div className="mt-1">
              <PLPPrice item={item} size="sm" />
            </div>
            {item.optionsFrom && (
              <span className="text-[13px] leading-4 text-[#74767C]">
                Options from ${item.optionsFrom}
              </span>
            )}
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
              idPrefix={`stars-${item.id}`}
            />
            {item.saveWithPlus && <SaveWithPlus />}
            {item.shippingLines?.map((line) => <Fulfillment key={line} line={line} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
