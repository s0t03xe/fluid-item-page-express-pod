import { useEffect, useRef, useState } from "react";
import AddedToCartSheet from "@/components/walmart/AddedToCartSheet";
import AskSparkySheet from "@/components/walmart/AskSparkySheet";
import ReviewsSheet from "@/components/walmart/ReviewsSheet";
import ProductGallery from "@/components/walmart/ProductGallery";
import ProductActions from "@/components/walmart/ProductActions";
import ProductInfo from "@/components/walmart/ProductInfo";
import FulfillmentSection from "@/components/walmart/FulfillmentSection";
import EligibilityActions from "@/components/walmart/EligibilityActions";
import ItemDetails from "@/components/walmart/ItemDetails";
import ProtectionPlan from "@/components/walmart/ProtectionPlan";
import BuyBoxAd from "@/components/walmart/BuyBoxAd";
import P13NCarousel from "@/components/walmart/P13NCarousel";
import TotalWirelessBanner from "@/components/walmart/TotalWirelessBanner";
import SparkyCopilot from "@/components/walmart/SparkyCopilot";
import OnePayCard from "@/components/walmart/OnePayCard";
import SimilarItemsCarousel from "@/components/walmart/SimilarItemsCarousel";
import AboutThisItem from "@/components/walmart/AboutThisItem";
import RefineSearch from "@/components/walmart/RefineSearch";
import CustomerReviews from "@/components/walmart/CustomerReviews";
import RewardsDebitCard from "@/components/walmart/RewardsDebitCard";
import CustomersAlsoConsidered from "@/components/walmart/CustomersAlsoConsidered";
import FeedbackBanner from "@/components/walmart/FeedbackBanner";
import PurchaseBar from "@/components/walmart/PurchaseBar";
import type { WalmartItem } from "@/lib/walmart-items";

export default function ItemPage({
  item,
  onAtTopChange,
  onSwipePrevItem,
  onSwipeNextItem,
  onSheetOpenChange,
}: {
  item: WalmartItem;
  onAtTopChange?: (atTop: boolean) => void;
  onSwipePrevItem?: () => void;
  onSwipeNextItem?: () => void;
  onSheetOpenChange?: (open: boolean) => void;
}) {
  const atTopRef = useRef(true);
  const ticking = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sheet, setSheet] = useState<"cart" | "sparky" | "reviews" | null>(null);
  const closeSheet = () => setSheet(null);

  useEffect(() => {
    onSheetOpenChange?.(sheet !== null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheet]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const update = () => {
      ticking.current = false;
      const isAtTop = container.scrollTop <= 0;
      if (isAtTop !== atTopRef.current) {
        atTopRef.current = isAtTop;
        onAtTopChange?.(isAtTop);
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    onAtTopChange?.(atTopRef.current);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-full overflow-hidden bg-white">
      <div
        ref={scrollRef}
        className="flex h-full flex-col overflow-y-auto bg-white [overflow-anchor:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
      <main className="flex-1 pb-2">
        <div className="sticky top-0 z-0">
          <ProductGallery
            heroImage={item.richGallery ? undefined : item.image}
            onSwipePrevItem={onSwipePrevItem}
            onSwipeNextItem={onSwipeNextItem}
          />
          <ProductActions />
        </div>

        <div className="relative z-10 bg-white">
          <ProductInfo
            title={item.title}
            store={item.store}
            rating={item.rating}
            ratingCount={item.ratingCount}
            priceDollars={item.priceDollars}
            priceCents={item.priceCents}
            priceWas={item.priceWas}
            savings={item.savings}
            monthly={item.monthly}
            onOpenReviews={() => setSheet("reviews")}
          />
          <FulfillmentSection />
          <EligibilityActions />
          <div className="mx-4 h-px bg-[#E3E4E5]" />
          <ItemDetails />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <ProtectionPlan />
          <BuyBoxAd />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <P13NCarousel />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <TotalWirelessBanner />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <SparkyCopilot onOpen={() => setSheet("sparky")} />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <OnePayCard />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <SimilarItemsCarousel />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <AboutThisItem />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <RefineSearch />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <CustomerReviews onOpenReviews={() => setSheet("reviews")} />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <RewardsDebitCard />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <CustomersAlsoConsidered />
          <div className="h-px w-full bg-[#E3E4E5]" />
          <FeedbackBanner />
          <div className="h-px w-full bg-[#E3E4E5]" />
        </div>
      </main>

      <div className="sticky bottom-0 z-30 bg-white">
        <PurchaseBar onAddToCart={() => setSheet("cart")} />
        <div className="flex h-[17px] items-center justify-center bg-white transition-colors duration-300 ease-out">
          <div className="h-[5px] w-[135px] rounded-full bg-black" />
        </div>
      </div>

      </div>

      <AddedToCartSheet open={sheet === "cart"} onClose={closeSheet} />
      <AskSparkySheet open={sheet === "sparky"} onClose={closeSheet} item={item} />
      <ReviewsSheet
        open={sheet === "reviews"}
        onClose={closeSheet}
        rating={item.rating}
        ratingCount={item.ratingCount}
      />
    </div>
  );
}
