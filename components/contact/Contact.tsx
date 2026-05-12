"use client";

import { contacts } from "@/constants/contacts";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      
      {/* Glow de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        
        <div className="absolute bottom-0 right-0 size-[350px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <motion.div
        className="mx-auto mb-20 max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contato
        </motion.p>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Vamos criar algo
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {" "}
            inesquecível
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400">
          Estou disponível para freelas, colaborações,
          projetos criativos e oportunidades para criar
          experiências digitais incríveis.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              y: -8,
            }}
          >
            <ContactCard
              title={contact.title}
              description={contact.description}
              icon={contact.icon}
              path={contact.path}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Rodapé */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-zinc-500">
          Disponível para projetos no Brasil e no mundo 🌍
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;