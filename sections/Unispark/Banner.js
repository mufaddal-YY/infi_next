import Image from "next/image";
import BannerImage from "@assets/images/unispark/bannerImage.png";
import MSicon from "@assets/images/unispark/ms-tag.png";

const Banner = ({ unisparkData }) => {
  return (
    <>
      {unisparkData.map((item) => (
        <div className="bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 pm-20 m-t20">
                <div className="text-left">
                  <Image width={80} height={80} src={item.bannerImage} alt="" />
                  <h2 className="p-t10"> {item.bannerHead}</h2>
                  <p className="mt--10">
                    {item.bannerTag}
                  </p>
                </div>
              </div>
              <div className="col-md-7 order-lg-2 hidden">
                <div className=" m-t50">
                  <div className="thumbnail justify-content-end">
                    <Image width={600} src={BannerImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
