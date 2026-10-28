import { Cart, ChevronLeft, Search } from "./icons";

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3.5 8.5a2 2 0 0 1 2-2h2l1.2-1.8a1 1 0 0 1 .8-.4h5a1 1 0 0 1 .8.4L16.5 6.5h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Header({
  query,
  cartCount = 0,
  cartPrice = "$0.00",
}: {
  query?: string;
  cartCount?: number;
  cartPrice?: string;
} = {}) {
  return (
    <div className="flex items-center gap-5 bg-walmart-blue py-3 pl-4 pr-4">
      {/* Back chevron */}
      <button aria-label="Go back" className="shrink-0 text-white">
        <ChevronLeft size={24} />
      </button>

      {/* Search pill */}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-full bg-white py-1.5 pl-4 pr-2">
        <div className="flex flex-1 items-center gap-2">
          <Search size={16} className="shrink-0 text-ld-base-subtle" />
          <span
            className={`flex-1 truncate text-base leading-6 ${
              query ? "text-ld-text-default" : "text-ld-base-subtle"
            }`}
          >
            {query || "Search Walmart"}
          </span>
        </div>

        <CameraIcon className="shrink-0 text-ld-text-default" />
      </div>

      {/* Cart */}
      <button
        aria-label="Cart"
        className="relative flex shrink-0 flex-col items-center"
      >
        <div className="relative text-white">
          <Cart size={24} />

          {/* badge */}
          <span className="absolute -right-1.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-ld-warning-max bg-walmart-yellow px-1 text-[12px] font-bold leading-none text-ld-text-default">
            {cartCount}
          </span>
        </div>

        {/* price */}
        <span className="mt-0.5 text-[12px] leading-4 text-white">
          {cartPrice}
        </span>
      </button>
    </div>
  );
}
