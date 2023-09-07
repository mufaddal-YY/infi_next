import React from "react";
import Image from "next/image";
import BannerImage from "@assets/images/Services/service-banner-girl.png";
import CtaCard from "@assets/images/home/Cta-card.svg";

const HeroBanner = () => {
  return (
    <div className="home-bnr bg-services bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-sm-12 m-t30">
            <div className="">
              <div className="text-center floating m-b20 ">
                <Image src={BannerImage} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 hidden ">
            <div className="text-center ">
              <h3 className="title">What we do?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
