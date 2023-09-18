import Image from "next/image";
import HeroBanner from "@sections/About/Banner";
import OurWay from "@sections/About/AboutInfi";
import Cta from "@sections/About/Cta";
import EmpoweringMinds from "@sections/About/EmpoweringMinds";
import Slc from "@assets/images/About/logo-w.png";
import Link from "next/link";
import { getAboutData } from "@sanity/sanity-utils";

export const metadata = {
  title: "Infispark - About",
  description:
    "Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business.",
};

const about = async () => {

  const aboutData = await getAboutData();

  return (
    <>
      <HeroBanner />

      <OurWay aboutData={aboutData} />

      <div className="section-container section-sp0 bg-white">
        <EmpoweringMinds aboutData={aboutData} />
      </div>

      <div className="section-container section-sp4 bg-white">
        <Cta />
      </div>

      <div className="row align-items-center p-40 m-b100 bg-dark hidden-desk">
        <div className="col-md-6 text-white">
          <Image width={150} src={Slc} alt="" />
          <h3 className="m-t20">Our new initiative</h3>
          <h6 className=" mt--10">India’s first coding boot camp for Women.</h6>
          <hr />

          <div className="m-t20">
            <Link
              href={"https://shelovescode.com"}
              className="btn-secondry bg-white button-md radius-sm">
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
