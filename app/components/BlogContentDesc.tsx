import { getContactData } from "@/lib/api";
import React from "react";
import TripCard from "./TripCard";
import ContentCard from "./Content/ContentCard";
import ContactMeCard from "./Content/ContantMeCard";
import SkillsAnimation from "./animations/SkillsAnimation";

async function BlogContentDesc() {
  const blogContentDesc = await getContactData();
  return (
    <SkillsAnimation>
      <div className="flex flex-col items-center  my-6 md:my-12 text-gray-700 min-w-[320px] overflow-visible mx-6">
        <div className="flex items-center  mb-0 md:mb-6">
          <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
          <div className="text-xl text-center sm:text-3xl font-bold">
            TRIPSTAGRAM CONTENT
          </div>
          <div className="h-[2px] w-16 sm:w-32 md:w-64  ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="flex gap-4">
          {blogContentDesc && blogContentDesc.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {blogContentDesc.map((post) => (
                <div key={post.slug} className="flex justify-center">
                  <ContentCard post={post} />
                </div>
              ))}
              <div className="overflow-visible">
                <ContactMeCard />
              </div>
            </div>
          ) : (
            <div>Loading content..</div>
          )}
        </div>
      </div>
    </SkillsAnimation>
  );
}

export default BlogContentDesc;
