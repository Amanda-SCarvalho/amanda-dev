"use client";

import { motion } from "framer-motion";
import { certifications } from "@/constants/portfolio";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          Certificações
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Aprendizados reconhecidos
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-4xl">
        <div className="relative border-l border-white/10 pl-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={`${certificate.title}-${certificate.issuer}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-10 pl-8"
            >
              <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-violet-400 text-xs text-black">
                •
              </span>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                {/* linha decorativa, igual ao ContactCard/Techs/Formation */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-70" />
                {/* blur decorativo de canto */}
                <div className="absolute -bottom-16 -right-16 size-32 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                <h3 className="relative text-lg font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                  {certificate.title}
                </h3>
                <p className="relative mt-3 text-sm text-zinc-400">
                  {certificate.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;