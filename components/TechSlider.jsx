"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testi = ({skills}) => {
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
      <Slider
        {...settings}
        className="testimonial-carousel style2  arrow-none "
      >
        {skills.map((item) => (
          <div className="slider-item" key={item.title}>
            <div className="testimonial-bx d-flex style2">
              <div>
              <Image height={40} width={40} src={item.image} alt="" />
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
