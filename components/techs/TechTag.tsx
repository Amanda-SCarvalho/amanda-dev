"use client";

interface TechTagProps {
  name: string;
  status?: "mastered" | "learning";
  note?: string;
}

const statusConfig = {
  mastered: {
    label: "Domínio",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
  },
  learning: {
    label: "Aprendendo",
    dot: "bg-blue-400",
    text: "text-blue-300",
  },
} as const;

const TechTag = ({ name, status, note }: TechTagProps) => {
  const cfg = status ? statusConfig[status] : null;

  const header = (
    <div className="flex w-full items-center gap-2.5 px-3.5 py-2.5">
      <span
        className={`size-1.5 shrink-0 rounded-full ${
          cfg ? cfg.dot : "bg-white/25"
        }`}
      />
      <span className="flex-1 text-left text-sm font-medium text-white/90">
        {name}
      </span>
      {cfg && (
        <span
          className={`shrink-0 text-[10px] font-medium uppercase tracking-[0.08em] ${cfg.text}`}
        >
          {cfg.label}
        </span>
      )}
    </div>
  );

  if (!note) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.02]">
        {header}
      </div>
    );
  }

  return (
    <details className="group rounded-xl border border-white/10 bg-white/[0.02] transition-colors open:border-white/20 open:bg-white/[0.04]">
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        {header}
      </summary>
      <p className="px-3.5 pb-3 text-xs leading-relaxed text-white/50">
        {note}
      </p>
    </details>
  );
};

export default TechTag;