import type { ReactNode } from "react";
import { ChevronDown, Sliders } from "@/components/walmart/icons";

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#2A8703]">
      <path
        d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.12 0l-6.38-6.38a1.5 1.5 0 0 1 0-2.12L11.5 4H19a1 1 0 0 1 1 1v7.5Z"
        fill="currentColor"
      />
      <circle cx="15" cy="8" r="1.4" fill="white" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-current text-[10px] font-bold leading-none">
      $
    </span>
  );
}

const chipClass =
  "flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[#2E2F32] bg-white px-3 text-[15px] font-medium text-ld-text-default active:bg-walmart-gray-bg";

function Chip({ icon, label, chevron }: { icon?: ReactNode; label: string; chevron?: boolean }) {
  return (
    <button type="button" className={chipClass}>
      {icon}
      {label}
      {chevron && <ChevronDown size={16} />}
    </button>
  );
}

export default function SearchFilterChips() {
  return (
    <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        aria-label="Filters"
        className="flex h-9 w-12 shrink-0 items-center justify-center rounded-full border border-[#2E2F32] text-ld-text-default"
      >
        <Sliders size={18} />
      </button>
      <Chip icon={<BoltIcon />} label="Get it fast" />
      <Chip icon={<TagIcon />} label="All deals" />
      <Chip icon={<DollarIcon />} label="Price" chevron />
      <Chip label="Brand" chevron />
    </div>
  );
}
