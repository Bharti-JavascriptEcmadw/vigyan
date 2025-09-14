

import React from "react";
import {
  FaMicrochip,
  FaRobot,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaCogs,
  FaMicrophoneAlt,
  FaRaspberryPi,
  FaProjectDiagram,
  FaWifi,
} from "react-icons/fa";
import {
  SiArduino,SiReact,

} from "react-icons/si";
import { GiArtificialIntelligence, GiCircuitry, GiGroupedDrops } from "react-icons/gi";

const courses = [
  {
    title: "IoT (Internet of Things)",
    description:
      "Learn how to build smart connected devices using sensors, microcontrollers (like Arduino or ESP32), and cloud platforms.",
    icon: <FaMicrochip size={40} />,
  },
  {
    title: "Robotics",
    description:
      "Hands-on training in designing, building, and programming robots using motors, sensors, and controllers.",
    icon: <FaRobot size={40} />,
  },
  {
    title: "Node.js",
    description:
      "Master backend development with Node.js, including RESTful APIs, authentication, and database integration.",
    icon: <FaNodeJs size={40} />,
  },
  {
    title: "Python Programming",
    description:
      "Comprehensive course on Python for web development, data science, automation, and more.",
    icon: <FaPython size={40} />,
  },
  {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and backend tools to build full-stack web applications.",
    icon: <SiReact size={40} />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore the fundamentals of Artificial Intelligence and Machine Learning using Python, Pandas, and Scikit-learn.",
    icon: <GiArtificialIntelligence size={40} />,
  },
  {
    title: "Mechanical Design",
    description: "Understand robot structure, chassis design, gears, and actuators.",
    icon: <FaCogs size={40} />,
  },
  {
    title: "Sensors & Electronics",
    description: "Explore how sensors, microcontrollers, and circuits power robots.",
    icon: <GiCircuitry size={40} />,
  },
  {
    title: "Arduino Programming",
    description: "Program robots using C/C++ on Arduino for real-time control.",
    icon: <SiArduino size={40} />,
  },
  {
    title: "Python for Robotics",
    description: "Use Python with Raspberry Pi for scripting and automation.",
    icon: <FaRaspberryPi size={40} />,
  },
  {
    title: "Control Systems",
    description: "Learn PID control, obstacle avoidance, and line following algorithms.",
    icon: <FaProjectDiagram size={40} />,
  },
  {
    title: "IoT & Communication",
    description: "Integrate robotics with Bluetooth, Wi-Fi, and cloud platforms.",
    icon: <FaWifi size={40} />,
  },
  {
    title: "AI in Robotics",
    description: "Implement AI and ML techniques like object detection and navigation.",
    icon: <FaBrain size={40} />,
  },
  {
    title: "Swarm & Humanoid Robotics",
    description: "Discover specialized fields like swarm behavior and humanoid robots.",
    icon: <GiGroupedDrops size={40} />,
  },
  {
    title: "Robotics Projects",
    description: "Build hands-on projects like line followers, voice-controlled bots, and more.",
    icon: <FaMicrophoneAlt size={40} />,
  },
];

const cardColors = [
  "from-pink-500 to-pink-400",
  "from-purple-500 to-purple-400",
  "from-indigo-500 to-indigo-400",
  "from-blue-500 to-blue-400",
  "from-green-500 to-green-400",
  "from-yellow-500 to-yellow-400",
];

const TeamSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        Courses
      </h1>

      <div className="carousel-wrapper overflow-x-auto">
        <div className="carousel-track flex gap-6">
          {[...courses].map((course, index) => (
            <div
              key={index}
              className={`w-64 h-72 min-w-[16rem] flex-shrink-0 rounded-2xl shadow-xl bg-gradient-to-br text-white ${cardColors[index % cardColors.length]} transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center text-center p-6`}
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
