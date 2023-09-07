import React from "react";
import Image from "next/image";
import Link from "next/link";
import RiskBanner from "@assets/images/About/empoweringminds.png";
import Flexible from "@assets/images/Isa/flexible.svg";
import Norisk from "@assets/images/Isa/no-risk.svg";
import { FaRegEye } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";

import IncomeShare from "@assets/images/Isa/income-share.svg";

const EmpoweringMinds = () => {
  return (
    <>
      <div className="section-container section-sp4 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 m-b30">
              <h4 className="m-b20">
                Empowering minds! <br />
                Empowering young India!
              </h4>
              <div className="text-left">
                <Image
                  className=""
                  width="100%"
                  src={RiskBanner}
                  alt="Infispark"
                />
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 m-t0">
              <div className="d-flex justify-content">
                <div>
                  
                  <a className="btn-secondry fs22">
                    <FaRegEye />
                  </a>
                </div>

                <div className="p-l20">
                  <h5>Vision</h5>
                </div>
              </div>
              <p className="m-t20">
                We are determined to empower India by nurturing innovation and
                excellence in young minds.
              </p>
              <hr />
              <div className="d-flex justify-content">
                <div>
                  
                  <a className="btn-secondry fs22">
                    <BiCurrentLocation />
                  </a>
                </div>

                <div className="p-l20">
                  <h5>Mission</h5>
                </div>
              </div>
              <p className="m-t20">
              We are here to upskill the youth of tomorrow and bridge the gap between academia and Industry.
              </p>
              <hr />
              <div className="d-flex justify-content">
                <div>
                  
                  <a className="btn-secondry fs22">
                    <FaRegHandshake />
                  </a>
                </div>

                <div className="p-l20">
                  <h5>Values</h5>
                </div>
              </div>
              <p className="m-t20">
              Integrity, Accountability, and Innovation form the three pillars of Infispark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpoweringMinds;
