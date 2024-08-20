import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AnimatedButterfly from "../components/Butterfly";
import AnimatedList from "../components/animations/AboutTextAnimation";
import AnimatedTitleAnimation from "../components/animations/AboutTextAnimation";
import { getAboutData } from "../../lib/api";
import WaveSvg from "@/assets/svg/WaveBlack";

export default async function AboutPage() {
  const aboutData = await getAboutData();
  const userPosibilites = documentToReactComponents(
    aboutData?.aboutSecondParagraph
  );

  const aboutTitle = aboutData?.title;

  return (
    <div className="p-5 max-w-[1200px] m-auto flex items-center justify-center">
      {aboutData ? (
        <div>
          <div className="flex items-center justify-center mx-auto px-auto mt-24 mb-16 text-gray-700">
            <div className="h-[2px] w-16 sm:w-32 md:w-64 mr-4 bg-gradient-to-l from-gray-300 to-transparent"></div>
            <div className="text-3xl text-center md:text-4xl font-bold">
              ABOUT TIPSTAGRAM
            </div>
            <div className="h-[2px] w-16 sm:w-32 md:w-64  ml-4 bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="mb-8 text-lg font-roboto leading-7 tracking-wide">
            <AnimatedList text={documentToReactComponents(aboutData?.about)} />
          </div>
          <div className="mb-4 text-lg font-roboto flex gap-12 leading-10">
            <div className="flex flex-col justify-center pb-14 text-gray-900">
              <AnimatedList text={userPosibilites} />
            </div>
            {aboutData.imageUrl && (
              <div className="relative rounded-lg shadow-md border-[1px] h-max-content border-gray-400 shadow-slate-800 overflow-hidden group transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave">
                <div className="overflow-hidden">
                  <Image
                    src={aboutData.imageUrl}
                    alt="About us"
                    width={600}
                    height={400}
                    className="w-full h-auto "
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b h-max-content from-white to-transparent opacity-30 transition-transform duration-3000 ease-in-out transform group-hover:translate-y-0 animate-wave"></div>
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
