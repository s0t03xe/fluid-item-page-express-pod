import { useState, type ReactNode } from "react";
import type { WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";
import { InfoIcon, Stars } from "@/components/walmart/pdp/ui";

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
  noVariantsExtra,
}: {
  item: WalmartItem;
  content: PdpContent;
  onOpenReviews: () => void;
  noVariantsExtra?: ReactNode;
}) {
  const [color, setColor] = useState(0);
  const savings = savingsOf(item);
  const badges = Array.from(new Set([item.badge, ...content.badges].filter((b): b is string => Boolean(b))));
  const returns = content.returns?.split(". ")[0]?.replace(/\.$/, "");
  const swatches = content.colors;
  const selected = swatches[Math.min(color, swatches.length - 1)];

  return (
    <section className="flex flex-col gap-2 px-4 pb-4 pt-2">
      {badges.length > 0 && (
        <div className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {badges.slice(0, 3).map((b) => (
            <span
              key={b}
              className={`shrink-0 rounded-full px-2.5 py-1 text-[12px] font-bold leading-4 ${badgeClass(b)}`}
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
      )}

      <div className="flex items-start justify-between gap-3">
        <span className="min-w-0 truncate text-[12px] leading-5 text-ld-text-default underline">
          {content.brand ? `Visit the ${content.brand} store` : item.store}
        </span>
        <button
          type="button"
          onClick={onOpenReviews}
          className="flex shrink-0 items-center gap-1 text-[13px] leading-5 text-ld-text-default"
        >
          <Stars rating={item.rating} />
          <span>({item.rating})</span>
          <span className="underline">{item.ratingCount}</span>
        </button>
      </div>

      <h1 className="line-clamp-2 text-[15px] font-bold leading-[21px] text-ld-text-default">{item.title}</h1>

      {swatches.length > 1 && (
        <div className="flex flex-col gap-2">
          <p className="text-[14px] leading-5 text-ld-text-default">
            <span className="font-bold">Actual Color: </span>
            {selected?.name}
          </p>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {swatches.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setColor(i)}
                aria-label={c.name}
                aria-pressed={i === color}
                className={`flex w-[68px] shrink-0 flex-col items-center gap-0.5 rounded-md bg-white p-1 ${
                  i === color ? "border-2 border-[#2E2F32]" : "border border-[#BABBBE]"
                }`}
              >
                {c.image ? (
                  <img src={c.image} alt="" className="h-11 w-11 object-contain" />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center">
                    <span
                      className="h-8 w-8 rounded-full border border-[#BABBBE]"
                      style={{ backgroundColor: swatchHex(c.name) }}
                    />
                  </span>
                )}
                <span className="line-clamp-1 text-[11px] leading-3 text-ld-text-default">{c.name}</span>
                <span className="text-[12px] font-bold leading-4 text-[#2A8703]">
                  ${item.priceDollars}.{item.priceCents}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="flex items-start font-bold text-[#2A8703]">
            <span className="mr-1 text-[20px] leading-8">{item.priceWas ? "Now" : ""}</span>
            <span className="mt-1 text-[18px] leading-6">$</span>
            <span className="text-[28px] leading-8">{item.priceDollars}</span>
            <span className="mt-1 text-[16px] leading-5">{item.priceCents}</span>
          </span>
          {savings && (
            <span className="rounded bg-[#E7F5E2] px-2 py-0.5 text-[13px] font-bold leading-5 text-[#2A8703]">
              You save ${savings}
            </span>
          )}
          {item.priceWas && (
            <span className="text-[14px] leading-5 text-[#74767C] line-through">${item.priceWas}</span>
          )}
          <InfoIcon className="text-[#2E2F32]" />
        </div>
        <p className="text-[12px] leading-4 text-[#74767C]">Price when purchased online</p>
      </div>

      {swatches.length <= 1 && noVariantsExtra}

      {returns && (
        <div className="flex w-fit items-center gap-2 rounded-lg bg-[#DCE3F0] px-3 py-2 text-[13px] leading-4 text-ld-text-default">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7M20 4v4.7h-4.7M20 12a8 8 0 0 1-13.7 5.6L4 15.3M4 20v-4.7h4.7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {returns}
        </div>
      )}
    </section>
  );
}
