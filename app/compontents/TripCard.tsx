"use client";
import Image from "next/image";
import React, { useState } from "react";

const TripCard = ({ trip }: any) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "... [load post]";
    }
    return text;
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="h-[400px] w-[400px] transition-transform overflow-hidden border-2 border-gray-300 rounded-xl relative shadow-xl shadow-gray-500"
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
          src={trip.imageUrl}
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
          <p>
            {isExpanded
              ? trip.fields.description.content[0]?.content[0]?.value
              : truncateText(
                  trip.fields.description.content[0]?.content[0]?.value,
                  75
                )}
          </p>
        </div>
        {/* rest info */}
        <div
          className={`relative z-10 mt-auto p-4 transition-all duration-300 ease-in-out ${
            hover ? "bg-transparent" && "translate-y-0" : "bg-white"
          } `}
        >
          <h3 className="text-lg font-normal font-roboto uppercase tracking-widest text-gray-500">
            {trip.fields.title}
          </h3>
          {trip.fields.author && (
            <p>
              <strong>Author:</strong> {trip.fields.author.fields?.name}
            </p>
          )}
          <p className="text-2xl my-4 font-roboto">
            <strong>Location:</strong> {trip.fields.location}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(trip.fields.date).toLocaleDateString()}
          </p>
          {trip.fields.author ? (
            <p className="flex flex-row text-sm">
              <strong>Author:</strong>
              <span className="text-orange-600 ml-2">
                {" "}
                {trip.fields.author.fields?.name}
              </span>
            </p>
          ) : (
            <p className="flex flex-row text-sm mt-2">
              <strong>Author: </strong>
              <span className="text-orange-600 ml-2">Annonymous</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
