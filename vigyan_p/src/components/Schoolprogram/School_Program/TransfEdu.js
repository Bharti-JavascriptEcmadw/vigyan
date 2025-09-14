

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    image: "/assets/video_gallery/2.jpg",
    title: "Empowering kids to become Creative Thinkers & Problem Solvers",
  },
  {
    image: "/assets/video_gallery/9.jpg",
    title: "Providing Integrated End-To-End Solution for Schools aligned with NEP",
  },
  {
    image: "/assets/video_gallery/3.jpg",
    title: "Equipping kids with Innovation & 21st Century Skills",
  },
  {
    image: "/assets/video_gallery/12.jpeg",
    title: "Preparing Students for rapidly changing Technological World",
  },
];

const TransfEdu = () => {
  const carouselRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const interval = setInterval(() => {
      if (!carouselRef.current || isHovered) return;

      const container = carouselRef.current;
      const scrollStep = 1;
      const scrollWidth = container.scrollWidth;
      // const clientWidth = container.clientWidth;

      container.scrollLeft += scrollStep;

      // Reset to the start when halfway through the duplicated content
      if (container.scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!hasMounted) return null;

  // Duplicate the features to allow seamless scrolling
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-black leading-snug tracking-wide">
        Transforming Education and Fostering Future Innovators through our world-class curriculum and pedagogy
        </h2>
        
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto gap-6 px-2 py-4 max-w-7xl mx-auto scroll-smooth scrollbar-hide"
      >
        {duplicatedFeatures.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: (index % features.length) * 0.2 }}
            className="w-[250px] h-[320px] bg-white border border-cyan-400 p-4 text-center shadow-xl flex-shrink-0 hover:scale-105 hover:bg-cyan-600 hover:text-white transition duration-300 rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[140px] object-cover mb-3 rounded-md border border-cyan-300"
            />
            <h3 className="text-sm font-medium line-clamp-3">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TransfEdu;
