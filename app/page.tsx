import { client } from "@/lib/contentful";
import Image from "next/image";
import TripCard from "./compontents/TripCard";

export const revalidate = 60;
// export const dynamic = "force-static";

export default async function Home() {
  let tripData: any[] = [];

  try {
    const response = await client.getEntries({
      content_type: "tripAdvise",
    });
    tripData = response.items;

    //get image from diffrent JSON
    const assetPromises = tripData.map((entry) => {
      if (entry.fields.image?.sys?.id) {
        return client.getAsset(entry.fields.image.sys.id);
      }
      return null;
    });

    const assetResponses = await Promise.all(assetPromises);

    //check for more images
    tripData.forEach((entry, index) => {
      const assetResponse: any = assetResponses[index];
      if (assetResponse) {
        entry.imageUrl = `https:${assetResponse.fields.file.url}`;
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className="flex h-full flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      {tripData && tripData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] w-full">
          {tripData.map((trip: any) => (
            <div key={trip.sys.id} className="flex justify-center">
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
