function StarIcon({ variant, id }: { variant: "full" | "half" | "empty"; id: string }) {
  const path = "M6 0.5 7.5 4l3.5.5-2.7 2.5.7 3.5L6 8.7 2.5 10.5l.7-3.5L.5 4.5 4 4Z";
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
      {variant === "half" && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="#FFC220" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d={path}
        fill={
          variant === "full" ? "#FFC220" : variant === "half" ? `url(#${id})` : "none"
        }
        stroke={variant === "empty" ? "#74767C" : "#FFC220"}
        strokeWidth={variant === "full" ? 0 : 0.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PLPRating({
  rating,
  count,
  idPrefix = "star",
}: {
  rating: number;
  count: string;
  idPrefix?: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-px" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const variant =
            i + 1 <= Math.floor(rating) ? "full" : i < rating ? "half" : "empty";
          return <StarIcon key={i} variant={variant} id={`${idPrefix}-${i}`} />;
        })}
      </div>
      <span className="text-[13px] leading-4 text-[#74767C]">{count}</span>
    </div>
  );
}

export function SaveWithPlus() {
  return (
    <span className="flex items-center gap-1 text-[13px] font-bold leading-4 text-walmart-blue">
      Save with
      <span className="flex items-center text-[13px] font-extrabold">
        W<span className="text-[#FFC220]">+</span>
      </span>
    </span>
  );
}

export function Fulfillment({ line }: { line: string }) {
  const m = line.match(/^(.*?(?:arrives|as soon as))\s+(.*)$/i);
  if (!m) return <p className="text-[13px] leading-4 text-ld-text-default">{line}</p>;
  return (
    <p className="text-[13px] leading-4 text-ld-text-default">
      {m[1]} <span className="font-bold">{m[2]}</span>
    </p>
  );
}
