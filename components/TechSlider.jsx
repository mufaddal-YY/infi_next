"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import S1 from "@assets/images/Home/cyber.svg"
import S2 from "@assets/images/Home/arvr.svg"
import S3 from "@assets/images/Home/financial.svg"
import S4 from "@assets/images/Home/machinelearning.svg"


const content = [
  {
    thumb: S1,
    title: "Cyber Security",
    
    
  },
  {
    thumb: S2,
    title: "AR/VR",
   
    
  },
  {
    thumb: S3,
    title: "Financial Literacy",
  
    
  },
  {
    thumb: S4,
    title: "Machine Learning",
  
    
  },
  {
    thumb: S1,
    title: "Cyber Security",
    
    
  },
  {
    thumb: S2,
    title: "AR/VR",
   
    
  },
  {
    thumb: S3,
    title: "Financial Literacy",
  
    
  },
  {
    thumb: S4,
    title: "Machine Learning",
  
    
  },
 
];

const Testi = () => {
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
        {content.map((item) => (
          <div className="slider-item">
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
