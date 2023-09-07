"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Corporate from "./../../assets/images/Home/corporate-clients.jpg";
import Govt from "./../../assets/images/Home/government partners.png";
import University from "./../../assets/images/Home/university partners.png";
import Ngo from "./../../assets/images/Home/NGO partners.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GallerySection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      console.log("Slick has initialized");
    },

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <>
      
          <div className="container style-2 ">
            <div className="row">
              <div className="col-md-4 bg-water">
                <div className="align-items-center m-t50 ">
                  <h4>Our <br/> Partnerships.</h4>
                  <p>
                    Providing our services to some of the world's premium
                    institutions.
                  </p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <div
                    className="slick-arrow"
                    onClick={() => sliderRef.current.slickPrev()}
                    style={{
                      width: 60,
                      height: 60,
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <FaLongArrowAltLeft />
                  </div>
                  <div
                    className="slick-arrow"
                    onClick={() => sliderRef.current.slickNext()}
                    style={{
                      width: 60,
                      height: 60,
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className=" portfolio-carousel-3 style-2 slider-one slider-sp0 arrow-none"
                >
                  <div className="slider-item ">
                  <Image  src={Corporate} alt="" />
                  </div>
                  <div className="slider-item ">
                  <Image  src={Govt} alt="" />
                  </div>
                  <div className="slider-item ">
                  <Image  src={University} alt="" />
                  </div>
                  <div className="slider-item ">
                  <Image  src={Ngo} alt="" />
                  </div>
                  
                </Slider>
              </div>
            </div>
          </div>
       
    </>
  );
};

export default GallerySection;
