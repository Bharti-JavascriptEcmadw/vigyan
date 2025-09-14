import React from "react";
import {Link} from 'react-router-dom'
const JoinUsSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-semibold leading-tight mb-4 text-center md:text-left">
            Join Us at Vigyan Pathshala and Unlock the Potential of STEM Education
          </h2>
          <p className="text-teal-200 text-lg mb-6 text-center md:text-left">
            We are committed to transforming education through innovative resources, hands-on learning platforms, and cutting-edge labs.
          </p>
          <div className="text-center md:text-left">
            <Link to="bookdemo">
            <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-full shadow-md transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
              Join Us Today
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src="/assets/SchoolProgram/joinus_integrated.png"
alt="Vigyan Pathshala STEM program"
            className="w-full h-auto max-w-[450px] rounded-xl shadow-lg transform transition duration-700 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
