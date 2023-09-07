import Head from "next/head";
import HeroBanner from "@sections/Unispark/Banner";
import AboutProgram from "@sections/Unispark/AboutProgram";
import ProgramDetails from "@sections/Unispark/ProgramDetails";
import Certificates from "@sections/Unispark/Certificates";
import LearningPath from "@sections/Unispark/LearningPath";
import Placement from "@sections/Unispark/Placement";
import WhyChooseUs from "@sections/Unispark/WhyChooseUs";
const Unispark = () => {
  return (
    <>
      <Head>
        
        <title>Infispark - Unispark</title>
        <meta name="description" content="Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
     
      <HeroBanner />
      
      <AboutProgram/>

      <div className=" section-sp4 bg-white">
      <ProgramDetails/>
      </div>
     
      <Certificates />
      
      <LearningPath />

      <Placement />

      <WhyChooseUs />

    
    </>
  );
};

export default Unispark;
