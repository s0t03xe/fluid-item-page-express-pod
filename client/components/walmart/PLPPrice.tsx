import type { WalmartItem } from "@/lib/walmart-items";

export default function PLPPrice({
  item,
  tone = "green",
  size = "md",
}: {
  item: WalmartItem;
  tone?: "green" | "default";
  size?: "md" | "sm";
}) {
  const color = tone === "green" ? "text-[#2A8703]" : "text-ld-text-default";
  const big = size === "md" ? "text-[22px]" : "text-[20px]";
  const sup = size === "md" ? "text-[13px]" : "text-[12px]";

  return (
    <div className="flex flex-wrap items-baseline gap-x-1.5">
      <span className={`flex items-start font-bold leading-6 ${color}`}>
        {item.priceWas && (
          <span className={size === "md" ? "mr-1 text-[17px] leading-7" : "mr-1 text-[15px] leading-6"}>
            Now
          </span>
        )}
        <span className={`${size === "md" ? "text-[17px] leading-5" : "text-[15px] leading-5"} mt-0.5`}>$</span>
        <span className={big}>{item.priceDollars}</span>
        <span className={`${sup} mt-0.5 leading-4`}>{item.priceCents}</span>
      </span>
      {item.priceWas && (
        <span className="text-[13px] leading-4 text-[#74767C] line-through">
          ${item.priceWas}
        </span>
      )}
    </div>
  );
}
