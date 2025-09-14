import React ,{useRef} from "react";

import DoItYourselfKits from "../components/Schoolprogram/School_Program/DoItYourselfKits";
import GlobalProgram from "../components/Schoolprogram/School_Program/GlobalProgram";
import CoreCompetencies from "../components/Schoolprogram/School_Program/CoreCompetencies";
import JoinUsSection from "../components/Schoolprogram/School_Program/JoinUsSection";
import TransfEdu from "../components/Schoolprogram/School_Program/TransfEdu";
import CICApproach from "../components/Schoolprogram/School_Program/CICApporach";
import SchoolTopNav from "../components/Schoolprogram/School_Program/SchoolTopNav";




const SchoolProgram = () => {
  const transforming= useRef(null);
  const core= useRef(null);
  const kit=useRef(null);
  const joinus=useRef(null)
  const endtoend= useRef(null)


  const handlescroll=(target)=>{
    const handle=(ref)=>{
      if(ref.current){
        window.scrollTo({
          top:ref.current.offsetTop - 80,
          behavior:"smooth"
        })
      }
    }
    if(target==="transforming") handle(transforming);
    if(target==="core") handle(core)
      if(target==="kit") handle(kit)
        if(target==="joinus") handle(joinus)
          if(target==="endtoend") handle(endtoend)
  }



  return (
    <>
<SchoolTopNav onScroll={handlescroll}/>
<CICApproach/>
<div ref={transforming}><TransfEdu/></div>

<div ref= {endtoend}><GlobalProgram/></div>
<div ref={core}><CoreCompetencies/></div>
<div ref={kit}><DoItYourselfKits/></div>
<div ref={joinus}><JoinUsSection></JoinUsSection></div>
    </>
  );
};

export default SchoolProgram;
