import React, { useEffect, useState } from "react";

const CICApproach = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-cyan-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Text block with slide, rotate, and color transition */}
      <div
        className={`text-center max-w-4xl mx-auto mb-10 transform transition-all duration-700 ease-out ${
          mounted
            ? "opacity-100 translate-x-0 rotate-0"
            : "opacity-0 -translate-x-20 -rotate-6"
        }`}
      >
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-bold leading-snug transition-colors duration-700 ${
            mounted ? "text-teal-700" : "text-teal-300"
          }`}
        >
          Vigyan Pathshala's End-to-End{" "}
          <span className="text-green-600">Solution for 21st Century Schools</span>{" "}
          in Line with NEP 2020
        </h2>
        <div className="border-t-2 border-green-500 w-16 mx-auto my-4"></div>
        <p
          className={`transition-colors duration-700 font-medium text-base sm:text-lg ${
            mounted ? "text-green-700" : "text-green-300"
          }`}
        >
          CIC Approach – Our Patented Methodology
        </p>
      </div>

      {/* Image with slide-in effect */}
      <div
        className={`flex justify-center transform transition-all duration-700 ease-out delay-150 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <img
          src="/assets/SchoolProgram/cic.jpg"
          alt="CIC Approach Visual"
          className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default CICApproach;
