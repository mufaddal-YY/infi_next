import React from "react";
import Image from "next/image";
import WeAreImage from "@assets/images/About/wearehere.png";
const WeAreHere = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5 m-b20">
          <div className="p-30">
            <Image src={WeAreImage} alt="Infispark" />
          </div>
        </div>
        <div className="col-md-7 order-lg-2 ">
          <h3>We are here for you with all of it on the table!</h3> <hr />
          <p>
            Infispark was established with a goal to deliver the ability to
            women to learn the skills they require to succeed in the 21st
            century. We strive to develop a contemporary, interactive way of
            learning — making it engaging, adaptable, and convenient for women.
            We ought to support millions of women to unlock advanced technical
            skills and achieve their full potential through coding.
          </p>
        </div>
        {/* <div className="col-md"></div> */}
      </div>
    </div>
  );
};

export default WeAreHere;
