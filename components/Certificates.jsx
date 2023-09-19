"use client";
import Slider from "react-slick";
import Image from "next/image";
import S1 from "./../assets/images/unispark/1.png";
import S2 from "./../assets/images/unispark/2.png";
import S3 from "./../assets/images/unispark/3.png";
import S4 from "./../assets/images/unispark/4.png";

const content = [
  {
    thumb: S1,
  },
  {
    thumb: S2,
  },
  {
    thumb: S3,
  },
  {
    thumb: S4,
  },
];

const Testi = ({data}) => {
  const settings = {
    dots: true,
    loop: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    speed: 2200,
    autoplaySpeed: 1000,
    lazyLoad: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
        className="testimonial-carousel style2  arrow-none ">
        {data.map((item) => (
          <div className="slider-item text-center">
            <div className="text-center p-20 ">
              <Image width={600} height={500} src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testi;
