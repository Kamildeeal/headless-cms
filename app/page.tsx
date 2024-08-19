import Image from "next/image";
import TripCard from "./components/TripCard";
import { fetchTripPosts, getAboutData, getHeroData } from "../lib/api";
import Hero from "./components/Hero";
import { DiVim } from "react-icons/di";
import UsedTechnologies from "./components/UsedTechnologies";

export const revalidate = 60;
// export const dynamic = "force-static";

export default async function Home() {
  const tripPosts = await fetchTripPosts();
  const heroData = await getHeroData();

  return (
    <div>
      <Hero heroData={heroData} />
      <UsedTechnologies />

      {/* {aboutData.imageUrl && (
        <div className="relative rounded-lg shadow-md border-[1px] border-gray-400 shadow-slate-800 overflow-hidden group transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave">
          <div className="overflow-hidden">
            <Image
              src={aboutData.imageUrl}
              alt="About us"
              width={600}
              height={400}
              className="w-full h-auto "
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30 transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave"></div>
        </div>
      )} */}
      <main className="flex h-full flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
        {/* all posts */}
        <div>
          {/* {tripPosts && tripPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] w-full">
          {tripPosts.map((trip) => (
            <div key={trip.slug} className="flex justify-center">
            <TripCard trip={trip} />
            </div>
            ))}
            </div>
            ) : (
              <p>No trip data available.</p>
              )} */}
        </div>
      </main>
    </div>
  );
}
