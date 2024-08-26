import React from "react";
import Image from "next/image";
import WaveWhite from "@/assets/svg/WaveWhite";
import HeroEntryText from "./Hero/HeroEntryText";

async function Hero({ heroData }: any) {
  return (
    <section className="relative sm:h-[700px] w-screen overflow-hidden bg-gray-400 flex flex-col justify-between max-[1300px]:h-[550px] max-lg:h-[500px] max-md:h-[85vh]">
      {/* Video or Image */}
      {heroData.imageUrl && (
        <div className="realtive overflow-hidden hidden max-[560px]:flex">
          <Image
            src={heroData.imageUrl}
            alt="About us"
            fill={true}
            className="object-cover"
          />
        </div>
      )}
      <div className="flex max-[560px]:hidden">
        <iframe
          src="https://www.youtube.com/embed/Qbu_FRg8vuU?autoplay=1&mute=1&loop=1&playlist=Qbu_FRg8vuU"
          allow="autoplay; encrypted-media"
          className="absolute top-0 left-0 w-full aspect-video object-cover"
          style={{ pointerEvents: "none" }}
        ></iframe>
      </div>
      <div className="my-auto pb-8 px-2">
        <HeroEntryText />
      </div>
      {/* {White SVG} */}
      <div className="w-full h-[50px] z-[100] rotate-180">
        <WaveWhite />
      </div>
    </section>
  );
}

export default Hero;
