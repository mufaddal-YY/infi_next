import Image from "next/image";
import ServiceTech from "@assets/images/Home/servicesTech.jpg"
import CsrDonor from "@assets/images/Home/csrDonor.jpg"
import Education from "@assets/images/Home/educationalInstitutes.jpg"
import Academic from "@assets/images/Home/academicCollaborators.jpg"

const content = [
    {
        title: "Corporates",
        description:"Providing customized end-to-end program management services with an access to institutes and student communities that strengthen teaching and learning inside and outside the classroom which increases the overall effectiveness of higher-education entities." ,
        thumb: ServiceTech
        
      },
      {
        title: "CSR Donors",
        description:"Working with CSR donors by designing, improving, and transforming a multi-lingual customized training approach, placing a premium on equity, inclusion, and the elevation of a sustainable educational programs to reach undervalued communities." ,
        thumb: CsrDonor
        
      },
      {
        title: "Educational Institutions",
        description:"Helping higher education stakeholders reimagine the future by designing and implementing training strategies in association with corporates and certified trainers to upskill students that improve student outcomes, enabling better skills, and enhancing Digital Transformation of Institutes." ,
        thumb: Education
        
      },
      {
        title: "Academic Collaborator",
        description:"Strengthening higher education learners by upskilling them in the latest tools and technologies with industry certifications that makes them job-ready. Also, providing opportunities to showcase ideas and innovations by introducing them to brands, student communities and industry connects." ,
        thumb: Academic
        
      },
    
  ];

const WhoWeWork = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center m-b20">
            <h4>Who we work with</h4>
          </div>
        {content.map((item) => (
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="feature-bx3 p-t20 style-1 m-b20" >
              <div className="m-b20">
                <Image width={400} src={item.thumb} alt="" />
              </div>
              <div className="portfolio-info">
                <h6 className="title">
                  <h6 >{item.title}</h6>
                </h6>
                <p className="fs14">{item.description}</p>
                
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default WhoWeWork;
