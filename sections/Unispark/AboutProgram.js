import Image from "next/image";
import AboutImage from "@assets/images/unispark/about-program.png";
import PortableText from "react-portable-text";

const AboutProgram = ({ unisparkData }) => {
  return (
    <>
      {unisparkData.map((item) => (
        <div className="section-container section-sp4 bg-white">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6">
                <div className=" m-b20">
                  <Image
                    width={600}
                    height={400}
                    src={item.sectionImage}
                    alt="Infispark"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h4 className="">About the Program</h4>
                  <p className="mt--10 text-blue fw6">
                    Help your students develop skills for real career growth.
                  </p>
                  <hr />
                  <p>
                    <PortableText
                      className="custom-portable-text"
                      // Pass in block content straight from Sanity.io
                      content={item.sectionDescription}
                      projectId="oy08lsi5"
                      dataset="production"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutProgram;
