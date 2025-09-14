

import React from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRobot,
} from 'react-icons/fa';
import OnlineRoboticsProgram from './OnlineRoboticsProgram';
import { Link } from 'react-router-dom';
const WhatWeProvide = () => {
  return (
    <section className="bg-gradient-to-r from-teal-300 via-blue-200 to-cyan-200 py-16 px-6 lg:px-24 max-w-full mx-auto">
      
      {/* Reusable Program Section */}
      <OnlineRoboticsProgram />

      {/* Section Heading */}
      <div className="text-center mb-12 mt-4">
        <h2 className="text-4xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-blue-900 to-gray-900 inline-block px-4 py-1">
        We Provide Basic To Advance Level Training
        </h2>
        <p className="text-blue-900 mt-2 text-lg max-w-2xl mx-auto">
          Empowering students and educators through Robotics, AI, and STEM education.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl border border-blue-300 shadow-lg shadow-blue-400 hover:shadow-2xl hover:shadow-blue-600 transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col items-center space-y-4 text-black">
          <FaUserGraduate className="text-blue-900 text-5xl" />
          <h3 className="text-2xl font-bold text-center">
            Training for School Children, Kids & Teens
          </h3>
          <p className="text-center">
          We provide expert training for students from <strong>Class 6 to 12 and Class 1 to 5</strong>, empowering them with practical skills in robotics, AI, and STEM.
          </p>
               <Link to="/courses">
            <button className="bg-cyan-900 text-white hover:bg-cyan-600 px-8 py-3  text-lg font-bold tracking-wide shadow-md transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl border border-green-300 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-600 transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col items-center space-y-4 text-black">
          <FaChalkboardTeacher className="text-green-900 text-5xl" />
          <h3 className="text-2xl font-bold text-center">
            College Student Training
          </h3>
          <p className="text-center">
  We offer specialized training for college students in <strong>Website Development (Frontend & Full Stack)</strong>, <strong>App Development</strong>, and <strong>Digital Marketing</strong>, along with hands-on learning in <strong>Robotics, AI, and IoT</strong> to build strong industry-ready skills.
          </p>
               <Link to="/courses">
                      <button className="bg-cyan-900 text-white hover:bg-cyan-600 px-8 py-3  text-lg font-bold tracking-wide shadow-md transition duration-300">
                        Learn More                      </button>
                    </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl border border-green-300 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-600 transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col items-center space-y-4 text-black">
          <FaChalkboardTeacher className="text-green-900 text-5xl" />
          <h3 className="text-2xl font-bold text-center">
            Teacher Training Programs
          </h3>
          <p className="text-center">
            Our workshops train school teachers to effectively teach robotics, AI, and STEM, ensuring quality mentorship.
          </p>

               <Link to="/courses">
                      <button className="bg-cyan-900 text-white hover:bg-cyan-600 px-8 py-3  text-lg font-bold tracking-wide shadow-md transition duration-300">
                        Learn More
                      </button>
                    </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-2xl border border-purple-300 shadow-lg shadow-purple-400 hover:shadow-2xl hover:shadow-purple-600 transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col items-center space-y-4 text-black">
          <FaRobot className="text-purple-900 text-5xl" />
          <h3 className="text-2xl font-bold text-center">
            Robotics, AI, STEM Education & Lab Setup
          </h3>
          <p className="text-center">
            We offer complete robotics, AI, and STEM programs, and support lab setups like Atal Tinkering Labs.
          </p>

               <Link to="/courses">
                      <button className="bg-cyan-900 text-white hover:bg-cyan-600 px-8 py-3  text-lg font-bold tracking-wide shadow-md transition duration-300">
                        Learn More
                      </button>
                    </Link>
        </div>

      </div>
    </section>
  );
};

export default WhatWeProvide;
