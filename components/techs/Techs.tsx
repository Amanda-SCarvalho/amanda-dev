"use client";

import { slugs, techs } from "@/constants/skills";
import DotPattern from "../ui/dot-pattern";
import IconCloud from "../ui/icon-cloud";
import TechTag from "./TechTag";
import { motion } from "framer-motion";

const Techs = () => {
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        {/* Text */}
        <motion.div
          className="max-w-3xl space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Tecnologias que uso no dia a dia
          </h2>

          <p className="text-lg text-muted-foreground">
            Escolho ferramentas modernas e consolidadas para construir
            aplicações escaláveis, performáticas e fáceis de manter — sempre
            focando em experiência, qualidade e evolução contínua.
          </p>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          className="flex max-w-3xl flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech.label}
              custom={i}
              variants={tagVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TechTag title={tech.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* Icon cloud */}
        <motion.div
          className="relative mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>
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
