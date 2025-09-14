import React , {useRef} from "react";

import Event from '../components/Schoolprogram/School_Program/Event'
import Cbse from "../components/Schoolprogram/Composite_Robotics/Cbse";
import CompositeRobotics from "../components/Schoolprogram/Composite_Robotics/CompositeRobotics";
import CompositeLabImportance from "../components/Schoolprogram/Composite_Robotics/CompositeLabImportance";
import WhySetupLabs from "../components/Schoolprogram/Composite_Robotics/WhySetupLabs";
import HowVigyanCanHelp from "../components/Schoolprogram/Composite_Robotics/HowVigyanCanHelp";
import WhyPartner from "../components/Schoolprogram/Composite_Robotics/WhyPartner";
import TopNavComp from "../components/Schoolprogram/Composite_Robotics/TopNavComp";

const Composite_Lab = () => {

  const composite=useRef(null);
  const mandatory= useRef(null);
  const importance=useRef(null);
  const whyus=useRef(null)
  const handleclick=(target)=>{

    const scrollWithOffset = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 80px offset for navbar
        behavior: "smooth"
      });
    }
  };

  if (target === "composite") scrollWithOffset(composite);
  if (target === "mandatory") scrollWithOffset(mandatory);
  if (target === "importance") scrollWithOffset(importance);
  if (target === "whyus") scrollWithOffset(whyus);

  }
  return (
    <>
<TopNavComp onScroll={handleclick}/>
    <Event/>
   <div ref={composite}> <Cbse/></div>
   <div ref={mandatory}><CompositeRobotics/> </div>
   <div ref={importance}><CompositeLabImportance/></div>
    <WhySetupLabs/>
  <HowVigyanCanHelp/>
    <div ref={whyus}><WhyPartner/></div>

    </>
  );
};

export default Composite_Lab;
