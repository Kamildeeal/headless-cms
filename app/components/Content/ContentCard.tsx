import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TripPost } from "@/lib/api";
import BoxAnimation from "../animations/BoxAnimation";
import SkillsAnimation from "../animations/SkillsAnimation";

interface ContentCardProps {
  post: TripPost;
}

const ContentCard = ({ post }: ContentCardProps) => {
  const fullImageUrl =
    post.image.src && !post.image.src.startsWith("http")
      ? `https:${post.image.src}`
      : post.image.src;

  const checkNavigation = () => {
    let navigation = "";

    if (post.title === "About Tripstagram") {
      navigation = "/about";
    } else if (post.title === "Blog Posts") {
      navigation = "/posts";
    }

    return navigation;
  };

  return (
    <SkillsAnimation>
      <div className="group flex flex-col justify-center items-center gap-4 md:gap-6 mt-6 mb-0 md:my-8 overflow-visible px-5">
        <Link href={checkNavigation()}>
          <Image
            src={fullImageUrl}
            alt="Content image"
            width={370}
            height={250}
            className="transition-transform duration-300 cursor-pointer rounded-md hover:scale-105 border-[2px] custom-shadow overflow-visible"
          />
        </Link>
        <Link href={checkNavigation()}>
          <div className="font-basker text-lg sm:text-xl md:text-2xl group-hover:underline cursor-pointer transition-all">
            {post.title.toLocaleUpperCase()}
          </div>
        </Link>
      </div>
    </SkillsAnimation>
  );
};

export default ContentCard;
