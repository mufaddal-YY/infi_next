import Head from "next/head";
import HeroBanner from "@sections/Services/Banner";
import Cta from "@components/Cta";
import Programs from "@sections/Services/Programs";
import CaseStudy from "@sections/Services/CaseStudy";

const Services = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://kit.fontawesome.com/0cd2d10be4.js"
          crossOrigin="anonymous"
        ></script>

        <title>Infispark - What we do</title>
        <meta name="description" content="Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
      <HeroBanner />

      <div className=" section-sp4 bg-white">
      <Programs />
      </div>

      <div className=" section-sp4 bg-white">
      <CaseStudy />
      </div>

      <div className=" section-sp4 bg-white">
        <Cta />
      </div>

      
    </>
  );
};

export default Services;
