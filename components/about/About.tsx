import DotPattern from "../ui/dot-pattern";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";

const About = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-24">
      <div className="z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="space-y-8 md:text-center">
          <h2 className="h2-bold">
            Sobre <span className="text-violet-400">mim</span>
          </h2>

          <p className="regular-paragraph mx-auto max-w-[835px]">
            Sou{" "}
            <span className="font-medium text-violet-400">Amanda Carvalho</span>
            , desenvolvedora frontend/fullstack focada em criar interfaces bem
            pensadas, performáticas e sustentáveis.
            <br />
            <br />
            Trabalho unindo design e engenharia para transformar ideias em
            produtos digitais modernos, escaláveis e centrados na experiência do
            usuário.
          </p>
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
