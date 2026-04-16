"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  titleLabel: string;
  content: string;
  children: ReactNode;
  delay?: number;
}

const SkillCard = ({
  titleLabel,
  content,
  children,
  delay = 0,
}: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="group relative w-full max-w-[260px]"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 opacity-0 blur-xl"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div
        className="relative w-full rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300"
        whileHover={{
          borderColor: "rgba(167, 139, 250, 0.5)",
          backgroundColor: "rgba(23, 23, 23, 0.9)",
        }}
      >
        {/* Glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-violet-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

        {/* Icon container with animation */}
        <motion.div
          className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/10 text-violet-400 group-hover:from-violet-500/40 group-hover:to-purple-500/20"
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {children}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mb-2 text-base font-semibold text-foreground group-hover:text-violet-400 transition-colors"
          whileHover={{ x: 5 }}
        >
          {titleLabel}
        </motion.h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
          {content}
        </p>

        {/* Border glow animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/20"
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(167, 139, 250, 0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["200% 200%", "-200% -200%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
