import React from "react";
import waveUrl from "../../assets/svg/wave.svg";
import WaveSvg from "../../assets/svg/WaveBlack";
import Image from "next/image";
import WaveWhite from "@/assets/svg/WaveWhite";

async function Hero({ heroData }: any) {
  return (
    <section>
      <section className="relative h-[700px] w-screen overflow-hidden bg-gray-400 flex flex-col justify-between max-[1300px]:h-[550px] max-lg:h-[500px] max-md:h-[320px]">
        {/* Black SVG */}
        <div className="w-full h-[50px] z-10">
          <WaveSvg />
        </div>

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
          {/* <iframe
            src="https://www.youtube.com/embed/Qbu_FRg8vuU?autoplay=1&mute=1&loop=1&playlist=Qbu_FRg8vuU"
            allow="autoplay; encrypted-media"
            className="absolute top-0 left-0 w-full aspect-video object-cover"
            style={{ pointerEvents: "none" }}
          ></iframe> */}
        </div>
        {/* {White SVG} */}
        <div className="w-full h-[50px]">
          <WaveWhite />
        </div>
      </section>
      {/* buttons */}
      <div className="relative z-50 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Twoja zawartość tutaj</h1>
      </div>
      {/* svg */}
    </section>
  );
}

export default Hero;
