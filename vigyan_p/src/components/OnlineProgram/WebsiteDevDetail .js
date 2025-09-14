import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaWordpressSimple,
  FaFigma, FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineIntegrationInstructions, MdOutlineChecklist } from "react-icons/md";
import ApplyFormModal from "./ApplyFormModal"; // Reuse your existing modal

const WebsiteDevDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", education: "", city: "", mode: "", message: ""
  });

  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  ];

  const projects = [
    "Personal Portfolio Website",
    "Business Landing Page",
    "Responsive Blog Template",
    "E-commerce Website",
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white border border-gray-800 shadow-md space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center">
        Website Development Training – Course Overview
      </h1>
      <p className="text-gray-700 text-center text-base sm:text-lg">
        A 3-month intensive program to master modern website development tools and techniques.
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

export default WebsiteDevDetail;
