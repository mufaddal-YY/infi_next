import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import PreRequisites1 from "@assets/images/About/about-Cta.png";
import Slc from "@assets/images/About/logo-w.png";

const Cta = () => {
  return (
    
    <div className="container " >
      <div className="row align-items-center p-40 bg-dark hidden" style={{ borderRadius: "15px" }}>
        
        
       
        <div className="col-md-6 text-white">
          <Image width={150} src={Slc} alt="" />
          <h3 className="m-b20">Our new initiative</h3>
          <p className=" mt--10">India’s first coding boot camp for Women.</p>
          <hr />

          <div className="m-t20">
            <Link
              href={"https://shelovescode.com"}
              className="btn-secondry bg-white text-primary button-md radius-sm"
            >
              Know More
            </Link>
          </div>
        </div> 
        <div className="col-md-6 order-lg-2">
        {/* <Image className="hidden-desk" width={500} src={PreRequisites1} alt="" /> */}
        </div>
      </div>
     
      <div className="d-flex justify-content-end mt--80 hidden">
          <Image className="mt--80 hidden" width={400} src={PreRequisites1} alt="" />
        </div>
     
    </div>

    
  );
};

export default Cta;
