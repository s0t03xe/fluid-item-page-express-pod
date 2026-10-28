import { ChevronDown, Sliders } from "@/components/walmart/icons";

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.12 0l-6.38-6.38a1.5 1.5 0 0 1 0-2.12L11.5 4H19a1 1 0 0 1 1 1v7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="8" r="1.25" fill="currentColor" />
    </svg>
  );
}

export default function SearchFilterChips() {
  return (
    <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        aria-label="Filters"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-walmart-gray-line text-ld-text-default"
      >
        <Sliders size={16} />
      </button>
      <button className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-walmart-gray-line px-3 text-[14px] font-semibold text-ld-text-default">
        <BoltIcon />
        Get it fast
      </button>
      <button className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-walmart-gray-line px-3 text-[14px] font-semibold text-ld-text-default">
        <TagIcon />
        All deals
      </button>
      <button className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-walmart-gray-line px-3 text-[14px] font-semibold text-ld-text-default">
        Compare
        <ChevronDown size={14} />
      </button>
    </div>
  );
}
