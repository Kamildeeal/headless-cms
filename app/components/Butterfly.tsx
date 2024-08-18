"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiButterfly } from "react-icons/pi";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // delay for every another appearing elemetn
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export default function AnimatedButterfly() {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-20 left-[10%] rotate-45 text-[200px] z-[-1] opacity-90 text-gray-300"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <PiButterfly className="absolute top-20 left-[10%] rotate-45 text-[200px] z-[-1] opacity-90 text-gray-300" />
      </motion.div>

      <motion.div
        className="absolute top-[40%] right-[25%] rotate-[215deg] text-[200px] z-[-1] opacity-[0.95] text-gray-300"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <PiButterfly className="absolute top-[40%] right-[25%] rotate-[215deg] text-[200px] z-[-1] opacity-[0.95] text-gray-300" />
      </motion.div>

      <motion.div
        className="absolute top-[70%] left-[35%] rotate-[300deg] text-[200px] z-[-1] opacity-90 text-gray-300"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <PiButterfly className="absolute top-[70%] left-[35%] rotate-[300deg] text-[200px] z-[-1] opacity-90 text-gray-300" />
      </motion.div>
    </AnimatePresence>
  );
}
