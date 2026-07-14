"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { resumeLink } from "@/constants/portfolio";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 24,
  });

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-30 bg-[#050507]" />
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40 -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute -z-10 size-[380px] rounded-full bg-violet-500/10 blur-[120px]"
      />

      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[260px] rounded-full bg-purple-500/10 blur-[120px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl font-bold leading-[0.95] -tracking-wider text-white md:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
            initial="hidden"
            animate="visible"
          >
            <motion.div custom={0} variants={titleVariants}>
              Olá, eu sou
            </motion.div>
            <motion.div
              custom={1}
              variants={titleVariants}
              className="text-violet-400"
            >
              Amanda Santos de Carvalho.
            </motion.div>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Sou desenvolvedora frontend/fullstack que cria produtos digitais de
            alto impacto, com foco em interfaces modernas, usabilidade e
            experiência do usuário.
          </motion.p>

          <motion.div
            className="mt-11 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15"
            >
              Ver projetos web
            </Link>
            <Link
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              Ver Currículo
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <span className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2">
              <Link
                href="https://linkedin.com/in/amanda-scarvalho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Amanda Carvalho"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                <Linkedin className="size-4" />
              </Link>
              <Link
                href="https://github.com/Amanda-SCarvalho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Amanda Carvalho"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                <Github className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-violet-400"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
