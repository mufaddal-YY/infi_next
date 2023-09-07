import React from "react";
import Image from "next/image";
import BannerImage from "@assets/images/About/about-boy.png";

const HeroBanner = () => {
  return (
    <div className="page-banner bg-about bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 m-b20">
            <div className=" text-center hidden">
              <h3 className="title">Who are we?</h3>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 order-lg-2">
            <div className="m-t30 text-end floating ">
              <Image src={BannerImage} alt="" />

              {/* <div className="">
                <div
                  className="banner-icon1 floating "
                  style={{ borderRadius: "50%" }}>
                  <div className=" " style={{ borderRadius: "50%" }}>
                    <svg
                      width={60}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 154 154">
                      <g
                        id="Group_28051"
                        data-name="Group 28051"
                        transform="translate(-1268 -147)">
                        <g
                          id="Group_27760"
                          data-name="Group 27760"
                          transform="translate(1268 147)">
                          <g
                            id="Ellipse_34"
                            data-name="Ellipse 34"
                            fill="#fff"
                            stroke="#1550b2"
                            stroke-width="1"
                            stroke-dasharray="7">
                            <circle cx="77" cy="77" r="77" stroke="none" />
                            <circle cx="77" cy="77" r="76.5" fill="none" />
                          </g>
                        </g>
                        <text
                          id="Academics"
                          transform="translate(1313 254)"
                          fill="#2e2e2e"
                          font-size="14"
                          font-family="Inter-SemiBold, Inter"
                          font-weight="500">
                          <tspan x="0" y="0">
                            Academics
                          </tspan>
                        </text>
                        <g id="book" transform="translate(1318.5 186.056)">
                          <path
                            id="Path_7037"
                            data-name="Path 7037"
                            d="M20.793,7.193C17.05,5.406,11.819,4.531,4.815,4.5a3.249,3.249,0,0,0-1.856.552A3.315,3.315,0,0,0,1.5,7.8V37.443a3.345,3.345,0,0,0,3.315,3.515c7.362,0,14.748.688,19.171,4.869a.426.426,0,0,0,.719-.311V10.593a1.646,1.646,0,0,0-.566-1.243,14.814,14.814,0,0,0-3.346-2.157Z"
                            transform="translate(0 0)"
                            fill="#2e2e2e"
                          />
                          <path
                            id="Path_7038"
                            data-name="Path 7038"
                            d="M47.246,5.049A3.246,3.246,0,0,0,45.39,4.5c-7,.031-12.235.9-15.978,2.693a14.846,14.846,0,0,0-3.347,2.153,1.65,1.65,0,0,0-.565,1.243V45.514a.407.407,0,0,0,.692.291c2.659-2.642,7.326-4.85,19.2-4.849a3.315,3.315,0,0,0,3.315-3.315V7.806A3.315,3.315,0,0,0,47.246,5.049Z"
                            transform="translate(2.52 0)"
                            fill="#2e2e2e"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="banner-icon2" style={{ borderRadius: "50%" }}>
                  <div className="p-t5" style={{ borderRadius: "50%" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="188"
                      height="188"
                      viewBox="0 0 188 188"
                    >
                      <g
                        id="Group_28053"
                        data-name="Group 28053"
                        transform="translate(-1042 -265)"
                      >
                        <g
                          id="Group_27757"
                          data-name="Group 27757"
                          transform="translate(1042 265)"
                        >
                          <g
                            id="Ellipse_30"
                            data-name="Ellipse 30"
                            fill="#fff"
                            stroke="#1550b2"
                            stroke-width="1"
                            stroke-dasharray="7"
                          >
                            <circle cx="94" cy="94" r="94" stroke="none" />
                            <circle cx="94" cy="94" r="93.5" fill="none" />
                          </g>
                          <ellipse
                            id="Ellipse_31"
                            data-name="Ellipse 31"
                            cx="76.5"
                            cy="77"
                            rx="76.5"
                            ry="77"
                            transform="translate(17 17)"
                            fill="#fff"
                          />
                        </g>
                        <text
                          id="Skills"
                          transform="translate(1116 407.824)"
                          fill="#1550b2"
                          font-size="16"
                          font-family="Inter-SemiBold, Inter"
                          font-weight="600"
                        >
                          <tspan x="0" y="0">
                            Skills
                          </tspan>
                        </text>
                        <g
                          id="skill-level-advanced"
                          transform="translate(1097 306.176)"
                        >
                          <path
                            id="Path_7040"
                            data-name="Path 7040"
                            d="M55.254,78.326H33V6H55.254Z"
                            transform="translate(22.636 -6)"
                            fill="#1550b2"
                          />
                          <path
                            id="Path_7041"
                            data-name="Path 7041"
                            d="M40.254,68.072H18V18H40.254Z"
                            transform="translate(9.818 4.254)"
                            fill="#1550b2"
                          />
                          <path
                            id="Path_7042"
                            data-name="Path 7042"
                            d="M25.254,60.381H3V27H25.254Z"
                            transform="translate(-3 11.945)"
                            fill="#1550b2"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="banner-icon3" style={{ borderRadius: "50%" }}>
                  <div className="p-t5" style={{ borderRadius: "50%" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="154"
                      height="154"
                      viewBox="0 0 154 154"
                    >
                      <g
                        id="Group_28055"
                        data-name="Group 28055"
                        transform="translate(-1222 -453)"
                      >
                        <g
                          id="Group_28054"
                          data-name="Group 28054"
                          transform="translate(-46)"
                        >
                          <g
                            id="Group_27761"
                            data-name="Group 27761"
                            transform="translate(1268 452.953)"
                          >
                            <g
                              id="Ellipse_36"
                              data-name="Ellipse 36"
                              transform="translate(0 0.047)"
                              fill="#fff"
                              stroke="#1550b2"
                              stroke-width="1"
                              stroke-dasharray="7"
                            >
                              <circle cx="77" cy="77" r="77" stroke="none" />
                              <circle cx="77" cy="77" r="76.5" fill="none" />
                            </g>
                            <circle
                              id="Ellipse_37"
                              data-name="Ellipse 37"
                              cx="62.5"
                              cy="62.5"
                              r="62.5"
                              transform="translate(14 14.047)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <text
                          id="Corporates"
                          transform="translate(1267 563)"
                          fill="#2e2e2e"
                          font-size="12"
                          font-family="Inter-SemiBold, Inter"
                          font-weight="600"
                        >
                          <tspan x="0" y="0">
                            Corporates
                          </tspan>
                        </text>
                        <g
                          id="briefcase"
                          transform="translate(1270.408 491.064)"
                        >
                          <path
                            id="Path_7039"
                            data-name="Path 7039"
                            d="M20.426,8.17h16.34V4.085H20.426ZM57.192,28.6V43.915a5.121,5.121,0,0,1-5.106,5.106H5.106a4.917,4.917,0,0,1-3.606-1.5A4.917,4.917,0,0,1,0,43.915V28.6H21.447V33.7a2.071,2.071,0,0,0,2.043,2.043H33.7A2.071,2.071,0,0,0,35.745,33.7V28.6Zm-24.511,0v4.085h-8.17V28.6ZM57.192,13.277V25.532H0V13.277A4.917,4.917,0,0,1,1.5,9.67a4.917,4.917,0,0,1,3.606-1.5H16.34V3.064a2.955,2.955,0,0,1,.894-2.17A2.955,2.955,0,0,1,19.4,0H37.787a2.955,2.955,0,0,1,2.17.894,2.955,2.955,0,0,1,.894,2.17V8.17H52.085a5.121,5.121,0,0,1,5.106,5.106Z"
                            fill="#2e2e2e"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-md"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
