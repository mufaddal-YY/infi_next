import Link from "next/link";
import PortableText from "react-portable-text";
import { getHomeData } from "@sanity/sanity-utils";

const Cta = async () => {
  const homeData = await getHomeData();

  return (
    <div className="section-area about-media-bx parallax bg-primary">
      <div className="container-fluid">
        {homeData.map((item) => (
          <div className="row">
            <div
              className="col-lg-6 align-items-center cta-bg1"
              data-wow-delay="0.4s"></div>
            <div
              className="col-lg-6 m-t50 align-items-center"
              data-wow-delay="0.8s">
              <div className="m-b20 p-40 text-white">
               

                <PortableText
                  className="custom-portable-text"
                  // Pass in block content straight from Sanity.io
                  content={item.cta}
                  projectId="oy08lsi5"
                  dataset="production"
                />

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
        ))}
      </div>
    </div>
  );
};

export default Cta;
