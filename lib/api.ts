import { TypeTripPostSkeleton } from "../types/typeTripPost";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { client } from "./contentfulClient";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type TripPostEntry = Entry<TypeTripPostSkeleton, undefined, string>;

export interface TripPost {
  title?: string;
  author?: string;
  date?: Date;
  image: ContentImage | null | any;
  location?: string;
  description?: RichTextDocument | string;
  rating?: number;
  price?: string;
}

export function parseContentfulBlogPost(
  tripPostEntry?: TripPostEntry
): TripPost | null {
  if (!tripPostEntry) {
    return null;
  }

  return {
    title: tripPostEntry.fields.title || "",
    date: tripPostEntry.fields.date
      ? new Date(tripPostEntry.fields.date)
      : undefined,
    image: parseContentfulContentImage(tripPostEntry.fields.image),
    location: tripPostEntry.fields.location,
    description: tripPostEntry.fields.description,
    rating: tripPostEntry.fields.rating,
    price: tripPostEntry.fields.price,
  };
}

// Fetch all posts

export async function fetchTripPosts(): Promise<TripPost[]> {
  const blogPostsResult = await client.getEntries({
    content_type: "tripAdvise",
    include: 2,
    order: ["fields.title"],
  });

  return blogPostsResult.items.map(
    (tripPostEntry: TripPostEntry | undefined) =>
      parseContentfulBlogPost(tripPostEntry) as TripPost
  );
}

// Fetch each post
interface FetchTripPostsOptions {
  title: string;
}

export async function fetchTripPost({
  title,
}: FetchTripPostsOptions): Promise<TripPost | null> {
  const blogPostsResult = await client.getEntries({
    content_type: "tripAdvise",
    "fields.title": title,
    include: 2,
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}

// Fetch AboutPage data

export async function getAboutData() {
  let aboutData: any = null;

  try {
    const response = await client.getEntries({
      content_type: "about",
    });

    if (response.items.length > 0) {
      aboutData = response.items[0].fields;

      // download IMAGE
      if (aboutData.image && aboutData.image?.sys && aboutData.image.sys.id) {
        const assetResponse = await client.getAsset(aboutData.image.sys.id);
        aboutData.imageUrl = `https:${assetResponse.fields?.file?.url}`;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const aboutTitle = aboutData.title;

  return aboutData;
}
