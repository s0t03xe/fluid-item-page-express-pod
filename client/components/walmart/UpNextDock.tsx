import type { WalmartItem } from "@/lib/walmart-items";

const SLOT = 64;
const GAP = 8;

export default function UpNextDock({
  items,
  activeId,
  onSelect,
}: {
  items: WalmartItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const activeIndex = Math.max(
    0,
    items.findIndex((i) => i.id === activeId),
  );
  const offset = activeIndex * (SLOT + GAP) + SLOT / 2;

  return (
    <div className="relative h-16 w-full shrink-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 flex items-center transition-transform duration-300 ease-out"
        style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
      >
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              aria-label={item.title}
              aria-current={active}
              onClick={() => onSelect(item.id)}
              className="flex h-16 shrink-0 items-center justify-center"
              style={{ width: SLOT }}
            >
              <span
                className={`block overflow-hidden rounded-full border-2 bg-white shadow-lg transition-all duration-300 ${
                  active
                    ? "h-16 w-16 border-walmart-blue opacity-100 grayscale-0"
                    : "h-12 w-12 border-transparent opacity-50 grayscale"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
