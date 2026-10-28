import type { WalmartItem } from "@/lib/walmart-items";

export default function PLPBadge({ item }: { item: WalmartItem }) {
  if (!item.badge) return null;
  const kind = item.badgeKind ?? "outline";

  if (kind === "rollback") {
    return (
      <span className="flex w-fit items-center gap-1 rounded-[3px] bg-[#E41404] px-1.5 py-[3px] text-[11px] font-bold leading-3 text-white">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1.5v8.2M2.6 6.4 6 9.8l3.4-3.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {item.badge}
      </span>
    );
  }

  const styles: Record<string, string> = {
    deal: "bg-[#041C3C] text-white",
    bestseller: "bg-[#E4ECFC] text-[#041C3C]",
    new: "bg-[#CFE3FF] text-[#041C3C]",
    outline: "border border-walmart-blue bg-white text-walmart-blue",
  };

  return (
    <span
      className={`w-fit rounded-[3px] px-1.5 py-[3px] text-[11px] font-bold leading-3 ${styles[kind]}`}
    >
      {item.badge}
    </span>
  );
}
