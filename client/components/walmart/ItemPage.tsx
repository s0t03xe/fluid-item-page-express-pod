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

function SponsoredItemDetails({ item }: { item: WalmartItem }) {
  const specifications = [
    ["Noise cancellation", "Up to 50 dB ANC"],
    ["Playback", "Up to 120 hours"],
    ["Call clarity", "6-MIC ENC"],
    ["Audio", "Hi-Res 360° spatial audio"],
    ["Design", "Foldable over-ear headphones"],
  ];

  return (
    <section className="flex flex-col gap-4 px-4 py-5" aria-label="Product details">
      <div className="flex items-center justify-between border-b border-[#E3E4E5] pb-4">
        <div>
          <h2 className="text-[16px] font-bold leading-6 text-ld-text-default">Product details</h2>
          <p className="mt-1 text-[14px] leading-5 text-[#74767C]">
            {item.shippingLines?.[0] ?? "Shipping details available at checkout"}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[16px] font-bold leading-6 text-ld-text-default">{item.rating} / 5</p>
          <p className="text-[12px] leading-4 text-[#74767C]">{item.ratingCount} reviews</p>
        </div>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-5 text-ld-text-default">Key features</h3>
        <dl className="mt-3 divide-y divide-[#E3E4E5]">
          {specifications.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3 py-3">
              <dt className="text-[14px] leading-5 text-[#74767C]">{label}</dt>
              <dd className="text-[14px] leading-5 text-ld-text-default">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

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
  const isSponsoredVideo = Boolean(item.sponsored && item.galleryVideoSrc);
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
            videoSrc={item.galleryVideoSrc}
            videoPoster={item.galleryVideoPoster}
            emphasizeVideo={isSponsoredVideo}
            onSwipePrevItem={onSwipePrevItem}
            onSwipeNextItem={onSwipeNextItem}
          />
          {!isSponsoredVideo && <ProductActions />}
        </div>

        <div className="relative z-10 bg-white">
          {isSponsoredVideo ? (
            <section className="border-b border-[#E3E4E5] px-4 py-4">
              <p className="text-[12px] leading-4 text-[#74767C]">Sponsored</p>
              <h1 className="mt-1 text-[15px] font-medium leading-5 text-ld-text-default">
                {item.title}
              </h1>
              <p className="mt-2 text-[24px] font-bold leading-8 text-[#2A8703]">
                Now ${item.priceDollars}.{item.priceCents}
              </p>
            </section>
          ) : (
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
          )}
          {isSponsoredVideo ? (
            <SponsoredItemDetails item={item} />
          ) : (
            <>
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
            </>
          )}
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
