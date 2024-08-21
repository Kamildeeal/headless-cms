"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { TripPost } from "@/lib/api";

interface TripCardProps {
  trip: TripPost;
}

const TripCard = ({ trip }: TripCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "... [load post]";
    }
    return text;
  };

  const [hover, setHover] = useState(false);

  const parsedDate = trip.date ? new Date(trip.date) : undefined;

  const tripDescriptionString = trip.description as RichTextDocument;
  const descriptionText = trip.description
    ? documentToPlainTextString(tripDescriptionString)
    : "";

  const fullImageUrl =
    trip.image.src && !trip.image.src.startsWith("http")
      ? `https:${trip.image.src}`
      : trip.image.src;

  return (
    <div
      className="h-[400px] w-full max-w-[400px] transition-transform overflow-hidden border-2 border-gray-300 rounded-xl relative shadow-xl shadow-gray-500"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ transform: hover ? "scale(1.1)" : "scale(1)" }}
    >
      {/* background image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ transform: hover ? "scale(1.1)" : "scale(1)" }}
      >
        <Image
          src={fullImageUrl}
          alt="Trip image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
          style={{ transform: hover ? "scale(1.25)" : "scale(1)" }}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
            hover ? "bg-gray-100 bg-opacity-60" : "bg-transparent"
          }`}
          style={{ zIndex: 1 }}
        ></div>
      </div>
      <div className="relative z-10 flex flex-col h-full">
        {/* description */}
        <div
          className={`w-full max-w-[400px] mt-2 font-serif tracking-wide cursor-pointer p-4 ${
            hover ? "block" : "hidden"
          }`}
        >
          <Link href={`/${trip.slug}`}>
            <p>
              {descriptionText.length > 75
                ? truncateText(descriptionText, 75)
                : descriptionText}
            </p>
          </Link>
        </div>

        {/* rest info */}
        <div
          className={`relative z-10 mt-auto p-4 transition-all duration-300 ease-in-out ${
            hover ? "bg-transparent" && "translate-y-0" : "bg-white"
          } `}
        >
          <h3 className="text-lg font-normal font-roboto uppercase tracking-widest text-gray-500">
            {trip.title}
          </h3>

          <p className="text-2xl my-4 font-roboto">
            <strong>Location:</strong> {trip.location}
          </p>
          <div className="flex justify-between">
            <div>
              <p>
                <strong>Date:</strong>{" "}
                {parsedDate ? parsedDate.toLocaleDateString() : "N/A"}
              </p>
              {trip.author ? (
                <p className="flex flex-row text-sm">
                  <strong>Author:</strong>
                  <span className="text-orange-600 ml-2"> {trip.author}</span>
                </p>
              ) : (
                <p className="flex flex-row text-sm mt-2">
                  <strong>Author: </strong>
                  <span className="text-orange-600 ml-2">Annonymous</span>
                </p>
              )}
            </div>
            {hover && (
              <div className="my-auto py-1 px-2  sm:py-2 sm:px-4 text-sm text-white bg-orange-500 border-[1px] border-white rounded-xl">
                <Link href={`/${trip.slug}`}>Read more →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
