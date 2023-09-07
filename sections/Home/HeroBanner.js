import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <div className=" section-sp2 banner-right m-t0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 alignmiddle ">
            <div className="feature-bx6" data-aos="fade-right">
              <h2 className="text-black">
                <span className="text-blue">Bridging</span> the gap between{" "}
                <span className="text-blue">Industry</span> and{" "}
                <span className="text-blue">Academia</span>
              </h2>{" "}
              <hr />
              <div className="m-t30">
                <Link
                  href={"/what-we-do"}
                  className="btn-primary button-md radius-sm">
                  See How <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
