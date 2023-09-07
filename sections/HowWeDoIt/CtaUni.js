import React from "react";
import Image from "next/image";
import PreRequisites1 from "@assets/images/How We Do It/ctaUni.png";
import Slc from "@assets/images/About/logo-w.png";
import Link from "next/link";

const CtaUni = () => {
  return (
    <>
      <div className="container hidden m-t80">
        <div className="d-flex p-0 bg-primary hidden "  style={{ borderRadius: "15px" }}>
          <div className="flex-end text-white p-30">
            <h3 className="m-t0">Unispark</h3>
            <h6 className=" m-t20">
              Acquire authentic and in-demand technical skills and gain hands-on
              experience through our Azure Certification programs.
            </h6>

            <hr />

            <div className="m-t20">
              <Link
                href={"/unispark"}
                className="btn-secondry text-dark bg-white button-md radius-sm">
                Know More
              </Link>
            </div>
          </div>
          <div className="flex-end mt--80 hidden hidden-tab">
            <Image
              height={750}
              className=" hidden uniCta zi10"
              src={PreRequisites1}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaUni;
