"use client";

import DotPattern from "../ui/dot-pattern";
import TechTag from "./TechTag";
import { motion } from "framer-motion";
import { skillCategories, careerGoals } from "@/constants/portfolio";

const Techs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Habilidades técnicas
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Tecnologias organizadas por área.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Toque em uma tecnologia para ver o contexto. Verde é domínio,
            azul é o que estou aprendendo agora.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
              initial="hidden"
              whileInView="visible"
              custom={index}
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* linha decorativa, igual ao ContactCard */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-70" />
              {/* blur decorativo de canto */}
              <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              <h3 className="relative text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="relative mt-5 flex flex-col gap-2">
                {category.items.map((item) => (
                  <TechTag
                    key={item.name}
                    name={item.name}
                    status={item.status}
                    note={item.note}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* no radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            No radar
          </p>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500">
            Próximos passos da minha evolução como desenvolvedora.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careerGoals.map((goal) => (
              <details
                key={goal.name}
                className="group rounded-2xl border border-violet-400/15 bg-violet-500/[0.03] p-5 transition-colors open:border-violet-400/30 open:bg-violet-500/[0.06]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
                  <span className="text-violet-300/70">◇</span>
                  <span className="text-sm font-medium text-white/85">
                    {goal.name}
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-violet-100/50">
                  {goal.description}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>

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