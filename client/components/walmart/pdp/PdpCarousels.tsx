import { PLP_ORDER, type WalmartItem } from "@/lib/walmart-items";
import type { PdpContent } from "@/lib/pdp-content";
import { Heart } from "@/components/walmart/icons";
import { Fulfillment } from "@/components/walmart/PLPRating";
import PLPStarsCarousel, {
  TilePrice,
  TileRating,
  brandOf,
} from "@/components/walmart/PLPStarsCarousel";
import { Collapsible, Divider, Stars } from "@/components/walmart/pdp/ui";

const others = (item: WalmartItem) =>
  PLP_ORDER.filter((i) => i.id !== item.id && !i.galleryVideoSrc);

export function SponsoredCard({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: (item: WalmartItem) => void;
}) {
  const pick = others(item).find((i) => i.sponsored);
  if (!pick) return null;
  const brand = brandOf(pick);
  return (
    <section className="pt-2">
      <div className="px-4">
        <div className="flex gap-5 rounded-2xl border border-[#E3E4E5] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
          <div className="relative w-[40%] shrink-0">
            <button
              type="button"
              onClick={() => onSelect(pick)}
              aria-label={pick.title}
              className="block aspect-square w-full bg-white"
            >
              <img src={pick.image} alt="" className="h-full w-full object-contain" />
            </button>
            <button
              type="button"
              aria-label="Add to list"
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
            >
              <Heart size={14} />
            </button>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <TilePrice item={pick} />
            {pick.savings && (
              <div className="mt-1.5 flex items-center gap-2">
                <span className="rounded-[4px] bg-[#E3F4DA] px-2 py-0.5 text-[13px] leading-4 text-[#2A6B1A]">
                  You save
                </span>
                <span className="text-[14px] font-bold leading-5 text-[#2A8703]">
                  ${pick.savings}
                </span>
              </div>
            )}
            {brand && (
              <p className="mt-1.5 text-[14px] font-bold leading-5 text-ld-text-default">{brand}</p>
            )}
            <button
              type="button"
              onClick={() => onSelect(pick)}
              className="mt-1 block text-left text-[14px] leading-4 text-ld-text-default"
            >
              <span className="line-clamp-3">{pick.title}</span>
            </button>
            <div className="mt-1.5">
              <TileRating item={pick} />
            </div>
            <div className="mt-1.5">
              {pick.shippingLines?.map((line) => (
                <Fulfillment key={line} line={line} />
              ))}
            </div>
            <div className="mt-auto pt-3">
              <button
                type="button"
                onClick={() => onSelect(pick)}
                className="flex h-9 w-full items-center justify-center rounded-full bg-walmart-blue text-[14px] font-bold text-white active:opacity-90"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <p className="mt-2 text-right text-[13px] leading-4 text-[#74767C]">Sponsored</p>
      </div>
      <div className="mt-4">
        <Divider />
      </div>
    </section>
  );
}

export function RatedCarousel({
  item,
  title,
  subtitle,
  variant,
  onSelect,
  minRating = 0,
  offset = 0,
  items,
}: {
  item: WalmartItem;
  title: string;
  subtitle?: string;
  variant?: "rated" | "popular";
  onSelect: (item: WalmartItem) => void;
  minRating?: number;
  offset?: number;
  items?: WalmartItem[];
}) {
  const list = items
    ? items.filter((i) => i.id !== item.id)
    : others(item)
        .filter((i) => i.rating >= minRating)
        .slice(offset, offset + 4);
  if (list.length === 0) return null;
  return (
    <PLPStarsCarousel
      items={list}
      title={title}
      subtitle={subtitle}
      variant={variant}
      onSelect={onSelect}
    />
  );
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
