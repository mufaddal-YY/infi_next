import Image from "next/image";
import Link from "next/link";
import React from "react";

import Cs1 from "@assets/images/Services/imagineCup.png";
import Cs2 from "@assets/images/Services/deloitte.png";
import Cs3 from "@assets/images/Services/alexa.png";

const content = [
  {
    thumb: Cs1,
    title: "Microsoft Imagine Cup",
    description:
      "Imagine Cup, often regarded as the Olympics of Technology, is a global technology and innovation competition hosted by Microsoft which provides them with a chance to win cash prizes, mentoring and more.",
  link: "https://forms.monday.com/forms/embed/203bb22416d81db4fc2c1f927c778a20?r=use1",
    },
  {
    thumb: Cs2,
    title: "Innovation Hub - powered by Deloitte",
    description:
      "Innovation Center hosted in Universities/Colleges play a very critical and relevant role in fixing the gaps and driving positive behavior and habits. Deloitte Innovation Center in India is the source and hub of innovation…",
      link: "https://forms.monday.com/forms/embed/3d1887a5c623b4470b8c71f970a4ad3d?r=use1",
  },
  {
    thumb: Cs3,
    title: "Alexa Student Influencer Program",
    description:
      "Alexa Student Day is one of the most significant events of the Alexa Student Influencer Program(IN) that celebrates the passion, enthusiasm & energy of the student & developer ecosystem.",
      link: "https://forms.monday.com/forms/embed/9a2ad0e3bd1190cfbfd3c463f588c385?r=use1",
  },
];

const CaseStudy = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {content.map((item, index) => (
            <div className="col-lg-4 col-sm-12" key={index}>
              <div className="feature-bx5" >
                <Image width={150} src={item.thumb} alt="" />
                <h6 className="text-blue">{item.title}</h6> <hr />
                <p>{item.description}</p>
                <div className="m-t20">
                  <Link
                    href={item.link}
                    className="btn-secondry button-md radius-sm"
                    target="_blank"
                  >
                    Download Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
