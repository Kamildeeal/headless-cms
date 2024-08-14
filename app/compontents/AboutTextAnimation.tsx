"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedList({ text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center pb-14"
    >
      {text}
    </motion.div>
  );
}
