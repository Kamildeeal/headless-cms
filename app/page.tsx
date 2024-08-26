import { fetchTripPosts, getHeroData } from "../lib/api";
import Hero from "./components/Hero";
import UsedTechnologies from "./components/UsedTechnologies";
import BlogContentDesc from "./components/BlogContentDesc";
import FeedDesc from "./components/Content/FeedDesc";
import HomeFooter from "./components/Home/HomeFooter";

export const revalidate = 3600;
// export const dynamic = "force-static";

export default async function Home() {
  const tripPosts = await fetchTripPosts();
  const heroData = await getHeroData();

  return (
    <div className="flex flex-col items-center overflow-visible">
      <Hero heroData={heroData} />
      <FeedDesc />
      <BlogContentDesc />
      <UsedTechnologies />
      <HomeFooter heroData={heroData} />
    </div>
  );
}
