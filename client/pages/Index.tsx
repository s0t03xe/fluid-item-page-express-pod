import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StatusBar from "@/components/walmart/StatusBar";
import Header from "@/components/walmart/Header";
import DeliveryBar from "@/components/walmart/DeliveryBar";
import SponsoredHeadphonesBanner from "@/components/walmart/SponsoredHeadphonesBanner";
import SearchFilterChips from "@/components/walmart/SearchFilterChips";
import CategoryShortcuts from "@/components/walmart/CategoryShortcuts";
import PLPResultsHeader from "@/components/walmart/PLPResultsHeader";
import PLPProductCard from "@/components/walmart/PLPProductCard";
import BottomNav from "@/components/walmart/BottomNav";
import ItemPageModal from "@/components/walmart/ItemPageModal";
import ConceptSwitcher, {
  type NavConcept,
} from "@/components/walmart/ConceptSwitcher";
import { WALMART_ITEMS } from "@/lib/walmart-items";

export default function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [concept, setConcept] = useState<NavConcept>(1);
  const [sponsored, ...results] = WALMART_ITEMS;

  return (
    <div className="flex min-h-screen flex-col bg-walmart-gray-bg [overflow-anchor:none]">
      <ConceptSwitcher value={concept} onChange={setConcept} />

      <div className="flex flex-1 items-center justify-center py-6">
        <div className="relative h-[852px] w-[393px] overflow-hidden bg-white shadow-xl">
          <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="sticky top-0 z-40">
              <StatusBar />
              <Header query="headphone" cartCount={1} cartPrice="$199.99" />
              <DeliveryBar />
            </div>

            <main className="flex-1 pb-2">
              <SponsoredHeadphonesBanner
                item={sponsored}
                onSelect={() => setOpenIndex(0)}
              />
              <SearchFilterChips />
              <CategoryShortcuts />
              <PLPResultsHeader />

              <div className="flex flex-col divide-y divide-walmart-gray-line px-4">
                {results.map((item, i) => {
                  const index = i + 1;
                  return (
                    <PLPProductCard
                      key={item.id}
                      item={item}
                      onSelect={() => setOpenIndex(index)}
                    />
                  );
                })}
              </div>
            </main>

            <div className="sticky bottom-0 z-30">
              <BottomNav />
            </div>
          </div>

          <AnimatePresence>
            {openIndex !== null && (
              <ItemPageModal
                items={WALMART_ITEMS}
                startIndex={openIndex}
                onClose={() => setOpenIndex(null)}
                presentation={concept === 4 ? "sheet" : "modal"}
                bottomIndicator={
                  concept === 2 ? "dock" : concept === 3 ? "dots" : "none"
                }
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
