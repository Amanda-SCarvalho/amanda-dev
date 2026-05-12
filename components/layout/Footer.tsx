"use client";

import Link from "next/link";
import Logo from "./Logo";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Globe } from "lucide-react";
import { socialLinks } from "@/constants/contacts";

const iconsMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  instagram: <Instagram size={18} />,
  email: <Mail size={18} />,
  website: <Globe size={18} />,
};

const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col gap-14 px-6 py-24 xl:flex-row xl:justify-between border-t border-white/10"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Logo */}
      <Logo isLogoFooter />

      {/* Links sociais */}
      <motion.ul
        className="flex flex-wrap gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((socialLink, i) => {
          const icon = iconsMap[socialLink.id];

          return (
            <motion.li
              key={socialLink.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={socialLink.path}
                target="_blank"
                className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/0 px-3 py-2 transition-all hover:bg-white/5"
              >
                {/* Ícone */}
                <motion.span
                  className="text-white/60 transition-colors group-hover:text-violet-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.span>

                {/* Texto */}
                <span className="text-sm tracking-wide text-white/60 transition-colors group-hover:text-white">
                  {socialLink.id}
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.footer>
  );
};

export default Footer;