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
      <div className="flex flex-col justify-center items-center gap-6 my-8 overflow-visible pr-5">
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
          <div className="font-basker text-2xl hover:underline cursor-pointer transition-all">
            {post.title.toLocaleUpperCase()}
          </div>
        </Link>
      </div>
    </SkillsAnimation>
  );
};

export default ContentCard;
