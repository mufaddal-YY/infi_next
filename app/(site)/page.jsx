import Head from "next/head";
import HeroBanner from "@sections/Home/HeroBanner";
import TrendingPrograms from "@sections/Home/TrendingPrograms";
import Cta from '@components/Cta'
import ChooseSlc from "@/sections/Home/ChooseSlc";
import WhatWeOffer from "@sections/Home/WhatWeOffer";
import WhoWeWork from "@sections/Home/WhoWeWork";
import EmergingTechnologies from '@sections/Home/EmergingTechnologies'
import GallerySection from "@sections/Home/GallerySection";
import Platforms from '@components/Platforms'
import Partnerships from '@sections/Home/Partnerships'

export default function Home() {
  return (
    <>
      <Head>
        <title>Infispark - Home</title>
        <meta
          name="description"
          content="Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner />

      <div className="section-container section-sp4 bg-white">
        <TrendingPrograms />
      </div>

      <div className="section-container section-sp0">
        <WhatWeOffer />
      </div>

      <div className="section-container section-sp4 bg-white">
        <WhoWeWork />
      </div>

      <div className="section-container section-sp4 bg-tech">
         <EmergingTechnologies />
      </div>

      <div className="section-container section-sp4 bg-white">
        <GallerySection />
      </div>

      {/* <div className="section-container section-sp4 bg-light">
         <Reviews />
      </div> */}

      <div className="section-container section-sp0 bg-white">
         <Platforms />
      </div>

      <div className="section-container section-sp0 m-t100 bg-white">
        <ChooseSlc />
      </div>

      <div className="section-container section-sp4 bg-white">
         <Partnerships />
      </div>

      <div className="section-container section-sp0 bg-white">
         <Cta />
      </div>

    </>
  );
}
