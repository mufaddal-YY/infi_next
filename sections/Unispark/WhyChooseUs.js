import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <>
      <div className="section-container section-sp4 bg-choose ovbl-dark">
        <div className="container  ">
          <div
            className="text-center align-items-center m-tb80"
            style={{ padding: "15px" }}
          ></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row m-sm-t0 mt--80">
          <div className="col-md"></div>
          <div className="col-md-5 zi10">
            <div className="feature-bx5">
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  viewBox="0 0 76 76"
                >
                  <g
                    id="Group_28051"
                    data-name="Group 28051"
                    transform="translate(-182.5 -7836.131)"
                  >
                    <g
                      id="Rectangle_906"
                      data-name="Rectangle 906"
                      transform="translate(182.5 7836.131)"
                      fill="#fff"
                      stroke="#707070"
                      stroke-width="1"
                    >
                      <rect width="76" height="76" rx="9" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="75"
                        height="75"
                        rx="8.5"
                        fill="none"
                      />
                    </g>
                    <g id="university" transform="translate(203.042 7857.838)">
                      <g id="Group_27866" data-name="Group 27866">
                        <path
                          id="Path_7079"
                          data-name="Path 7079"
                          d="M17.458,0,34.916,6.983V9.311H32.588a1.08,1.08,0,0,1-.373.818,1.254,1.254,0,0,1-.882.346H3.583a1.254,1.254,0,0,1-.882-.346,1.08,1.08,0,0,1-.373-.818H0V6.983ZM4.655,11.639H9.311V25.605h2.328V11.639h4.655V25.605h2.328V11.639h4.655V25.605h2.328V11.639h4.655V25.605h1.073a1.254,1.254,0,0,1,.882.346,1.08,1.08,0,0,1,.373.818v1.164H2.328V26.769a1.08,1.08,0,0,1,.373-.818,1.254,1.254,0,0,1,.882-.346H4.655ZM33.661,29.1a1.254,1.254,0,0,1,.882.346,1.08,1.08,0,0,1,.373.818v2.328H0V30.261a1.08,1.08,0,0,1,.373-.818,1.254,1.254,0,0,1,.882-.346Z"
                          fill="#1550b2"
                        />
                      </g>
                    </g>
                  </g>
                </svg>  For Institutions
              </h6>
              <hr />
              <ul className="list-check">
                <li>Inclusive Azure subscription with Lab services.</li>
                <li>Discounts on certifications.</li>
                <li>
                  Association with InfiSpark as Microsoft Global Training
                  Partner.
                </li>
                <li>
                  Placement opportunities for students after 80% completion of
                  training.
                </li>
                <li>
                  InfiSpark has collaborated with monster.com and multiple
                  industry leader under Future Ready Ready Program (optional).
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md"></div>

          <div className="col-md-5 zi10">
            <div className="feature-bx5">
              <h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  viewBox="0 0 76 76"
                >
                  <g
                    id="Rectangle_904"
                    data-name="Rectangle 904"
                    fill="#fff"
                    stroke="#707070"
                    stroke-width="1"
                  >
                    <rect width="76" height="76" rx="9" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="75"
                      height="75"
                      rx="8.5"
                      fill="none"
                    />
                  </g>
                  <g id="student" transform="translate(14.667 20)">
                    <path
                      id="Path_7078"
                      data-name="Path 7078"
                      d="M46.667,33.542a1.458,1.458,0,0,1-2.917,0V14.356L27.663,22.422a9.579,9.579,0,0,1-4.329.911A9.579,9.579,0,0,1,19,22.422L1.777,13.809Q0,12.9,0,11.644T1.777,9.525L19,.911A9.579,9.579,0,0,1,23.333,0a9.579,9.579,0,0,1,4.329.911L44.89,9.525a2.768,2.768,0,0,1,1.732,1.914.264.264,0,0,1,.046.182Zm-17.546-8.2,8.8-4.421v6.426q0,1.96-4.261,3.35a33.535,33.535,0,0,1-10.322,1.39,33.535,33.535,0,0,1-10.322-1.39Q8.75,29.3,8.75,27.344V20.918l8.8,4.421a13.683,13.683,0,0,0,5.788.911A13.683,13.683,0,0,0,29.121,25.339Z"
                      transform="translate(0 0)"
                      fill="#1550b2"
                    />
                  </g>
                </svg>  For Students
              </h6>{" "}
              <hr />
              <ul className="list-check">
                <li>Live classes.</li>
                <li>
                  Enrolment to Future Ready Program, initiative by Microsoft.
                </li>
                <li>
                  Hands-on-learning experience and 150+ hours practical
                  learning.
                </li>
                <li>
                  Certified industry experts on board to train the students.
                </li>
                <li>Job Assistance.</li>
              </ul>
            </div>
          </div>
          <div className="col-md"></div>
        </div>    
        <div className="text-center">
        <Link href={"/contact-us"} className="button-lg btn-primary radius-sm ">Contact Us  <BsArrowRight className="arrow" /></Link>
          </div>   

      </div>
    </>
  );
};

export default WhyChooseUs;
