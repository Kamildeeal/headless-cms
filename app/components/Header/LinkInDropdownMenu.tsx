import Link from "next/link";
import React, { PropsWithChildren, ReactNode } from "react";

interface LinkHeaderProps {
  children: ReactNode;
  href: string;
}

const LinkDropdownMenu = ({ children, href }: LinkHeaderProps) => {
  const uppercaseChildren =
    typeof children === "string" ? children.toUpperCase() : children;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group font-roboto text-[12px] text-gray-200 relative inline-block overflow-hidden rounded px-2 py-1 hover:text-sky-600 focus:outline-none active:text-sky-600"
    >
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-sky-600 transition-all duration-200 group-hover:w-full"></span>
      {uppercaseChildren}
    </Link>
  );
};

export default LinkDropdownMenu;
