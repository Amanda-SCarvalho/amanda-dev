import { slugs, techs } from "@/constants/skills";
import DotPattern from "../ui/dot-pattern";
import IconCloud from "../ui/icon-cloud";
import TechTag from "./TechTag";

const Techs = () => {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        {/* Text */}
        <div className="max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Tecnologias que uso no dia a dia
          </h2>

          <p className="text-lg text-muted-foreground">
            Escolho ferramentas modernas e consolidadas para construir
            aplicações escaláveis, performáticas e fáceis de manter — sempre
            focando em experiência, qualidade e evolução contínua.
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex max-w-3xl flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <TechTag
              key={tech.label}
              title={tech.label}
            />
          ))}
        </div>

        {/* Icon cloud */}
        <div className="relative mt-6">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      {/* Dot pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-30"
      />
    </section>
  );
};

export default Techs;
