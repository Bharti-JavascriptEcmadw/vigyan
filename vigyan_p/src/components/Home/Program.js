import React, { useState } from "react";
import InquiryForm from "./InquiryForm"; // Adjust path as needed

const topics = [
  {
    name: "AI",
    icon: "🤖",
    description: "Explore the basics of Artificial Intelligence with fun, age-appropriate lessons that make learning futuristic tech exciting.",
  },
  {
    name: "Robotics",
    icon: "🛠️",
    description: "Hands-on learning with robotics to boost problem-solving, creativity, and real-world tech skills.",
  },
  {
    name: "Drone",
    icon: "🚁",
    description: "Discover how drones work and fly! A perfect intro to aerodynamics and fun flight simulations.",
  },
  {
    name: "STEM Learning",
    icon: "🔌",
    description: "Understand circuits, sensors, and electronic components hands-on.",
  },
  {
    name: "IOT",
    icon: "🌐",
    description: "Build smart devices and understand how the Internet of Things connects our world in amazing ways.",
  },
  {
    name: "Coding & Logic Building",
    icon: "💡",
    description: "Develop problem-solving skills by learning coding logic using games, puzzles, and simple programs.",
  },
  {
    name: "App Inventor",
    icon: "📱",
    description: "Design and build your own apps using MIT App Inventor. No experience needed, just imagination!",
  },
  {
    name: "Web Development",
    icon: "🌍",
    description: "Create your first website using HTML, CSS, and JavaScript. A great start to becoming a web creator!",
  },
];

const AiToolsCourse = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gray-200 text-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black font-bold mb-2 tracking-wide">Explore Our Program</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
        <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold">
          We Provide the Best Education for Young Learners
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg flex flex-col justify-between"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-500 text-white p-4 rounded-full text-4xl mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
              <p className="text-gray-300 text-sm mb-6">{topic.description}</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
            >
              ENROLL NOW
            </button>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {showModal && <InquiryForm onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default AiToolsCourse;
