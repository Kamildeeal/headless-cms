"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiButterfly } from "react-icons/pi";
import LinkHeader from "./Header/LinkHeader";
import LinkDropDown from "./Header/Dropdown";
import GalleryDropdown from "./Header/GalleryDropdown";
import ContactDropdown from "./Header/ContactDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [dropdownStates, setDropdownStates] = useState({
    gallery: false,
    contact: false,
  });

  //on click
  const toggleDropdown = (dropdown: keyof typeof dropdownStates) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
  //on mouse in
  const openDropdown = (dropdown: keyof typeof dropdownStates) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };
  //on mouse out
  const closeDropdown = (dropdown: keyof typeof dropdownStates) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: "closing",
    }));
  };

  return (
    <header className="bg-black p-4 border-b-slate-800 shadow-slate-400  shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-200 text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-2 items-center">
          <PiButterfly className="text-sky-600" />
          <span>Tripstagram</span>
        </h1>

        {/* Big screens*/}
        <nav className="relative flex gap-4 mx-auto">
          <LinkHeader href="/">Home</LinkHeader>
          <LinkHeader href="/">Blog Posts</LinkHeader>
          <div
            className="relative"
            onClick={() => toggleDropdown("gallery")}
            onMouseEnter={() => openDropdown("gallery")}
            onMouseLeave={() => closeDropdown("gallery")}
          >
            <LinkDropDown href="/">Gallery</LinkDropDown>
            {dropdownStates.gallery && (
              <GalleryDropdown dropdownState={dropdownStates.gallery} />
            )}
          </div>
          <LinkHeader href="/">About</LinkHeader>
          <div
            className="relative"
            onClick={() => toggleDropdown("contact")}
            onMouseEnter={() => openDropdown("contact")}
            onMouseLeave={() => closeDropdown("contact")}
          >
            <LinkDropDown href="/">Contant</LinkDropDown>
            {dropdownStates.contact && (
              <ContactDropdown dropdownState={dropdownStates.contact} />
            )}
          </div>
        </nav>

        {/* search bar */}
        {/* <div className="hidden md:block relative ">
          <input
            type="text"
            placeholder="Seach for trip..."
            className="py-1 px-3 rounded-full focus:outline-none border-gray-200 border-[4px]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            🔍
          </button>
        </div> */}
      </div>
      {/* Hamburger*/}
      <button
        className="md:hidden text-gray-200 text-2xl hover:scale-110"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* small screens */}
      {/* {isMenuOpen && (
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
      )} */}
    </header>
  );
};

export default Header;
