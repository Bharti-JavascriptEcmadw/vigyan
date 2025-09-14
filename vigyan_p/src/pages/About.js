import React,{useRef} from 'react';
import Banner1 from '../components/About/Banner1';
import MissionVision from '../components/About/MissionVision';
import WhyChooseUs from '../components/About/WhyChooseUs';
import TeamSection from '../components/About/TeamSection';
import Extra from '../components/About/Extra';
import AboutNav from '../components/About/AboutNav';


const About = () => {
  const weprovide=useRef(null);
  const ourmission=useRef(null);
  const whyus=useRef(null);
  const team=useRef(null);


  const handlescroll=(target)=>{

    const scrollWithOffset = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 80px offset for navbar
        behavior: "smooth"
      });
    }
  };

    if(target==="weprovide") scrollWithOffset(weprovide)
    if(target==="ourmission") scrollWithOffset(ourmission)

    if(target==="whyus") scrollWithOffset(whyus)
    if(target==="team") scrollWithOffset(team)

    }
  
  return (
    <div>
      <AboutNav onScroll={handlescroll}/>
      <Banner1 />
      <div ref={weprovide}><Extra/></div>
      <div ref={ourmission}><MissionVision/></div>
      <div ref={whyus}><WhyChooseUs/></div>
      <div ref={team}><TeamSection/></div>
    </div>
  );
};

export default About;

//  React me ref ek bookmark hota hai kisi element ke liye.

