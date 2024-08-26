"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiButterfly } from "react-icons/pi";
import LinkHeader from "./Header/LinkHeader";
import LinkDropDown from "./Header/Dropdown";
import GalleryDropdown from "./Header/GalleryDropdown";
import ContactDropdown from "./Header/ContactDropdown";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./Header/SearchBar";
import LinkMobileMenu from "./Header/MobileMenu/LinkMobileMenu";
import MobileGalleryDropdown from "./Header/MobileMenu/MobileGalleryDropdown";
import WaveSvg from "@/assets/svg/WaveBlack";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  const openSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-black p-4   shadow-md z-50">
      <div className="container mx-auto flex md:justify-between items-center">
        {isSearchOpen ? (
          // SearchBar
          <SearchBar setIsSearchOpen={setIsSearchOpen} />
        ) : (
          <>
            {/* Logo */}
            <h1 className="text-gray-200 mr-10 text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-2 items-center">
              <PiButterfly className="text-sky-600" />
              <span>Tripstagram</span>
            </h1>

            {/* Big screens*/}
            <div className="flex items-center justify-center text-center">
              <nav className="relative gap-3 lg:gap-4 mx-auto hidden min-[824px]:flex">
                <LinkHeader href="/">Home</LinkHeader>
                <LinkHeader href="/posts">Blog Posts</LinkHeader>
                <div
                  className="relative my-auto"
                  onClick={() => toggleDropdown("gallery")}
                  onMouseEnter={() => openDropdown("gallery")}
                  onMouseLeave={() => closeDropdown("gallery")}
                >
                  <LinkDropDown href="/">Gallery</LinkDropDown>
                  {dropdownStates.gallery && (
                    <GalleryDropdown dropdownState={dropdownStates.gallery} />
                  )}
                </div>
                <LinkHeader href="/about">About</LinkHeader>
                <div
                  className="relative my-auto"
                  onClick={() => toggleDropdown("contact")}
                  onMouseEnter={() => openDropdown("contact")}
                  onMouseLeave={() => closeDropdown("contact")}
                >
                  <LinkDropDown href="/">Contact</LinkDropDown>
                  {dropdownStates.contact && (
                    <ContactDropdown dropdownState={dropdownStates.contact} />
                  )}
                </div>
              </nav>
            </div>
          </>
        )}
        {/* Search */}
        <div
          className="text-gray-200 cursor-pointer ml-auto min-[824px]:ml-4 mr-4"
          onClick={() => openSearch()}
        >
          {isSearchOpen ? <RxCross2 /> : <IoMdSearch />}
        </div>

        {/* Hamburger*/}
        <button
          className="min-[824px]:hidden text-gray-200 text-2xl hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Small screens */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex justify-center items-center flex-col z-50">
          <LinkMobileMenu href="/">Home</LinkMobileMenu>
          <LinkMobileMenu href="/posts">Blog Posts</LinkMobileMenu>
          <div
            className="relative my-auto"
            onClick={() => toggleDropdown("gallery")}
            onMouseEnter={() => openDropdown("gallery")}
            onMouseLeave={() => closeDropdown("gallery")}
          >
            <LinkDropDown href="/">Gallery</LinkDropDown>
            {dropdownStates.gallery && (
              <GalleryDropdown dropdownState={dropdownStates.gallery} />
            )}
          </div>
          <LinkMobileMenu href="/about">About</LinkMobileMenu>
          <div
            className="relative my-auto"
            onClick={() => toggleDropdown("contact")}
            onMouseEnter={() => openDropdown("contact")}
            onMouseLeave={() => closeDropdown("contact")}
          >
            <LinkDropDown href="/">Contact</LinkDropDown>
            {dropdownStates.contact && (
              <ContactDropdown dropdownState={dropdownStates.contact} />
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
