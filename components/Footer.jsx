import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className=" section-sp4 bg-white">
      <div className="footer-top footer-style2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 m-b20">
              <div className="m-b10">
                <Image width={180} src={logo} alt="Luminosa Technologies" />
              </div>
              <p>
                201, Antares Business Center, Scheme No. 54, Agra Bombay Rd,
                Near C21 Mall, Vijay Nagar, Indore, Madhya Pradesh 452010
              </p>
              <div className=" text-left widget widget_info">
                <div className="widget">
                  <ul className="list-inline ft-social-bx">
                    <li>
                      <Link
                        href={"https://www.facebook.com/infispark"}
                        className="btn-secondry button-sm ">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://twitter.com/InfiSpark"}
                        className=" btn-secondry button-sm">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://instagram.com/infispark"}
                        className=" btn-secondry button-sm">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://linkedin.com/company/infispark"}
                        className="btn-secondry button-sm">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5 className="text-black">About</h5>
              <hr className="borderSmall" />

              <Link href={"/about-us"}>
                <p>Know us</p>
              </Link>
              <Link href={"/what-we-do"}>
                <p>Services</p>
              </Link>
              <Link href={"/how-we-do-it"}>
                <p>Our Processes</p>
              </Link>
              <Link href={"/unispark"}>
                <p>Unispark</p>
              </Link>
            </div>

            <div className="col-lg col-md-6 col-sm-6">
              <h5 className="text-black">Quick Links</h5>
              <hr className="borderSmall" />

              <Link href={"/contact-us"}>
                <p>Contact</p>
              </Link>
              <Link href={"/contact-us"}>
                <p>Apply as Trainer</p>
              </Link>
              <Link href={"/contact-us"}>
                <p>Recruitment Enquiry</p>
              </Link>
              <Link href={"https://shelovescode.com/"}>
                <p>She loves Code</p>
              </Link>
            </div>
            <div className="col-lg col-md-6 col-sm-6">
              <h5 className="text-black">Useful Links</h5>
              <hr className="borderSmall" />

              <Link href={"/"}>
                <p>Privacy Policy</p>
              </Link>
              <Link href={"/"}>
                <p>Terms and Conditions</p>
              </Link>
              <Link href={"/"}>
                <p>Refund Policy</p>
              </Link>
              
            </div>
          </div>
          <hr />
          <p className="justify-content-center text-sm-center">
            <strong>© 2023 InfiSpark. All Rights Reserved.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
