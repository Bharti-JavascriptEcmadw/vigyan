


import React from 'react';
import { FaSchool, FaUniversity,  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OnlineRoboticsProgram = () => {
  return (
    // <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-6 lg:px-24">
        <section className="bg-white py-16 px-6 lg:px-24">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-pink-500 mb-4  ">
            Learn Robotics & AI <span className='text-green-500'> — For Everyone </span>
          </h2>
          <p className="text-gray-900 text-lg mb-6">
            Our flexible program is designed for <strong>school students</strong>, <strong>college learners</strong>, and <strong>young kids</strong>. 
            Gain hands-on experience with Robotics, AI, and STEM through DIY kits, and expert mentorship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-red-400 hover:shadow-lg transition duration-300 cursor-pointer 
            border-b-8 border-blue-800">
              <FaSchool className="mx-auto text-blue-600 text-3xl mb-2" />
              <p className="font-medium text-gray-700">For Schools</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-purple-400 hover:shadow-lg transition duration-300 cursor-pointer
            border-b-8 border-yellow-900">
              <FaUniversity className="mx-auto text-purple-700 text-3xl mb-2" />
              <p className="font-medium text-gray-700">For Colleges</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-pink-400 hover:shadow-lg transition duration-300 cursor-pointer
            border-b-8 border-orange-500">
              <FaSchool className="mx-auto text-pink-600 text-3xl mb-2" />
              <p className="font-medium text-gray-700">For Kids</p>
            </div>
                 <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-pink-400 hover:shadow-lg transition duration-300 cursor-pointer
            border-b-8 border-orange-500">
              <FaSchool className="mx-auto text-pink-600 text-3xl mb-2" />
              <p className="font-medium text-gray-700">Class 1-5 </p>
            </div>
               <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-pink-400 hover:shadow-lg transition duration-300 cursor-pointer
            border-b-8 border-orange-500">
              <FaSchool className="mx-auto text-pink-600 text-3xl mb-2" />
              <p className="font-medium text-gray-700">Class 6-8 </p>
            </div>
               <div className="bg-white shadow-md rounded-xl p-4 text-center border border-transparent hover:border-pink-400 hover:shadow-lg transition duration-300 cursor-pointer
            border-b-8 border-orange-500">
              <FaSchool className="mx-auto text-pink-600 text-3xl mb-2" />
              <p className="font-medium text-gray-700">Class 9-12 </p>
            </div>
          </div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 md:flex-nowrap">
  <Link to="/bookdemo">
    <button className="bg-blue-700 hover:bg-cyan-600 text-white px-8 py-3 font-bold shadow transition duration-300 text-lg  w-full sm:w-auto min-w-[160px] text-center">
      Join Us
    </button>
  </Link>
          
   
   <Link to="/courses">
      <button className="bg-gray-900 hover:bg-cyan-600 text-white px-8 py-3 font-bold shadow transition duration-300 text-lg  w-full sm:w-auto min-w-[160px] text-center whitespace-nowrap">

      Explore Courses
    </button>
  </Link>
</div>
        </div>

        {/* Image Section */}
        <div className="rounded-xl border border-indigo-200 shadow-2xl hover:shadow-indigo-400 transition-shadow duration-300 overflow-hidden border-b-8 border-solid  border-gray-900
        border-r-8 border-solid border-gray-900">
          <img
            src="/assets/b/Robotic_Lab.webp"
            alt="Online Robotics Learning"
            className="w-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default OnlineRoboticsProgram;
