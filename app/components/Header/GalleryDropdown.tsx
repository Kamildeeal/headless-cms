import React from "react";
import LinkDropdownMenu from "./LinkInDropdownMenu";
import { motion } from "framer-motion";

const GalleryDropdown = ({ dropdownState }: { dropdownState: boolean }) => {
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
      transformOrigin: "top",
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
      transformOrigin: "bottom",
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={dropdownState ? "visible" : "hidden"}
      variants={dropdownVariants}
      className="absolute left-0 w-48 bg-black shadow-lgoverflow-hidden z-[1000]"
    >
      <div className="dropdown-menu absolute flex flex-col gap-2 bg-b font-roboto bg-black text-sm text-gray-200 px-2 pt-6 pb-2 w-[200px] z-[50]">
        <LinkDropdownMenu href="/">sweet example</LinkDropdownMenu>
        <LinkDropdownMenu href="/">of dropdown menu</LinkDropdownMenu>
        <LinkDropdownMenu href="/">
          curentlly gallery isnt needed
        </LinkDropdownMenu>
        <LinkDropdownMenu href="/">
          to don&apos;t waste contentful CMS memory
        </LinkDropdownMenu>
        <LinkDropdownMenu href="/">visit all posts</LinkDropdownMenu>
      </div>
    </motion.div>
  );
};

export default GalleryDropdown;
