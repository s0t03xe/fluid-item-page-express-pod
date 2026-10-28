import { Heart } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";

const CILLSO_LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8a64cb6d414c4a0480bed98aa713f8fc";
const SECONDARY_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fa38e092395b24bba841e739591f407b7";

function StarFull() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 0.5 7.5 4l3.5.5-2.7 2.5.7 3.5L6 8.7 2.5 10.5l.7-3.5L.5 4.5 4 4Z"
        fill="#FFC220"
      />
    </svg>
  );
}

export default function SponsoredHeadphonesBanner({
  item,
  onSelect,
}: {
  item: WalmartItem;
  onSelect: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-walmart-gray-line bg-white px-4 py-4">
      <div className="flex items-center gap-2">
        <img src={CILLSO_LOGO} alt="" className="h-5 w-5 rounded" />
        <div className="flex flex-col">
          <span className="text-[14px] font-bold leading-5 text-ld-text-default">
            EarBuds and Headphones
          </span>
          <span className="text-[12px] leading-4 text-[#74767C]">
            Sponsored by Cillso
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onSelect}
          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-white"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
          <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Heart size={13} />
          </span>
        </button>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-[16px] font-bold leading-6 text-ld-text-default">
                  Now ${item.priceDollars}.{item.priceCents}
                </span>
                {item.priceWas && (
                  <span className="text-[13px] leading-4 text-[#74767C] line-through">
                    ${item.priceWas}
                  </span>
                )}
              </div>
              <p className="line-clamp-2 text-[13px] leading-4 text-ld-text-default">
                {item.title}
              </p>
              <div className="flex items-center gap-1">
                <div className="flex gap-px">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFull key={i} />
                  ))}
                </div>
                <span className="text-[12px] leading-4 text-[#74767C]">
                  {item.ratingCount}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="relative h-16 w-12 shrink-0 overflow-hidden rounded-xl bg-white"
            >
              <img
                src={SECONDARY_IMG}
                alt=""
                className="h-full w-full object-contain"
              />
              <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
                <Heart size={11} />
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={onSelect}
            className="flex h-11 items-center justify-center rounded-full bg-walmart-blue text-[16px] font-bold text-white active:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
