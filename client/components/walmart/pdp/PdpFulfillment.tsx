import { useState } from "react";
import type { WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";

type Mode = "shipping" | "pickup" | "delivery";

function ModeIcon({ mode }: { mode: Mode }) {
  const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  if (mode === "shipping")
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19a1.7 1.7 0 1 0 0-.01M17 19a1.7 1.7 0 1 0 0-.01" {...stroke} />
      </svg>
    );
  if (mode === "pickup")
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 10 5.5 4h13L20 10M4 10v10h16V10M4 10h16M9 20v-6h6v6" {...stroke} />
      </svg>
    );
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 12 12 4l9 8M6 10v10h12V10" {...stroke} />
    </svg>
  );
}

const MODES: { id: Mode; label: string; sub: string; disabled?: boolean }[] = [
  { id: "shipping", label: "Shipping", sub: "Arrives tomorrow" },
  { id: "pickup", label: "Pickup", sub: "Check nearby" },
  { id: "delivery", label: "Delivery", sub: "Not available", disabled: true },
];

export default function PdpFulfillment({
  item,
  content,
}: {
  item: WalmartItem;
  content: PdpContent;
}) {
  const [mode, setMode] = useState<Mode>("shipping");
  const [plus, setPlus] = useState(false);
  const arrival = content.fulfillment[0] ?? item.shippingLines?.[0] ?? "Shipping available";

  return (
    <section className="bg-[#F8F8F8] px-4 py-4">
      <h2 className="text-[16px] font-bold leading-6 text-ld-text-default">How do you want your item?</h2>

      <label className="mt-3 flex items-start gap-2 text-[14px] leading-5 text-walmart-blue">
        <input
          type="checkbox"
          checked={plus}
          onChange={(e) => setPlus(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#0053E2]"
        />
        <span>
          I want shipping &amp; delivery savings with <span className="font-bold">Walmart+</span>
        </span>
      </label>

      <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Fulfillment">
        {MODES.map((m) => {
          const on = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={on}
              disabled={m.disabled}
              onClick={() => setMode(m.id)}
              className={`flex h-[112px] flex-col items-center justify-center gap-1 rounded-[10px] bg-white px-1 text-center disabled:opacity-50 ${
                on ? "border-2 border-black" : "border border-[#BABBBE]"
              }`}
            >
              <ModeIcon mode={m.id} />
              <span className="text-[14px] font-bold leading-5 text-ld-text-default">{m.label}</span>
              <span className="text-[12px] leading-4 text-[#74767C]">{m.sub}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-col gap-2 text-[14px] leading-5 text-ld-text-default">
        <p className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          <span className="underline">San Jose, 95129</span>
        </p>
        <p>{mode === "shipping" ? arrival : mode === "pickup" ? "Pickup not available at this store" : "Delivery not available"}</p>
        <p className="text-[13px] text-[#74767C]">
          Sold and shipped by <span className="underline">{content.seller ?? "Walmart.com"}</span>
        </p>
        <button type="button" className="w-fit text-[13px] text-[#74767C] underline">
          Report an issue with this product or seller
        </button>
      </div>

      <div className="mt-4 flex w-fit items-center gap-2 rounded-full bg-[#E7F5E2] px-3 py-1.5 text-[13px] font-bold leading-4 text-[#2A8703]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-3 9 2.2 2.2L15.5 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Shop Confidently
      </div>
    </section>
  );
}
