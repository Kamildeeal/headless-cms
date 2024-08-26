import React, { useEffect, useState } from "react";
import LinkDropdownMenu from "./LinkInDropdownMenu";
import { AnimatePresence, motion } from "framer-motion";

const GalleryDropdown = ({
  dropdownState,
}: {
  dropdownState: boolean | string;
}) => {
  const [isVisible, setIsVisible] = useState(dropdownState === true);

  useEffect(() => {
    if (dropdownState === true) {
      setIsVisible(true);
    } else if (dropdownState === "closing") {
    }
  }, [dropdownState]);

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
      transformOrigin: "top",
    },
    exit: {
      opacity: 0,
      y: -1,
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
      transformOrigin: "top",
    },
  };

  return (
    <AnimatePresence onExitComplete={() => setIsVisible(false)}>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate={dropdownState === true ? "visible" : "exit"}
          exit="exit"
          variants={dropdownVariants}
          className="absolute left-0 w-48 bg-black shadow-lgoverflow-hidden z-[1000]"
        >
          <div className="dropdown-menu text-start absolute flex flex-col gap-2 bg-b font-roboto bg-black text-sm text-gray-200 px-2 pt-6 pb-2 w-[200px] z-[50]">
            <LinkDropdownMenu href="#">just an example</LinkDropdownMenu>
            <LinkDropdownMenu href="#">of dropdown menu</LinkDropdownMenu>
            <LinkDropdownMenu href="#">
              curentlly gallery isn&apos;t needed
            </LinkDropdownMenu>
            <LinkDropdownMenu href="#">
              to don&apos;t waste contentful CMS memory
            </LinkDropdownMenu>
            <LinkDropdownMenu href="/posts">visit all posts</LinkDropdownMenu>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryDropdown;
