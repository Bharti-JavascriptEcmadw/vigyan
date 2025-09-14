
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const helpItems = [
  {
    title: "Lab Design and Setup",
    content:
      "At Vigyan Pathshala, we specialize in creating Composite Robotics Labs that are customized to meet the unique needs of your school. Whether you’re setting up a Skill Lab for CBSE Schools or a specialized AI Skill Lab, our team provides tailored designs that ensure the optimal use of space and resources.",
  },
  {
    title: "State-of-the-Art Equipment",
    content:
      "Vigyan Pathshala provides all the necessary tools, machinery, and technology to equip your Composite Robotics Lab. From AI Skill Labs to Composite Science Laboratories, we ensure that your lab is fully equipped with industry-standard equipment. This enables students to engage in practical, hands-on training that aligns with CBSE’s mandate and prepares them for real-world challenges.",
  },
  {
    title: "Curriculum Integration",
    content:
      "We assist schools in seamlessly integrating skill-based education into their existing curriculum, in line with the National Curriculum Framework for School Education (NCF-SE). Our team works closely with educators to develop a curriculum that incorporates vocational courses designed to foster skill development. Whether it’s an AI Skill Lab or a Composite Science Lab, we ensure that the curriculum meets the educational standards set forth by NEP 2020 and CBSE.",
  },
  {
    title: "Training and Support",
    content:
      "Vigyan Pathshala offers continuous support for both educators and students to maximize the effectiveness of the Composite Robotics Lab.",
  },
];

const HowVigyanCanHelp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-4">
          How Vigyan Pathshala Can Help
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          We empower schools to implement <span className="font-semibold text-indigo-600">Composite Robotics Labs</span> aligned with <span className="font-medium">CBSE and NEP 2020</span> through lab setup, training, and curriculum integration.
        </p>

        <div className="space-y-5">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.title}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-indigo-600 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-400 transition-transform duration-300" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pt-3 pb-6 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
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

export default HowVigyanCanHelp;
