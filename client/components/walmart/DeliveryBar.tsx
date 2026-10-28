import { ChevronDown } from "@/components/walmart/icons";

function PickupIcon() {
  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 16V7a1 1 0 0 1 1-1h9v10M3 16h10M3 16v2m10-2v2m0-10h4l4 4v4a1 1 0 0 1-1 1h-1m-6-9v9m-8 2a2 2 0 1 0 4 0m8 0a2 2 0 1 0 4 0"
          stroke="#0053E2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function DeliveryBar() {
  return (
    <div className="flex items-center gap-2 bg-walmart-blue px-4 pb-2.5 pt-1 text-white">
      <PickupIcon />
      <span className="flex-1 truncate text-[14px] font-semibold leading-4">
        Pickup or delivery?
      </span>
      <span className="truncate text-[14px] leading-4">San Jose, 95129</span>
      <ChevronDown size={16} className="shrink-0" />
    </div>
  );
}
