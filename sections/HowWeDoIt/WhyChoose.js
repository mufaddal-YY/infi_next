"use client";
import React, { useState } from "react";
import Image from "next/image";

import ReportingMechanism from "@assets/images/How We Do It/reportingMechanism.png";
import ProgramDashboard from "@assets/images/How We Do It/Program Dashboard.png";
import Vernacular from "@assets/images/How We Do It/Vernacular.png";
import Certificate from "@assets/images/How We Do It/Certificates.png";
import SocialMedia from "@assets/images/How We Do It/Social Media.webp";
import PostProgram from "@assets/images/How We Do It/PostProgram.webp";
import Trainer from "@assets/images/How We Do It/trainer.jpg";

import { Accordion } from "react-bootstrap";

const accordionData = [
  {
    title: "Robust Reporting Mechanism",
    description: [
      "Streamline project management with a single, comprehensive tool.",
      "Consolidate goal-setting and progress tracking in one central platform.",
      "Identify the most critical path of key milestones.",
      "Transform project information into visually appealing charts and intuitive graphs.",
    ],
    thumb: ReportingMechanism,
  },
  {
    title: "Program Dashboard",
    description: [
      "Visualize progress and project status at a glance.",
      "Track metrics such as hours logged, tasks completed, and milestones achieved.",
      "Quickly identify areas requiring attention or additional resources.",
      "Easily generate custom reports to share with clients and stakeholders.",
    ],
    thumb: ProgramDashboard,
  },

  {
    title: "Vernacular and Customized Content",
    description: [
      "Engage your target audience by providing relevant and valuable content.",
      "Offer multilingual training to cater to a diverse customer base.",
      "Enhance the university curriculum by incorporating industry-leading tools and technology.",
    ],
    thumb: Vernacular,
  },
  {
    title: "Industry Led Certification",
    description: [
      "Get trained for job-ready certifications.",
      "Grow your knowledge to prepare for the certification examinations.",
    ],
    thumb: Certificate,
  },
  {
    title: "Extensive Social Media Reach",
    description: [
      "Brainstorm the collective ideas and make a plan all in one place to reach the target groups",

      "Utilize various social media platforms to launch targeted and strategic campaigns for specific audiences.",

      "Create and distribute inspirational content that aligns with the organization's objectives.",

      "Brainstorm the collective ideas and make a plan all in one place to reach the target groups",
    ],
    thumb: SocialMedia,
  },
  {
    title: "Post Program Reports",
    description: [
      "Get dynamic post-campaign reports to evaluate program efficiency.",
      "Get insights into the milestones achieved.",
      "Get a deep dive into the program matrices.",
    ],
    thumb: PostProgram,
  },
  {
    title: "Certified Trainer",
    description: [
      "Industry trainers with in-depth knowledge and experience.",
      "Provide training with a uniquely practical approach.",
    ],
    thumb: Trainer,
  },
];

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [image, setImage] = useState(accordionData[0].thumb);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="container">
      <div className="text-center">
        <h4>Why Choose us?</h4>
      </div>
      <div className="row ">
        <div className="col-md"></div>
        <div className="col-lg-10">
          {accordionData.map((item, index) => (
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
                      <ul>
                        {item.description.map((desc, i) => (
                          <li className="p-t10" key={i}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="slider-item p-20">
                        <Image
                          id="accordion-image"
                          src={item.thumb}
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
  );
};

export default WhyChoose;
