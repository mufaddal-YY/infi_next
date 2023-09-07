"use client"
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Link from "next/link";


export default function OppositeContentTimeline() {
  return (
      <>
     
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator className="m-l10">
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
         
          <div className="m-l10">
            <p className="fs14">Course-1</p>
            <p className="fw6 mt--10">AZ 900: Azure Fundamentals</p>
            <p className="fs14 mt--10">Fundamental Level</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="m-l10">
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          
          <div className="m-l10">
            <p className="fs14">Course-2</p>
            <p className="fw6 mt--10">DP 900: Azure Data Fundamentals</p>
            <p className="fs14 mt--10">Fundamental Level</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="m-l10">
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="m-l10">
            <p className="fs14">Course-3</p>
            <p className="fw6 mt--10">AZ 204: Azure Developer Associate</p>
            <p className="fs14 mt--10">Associate Level</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="inherit" className="bg-white">
            <div className="text-center mt--10">
              <svg
                id="certificatealt"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="0 0 36.051 48.005"
              >
                <path
                  id="Path_7168"
                  data-name="Path 7168"
                  d="M31.55,18l4.5,4.829L29.722,24.8l1.5,6.423-5.954-1.36L30.05,45.1a2.8,2.8,0,0,1-1.313,2.438L26.3,45.1l-2.907,2.907a2.934,2.934,0,0,1-1.688-1.055,2.887,2.887,0,0,1-.656-1.852L18,35.441,15,45.1a2.887,2.887,0,0,1-.656,1.852,2.934,2.934,0,0,1-1.688,1.055L9.751,45.1,7.313,47.536A2.8,2.8,0,0,1,6,45.1l4.782-15.236-5.954,1.36,1.5-6.423L0,22.831,4.5,18,0,13.173l6.329-1.922-1.5-6.423,6.423,1.5L13.173,0,18,4.5,22.831,0,24.8,6.329l6.423-1.5-1.5,6.423,6.329,1.922ZM18.025,9A8.691,8.691,0,0,0,11.65,11.65,8.691,8.691,0,0,0,9,18.025,8.691,8.691,0,0,0,11.65,24.4a8.691,8.691,0,0,0,6.376,2.649A8.691,8.691,0,0,0,24.4,24.4a8.691,8.691,0,0,0,2.649-6.376A8.691,8.691,0,0,0,24.4,11.65,8.691,8.691,0,0,0,18.025,9Z"
                  fill="#fc0"
                />
              </svg>
            </div>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <p className="fw6 mt--10">Course Completion Certificate</p>
          <p className="fs12 mt--10">
            You will get individual certificates for each mentioned course after
            clearing certification examination along with program completion
            certificate after completing minimum 80% program.
          </p>
          {/* <Link href={""}> <div className='text-center m-t20 radius-sm bg-light-blue p-15 fw5 fs14 text-blue'>DOWNLOAD SYLLABUS</div>
</Link> */}
        </TimelineContent>
        
      </TimelineItem>
    </Timeline>

    </>
  );
}
