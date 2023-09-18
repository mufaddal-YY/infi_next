import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortableText from "react-portable-text";


const CaseStudy = ({ whatWeDo }) => {
  return (
    <>
      <div className="container">
        {whatWeDo.map((item) => (
          <div className="row">
            {item.caseStudies.map((data) => (
              <div className="col-lg-4 col-sm-12" key={data.title}>
                <div className="feature-bx5">
                  <Image width={150} height={80} src={data.logo} alt="" />
                  <h6 className="text-blue">{data.title}</h6> <hr />
                  <p>
                    <PortableText
                      className="custom-portable-text"
                      // Pass in block content straight from Sanity.io
                      content={data.description}
                      projectId="oy08lsi5"
                      dataset="production"
                    />
                  </p>
                  <div className="m-t20">
                    <Link
                      href={data.link}
                      className="btn-secondry button-md radius-sm"
                      target="_blank">
                      Download Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseStudy;
