import Image from "next/image";
import { getHomeData } from "@sanity/sanity-utils";

const  WhoWeWork = async () => {
  const homeData = await getHomeData();

  return (
    <>
      <div className="container">
        {homeData.map((item) => (
          <div className="row" key={item._id}>
            <div className="text-center m-b20">
              <h4>Who we work with</h4>
            </div>
            {item.whowework.map((data) => (
              <div className="col-lg-3 col-sm-6 col-md-6" key={data.title}>
                <div className="feature-bx3 p-t20 style-1 m-b20">
                  <div className="m-b20">
                    <Image height={200} width={400} src={data.image} alt="" />
                  </div>
                  <div className="portfolio-info">
                    <h6 className="title">
                      <h6>{data.title}</h6>
                    </h6>
                    <p className="fs14">{data.description}</p>
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

export default WhoWeWork;
