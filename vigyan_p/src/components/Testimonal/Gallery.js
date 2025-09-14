import React from "react";

const successImages = [
  "/assets/st/8.jpg",
  "/assets/st/9.jpg",
  "/assets/st/16.jpg",
  "/assets/st/18.jpg",
  "/assets/st/17.jpg",
  "/assets/st/23.jpg",
  "/assets/st/8.jpg",
  "/assets/st/12.jpg",
];

const SuccessImagesGallery = () => {
  return (
    <section className="py-12 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        {/* Inline grid with 5 columns and center justification */}
        <div className="inline-grid grid-cols-5 gap-6 justify-center items-center max-w-[1300px] w-full">
          {successImages.map((imgSrc, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg border border-gray-200"
            >
              <img
                src={imgSrc}
                alt={`Success Story ${index + 1}`}
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessImagesGallery;
