import Certi from "@components/Certificates";

const Certificates = () => {
  return (
    <>
      <div className=" section-sp4 bg-white">
        <div className="container">
          <h4>Get Ahead with industry recognized certification.</h4>
          <p className="text-blue mt--10 fw5">Every student will receive individual certificates for each course and a program completion certificate.</p>

          <div className="row">
            <div className="col-md"></div>
            <div className="col-md-8">
              <Certi />
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
