import Link from "next/link";
import React from "react";
import SkillsAnimate from "@/app/components/animations/SkillsAnimation";

const PostEntryText = () => {
  return (
    <SkillsAnimate>
      <div className="relative my-12 lg:my-36 font-roboto z-50 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-2xl lg:text-4xl  font-bold my-4 text-center">
          Travel is the only thing you buy that makes you richer.
        </h1>
        <p className="text-sm lg:text-base text-center">To travel is to live</p>
      </div>
    </SkillsAnimate>
  );
};

export default PostEntryText;
