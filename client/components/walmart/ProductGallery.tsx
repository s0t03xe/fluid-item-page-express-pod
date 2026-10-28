import { useState, useRef, useEffect } from "react";
import VideoSlide from "./VideoSlide";

// Slide image URLs from Figma
const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F79eeffa60ce145bea5091a2d24a456d9";
const INFOGRAPHIC_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F79eeffa60ce145bea5091a2d24a456d9";
const PACKAGING_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F7a5e8eed186b4dd3897d7f7b767abddb";
const PHOTO1_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fb847e4d7d6ee4a7f9eb2d40c712672ad";
const PHOTO2_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F3d86b71b2fce4443a71458debb9332b2";
const PHOTO3_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F9f4089f9288d4e5f9ea42d0f95c1ce9d";
const PHOTO4_IMG = "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fdb706909dad84fbb9b7259a84df13413";

// Video sources + posters for the Visual Digest carousel.
// Fill SRC values with the URLs the user provides; posters show until the video loads.
const VIDEO_1_SRC = "https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Ff07cd24b29d5426e9b88a0453d173ffc%2Fcompressed?apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf&token=f07cd24b29d5426e9b88a0453d173ffc&alt=media&optimized=true";
const VIDEO_1_POSTER = HERO_IMG;
const VIDEO_2_SRC = "https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F4eaed7321c8b465ba02d6086db7470a5%2Fcompressed?apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf&token=4eaed7321c8b465ba02d6086db7470a5&alt=media&optimized=true";
const VIDEO_2_POSTER = INFOGRAPHIC_IMG;
const VIDEO_3_SRC = "https://cdn.builder.io/o/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F053255fd3cf44f76bc57e5986299db0c?alt=media&token=7346ab32-bf4d-41ec-9adc-1d10a65cc09e&apiKey=02297b1ff48d4a2f8e4d9ed415c47ecf";
const VIDEO_3_POSTER = PHOTO4_IMG;

// Re-use Figma shop-similar / share SVG
function ShopSimilarIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.84668 4.83029C1.96298 4.74973 2.12394 4.76091 2.22754 4.86447L2.26172 4.90549C2.34229 5.0218 2.33113 5.18275 2.22754 5.28635L1.0498 6.46408H6.38672L6.48047 6.46115C7.1948 6.41285 7.75879 5.81761 7.75879 5.09104C7.759 4.92642 7.89296 4.79323 8.05762 4.79318C8.22231 4.79318 8.35624 4.92639 8.35645 5.09104C8.35645 6.17876 7.47441 7.06063 6.38672 7.06076H1.04688L2.22754 8.24045L2.26172 8.28244C2.34229 8.39875 2.33113 8.55971 2.22754 8.6633C2.11106 8.77946 1.92213 8.77949 1.80566 8.6633L0.117188 6.97482L0.0830078 6.93283C0.00272123 6.81666 0.0139509 6.65647 0.117188 6.55295L1.80566 4.86447L1.84668 4.83029ZM6.12891 0.0871288C6.24545 -0.028922 6.43438 -0.0291638 6.55078 0.0871288L8.23828 1.77561L8.27344 1.8176C8.35369 1.93387 8.34175 2.09401 8.23828 2.19748L6.55078 3.88596L6.50879 3.92014C6.39256 4.00061 6.23249 3.98935 6.12891 3.88596L6.09375 3.84494C6.01318 3.72863 6.02531 3.56768 6.12891 3.46408L7.30566 2.28635H1.96973L1.87598 2.28928C1.16165 2.33758 0.59668 2.93282 0.59668 3.65939C0.596471 3.8239 0.463333 3.95703 0.298828 3.95725C0.134138 3.95725 0.000208624 3.82404 0 3.65939C0 2.57159 0.881922 1.68967 1.96973 1.68967H7.30859L6.12891 0.50998L6.09375 0.467988C6.01341 0.351703 6.0254 0.190633 6.12891 0.0871288Z" fill="#2E2F32"/>
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M7.40039 6.99976H8.60039V11.4998H7.40039V6.99976Z" fill="currentColor" />
      <path d="M7.99961 6.29976C8.49667 6.29976 8.89961 5.89681 8.89961 5.39976C8.89961 4.9027 8.49667 4.49976 7.99961 4.49976C7.50255 4.49976 7.09961 4.9027 7.09961 5.39976C7.09961 5.89681 7.50255 6.29976 7.99961 6.29976Z" fill="currentColor" />
      <path d="M8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998ZM8 13.9998C4.68629 13.9998 2 11.3135 2 7.99976C2 4.68605 4.68629 1.99976 8 1.99976C11.3137 1.99976 14 4.68605 14 7.99976C14 11.3135 11.3137 13.9998 8 13.9998Z" fill="currentColor" />
    </svg>
  );
}

// Pill badge shared by slides
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 rounded-[625px] border border-[#E3E4E5] bg-white px-2 py-1">
      <ShopSimilarIcon />
      <span className="text-[12px] font-bold leading-4 text-[#2E2F32]">{children}</span>
    </div>
  );
}

// Pagination play icon — no container, SVG is 24×24 with internal path spacing
function VideoPageIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0825 12.3688L9.37853 15.9338C9.17481 16.0611 8.90645 15.9992 8.77913 15.7955C8.73592 15.7264 8.71301 15.6465 8.71301 15.565V8.43498C8.71301 8.19475 8.90776 8 9.14799 8C9.22952 8 9.3094 8.02291 9.37853 8.06612L15.0825 11.6311C15.2862 11.7584 15.3482 12.0268 15.2208 12.2305C15.1858 12.2865 15.1385 12.3338 15.0825 12.3688Z"
        fill={active ? "#74767C" : "white"}
        stroke="#515357"
      />
    </svg>
  );
}

const PLACEHOLDER_DOT_COUNT = 4;
const SWIPE_THRESHOLD = 32;
const EDGE_ZONE = 28;

type Slide =
  | { kind: "photo"; img: string; badge?: string; topBadge?: string }
  | { kind: "video"; src: string; poster: string; variant: "product" | "social"; handle?: string; fill?: boolean }
  | { kind: "infographic"; img: string };

const SLIDES: Slide[] = [
  { kind: "photo", img: HERO_IMG, badge: "Shop similar" },
  { kind: "video", src: VIDEO_1_SRC, poster: VIDEO_1_POSTER, variant: "product", fill: true },
  { kind: "video", src: VIDEO_2_SRC, poster: VIDEO_2_POSTER, variant: "product" },
  { kind: "infographic", img: INFOGRAPHIC_IMG },
  { kind: "photo", img: PACKAGING_IMG, badge: "Shop similar" },
  { kind: "photo", img: PHOTO1_IMG, badge: "Shop similar" },
  { kind: "photo", img: PHOTO2_IMG, badge: "Shop similar" },
  { kind: "photo", img: PHOTO3_IMG, badge: "Shop similar" },
  { kind: "photo", img: PHOTO4_IMG, badge: "Shop similar" },
  { kind: "video", src: VIDEO_3_SRC, poster: VIDEO_3_POSTER, variant: "social", handle: "@smartworldaccessories" },
];

interface ProductGalleryProps {
  heroImage?: string;
  images?: string[];
  videoSrc?: string;
  videoPoster?: string;
  emphasizeVideo?: boolean;
  onSwipePrevItem?: () => void;
  onSwipeNextItem?: () => void;
}

export default function ProductGallery(props: ProductGalleryProps = {}) {
  const { heroImage, images, videoSrc, videoPoster, emphasizeVideo, onSwipePrevItem, onSwipeNextItem } = props;
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchStartAtEdge = useRef<"start" | "end" | null>(null);
  const dragState = useRef<{ startX: number; startScrollLeft: number; edge: "start" | "end" | null } | null>(null);

  const slides: Slide[] = videoSrc && videoPoster
    ? [
        { kind: "video", src: videoSrc, poster: videoPoster, variant: "product", fill: true },
        { kind: "photo", img: heroImage ?? videoPoster, badge: "Shop similar" },
      ]
    : images && images.length > 0
      ? images.map((img): Slide => ({ kind: "photo", img }))
      : heroImage
      ? [{ kind: "photo", img: heroImage, badge: "Shop similar" }]
      : SLIDES;
  const totalSlides = slides.length;

  // Sync active dot on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const second = el.children[1] as HTMLElement | undefined;
      const stride =
        first && second
          ? second.offsetLeft - first.offsetLeft
          : el.scrollWidth / totalSlides;
      const idx = Math.round(el.scrollLeft / stride);
      setActive(Math.max(0, Math.min(idx, totalSlides - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [totalSlides]);

  const goTo = (i: number) => {
    setActive(i);
    const el = scrollRef.current;
    if (!el) return;
    const target = el.children[i] as HTMLElement | undefined;
    if (target) {
      el.scrollTo({
        left: target.offsetLeft - (emphasizeVideo ? 0 : 16),
        behavior: "smooth",
      });
    }
  };

  const edgeAt = (clientX: number, rect: DOMRect): "start" | "end" | null => {
    if (clientX - rect.left <= EDGE_ZONE) return "start";
    if (rect.right - clientX <= EDGE_ZONE) return "end";
    return null;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    const el = scrollRef.current;
    touchStartAtEdge.current = el ? edgeAt(touch.clientX, el.getBoundingClientRect()) : null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const edge = touchStartAtEdge.current;
    touchStartAtEdge.current = null;
    if (!edge) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (edge === "start" && dx > SWIPE_THRESHOLD) onSwipePrevItem?.();
    else if (edge === "end" && dx < -SWIPE_THRESHOLD) onSwipeNextItem?.();
  };

  const snapToNearest = () => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const second = el.children[1] as HTMLElement | undefined;
    const stride =
      first && second ? second.offsetLeft - first.offsetLeft : el.scrollWidth / totalSlides;
    const idx = Math.max(0, Math.min(Math.round(el.scrollLeft / stride), totalSlides - 1));
    goTo(idx);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    dragState.current = {
      startX: e.clientX,
      startScrollLeft: el.scrollLeft,
      edge: edgeAt(e.clientX, el.getBoundingClientRect()),
    };
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    const el = scrollRef.current;
    if (!drag || !el) return;
    el.scrollLeft = drag.startScrollLeft - (e.clientX - drag.startX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag) return;
    dragState.current = null;
    const el = scrollRef.current;
    if (el && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    const dx = e.clientX - drag.startX;
    if (drag.edge === "start" && dx > SWIPE_THRESHOLD) {
      onSwipePrevItem?.();
      return;
    }
    if (drag.edge === "end" && dx < -SWIPE_THRESHOLD) {
      onSwipeNextItem?.();
      return;
    }
    snapToNearest();
  };

  return (
    <div className={`relative ${emphasizeVideo ? "" : "pt-2"}`}>
      {/* ── Carousel ── */}
      <div
        ref={scrollRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDragStart={(e) => e.preventDefault()}
        className={`flex snap-x snap-mandatory overflow-x-auto ${emphasizeVideo ? "gap-0 px-0" : "gap-4 px-4"} cursor-grab select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`relative w-full flex-shrink-0 snap-center overflow-hidden ${emphasizeVideo && slide.kind === "video" ? "h-[min(58vh,500px)]" : "aspect-square rounded-2xl"}`}
          >
            {slide.kind === "photo" && (
              <>
                <img
                  src={slide.img}
                  alt=""
                  className={`h-full w-full ${images && images.length > 0 ? "object-contain" : "object-cover"}`}
                />
              </>
            )}

            {slide.kind === "infographic" && (
              <>
                <img src={slide.img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-y-0 right-0 flex w-1/2 flex-col justify-between p-4 bg-[rgba(46,47,50,0.80)]">
                  <div />
                  <div className="flex flex-col gap-3">
                    <p className="text-[16px] font-bold leading-6 text-white">Key item features</p>
                    <div className="flex flex-col gap-3 text-[12px] leading-4 text-white">
                      <p>Signature JBL Pure Bass sound experience</p>
                      <p>Long wireless playtime — up to 76 hrs</p>
                      <p>Bluetooth 5.3 for stable connections</p>
                      <p>Customize EQ with JBL Headphones app</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-white">
                    <span className="text-[12px] leading-4">Generated by AI</span>
                    <InfoCircleIcon />
                  </div>
                </div>
              </>
            )}

            {slide.kind === "video" && (
              <VideoSlide
                src={slide.src}
                poster={slide.poster}
                variant={slide.variant}
                handle={slide.handle}
                fill={slide.fill}
                isActive={i === active}
                showMoreVideos={!emphasizeVideo}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Pagination Dots ── */}
      {totalSlides > 1 ? (
        <div className="flex items-center justify-center py-2">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const isVideo = slides[i]?.kind === "video";
            const isActive = i === active;
            return (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`flex items-center justify-center ${isVideo ? "" : isActive ? "p-[7px]" : "p-[8px]"}`}
              >
                {isVideo ? (
                  <VideoPageIcon active={isActive} />
                ) : isActive ? (
                  <div className="h-[10px] w-[10px] rounded-full bg-[#74767C]" />
                ) : (
                  <div className="h-[8px] w-[8px] rounded-full border border-[#74767C] bg-transparent" />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        // Static placeholder dots — this item only has one photo, so the
        // dots are decorative only (no additional slides to page through).
        <div className="flex items-center justify-center gap-1.5 py-2" aria-hidden="true">
          {Array.from({ length: PLACEHOLDER_DOT_COUNT }).map((_, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? "h-[10px] w-[10px] rounded-full bg-[#74767C]"
                  : "h-[8px] w-[8px] rounded-full border border-[#74767C] bg-transparent"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
