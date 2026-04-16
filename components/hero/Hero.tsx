"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  // posição do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // suavização (efeito fluido)
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
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
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Animated stars background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {new Array(20).fill(null).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute size-1 rounded-full bg-white/20"
            animate={{
              y: [-20, 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Primary glow que segue o mouse */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute -z-10 size-[400px] rounded-full bg-violet-500/20 blur-3xl"
      />

      {/* Secondary glow */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/2 -z-10 size-[300px] rounded-full bg-purple-500/15 blur-3xl"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          {/* Animated title */}
          <motion.h1
            className="text-4xl font-bold leading-tight text-foreground md:text-6xl"
            initial="hidden"
            animate="visible"
          >
            <motion.div custom={0} variants={titleVariants}>
              Desenvolvendo interfaces
            </motion.div>
            <motion.div
              custom={1}
              variants={titleVariants}
              className="text-violet-400"
            >
              que fazem sentido
            </motion.div>
            <motion.div custom={2} variants={titleVariants}>
              para pessoas e negócios
            </motion.div>
          </motion.h1>

          {/* Animated paragraph */}
          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Sou <strong className="text-violet-400">Amanda Carvalho</strong>,
            desenvolvedora frontend/fullstack. Crio aplicações modernas,
            performáticas e bem estruturadas, focadas em experiência e
            resultado.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            className="mt-10 flex w-fit flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/50"
              >
                Ver projetos
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-white/5"
              >
                Falar comigo
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated badges */}
          <motion.div
            className="mt-12 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {[
              "UI moderna",
              "Código limpo",
              "Performance",
              "UX & acessibilidade",
            ].map((badge, i) => (
              <motion.span
                key={badge}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                className="cursor-pointer rounded-full border border-violet-500/30 bg-violet-500/5 px-4 py-2 text-sm font-medium uppercase tracking-wider text-violet-300 backdrop-blur-sm transition-all hover:border-violet-500/60 hover:bg-violet-500/10"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="flex size-6 items-center justify-center rounded-full border border-violet-500/30">
            <motion.div
              className="size-1 rounded-full bg-violet-400"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
