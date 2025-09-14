

import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaGitAlt, FaNode
} from "react-icons/fa";
import { SiNextdotjs, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { MdOutlineIntegrationInstructions, MdOutlineChecklist } from "react-icons/md";
import ApplyFormModal from "./ApplyFormModal"; // ✅ NEW IMPORT

const MERNDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", education: "", city: "", mode: "", message: ""
  });

  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Database Integration", icon: <FaDatabase className="text-indigo-700" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-700" /> },
    { name: "Git & Deployment", icon: <FaGitAlt className="text-red-600" /> },
    { name: "Node.js", icon: <FaNode className="text-red-600" /> },
  ];

  const projects = [
    "Portfolio Website",
    "Todo App with MongoDB",
    "E-Commerce Store (Full-Stack)",
    "Authentication System with JWT",
    "Blog Platform with Admin Panel",
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white border border-gray-800 shadow-md space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center">
        MERN Stack Training – Course Overview
      </h1>
      <p className="text-gray-700 text-center text-base sm:text-lg">
        A 6-month hands-on program to become a full-stack MERN developer.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MdOutlineIntegrationInstructions className="text-blue-600" />
          What You’ll Learn
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-sm sm:text-base">
          {techStack.map(({ name, icon }) => (
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

      {/* ✅ Render Modal */}
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

export default MERNDetail;
