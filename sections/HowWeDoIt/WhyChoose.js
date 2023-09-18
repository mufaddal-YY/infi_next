"use client";
import React, { useState } from "react";
import Image from "next/image";
import PortableText from "react-portable-text";

import { Accordion } from "react-bootstrap";

const WhyChoose = ({ HowWeDoData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [image, setImage] = useState(HowWeDoData[0].thumb);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      {HowWeDoData.map((data) => (
        <div className="container">
          <div className="text-center">
            <h4>Why Choose us?</h4>
          </div>
          <div className="row ">
            <div className="col-md"></div>
            <div className="col-lg-10">
              {data.whyChoose.map((item, index) => (
                <Accordion
                  key={index}
                  className="accordion1"
                  activeKey={activeIndex === index ? "0" : null}>
                  <Accordion.Item eventKey="0" className="bg-white">
                    <Accordion.Header
                      className="accordion-header "
                      onClick={() => handleClick(index)}>
                      <div className="d-flex justify-content">
                        <div>
                          <h6 className="p-l15">{item.title}</h6>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body1">
                      <div className="row">
                        <div className="col-lg-6">
                          <p className="m-t20">
                            <PortableText
                              className="custom-portable-text"
                              // Pass in block content straight from Sanity.io
                              content={item.description}
                              projectId="oy08lsi5"
                              dataset="production"
                            />
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <div className="slider-item p-20">
                            <Image
                              id="accordion-image"
                              src={item.image}
                              width={400}
                              height={300}
                              alt="Selected Image"
                            />
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
