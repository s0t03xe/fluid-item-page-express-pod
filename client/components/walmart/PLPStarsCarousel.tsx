import type { MouseEvent } from "react";
import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";
import { Fulfillment, SaveWithPlus } from "@/components/walmart/PLPRating";
import { Stars } from "@/components/walmart/pdp/ui";

/** Brand from the store name ("Visit the IKT store"). Undefined when the store has no brand name. */
export function brandOf(item: WalmartItem): string | undefined {
  return item.store.match(/^Visit the (.+) store$/)?.[1];
}

/** "Now $X" in regular weight, with the grey strike-through was price when the item has one. */
export function TilePrice({ item }: { item: WalmartItem }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 text-ld-text-default">
      <span className="text-[18px] leading-6">
        {item.priceWas && "Now "}${item.priceDollars}.{item.priceCents}
      </span>
      {item.priceWas && (
        <span className="text-[13px] leading-4 text-[#74767C] line-through">${item.priceWas}</span>
      )}
    </div>
  );
}

export function TileRating({ item }: { item: WalmartItem }) {
  return (
    <div className="flex items-center gap-1.5">
      <Stars rating={item.rating} size={12} />
      <span className="text-[13px] leading-4 text-[#74767C]">{item.ratingCount}</span>
    </div>
  );
}

const PILL =
  "flex h-8 items-center self-start rounded-full bg-walmart-blue px-4 text-[15px] font-bold text-white active:opacity-90";

export default function PLPStarsCarousel({
  items,
  onSelect,
  title,
  subtitle,
  variant = "rated",
}: {
  items: WalmartItem[];
  onSelect: (item: WalmartItem) => void;
  title?: string;
  subtitle?: string;
  /** "rated": outlined badge and + Add. "popular": light badge, heart, options. */
  variant?: "rated" | "popular";
}) {
  const popular = variant === "popular";
  return (
    <section className="border-b border-walmart-gray-line bg-white py-4">
      <div className="flex items-start justify-between gap-3 px-4">
        <div className="min-w-0">
          <h2 className="text-[18px] font-bold leading-6 text-ld-text-default">
            {title ?? `4 stars and above (${items.length + 7})`}
          </h2>
          {subtitle && (
            <p className="mt-0.5 text-[13px] leading-4 text-[#74767C]">{subtitle}</p>
          )}
        </div>
        <span className="shrink-0 pt-1 text-[13px] leading-4 text-[#74767C]">Sponsored</span>
      </div>

      <div
        data-plp-hscroll
        className="mt-4 flex gap-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const open = (e: MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            onSelect(item);
          };
          const brand = brandOf(item);
          const optionCount = item.swatches?.length ?? 0;
          const hasOptions = optionCount > 1 || Boolean(item.optionsFrom);
          const optionsLine =
            optionCount > 1
              ? `+ ${optionCount} options`
              : item.optionsFrom
                ? `Options from $${item.optionsFrom}`
                : null;

          return (
            <div
              key={item.id}
              data-plp-id={item.id}
              onClick={() => onSelect(item)}
              className={`flex w-[150px] shrink-0 cursor-pointer flex-col ${popular ? "px-2" : ""}`}
            >
              {popular ? (
                <>
                  <div className="flex h-6 items-start">
                    {item.badge && (
                      <span className="rounded-[4px] bg-[#E4ECFC] px-1.5 py-0.5 text-[12px] font-bold leading-4 text-walmart-blue">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="relative mt-1">
                    <button
                      type="button"
                      onClick={open}
                      aria-label={item.title}
                      className="block aspect-square w-full bg-white"
                    >
                      <img src={item.image} alt="" className="h-full w-full object-contain" />
                    </button>
                    <button
                      type="button"
                      aria-label="Add to list"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
                    >
                      <Heart size={14} />
                    </button>
                  </div>
                  {optionsLine && (
                    <p className="mt-2 text-center text-[14px] leading-5 text-[#74767C]">
                      {optionsLine}
                    </p>
                  )}
                  <button type="button" onClick={open} className={`mt-2 ${PILL}`}>
                    {hasOptions ? "Options" : "+ Add"}
                  </button>
                </>
              ) : (
                <>
                  <div className="flex h-6 items-start">
                    {item.badge && (
                      <span className="rounded-[4px] border border-walmart-blue bg-white px-1.5 py-0.5 text-[12px] font-medium leading-4 text-walmart-blue">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    aria-label={item.title}
                    className="mt-1 block aspect-square w-full bg-white"
                  >
                    <img src={item.image} alt="" className="h-full w-full object-contain" />
                  </button>
                  <button type="button" onClick={open} className={`mt-3 ${PILL}`}>
                    + Add
                  </button>
                </>
              )}

              <div className="mt-3 flex flex-col gap-1">
                {popular && item.sponsored && (
                  <span className="text-[13px] leading-4 text-[#74767C]">Sponsored</span>
                )}
                <TilePrice item={item} />
                {brand && (
                  <p className="text-[14px] font-bold leading-5 text-ld-text-default">{brand}</p>
                )}
                <button
                  type="button"
                  onClick={open}
                  className="line-clamp-3 block text-left text-[14px] leading-4 text-ld-text-default"
                >
                  {item.title}
                </button>
                <TileRating item={item} />
                {popular && item.saveWithPlus && <SaveWithPlus />}
                {item.shippingLines?.map((line) => (
                  <Fulfillment key={line} line={line} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
