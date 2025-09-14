
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";



const Banner = () => {
  const images = useMemo(()=>[
      "/assets/st/9.jpg",
      "/assets/st/10.jpg",

  "/assets/Home/home_Banner.jpg",
  "/assets/Home/26.jpg",
  "/assets/Home/21.jpg",
   "/assets/video_gallery/8.jpg",
   "/assets/video_gallery/7.jpg",
   "/assets/video_gallery/5.jpeg",


],[])
  const [currentIndex, setCurrentIndex] = useState(0);

  //  Auto-slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
  
  <section className="w-full bg-gray-100 overflow-hidden py-6 sm:py-8 md:py-12 lg:py-16 ">

      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* Left: Image Slider */}
        <div className="w-full md:w-[50%] flex justify-center items-center animate-rotateYLeft origin-center transition-all duration-500 ease-in-out  center-top ">
          <div className="w-[90%] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] shadow-xl bg-white overflow-hidden "
            style={{ borderTopLeftRadius: "40%" }}>
            <img
              src={images[currentIndex]}
              alt="Banner"
              loading="lazy"

              className="w-full h-full object-cover transition-all duration-700 ease-in-out "
            />
          </div>
        </div>




        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-black px-2">
       {/* Gradient Overlay */}
       {/* <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-100"></div> */}



<div className="marquee-loop text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-3 tracking-widest">
  <span>"Learn Robotics & AI"</span>
</div>
          <h2 className=" animate-bounce-x text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 leading-tight font-semibold">
            Empowering Young Minds
            <span className="block ">
              Through <span className="twinkle text-blue-700 font-bold fade-in">Innovation</span> & Technology
            </span>
          </h2>


          <h3 className="uppercase text-sm sm:text-base md:text-lg mb-2 tracking-wide">
            For every student, every classroom, Real results.
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black max-w-2xl leading-relaxed mb-6 sm:mr-5
          xsm:mx-2">
            Our mission is to provide <span className="font-medium">world-class education</span> for anyone, anywhere — 
            blending <span className="text-blue-700 font-medium">robotics</span>, 
            <span className="text-green-700 font-medium"> coding</span>, and real-world tech 
            to prepare students for the future.
          </p>

          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4">
            <Link to="/courses">
              <button className="bg-blue-700 hover:bg-green-700 text-white px-6 py-3 lg:px-6 lg:py-3 md:p-2 rounded-lg transition hover:scale-105 text-xs sm:text-sm md:text-base">
                Explore Courses 
              </button>
            </Link>
            <Link to="/bookdemo">
              <button className="bg-blue-700 hover:bg-green-700 text-white px-6 py-3 lg:px-6 lg:py-3 md:p-2 rounded-lg transition hover:scale-105 text-xs sm:text-sm md:text-base">
              Book Demo        
              </button>
            </Link>

                <Link to="/lab-in-action">
              <button className="bg-blue-700 hover:bg-green-700 text-white px-6 py-3 lg:px-6 lg:py-3  md:p-2 rounded-lg transition hover:scale-105 text-xs sm:text-sm md:text-base md:text-[-3rem]">
           <span>Watch Robotic</span> 
           Training

              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;




