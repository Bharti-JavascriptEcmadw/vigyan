import React from 'react';

const InfoCards = () => {
  const cards = [
    {
      image: '/assets/st/24.jpg',
      description:
        "Vigyan Pathshala Technologies has been honored with the prestigious award for providing the Best Solutions for K-12 Schools at the Indian Education Congress & Awards 2024!",
    },
    {
      image:     "/assets/st/22.jpg",
      description:
        "Our STEM-based robotics labs empower students to innovate and explore through hands-on learning and real-world problem solving.",
    },
    {
      image:     "/assets/st/23.jpg",

      description:
        "We integrate cutting-edge IoT and AI modules into school curriculums, preparing children for the technologies of tomorrow.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f0f4f8] to-[#e0f2f1] py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-12 xl:py-28 xl:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
          <span className="inline-block mr-2">🎖️</span>
          Our Achievements & Initiatives
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 lg:mb-16 max-w-xl sm:max-w-2xl mx-auto">
          Celebrating innovation in education through real-world applications, national recognitions, and impactful STEM programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-4 sm:p-5 md:p-6 flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={card.image}
                  alt="Achievement"
                  className="w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 object-cover"
                />
              </div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
