import { client } from "@/lib/contentful";
import Image from "next/image";
import { PiButterfly } from "react-icons/pi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AnimatedButterfly from "../compontents/Butterfly";
import AnimatedList from "../compontents/AboutTextAnimation";
import AnimatedTitleAnimation from "../compontents/AboutTitleAnimation";

export default async function AboutPage() {
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

  const userPosibilites = documentToReactComponents(
    aboutData?.aboutSecondParagraph
  );

  const aboutTitle = aboutData.title;

  return (
    <div className="p-5 max-w-[1200px] m-auto">
      {aboutData ? (
        <div>
          <h1 className="text-3xl md:text-4xl font-bold my-12 flex items-center gap-2">
            <AnimatedTitleAnimation text={aboutTitle} />
          </h1>
          <div className="mb-8 text-lg font-roboto leading-7 tracking-wide">
            <AnimatedList text={documentToReactComponents(aboutData.about)} />
          </div>
          <div className="mb-4 text-lg font-roboto flex gap-12 leading-10">
            <div className="flex flex-col justify-center pb-14">
              <AnimatedList text={userPosibilites} />
            </div>
            {aboutData.imageUrl && (
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
            )}
          </div>
        </div>
      ) : (
        <p className="text-2xl flex items-center justify-center">Loading...</p>
      )}

      <div></div>
      <AnimatedButterfly />
    </div>
  );
}
