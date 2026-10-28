export type NavConcept = 1 | 2 | 3 | 4;

const CONCEPTS: { id: NavConcept; label: string; description: string }[] = [
  {
    id: 2,
    label: "Concept 1",
    description: "Peek carousel + up-next thumbnails",
  },
  {
    id: 1,
    label: "Concept 2",
    description: "Peek carousel only, no indicator",
  },
  {
    id: 3,
    label: "Concept 3",
    description: "Peek carousel + dot indicator",
  },
  {
    id: 4,
    label: "Concept 4",
    description: "Opens as a bottom sheet, drag down to close",
  },
];

export default function ConceptSwitcher({
  value,
  onChange,
}: {
  value: NavConcept;
  onChange: (concept: NavConcept) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#111318] px-4 py-4">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-white/50">
        Item navigation concept
      </span>
      <div className="flex flex-wrap justify-center gap-1 rounded-full bg-white/10 p-1">
        {CONCEPTS.map((concept) => (
          <button
            key={concept.id}
            type="button"
            onClick={() => onChange(concept.id)}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              value === concept.id
                ? "bg-white text-[#111318]"
                : "text-white/70 active:bg-white/10"
            }`}
          >
            {concept.label}
          </button>
        ))}
      </div>
      <span className="text-[12px] text-white/60">
        {CONCEPTS.find((c) => c.id === value)?.description}
      </span>
    </div>
  );
}
