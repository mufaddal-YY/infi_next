import HeroBanner from "@sections/Home/HeroBanner";
import TrendingPrograms from "@sections/Home/TrendingPrograms";
import Cta from "@components/Cta";
import ChooseSlc from "@/sections/Home/ChooseSlc";
import WhatWeOffer from "@sections/Home/WhatWeOffer";
import WhoWeWork from "@sections/Home/WhoWeWork";
import EmergingTechnologies from "@sections/Home/EmergingTechnologies";
import GallerySection from "@sections/Home/GallerySection";
import Platforms from "@components/Platforms";
import Partnerships from "@sections/Home/Partnerships";
import { getHomeData } from "@sanity/sanity-utils";

export const metadata = {
  title: "Infispark - Home",
  description:
    "Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business.",
};

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <>
      <HeroBanner />

      <div className="section-container section-sp4 bg-white">
        <TrendingPrograms homeData={homeData} />
      </div>

      <div className="section-container section-sp0">
        <WhatWeOffer homeData={homeData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <WhoWeWork />
      </div>

      <div className="section-container section-sp4 bg-tech">
        <EmergingTechnologies homeData={homeData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <GallerySection homeData={homeData} />
      </div>

      {/* <div className="section-container section-sp4 bg-light">
         <Reviews />
      </div> */}

      <div className="section-container section-sp0 bg-white">
        <Platforms homeData={homeData} />
      </div>

      <div className="section-container section-sp0 m-t100 bg-white">
        <ChooseSlc homeData={homeData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <Partnerships homeData={homeData} />
      </div>

      <div className="section-container section-sp0 bg-white">
        <Cta />
      </div>
    </>
  );
}
