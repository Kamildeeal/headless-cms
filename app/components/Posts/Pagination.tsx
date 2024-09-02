import Link from "next/link";
import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number | any;
  totalPages: number;
}) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  let pagesToShow: any = pageNumbers;

  if (totalPages > 7) {
    if (currentPage <= 4) {
      pagesToShow = [...pageNumbers.slice(0, 5), "...", totalPages];
    } else if (currentPage > totalPages - 4) {
      pagesToShow = [1, "...", ...pageNumbers.slice(totalPages - 5)];
    } else {
      pagesToShow = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8 mb-32">
      {currentPage > 1 && (
        <Link href={`/posts/${currentPage - 1}`}>
          <span className="px-3 mx-6 py-2 bg-gray-100 border-gray-200 border-[1px] text-gray-700 rounded hover:bg-gray-300 transition duration-300">
            &lt;
          </span>
        </Link>
      )}
      {pagesToShow.map((page: string, index: number) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-3 py-2">...</span>
          ) : (
            <Link href={`/posts/${page}`}>
              <span
                className={`px-3 py-2 rounded transition duration-300 ${
                  currentPage === page
                    ? "bg-sky-600 text-white border-gray-200 border-[1px]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-300 border-gray-200 border-[1px]"
                }`}
              >
                {page}
              </span>
            </Link>
          )}
        </React.Fragment>
      ))}
      {currentPage < totalPages && (
        <Link href={`/posts/${currentPage + 1}`}>
          <span className="px-3 mx-6 py-2 bg-gray-100 border-gray-200 border-[1px] text-gray-700 rounded hover:bg-gray-300 transition duration-300">
            &gt;
          </span>
        </Link>
      )}
    </div>
  );
}
