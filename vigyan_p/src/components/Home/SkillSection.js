
import React, { useState, useEffect, useRef } from 'react';

const SkillSection = () => {
  const [studentProgress, setStudentProgress] = useState(0);
  const [teacherProgress, setTeacherProgress] = useState(0);
  const [satisfactionProgress, setSatisfactionProgress] = useState(0);

  const formRef = useRef(null);
  const rightDivRef = useRef(null);
  const [isRightDivVisible, setIsRightDivVisible] = useState(false);

  useEffect(() => {
    animateProgress(setStudentProgress, 48);
    animateProgress(setTeacherProgress, 60);
    animateProgress(setSatisfactionProgress, 97);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRightDivVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    // Store the current value of refs for cleanup
    const currentFormRef = formRef.current;
    const currentRightDivRef = rightDivRef.current;

    if (currentFormRef) observer.observe(currentFormRef);
    if (currentRightDivRef) observer.observe(currentRightDivRef);

    return () => {
      if (currentFormRef) observer.unobserve(currentFormRef);
      if (currentRightDivRef) observer.unobserve(currentRightDivRef);
    };
  }, []);

  const animateProgress = (setValue, target) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        setValue(current);
      }
    }, 120);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/contact/R2.jpg')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/60 gap-10 sm:gap-12">

        
        <div
          ref={rightDivRef}
          className={`w-full sm:w-[90%] md:w-[80%] lg:w-[55%] text-white text-center lg:text-left ${
            isRightDivVisible ? 'animate-fade-in' : ''
          }`}
        >
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white mb-3">
            Our Skills
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
            Explore Your <span className="text-teal-300">Creativity<br />And Talent</span> With Us
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-10">
            Founded with a passion for innovation in education, Vigyan Pathshala has worked tirelessly to design programs
            that align with global trends and the National Education Policy...
          </p>

          <div className="space-y-6 sm:space-y-8">
            <ProgressBar label="Our Students" value={studentProgress} />
            <ProgressBar label="Our Teachers" value={teacherProgress} />
            <ProgressBar label="Satisfaction Rate" value={satisfactionProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-xs sm:text-sm font-medium mb-1 sm:mb-2">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4">
      <div
        className="bg-teal-500 h-3 sm:h-4 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default SkillSection;
