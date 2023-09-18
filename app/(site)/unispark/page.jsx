import HeroBanner from "@sections/Unispark/Banner";
import AboutProgram from "@sections/Unispark/AboutProgram";
import ProgramDetails from "@sections/Unispark/ProgramDetails";
import Certificates from "@sections/Unispark/Certificates";
import LearningPath from "@sections/Unispark/LearningPath";
import Placement from "@sections/Unispark/Placement";
import WhyChooseUs from "@sections/Unispark/WhyChooseUs";
import { getUnisparkData } from "@sanity/sanity-utils";

export const metadata = {
  title: "Infispark - Unispark",
  description:
    "Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business.",
};

const Unispark = async () => {
  const unisparkData = await getUnisparkData();

  return (
    <>
      <HeroBanner unisparkData={unisparkData} />

      <AboutProgram unisparkData={unisparkData} />

      <div className=" section-sp4 bg-white">
        <ProgramDetails unisparkData={unisparkData} />
      </div>

      <Certificates unisparkData={unisparkData} />

      <LearningPath unisparkData={unisparkData} />

      <Placement unisparkData={unisparkData} />

      <WhyChooseUs unisparkData={unisparkData} />
    </>
  );
};

export default Unispark;
