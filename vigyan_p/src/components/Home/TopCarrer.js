
import React from "react";
import { NavLink } from "react-router-dom";

const courseData = [
  {
    program: "Robotics & AI",
    slug: "ai-robotics-bots",
    courses: [
      "AI & Robotics",
      "Internet Of Things (IoT)",
      "Drone Technology",
      "AI Fundamentals",
      "STEM Projects",
    ],
  },
  {
    program: "Web Development",
    slug: "html-css-basics",
    courses: [
      "Frontend: HTML, CSS, JavaScript, React.js",
      "Backend: Node.js, Express.js, PHP, Django",
      "Database: MongoDB, MySQL, PostgreSQL",
      "Full Stack: MERN Stack (MongoDB, Express, React, Node.js)",
    ],
  },
  {
    program: "Digital Marketing",
    slug: "digital-marketing",
    courses: [
      "SEO & Google Ads",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Email Marketing & Automation",
      "Affiliate Marketing",
    ],
  },
  {
    program: "Programming & Logic",
    slug: "programming-logic",
    courses: [
      "DSA (Data Structures & Algorithms)",
      "Coding & Logic Building",
      "C/C++ Basics & Projects",
      "Python Programming with Logic",
    ],
  },
  {
    program: "Language",
    slug: "programming-languages",
    courses: ["Python", "JavaScript", "Node.js", "C, C++", "PHP"],
  },
];

const TopCarrer = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Top Career Domains For Tech Enthusiasts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4">📘 {item.program}</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              {item.courses.map((course, idx) => (
                <li key={idx} className="font-medium">{course}</li>
              ))}
            </ul>

            {item.slug ? (
              <NavLink to={`/courses/${item.slug}`}>
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                  Explore Courses
                </button>
              </NavLink>
            ) : (
              <button
                disabled
                className="w-full mt-4 px-4 py-2 bg-gray-300 text-white rounded cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCarrer;
