import { getFeedData } from "@/lib/api";
import React from "react";
import RichText from "@/lib/contentRichText";
import Image from "next/image";
import SkillsAnimation from "../animations/SkillsAnimation";

async function FeedDesc() {
  const feedData = await getFeedData();

  return (
    <SkillsAnimation>
      <div className="w-full max-w-[1200px] flex flex-col items-center my-12 text-gray-700 min-w-[320px]">
        <div className="flex items-center mb-6 flex-col">
          <div className="flex items-center mt-4 mb-2">
            <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
            <div className="text-xl text-center sm:text-3xl font-bold">
              {feedData &&
                feedData.map((e) => (
                  <div key={e.title}>{e.title.toUpperCase()}</div>
                ))}
            </div>
            <div className="h-[2px] w-16 sm:w-32 md:w-64  ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <p className="font-roboto">SHORT DESCRRIPTION</p>
        </div>
        <div className="flex gap-2 mt-4">
          {feedData &&
            feedData.map((e) => (
              <div
                key={e.title}
                className="relative h-max-content overflow-hidden custom-shadow group transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave my-auto mr-8"
              >
                <div className="overflow-hidden">
                  <Image
                    src={
                      e.image && e.image.src
                        ? e.image.src.startsWith("//")
                          ? `https:${e.image.src}`
                          : e.image.src
                        : ""
                    }
                    alt={"image"}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b h-max-content from-white to-transparent opacity-30 transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave"></div>
              </div>
            ))}
          {feedData &&
            feedData.map((e) => (
              <div
                key={e.title}
                className="
              w-full max-w-[525px]"
              >
                <RichText document={e.description} />
              </div>
            ))}
        </div>
      </div>
    </SkillsAnimation>
  );
}

export default FeedDesc;
