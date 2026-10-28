import { useEffect, useRef, useState } from "react";
import AddedToCartSheet from "@/components/walmart/AddedToCartSheet";
import AskSparkySheet from "@/components/walmart/AskSparkySheet";
import ProductGallery from "@/components/walmart/ProductGallery";
import OnePayCard from "@/components/walmart/OnePayCard";
import PdpSummary from "@/components/walmart/pdp/PdpSummary";
import PdpFulfillment from "@/components/walmart/pdp/PdpFulfillment";
import {
  KeyFeatures,
  QuickActions,
  SparkyChips,
  Specifications,
  TopReasonToBuy,
  topReasonToBuy,
} from "@/components/walmart/pdp/PdpDetails";
import {
  PdpReviewsSheet,
  ReviewsSummary,
} from "@/components/walmart/pdp/PdpReviews";
import {
  ListActions,
  ProtectionPlan,
  WalmartPlusBanner,
} from "@/components/walmart/pdp/PdpExtras";
import {
  AboutThisItem,
  CompareItems,
  RatedCarousel,
  RefineSearch,
  SimilarItems,
  SponsoredCard,
} from "@/components/walmart/pdp/PdpCarousels";
import { Divider } from "@/components/walmart/pdp/ui";
import PurchaseBar from "@/components/walmart/PurchaseBar";
import { getPdpContent } from "@/lib/pdp-content";
import { STARS_ORDER, type WalmartItem } from "@/lib/walmart-items";

export default function ItemPage({
  item,
  onAtTopChange,
  onSwipePrevItem,
  onSwipeNextItem,
  onOpenItem,
  onOpenCarouselItem,
  onSheetOpenChange,
  active = true,
}: {
  item: WalmartItem;
  active?: boolean;
  onAtTopChange?: (atTop: boolean) => void;
  onSwipePrevItem?: () => void;
  onSwipeNextItem?: () => void;
  onOpenItem?: (item: WalmartItem) => void;
  onOpenCarouselItem?: (items: WalmartItem[], index: number) => void;
  onSheetOpenChange?: (open: boolean) => void;
}) {
  const atTopRef = useRef(true);
  const ticking = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sheet, setSheet] = useState<"cart" | "sparky" | "reviews" | null>(
    null,
  );
  const isSponsoredVideo = Boolean(item.sponsored && item.galleryVideoSrc);
  const closeSheet = () => setSheet(null);
  const content = getPdpContent(item);
  const hasContent = content.keyFeatures.length > 0;
  const hasAiSummary = content.videos.length > 0;
  const hasVariants = content.colors.length > 1;
  const trtb = topReasonToBuy(item.id);
  const openCart = () => setSheet("cart");
  const openItem = (it: WalmartItem) => (onOpenItem ? onOpenItem(it) : openCart());
  const openStarsItem = (it: WalmartItem) => {
    const idx = STARS_ORDER.findIndex((x) => x.id === it.id);
    if (onOpenCarouselItem && idx >= 0) onOpenCarouselItem(STARS_ORDER, idx);
    else openCart();
  };

  useEffect(() => {
    if (active) return;
    scrollRef.current?.scrollTo({ top: 0 });
  }, [active]);

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
    <div
      data-fluid-active={active ? "true" : "false"}
      className="relative h-full overflow-hidden bg-white"
    >
      <div
        ref={scrollRef}
        className="flex h-full flex-col overflow-y-auto bg-white [overflow-anchor:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <main className="flex-1 pb-2">
          <div className="sticky top-0 z-0">
            <ProductGallery
              heroImage={item.richGallery ? undefined : item.image}
              images={
                isSponsoredVideo || item.richGallery
                  ? undefined
                  : content.gallery
              }
              videoSrc={item.galleryVideoSrc}
              videoPoster={item.galleryVideoPoster}
              emphasizeVideo={isSponsoredVideo}
              active={active}
              onSwipePrevItem={onSwipePrevItem}
              onSwipeNextItem={onSwipeNextItem}
            />
            {!isSponsoredVideo && <QuickActions />}
          </div>

          <div className="relative z-10 bg-white">
            <PdpSummary
              item={item}
              content={content}
              onOpenReviews={() => setSheet("reviews")}
              sponsored={isSponsoredVideo}
              afterPrice={
                <>
                  {trtb && <TopReasonToBuy data={trtb} content={content} />}
                  <SparkyChips onOpen={() => setSheet("sparky")} compact />
                </>
              }
            />
            <>
              <OnePayCard />
              <PdpFulfillment item={item} content={content} />
              <Divider />
              <KeyFeatures content={content} />
              <Specifications content={content} />
              <Divider />
              <ReviewsSummary
                item={item}
                content={content}
                onOpenReviews={() => setSheet("reviews")}
              />
              <Divider />
              <ProtectionPlan item={item} />
              <ListActions />
              <Divider />
              <SponsoredCard item={item} onSelect={openItem} />
              <WalmartPlusBanner />
              <RatedCarousel
                item={item}
                title="4 stars and above"
                subtitle="Based on customer ratings and number of reviews"
                items={STARS_ORDER}
                onSelect={openStarsItem}
              />
              <RatedCarousel
                item={item}
                title="Popular items in this category"
                subtitle="Best selling items that customers love"
                variant="popular"
                offset={2}
                onSelect={openItem}
              />
              <AboutThisItem item={item} content={content} />
              <Divider />
              <SimilarItems content={content} />
              <CompareItems item={item} />
              <Divider />
              <RefineSearch />
            </>
          </div>
        </main>

        <div className="sticky bottom-0 z-30 bg-white">
          <PurchaseBar onAddToCart={() => setSheet("cart")} />
        </div>
      </div>

      <AddedToCartSheet open={sheet === "cart"} onClose={closeSheet} />
      <AskSparkySheet
        open={sheet === "sparky"}
        onClose={closeSheet}
        item={item}
      />
      <PdpReviewsSheet
        open={sheet === "reviews"}
        onClose={closeSheet}
        item={item}
        content={content}
      />
    </div>
  );
}
