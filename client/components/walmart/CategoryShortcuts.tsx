const ROLLBACK_BADGE =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fcb4e5a31f0374fdeba9836168d434f94";
const BEATS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F8f62d61b205a46d3ad560688f10c7804";
const JLAB_EARBUDS_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2F544c4c237f3342fb86b80bfa50fee769";
const MONSTER_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fa38e092395b24bba841e739591f407b7";

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#0053E2" strokeWidth="1.6" />
      <path
        d="M12 7v5l3.5 2"
        stroke="#0053E2"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Shortcut = { label: string; image?: string; kind?: "badge" | "photo" };

const SHORTCUTS: Shortcut[] = [
  { label: "Shop Headphone Specials", image: ROLLBACK_BADGE, kind: "badge" },
  { label: "Get it today" },
  { label: "AirPods", image: JLAB_EARBUDS_IMG, kind: "photo" },
  { label: "Beats Headphones", image: BEATS_IMG, kind: "photo" },
  { label: "Headsets", image: MONSTER_IMG, kind: "photo" },
];

export default function CategoryShortcuts() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {SHORTCUTS.map((s) => (
        <div key={s.label} className="flex w-16 shrink-0 flex-col items-center gap-1.5">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-walmart-gray-bg">
            {s.kind === "photo" && s.image ? (
              <img src={s.image} alt="" className="h-full w-full object-cover" />
            ) : s.kind === "badge" && s.image ? (
              <img src={s.image} alt="" className="h-6 w-auto" />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <ClockIcon />
              </div>
            )}
          </div>
          <span className="text-center text-[11px] leading-3 text-ld-text-default">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
