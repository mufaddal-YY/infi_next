import Image from "next/image";
import Link from "next/link";
import PortableText from "react-portable-text";

const ChooseSlc = ({ homeData }) => {
  return (
    <div className="section-area about-media-bx parallax bg-light">
      <div className="container">
        {homeData.map((item) => (
          <div className="row">
            <div
              className="col-lg-6 p-t80 align-items-center"
              data-wow-delay="0.8s">
              <div className="m-b20 ">
                <PortableText
                  className="custom-portable-text"
                  // Pass in block content straight from Sanity.io
                  content={item.slc}
                  projectId="oy08lsi5"
                  dataset="production"
                />

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
        ))}
      </div>
    </div>
  );
};

export default ChooseSlc;
