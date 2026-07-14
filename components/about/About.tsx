"use client";

import DotPattern from "../ui/dot-pattern";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutParagraphs, profileHighlights } from "@/constants/portfolio";

const metaTags = [
  "Dev Frontend / Fullstack",
  "UX/UI Design",
  "São Paulo, Brasil",
];

const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden px-6 py-28">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern pointer-events-none absolute inset-0 -z-10 opacity-10"
      />

      {/* ambient glow — mesma linguagem do Hero, só mais discreta */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-[340px] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 size-[260px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="shrink-0 text-[10px] uppercase tracking-[0.28em] text-white/35">
            02 — Sobre
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* narrativa */}
          <div>
            <motion.h2
              className="text-4xl font-bold leading-[1.05] -tracking-wide text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Conectando desenvolvimento web com{" "}
              <span className="text-violet-400">
                design centrado no usuário
              </span>
              .
            </motion.h2>

            <motion.div
              className="mt-8 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-2xl text-lg leading-relaxed text-white/75"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* highlights como lista, não cards */}
            <motion.div
              className="mt-12 divide-y divide-white/10 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {profileHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className="w-full shrink-0 font-semibold text-white sm:w-56">
                    {highlight.title}
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* foto + meta */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/profile.jpeg"
                  alt="Amanda Santos de Carvalho"
                  fill
                  className="object-cover brightness-90 transition-all duration-700 group-hover:brightness-100 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            <p className="mt-5 text-lg font-semibold text-white">
              Amanda Carvalho
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {metaTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/45 backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
