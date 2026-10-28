import type { WalmartItem } from "@/lib/walmart-items";

export default function UpNextDock({
  items,
  activeId,
  onSelect,
}: {
  items: WalmartItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 px-6">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            aria-label={item.title}
            onClick={() => onSelect(item.id)}
            className={`shrink-0 overflow-hidden rounded-full border-2 shadow-lg transition-all duration-200 ${
              active
                ? "h-16 w-16 border-walmart-blue opacity-100 grayscale-0"
                : "h-12 w-12 border-transparent opacity-60 grayscale"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
