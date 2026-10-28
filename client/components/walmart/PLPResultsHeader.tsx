function InfoCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M7.4 7H8.6v4.5H7.4V7Z" fill="#74767C" />
      <path
        d="M8 6.3a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
        fill="#74767C"
      />
      <path
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-1A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z"
        fill="#74767C"
      />
    </svg>
  );
}

export default function PLPResultsHeader({ count = "1000+" }: { count?: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-walmart-gray-line px-4 py-3">
      <span className="text-[14px] font-bold leading-4 text-ld-text-default">
        {count} Results
      </span>
      <span className="text-[12px] leading-4 text-[#74767C]">
        Uses item details. Price when purchased online.
      </span>
      <InfoCircle />
    </div>
  );
}
