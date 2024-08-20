import Image from "next/image";
import TripCard from "./components/TripCard";
import { fetchTripPosts, getAboutData, getHeroData } from "../lib/api";
import Hero from "./components/Hero";
import UsedTechnologies from "./components/UsedTechnologies";
import BlogContentDesc from "./components/BlogContentDesc";
import FeedDesc from "./components/Content/FeedDesc";

export const revalidate = 60;
// export const dynamic = "force-static";

export default async function Home() {
  const tripPosts = await fetchTripPosts();
  const heroData = await getHeroData();

  return (
    <div className="flex flex-col items-center">
      <Hero heroData={heroData} />
      <FeedDesc />
      <BlogContentDesc />
      <UsedTechnologies />
    </div>
  );
}
