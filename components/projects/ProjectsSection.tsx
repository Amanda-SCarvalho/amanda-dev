"use client";

import Projects from "./Projects";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section className="relative py-24">
      <motion.div
        className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="h2-bold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="regular-paragraph max-w-[835px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I&apos;ve worked on a wide range of projects, from scalable web
          applications and reusable UI component libraries to backend APIs and
          microfrontend architectures. Here are some examples of my latest work:
        </motion.p>
      </motion.div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
