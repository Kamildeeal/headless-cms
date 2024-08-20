import WaveBlack from "@/assets/svg/WaveBlack";
import WaveFooter from "@/assets/svg/WaveFooter";
import WaveSvg from "@/assets/svg/WaveWhite";
import React from "react";
import { PiButterfly } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="relative overflow-visible">
      <div className="w-full h-[50px] z-[100] absolute top-0 left-0 ">
        <div className="w-full h-[50px] z-[100] origin-top rotate-180">
          <WaveFooter />
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 flex">
        <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row text-center">
          <div className="m-4 flex justify-center items-center text-2xl gap-2 text-gray-200">
            <PiButterfly />
            Tripstagram 2024
          </div>
          <nav>
            <ul className="flex space-x-4 flex-col sm:flex-row items-center my-4">
              <li>
                <a href="/privacy" className="hover:text-gray-300">
                  Privacy Politycy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
