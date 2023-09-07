import Image from "next/image";
import BannerImage from "@assets/images/unispark/bannerImage.png";
import MSicon from "@assets/images/unispark/ms-tag.png";

const Banner = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 pm-20 m-t20">
              <div className="text-left">
                <Image width={80} src={MSicon} alt="" />
                <h2 className="p-t10"> Unispark</h2>
                <p className="mt--10">
                  Build a rewarding career with industry recognized
                  certification.
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
    </>
  );
};

export default Banner;
