"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  title: string;
}

const TechTag = ({ title }: TechTagProps) => {
  return (
    <motion.span
      className="group relative rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted-foreground cursor-pointer overflow-hidden transition-all hover:border-violet-500/40 hover:text-violet-400 backdrop-blur-sm"
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(167, 139, 250, 0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(45deg, transparent 30%, rgba(167, 139, 250, 0.15) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["200% 200%", "-200% -200%"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <span className="relative">{title}</span>
    </motion.span>
  );
};

export default TechTag;
