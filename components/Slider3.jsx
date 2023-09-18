import React, { forwardRef } from "react";
import Slider from "react-slick";

const SliderThree = forwardRef(({ slider }, ref) => {
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
          <Slider
            ref={ref}
            {...settings}
            className=" portfolio-carousel-3 style-3 slider-one slider-sp7 arrow-none">
            {slider.map((item) => (
              <div className="slider-item" key={item.description}>
                <div className=" bg-white">
                  <p className="m-t10">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
});

export default SliderThree;
