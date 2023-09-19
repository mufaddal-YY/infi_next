import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PortableText from "react-portable-text";

const WhyChooseUs = ({ unisparkData }) => {
  return (
    <>
      <div className="section-container section-sp4 bg-choose ovbl-dark">
        <div className="container  ">
          <div
            className="text-center align-items-center m-tb80"
            style={{ padding: "15px" }}></div>
        </div>
      </div>

      <div className="container-fluid">
        {unisparkData.map((item) => (
          <div className="row m-sm-t0 mt--80">
            <div className="col-md"></div>
            {item.benefits.map((data) => (
              <div className="col-md-5 zi10">
                <div className="feature-bx5">
                  <h6>
                    <Image className="m-r10" width={30} height={30} src={data.icon} />
                    {data.title}
                  </h6>
                  <hr />
                  <PortableText
                    className="custom-portable-text"
                    // Pass in block content straight from Sanity.io
                    content={data.description}
                    projectId="oy08lsi5"
                    dataset="production"
                  />
                </div>
              </div>
            ))}
            

            
            <div className="col-md"></div>
          </div>
        ))}
        <div className="text-center">
          <Link
            href={"/contact-us"}
            className="button-lg btn-primary radius-sm ">
            Contact Us <BsArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
