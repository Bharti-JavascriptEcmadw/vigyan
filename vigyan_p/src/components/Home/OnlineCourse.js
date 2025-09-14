
import React from "react";
import { NavLink } from "react-router-dom";

const courses = [
  {
    title: "MERN Stack Development",
    subtitle: "Full Stack Development with MongoDB, Express, React, and Node.js",
    slug: "mernstack",
    categories: ["Beginner to Advanced", "Full Stack", "Project-Based", "Live Classes"],
  },
  {
    title: "Web Development Fundamentals",
    subtitle: "Learn HTML & CSS from Scratch",
    slug: "html-css-basics",
    categories: ["Beginner Friendly", "Frontend", "Basic to Advance"],
  },
  {
    title: "AI & Robotics for Kids",
    subtitle: "Hands-on Introduction to Artificial Intelligence and Robotics",
    slug: "ai-robotics-bots",
    categories: ["Class 1 to 5", "Class 6 to 12", "STEM", "Live Classes"],
  },
  {
    title: "Digital Marketing",
    subtitle: "Fundamentals of SEO, Social Media, and Online Advertising",
    slug: "digital-marketing",
    categories: ["Marketing", "Basic to Advance", "Practical Training", "Live Classes"],
  },
];


const OnlineCourse = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 text-gray-800 py-12 px-4 md:px-16">
      <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-14">
        Online Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={course.slug}
            className={`border-2 border-blue-400 rounded-2xl p-8 bg-white shadow-lg flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300
              ${index === 3 ? "lg:col-start-2" : ""}`}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-3">{course.title}</h2>
            <h3 className="text-lg text-teal-700 mb-5 font-medium">{course.subtitle}</h3>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {course.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium border border-blue-300"
                >
                  {cat}
                </span>
              ))}
            </div>

            <NavLink to={`/courses/${course.slug}`}>
              <button className="bg-blue-700 text-white text-base px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-200">
                View Details
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineCourse;
