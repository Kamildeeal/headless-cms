import { client } from "@/lib/contentful";
import Image from "next/image";
import { PiButterfly } from "react-icons/pi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

  return (
    <div className="p-5 max-w-[1200px] m-auto">
      {aboutData ? (
        <div>
          <h1 className="text-3xl md:text-4xl font-bold my-12 flex items-center gap-2">
            {aboutData.title} <PiButterfly />
          </h1>
          <div className="mb-8 text-lg font-roboto leading-7 tracking-wide">
            {documentToReactComponents(aboutData.about)}
          </div>
          <div className="mb-4 text-lg font-roboto flex gap-12 leading-10">
            <div className="flex flex-col justify-center pb-14">
              {documentToReactComponents(aboutData.aboutSecondParagraph)}
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
      <div>
        <PiButterfly className="absolute top-20 left-[10%] rotate-45 text-[200px] z-[-1] opacity-90 text-gray-300" />
        <PiButterfly className="absolute top-[40%] right-[25%] rotate-[215deg] text-[200px] z-[-1] opacity-[0.95] text-gray-300" />
        <PiButterfly className="absolute top-[70%] left-[35%] rotate-[300deg] text-[200px] z-[-1] opacity-90 text-gray-300" />
      </div>
    </div>
  );
}
