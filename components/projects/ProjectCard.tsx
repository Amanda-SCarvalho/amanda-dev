"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[400px] w-[350px] cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 p-0.5"
        animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="size-full rounded-lg bg-neutral-900" />
      </motion.div>

      {/* Card container */}
      <div className="relative z-10 size-full overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
        {/* Image */}
        <Image
          src={src}
          alt={title}
          width={350}
          height={400}
          className="size-full object-cover object-center transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />

        {/* Overlay gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"
          animate={isHovered ? { opacity: 0.9 } : { opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />

        {/* Title with animation */}
        <motion.div
          className="absolute inset-x-0 bottom-0 p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-violet-300">Explorar projeto →</p>
        </motion.div>

        {/* Decorative elements */}
        {isHovered && (
          <motion.div
            className="absolute right-4 top-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex size-8 items-center justify-center rounded-lg border border-violet-400">
              <span className="text-sm text-violet-400">★</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Blur effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl bg-violet-500/10 blur-xl"
        animate={
          isHovered ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }
        }
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
