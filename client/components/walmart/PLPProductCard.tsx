import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";
import PLPBadge from "@/components/walmart/PLPBadge";
import PLPPrice from "@/components/walmart/PLPPrice";
import PLPRating, { Fulfillment, SaveWithPlus } from "@/components/walmart/PLPRating";

export default function PLPProductCard({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: () => void;
}) {
  return (
    <div className="flex items-start gap-3 py-5">
      <div className="relative w-0 flex-1">
        <button
          type="button"
          onClick={onSelect}
          aria-label={item.title}
          className="relative block aspect-square w-full overflow-hidden bg-white"
        >
          <img src={item.image} alt="" className="h-full w-full object-contain" />
        </button>
        <div className="pointer-events-none absolute left-0 top-0">
          <PLPBadge item={item} />
        </div>
        <button
          type="button"
          aria-label="Add to list"
          className="absolute right-1 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Heart size={14} />
        </button>
        {item.swatches && (
          <div className="mt-1 flex items-center gap-1.5 pl-2">
            {item.swatches.map((color) => (
              <span
                key={color}
                className="h-4 w-4 rounded-full border border-walmart-gray-line"
                style={{ backgroundColor: color }}
              />
            ))}
            {item.swatches.length > 3 && (
              <span className="text-[12px] text-ld-text-default">+2</span>
            )}
          </div>
        )}
      </div>

      <div className="flex w-0 flex-1 flex-col gap-1">
        {item.sponsored && (
          <span className="text-[13px] leading-4 text-[#74767C]">Sponsored</span>
        )}
        <PLPPrice item={item} />
        {item.optionsFrom && (
          <span className="text-[14px] leading-5 text-[#74767C]">
            Options from ${item.optionsFrom}
          </span>
        )}

        <button
          type="button"
          onClick={onSelect}
          className="line-clamp-3 text-left text-[15px] leading-5 text-ld-text-default"
        >
          {item.title}
        </button>

        <PLPRating rating={item.rating} count={item.ratingCount} idPrefix={`plp-${item.id}`} />
        {item.saveWithPlus && <SaveWithPlus />}
        {item.shippingLines?.map((line) => <Fulfillment key={line} line={line} />)}
        {item.appleOffer && (
          <span className="text-[13px] leading-4 text-ld-text-default">{item.appleOffer}</span>
        )}

        <button
          type="button"
          onClick={onSelect}
          className="mt-2 flex h-10 items-center justify-center rounded-full bg-walmart-blue text-[15px] font-bold text-white active:opacity-90"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
