"use client";

import DotPattern from "../ui/dot-pattern";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* 🔥 Background pattern (CORRIGIDO) */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-30 absolute inset-0 -z-10 pointer-events-none"
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-6xl">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Foto */}
          <motion.div
            className="flex shrink-0 items-center justify-center"
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative size-56 md:size-72">
              
              {/* Anéis */}
              <motion.div
                className="absolute inset-0 scale-110 rounded-full border border-violet-400/30"
                animate={{ scale: [1.1, 1.15, 1.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute inset-0 scale-125 rounded-full border border-violet-400/10"
                animate={{ scale: [1.25, 1.3, 1.25] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Imagem */}
              <div className="relative size-full overflow-hidden rounded-full ring-2 ring-violet-400/50 ring-offset-2 ring-offset-[hsl(0,0%,8%)]">
                <Image
                  src="/profile.jpeg"
                  alt="Amanda Carvalho"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Glow */}
              <motion.div
                className="absolute inset-0 -z-10 scale-110 rounded-full bg-violet-500/20 blur-2xl pointer-events-none"
                animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="h2-bold">
              Sobre <span className="text-violet-400">mim</span>
            </h2>

            <p className="regular-paragraph mx-auto max-w-[600px] md:mx-0">
              Sou{" "}
              <span className="font-medium text-violet-400">
                Amanda Carvalho
              </span>
              , desenvolvedora frontend/fullstack focada em criar interfaces bem
              pensadas, performáticas e sustentáveis.
              <br />
              <br />
              Trabalho unindo design e engenharia para transformar ideias em
              produtos digitais modernos, escaláveis e centrados na experiência
              do usuário.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.asset.icon;

            return (
              <SkillCard
                key={skill.id}
                titleLabel={skill.title.label}
                content={skill.content}
                delay={index * 0.1}
              >
                <Icon className="size-5" />
              </SkillCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;