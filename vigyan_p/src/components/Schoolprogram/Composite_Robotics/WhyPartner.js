

import React, { useState } from "react";

const reasons = [
  {
    title: "Innovative Robotics & STEAM Curriculum",
    content:
      "We offer a cutting-edge curriculum integrating Robotics, Artificial Intelligence, and STEAM to foster hands-on, future-ready learning for students aged 6–18.",
  },
  {
    title: "Alignment with NEP 2020 and CBSE Guidelines",
    content:
      "Our robotics programs are designed in full compliance with NEP 2020 and CBSE skill-based education policies to ensure relevance and recognition.",
  },
  {
    title: "Future-Ready Skills Development",
    content:
      "We equip students with 21st-century skills such as problem-solving, critical thinking, and technological adaptability through project-based learning in robotics.",
  },
  {
    title: "Comprehensive Teacher Training & Support",
    content:
      "We empower educators with structured training, implementation guides, and ongoing support to deliver robotics education with confidence and clarity.",
  },
  {
    title: "Real-World Industry Exposure",
    content:
      "Our industry partnerships and mentorship programs allow students to explore real-world applications of robotics and innovation early on.",
  },
  {
    title: "Customizable Learning Solutions",
    content:
      "Our robotics labs and solutions are adaptable to your school’s needs—whether it’s infrastructure, grade levels, or specific learning objectives.",
  },
  {
    title: "Proven Track Record and Reliability",
    content:
      "Trusted by numerous institutions, we consistently deliver reliable, scalable, and impactful solutions in the education technology space.",
  }
];


const WhyPartner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-700 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-4">
          Why Partner With Vigyan Pathshala?
        </h2>
        <p className="text-white text-center mb-10 text-lg font-medium">
          We aim to enhance the educational experience for students aged 6–18 across India. Through our integrated STEAM,
          Artificial Intelligence, Robotics, and Coding curriculum, coupled with cutting-edge technology products, we aspire
          to contribute to the holistic development of students aligned with the objectives of NEP 2020.
        </p>

        <div className="space-y-5">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center py-4 px-6 text-lg font-bold text-left text-black focus:outline-none"
                onClick={() => toggle(index)}
              >
                {item.title}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 text-gray-700 text-base font-medium transition-all duration-200 ease-in-out">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
