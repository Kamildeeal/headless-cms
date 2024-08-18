import React from "react";
import LinkDropdownMenu from "./LinkInDropdownMenu";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scaleY: 0,
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
  },
};

const ContactDropdown = ({ dropdownState }: { dropdownState: boolean }) => {
  return (
    <motion.div
      initial="hidden"
      animate={dropdownState ? "visible" : "hidden"}
      variants={dropdownVariants}
      className="absolute left-0 w-48 bg-white shadow-lgoverflow-hidden z-[1000]"
    >
      <div className="dropdown-menu absolute flex flex-col gap-2 bg-black font-roboto text-sm text-gray-200 px-2 pt-6 pb-2 w-[200px] z-[50]">
        <LinkDropdownMenu href="/">GitHub</LinkDropdownMenu>
        <LinkDropdownMenu href="/">LinkedIn</LinkDropdownMenu>
        <LinkDropdownMenu href="/">Email</LinkDropdownMenu>
      </div>
    </motion.div>
  );
};

export default ContactDropdown;
