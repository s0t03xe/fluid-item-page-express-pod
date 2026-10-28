import { AnimatePresence, motion } from "framer-motion";

export default function BottomSheet({
  open,
  onClose,
  children,
  heightClass = "h-[92%]",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  heightClass?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-50 flex items-end justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={`flex w-full flex-col overflow-hidden rounded-t-2xl bg-white ${heightClass}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
