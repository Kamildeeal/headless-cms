import React from "react";
import { FaReact } from "react-icons/fa";
import { SiContentful } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import SkillsAnimation from "./animations/SkillsAnimation";

const UsedTechnologies = () => {
  return (
    <SkillsAnimation>
      <div className="flex flex-col items-center my-12 text-gray-700 min-w-[320px]">
        <div className="flex items-center mb-6">
          <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
          <div className="text-xl text-center sm:text-3xl font-bold">
            USED TECHNOLOGIES
          </div>
          <div className="h-[2px] w-16 sm:w-32 md:w-64  ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="flex text-2xl sm:text-3xl gap-4">
          <SiContentful />
          <RiNextjsLine />
          <FaReact className="animate-spin-slow" />
          <TbBrandTailwind />
          <FiFramer />
        </div>
      </div>
    </SkillsAnimation>
  );
};

export default UsedTechnologies;
