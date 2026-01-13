import { ReactNode } from "react";

interface SkillCardProps {
  titleLabel: string;
  content: string;
  children: ReactNode;
}

const SkillCard = ({ titleLabel, content, children }: SkillCardProps) => {
  return (
    <div
      className="
        group relative w-full max-w-[260px]
        rounded-2xl border border-white/10
        bg-neutral-900/60 p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/40
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-violet-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-white/5 text-violet-400">
        {children}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold text-foreground">
        {titleLabel}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {content}
      </p>
    </div>
  );
};

export default SkillCard;
