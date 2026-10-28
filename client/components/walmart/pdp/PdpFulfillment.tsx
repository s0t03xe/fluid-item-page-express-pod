import { useState } from "react";
import type { WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";
import { Divider, InfoIcon, SECTION_HEADING } from "@/components/walmart/pdp/ui";

type Mode = "shipping" | "pickup" | "delivery";

// PdpContent has no seller-badge fields, so these mirror the production reference item.
const PRO_SELLERS = ["VEATOOL"];
const FULFILLED_BY_WALMART = ["Walmart.com", "VEATOOL"];

const SPARK_YELLOW = "#FFC220";

/** Walmart spark: six rounded spokes. Doubles as the "+" in the Walmart+ mark. */
function Spark({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2.5v19M3.5 7.25l17 9.5M3.5 16.75l17-9.5" stroke={SPARK_YELLOW} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function WalmartPlusMark() {
  return (
    <span className="inline-flex items-start whitespace-nowrap font-bold text-[#0053E2]">
      Walmart
      <Spark size={11} className="ml-px mt-px" />
    </span>
  );
}

function ModeIcon({ mode }: { mode: Mode }) {
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  } as const;

  if (mode === "shipping")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#0053E2]" aria-hidden="true">
        <path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3.5v2.5h-7" {...stroke} />
        <circle cx="6.5" cy="17.5" r="1.8" {...stroke} />
        <circle cx="17" cy="17.5" r="1.8" {...stroke} />
      </svg>
    );

  if (mode === "pickup")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#0053E2]" aria-hidden="true">
        <path d="M3 15.5v-4l2.2-4.5h13.6L21 11.5v4Z" {...stroke} />
        <path d="M6.5 11.5h11M9.5 6.5V3.5h5v3" {...stroke} />
        <circle cx="7.5" cy="17.5" r="1.8" {...stroke} />
        <circle cx="16.5" cy="17.5" r="1.8" {...stroke} />
      </svg>
    );

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#74767C]" aria-hidden="true">
      <path d="M5 8.5h14l-1 11.5H6L5 8.5Z" {...stroke} />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" {...stroke} />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-[#2E2F32]" aria-hidden="true">
      <path d="M3 4h18l1.5 5.5h-21L3 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4.5 9.5V20h15V9.5M9.5 20v-5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.5 12.3 2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MODES: { id: Mode; label: string; disabled?: boolean }[] = [
  { id: "shipping", label: "Shipping" },
  { id: "pickup", label: "Pickup" },
  { id: "delivery", label: "Delivery", disabled: true },
];

export default function PdpFulfillment({
  item,
  content,
}: {
  item: WalmartItem;
  content: PdpContent;
}) {
  const [mode, setMode] = useState<Mode>("shipping");
  const [plus, setPlus] = useState(true);

  const lines = content.fulfillment;
  const shippingLine =
    lines.find((l) => /shipping|arrives/i.test(l)) ?? item.shippingLines?.[0] ?? "Shipping available";
  const arrivesWhen = shippingLine.match(/arrives by (.+?)(?: to |$)/i)?.[1];
  const pickupLine = lines.find((l) => /pickup/i.test(l)) ?? "Pickup not available at this store";
  const seller = content.seller ?? "Walmart.com";
  const isProSeller = PRO_SELLERS.includes(seller);
  const fulfilledByWalmart = FULFILLED_BY_WALMART.includes(seller);
  const returnsText = content.returns?.split(".")[0]?.trim();

  const modeLine =
    mode === "shipping" ? (
      arrivesWhen ? (
        <>
          Arrives by <b className="font-bold">{arrivesWhen}</b>
        </>
      ) : (
        shippingLine
      )
    ) : mode === "pickup" ? (
      pickupLine
    ) : (
      "Delivery not available"
    );

  return (
    <section className="bg-[#F8F8F8] px-4 pb-5 pt-4">
      <h2 className={SECTION_HEADING}>How do you want your item?</h2>

      <label className="mt-3 flex items-center gap-3">
        <input
          type="checkbox"
          checked={plus}
          onChange={(e) => setPlus(e.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] border-2 border-[#2E2F32] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0053E2] ${
            plus ? "bg-[#2E2F32] text-white" : "bg-white"
          }`}
        >
          {plus && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="text-[15px] font-bold leading-6 text-[#0053E2]">
          I want shipping &amp; delivery savings with <WalmartPlusMark />
        </span>
      </label>
      <p className="mt-2 pl-2 text-[14px] leading-5 text-[#2E2F32]">
        Try 30 days for just $1! Choose a plan at checkout.
      </p>

      <div className="mt-4 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Fulfillment">
        {MODES.map((m) => {
          const on = mode === m.id;
          const sub =
            m.id === "shipping" ? (arrivesWhen ? `Arrives ${arrivesWhen}` : "Shipping available") : m.id === "pickup" ? "Check nearby" : "Not available";
          return (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={on}
              disabled={m.disabled}
              onClick={() => setMode(m.id)}
              className={`flex min-h-[130px] flex-col items-center rounded-[12px] bg-white px-2 pb-3 pt-3 text-center disabled:cursor-not-allowed ${
                on ? "border-2 border-black" : "border border-[#BABBBE]"
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CFE7F8]">
                <ModeIcon mode={m.id} />
              </span>
              <span className="mt-2 text-[16px] font-bold leading-5 text-ld-text-default">{m.label}</span>
              <span
                className={`mt-1 text-[14px] leading-4 text-ld-text-default ${m.id === "shipping" ? "font-bold" : ""}`}
              >
                {sub}
              </span>
              {m.id === "shipping" && plus && (
                <span className="mt-1 inline-flex items-center text-[14px] font-bold leading-4 text-[#0053E2]">
                  Free with W
                  <Spark size={10} className="ml-px" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[16px] font-bold leading-6 text-ld-text-default">San Jose, 95129</span>
        <button type="button" className="text-[14px] leading-5 text-ld-text-default underline">
          Change
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center text-[14px] leading-5 text-ld-text-default">
        <p className="border-r border-[#BABBBE] pr-3">{modeLine}</p>
        <button type="button" className="pl-3 underline">
          More options
        </button>
      </div>

      <div className="mt-4">
        <Divider />
      </div>

      <div className="mt-4 flex items-start gap-3">
        <StoreIcon />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1 text-[14px] leading-5 text-ld-text-default">
          <p>
            Sold by <b className="font-bold underline">{seller}</b>
            {isProSeller && (
              <>
                {" | "}
                <span className="inline-flex items-center gap-1 text-[#0053E2]">
                  <VerifiedIcon />
                  Pro Seller
                </span>
              </>
            )}
          </p>
          {fulfilledByWalmart && <p>Fulfilled by Walmart</p>}
          <button type="button" className="mt-1 text-left underline">
            Report an issue with seller or item
          </button>
        </div>
        <InfoIcon size={18} className="mt-0.5 shrink-0 text-[#2E2F32]" />
      </div>

      {returnsText && (
        <>
          <div className="mt-4">
            <Divider />
          </div>
          <div className="mt-5">
            <h3 className={SECTION_HEADING}>Shop Confidently</h3>
            <div className="mt-3 flex w-fit max-w-full items-center gap-2 rounded-full border border-[#D0D2D6] bg-white py-1.5 pl-1.5 pr-3 text-[15px] leading-5 text-ld-text-default">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2A8703] text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 8.5 12 5l8 3.5v8L12 20l-8-3.5v-8Zm0 0 8 3.5 8-3.5M12 12v8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="min-w-0">{returnsText}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
                <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
