import Image from "next/image";
import BannerImage from "@assets/images/About/about-boy.png";

const HeroBanner = () => {
  return (
    <div className="page-banner bg-about bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 m-b20">
            <div className=" text-center hidden">
              <h3 className="title">Who are we?</h3>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 order-lg-2">
            <div className="m-t30 text-end floating ">
              <Image src={BannerImage} alt="" />
            </div>
          </div>

          <div className="col-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
