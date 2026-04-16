"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type ProjectDetailsTypes = {
  title: string;
  subTitle: string;
  stack: string[];
  description: string;
  date: string;
  github: string;
  live: string;
  color: string;
  btnBg: string;
  btnBgHover: string;
  cardBg: string;
};

const ProjectDetails = ({
  title,
  subTitle,
  stack,
  description,
  date,
  github,
  live,
  color,
  btnBg,
  btnBgHover,
  cardBg,
}: ProjectDetailsTypes) => {
  const [hoveredId, setHoveredId] = useState("");

  const listStacks = useMemo(() => {
    return stack.length > 6 ? [...stack.slice(0, 6), "and more..."] : stack;
  }, [stack]);

  const stackVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.div
      className="relative -top-10 mx-auto md:w-[95%] 2xl:w-3/4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          background: cardBg,
          borderColor: color,
          borderWidth: "1px",
        }}
        className="group rounded-lg py-20 shadow-2xl transition-all hover:shadow-2xl hover:shadow-violet-500/20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <CardHeader className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardTitle className="text-whiteice transition-colors group-hover:text-violet-300">
              {title}
            </CardTitle>
            <CardDescription className="group-hover:text-tundora/80 text-tundora transition-colors">
              {subTitle}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-6 xl:grid xl:grid-cols-6">
          {/* Stack */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-3 xl:flex-col xl:items-end xl:justify-center xl:self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {listStacks.map((s, i) => (
              <motion.p
                key={s}
                custom={i}
                variants={stackVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="cursor-pointer text-right font-Silkscreen text-[12px] font-normal uppercase text-whiteice transition-colors hover:text-violet-300"
              >
                {s}
              </motion.p>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-center md:col-span-4 xl:self-start xl:justify-self-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-whiteice">{description}</p>
          </motion.div>

          {/* Date */}
          <motion.p
            className="text-[14px] text-tundora xl:self-end xl:justify-self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {date}
          </motion.p>
        </CardContent>

        <CardFooter className="mx-auto mt-12 w-fit gap-8 font-Silkscreen">
          {github && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                style={{
                  backgroundColor: `${hoveredId === "1" ? btnBgHover : btnBg}`,
                }}
                onMouseEnter={() => setHoveredId("1")}
                onMouseLeave={() => setHoveredId("")}
                className="transition-all hover:shadow-lg"
              >
                <Link href={github} target="_blank">
                  <span className="flex items-center gap-1">
                    Github{" "}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      »
                    </motion.span>
                  </span>
                </Link>
              </Button>
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              style={{
                backgroundColor: `${hoveredId === "2" ? btnBgHover : btnBg}`,
              }}
              onMouseEnter={() => setHoveredId("2")}
              onMouseLeave={() => setHoveredId("")}
              className="transition-all hover:shadow-lg"
            >
              <Link href={live} target="_blank">
                <span className="flex items-center gap-1">
                  Live{" "}
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    »
                  </motion.span>
                </span>
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </motion.div>
    </motion.div>
  );
};
export default ProjectDetails;
