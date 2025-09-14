import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Hands-on Robotic Training',
      text: 'Students learn by building and coding real robots using industry-grade kits.',
      color: 'text-cyan-600'
    },
    {
      title: 'Expert Mentorship',
      text: 'Learn from mentors with years of real-world experience in robotics, AI, and STEM.',
      color: 'text-purple-600'
    },
    {
      title: 'Project-Based Learning',
      text: 'Every session is designed around solving real-life problems and creating smart solutions.',
      color: 'text-emerald-600'
    },
    {
      title: 'Flexible Schedule',
      text: 'Evening and weekend classes available to accommodate working professionals.',
      color: 'text-rose-600'
    }
  ];

  return (
    <div className="w-full bg-blue-400 py-16"> {/* Light cyan-blue background */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Why Students  <span className="text-black"> Love Learning with Us</span>
          </h1>
          <p className="text-white font-bold mt-4 max-w-2xl mx-auto text-lg">
            We provide industry-led robotics and AI training to ignite creativity, enhance problem-solving, and build future-ready skills in students.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
          {reasons.map(({ title, text, color }, i) => (
            <div
              key={i}
              className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white p-6 rounded-2xl shadow-md w-full sm:w-[45%] lg:w-[22%] border border-gray-200"
            >
              <h2 className={`text-xl font-semibold mb-3 text-center ${color}`}>{title}</h2>
              <p className="text-gray-600 text-sm text-center">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
