import React, { useState } from "react";

const curriculum = {
  "Class 1 to 5": {
    "Introduction to Robotics": [
      "Blinking LED",
      "Match the Column",
      "Pencil Electric Light",
      "Table Lamp",
      "Electric Fan",
    ],
    "Basic STEM Activities": [
      "Wired Robot",
      "Water Level Indicator",
      "Beam Robot",
      "Edge Avoiding Robot",
      "Automatic Water Dispenser",
    ],
    "Creative Coding for Kids": ["Scratch"],
  },
  "Class 6 to 8": {
    "Robotics Basic": [
      "Power Bank",
      "Solar Night Lamp",
      "Touch Switch",
      "Power Bank",
      "Clapping Light",
    ],
    "Autobot Robotics": [
      "Line Follower Robot",
      "Obstacle Avoider Robot",
      "Mars Rover",
      "SMART DUSTBIN",
      "Automatic Irrigation System",
    ],
    "Hands-on Coding": [
      "Water Quantity Monitoring System",
      "Home Automation",
      "Bluetooth Control Robot",
      "RADAR",
      "MIT App Inventor",
    ],
  },
  "Class 9 to 12": {
    "Advanced Robotics": [
      "Voice Control CAR",
      "Alcohol Detector",
      "Touch Based Piano",
      "Solar Tracking System",
      "Smart Irrigation System",
    ],
    "AI & STEM": [
      "Create a basic command-line chatbot",
      "Build a text generation app using GPT models",
      "Design a custom virtual assistant",
      "Build a text-to-image app and basic TTS model",
      "Build an AI writing assistant or voice bot",
    ],
    "ATL Projects": [
      "Drone Assembly",
      "Drone Training",
      "Smoke Detector",
      "WiFi Control Robot",
      "Path Finder Robot",
    ],
  },
};

const Curriculum = () => {
  const classKeys = Object.keys(curriculum);
  const [activeTab, setActiveTab] = useState(classKeys[0]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Robotics Curriculum</h1>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {classKeys.map((classKey) => (
          <button
            key={classKey}
            onClick={() => setActiveTab(classKey)}
            className={`px-4 py-2 rounded-full border font-medium transition 
              ${
                activeTab === classKey
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
              }`}
          >
            {classKey}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {Object.entries(curriculum[activeTab]).map(([section, topics]) => (
          <div key={section} className="bg-white shadow-md rounded-xl p-4 border">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{section}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
