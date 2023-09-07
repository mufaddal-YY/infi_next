"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import S1 from "@assets/images/Home/iot.svg";
import S2 from "@assets/images/Home/digitalLiteracy.svg";
import S3 from "@assets/images/Home/cloudComputing.svg";
import S4 from "@assets/images/Home/blockchain.svg";
import S5 from "@assets/images/Home/entrepreneurs.svg";

const content = [
  {
    thumb: S1,
    title: "Internet of Things",
  },
  {
    thumb: S2,
    title: "Digital Literacy",
  },
  {
    thumb: S3,
    title: "Cloud Computing",
  },
  {
    thumb: S4,
    title: "Blockchain",
  },
  {
    thumb: S5,
    title: "Entrepreneur",
  },
  {
    thumb: S1,
    title: "Internet of Things",
  },
  {
    thumb: S2,
    title: "Digital Literacy",
  },
  {
    thumb: S3,
    title: "Cloud Computing",
  },
  {
    thumb: S4,
    title: "Blockchain",
  },
  {
    thumb: S5,
    title: "Entrepreneur",
  },
];

const Testi = () => {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 6,
    slidesToScroll: -1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="testimonial-carousel style2 arrow-none ">
        {content.map((item) => (
          <div className="slider-item ">
            <div className="testimonial-bx d-flex style2">
              <div>
                <Image width={40} src={item.thumb} alt="" />
              </div>
              <div className="p-l10 p-t5">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testi;
