import React, { useState } from "react";
import { FaBullhorn, FaSearch, FaEnvelope, FaChartLine, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineChecklist, MdOutlineIntegrationInstructions } from "react-icons/md";
import ApplyFormModal from "./ApplyFormModal"; // ✅ Assuming you already have this

const DigitalMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", education: "", city: "", mode: "", message: ""
  });

  const tools = [
    { name: "SEO (Search Engine Optimization)", icon: <FaSearch className="text-green-600" /> },
    { name: "Email Marketing", icon: <FaEnvelope className="text-red-500" /> },
    { name: "Google Ads", icon: <FaGoogle className="text-yellow-600" /> },
    { name: "Social Media Marketing", icon: <FaFacebook className="text-blue-700" /> },
    { name: "Instagram Ads", icon: <FaInstagram className="text-pink-600" /> },
    { name: "Analytics & Reporting", icon: <FaChartLine className="text-indigo-700" /> },
    { name: "Campaign Strategy", icon: <FaBullhorn className="text-orange-500" /> },

        { name: "Graphic Designing ", icon: <FaBullhorn className="text-orange-500" /> },
        { name: "Video Marketing", icon: <FaBullhorn className="text-orange-500" /> },
        { name: "Marketing Foundation", icon: <FaBullhorn className="text-orange-500" /> },
        { name: "Building your Business Website", icon: <FaBullhorn className="text-orange-500" /> },

  ];

  const projects = [
    "Run a Live Facebook/Instagram Ad Campaign",
    "Create a Google Ads Campaign",
    "Develop a Blog with SEO Optimization",
    "Build an Email Marketing Funnel",
    "Social Media Marketing Plan for a Brand",
    "Business Website by Wordpress"
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white border border-gray-800 shadow-md space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center">
        Digital Marketing Training – Course Overview
      </h1>
      <p className="text-gray-700 text-center text-base sm:text-lg">
        A complete training program to master online marketing, advertising, and branding strategies.
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

export default DigitalMarketing;
