import DotPattern from "../ui/dot-pattern";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-24">
      <div className="z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">

          {/* Foto */}
          <div className="flex shrink-0 items-center justify-center">
            <div className="relative size-56 md:size-72">
              {/* Anéis decorativos */}
              <div className="absolute inset-0 scale-110 animate-pulse rounded-full border border-violet-400/30" />
              <div className="absolute inset-0 scale-125 rounded-full border border-violet-400/10" />

              {/* Imagem */}
              <div className="relative size-full overflow-hidden rounded-full ring-2 ring-violet-400/50 ring-offset-2 ring-offset-[hsl(0,0%,8%)]">
                <Image
                  src="/images/profile.jpg" // ← troque pelo caminho da sua foto
                  alt="Amanda Carvalho"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-violet-500/20 blur-2xl" />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="h2-bold">
              Sobre <span className="text-violet-400">mim</span>
            </h2>

            <p className="regular-paragraph mx-auto max-w-[600px] md:mx-0">
              Sou{" "}
              <span className="font-medium text-violet-400">Amanda Carvalho</span>
              , desenvolvedora frontend/fullstack focada em criar interfaces bem
              pensadas, performáticas e sustentáveis.
              <br />
              <br />
              Trabalho unindo design e engenharia para transformar ideias em
              produtos digitais modernos, escaláveis e centrados na experiência
              do usuário.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:mt-24">
          {skills.map((skill) => {
            const Icon = skill.asset.icon;

            return (
              <SkillCard
                key={skill.id}
                titleLabel={skill.title.label}
                content={skill.content}
              >
                <Icon className="size-5" />
              </SkillCard>
            );
          })}
        </div>
      </div>

      {/* Background pattern */}
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

export default About;