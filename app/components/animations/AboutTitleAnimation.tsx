"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsAnimate from "../animations/SkillsAnimation";
import { PiButterfly } from "react-icons/pi";
import BoxAnimation from "../animations/BoxAnimation";

export default function AnimatedTitleAnimation({ text }: any) {
  return (
    // <SkillsAnimate>
    <BoxAnimation>
      <div className="flex gap-2">
        {text} <PiButterfly />
      </div>
    </BoxAnimation>
    // </SkillsAnimate>
  );
}
