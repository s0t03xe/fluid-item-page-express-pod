import BottomSheet from "@/components/walmart/BottomSheet";
import { Close } from "@/components/walmart/icons";
import {
  InfoCircle,
  RatingHistogram,
  ReviewStars,
  ReviewsSummaryCard,
} from "@/components/walmart/CustomerReviews";

const UGC_1 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb672f89edaaf40f28a9e69042f91f908";
const UGC_2 = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Ff1365c14e6a14d68bc8df7ef195dedd9";
const UGC_3 = "https://cdn.builder.io/api/v1/file/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F2b056b0b5a724506b3b467bbe3ea5409";

export default function ReviewsSheet({
  open,
  onClose,
  rating,
  ratingCount,
}: {
  open: boolean;
  onClose: () => void;
  rating: number;
  ratingCount: string;
}) {
  return (
    <BottomSheet open={open} onClose={onClose} heightClass="h-[92%]">
      <div className="flex items-center justify-end px-4 pt-4">
        <button type="button" aria-label="Close" onClick={onClose}>
          <Close size={20} className="text-[#2E2F32]" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 pb-6 pt-2">
        <span className="text-[20px] font-bold leading-7 text-[#2E2F32]">
          Customer ratings &amp; reviews
        </span>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[18px] font-bold leading-6 text-[#2E2F32]">{rating} out of 5</span>
            <ReviewStars value={rating} />
          </div>
          <div className="flex items-center gap-1 text-[12px] leading-4 text-[#2E2F32]">
            <span>{ratingCount} ratings</span>
            <span>|</span>
            <button type="button" className="underline">
              312 reviews
            </button>
          </div>
        </div>

        <RatingHistogram />

        <div className="flex items-center gap-1">
          <button type="button" className="text-[14px] leading-5 text-[#2E2F32] underline">
            How item rating is calculated
          </button>
          <InfoCircle color="#2E2F32" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-bold leading-6 text-[#2E2F32]">Customer images</span>
            <button type="button" className="text-[14px] leading-5 text-[#2E2F32] underline">
              View all
            </button>
          </div>
          <div className="flex h-[98px] items-start gap-2">
            <div
              className="h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
              style={{ backgroundImage: `url(${UGC_1})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
            />
            <div
              className="h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
              style={{ backgroundImage: `url(${UGC_2})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
            />
            <div
              className="relative h-full min-w-0 flex-1 basis-0 overflow-hidden rounded-lg bg-no-repeat"
              style={{ backgroundImage: `url(${UGC_3})`, backgroundSize: "150% auto", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-[16px] leading-6 text-white">+18 images</span>
              </div>
            </div>
          </div>
        </div>

        <ReviewsSummaryCard />
      </div>
    </BottomSheet>
  );
}
