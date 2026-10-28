import { AnimatePresence, motion } from "framer-motion";
import { Close } from "@/components/walmart/icons";

const OPTIONS = ["Over Ear", "On Ear", "Earbuds"];

export default function SparkyPLPSheet({
  open,
  expanded,
  onToggle,
  onDismiss,
}: {
  open: boolean;
  expanded: boolean;
  onToggle: () => void;
  onDismiss: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="rounded-2xl bg-[#FFF8DC] px-3 pb-3 pt-2 shadow-[0_2px_14px_rgba(0,0,0,0.2)]"
        >
          <button
            type="button"
            aria-label={expanded ? "Collapse Sparky" : "Expand Sparky"}
            onClick={onToggle}
            className="mx-auto mb-2 block h-1.5 w-10 rounded-full bg-[#BABBBE]"
          />
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
                fill="#041C3C"
              />
            </svg>
            <p className="flex-1 text-[15px] font-bold leading-5 text-ld-text-default">
              What headphone style do you want?
            </p>
            {!expanded && (
              <button type="button" aria-label="Dismiss" onClick={onDismiss} className="p-1">
                <Close size={18} />
              </button>
            )}
          </div>
          {expanded && (
            <div className="mt-2 flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {OPTIONS.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={onDismiss}
                  className="h-9 shrink-0 rounded-full border border-[#2E2F32] bg-white px-4 text-[15px] text-ld-text-default"
                >
                  {o}
                </button>
              ))}
              <button
                type="button"
                onClick={onDismiss}
                className="h-9 shrink-0 rounded-full bg-[#FCCC4C] px-4 text-[15px] font-bold text-ld-text-default"
              >
                Tell me more
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
