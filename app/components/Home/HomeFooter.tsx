import WaveBlack from "@/assets/svg/WaveBlack";
import WaveSvg from "@/assets/svg/WaveWhite";
import Image from "next/image";
import React from "react";

const HomeFooter = ({ heroData }: any) => {
  return (
    <div className="w-full mt-12">
      {heroData.imageUrl && (
        <div className="w-full h-[350px] relative">
          <div className="w-full h-[50px] z-[100] relative">
            <WaveSvg />
          </div>
          <Image
            src={heroData.imageUrl}
            alt="About us"
            fill={true}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default HomeFooter;
