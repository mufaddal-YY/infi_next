"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Numbers from "./../../assets/images/Home/number.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Lightbox from "./../../components/Lightbox";

import G1 from "./../../assets/images/Home/gallery1.jpg";
import G2 from "./../../assets/images/Home/gallery2.jpg";
import G3 from "./../../assets/images/Home/gallery3.jpg";
import G4 from "./../../assets/images/Home/gallery4.jpg";
import G5 from "./../../assets/images/Home/gallery5.jpg";
import G6 from "./../../assets/images/Home/Ideation Camp and Innovation Hub.jpg";
import G7 from "./../../assets/images/Home/Microsoft Azure Workshop.jpg";
import G8 from "./../../assets/images/Home/Microsoft Machine Learning Workshop.jpg";
import G9 from "./../../assets/images/Home/Microsot Imagine Cup.jpg";
import G10 from "./../../assets/images/Home/Microsoft Diversity Skilling Program.jpg";
import G11 from "./../../assets/images/Home/Alexa Student Day1.jpg";

const options = {
  settings: {
    overlayColor: "rgba(0,0,0,0.9)",
    backgroundColor: "#0090ff",
    slideAnimationType: "slide",
  },
  buttons: {
    backgroundColor: "#0090ff",
    iconColor: "rgba(255, 255, 255, 1)",
  },
  caption: {
    captionColor: "#232eff",
    captionFontFamily: "Ubuntu, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

const GallerySection = () => {
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

  const sliderRef = useRef(null);

  const handleNextClick = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.slickNext();
    }
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <Image width={600} src={Numbers} alt="" />
          <h5 className="fw4">
            Individuals upskilled and empowered across nation.
          </h5>
        </div>
        <div>
          <Slider
            ref={sliderRef}
            {...settings}
            className=" portfolio-carousel-3 style-2 slider-one slider-sp0 arrow-none"
          >
            <div className="slider-item ">
              <div className="container  ">
                <div className="row align-items-center">
                  <div className="col-md-4 m-b10">
                    <div className="portfolio-box style-3">
                      <div className="text-center ">
                        <Lightbox
                          isOpen={lightboxOpen}
                          onRequestClose={closeLightbox}
                          selectedImage={selectedImage}
                        />
                        <Image
                          onClick={() => openLightbox(G1)}
                          style={{ width: "100%" }}
                          src={G1}
                          alt=""
                        />
                      </div>
                      <div className="portfolio-info">
                        <p className="text-gray">
                          Alexa student day
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8 m-b0">
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G2)}
                            width={300}
                            src={G2}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Ideation camp and innovation hub
                        </p>
                      </div>
                        </div>
                        
                      </div>

                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G3)}
                            width={300}
                            src={G3}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                         Ai for business forum
                        </p>
                      </div>
                        </div>
                        
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G4)}
                            width={300}
                            src={G4}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Alexa developer circle
                        </p>
                      </div>
                        </div>
                        
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G5)}
                            width={300}
                            src={G5}
                            style={{borderRadius:'25px'}}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                          Alexa student influencer program
                        </p>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item ">
              <div className="container  ">
                <div className="row align-items-center">
                  <div className="col-md-8 m-b0">
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G7)}
                            width={300}
                            style={{borderRadius:'25px'}}
                            src={G7}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                          Microsoft azure workshop
                        </p>
                      </div>
                        </div>
                        
                      </div>

                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G8)}
                            width={300}
                            src={G8}
                            style={{borderRadius:'25px'}}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Microsoft machine learning workshop
                        </p>
                      </div>
                        </div>
                        
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G9)}
                            width={300}
                            style={{borderRadius:'25px'}}
                            src={G9}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Microsoft imagine cup
                        </p>
                      </div>
                        </div>
                        
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G10)}
                            width={300}
                            style={{borderRadius:'25px'}}
                            src={G10}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Microsoft diversity skilling program
                        </p>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m-b0">
                    <div className="row">
                     

                     
                      <div className="col-md-12 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G6)}
                            width={300}
                            style={{borderRadius:'25px'}}
                            src={G6}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                        Ideation camp and innovation hub
                        </p>
                      </div>
                        </div>
                        
                      </div>
                      <div className="col-md-12 col-6">
                        <div className="portfolio-box style-3">
                          <div className="">
                          <Lightbox
                            isOpen={lightboxOpen}
                            onRequestClose={closeLightbox}
                            selectedImage={selectedImage}
                          />
                          <Image
                            onClick={() => openLightbox(G11)}
                            width={300}
                            style={{borderRadius:'25px'}}
                            src={G11}
                            alt=""
                          />
                        </div>
                        <div className="portfolio-info">
                        <p className="text-gray">
                          Alexa student day
                        </p>
                      </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </Slider>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="slick-arrow"
            onClick={() => sliderRef.current.slickPrev()}
            style={{
              width: 60,
              height: 60,
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <FaLongArrowAltLeft />
          </div>
          <div
            className="slick-arrow"
            onClick={() => sliderRef.current.slickNext()}
            style={{
              width: 60,
              height: 60,
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
