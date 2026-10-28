import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import StatusBar from "@/components/walmart/StatusBar";
import Header from "@/components/walmart/Header";
import DeliveryBar from "@/components/walmart/DeliveryBar";
import SponsoredBrandCarousel from "@/components/walmart/SponsoredBrandCarousel";
import SearchFilterChips from "@/components/walmart/SearchFilterChips";
import CategoryShortcuts from "@/components/walmart/CategoryShortcuts";
import PLPResultsHeader from "@/components/walmart/PLPResultsHeader";
import PLPProductCard from "@/components/walmart/PLPProductCard";
import PLPVideoCard from "@/components/walmart/PLPVideoCard";
import SparkyPLPCard from "@/components/walmart/SparkyPLPCard";
import SparkyPLPSheet from "@/components/walmart/SparkyPLPSheet";
import BottomNav from "@/components/walmart/BottomNav";
import ItemPageModal from "@/components/walmart/ItemPageModal";
import ConceptSwitcher, {
  type NavConcept,
} from "@/components/walmart/ConceptSwitcher";
import { PLP_ORDER, pagerIndexOf, type WalmartItem } from "@/lib/walmart-items";

const item = (id: string): WalmartItem => {
  const found = PLP_ORDER.find((i) => i.id === id);
  if (!found) throw new Error(`Unknown item ${id}`);
  return found;
};

const BRAND_ITEMS = [item("bt-over-ear-65hr"), item("anc-45db-black")];
const VIDEO_ITEM = item("hybrid-anc-headphones");

type Row =
  | { kind: "card"; item: WalmartItem }
  | { kind: "video" }
  | { kind: "sparky" };

const card = (id: string): Row => ({ kind: "card", item: item(id) });

const ROWS: Row[] = [
  card("bt-over-ear-65hr"),
  card("anc-45db-black"),
  { kind: "video" },
  card("airpods-4"),
  card("deal-40h-black"),
  card("beats-studio-pro"),
  { kind: "sparky" },
  card("airpods-pro-3"),
  card("samsung-buds4-pro"),
  card("skullcandy-hesh"),
  card("onn-pink"),
];

export default function Index() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [nested, setNested] = useState<{
    items: WalmartItem[];
    startIndex: number;
    key: number;
  } | null>(null);
  const [concept, setConcept] = useState<NavConcept>(1);
  const [sparkyVisible, setSparkyVisible] = useState(false);
  const [sparkyDismissed, setSparkyDismissed] = useState(false);
  const [sparkyExpanded, setSparkyExpanded] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sparkyCardRef = useRef<HTMLDivElement>(null);

  const open = (it: WalmartItem) => setOpenIndex(pagerIndexOf(it));

  const scrollToItem = (id: string) => {
    const root = scrollRef.current;
    if (!root) return;
    const matches = root.querySelectorAll<HTMLElement>(`[data-plp-id="${id}"]`);
    const el = matches[matches.length - 1];
    if (!el) return;
    const hScroller = el.closest<HTMLElement>("[data-plp-hscroll]");
    if (hScroller) {
      const s = hScroller.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      hScroller.scrollLeft += r.left - s.left - (s.width - r.width) / 2;
    }
    const rootRect = root.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    root.scrollTop += r.top - rootRect.top - (root.clientHeight - r.height) / 2;
  };

  const closeNested = (selectedIndex: number) => {
    const id = nested?.items[selectedIndex]?.id;
    const card = document.querySelector<HTMLElement>('[data-fluid-active="true"]');
    const tile = id
      ? card?.querySelector<HTMLElement>(`[data-plp-id="${id}"]`)
      : null;
    const scroller = tile?.closest<HTMLElement>("[data-plp-hscroll]");
    if (tile && scroller) {
      const s = scroller.getBoundingClientRect();
      const r = tile.getBoundingClientRect();
      scroller.scrollLeft += r.left - s.left - (s.width - r.width) / 2;
    }
    setNested(null);
  };

  const closeModal = (selectedIndex: number) => {
    if (selectedIndex !== openIndex) {
      const target = PLP_ORDER[selectedIndex];
      if (target) scrollToItem(target.id);
    }
    setOpenIndex(null);
  };

  useEffect(() => {
    const target = sparkyCardRef.current;
    const root = scrollRef.current;
    if (!target || !root) return;
    const io = new IntersectionObserver(
      ([entry]) => setSparkyVisible(entry.isIntersecting),
      { root, threshold: 0.35 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const sparkyOpen = sparkyVisible && !sparkyDismissed;

  return (
    <div className="flex min-h-screen flex-col bg-walmart-gray-bg [overflow-anchor:none]">
      <ConceptSwitcher value={concept} onChange={setConcept} />

      <div className="flex flex-1 items-center justify-center py-6">
        <div className="relative h-[852px] w-[393px] overflow-hidden bg-white shadow-xl">
          <div
            ref={scrollRef}
            className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="sticky top-0 z-40">
              <StatusBar />
              <Header query="headphones" />
              <DeliveryBar />
            </div>

            <main className="flex-1 pb-28">
              <SponsoredBrandCarousel items={BRAND_ITEMS} onSelect={open} />
              <SearchFilterChips />
              <CategoryShortcuts />
              <PLPResultsHeader />

              <div className="flex flex-col divide-y divide-walmart-gray-line">
                {ROWS.map((row, i) => (
                  <Fragment key={i}>
                    {row.kind === "card" && (
                      <div className="px-4" data-plp-id={row.item.id}>
                        <PLPProductCard
                          item={row.item}
                          onSelect={() => open(row.item)}
                        />
                      </div>
                    )}
                    {row.kind === "video" && (
                      <div data-plp-id={VIDEO_ITEM.id}>
                        <PLPVideoCard
                          item={VIDEO_ITEM}
                          onSelect={() => open(VIDEO_ITEM)}
                        />
                      </div>
                    )}
                    {row.kind === "sparky" && (
                      <SparkyPLPCard ref={sparkyCardRef} />
                    )}
                  </Fragment>
                ))}
              </div>
            </main>

            <div className="sticky bottom-0 z-30 h-0">
              <div className="absolute inset-x-3 bottom-3 flex flex-col gap-2">
                <SparkyPLPSheet
                  open={sparkyOpen}
                  expanded={sparkyExpanded}
                  onToggle={() => setSparkyExpanded((e) => !e)}
                  onDismiss={() => setSparkyDismissed(true)}
                />
                <BottomNav sparkyRaised={sparkyOpen} />
              </div>
            </div>
          </div>

          <AnimatePresence>
            {openIndex !== null && (
              <ItemPageModal
                items={PLP_ORDER}
                startIndex={openIndex}
                onClose={closeModal}
                onOpenCarousel={(items, startIndex) =>
                  setNested({ items, startIndex, key: Date.now() })
                }
                presentation={concept === 4 ? "sheet" : "modal"}
                bottomIndicator={
                  concept === 2 ? "dock" : concept === 3 ? "dots" : "none"
                }
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {nested && (
              <ItemPageModal
                key={nested.key}
                items={nested.items}
                startIndex={nested.startIndex}
                onClose={closeNested}
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
