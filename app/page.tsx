import Image from "next/image";
import TripCard from "./compontents/TripCard";
import { fetchTripPosts } from "../lib/api";

export const revalidate = 60;
// export const dynamic = "force-static";

export default async function Home() {
  const tripPosts = await fetchTripPosts();

  return (
    <main className="flex h-full flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      {tripPosts && tripPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] w-full">
          {tripPosts.map((trip) => (
            <div key={trip.title} className="flex justify-center">
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      ) : (
        <p>No trip data available.</p>
      )}
    </main>
  );
}
