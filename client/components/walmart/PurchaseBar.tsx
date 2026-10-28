export default function PurchaseBar({
  onAddToCart,
}: {
  onAddToCart?: () => void;
} = {}) {
  return (
    <div className="relative z-10 bg-white px-5 pb-3 pt-2">
      <div className="flex items-center gap-6 rounded-[28px] border border-[#E3E4E5] bg-white px-8 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
        <button
          type="button"
          className="flex h-10 flex-1 items-center justify-center rounded-full border-2 border-[#2E2F32] bg-white text-[16px] font-bold text-ld-text-default active:bg-walmart-gray-bg"
        >
          Buy now
        </button>
        <button
          type="button"
          onClick={onAddToCart}
          className="flex h-10 flex-1 items-center justify-center rounded-full bg-walmart-blue text-[16px] font-bold text-white active:bg-walmart-blue-dark"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
