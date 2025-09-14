import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {Link } from 'react-router-dom'
const VideoSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const questions = [
    'What is robotics education?',
    'What age group is suitable for robotics courses?',
    'Do I need prior experience in robotics to join?',
    'What types of robotics courses do you offer?',
  ];

  const answers = [
    'Robotics education involves learning the principles of designing, building, and programming robots. Students gain hands-on experience with robotics kits and work on projects to understand automation, control systems, and problem-solving techniques.',
    'Our robotics courses are designed for students of various age groups, ranging from young learners (7 years and up) to high school and college students. We offer beginner to advanced courses tailored to different skill levels.',
    'No prior experience is required! Our courses are designed for beginners and advanced learners alike. You’ll start with the basics and gradually progress to more complex concepts as you go through the program.',
    'We offer a wide range of robotics courses, including introductory courses on robotics, programming languages like Python and C++, automation, AI, and advanced robotics design and engineering courses.',
  ];

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold text-white bg-gray-900 hover:bg-teal-600 px-4 py-2 rounded-md flex justify-between items-center"
            >
              {question}
              <span className="text-xl">
                {activeFAQ === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {activeFAQ === index && (
              <p className="text-gray-700 mt-2 px-4">{answers[index]}</p>
            )}
          </div>
        ))}

        {/* <div className="mt-8 text-center">
          <Link to="/event">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Event
          </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default VideoSection;
