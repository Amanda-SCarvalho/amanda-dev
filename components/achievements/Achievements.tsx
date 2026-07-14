"use client";

import { motion } from "framer-motion";
import { achievements } from "@/constants/portfolio";
import Image from "next/image";

const Achievements = () => {
  return (
    <section id="conquistas" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
          Conquistas
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Medidas que mostram dedicação
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-4xl">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            className="grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-8 md:grid-cols-[1fr_320px]"
          >
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
                    {achievement.year}
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg font-medium text-zinc-200">
                {achievement.description}
              </p>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Reconhecimento conquistado na ONC pelo desempenho em
                conhecimentos de Física, Química, Biologia e Astronomia.
              </p>

              <a
                href="https://certificados.onciencias.org/item/3ED8IICA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
              >
                Ver certificado
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/onc-2022.png"
                alt="Certificado ONC"
                width={500}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
