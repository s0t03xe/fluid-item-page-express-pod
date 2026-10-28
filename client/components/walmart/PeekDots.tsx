export default function PeekDots({
  count,
  selected,
  onSelect,
}: {
  count: number;
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to item ${i + 1}`}
          onClick={() => onSelect(i)}
          className="flex items-center justify-center p-1"
        >
          <span
            className={`rounded-full transition-all duration-200 ${
              i === selected ? "h-2 w-2 bg-white" : "h-1.5 w-1.5 bg-white/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
