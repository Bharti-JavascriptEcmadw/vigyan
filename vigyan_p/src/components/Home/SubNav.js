import React from "react";

const topics = [
  { name: "Online Course", target: "robotics" },
  { name: "Buy Course", target: "buy-course" },
  { name: "Quiz", target: "quiz" },
  { name: "Our Programs", target: "program" },
  { name: "Technologies", target: "tech" },
  { name: "Our Labs & Workshops", target: "iot" },
  { name: "Gallery", target: "gallery" },
  { name: "Achievements", target: "achievements" },
  { name: "Experts", target: "experts" },
  { name: "Courses", target: "carousel" },

  { name: "Our Partner Schools", target: "partnerschool" },
];

const SubNavbar = ({ onScroll }) => {
  return (
    <div className="w-full bg-gray-300 shadow-md ">
      <ul className="w-full flex flex-wrap justify-center gap-2 py-3 px-4 text-sm font-medium text-gray-700">
        {topics.map(({ name, target }, index) => (
          <li key={index} className="px-2">
            <button
              onClick={() => onScroll(target)}
              className="hover:text-blue-600 transition-colors"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
