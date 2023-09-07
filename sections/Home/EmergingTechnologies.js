import TechSlider from "@components/TechSlider"
import TechSliderReverse from "@components/TechSliderReverse"

const EmergingTechnologies = () => {
  return (
    <>
      <div className="container">
          <div className="">
          <h4>Skills and Emerging Technologies <br/> that you can't overlook</h4>
          <p>Stay ahead in this rapid growing world. We are normalizing advance learning</p>
        </div>
      </div>
        
        <div className="p-10">
            <TechSlider />           
        </div>
        <div className="p-10">
             <TechSliderReverse/>
        </div>
      
    </>
  );
};

export default EmergingTechnologies;
