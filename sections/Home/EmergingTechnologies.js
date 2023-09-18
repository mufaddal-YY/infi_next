import TechSlider from "@components/TechSlider";
import TechSliderReverse from "@components/TechSliderReverse";

const EmergingTechnologies = ({ homeData }) => {
  return (
    <>
      <div className="container">
        <div className="">
          <h4>
            Skills and Emerging Technologies <br /> that you can't overlook
          </h4>
          <p>
            Stay ahead in this rapid growing world. We are normalizing advance
            learning
          </p>
        </div>
      </div>
      {homeData.map((item) => (
        <div className="p-10">
          <TechSlider skills={item.skills} />
        </div>
      ))}
      {homeData.map((item) => (
        <div className="p-10">
          <TechSliderReverse skills={item.skills} />
        </div>
      ))}
    </>
  );
};

export default EmergingTechnologies;
