import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slc from "./../../assets/images/Home/Slc-logo.png";

const ChooseSlc = () => {
  return (
    <div className="section-area about-media-bx parallax bg-light">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 p-t80 align-items-center"
            data-wow-delay="0.8s">
            <div className="m-b20 ">
              <h4 className="title-head">Our unique initiative</h4>
              <h6>India’s first coding boot camp for Women.</h6>
              <div className="m-t20 m-b20">
                <Image width={150} src={Slc} alt="" />
              </div>
              <p>
                Infispark is a unique initiative by Infispark aims at
                encouraging more women to take up careers in IT, by upskilling
                the candidates and presenting them with fruitful placement
                opportunities.
              </p>

              <div className="m-t20">
                <Link
                  href={"https://shelovescode.com"}
                  className="btn-secondry button-md radius-sm">
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-items-center slc-bg1 "
            data-wow-delay="0.4s">
            <div className="filler"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSlc;
