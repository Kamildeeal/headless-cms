import { client } from "@/lib/contentful";

export const revalidate = 60;

//static content
export const dynamic = "force-static";

export default async function Home() {
  let tripData: any = [];

  try {
    const response = await client.getEntries({
      content_type: "tripAdvise",
    });
    console.log(response);
    tripData = response.items;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-3xl text-red-500 font-mono">KamTrip</p>
      {tripData && tripData.length > 0 ? (
        <div>
          {tripData.map((trip: any) => (
            <div key={trip.sys.id} className="mb-8">
              <h3 className="text-xl font-bold">{trip.fields.title}</h3>
              {trip.fields.author && (
                <p>
                  <strong>Author:</strong> {trip.fields.author.fields.name}
                </p>
              )}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(trip.fields.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Location:</strong> {trip.fields.location}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {trip.fields.description.content[0]?.content[0]?.value}
              </p>
              <p>
                <strong>Rating:</strong> {trip.fields.rating}
              </p>
              <p>
                <strong>Price:</strong> {trip.fields.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No trip data available.</p>
      )}
    </main>
  );
}
