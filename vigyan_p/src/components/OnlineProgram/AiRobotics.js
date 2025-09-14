import React, { useState } from "react";
import {
  FaRobot, FaMicrochip, FaCode, FaLaptopCode, FaLightbulb, FaNetworkWired
} from "react-icons/fa";
import { MdOutlineChecklist, MdOutlineIntegrationInstructions } from "react-icons/md";
import ApplyFormModal from "./ApplyFormModal"; // Reuse your existing form modal

const AiRobotics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", education: "", city: "", mode: "", message: ""
  });

  const tools = [
    { name: "Block-Based Programming", icon: <FaCode className="text-indigo-600" /> },
    { name: "Arduino & Sensors", icon: <FaMicrochip className="text-red-500" /> },
    { name: "Basic Electronics", icon: <FaLightbulb className="text-yellow-500" /> },
    { name: "Robotics Design", icon: <FaRobot className="text-green-600" /> },
    { name: "AI Concepts", icon: <FaLaptopCode className="text-blue-700" /> },
    { name: "IoT & Automation", icon: <FaNetworkWired className="text-pink-600" /> },
  ];

  const projects = [
    "Build a Line Following Robot",
    "Create a Voice-Controlled Bot",
    "Smart Home Automation Prototype",
    "Obstacle Avoidance Robot",
    "AI Chatbot with Simple Logic",
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white border border-gray-800 shadow-md space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center">
        AI & Robotics Training – Course Overview
      </h1>
      <p className="text-gray-700 text-center text-base sm:text-lg">
        A fun and interactive course to introduce kids to the world of AI, Robotics, and Coding.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MdOutlineIntegrationInstructions className="text-blue-600" />
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-sm sm:text-base">
          {tools.map(({ name, icon }) => (
            <div key={name} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded shadow-sm border">
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <MdOutlineChecklist className="text-green-700" />
          5 Hands-On Projects
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </section>

      <div className="text-center">
        <button
          onClick={() => { setIsModalOpen(true); setStep(1); }}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 text-base font-semibold rounded-md hover:opacity-90 transition shadow"
        >
          Enroll Now
        </button>
      </div>

      {isModalOpen && (
        <ApplyFormModal
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AiRobotics;
