// src/components/ModernCoderCourses.jsx
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import InquiryForm from './InquiryForm'; // adjust path if needed

const courses = [
  {
    title: 'Python and AI',
    subtitle: 'Master AI implementation in Python',
    imageText: 'Python and AI\nBASIC TO ADVANCE',
    price: '₹2,999.92',
  },
  {
    title: 'AI',
    subtitle: 'Dive deep into Artificial Intelligence fundamentals and applications',
    imageText: 'Artificial Intelligence\nBASIC TO ADVANCE',
    price: '₹3,499.00',
  },
  {
    title: 'Robotics',
    subtitle: 'Learn the basics of Robotics and automation',
    imageText: 'Robotics\nBASIC TO ADVANCE',
    price: '₹2,299.00',
  },
  {
    title: 'Drone Technology',
    subtitle: 'Explore drone design, control, and applications',
    imageText: 'Drone Technology\nBASIC TO ADVANCE',
    price: '₹3,199.00',
  },

  {
    title: 'IoT (Internet of Things)',
    subtitle: 'Master connected devices and IoT ecosystems',
    imageText: 'IoT\nBASIC TO ADVANCE',
    price: '₹4,399.00',
  },
  {
    title: 'Coding & Logic Building',
    subtitle: 'Build strong programming logic and problem-solving skills',
    imageText: 'Coding & Logic\nBASIC TO ADVANCE',
    price: '₹1,799.00',
  },
  {
    title: 'App Inventor',
    subtitle: 'Create mobile apps easily with App Inventor',
    imageText: 'App Inventor\nBASIC TO ADVANCE',
    price: '₹4,599.00',
  },
  {
    title: 'Web Development',
    subtitle: 'Learn front-end and back-end web development',
    imageText: 'Web Development\nBASIC TO ADVANCE',
    price: '₹6,000.00',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Master SEO, social media, and digital campaigns',
    imageText: 'Digital Marketing\nBASIC TO ADVANCE',
    price: '₹8,699.00',
  },
];

const bgColors = [
  { bg: 'bg-blue-900',    text: 'text-blue-200' },
  { bg: 'bg-gray-800',    text: 'text-gray-300' },
  { bg: 'bg-teal-900',    text: 'text-teal-300' },
];

const CourseCard = ({ title, subtitle, imageText, price, index, onEnroll }) => {
  const { bg, text } = bgColors[index % bgColors.length];

  return (
    <div className={`${bg} rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6`}>
      <div
        className={`bg-white bg-opacity-10 w-64 h-40 md:h-44 flex items-center justify-center rounded-3xl text-center px-4 font-bold text-xl whitespace-pre-line ${text}`}
      >
        {imageText}
      </div>

      <div className="flex flex-col gap-4 md:text-left text-center text-white">
        <h3 className={`text-lg md:text-xl font-semibold ${text}`}>{title}</h3>
        <p className="text-gray-300 text-sm md:max-w-md">{subtitle}</p>
        <button
          onClick={() => onEnroll({ title, subtitle, price })}
          className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-6 rounded-md shadow transition duration-300 w-fit mx-auto md:mx-0"
        >
          Enroll for {price}
        </button>
      </div>
    </div>
  );
};

const ModernCoderCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section className="bg-gray-200 min-h-screen py-16 px-6 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        "Book Your Slot Now! Are You Ready to Build Your Career?"
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <CourseCard
            key={idx}
            index={idx}
            {...course}
            onEnroll={handleEnrollClick}
          />
        ))}
      </div>

      {isModalOpen && selectedCourse && (
        <InquiryForm course={selectedCourse} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default ModernCoderCourses;
