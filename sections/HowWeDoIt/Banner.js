import React from "react";
import Image from "next/image";
import BannerImage from "@assets/images/How We Do It/how-we-do.png";

const HeroBanner = () => {
  return (
    <div className="page-banner bg-about bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-sm-12 ">
            <div className=" text-center hidden">
              <h3 className="title">How we do it?</h3>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className=" m-t50">
              <div className=" text-center floating m-b40">
                <Image width={650} src={BannerImage} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
