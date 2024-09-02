import { fetchTripPosts, getHeroData } from "../../../lib/api";
import React from "react";
import TripCard from "../../components/TripCard";
import Image from "next/image";
import WaveWhite from "@/assets/svg/WaveWhite";
import PostEntryText from "../../components/Posts/PostEntryText";
import AnimatedButterfly from "../../components/Butterfly";
import Link from "next/link";

const POSTS_PER_PAGE = 6;

export async function generateStaticParams() {
  const tripPosts = await fetchTripPosts();
  const totalPages = Math.ceil(tripPosts.length / POSTS_PER_PAGE);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

function Pagination({
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

async function PostPage({ params }: { params: { page: string } }) {
  const page = parseInt(params.page);
  const tripPosts = await fetchTripPosts();
  const heroData = await getHeroData();

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = tripPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(tripPosts.length / POSTS_PER_PAGE);

  return (
    <main className="items-center justify-center flex flex-col">
      {/* Hero section */}
      <div className="relative h-[500px] w-screen overflow-hidden bg-gray-400 flex flex-col justify-between max-[1300px]:h-[450px] max-lg:h-[400px] max-md:h-[300px]">
        {heroData?.imageUrl && (
          <div className="realtive overflow-hidden flex">
            <Image
              src={heroData.imageUrl}
              alt="About us"
              fill={true}
              className="object-cover"
            />
          </div>
        )}
        <PostEntryText />
        <div className="w-full h-[50px] z-[100] rotate-180">
          <WaveWhite />
        </div>
      </div>

      {/* Title section */}
      <div className="flex items-center mb-4 mx-auto px-auto mt-12 text-gray-700">
        <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
        <div className="text-xl text-center sm:text-3xl font-bold">
          TRAVEL YOUR BEST
        </div>
        <div className="h-[2px] w-16 sm:w-32 md:w-64 ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
      </div>
      <p className="font-roboto text-gray-700 mb-10 font-medium">
        RECENT POSTS
      </p>

      {/* Posts section */}
      <section className="flex h-full flex-col items-center justify-between sm:pt-8 md:pt-12">
        <div>
          {paginatedPosts && paginatedPosts.length > 0 ? (
            <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-[1200px] w-full">
              {paginatedPosts.map((trip) => (
                <div key={trip.slug} className="flex justify-center">
                  <TripCard trip={trip} />
                </div>
              ))}
            </div>
          ) : (
            <p>No trip data available.</p>
          )}
        </div>
      </section>

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={totalPages} />

      <AnimatedButterfly />
    </main>
  );
}

export default PostPage;
