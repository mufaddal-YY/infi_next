import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";

const SliderHome = forwardRef(({ slider }, ref) => {
  const settings = {
    infinite: true,
    speed: 500,
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

  return (
    <>
      <div className="">
        <div className="slider-item">
          <div className="mt--30">
            <Slider
              ref={ref}
              {...settings}
              className=" portfolio-carousel-3 style-2 slider-one slider-sp0 arrow-none">
              {slider.map((item) => (
                <div className="slider-item" key={item.title}>
                  <div className=" bg-white counter-card1 m-b20">
                    <p className="m-t10">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
});

export default SliderHome;
