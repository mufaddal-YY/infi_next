import Image from "next/image";
import PortableText from "react-portable-text";

const EmpoweringMinds = ({ aboutData }) => {
  return (
    <>
      <div className="section-container section-sp4 bg-white">
        {aboutData.map((item) => (
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12 m-b30">
                <div>
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    content={item.tagline}
                    projectId="oy08lsi5"
                    dataset="production"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-sm-12 m-t0">
                {item.sectionTwo.map((data) => (
                  <div>
                    <div className="d-flex justify-content m-t20 m-b20">
                      <div>
                        <a
                          className="iconVision">
                          <Image width={30} height={30} src={data.image} />
                        </a>
                      </div>
                      <div className="p-l20">
                        <h5>{data.title}</h5>
                      </div>
                    </div>
                    <p className="m-t0">{data.description}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmpoweringMinds;
