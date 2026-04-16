"use client";

import DotPattern from "../ui/dot-pattern";
import ReviewDemo from "./ReviewDemo";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="relative py-24">
      <div className="z-10 flex flex-col px-6 md:items-center md:justify-center">
        <motion.h3
          className="h3-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Sincere words from incredible people
        </motion.h3>
      </div>

      <ReviewDemo />

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};
export default Reviews;
