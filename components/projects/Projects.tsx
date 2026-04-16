"use client";

import { projects } from "@/constants/projects";
import ProjectBtn from "./ProjectBtn";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleActiveProject = (id: string) => {
    setActiveProject(projects.find((project) => project.id === id)!);
  };

  return (
    <div className="">
      <div className="relative">
        <motion.div
          className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-evenly lg:justify-center lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProjectCard
                src={activeProject.screenshot}
                title={activeProject.title}
              />
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            className="mx-auto flex w-fit gap-5 md:mx-0 md:mt-7 xl:gap-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectBtn
                  id={project.id}
                  color={project.color}
                  active={project.id === activeProject.id}
                  switchActiveProject={handleActiveProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid pattern */}
        <div className="projects-grid-pattern absolute inset-0 -z-10 mt-36 border-t border-t-tundora opacity-50" />
      </div>
      {/* Project details card */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <ProjectDetails
            title={activeProject.title}
            subTitle={activeProject.subTitle}
            stack={activeProject.stack}
            description={activeProject.description}
            date={activeProject.date}
            github={activeProject.github}
            live={activeProject.live}
            color={activeProject.color}
            btnBg={activeProject.btnBg}
            btnBgHover={activeProject.btnBgHover}
            cardBg={activeProject.cardBg}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Projects;
