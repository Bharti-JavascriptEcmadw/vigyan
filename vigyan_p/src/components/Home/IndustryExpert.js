import React from 'react';
// import { Link } from 'react-router-dom';

const expertData = [
  {
    name: 'Harshal Jaiswal',
    role: 'AI & Robotics & IoT Specialist',
    description:
      'Robotics expert with 8+ years in AI-based automation and embedded systems. Has worked with IIT incubators and trained students on real-time projects.',
    img: '/assets/about/Harshal.jpeg',
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
  },
  {
    name: 'Sachin',
    role: 'IoT & Automation Trainer',
    description:
      'Trainer with 8+ years in Internet of Things and embedded automation. Helps students build real-world hardware-software integrated solutions.',
    img: '/assets/about/Sachin.jpeg',
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
  },
  {
    name: 'Suraj',
    role: 'AI & Robotics Specialist',
    description:
      'Robotics expert with 8+ years in AI-based automation and embedded systems. Has worked with IIT incubators and trained students on real-time projects.',
    img: '/assets/about/Suraj.jpeg',
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
  },

];

const IndustryExpert = () => {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Meet Our Trainer <span className="text-cyan-600">Industry Level Experts</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {expertData.map((expert, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className="w-full h-auto flex justify-center items-center mb-3">
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full max-h-52 sm:max-h-64 md:max-h-48 object-cover object-top
 rounded-lg border-4 border-cyan-500 shadow-md"
                style={{position:"top"}}
              />
            </div>
            <h3 className="text-lg font-bold text-black">{expert.name}</h3>
            <p className="text-cyan-600 text-sm font-semibold">{expert.role}</p>
            <p className="text-xs text-black mt-2">{expert.description}</p>

            {/* Uncomment to add LinkedIn button */}
            {/* <a
              href={expert.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 text-sm font-bold shadow-md transition duration-300 tracking-wide">
                Connect on LinkedIn
              </button>
            </a> */}

            {/* <Link to="/contact" className="mt-2">
              <button className="bg-cyan-500 text-white hover:bg-cyan-600 px-4 py-1.5 text-sm font-bold shadow-md transition duration-300 tracking-wide">
                Connect
              </button>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryExpert;
