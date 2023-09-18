import Head from "next/head";
import HeroBanner from "@sections/Services/Banner";
import Cta from "@components/Cta";
import Programs from "@sections/Services/Programs";
import CaseStudy from "@sections/Services/CaseStudy";
import { getWhatWeDoData } from "@sanity/sanity-utils";

export const metadata = {
  title: "Infispark - What we do",
  description:
    "Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business.",
};

const Services = async () => {
  const whatWeDoData = await getWhatWeDoData();
  console.log(whatWeDoData)
  return (
    <>
      <HeroBanner />

      <div className=" section-sp4 bg-white">
        <Programs whatWeDo={whatWeDoData} />
      </div>

      <div className=" section-sp4 bg-white">
        <CaseStudy whatWeDo={whatWeDoData} />
      </div>

      <div className=" section-sp4 bg-white">
        <Cta />
      </div>
    </>
  );
};

export default Services;
