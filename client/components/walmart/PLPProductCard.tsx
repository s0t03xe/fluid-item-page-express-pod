import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";

function StarIcon({ variant }: { variant: "full" | "half" | "empty" }) {
  if (variant === "empty") {
    return (
      <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0.5 7.5 4l3.5.5-2.7 2.5.7 3.5L6 8.7 2.5 10.5l.7-3.5L.5 4.5 4 4Z"
          stroke="#BABBBE"
        />
      </svg>
    );
  }
  return (
    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
      <defs>
        <linearGradient id="plp-star-half">
          <stop offset="50%" stopColor="#FFC220" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M6 0.5 7.5 4l3.5.5-2.7 2.5.7 3.5L6 8.7 2.5 10.5l.7-3.5L.5 4.5 4 4Z"
        fill={variant === "half" ? "url(#plp-star-half)" : "#FFC220"}
        stroke={variant === "half" ? "#FFC220" : "none"}
      />
    </svg>
  );
}

function RatingRow({ rating, count }: { rating: number; count: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-px">
        {Array.from({ length: 5 }).map((_, i) => {
          const variant =
            i + 1 <= Math.floor(rating)
              ? "full"
              : i < rating
                ? "half"
                : "empty";
          return <StarIcon key={i} variant={variant} />;
        })}
      </div>
      <span className="text-[12px] leading-4 text-[#74767C]">{count}</span>
    </div>
  );
}

export default function PLPProductCard({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: () => void;
}) {
  return (
    <div className="flex flex-col gap-2 py-4">
      {item.badge && (
        <span className="w-fit rounded border border-[#BEDBFF] bg-[#F0F5FF] px-2 py-1 text-[12px] font-bold leading-4 text-[#114AB6]">
          {item.badge}
        </span>
      )}

      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onSelect}
          className="relative aspect-square w-0 flex-1 overflow-hidden rounded-lg bg-white"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
          <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Heart size={13} />
          </span>
        </button>

        <div className="flex w-0 flex-1 flex-col gap-1">
          {item.sponsored ? (
            <span className="text-[12px] leading-4 text-[#74767C]">
              Sponsored
            </span>
          ) : (
            <div className="h-4" />
          )}

          <div className="flex flex-wrap items-baseline gap-2">
            {item.priceWas ? (
              <>
                <span className="text-[18px] font-bold leading-6 text-ld-text-default">
                  Now ${item.priceDollars}.{item.priceCents}
                </span>
                <span className="text-[13px] leading-4 text-[#74767C] line-through">
                  ${item.priceWas}
                </span>
              </>
            ) : (
              <span className="text-[18px] font-bold leading-6 text-ld-text-default">
                ${item.priceDollars}.{item.priceCents}
              </span>
            )}
          </div>
          {item.optionsFrom && (
            <span className="text-[12px] leading-4 text-[#74767C]">
              Options from ${item.optionsFrom}
            </span>
          )}

          <button
            type="button"
            onClick={onSelect}
            className="line-clamp-2 text-left text-[14px] leading-5 text-ld-text-default"
          >
            {item.title}
          </button>

          <RatingRow rating={item.rating} count={item.ratingCount} />

          {item.saveWithPlus && (
            <span className="flex items-center gap-1 text-[13px] font-semibold text-walmart-blue">
              Save with{" "}
              <span className="rounded bg-walmart-blue px-1 text-[11px] font-bold text-white">
                W+
              </span>
            </span>
          )}

          {item.shippingLines?.map((line) => (
            <p key={line} className="text-[12px] leading-4 text-ld-text-default">
              {line}
            </p>
          ))}

          {item.swatches && (
            <div className="flex gap-1.5 pt-1">
              {item.swatches.map((color) => (
                <span
                  key={color}
                  className="h-4 w-4 rounded-full border border-walmart-gray-line"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}

          {item.appleOffer && (
            <span className="text-[12px] leading-4 text-ld-text-default">
              {item.appleOffer}
            </span>
          )}

          <button
            type="button"
            onClick={onSelect}
            className="mt-1 flex h-11 items-center justify-center rounded-full bg-walmart-blue text-[16px] font-bold text-white active:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
