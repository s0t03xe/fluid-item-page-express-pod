import { useState, type ReactNode } from "react";
import type { WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";
import { InfoIcon, Stars } from "@/components/walmart/pdp/ui";

// Variant (colour) card sizes in px (1pt = 1px on the 393pt canvas). Tune here.
const SWATCH_CARD_WIDTH = 75;
const SWATCH_CARD_GAP = 8;
const SWATCH_IMAGE_SIZE = 48;
const SWATCH_DOT_SIZE = 32;
const SWATCH_NAME_HEIGHT = 16;

function badgeClass(text: string) {
  const t = text.toLowerCase();
  if (t === "deal") return "bg-[#041C3C] text-white";
  if (t === "rollback") return "bg-[#E41404] text-white";
  if (t.includes("best seller") || t.includes("overall pick"))
    return "bg-[#E4ECFC] text-[#041C3C]";
  return "border border-walmart-blue bg-white text-walmart-blue";
}

const COLOR_HEX: Record<string, string> = {
  black: "#1c1c1e", white: "#f4f4f4", blue: "#2f5fd0", gold: "#d4af6a", orange: "#f08a24",
  pink: "#f4a6c0", purple: "#7a5cc4", gray: "#8b8f98", grey: "#8b8f98", silver: "#c4c7cc",
  beige: "#d9c9ad", red: "#d92b2b", green: "#2f8f4e", navy: "#1d2a4a", brown: "#5a3a2a",
  sandstone: "#cdbb9b", midnight: "#1d1f2a", starlight: "#efe7d6", cream: "#f3ead3",
};

function swatchHex(name: string) {
  const key = Object.keys(COLOR_HEX).find((k) => name.toLowerCase().includes(k));
  return key ? COLOR_HEX[key] : "#d9dadd";
}

function savingsOf(item: WalmartItem) {
  if (item.savings) return item.savings;
  if (!item.priceWas) return undefined;
  const diff = parseFloat(item.priceWas) - parseFloat(`${item.priceDollars}.${item.priceCents}`);
  return diff > 0 ? diff.toFixed(2) : undefined;
}

export default function PdpSummary({
  item,
  content,
  onOpenReviews,
  afterPrice,
  sponsored,
}: {
  item: WalmartItem;
  content: PdpContent;
  onOpenReviews: () => void;
  afterPrice?: ReactNode;
  sponsored?: boolean;
}) {
  const [color, setColor] = useState(0);
  const savings = savingsOf(item);
  const badges = Array.from(new Set([item.badge, ...content.badges].filter((b): b is string => Boolean(b))));
  const showBadges = !sponsored && badges.length > 0;
  const returns = content.returns?.split(". ")[0]?.replace(/\.$/, "");
  const swatches = content.colors;
  const selected = swatches[Math.min(color, swatches.length - 1)];

  return (
    <section className="flex flex-col gap-2 px-4 pb-4 pt-2">
      {showBadges && (
        <>
          <div className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {badges.slice(0, 3).map((b) => (
              <span
                key={b}
                className={`shrink-0 rounded-full px-2 py-[3px] text-[12px] font-bold leading-4 ${badgeClass(b)}`}
              >
                {b.toLowerCase() === "rollback" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-1 inline-block align-[-2px]">
                    <path d="M12 4v15m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {b}
              </span>
            ))}
          </div>
          <div className="-mx-4 h-px bg-[#E3E4E5]" />
        </>
      )}

      {sponsored && <p className="text-[12px] leading-4 text-[#74767C]">Sponsored</p>}

      <div className={`flex items-center justify-between gap-3 ${showBadges ? "pt-2" : ""}`}>
        <span className="min-w-0 truncate text-[13px] leading-5 text-ld-text-default underline">
          {content.brand ? `Visit the ${content.brand} Store` : item.store}
        </span>
        <button
          type="button"
          onClick={onOpenReviews}
          className="flex shrink-0 items-center gap-1 text-[13px] leading-5 text-ld-text-default"
        >
          <Stars rating={item.rating} size={12} />
          <span>({item.rating})</span>
          <span className="underline">{item.ratingCount}</span>
        </button>
      </div>

      <h1 className="line-clamp-2 text-[16px] font-normal leading-5 text-ld-text-default">{item.title}</h1>

      {swatches.length > 1 && (
        <div className="flex flex-col gap-2">
          <p className="text-[14px] leading-5 text-ld-text-default">
            <span className="font-bold">Actual Color: </span>
            {selected?.name}
          </p>
          <div
            className="-mx-4 flex overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ gap: SWATCH_CARD_GAP }}
          >
            {swatches.map((c, i) => {
              const isSelected = i === color;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(i)}
                  aria-label={c.name}
                  aria-pressed={isSelected}
                  style={{ width: SWATCH_CARD_WIDTH }}
                  className={`flex shrink-0 flex-col rounded-lg bg-white text-left ${
                    isSelected ? "border-2 border-[#2E2F32]" : "border border-[#BABBBE]"
                  }`}
                >
                  <span className="flex justify-center pt-1">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt=""
                        className="object-contain"
                        style={{ width: SWATCH_IMAGE_SIZE, height: SWATCH_IMAGE_SIZE }}
                      />
                    ) : (
                      <span
                        className="flex items-center justify-center"
                        style={{ width: SWATCH_IMAGE_SIZE, height: SWATCH_IMAGE_SIZE }}
                      >
                        <span
                          className="rounded-full border border-[#BABBBE]"
                          style={{
                            width: SWATCH_DOT_SIZE,
                            height: SWATCH_DOT_SIZE,
                            backgroundColor: swatchHex(c.name),
                          }}
                        />
                      </span>
                    )}
                  </span>
                  <span
                    className="line-clamp-1 px-2 pt-1 text-[12px] leading-4 text-ld-text-default"
                    style={{ minHeight: SWATCH_NAME_HEIGHT }}
                  >
                    {c.name}
                  </span>
                  <span
                    className={`flex items-start px-2 pb-1.5 pt-0.5 text-[#2A8703] ${isSelected ? "font-bold" : "font-normal"}`}
                  >
                    <span className="text-[14px] leading-5">${item.priceDollars}</span>
                    <span className="text-[9px] leading-3">{item.priceCents}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <span className="shrink-0 text-[28px] font-normal leading-8 text-[#2A8703]">
          {item.priceWas ? "Now " : ""}${item.priceDollars}.{item.priceCents}
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          {(savings || item.priceWas) && (
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
              {savings && (
                <>
                  <span className="rounded bg-[#E7F5E2] px-1.5 py-0.5 text-[12px] font-bold leading-4 text-[#2E2F32]">
                    You save
                  </span>
                  <span className="text-[13px] font-bold leading-5 text-[#2A8703]">${savings}</span>
                </>
              )}
              {item.priceWas && (
                <span className="text-[13px] leading-5 text-black line-through">${item.priceWas}</span>
              )}
              <InfoIcon size={14} className="shrink-0 text-[#2E2F32]" />
            </div>
          )}
          <div className="flex items-center gap-1 text-[12px] leading-4 text-[#74767C]">
            <span>Price when purchased online</span>
            <InfoIcon size={14} className="shrink-0 text-[#2E2F32]" />
          </div>
        </div>
      </div>

      {afterPrice}

      {returns && (
        <div className="flex w-fit items-center gap-1.5 rounded-lg bg-[#DCE3F0] py-[3px] pl-1.5 pr-2 text-[13px] leading-4 text-ld-text-default">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-walmart-blue">
            <path
              d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.7 5.6L4 15.3M4 20v-4.7h4.7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {returns}
          <InfoIcon size={14} className="shrink-0 text-ld-text-default" />
        </div>
      )}
    </section>
  );
}
