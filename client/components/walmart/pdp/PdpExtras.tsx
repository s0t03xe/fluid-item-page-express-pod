import { useState } from "react";
import type { WalmartItem } from "@/lib/walmart-items";
import { Gift, Heart } from "@/components/walmart/icons";

function planPrices(item: WalmartItem): [number, number] {
  const p = parseFloat(`${item.priceDollars}.${item.priceCents}`);
  if (p < 20) return [2, 4];
  if (p < 60) return [4, 6];
  if (p < 150) return [8, 12];
  return [18, 26];
}

/** Six rounded spokes of the Walmart spark. Render inside an <svg>. */
function SparkSpokes({
  color,
  stroke,
  inner,
  outer,
}: {
  color: string;
  stroke: number;
  inner: number;
  outer: number;
}) {
  return (
    <>
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1={0}
          y1={-inner}
          x2={0}
          y2={-outer}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          transform={`rotate(${deg})`}
        />
      ))}
    </>
  );
}

/** Blue shield with a yellow Walmart spark. */
function AccidentShield() {
  return (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden="true">
      <path
        d="M15 1 28.5 5.4v10.2c0 8.3-5.7 14.6-13.5 17.4C7.2 30.2 1.5 23.9 1.5 15.6V5.4L15 1Z"
        fill="#0053E2"
      />
      <path
        d="M15 4.2 25.5 7.6v8c0 6.5-4.3 11.4-10.5 14.1C8.8 27 4.5 22.1 4.5 15.6v-8L15 4.2Z"
        fill="#2F6FE8"
      />
      <g transform="translate(15 16)">
        <SparkSpokes color="#FFC220" stroke={2.4} inner={1.6} outer={6} />
      </g>
    </svg>
  );
}

export function ProtectionPlan({ item }: { item: WalmartItem }) {
  const [two, three] = planPrices(item);
  const [choice, setChoice] = useState<"2" | "3" | null>(null);
  const options: { id: "2" | "3"; label: string; price: number }[] = [
    { id: "2", label: "2-Year Plan", price: two },
    { id: "3", label: "3-Year Plan", price: three },
  ];

  return (
    <section className="px-4 pt-4">
      <div className="flex items-start gap-6 rounded-xl bg-[#EAF1FF] px-5 pb-4 pt-2">
        <AccidentShield />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="min-w-0 text-[14px] font-bold leading-4 text-ld-text-default">
              Walmart Accident Plan by Allstate
            </h2>
            <button
              type="button"
              className="shrink-0 text-[14px] leading-4 text-ld-text-default underline underline-offset-2"
            >
              What’s covered
            </button>
          </div>
          <div className="mt-3 flex flex-col gap-2.5">
            {options.map((o) => {
              const checked = choice === o.id;
              return (
                <label
                  key={o.id}
                  className="flex cursor-pointer items-center gap-3 text-[14px] leading-5 text-ld-text-default"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChoice(checked ? null : o.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border-[1.5px] ${
                      checked ? "border-walmart-blue bg-walmart-blue" : "border-[#2E2F32] bg-white"
                    }`}
                  >
                    {checked && (
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path
                          d="M1 4.5 4.2 7.6 11 1"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span>
                    {o.label} - ${o.price}.00
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ListActions() {
  const cell =
    "flex h-full items-center justify-center gap-2 text-[15px] leading-5 text-ld-text-default underline underline-offset-2 active:bg-walmart-gray-bg";
  return (
    <section className="mb-2 mt-2 grid h-12 grid-cols-2">
      <button type="button" className={cell}>
        <Heart size={18} />
        Add to list
      </button>
      <button type="button" className={`${cell} border-l border-walmart-gray-line`}>
        <Gift size={18} />
        Add to registry
      </button>
    </section>
  );
}

/** Walmart+ wordmark: blue "Walmart" with a yellow spark in place of the plus. */
function WalmartPlusLogo() {
  return (
    <span className="flex shrink-0 items-center text-[14px] font-bold leading-5 text-walmart-blue">
      Walmart
      <svg width="11" height="11" viewBox="-6 -6 12 12" fill="none" aria-hidden="true" className="ml-0.5">
        <SparkSpokes color="#FFC220" stroke={1.8} inner={1} outer={5} />
      </svg>
    </span>
  );
}

export function WalmartPlusBanner() {
  return (
    <section className="px-4 py-4">
      <div className="relative overflow-hidden rounded-2xl border border-[#E3E4E5] bg-white px-4 pb-4 pt-4 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
        <div className="relative z-10 flex items-center gap-4">
          <WalmartPlusLogo />
          <p className="text-[14px] font-bold leading-5 text-ld-text-default">
            Try 30 days of Walmart+ for just $1!
          </p>
        </div>
        <div className="relative z-10 mt-2 flex items-center justify-between gap-3">
          <p className="text-[14px] leading-5 text-ld-text-default">T&amp;C apply.</p>
          <button
            type="button"
            className="text-[14px] leading-5 text-ld-text-default underline underline-offset-2"
          >
            Claim offer now
          </button>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[60px] w-[14px] bg-[#FFC220]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[18px] w-[24px] bg-[#FFC220]"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[16px] w-[60px] bg-walmart-blue"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </div>
    </section>
  );
}
