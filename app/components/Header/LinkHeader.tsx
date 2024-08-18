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
      className="group my-auto text-center items-center px-4 font-roboto text-sm text-gray-200 relative inline-block overflow-hidden rounded py-1 hover:border-sky-600 focus:outline-none active:text-sky-600"
    >
      {uppercaseChildren}
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-sky-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-sky-600 transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-sky-600 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-sky-600 transition-all duration-200 group-hover:h-full"></span>
    </Link>
  );
};

export default LinkHeader;
