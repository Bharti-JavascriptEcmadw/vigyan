import React from 'react';

const MissionVision = () => {
  return (
    <section className="text-center py-16 px-4 md:px-20 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold underline text-purple-900 mb-12">
        Our Mission <span className="text-red-600">& Vision</span>
      </h2>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600 text-left">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm">
            To spark innovation and creativity in young minds through practical, hands-on learning in robotics, AI, and STEM. We aim to build critical thinking and technical skills that prepare students for the challenges of the future.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 text-left">
          <h3 className="text-xl font-semibold text-red-700 mb-2">Our Vision</h3>
          <p className="text-gray-700 text-sm">
            To become a leading platform for next-generation tech education, empowering students to become creators, innovators, and leaders in science and technology across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
