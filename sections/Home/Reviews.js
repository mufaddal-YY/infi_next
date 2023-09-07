import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-component";

const content = [
  {
    title: "Cyber Security",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "AR/VR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen booktypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "Financial Literacy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "Financial Literacy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "AR/VR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen booktypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "Cyber Security",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Reviews = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="text-center m-b30 ">
            <h4>That's what they said</h4>
          </div>

          <Masonry className="row m-b30">
            {content.map((item, index) => (
              <div className=" col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className=" feature-container feature-bx5 ">
                  <p className="fs12">{item.description}</p>
                  <p className=" m-t30 m-b10">
                    <strong className="text-dark">{item.title}</strong>
                  </p>
                </div>
              </div>
              //   <div className="col-md-4 ">
              //     <div className=" feature-container feature-bx5 ">
              //       <p className="fs12">{item.description}</p>
              //       <p className=" m-t30 m-b10">
              //         <strong className="text-dark">{item.title}</strong>{" "}
              //       </p>
              //     </div>
              //   </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default Reviews;
