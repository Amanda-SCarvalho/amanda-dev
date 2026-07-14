"use client";

import { motion } from "framer-motion";
import { formation } from "@/constants/portfolio";

const Formation = () => {
  return (
    <section id="formation" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          Formação
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Jornada acadêmica e técnica
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
        {formation.map((item, index) => (
          <motion.div
            key={`${item.institution}-${item.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
          >
            {/* linha decorativa, igual ao ContactCard/Techs */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-70" />
            {/* blur decorativo de canto */}
            <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <p className="relative text-sm uppercase tracking-[0.2em] text-violet-300">
              {item.period}
            </p>
            <h3 className="relative mt-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
              {item.institution}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
              {item.degree}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Formation;