const BEATS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8f62d61b205a46d3ad560688f10c7804";
const JLAB_EARBUDS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F544c4c237f3342fb86b80bfa50fee769";
const MONSTER_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fa38e092395b24bba841e739591f407b7";

type Shortcut = { label: string; image?: string; kind: "rollback" | "today" | "photo" };

const SHORTCUTS: Shortcut[] = [
  { label: "Shop Headphone Specials", kind: "rollback" },
  { label: "Get it today", kind: "today" },
  { label: "AirPods", image: JLAB_EARBUDS_IMG, kind: "photo" },
  { label: "Beats Headphones", image: BEATS_IMG, kind: "photo" },
  { label: "Headsets", image: MONSTER_IMG, kind: "photo" },
];

export default function CategoryShortcuts() {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {SHORTCUTS.map((s) => (
        <button
          type="button"
          key={s.label}
          className="flex w-[84px] shrink-0 flex-col items-center gap-1.5"
        >
          <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden bg-white">
            {s.kind === "photo" && s.image ? (
              <img src={s.image} alt="" className="h-full w-full object-contain" />
            ) : s.kind === "rollback" ? (
              <div className="flex h-[44px] w-[44px] flex-col items-center justify-center bg-[#E41404] text-[8px] font-extrabold leading-[9px] text-white">
                <span>Rollbacks</span>
                <span>&amp; more</span>
              </div>
            ) : (
              <div className="flex h-[44px] w-[44px] flex-col items-center justify-center bg-[#EAF1FF] text-[9px] font-extrabold leading-[10px] text-[#041C3C]">
                <span>Get it</span>
                <span>today</span>
              </div>
            )}
          </div>
          <span className="line-clamp-2 text-center text-[13px] leading-4 text-ld-text-default">
            {s.label}
          </span>
        </button>
      ))}
    </div>
  );
}
