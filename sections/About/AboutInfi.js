import React from "react";
import Image from "next/image";
import About from "@assets/images/About/about-infispark.png";
import PortableText from "react-portable-text";

const OurWay = ({ aboutData }) => {
  return (
    <>
      <div className="section-container section-sp4 bg-white">
        {aboutData.map((item) => (
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
                    <PortableText
                      className="custom-portable-text"
                      // Pass in block content straight from Sanity.io
                      content={item.aboutSection}
                      projectId="oy08lsi5"
                      dataset="production"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-bx6 m-20 bg-gray">
              <p>
                <PortableText
                  className="custom-portable-text"
                  // Pass in block content straight from Sanity.io
                  content={item.blockSection}
                  projectId="oy08lsi5"
                  dataset="production"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurWay;
