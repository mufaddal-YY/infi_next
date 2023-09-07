import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="section-area about-media-bx parallax bg-primary">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-6 align-items-center cta-bg1"
            data-wow-delay="0.4s">
            {/* <div className="m-t50 m-b50"></div> */}
          </div>
          <div
            className="col-lg-6 m-t50 align-items-center"
            data-wow-delay="0.8s">
            <div className="m-b20 p-40 text-white">
              <h4 className="title-head ">
                Want to transform the skilling scenario in the education
                ecosystem with Infispark?
              </h4>
              <h6>Take the First Step!</h6>

              <div className="m-t20">
                <Link
                  href={"/contact-us"}
                  className="btn-secondry button-md radius-sm white outline bg-white">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
