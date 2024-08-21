import Link from "next/link";
import React from "react";
import SkillsAnimate from "@/app/components/animations/SkillsAnimation";

const HeroEntryText = () => {
  return (
    <SkillsAnimate>
      <div className="relative my-12 lg:my-36 font-roboto z-50 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl lg:text-5xl  font-bold my-4 text-center">
          DISCOVER & LEARN & ENJOY
        </h1>
        <p className="text-sm lg:text-base text-center">
          This is small educational project-blog with travel content.
        </p>
        <p className="text-sm lg:text-base">Take a bag, and let&apos;s go!</p>
        <button
          type="button"
          className=" sm:mt-4 lg:mt-12 py-4 px-8 border-2 transition-all border-white hover:bg-slate-600 hover:bg-opacity-80"
        >
          <Link href="/posts">EXPLORE POSTS</Link>
        </button>
      </div>
    </SkillsAnimate>
  );
};

export default HeroEntryText;
