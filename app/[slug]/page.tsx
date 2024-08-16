import { fetchTripPost, fetchTripPosts } from "@/lib/api";
import RichText from "@/lib/contentRichText";
import { Metadata, ResolvingMetadata } from "next";
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

  return (
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="prose mt-8 border-t pt-8">
        {/* Render the blog post image */}
        {tripPost.image && (
          <img
            src={tripPost.image.src}
            // Use the Contentful Images API to render
            // responsive images. No next/image required:
            srcSet={`${tripPost.image.src}?w=300 1x, ${tripPost.image.src} 2x`}
            width={300}
            height={300}
            alt={tripPost.image.alt}
          />
        )}

        {/* Render the blog post title */}
        <h1>{tripPost.title}</h1>

        {/* Render the blog post body */}
        <RichText document={tripPost.description} />
      </div>
    </main>
  );
}

export default BlogPostPage;
