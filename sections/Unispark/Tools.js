"use client"
import Image from "next/image";
import React from "react";
import Saas from "@assets/images/unispark/SAAS-Logo.png";
import Slider from "react-slick";
const content = [
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
  {
    logo: Saas,
  },
]

const Tools = () => {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
     <div className="section-container section-sp4 bg-white">
        <div className="container">
          <h4>Tools Covered</h4>
      <Slider
        {...settings}
        className=" slider-sp07 owl-btn-1 ovb-middle owl-btn-center-lr"
      >
        {content.map((item) => (
          <div className="slider-item">
            <div className="p-10">
              <Image width={100} src={item.logo} alt="Infispark" />
            </div>
          </div>
        ))}
      </Slider></div></div>
    </>
  );
};

export default Tools;
