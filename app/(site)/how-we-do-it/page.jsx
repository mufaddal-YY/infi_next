import HeroBanner from "@sections/HowWeDoIt/Banner";
import ProvenApproach from "@sections/HowWeDoIt/ProvenApproach";
import WhyChoose from "@sections/HowWeDoIt/WhyChoose";
import CtaUni from "@sections/HowWeDoIt/CtaUni";
import Link from "next/link";
import { getHowWeDoData } from "@sanity/sanity-utils";

export const metadata = {
  title: "Infispark - How we do it",
  description:
    "Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business.",
};

const about = async () => {
  const HowWeDoData = await getHowWeDoData();

  return (
    <>
      <HeroBanner />

      <div className="section-container section-sp4 bg-white">
        <ProvenApproach HowWeDoData={HowWeDoData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <WhyChoose HowWeDoData={HowWeDoData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <CtaUni />
      </div>

      <div className="row align-items-center p-40 bg-primary hidden-desk">
        <div className="col-md-6 text-white">
          <h3 className="m-t20">Unispark</h3>
          <h6 className=" m-t20">
            Acquire authentic and in-demand technical skills and gain hands-on
            experience through our Azure Certification programs.
          </h6>
          <hr />

          <div className="m-t20">
            <Link
              href={"/unispark"}
              className="btn-secondry bg-white text-blue button-md radius-sm">
              Know More
            </Link>
          </div>
        </div>
        <div className="col-md-6 order-lg-2"></div>
      </div>
    </>
  );
};

export default about;
