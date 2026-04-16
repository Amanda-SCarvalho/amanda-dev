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
        whileHover={{ scale: 1.05, y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Card className="group relative cursor-pointer overflow-hidden border-white/10 bg-neutral-900/60 shadow-2xl backdrop-blur-sm transition-all hover:border-violet-500/30">
          {/* Animated border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/0 opacity-0 transition-opacity group-hover:opacity-100"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <CardHeader className="relative z-10 pb-2">
            <CardTitle>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={icon} alt={title} width={60} height={60} />
              </motion.div>
            </CardTitle>
            <CardDescription>
              <p className="text-code text-2xl tracking-[0.2em] text-white transition-colors group-hover:text-violet-300">
                {title}
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="relative z-10 text-gray-400 transition-colors group-hover:text-gray-300">
            {description}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
};
export default ContactCard;
