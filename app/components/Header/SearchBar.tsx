import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

const SearchBar = ({ setIsSearchOpen }: any) => {
  const [inputText, setInputText] = useState("");

  const router = useRouter();

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

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${inputText}`);
    setIsSearchOpen((prev: any) => !prev);
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
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Seach & enter.."
            className="w-full mx-8 text-gray-200 bg-gray-900 py-1 px-2 rounded-sm"
          />
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchBar;
