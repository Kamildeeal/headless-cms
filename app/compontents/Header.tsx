"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiButterfly } from "react-icons/pi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-100 p-4 border-b-slate-800 shadow-slate-400  shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-2 items-center">
          <PiButterfly />
          <span>Tripstagram</span>
        </h1>

        {/* Hamburger*/}
        <button
          className="md:hidden text-black text-2xl hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Big screens*/}
        <nav className="hidden md:block mx-10">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-black text-lg hover:text-gray-900 hover:font-bold transition-colors duration-300"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300">
                  Home
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                href="/add-post"
                className="text-white text-lg hover:text-gray-900 hover:font-bold transition-colors duration-300"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300">
                  Add Trip
                </span>
              </Link>
            </li> */}
            <li>
              <Link
                href="/about"
                className="text-black text-lg hover:text-gray-900 hover:font-bold transition-colors duration-300"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black text-lg hover:text-gray-900 hover:font-bold transition-colors duration-300"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* search bar */}
        <div className="hidden md:block relative ">
          <input
            type="text"
            placeholder="Seach for trip..."
            className="py-1 px-3 rounded-full focus:outline-none border-black border-[1px]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            🔍
          </button>
        </div>
      </div>

      {/* small screens */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="text-black text-lg block hover:text-gray-900 hover:font-bold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black text-lg block hover:text-gray-900 hover:font-bold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/add-post"
                className="text-black text-lg block hover:text-gray-900 hover:font-bold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Trip
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black text-lg block hover:text-gray-900 hover:font-bold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="mt-2">
              <input
                type="text"
                placeholder="Search for trip..."
                className="w-full py-1 px-3 rounded-full focus:outline-none"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
