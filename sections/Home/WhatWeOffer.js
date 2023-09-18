import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = ({ homeData }) => {
  return (
    <>
      <div className="section-container section-sp2 bg-era">
        <div className="container  ">
          <div
            className="text-center align-items-center m-tb100"
            style={{ padding: "15px" }}></div>
        </div>
      </div>

      <div className="container-fluid">
        {homeData.map((item) => (
          <div className="row m-sm-t0 mt--80">
            <div className="col-md"></div>
            <div className="col-md-8 feature-bx5">
              <div className="text-center m-b20">
                <h4>What we offer</h4>
                <p>
                  Our services and programs unlock new opportunities for
                  education advancement.
                </p>
              </div>

              <div className="our-partner-box bg-white text-center row">
                {item.services.map((data) => (
                  <div className="partner-logo col-md-4" key={data.title}>
                    <div className="text-center hover-blue">                
                        <Image
                          height={50}
                          width={50}
                          src={data?.icon}
                          alt={data?.title}
                        />
                      <p className="m-t10">{data.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href={"/what-we-do"}
                  className="btn-primary button-md radius-sm">
                  Explore our Services
                </Link>
              </div>
            </div>
            <div className="col-md"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatWeOffer;
