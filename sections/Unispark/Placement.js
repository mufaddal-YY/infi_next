import Image from "next/image";
import React from "react";
import Saas from "@assets/images/unispark/foundit.png";

const Placement = ({ unisparkData }) => {
  return (
    <>
      {unisparkData.map((item) => (
        <div className="section-container section-sp4 bg-white">
          <div className="container">
            <h4>Placement Partner</h4>
            <div className="d-flex justify-content">
              {item.placement.map((data) => (
                <div className="">
                  <Image width={250} height={250} src={data.logo} alt={data.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Placement;
