"use client";

import { motion } from "framer-motion";
import { softSkills } from "@/constants/portfolio";

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          Soft Skills
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Competências comportamentais
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Sou uma profissional colaborativa e dedicada, com foco em crescimento
          contínuo, comunicação transparente e entrega de resultados em equipe.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-6 text-center shadow-sm shadow-violet-500/5 transition-all hover:border-violet-400/40 hover:bg-neutral-900/95"
          >
            <p className="text-lg font-semibold text-white">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
