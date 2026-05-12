"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NavLinks = () => {
  const links = [
    { href: "/", label: "Projects" },
    { href: "../career", label: "Mapa" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <nav className="mt-16 flex flex-col gap-8 text-3xl md:mt-0 md:flex-row md:text-sm">
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          custom={i}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <Link
              className="py-4 text-foreground transition-colors group-hover:text-violet-400 md:py-0"
              href={link.href}
            >
              {link.label}
            </Link>

            {/* Underline animation */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </nav>
  );
};
export default NavLinks;
