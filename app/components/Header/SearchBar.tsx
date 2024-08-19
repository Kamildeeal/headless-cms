import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const SearchBar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-[36px] items-center text-center flex justify-center  mb-0 md:mb-[4px]"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <input
          type="text"
          placeholder="Seach & enter.."
          className="w-full mx-8 text-gray-200 bg-gray-900 py-1 px-2 rounded-sm"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchBar;
