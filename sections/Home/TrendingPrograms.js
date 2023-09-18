"use client";
import React, { useRef } from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import SliderImage from "./../../assets/images/Home/roundSlider.webp";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import SliderTwo from "./../../components/Slider2";
import SliderHome from "../../components/SliderHome";
import SliderThree from "../../components/Slider3";

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

const TrendingPrograms = ({ homeData }) => {
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

  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  const handleNextSlide = () => {
    slider1.current.slickNext();
    slider2.current.slickNext();
    slider3.current.slickNext();
  };

  return (
    <div className="container">
      {homeData.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-sm-12 col-lg-5 text-center">
            <div className="circle-container">
              <svg
                viewBox="0 0 100 100"
                className="dashes rotate zi100"
                fill="none"
                stroke="blue"
                strokeDasharray="2 4 4 3 2 3 8 2 3 5">
                <circle r="50" cx="50" cy="50"></circle>
              </svg>
              <div className="image-container">
                <Image width="100%" src={SliderImage} alt="" />
              </div>
              <div className="mt--30 p-20 ">
                <div className="blurButton " onClick={handleNextSlide}>
                  <BsArrowRight className="arrow" />
                </div>
                <div
                  className="code-icon bg-white feature-bx1  "
                  style={{ borderRadius: "8px" }}>
                  <p className="p-10">Exactly what are we up to?</p>
                </div>
                <SliderHome slider={item.slider} ref={slider1} />
              </div>
            </div>
          </div>
          <div className="col-sm"></div>

          <div className="col-sm-12 col-lg-6 order-lg-2 m-t20 hidden">
            <h4 className="text-blue">{item.sectionHead}</h4>

            <hr />
            <h6>
              Numbers are confirmation of words <BsArrowRight />
            </h6>
            <div className="d-flex justify-content-between row m-t20 m-b0">
              {item.stats.map((stat) => (
                <div className="counter-style-3 col-6 col-md-3 text-center" key={stat.description}>
                  <div className="text-primary">
                    <CountUp start={0} end={stat.number} />
                    <span>+</span>
                  </div>
                  <span className="counter-text">{stat.description}</span>
                </div>
              ))}
            </div>
            <SliderTwo slider={item.slider} ref={slider2} />
          </div>
          <div className="col-sm-12 col-lg-6 order-lg-2 m-t20 hidden-desk">
            <SliderThree slider={item.slider} className="m-b20" ref={slider3} />
            <h4 className="text-blue">{item.sectionHead}</h4>
            <hr />
            <h6>
              Numbers are confirmation of words <BsArrowRight />
            </h6>
            <div className="d-flex justify-content-between row m-t20 m-b0">
              {item.stats.map((stat) => (
                <div className="counter-style-3 col-6 col-sm-3 text-center" key={stat.description}>
                  <div className="text-primary">
                    <CountUp start={0} end={stat.number} />
                    <span>+</span>
                  </div>
                  <span className="counter-text">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingPrograms;
