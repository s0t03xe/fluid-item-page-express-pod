import { forwardRef } from "react";

const SPARKY_IMG =
  "https://cdn.builder.io/api/v1/file/assets%2F02297b1ff48d4a2f8e4d9ed415c47ecf%2Fa7b40f2aa52b4d2ba5dd1649daa60e15";

const PROMPTS = [
  "Which headphones offer clear call quality?",
  "Which headphones are best for travel?",
  "What's the difference between on-ear and over-ear headphones?",
];

const SparkyPLPCard = forwardRef<HTMLDivElement>(function SparkyPLPCard(_, ref) {
  return (
    <section ref={ref} className="px-4 py-4">
      <div className="rounded-2xl border border-walmart-gray-line bg-gradient-to-b from-[#FFF8DC] to-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src={SPARKY_IMG} alt="" className="h-12 w-12" />
          <h2 className="text-[18px] font-bold leading-6 text-ld-text-default">
            Shop faster with Sparky
          </h2>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              className="rounded-xl bg-[#FCF4CC] px-3 py-2 text-left text-[14px] leading-5 text-ld-text-default"
            >
              {p}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 flex h-10 w-full items-center justify-center rounded-full border border-[#2E2F32] bg-white text-[15px] font-bold text-ld-text-default"
        >
          Ask Sparky
        </button>
      </div>
    </section>
  );
});

export default SparkyPLPCard;
