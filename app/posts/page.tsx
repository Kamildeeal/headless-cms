import { fetchTripPosts, getHeroData } from "../../lib/api";
import React from "react";
import TripCard from "../components/TripCard";
import Image from "next/image";
import WaveWhite from "@/assets/svg/WaveWhite";
import PostEntryText from "../components/Posts/PostEntryText";
import AnimatedButterfly from "../components/Butterfly";

async function PostPage() {
  const tripPosts = await fetchTripPosts();
  const heroData = await getHeroData();

  return (
    <main className="items-center justify-center flex flex-col">
      <div className="relative h-[500px] w-screen overflow-hidden bg-gray-400 flex flex-col justify-between max-[1300px]:h-[450px] max-lg:h-[400px] max-md:h-[300px]">
        {heroData?.imageUrl && (
          <div className="realtive overflow-hidden flex">
            <Image
              src={heroData.imageUrl}
              alt="About us"
              fill={true}
              className="object-cover"
            />
          </div>
        )}
        <PostEntryText />
        <div className="w-full h-[50px] z-[100] rotate-180">
          <WaveWhite />
        </div>
      </div>

      <div className="flex items-center mb-6 mx-auto px-auto mt-12 text-gray-700">
        <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
        <div className="text-xl text-center sm:text-3xl font-bold">
          TRAVEL YOUR BEST
        </div>
        <div className="h-[2px] w-16 sm:w-32 md:w-64  ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
      </div>
      {/* all posts */}
      <section className="flex h-full flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
        <div>
          {tripPosts && tripPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] w-full">
              {tripPosts.map((trip) => (
                <div key={trip.slug} className="flex justify-center">
                  <TripCard trip={trip} />
                </div>
              ))}
            </div>
          ) : (
            <p>No trip data available.</p>
          )}
        </div>
      </section>
      <AnimatedButterfly />
    </main>
  );
}

export default PostPage;
