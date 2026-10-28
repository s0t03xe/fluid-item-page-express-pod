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
    "flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#2E2F32] bg-white px-3 text-[14px] font-semibold leading-5 text-ld-text-default active:bg-walmart-gray-bg";
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
