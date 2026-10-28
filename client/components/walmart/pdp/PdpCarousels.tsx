import { PLP_ORDER, type WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";
import PLPProductCard from "@/components/walmart/PLPProductCard";
import PLPStarsCarousel from "@/components/walmart/PLPStarsCarousel";
import { Collapsible, Stars } from "@/components/walmart/pdp/ui";

const others = (item: WalmartItem) =>
  PLP_ORDER.filter((i) => i.id !== item.id && !i.galleryVideoSrc);

export function SponsoredCard({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: () => void;
}) {
  const pick = others(item).find((i) => i.sponsored);
  if (!pick) return null;
  return (
    <section className="px-4 py-2">
      <div className="rounded-xl border border-walmart-gray-line px-3">
        <PLPProductCard item={pick} onSelect={onSelect} />
      </div>
    </section>
  );
}

export function RatedCarousel({
  item,
  title,
  onSelect,
  minRating = 0,
  offset = 0,
}: {
  item: WalmartItem;
  title: string;
  onSelect: () => void;
  minRating?: number;
  offset?: number;
}) {
  const list = others(item)
    .filter((i) => i.rating >= minRating)
    .slice(offset, offset + 4);
  if (list.length === 0) return null;
  return <PLPStarsCarousel items={list} title={title} onSelect={onSelect} />;
}

export function SimilarItems({ content }: { content: PdpContent }) {
  if (content.similar.length === 0) return null;
  return (
    <section className="py-4">
      <h2 className="px-4 text-[16px] font-bold leading-6 text-ld-text-default">
        Similar items you might like
      </h2>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {content.similar.map((s) => (
          <div key={s.title} className="flex w-[150px] shrink-0 flex-col gap-1.5">
            {s.image && (
              <img src={s.image} alt="" className="aspect-square w-full object-contain" />
            )}
            {s.price && (
              <span className="text-[16px] font-bold leading-5 text-ld-text-default">{s.price}</span>
            )}
            <p className="line-clamp-3 text-[13px] leading-4 text-ld-text-default">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CompareItems({ item }: { item: WalmartItem }) {
  const rivals = others(item).slice(0, 2);
  const cols = [item, ...rivals];
  const rows: { label: string; value: (i: WalmartItem) => string }[] = [
    { label: "Price", value: (i) => `$${i.priceDollars}.${i.priceCents}` },
    { label: "Rating", value: (i) => `${i.rating} (${i.ratingCount})` },
    { label: "Fulfillment", value: (i) => i.shippingLines?.[0] ?? "—" },
  ];
  return (
    <Collapsible title="Compare with similar items" defaultOpen>
      <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <table className="w-full min-w-[420px] table-fixed border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[72px]" />
              {cols.map((c, idx) => (
                <th key={c.id} className="px-1 pb-2 align-top">
                  <img src={c.image} alt="" className="mx-auto h-16 w-16 object-contain" />
                  <p className="mt-1 line-clamp-2 text-[12px] font-normal leading-4 text-ld-text-default">
                    {idx === 0 ? "Viewing this item" : c.title}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-[#E3E4E5]">
                <td className="py-2 pr-1 text-[12px] font-bold leading-4 text-[#74767C]">{r.label}</td>
                {cols.map((c) => (
                  <td key={c.id} className="px-1 py-2 text-[12px] leading-4 text-ld-text-default">
                    {r.value(c)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-[#E3E4E5]">
              <td className="py-2 pr-1 text-[12px] font-bold leading-4 text-[#74767C]">Reviews</td>
              {cols.map((c) => (
                <td key={c.id} className="px-1 py-2">
                  <Stars rating={c.rating} size={11} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Collapsible>
  );
}

const REFINE = [
  "Wireless headphones",
  "Noise cancelling headphones",
  "Over ear headphones",
  "Bluetooth earbuds",
  "Gaming headsets",
  "Kids headphones",
];

export function RefineSearch() {
  return (
    <section className="px-4 py-4">
      <h2 className="text-[16px] font-bold leading-6 text-ld-text-default">Refine your search</h2>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {REFINE.map((r) => (
          <button
            key={r}
            type="button"
            className="rounded-lg bg-walmart-gray-bg px-3 py-3 text-left text-[14px] leading-5 text-ld-text-default"
          >
            {r}
          </button>
        ))}
      </div>
    </section>
  );
}

export function AboutThisItem({ item, content }: { item: WalmartItem; content: PdpContent }) {
  const highlights = content.gallery.slice(1, 4);
  return (
    <>
      <section className="px-4 pt-4">
        <h2 className="text-[16px] font-bold leading-6 text-ld-text-default">About this item</h2>
      </section>
      {content.about.length > 0 && (
        <Collapsible title="Item details">
          <ul className="flex flex-col gap-2">
            {content.about.map((b) => (
              <li key={b} className="flex gap-2 text-[14px] leading-5 text-ld-text-default">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E2F32]" />
                {b}
              </li>
            ))}
          </ul>
        </Collapsible>
      )}
      {highlights.length > 0 && (
        <Collapsible title="Brand Highlights" defaultOpen>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {highlights.map((src, i) => (
              <figure key={src} className="w-[200px] shrink-0 overflow-hidden rounded-xl border border-walmart-gray-line">
                <img src={src} alt="" className="aspect-square w-full object-contain" />
                <figcaption className="px-3 py-2 text-[13px] leading-4 text-ld-text-default">
                  {content.brand ?? item.title.split(" ")[0]} · {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </Collapsible>
      )}
    </>
  );
}
