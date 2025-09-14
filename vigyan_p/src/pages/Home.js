
// import React, { lazy, Suspense } from "react";
// import Banner from "../components/Home/Banner";
// import ServicesSection from "../components/Home/ServicesSection";
// import VideoPreview from "../components/Home/VideoPreview";
// import SkillSection from "../components/Home/SkillSection";
// import Solutions from "../components/Home/Solutions";
// import InspireYoungMinds from "../components/Home/InspireYoungMinds";
// import Gallery from "../components/Home/Gallery";
// import TrainedSchoolsCarousel from "../components/Home/TrainedSchoolsCarousel";
// import WelcomeToast from "../Layout/WelcomeModal";

// import CarouselCourse from '../components/Home/CarouselCourse'
// import Quiz from '../components/Home/Quiz.js';
// // import AtalTinkeringLab from "../components/Home/AtalTinkeringLab.js";
// import WhatWeProvide from "../components/Home/WhatWeProvide.js";
// import ToolsAndTechnologies from "../components/Home/Tool&Techno.js";
// import IndustryExpert from "../components/Home/IndustryExpert.js";
// // import MERN from "../components/Home/MERN.js";
// import Program from "../components/Home/Program.js";
// import Courses from "../components/Home/Courses.js";
// import BuyCourse from "../components/Home/BuyCourse.js";
// import CoursesSection from "../components/Home/CoursesSection.js";
// import Iotimage from "../components/Home/Iotimage.js";
// import OurAchievementSection from "../components/Home/OurAchievementSection.js";
// import SubNav from "../Layout/SubNav.js";

// const CityCenters = lazy(() => import("../components/Home/CityCenter"));
// const StatsCounter = lazy(() => import("../components/Home/StatsCounter"));

// const Home = () => {
//   return (
//     <> 
//       <SubNav></SubNav>
//       <WelcomeToast /> {/* Overlay Modal */}

//       <Banner />

//       <InspireYoungMinds />
//       <WhatWeProvide/>

//       <CoursesSection/>
//       <BuyCourse/>
//       {/* <MERN/> */}
//       <Quiz></Quiz>


//       <Courses/>
//       <Program/>
//        <CarouselCourse/>

//       <IndustryExpert/>

//       <ToolsAndTechnologies/>
//        <Iotimage/>
//        {/* <AtalTinkeringLab/>   */}
            
//       <Suspense fallback={<div>Loading City Centers...</div>}>
//         <CityCenters />
//       </Suspense>
//       <Suspense fallback={<div>Loading Stats...</div>}>
//         <StatsCounter />
//       </Suspense>
//       {/* <OnlineRoboticsProgram/> */}
//       <ServicesSection />
//       <VideoPreview />
//       <OurAchievementSection/>
//       <Gallery />
//       <TrainedSchoolsCarousel />
//       <SkillSection />
//       <Solutions />
//     </>
//   );
// };

// export default Home;




import React, { lazy, Suspense, useRef } from "react";
import Banner from "../components/Home/Banner";
import ServicesSection from "../components/Home/ServicesSection";
import VideoPreview from "../components/Home/VideoPreview";
import SkillSection from "../components/Home/SkillSection";
import Solutions from "../components/Home/Solutions";
import InspireYoungMinds from "../components/Home/InspireYoungMinds";
import Gallery from "../components/Home/Gallery";
import TrainedSchoolsCarousel from "../components/Home/TrainedSchoolsCarousel";
import WelcomeToast from "../Layout/WelcomeModal";

import CarouselCourse from '../components/Home/CarouselCourse'
import Quiz from '../components/Home/Quiz.js';
// import AtalTinkeringLab from "../components/Home/AtalTinkeringLab.js";
import WhatWeProvide from "../components/Home/WhatWeProvide.js";
import ToolsAndTechnologies from "../components/Home/Tool&Techno.js";
import IndustryExpert from "../components/Home/IndustryExpert.js";
// import MERN from "../components/Home/MERN.js";
import Program from "../components/Home/Program.js";
import TopCarrer from "../components/Home/TopCarrer.js";
import BuyCourse from "../components/Home/BuyCourse.js";
import Iotimage from "../components/Home/Iotimage.js";
import OurAchievementSection from "../components/Home/OurAchievementSection.js";
import SubNav from "../components/Home/SubNav.js";
import OnlineCourse from "../components/Home/OnlineCourse.js";

const CityCenters = lazy(() => import("../components/Home/CityCenter"));
const StatsCounter = lazy(() => import("../components/Home/StatsCounter"));


const Home = () => {
  // Section refs
  const roboticsRef = useRef(null);
  const buyCourseRef = useRef(null);
  const quizRef = useRef(null);
  const programRef = useRef(null);
  const techRef = useRef(null);
  const iotRef = useRef(null);
  const galleryRef = useRef(null);
  const achievementsRef = useRef(null);
  const expertsRef = useRef(null);
  const carouselRef = useRef(null);
    const partnerschool = useRef(null);


  // Scroll handler
  // const handleScroll = (target) => {

    
  //   if (target=== "robotics") roboticsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "buy-course") buyCourseRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "quiz") quizRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "program") programRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "tech") techRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "iot") iotRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "gallery") galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "achievements") achievementsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "experts") expertsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   if (target === "carousel") carouselRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const handleScroll = (target) => {
  const scrollWithOffset = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 80px offset for navbar
        behavior: "smooth"
      });
    }
  };

  if (target === "robotics") scrollWithOffset(roboticsRef);
  if (target === "buy-course") scrollWithOffset(buyCourseRef);
  if (target === "quiz") scrollWithOffset(quizRef);
  if (target === "program") scrollWithOffset(programRef);
  if (target === "tech") scrollWithOffset(techRef);
  if (target === "iot") scrollWithOffset(iotRef);
  if (target === "gallery") scrollWithOffset(galleryRef);
  if (target === "achievements") scrollWithOffset(achievementsRef);
  if (target === "experts") scrollWithOffset(expertsRef);
  if (target === "carousel") scrollWithOffset(carouselRef);
    if (target === "partnerschool") scrollWithOffset(partnerschool);

};


  return (
    <>
      <SubNav onScroll={handleScroll} />
      <WelcomeToast />
      <Banner />
      <InspireYoungMinds />
      <WhatWeProvide />

      <div ref={roboticsRef} ><OnlineCourse /></div>
      <div ref={buyCourseRef}><BuyCourse /></div>
      <div ref={quizRef}><Quiz /></div>
      <div ref={programRef}><Program /></div>
      <TopCarrer/>

      <div ref={carouselRef}><CarouselCourse /></div>
      <div ref={expertsRef}><IndustryExpert /></div>
      <div ref={techRef}><ToolsAndTechnologies /></div>
      <div ref={iotRef}><Iotimage /></div>

      <Suspense fallback={<div>Loading City Centers...</div>}>
        <CityCenters />
      </Suspense>
      <Suspense fallback={<div>Loading Stats...</div>}>
        <StatsCounter />
      </Suspense>

      <div ref={galleryRef}><Gallery /></div>
      <div ref={achievementsRef}><OurAchievementSection /></div>

      <ServicesSection />
      <VideoPreview />
     <div ref={partnerschool}><TrainedSchoolsCarousel /></div>
      <SkillSection />
      <Solutions />
    </>
  );
};

export default Home;