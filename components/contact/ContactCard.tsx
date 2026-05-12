"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  icon: string;
  description: string;
  path: string;
};

const ContactCard = ({ title, icon, description, path }: Props) => {
  return (
    <Link href={path} target="_blank">
      <motion.div
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="h-full"
      >
        <Card
          className="
            group
            relative
            flex
            h-full
            min-h-[260px]
            flex-col
            justify-between
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-2
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-violet-500/40
            hover:bg-white/[0.05]
            hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl" />
          </div>

          {/* Linha decorativa */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-70" />

          {/* Header */}
          <CardHeader className="relative z-10">
            <div className="mb-6 flex items-center justify-between">
              
              {/* Ícone */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  flex
                  size-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-md
                "
              >
                <Image
                  src={icon}
                  alt={title}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="
                  flex
                  size-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur
                "
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>

            {/* Título */}
            <CardTitle>
              <h3
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-violet-300
                "
              >
                {title}
              </h3>
            </CardTitle>

            {/* Sub */}
            <CardDescription>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </CardDescription>
          </CardHeader>

          {/* Footer */}
          <CardFooter className="relative z-10 mt-6">
            <motion.div
              className="flex items-center gap-2 text-sm font-medium text-violet-300"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Entrar em contato →
            </motion.div>
          </CardFooter>

          {/* Blur decorativo */}
          <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />
        </Card>
      </motion.div>
    </Link>
  );
};

export default ContactCard;