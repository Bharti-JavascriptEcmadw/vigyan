import React, { useState, useEffect } from "react";

const kits = [
  { id: 1, image: "/assets/SchoolProgram/kits2.jpg", alt: "Tinkering Kit" },
  { id: 2, image: "/assets/SchoolProgram/kits3.jpg", alt: "Tinker Oddi" },
  { id: 3, image: "/assets/SchoolProgram/kits4.jpg", alt: "BitU Kit" },
  { id: 4, image: "/assets/SchoolProgram/kits5.jpg", alt: "Arduino Kit" },
  { id: 5, image: "/assets/SchoolProgram/kits6.jpg", alt: "Sensor Kit" },
  { id: 6, image: "/assets/SchoolProgram/kits5.jpg", alt: "Drone Kit" },
  { id: 7, image: "/assets/SchoolProgram/kits6.jpg", alt: "AI Kit" },
  { id: 8, image: "/assets/SchoolProgram/kits2.jpg", alt: "Mechanics Kit" },
];

const DIYKitsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= kits.length ? 0 : prev + visibleCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleCount < 0 ? kits.length - visibleCount : prev - visibleCount
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const visibleKits = kits.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="py-10 bg-gray-100 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">
          Offerings to Make Your School Ready for the 21st Century
        </h2>
      <h2 className="text-4xl font-bold text-teal-700 mb-10">
        Do It Yourself Kits
      </h2>

      <div className="flex justify-center items-center gap-6 px-6">
        <button
          onClick={prevSlide}
          className="text-4xl text-teal-600 hover:text-teal-800"
        >
          &#8592;
        </button>

        <div className="flex gap-6 overflow-hidden transition-all duration-700">
          {visibleKits.map((kit) => (
            <div
              key={kit.id}
              className="w-64 h-64 bg-gray-200 rounded-xl shadow-lg border-b-4 border-teal-500 p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={kit.image}
                alt={kit.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-4xl text-teal-600 hover:text-teal-800"
        >
          &#8594;
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-3">
        {Array.from({ length: Math.ceil(kits.length / visibleCount) }).map(
          (_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex / visibleCount === index
                  ? "bg-teal-600"
                  : "bg-gray-400"
              }`}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default DIYKitsCarousel;
