import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaLightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-300" />,
    title: "Hands-On Learning",
    description:
      "Children learn by doing—building real robots and coding with their own hands.",
  },
  {
    icon: <FaRocket className="h-10 w-10 sm:h-12 sm:w-12 text-pink-300" />,
    title: "Boost Creativity",
    description:
      "Our events ignite imagination and help children create unique, innovative solutions.",
  },
  {
    icon: <FaUsers className="h-10 w-10 sm:h-12 sm:w-12 text-blue-300" />,
    title: "Team Collaboration",
    description:
      "Participants work in teams, make new friends, and develop strong communication skills.",
  },
  {
    icon: <FaTrophy className="h-10 w-10 sm:h-12 sm:w-12 text-green-300" />,
    title: "Competitions & Rewards",
    description:
      "Fun challenges and meaningful prizes inspire young minds and celebrate their achievements.",
  },
];

const EventHighlights = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 mb-6 tracking-tight drop-shadow">
          Why Join Our Events?
        </h2>
        <p className="text-black font-semibold text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          Our programs are crafted to inspire curiosity, nurture confidence, and unlock creative potential. Here's what makes them exceptional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#1e293b] to-[#334155] rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
