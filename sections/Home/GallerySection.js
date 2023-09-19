"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Numbers from "./../../assets/images/Home/number.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Lightbox from "./../../components/Lightbox";

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

const GallerySection = ({ homeData }) => {
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
          <Image width={600} height={200} src={Numbers} alt="" />
          <h5 className="fw4">
            Individuals upskilled and empowered across nation.
          </h5>
        </div>

        <div>
          {homeData.map((item) => {
            // Split item.gallery into chunks of 6
            const galleryChunks = item.gallery.reduce(
              (resultArray, item, index) => {
                const chunkIndex = Math.floor(index / 6);
                if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = []; // start a new chunk
                }
                resultArray[chunkIndex].push(item);
                return resultArray;
              },
              []
            );

            return (
              <Slider
                ref={sliderRef}
                {...settings}
                className=" portfolio-carousel-3 style-2 slider-one slider-sp0 arrow-none">
                {galleryChunks.map((chunk, chunkIndex) => (
                  <div className="slider-item" key={chunkIndex}>
                    <div className="container">
                      <div className="row align-items-center">
                        {chunk.map((data, dataIndex) => (
                          <div className="col-md-4 m-b10" key={dataIndex}>
                            <div className="portfolio-box style-3">
                              <div className="text-center">
                                <Lightbox
                                  isOpen={lightboxOpen}
                                  onRequestClose={closeLightbox}
                                  selectedImage={selectedImage}
                                />
                                <Image
                                  onClick={() => openLightbox(data.image)}
                                  style={{ borderRadius: "18px" }}
                                  width={500}
                                  height={350}
                                  src={data.image}
                                  alt={data.caption}
                                />
                              </div>
                              <div className="portfolio-info">
                                <p className="text-gray">{data.caption}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            );
          })}
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
            }}>
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
            }}>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
