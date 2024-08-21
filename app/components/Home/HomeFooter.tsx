import WaveBlack from "@/assets/svg/WaveBlack";
import WaveSvg from "@/assets/svg/WaveWhite";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const HomeFooter = ({ heroData }: any) => {
  return (
    <div className="w-full mt-12">
      {heroData.imageUrl && (
        <div className="w-full h-[350px] relative">
          <div className="w-full h-[50px] z-[100] relative">
            <WaveSvg />
          </div>
          <div className="z-[10] relative flex items-center flex-col justify-center mt-20 text-white text-4xl gap-4">
            <div className="z-[10] relative text-3xl text-white font-basker">
              FIND US!
            </div>
            <div className="flex gap-8">
              <FaInstagram className="hover:scale-110 cursor-pointer" />
              <BsTwitterX className="hover:scale-110 cursor-pointer" />
              <FaTelegram className="hover:scale-110 cursor-pointer" />
            </div>
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
