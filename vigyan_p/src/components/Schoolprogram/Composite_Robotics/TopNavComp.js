import React from "react";

const topics = [
  { name: "Composite Robotics Lab", target: "composite" },
  { name: "Mandatory Implementation", target: "mandatory" },
  { name: "The Importance Of Lab", target: "importance" },
  { name: "Why Partner With Vigyan Pathshala", target: "whyus" },
  
];

const AboutNav = ({ onScroll }) => {
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

export default AboutNav;
