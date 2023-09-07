import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";

const content = [
  {
    title: "Skill Building Workshop",
    description:
      "With a strong emphasis on industry 4.0, we conduct the workshops specially designed to enhance the skills of participants. The workshop gets conducted both online and offline to cater to the needs of a diverse audience. The practical approach of the workshop will focus on hands-on experience and real-world examples, and provide participants with an understanding of the latest trends and technologies.",
  },
  {
    title: "Financial Literacy",
    description:
      "To help individuals develop an understanding of basic financial concepts and skills, our in-house designed curriculum is tailored to serve both rural and urban Indian audiences with a focus on the latest financial trends, to provide individuals with up-to-date information and knowledge about the financial landscape.",
  },
  {
    title: "Product-Focused Training",
    description:
      "A training program focuses on providing participants with the necessary information and skills on trending and emerging products and tech with the necessary information and skills to help them understand the products better and use them more effectively. To stay ahead of the curve in today's fast-paced technological landscape, our program includes the new products in the curriculum to ensure that participants are aware of the latest technologies and products in the market.",
  },
  {
    title: "Soft Skills",
    description:
      "A 360-degree development program designed to bridge the communication gap thus catering to build Bharat 2.0. The program focuses on developing a set of personal attributes, such as communication skills, teamwork, leadership, adaptability, and critical thinking, which are essential for a successful career, and on improving overall personality development by providing candidates with the necessary tools and techniques to communicate effectively in different situations.",
  },
  {
    title: "Employability",
    description:
      "A comprehensive program to equip individuals with the necessary skills to become job ready. The program covers conventional and new-age approaches to get knowledge of various applications like Word, Excel, and PowerPoint etc. In addition, it also focuses on the skills such as the art of resume building along with the use of platforms like LinkedIn to find a better job.",
  },
  {
    title: "Nano-Entrepreneurship",
    description:
      "An educational initiative designed to help aspiring entrepreneurs learn start-up jargons and acquire the skills and knowledge necessary scale business. The program provide education, covering ideas about running small and medium-scale businesses in a small town. We are empowering people from the MSME sector by providing information about government schemes for entrepreneurs, and enhancing their knowledge to earn and build a strong nation.",
  },
];

const SliderHome = forwardRef((props, ref) => {
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

  // const slider1 = useRef();

  // const handleNextSlide = () => {
  //   slider1.current.slickNext();
  // };

  return (
    <>
      <div className="">
        <div className="slider-item">
          <div className="mt--30">
            <Slider
              {...props}
              ref={ref}
              {...settings}
              className=" portfolio-carousel-3 style-2 slider-one slider-sp0 arrow-none">
              {content.map((item) => (
                <div className="slider-item">
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
