"use client";

import { motion } from "framer-motion";

const ProjectBtn = ({
  id,
  color,
  active,
  switchActiveProject,
}: {
  id: string;
  color: string;
  active: boolean;
  switchActiveProject: (id: string) => void;
}) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${
        active ? "font-bold text-background" : "text-foreground"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        style={{ backgroundColor: `${active ? color : ""}` }}
        className="group relative flex size-11 items-center justify-center overflow-hidden rounded-full bg-neutral-800 transition-all hover:bg-neutral-700"
        onClick={() => switchActiveProject(id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Glow effect on active */}
        {active && (
          <motion.div
            className="absolute inset-0 rounded-full blur-lg"
            style={{ backgroundColor: color }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        <span className="relative z-10">{id}</span>
      </motion.button>

      {/* Animated line */}
      <motion.div
        style={{ backgroundColor: `${active ? color : ""}` }}
        className="h-[4.5rem] w-0.5 bg-neutral-700 transition-all"
        animate={{
          opacity: active ? 1 : 0.3,
          scaleY: active ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
export default ProjectBtn;
