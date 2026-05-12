"use client";

import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectsGallery = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
        >
          {/* imagem */}
          <div className="relative h-[420px] w-full overflow-hidden">
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
          </div>

          {/* conteúdo */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="translate-y-6 transition duration-500 group-hover:translate-y-0">
              <p className="mb-2 text-sm text-violet-300">
                {project.subTitle}
              </p>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mb-4 line-clamp-3 text-sm text-zinc-300 opacity-0 transition duration-500 group-hover:opacity-100">
                {project.description}
              </p>

              {/* stack */}
              <div className="mb-5 flex flex-wrap gap-2 opacity-0 transition duration-500 group-hover:opacity-100">
                {project.stack.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* botões */}
              <div className="flex gap-3 opacity-0 transition duration-500 group-hover:opacity-100">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-105"
                  >
                    Github
                  </Link>
                )}

                <Link
                  href={project.live}
                  target="_blank"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* glow */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGallery;