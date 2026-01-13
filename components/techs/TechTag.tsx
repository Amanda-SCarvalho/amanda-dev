interface TechTagProps {
  title: string;
}

const TechTag = ({ title }: TechTagProps) => {
  return (
    <span
      className="
        rounded-md border border-white/10
        bg-white/5 px-3 py-1 text-sm
        text-muted-foreground
        transition hover:border-violet-500/40 hover:text-violet-400
      "
    >
      {title}
    </span>
  );
};

export default TechTag;
