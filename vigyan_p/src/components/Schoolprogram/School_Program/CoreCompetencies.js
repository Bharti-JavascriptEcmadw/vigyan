import React from "react";

const competencies = [
  {
    title: "R&D: Product Development",
    image: "/assets/SchoolProgram/7.jpg", // Replace with your image path
    points: [
      "Strong in-house product development",
      "More than 10 kinds of DIY kits developed so far",
      "In-house developed coding and AI platform",
    ],
  },
  {
    title: "Operations and Executions",
    image: "/assets/SchoolProgram/5.jpg", // Replace with your image path
    points: [
      "200+ engineers and global network",
      "Network of trained teachers",
      "Strong Op-Ex team for quality delivery",
    ],
  },
  {
    title: "Methodology and Pedagogy",
    image: "/assets/SchoolProgram/7.jpg", // Replace with your image path
    points: [
      "STEM, coding, robotics, and experiential content",
      "Content deployed via LMS",
      "Regional customization",
      "Apps on Android and iOS",
    ],
  },
];

const CoreCompetencies = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Vigyan Pathshala –{" "}
          <span className="text-teal-600">Core Competencies</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 transform transition hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
