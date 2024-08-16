import { fetchCurrentTrip } from "@/lib/api";

export default async function KnowledgeArticle({ params }: any) {
  const currentTrip = await fetchCurrentTrip({ slug: params }); // Zmienione z params.slug na params.id

  if (!currentTrip) {
    return (
      <main>
        <h1>Post not found</h1>
      </main>
    );
  }
  console.log(currentTrip);

  return (
    <main>
      <h1>Article Detail Page</h1>
      <h2></h2>
    </main>
  );
}
