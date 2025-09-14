import React, { useState, useEffect, useMemo } from "react";

const PhotoGrid = () => {
  const images = useMemo(() => [
    "/assets/video_gallery/9.jpg",
    "/assets/video_gallery/8.jpg",
    "/assets/video_gallery/7.jpg",
    "/assets/video_gallery/4.jpg",
    "/assets/video_gallery/5.jpeg",
    "/assets/video_gallery/6.jpg",
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="mb-8">
      <div className="relative w-60 h-60 mx-auto rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={images[currentIndex]} 
            alt={`Gallery ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
