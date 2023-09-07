import React from "react";
import Image from "next/image";
import About from "@assets/images/About/about-infispark.png";

const OurWay = () => {
  return (
    <>
      <div className="section-container section-sp4 bg-white">
        <div className="container  ">
          <div className="row">
            <div className="col-lg-6 col-sm-12 m-b20">
              <div className="">
                <Image width="100%" src={About} alt="Infispark" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div>
                <h4 className="text-blue">About Infispark</h4>
                <h6 className="mt--10">Empowering Minds</h6> <hr />
                <p>
                  Infispark was founded in 2017 with the mission to empower the
                  skilling ecosystem. Over the years, we have grown as a
                  reliable services organization providing consultancy and
                  training for education and corporate customers. We focus on
                  the latest tools and technologies while engaging with
                  communities to build strategic engagement. We are focusing on
                  the latest 21st-century skills like digital literacy,
                  financial literacy, and nano entrepreneurship, as well as
                  technologies like cyber security, cloud computing, machine
                  learning, and more. Infispark excels in expanding outreach and
                  advancing broad and depth-focused CSR activities.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-bx6 m-20 bg-gray">
            <p>
              At Infispark, we are trying to bridge the gap between industry and
              academia. <br /> To enhance our society with equal opportunities,
              we prioritize improving education and employment outcomes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWay;
