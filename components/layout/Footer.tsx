"use client";

import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { socialLinks } from "@/constants/contacts";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.footer
      className="flex flex-col gap-12 px-6 py-24 xl:flex-row xl:justify-evenly border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Logo isLogoFooter />

      <motion.ul
        className="flex flex-wrap gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((socialLink, i) => (
          <motion.li
            key={socialLink.id}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="flex items-center gap-2 group"
            >
              <Link
                href={socialLink.path}
                target="_blank"
                className="flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={socialLink.icon}
                    alt={socialLink.alt}
                    width={25}
                    height={25}
                    className="group-hover:text-violet-400 transition-colors"
                  />
                </motion.div>
                <span className="text-code text-base text-silverchalice group-hover:text-violet-400 transition-colors">
                  {socialLink.id}
                </span>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.footer>
  );
};
export default Footer;
