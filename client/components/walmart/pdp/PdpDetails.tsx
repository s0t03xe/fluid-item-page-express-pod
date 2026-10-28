import type { PdpContent } from "@/lib/pdp-content";
import { Collapsible, SPARKY_IMG } from "@/components/walmart/pdp/ui";

const SPARKY_PROMPTS = [
  "Does this block out most noise?",
  "Is this good for travel?",
  "How long does the battery last?",
];

export function SparkyChips({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="flex items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
    "flex h-8 shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-walmart-gray-line bg-white px-3 text-[14px] font-semibold leading-5 text-ld-text-default active:bg-walmart-gray-bg";
  return (
    <div className="flex gap-2 overflow-x-auto bg-white px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button type="button" className={chip}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M4 10v4h3l5 4V6L7 10H4Zm12-2a5.5 5.5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Hear overview and reviews (01:12)
      </button>
      <button type="button" className={chip}>Shop similar</button>
    </div>
  );
}
