import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactMeCard = () => {
  return (
    <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-6 my-8 overflow-visible pr-5">
      <div
        style={{
          backgroundImage:
            "url('https://avatars.githubusercontent.com/u/146368932?s=400&u=1630838ec8d183f5ef260bc7972f31575e93c492&v=4')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full w-max-[370px] h-[250px] bg-gray-200 flex flex-col justify-end items-center rounded-md transition-transform duration-300 hover:scale-105 mx-2 px-2 custom-shadow overflow-visible"
      >
        <div className="flex gap-4 my-4">
          <a
            href="https://github.com/Kamildeeal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition-colors"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamil-wojciak-68bb54214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={60} />
          </a>
          <a
            href="mailto:kamil.wojciak.1995@gmail.com"
            className="text-white hover:text-red-600 transition-colors"
          >
            <FaEnvelope size={60} />
          </a>
        </div>
      </div>
      <div className="font-basker text-2xl hover:underline cursor-pointer transition-all">
        CONTACT ME
      </div>
    </div>
  );
};

export default ContactMeCard;
