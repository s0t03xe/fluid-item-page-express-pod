import { useCallback, useEffect, useState, type ComponentProps } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useDragControls } from "framer-motion";
import { ChevronDown, Heart, Share } from "@/components/walmart/icons";
import ItemPage from "@/components/walmart/ItemPage";
import UpNextDock from "@/components/walmart/UpNextDock";
import PeekDots from "@/components/walmart/PeekDots";
import type { WalmartItem } from "@/lib/walmart-items";

function OverlayButton({
  children,
  active,
  ...props
}: ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/85 shadow-md backdrop-blur active:scale-95 ${
        active ? "text-walmart-rollback" : "text-ld-text-default"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ItemPageModal({
  items,
  startIndex,
  onClose,
  bottomIndicator = "dock",
  presentation = "modal",
}: {
  items: WalmartItem[];
  startIndex: number;
  onClose: () => void;
  bottomIndicator?: "dock" | "dots" | "none";
  presentation?: "modal" | "sheet";
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex,
    loop: false,
    align: "center",
    containScroll: false,
  });
  const [selected, setSelected] = useState(startIndex);
  const [atTopMap, setAtTopMap] = useState<Record<number, boolean>>({});
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const [sheetOpenMap, setSheetOpenMap] = useState<Record<number, boolean>>({});
  const sheetOpen = sheetOpenMap[selected] === true;
  const isSheet = presentation === "sheet";
  const dragControls = useDragControls();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ watchDrag: !sheetOpen });
  }, [emblaApi, sheetOpen]);

  const jumpToItem = useCallback(
    (id: string) => {
      const index = items.findIndex((i) => i.id === id);
      if (index >= 0) emblaApi?.scrollTo(index);
    },
    [emblaApi, items],
  );

  // Once the visible item page starts scrolling (or a bottom drawer is
  // open), drop the floating-card chrome and take over the full screen.
  const expanded = atTopMap[selected] === false || sheetOpen;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`absolute inset-0 z-50 flex bg-black/70 ${
        isSheet ? "items-end justify-center" : "items-center justify-center"
      }`}
    >
      <motion.div
        drag={isSheet && !expanded ? "y" : false}
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDragEnd={(_, info) => {
          if (isSheet && (info.offset.y > 120 || info.velocity.y > 600)) {
            onClose();
          }
        }}
        initial={isSheet ? { y: "100%" } : { y: 32, opacity: 0 }}
        animate={isSheet ? { y: 0 } : { y: 0, opacity: 1 }}
        exit={isSheet ? { y: "100%" } : { y: 32, opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`flex w-full max-w-[440px] flex-col items-center transition-[gap] duration-300 ${
          expanded
            ? "h-full gap-0"
            : isSheet
              ? "h-[88%] gap-0"
              : "h-[92%] gap-3"
        }`}
      >
        {isSheet && !expanded && (
          <div
            className="flex w-full shrink-0 cursor-grab justify-center py-2 active:cursor-grabbing"
            onPointerDown={(e) => dragControls.start(e)}
          >
            <div className="h-1.5 w-10 rounded-full bg-white/50" />
          </div>
        )}
        {/* Peek carousel: the active item card fills most of the width,
            the next item's edge sneaks in on the right as a swipe affordance. */}
        <div
          className="h-full w-full overflow-hidden"
          ref={emblaRef}
        >
          <div
            className={`flex h-full transition-[gap] duration-300 ${expanded ? "gap-0" : "gap-2"}`}
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                className={`relative h-full min-w-0 shrink-0 grow-0 overflow-hidden bg-white transition-all duration-300 ease-out ${
                  expanded
                    ? "basis-full rounded-none shadow-none"
                    : isSheet
                      ? "basis-[calc(100%-48px)] rounded-t-[20px] shadow-2xl"
                      : "basis-[calc(100%-48px)] rounded-[20px] shadow-2xl"
                }`}
              >
                <div className="pointer-events-none absolute inset-x-3 top-3 z-50 flex items-start justify-between">
                  <div className="pointer-events-auto">
                    <OverlayButton aria-label="Close" onClick={onClose}>
                      <ChevronDown size={20} />
                    </OverlayButton>
                  </div>
                </div>

                <ItemPage
                  item={item}
                  active={selected === i}
                  onAtTopChange={(atTop) =>
                    setAtTopMap((m) =>
                      m[i] === atTop ? m : { ...m, [i]: atTop },
                    )
                  }
                  onSwipePrevItem={() => {
                    if (!sheetOpenMap[i]) emblaApi?.scrollPrev();
                  }}
                  onSwipeNextItem={() => {
                    if (!sheetOpenMap[i]) emblaApi?.scrollNext();
                  }}
                  onSheetOpenChange={(open) =>
                    setSheetOpenMap((m) =>
                      m[i] === open ? m : { ...m, [i]: open },
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom indicator: separate strip below the card, hidden once expanded */}
        {!expanded && bottomIndicator === "dock" && (
          <UpNextDock
            items={items}
            activeId={items[selected]?.id}
            onSelect={jumpToItem}
          />
        )}
        {!expanded && bottomIndicator === "dots" && (
          <PeekDots
            count={items.length}
            selected={selected}
            onSelect={(i) => emblaApi?.scrollTo(i)}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
