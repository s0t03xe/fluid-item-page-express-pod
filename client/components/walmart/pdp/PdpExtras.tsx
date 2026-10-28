import { useState } from "react";
import type { WalmartItem } from "@/lib/walmart-items";

function planPrices(item: WalmartItem): [number, number] {
  const p = parseFloat(`${item.priceDollars}.${item.priceCents}`);
  if (p < 20) return [2, 4];
  if (p < 60) return [4, 6];
  if (p < 150) return [8, 12];
  return [18, 26];
}

export function ProtectionPlan({ item }: { item: WalmartItem }) {
  const [two, three] = planPrices(item);
  const [choice, setChoice] = useState<"2" | "3" | null>(null);
  const options: { id: "2" | "3"; label: string; price: number }[] = [
    { id: "2", label: "2-Year plan", price: two },
    { id: "3", label: "3-Year plan", price: three },
  ];

  return (
    <section className="px-4 py-4">
      <div className="rounded-xl bg-[#EAF1FF] p-4">
        <h2 className="text-[16px] font-bold leading-6 text-ld-text-default">
          Walmart Accident Plan by Allstate
        </h2>
        <p className="mt-1 text-[13px] leading-4 text-[#74767C]">
          Covers drops, spills and power surges. No deductible.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {options.map((o) => (
            <label
              key={o.id}
              className="flex items-center gap-3 rounded-lg bg-white px-3 py-3 text-[14px] leading-5 text-ld-text-default"
            >
              <input
                type="checkbox"
                checked={choice === o.id}
                onChange={() => setChoice(choice === o.id ? null : o.id)}
                className="h-4 w-4 rounded-sm accent-[#0053E2]"
              />
              <span className="flex-1">{o.label}</span>
              <span className="font-bold">${o.price}.00</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ListActions() {
  return (
    <section className="grid grid-cols-2 gap-3 px-4 py-4">
      {["Add to list", "Add to registry"].map((label) => (
        <button
          key={label}
          type="button"
          className="flex h-10 items-center justify-center rounded-full border border-[#2E2F32] text-[14px] font-bold text-ld-text-default active:bg-walmart-gray-bg"
        >
          {label}
        </button>
      ))}
    </section>
  );
}

export function WalmartPlusBanner() {
  return (
    <section className="px-4 py-4">
      <div className="flex items-center justify-between gap-3 rounded-xl bg-[#041C3C] p-4 text-white">
        <div>
          <p className="text-[16px] font-bold leading-6">
            Walmart<span className="text-[#FFC220]">+</span>
          </p>
          <p className="text-[13px] leading-4">Free shipping, no order minimum</p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-[14px] font-bold text-[#041C3C]"
        >
          Try free
        </button>
      </div>
    </section>
  );
}
