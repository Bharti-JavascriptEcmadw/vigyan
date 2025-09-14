import React from "react";

const topics = [
  "AI",
  "Robotics",
  "Drone",
  "Electronics",
  "IOT",
  "Coding & Logic Building",
  "App Inventor"
];

const TopicCard = ({ onSelectTopic }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {topics.map((topic) => (
        <div
          key={topic}
          className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-4">{topic}</h2>
          <button
            onClick={() => onSelectTopic(topic)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            View Quiz
          </button>
        </div>
      ))}
    </div>
  );
};

export default TopicCard;
