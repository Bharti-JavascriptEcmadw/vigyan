

import React from "react";

const image_list = [
  "/assets/rotate_gallery/1.jpg",
  "/assets/rotate_gallery/2.jpg",
  "/assets/rotate_gallery/3.jpg",
  "/assets/rotate_gallery/4.jpg",
  "/assets/rotate_gallery/5.jpg",
  "/assets/rotate_gallery/6.jpg",
  "/assets/Gallery/schoolp1.jpeg",
  "/assets/Gallery/schoolp2.jpeg",
  "/assets/Gallery/3.jpg",
  "/assets/savitri/cbse.jpg",
  "/assets/video_gallery/2.jpg",
  "/assets/video_gallery/3.jpg",
  "/assets/video_gallery/4.jpg",
  "/assets/video_gallery/5.jpeg",
  "/assets/video_gallery/6.jpg",
  "/assets/video_gallery/7.jpg",
  "/assets/video_gallery/8.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-700">
          Schools Empowered by Our Robotic Training
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Here's a glimpse of the institutions where we have successfully conducted hands-on robotic training programs, nurturing young innovators and future tech leaders.
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper overflow-hidden relative">
        <div className="carousel-track flex space-x-6 animate-scroll">
          {[...image_list, ...image_list].map((imag, index) => (
            <div key={index} className="carousel-card w-64 p-4 flex-shrink-0">
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow mb-4">
                <img
                  src={imag}
                  alt={`Gallery_Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
