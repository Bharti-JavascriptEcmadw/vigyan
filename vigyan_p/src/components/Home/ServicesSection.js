
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom"
const services = [
  {
    title: "STEM & Robotics Lab",
    description:
      "An experiential learning environment where students explore science, technology, engineering, and math through robotics, coding, and hands-on innovation.",
    video: "/assets/Home/1.mp4",
  },
  {
    title: "AI & IoT Lab",
    description:
      "A cutting-edge lab designed to introduce students to Artificial Intelligence and the Internet of Things through practical applications, projects, and future-ready technologies.",
    video: "/assets/Home/34.mp4",
  },
  {
    title: "AR/VR Lab",
    description:
      "Immersive labs that enable students to experience learning through Augmented and Virtual Reality, making complex concepts interactive and engaging.",
    video: "/assets/Home/7.mp4",
  },
  {
    title: "21st Century Showcase School",
    description:
      "Transform your institution into a model of modern education with NEP-aligned methodologies, smart classrooms, and a future-ready learning culture.",
    video: "/assets/Home/15.mp4",
  },
  {
    title: "Pre-Tinkering Lab",
    description:
      "Specially crafted for younger learners, this lab sparks curiosity and foundational innovation through guided activities and age-appropriate tools.",
    video: "/assets/Home/14.mp4",
  },
  {
    title: "ATAL Tinkering Lab",
    description:
      "Comprehensive ATL setup including high-quality DIY kits, expert mentorship, and training programs to nurture innovation and entrepreneurship in students.",
    video: "/assets/Home/12.mp4",
  },
];

const ServicesSection = () => {
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (video) => {
    setModalVideo(video);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <section
className="w-full bg-gradient-to-r from-blue-400 to-blue-100 pt-5 px-6 sm:px-10 lg:px-20"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h3 className="text-teal-900 font-medium uppercase tracking-widest text-sm mb-4">
          Our Services
        </h3>
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6 leading-tight">
           <span className="text-teal-800">Our Classroom  Program</span>
        </h2>
        <h3 className="text-5xl sm:text-5xl font-bold text-black mb-6 leading-tight">
        Explore Our <span className="text-black">Labs & Workshops</span>
        </h3>
        <p className="text-blue-900 text-base sm:text-lg">
   Glimpses from our hands-on learning sessions in Robotics and AI.


        </p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-7 rounded 
      bg-gradient-to-l from-blue-400 to-blue-100 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-500 p-6 flex flex-col group
            animate-rotateYLeft  border-t-4 border-t-solid border-t-blue-500"
            style={{borderTopLeftRadius:"20%",borderBottomRightRadius:"20%"}}
          >
            <div
              className="relative h-44 w-full mb-5 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(service.video)}
            >
              <video
                src={service.video}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold">Play</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow">
              {service.description}
            </p>
            <Link to="/lab-in-action">
            <button className="mt-6 self-start bg-gray-900 p-3 rounded text-white font-medium hover:bg-cyan-400 transition">
              Learn More →
            </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500 z-50"
            >
              <AiOutlineClose />
            </button>
            {/* Video Player with smaller size */}
            <video
              src={modalVideo}
              className="w-full max-h-[60vh] object-contain"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;







