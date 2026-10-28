import BottomSheet from "@/components/walmart/BottomSheet";
import { Close } from "@/components/walmart/icons";

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.25" stroke="#2A8703" strokeWidth="1.5" />
      <path d="M8 12.3L10.6 14.9L16 9.5" stroke="#2A8703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldBadge() {
  return (
    <div className="relative flex h-[110px] w-[96px] shrink-0 items-center justify-center">
      <svg width="96" height="112" viewBox="0 0 96 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M48 4 L90 17 V52 C90 80 71 98 48 108 C25 98 6 80 6 52 V17 Z"
          fill="#0053E2"
          stroke="#BFD9FF"
          strokeWidth="3"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-4 text-center">
        <span className="text-[12px] font-bold italic text-white">Walmart</span>
        <span className="text-[15px] font-extrabold leading-tight text-[#FFC220]">
          Protection
          <br />
          Plans
        </span>
        <span className="text-[9px] italic text-white">by Allstate.</span>
      </div>
    </div>
  );
}

const COVERAGE = [
  "Accidents like drops, cracked screens & liquid damage",
  "Breakdowns or failures during normal use including rips, tears & broken zippers",
  "Fast repairs & replacements with easy online claims available 24/7",
  "Includes 100% parts & labor with no hidden fees",
];

export default function AddedToCartSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <BottomSheet open={open} onClose={onClose} heightClass="h-[92%]">
      <div className="flex items-center justify-between border-b border-[#E3E4E5] px-4 py-4">
        <div className="flex items-center gap-2">
          <CheckCircleIcon />
          <span className="text-[18px] font-bold leading-6 text-[#2E2F32]">Added to cart!</span>
        </div>
        <button type="button" aria-label="Close" onClick={onClose}>
          <Close size={20} className="text-[#2E2F32]" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center gap-4 overflow-y-auto px-4 py-4">
        <span className="self-start rounded-full border border-[#0053E2] px-3 py-1 text-[13px] font-semibold text-[#0053E2]">
          100K+ plans bought in past week
        </span>

        <h2 className="text-center text-[22px] font-extrabold leading-7 text-[#2E2F32]">
          Walmart Accident Plan
          <br />
          by Allstate
        </h2>

        <ShieldBadge />

        <p className="text-center text-[15px] leading-6 text-[#2E2F32]">
          Protect it today. Enjoy it for years. Plan covers:
        </p>

        <ul className="flex w-full flex-col gap-3 text-[15px] leading-6 text-[#2E2F32]">
          {COVERAGE.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[#2E2F32]" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <button type="button" className="self-start text-[15px] font-medium text-[#2E2F32] underline">
          View all details
        </button>
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-[#E3E4E5] px-4 py-4">
        <button type="button" className="w-full rounded-full bg-[#0053E2] py-3 text-[16px] font-bold text-white active:bg-walmart-blue-dark">
          2-Year Plan - $2.00
        </button>
        <button type="button" onClick={onClose} className="text-[15px] font-medium text-[#2E2F32] underline">
          No thanks
        </button>
      </div>
    </BottomSheet>
  );
}
