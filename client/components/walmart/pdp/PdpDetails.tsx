import { useState } from "react";
import type { PdpContent } from "@/lib/pdp-content";
import { Collapsible, SPARKY_IMG } from "@/components/walmart/pdp/ui";

const SPARKY_PROMPTS = [
  "Does this block out most noise?",
  "Is this good for travel?",
  "How long does the battery last?",
];

export function SparkyChips({ onOpen, compact }: { onOpen: () => void; compact?: boolean }) {
  return (
    <section
      className={`flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        compact ? "-mx-4 px-4" : "px-4 py-3"
      }`}
    >
      <img src={SPARKY_IMG} alt="Sparky" className="h-8 w-8 shrink-0" />
      {SPARKY_PROMPTS.map((p) => (
        <button
          key={p}
          type="button"
          onClick={onOpen}
          className="shrink-0 rounded-full bg-[#FFF3D4] px-3 py-2 text-[13px] leading-4 text-ld-text-default"
        >
          {p}
        </button>
      ))}
    </section>
  );
}

function splitFeature(text: string): [string, string] {
  const i = text.indexOf(":");
  return i > 0 ? [text.slice(0, i), text.slice(i + 1).trim()] : [text, ""];
}

export function KeyFeatures({ content }: { content: PdpContent }) {
  if (content.keyFeatures.length === 0) return null;
  return (
    <Collapsible title="Key item features" defaultOpen aiLabel>
      <ul className="flex flex-col gap-3">
        {content.keyFeatures.map((f) => {
          const [label, value] = splitFeature(f);
          return (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
              <div>
                <p className="text-[14px] font-bold leading-5 text-ld-text-default">{label}</p>
                {value && <p className="text-[13px] leading-4 text-[#74767C]">{value}</p>}
              </div>
            </li>
          );
        })}
      </ul>
      <button type="button" className="mt-3 text-[14px] font-bold text-ld-text-default underline">
        View all item details
      </button>
    </Collapsible>
  );
}

export function Specifications({ content }: { content: PdpContent }) {
  if (content.specs.length === 0) return null;
  return (
    <Collapsible title="Specifications">
      <dl className="divide-y divide-[#E3E4E5]">
        {content.specs.map((s) => (
          <div key={s.name} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3 py-2.5">
            <dt className="text-[14px] leading-5 text-[#74767C]">{s.name}</dt>
            <dd className="text-[14px] leading-5 text-ld-text-default">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Collapsible>
  );
}

export function QuickActions() {
  const chip =
    "flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#BABBBE] bg-white px-3 text-[14px] font-normal leading-5 text-ld-text-default active:bg-walmart-gray-bg";
  const icon = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none" } as const;
  const stroke = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <div className="flex gap-2 overflow-x-auto bg-white px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button type="button" className={chip}>
        <svg {...icon}>
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Zm0 9L4 7.5M12 12l8-4.5M12 12v9" {...stroke} />
        </svg>
        View in 3D
      </button>
      <button type="button" className={chip}>
        <svg {...icon}>
          <path d="M4 10v4h3l5 4V6L7 10H4Zm12-2a5.5 5.5 0 0 1 0 8" {...stroke} />
        </svg>
        Hear summary (01:15)
      </button>
      <button type="button" className={chip}>
        <svg {...icon}>
          <path d="M4 8h14l-3-3m5 11H6l3 3" {...stroke} />
        </svg>
        Shop similar
      </button>
    </div>
  );
}

export type TrtbData = {
  text: string;
  features: { title: string; body: string }[];
};

const TRTB_BY_ITEM: Record<string, TrtbData> = {
  "anc-45db-black": {
    text: "Tune out airplane and engine noise with -45dB active noise cancellation, and keep listening for up to 50 hours on one charge. The foldable over-ear design packs away easily for travel, work and school.",
    features: [
      {
        title: "Active Noise Cancellation",
        body: "Built-in and external mics filter up to 90% of low-frequency noise like airplane and car engines.",
      },
      {
        title: "Up to 50 Hours of Playtime",
        body: "Bluetooth 5.4 and a long-lasting battery keep your music going for days between charges.",
      },
      {
        title: "Folds Up Small",
        body: "Ear cups rotate and fold flat to fit easily into travel, work and school bags.",
      },
    ],
  },
};

export function topReasonToBuy(itemId: string) {
  return TRTB_BY_ITEM[itemId];
}

const TRTB_PREVIEW_CHARS = 68;

function TrtbPill({
  kind,
  children,
}: {
  kind: "good" | "neutral" | "link";
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-[#E3E4E5] bg-white px-3 py-1.5 text-[13px] font-bold leading-4 text-[#041C3C]">
      {kind === "good" && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2A8703] text-white">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
      {kind === "neutral" && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#74767C] text-white">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M6 12h12" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
          </svg>
        </span>
      )}
      {children}
      {kind === "link" && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}

export function TopReasonToBuy({ data, content }: { data: TrtbData; content: PdpContent }) {
  const [expanded, setExpanded] = useState(false);
  const { text } = data;
  const long = text.length > TRTB_PREVIEW_CHARS;
  const shown =
    expanded || !long ? text : `${text.slice(0, TRTB_PREVIEW_CHARS).replace(/\s+\S*$/, "")}…`;
  const { positive, negative } = content.reviewSummary;

  return (
    <div className="rounded-xl border border-[#DAD6EE] bg-gradient-to-b from-[#ECE9F9] to-white px-3 py-2.5 text-[13px] leading-[18px] text-ld-text-default">
      <div className="flex items-start gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
          <path d="M10 3 11.8 8.2 17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8L10 3Zm8 9 .9 2.6L21.5 15.5l-2.6.9L18 19l-.9-2.6-2.6-.9 2.6-.9L18 12Z" fill="currentColor" />
        </svg>
        <p>
          {shown}{" "}
          {!expanded && long && (
            <button type="button" onClick={() => setExpanded(true)} className="font-bold underline">
              View more
            </button>
          )}
        </p>
      </div>

      {expanded && (
        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[13px] font-bold leading-4">Key item features</h3>
              <button type="button" className="text-[12px] underline">
                View item details
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {data.features.map((f) => (
                <li key={f.title} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2E2F32]" />
                  <div>
                    <p className="font-bold">{f.title}</p>
                    <p className="text-[#46474A]">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {(positive.length > 0 || negative.length > 0) && (
            <div className="flex flex-col gap-2 border-t border-[#E3E4E5] pt-3">
              <h3 className="text-[13px] font-bold leading-4">What customers say</h3>
              <div className="flex flex-wrap gap-2">
                {positive.map((t) => (
                  <TrtbPill key={t} kind="good">
                    {t}
                  </TrtbPill>
                ))}
                {negative.map((t) => (
                  <TrtbPill key={t} kind="neutral">
                    {t}
                  </TrtbPill>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 border-t border-[#E3E4E5] pt-3">
            <h3 className="text-[13px] font-bold leading-4">Shop confidently</h3>
            <div className="flex flex-wrap gap-2">
              <TrtbPill kind="link">Free shipping</TrtbPill>
              <TrtbPill kind="link">Free 90-day returns</TrtbPill>
              <TrtbPill kind="link">Low return rate for this item</TrtbPill>
            </div>
          </div>

          <div className="flex items-center justify-between text-[12px] leading-4">
            <span className="flex items-center gap-1 text-[#46474A]">
              Generated by AI
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 11v5M12 8v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <button type="button" onClick={() => setExpanded(false)} className="underline">
              View less
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
