import Image from "next/image";
import Link from "next/link";
import ProgramImage from "@assets/images/unispark/program-details.png";
import CourseCurriculum from "@components/CourseCurriculum";
import PortableText from "react-portable-text";

const ProgramDetails = ({ unisparkData }) => {
  return (
    <>
      {unisparkData.map((item) => (
        <div className="section-container section-sp4 bg-light">
          <div className="container">
            <h4>Program Details</h4>

            <div className="row">
              <div className="col-lg-6 m-b10">
                <div className="">
                  <Image width={600} src={ProgramImage} alt="Infispark" />
                </div>
              </div>
              <div className="col-lg-6 m-b20">
                <div className="p-10 bg-white">
                  <h6 className="m-l20">Course Curriculum</h6>
                  <CourseCurriculum />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="our-partner-box1 row m-b20">
                  {item.perks.map((data) => (
                    <div className="partner-logo col-md-6">
                      <div className="d-flex">
                        <Image width={25} height={10} src={data.icon} />

                        <h6 className=" fs14 m-l10"> {data.title}</h6>
                      </div>
                      <p className="fs12">
                        <PortableText
                          className="custom-portable-text"
                          // Pass in block content straight from Sanity.io
                          content={data.description}
                          projectId="oy08lsi5"
                          dataset="production"
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-20 bg-white">
                  <h6 className="">
                    <svg
                      className="m-r5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 20.897 18.956">
                      <g
                        id="Icon_feather-briefcase"
                        data-name="Icon feather-briefcase"
                        transform="translate(-2.4 -3.9)">
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M5.083,9.9h15.53A2.686,2.686,0,0,1,23.3,12.583V22.29a2.686,2.686,0,0,1-2.683,2.683H5.083A2.686,2.686,0,0,1,2.4,22.29V12.583A2.686,2.686,0,0,1,5.083,9.9Zm15.53,13.589a1.2,1.2,0,0,0,1.2-1.2V12.583a1.2,1.2,0,0,0-1.2-1.2H5.083a1.2,1.2,0,0,0-1.2,1.2V22.29a1.2,1.2,0,0,0,1.2,1.2Z"
                          transform="translate(0 -2.117)"
                          fill="#0062ff"
                        />
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M19.907,22.856a.742.742,0,0,1-.742-.742V6.583a1.2,1.2,0,0,0-1.2-1.2H14.083a1.2,1.2,0,0,0-1.2,1.2v15.53a.742.742,0,1,1-1.484,0V6.583A2.686,2.686,0,0,1,14.083,3.9h3.883a2.686,2.686,0,0,1,2.683,2.683v15.53A.742.742,0,0,1,19.907,22.856Z"
                          transform="translate(-3.176 0)"
                          fill="#0062ff"
                        />
                      </g>
                    </svg>{" "}
                    For Business
                  </h6>
                  <p className="fs14">
                    Customized learning paths, 4x outcomes & completion rates;
                    award-winning client support.
                  </p>
                  <Link href={"/contact-us"}>
                    <div className="radius-sm bg-primary text-center p-10 text-white">
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProgramDetails;
