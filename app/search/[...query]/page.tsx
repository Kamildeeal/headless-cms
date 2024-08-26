"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function searchPage() {
  const params: any = useParams();
  const decodedQuery = decodeURIComponent(params.query);

  return (
    <section className="mt-[10vh]  flex justify-center flex-col">
      <div className="flex justify-center font-roboto font-semibold text-2xl">
        SEARCH RESULTS FOR{" "}
        <span className="text-sky-500 ml-2">
          {" "}
          "{decodedQuery.toLocaleUpperCase()}"
        </span>
      </div>
      <div className="flex justify-center my-16">
        Sorry, but nothing matched your search terms. Please try again later!
      </div>
    </section>
  );
}
