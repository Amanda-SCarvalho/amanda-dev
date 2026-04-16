"use client";

import { contacts } from "@/constants/contacts";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative space-y-12 px-6 py-24">
      <motion.h4
        className="h3-bold md:mx-auto md:max-w-[850px] md:text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Let&apos;s create something exceptional together! Feel free to reach out
        for collaboration, freelance work, or just to say hi!
      </motion.h4>

      <motion.div
        className="flex flex-col gap-4 lg:flex-row xl:justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {contacts.map((contact) => (
          <motion.div key={contact.id} variants={itemVariants}>
            <ContactCard
              title={contact.title}
              description={contact.description}
              icon={contact.icon}
              path={contact.path}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Contact;
