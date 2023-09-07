import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TbFocusCentered } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { BsChatLeftDots } from "react-icons/bs";


export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div className="container">
      <div className="text-center m-b30">
        <h4>A proven approach to transformational change.</h4>
        <p>Enjoy the best experience of skilling.</p>
      </div>
      <Box sx={{ width: "100%" }} className="hidden">
        <Stepper alternativeLabel activeStep={3}>
          <Step>
            <StepLabel>
              <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <TbFocusCentered />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Identify your Focus Area</h6> 
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Our expert professional team will collaborate with you to
                  fully grasp the focus area you want to address and cover.
                  Together, we will formulate the most effective strategy to
                  evaluate and provide comprehensive answers to your inquiries.
                </p>
              </div>
            </StepLabel>
          </Step>

          <Step>
            <StepLabel activeStep>
              <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <SlNote />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Get your customized proposal</h6>
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Based on your needs, target audience, and approach in mind,
                  our team will do a deep driven research to prepare a
                  comprehensive plan. From our diverse offerings, our team will
                  provide you a customized proposal that will meet your desired
                  outcome.
                </p>
              </div>
            </StepLabel>
          </Step>

          <Step>
            <StepLabel>
              <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <BsChatLeftDots />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Implementation</h6>
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Once the program plan has been finalized, our team will assist
                  you in effectively reaching your target audience through our
                  extensive network to ensure successful execution of the
                  program.
                </p>
              </div>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>

      <div className="row hidden-desk">
        <div className="col-md-4">
        <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <TbFocusCentered />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Identify your Focus Area</h6> 
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Our expert professional team will collaborate with you to
                  fully grasp the focus area you want to address and cover.
                  Together, we will formulate the most effective strategy to
                  evaluate and provide comprehensive answers to your inquiries.
                </p>
              </div>

        </div>
        <div className="col-md-4">
        <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <SlNote />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Get your customized proposal</h6>
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Based on your needs, target audience, and approach in mind,
                  our team will do a deep driven research to prepare a
                  comprehensive plan. From our diverse offerings, our team will
                  provide you a customized proposal that will meet your desired
                  outcome.
                </p>
              </div>
        </div>
        <div className="col-md-4">
        <div className="feature-bx5">
                <div className="d-flex justify-content">
                  <div className="">
                    <a className="fs26">
                      <BsChatLeftDots />
                    </a>
                  </div>

                  <div className="p-l20">
                    <h6 className="m-t5">Implementation</h6>
                  </div>
                </div><hr/>
                <p className="fw4 m-t10">
                  Once the program plan has been finalized, our team will assist
                  you in effectively reaching your target audience through our
                  extensive network to ensure successful execution of the
                  program.
                </p>
              </div>
        </div>
      </div>
    </div>
  );
}
