import React from "react";

const FourImages = () => {
  const images = [
    {
      src: "/assets/b/c/1.jpeg",
      title: "Robot Assembly Session",
    },
    {
      src: "/assets/b/c/3.png",
      title: "AI Programming Lab",
    },
    {
      src: "/assets/b/c/2.jpg",
      title: "Computer Lab",
    },
  
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 font-mono">
          Explore Our Labs & Workshops
        </h2>
        <p className="mt-3 text-gray-300">
          Glimpses from our hands-on learning sessions in Robotics and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg border-2 border-cyan-500 bg-gray-800"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-cyan-300 font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourImages;
