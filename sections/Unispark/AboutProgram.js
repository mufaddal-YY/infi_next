import Image from "next/image";
import AboutImage from "@assets/images/unispark/about-program.png";

const AboutProgram = () => {
  return (
    <>
      <div className="section-container section-sp4 bg-white">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <div className=" m-b20">
                <Image width={600} src={AboutImage} alt="Infispark" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h4 className="">About the Program</h4>
                <p className="mt--10 text-blue fw6">
                  Help your students develop skills for real career growth.
                </p>
                <hr />
                <p>
                  Unispark's Cloud Computing Program is designed to help
                  students master Microsoft Azure Technology.
                </p>
                <p>
                  The program features industry-recognized certification-based curriculum and provides personalized support to help college students become job-ready. Microsoft Azure program provides
                  college students with valuable resources and opportunities to
                  gain practical skills and knowledge in cloud computing,
                  increasing their employability and career prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProgram;
