"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

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
      onMouseMove={handleMouseMove}
      role="none"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Fundo */}
      <div className="absolute inset-0 -z-30 bg-[#050507]" />

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40 -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Overlay cinematico */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_30%)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      {/* Glow mouse */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute -z-10 size-[380px] rounded-full bg-violet-500/10 blur-[120px]"
      />

      {/* Glow lateral */}
      <motion.div
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[260px] rounded-full bg-purple-500/10 blur-[120px]"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <div className="max-w-3xl">


          {/* Title */}
          <motion.h1
            className="text-5xl font-bold leading-[0.95] -tracking-wider text-white md:text-7xl"
            style={{
              fontFamily: "'Syne', sans-serif",
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div custom={0} variants={titleVariants}>
              Criando produtos
            </motion.div>

            <motion.div
              custom={1}
              variants={titleVariants}
              className="text-violet-400"
            >
              modernos,
            </motion.div>

            <motion.div custom={2} variants={titleVariants}>
              acessíveis e
            </motion.div>

            <motion.div custom={3} variants={titleVariants}>
              escaláveis
            </motion.div>
          </motion.h1>

          {/* Subtexto */}
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
          >
            Desenvolvedora frontend/fullstack apaixonada por criar interfaces
            modernas, intuitivas e performáticas. Atualmente aprofundando
            conhecimentos em backend, cloud computing, infraestrutura e
            arquitetura de sistemas.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="group flex items-center gap-3 rounded-xl border border-violet-500/20 bg-violet-500/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15"
              >
                Ver projetos
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                Falar comigo
              </Link>
            </motion.div>
          </motion.div>

          {/* Skills badges */}
          <motion.div
            className="mt-12 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "UI/UX",
              "Node.js",
              "Cloud",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/45 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
            Scroll
          </span>

          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-violet-400"
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
