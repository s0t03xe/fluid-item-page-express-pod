import BottomSheet from "@/components/walmart/BottomSheet";
import { Cart, ChevronLeft } from "@/components/walmart/icons";
import type { WalmartItem } from "@/lib/walmart-items";

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.1458 2.79167L12.3333 2.33333L12.7708 1.16667C12.7917 1.0625 12.8958 1 13 1C13.0833 1 13.1875 1.0625 13.2083 1.16667L13.6667 2.33333L14.8333 2.79167C14.9375 2.8125 15 2.91667 15 3C15 3.10417 14.9375 3.20833 14.8333 3.22917L13.6667 3.66667L13.2083 4.85417C13.1875 4.9375 13.0833 5 13 5C12.8958 5 12.7917 4.9375 12.7708 4.85417L12.3333 3.66667L11.1458 3.22917C11.0625 3.20833 11 3.10417 11 3C11 2.91667 11.0625 2.8125 11.1458 2.79167Z"
        fill="currentColor"
      />
      <path
        d="M1.28346 8.5288L1.8189 8.3089L2.07087 8.18325H2.10236L4.87402 6.89529L6.16535 4.09948L6.29134 3.84817L6.54331 3.31414C6.6063 3.12565 6.79528 3 6.98425 3C7.17323 3 7.3622 3.12565 7.45669 3.31414L7.70866 3.84817L7.80315 4.09948L7.83465 4.13089L9.09449 6.89529L11.8976 8.18325L12.1496 8.3089L12.685 8.56021C12.874 8.62304 13 8.81152 13 9C13 9.18848 12.874 9.37696 12.685 9.4712L12.1496 9.6911L11.8976 9.81675L9.09449 11.1047L7.80315 13.8691V13.9005L7.67717 14.1518L7.45669 14.6859C7.3622 14.8743 7.17323 15 6.98425 15C6.79528 15 6.6063 14.8743 6.54331 14.6859L6.29134 14.1518L6.16535 13.9005V13.8691L4.87402 11.1047L2.10236 9.81675H2.07087L1.8189 9.6911L1.28346 9.4712C1.09449 9.37696 1 9.18848 1 9C1 8.81152 1.09449 8.62304 1.28346 8.5288Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SUGGESTIONS = [
  "Compare this to similar options",
  "What are people saying about this?",
  "What else goes well with this?",
];

export default function AskSparkySheet({
  open,
  onClose,
  item,
  cartCount = 2,
  cartPrice = "$298.48",
}: {
  open: boolean;
  onClose: () => void;
  item: WalmartItem;
  cartCount?: number;
  cartPrice?: string;
}) {
  return (
    <BottomSheet open={open} onClose={onClose} heightClass="h-[92%]">
      <div className="flex justify-center pb-1 pt-2">
        <div className="h-1 w-10 rounded-full bg-[#D8D8D8]" />
      </div>

      <div className="flex items-center justify-between border-b border-[#E3E4E5] px-4 pb-3">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Back" onClick={onClose}>
            <ChevronLeft size={20} className="text-[#2E2F32]" />
          </button>
          <span className="text-[18px] font-bold leading-6 text-[#2E2F32]">Ask Sparky</span>
          <span className="flex items-center gap-1 rounded-full bg-[#E9F1FE] px-2 py-0.5 text-[12px] font-semibold text-[#0053E2]">
            <SparkleIcon /> AI
          </span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <div className="relative">
            <Cart size={22} className="text-[#2E2F32]" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-walmart-yellow text-[10px] font-bold text-[#2E2F32]">
              {cartCount}
            </span>
          </div>
          <span className="text-[12px] text-[#2E2F32]">{cartPrice}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#FFF7E6] to-white p-3">
          <img src={item.image} alt="" className="h-12 w-12 shrink-0 rounded-md bg-white object-contain" />
          <div className="flex min-w-0 flex-col">
            <span className="text-[12px] text-[#74767C]">About this item</span>
            <span className="line-clamp-1 text-[14px] font-bold text-[#2E2F32]">{item.title}</span>
          </div>
        </div>

        <p className="text-[16px] leading-6 text-[#2E2F32]">
          Hey Pooka! What would you like to know about this item?
        </p>

        <div className="flex flex-col gap-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className="self-start rounded-full bg-[#E9F1FE] px-4 py-2 text-left text-[14px] font-medium text-[#0053E2] active:bg-[#DCE9FD]"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-[#E3E4E5] px-4 py-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-walmart-yellow text-[16px]">
          🙂
        </span>
        <span className="text-[15px] text-[#74767C]">Ask me anything</span>
      </div>
    </BottomSheet>
  );
}
