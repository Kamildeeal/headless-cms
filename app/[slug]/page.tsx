import { fetchTripPost, fetchTripPosts } from "@/lib/api";
import RichText from "@/lib/contentRichText";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface TripPostPageParams {
  slug: string;
}

interface TripPostPageProps {
  params: TripPostPageParams;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<TripPostPageParams[]> {
  const tripPosts = await fetchTripPosts();

  return tripPosts.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: TripPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tripPost = await fetchTripPost({
    slug: params.slug,
  });

  if (!tripPost) {
    return notFound();
  }

  return {
    title: tripPost.title,
  };
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: TripPostPageProps) {
  // Fetch a single blog post by title
  const tripPost = await fetchTripPost({
    slug: params.slug,
  });

  console.log(params.slug);

  if (!tripPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }

  const parsedDate = tripPost.date ? new Date(tripPost.date) : undefined;
  return (
    <main className="flex flex-col justify-center items-center px-[5vw] mt-20 mb-28">
      <div className="w-full min-w-[330px] max-w-[1170px]">
        <Link href="/posts" className="text-xl">
          ← Posts
        </Link>
        <div className="mt-8 border-t pt-8">
          {/* Render the blog post image */}
          {tripPost.image && (
            <div className="w-full max-w-[1170px] h-[700px] relative flex flex-col overflow-hidden">
              <Image
                src={
                  tripPost.image && tripPost.image.src
                    ? tripPost.image.src.startsWith("//")
                      ? `https:${tripPost.image.src}`
                      : tripPost.image.src
                    : ""
                }
                alt={tripPost.title}
                fill={true}
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
              <div className="z-[10] mt-auto flex mx-auto w-full bg-gray-500 bg-opacity-50 items-center justify-center rounded-b-xl">
                <h1 className="text-5xl  text-white font-basker py-4">
                  {tripPost.title}
                </h1>
              </div>
            </div>
          )}
          <div className=" font-basker text-xl mt-12">
            <p className="text-2xl font-semibold font-roboto">
              {tripPost.title}
            </p>
            <div className="border-t pt-8">
              <RichText document={tripPost.description} />
            </div>
            <p className="pt-6 font-serif text-lg">
              Rating: {tripPost.rating}/10
            </p>
            <p className="text-lg pt-2">
              <strong>Date:</strong>{" "}
              <span className="text-orange-500">
                {parsedDate ? parsedDate.toLocaleDateString() : "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogPostPage;
