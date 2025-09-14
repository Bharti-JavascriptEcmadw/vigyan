import React from "react";

const achievements = [
  {
    id: 1,
    image: "/assets/st/24.jpg",
    alt: "Achievement 1",
  },
  {
    id: 2,
    image: "/assets/st/22.jpg",
    alt: "Achievement 2",
  },
  {
    id: 3,
    image: "/assets/st/23.jpg",
    alt: "Achievement 3",
  },
  {
    id: 4,
    image: "/assets/st/25.jpeg",
    alt: "Achievement 4",
  },
];

const OurAchievementSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-10">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="border-4 border-blue-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-56 sm:h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievementSection;
