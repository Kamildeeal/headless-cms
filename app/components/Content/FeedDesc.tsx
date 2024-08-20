import { getFeedData } from "@/lib/api";
import React from "react";
import RichText from "@/lib/contentRichText";
import Image from "next/image";
import SkillsAnimation from "../animations/SkillsAnimation";

async function FeedDesc() {
  const feedData = await getFeedData();

  const truncateText = (text: any, maxLength: any) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const getDescription = () => {
    let desc;
    feedData.map((e) => (desc = e.description));
    return desc;
  };

  const description = getDescription();
  const truncatedText = truncateText(description, 100);

  return (
    <SkillsAnimation>
      <div className="w-full max-w-[1200px] flex flex-col items-center my-12 text-gray-700 min-w-[320px] px-8">
        {/* title */}
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
        {/* feed */}
        <div className="flex gap-2 mt-4 flex-col md:flex-row items-center">
          {feedData &&
            feedData.map((e) => (
              <div
                key={e.title}
                className="relative h-max-content max-w-max items-center overflow-hidden custom-shadow group transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave my-auto mr-8"
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
            feedData.map((e) => {
              const descriptionText = e.description;
              const truncatedDescription = truncateText(descriptionText, 100);
              return (
                <div
                  key={e.title}
                  className="w-full min-w-[300px] md:max-w-[350px] lg:max-w-[525px]"
                >
                  <div className="hidden md:block mr-8">
                    <RichText document={e.description} />
                  </div>
                  <div className="block md:hidden mr-8">
                    <RichText document={truncatedDescription} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </SkillsAnimation>
  );
}

export default FeedDesc;
