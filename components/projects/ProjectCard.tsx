"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[350px] cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow animado */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 p-[1px]"
        animate={{ opacity: isHovered ? 1 : 0.3 }}
      >
        <div className="w-full h-full rounded-2xl bg-neutral-900" />
      </motion.div>

      {/* Card */}
      <div className="relative z-10 overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
        
        {/* Moldura estilo notebook */}
        <div className="bg-neutral-800 p-2">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
            
            {/* IMAGEM CORRIGIDA */}
            <Image
              src={src}
              alt={title}
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover object-center transition-transform duration-500"
              style={{
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
              animate={{ opacity: isHovered ? 0.9 : 0.4 }}
            />

            {/* Conteúdo */}
            <motion.div
              className="absolute bottom-0 p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-violet-300">
                Explorar projeto →
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blur glow externo */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl bg-violet-500/10 blur-2xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;