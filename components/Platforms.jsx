"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import P1 from "@assets/images/Home/linkedin.jpg";
import P2 from "@assets/images/Home/github.jpg";
import P3 from "@assets/images/Home/salesforce.jpg";
import P4 from "@assets/images/Home/alexa.jpg";
import P5 from "@assets/images/Home/msword.jpg";
import P6 from "@assets/images/Home/powerpoint.jpg";
import P7 from "@assets/images/Home/excel.jpg";

const content = [
  {
    thumb: P1,
  },
  {
    thumb: P2,
  },
  {
    thumb: P3,
  },
  {
    thumb: P4,
  },
  {
    thumb: P5,
  },
  {
    thumb: P6,
  },
  {
    thumb: P7,
  },
  {
    thumb: P1,
  },
  {
    thumb: P2,
  },
  {
    thumb: P3,
  },
  {
    thumb: P4,
  },
  {
    thumb: P5,
  },
  {
    thumb: P6,
  },
  {
    thumb: P7,
  },
];

const Platforms = () => {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h4>Platforms we specialize in</h4>
          <p className="mt--10 m-b30">
            Building your learning path to a tech-savvy future.
          </p>
        </div>
      </div>
      <Slider
        {...settings}
        className="testimonial-carousel style2  arrow-none ">
        {content.map((item) => (
          <div className="slider-item">
            <div className="portfolio-bx d-flex style2">
              <div>
                <Image width={150} src={item.thumb} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Platforms;
