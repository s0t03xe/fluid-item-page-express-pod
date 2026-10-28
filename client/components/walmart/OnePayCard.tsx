import { InfoIcon } from "@/components/walmart/pdp/ui";

const CARD_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb2fcb74ae39e40d0ad6d6af6a6728bf4";

function AppleMusicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <rect width="24" height="24" rx="5.5" fill="#FA3A56" />
      <path d="M9.6 16.6V7.2l8.4-1.8v9.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7.6" cy="16.9" r="2.4" fill="#FFFFFF" />
      <circle cx="16" cy="14.8" r="2.4" fill="#FFFFFF" />
    </svg>
  );
}

export default function OnePayCard() {
  return (
    <div className="flex flex-col gap-4 bg-white px-4 pb-4 pt-3">
      <div className="flex items-center gap-3">
        <img
          src={CARD_IMG}
          alt="OnePay credit card"
          className="h-7 w-11 shrink-0 rounded-[3px] object-cover"
        />
        <p className="flex-1 text-[14px] leading-5 text-[#2E2F32]">
          See how to earn a $35 welcome bonus with the OnePay credit card.{" "}
          <button type="button" className="underline">
            Learn More
          </button>
        </p>
      </div>

      <div className="flex items-center gap-2 text-[14px] leading-5 text-ld-text-default">
        <AppleMusicIcon />
        <p className="flex-1 font-bold">5 free offers, including Apple Music up to 2 months Free</p>
        <InfoIcon size={16} className="shrink-0" />
      </div>
    </div>
  );
}
