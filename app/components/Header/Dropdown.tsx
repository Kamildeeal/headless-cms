import Link from "next/link";
import React, { PropsWithChildren, ReactNode } from "react";

interface LinkHeaderProps {
  children: ReactNode;
  href: string;
}

const LinkHeader = ({ children, href }: LinkHeaderProps) => {
  const uppercaseChildren =
    typeof children === "string" ? children.toUpperCase() : children;
  return (
    <Link
      href={href}
      className="group items-center gap-2 flex font-roboto text-sm text-gray-200 relative overflow-hidden rounded px-2 py-1 hover:border-sky-600 focus:outline-none active:text-sky-600"
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-sky-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-sky-600 transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-sky-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-sky-600 transition-all duration-200 group-hover:h-full"></span>
      {uppercaseChildren}
      <svg
        className="w-3 h-3 pointer-events-none text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </Link>
  );
};

export default LinkHeader;
