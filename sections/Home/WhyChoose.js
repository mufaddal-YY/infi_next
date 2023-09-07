import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhyChooseSlc from "../../assets/images/Home/why-choose.webp";
import LiveClass from "./../../assets/images/Home/live-classes.png";
import Projects from "./../../assets/images/Home/projects.png";
import Interview from "./../../assets/images/Home/interview.png";
import Career from "./../../assets/images/Home/career.png";
import Assistance from "./../../assets/images/Home/assistance.png";
import Mentorship from "./../../assets/images/Home/mentorship.png";

const WhyChoose = () => {
  
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 order-lg-2">
          <h3>
            Why Choose <span> <strong>Infispark?</strong>
            </span>
          </h3>
          <h6 className="mt--10 m-b20">Take your coding career to the next level.</h6>
          <div className="row text-center">
            <div className="col-md-6 col-6  align-items-center m-t20">
              <div >
                <Image width={60} src={LiveClass} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>                 
                  <small>Live Classes</small>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-6  align-items-center m-t20">
              <div >
                <Image width={60}  src={Projects} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>
                 
                  <small>Live Projects</small>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-6   align-items-center m-t20">
              <div >
                <Image width={60} src={Interview} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>
                 
                  <small>Interview preparation</small>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-6   align-items-center m-t20">
              <div>
                <Image width={60} src={Career} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>                 
                  <small>Career Counselling</small>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-6   align-items-center m-t20">
              <div >
                <Image width={60} src={Assistance} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>                 
                  <small>Job Assistance</small>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-6   align-items-center m-t20">
              <div >
                <Image width={60} src={Mentorship} alt="Infispark" />
              </div>
              <div className="m-l10 m-t10">
                <p>                 
                  <small>One on One Mentoring</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-5">
          <div className="p-30">
            
            <Image src={WhyChooseSlc} alt="Infispark" />
            <div className=" bg-white floating counter-card1 m-b20">
                <h3>4.5 LPA</h3>
                <p className="mt--20">or more</p>
              </div>
          </div>
        </div><div className="col-md"></div>
      </div>
    </div>
  );
};

export default WhyChoose;
