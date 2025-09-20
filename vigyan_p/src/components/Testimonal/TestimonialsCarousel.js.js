import React, { useEffect, useRef, } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [

     {
    description: `We are so delighted and grateful to vigyanpathshala.com  for giving us this opportunity to be a part of this revolution. The resources that have been brought for our children through this AI lab will provide our children an opportunity to be a part of this revolution. Our Children will be going to be benefited from this Intel learning center.`,
    name: "Bhawana Kulshrestra",
    school: "M.M. Public School",
    image: "/assets/st/10.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `It's a matter of pride that the junior computer lab of Bal Bharti Public School has been selected by vigyanpathshala.com for setting up the Intel learning center. I think we all agree that the coming era is the era of Artificial intelligence and Machine learning. It's going to be all about the Internet of Things and the future world will comprise of drones and robots.`,
    name: "Geeta Gangwani",
    school: "VEDAM World School",
    image: "/assets/st/8.jpg",
    rating: 5,
    score: 99,
  },

    {
    description: `We are so delighted and grateful to vigyanpathshala.com  for giving us this opportunity to be a part of this revolution. The resources that have been brought for our children through this AI lab will provide our children an opportunity to be a part of this revolution. Our Children will be going to be benefited from this Intel learning center.`,
    name: "Bhawana Kulshrestra",
    school: "Indra Heritage School",
    image: "/assets/st/10.jpg",
    rating: 5,
    score: 99,
  },

  {
    description: `A very exciting moment for us as we introduced Intel Learning Centre powered by vigyanpathshala.com . As we all know in today’s time, Artificial Intelligence, Coding, and experiential learning are the need of the hour, in today’s time as we are looking at New Education Policy that is working towards introducing 21st-century skills among students like creative thinking.`,
    name: "Pallavi Sharma",
    school: "Jamuna Valley Public School",
    image: "/assets/st/9.jpg",
    rating: 5,
    score: 99,
  },
  {
    description: `We are so delighted and grateful to vigyanpathshala.com  for giving us this opportunity to be a part of this revolution. The resources that have been brought for our children through this AI lab will provide our children an opportunity to be a part of this revolution. Our Children will be going to be benefited from this Intel learning center.`,
    name: "Bhawana Kulshrestra",
    school: "Aatmdeep Vidyalaya",
    image: "/assets/st/10.jpg",
    rating: 5,
    score: 99,
  },

 
];


const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Duplicate the content inside the container for infinite scrolling illusion
    container.innerHTML += container.innerHTML;

    let animationFrameId;
    const scrollSpeed = 0.5; // smaller = slower and smoother

    const step = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // reset scroll to start (half the scrollWidth because we duplicated content)
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const manualScroll = (scrollOffset) => {
    scrollRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative">
          <h3 className="text-center text-xl sm:text-2xl font-bold mb-6">
            Hear From Our Associated Schools!
          </h3>

          <button
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 text-black"
            onClick={() => manualScroll(-300)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 text-black"
            onClick={() => manualScroll(300)}
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 px-2 sm:px-6 scrollbar-hide"
            style={{ scrollBehavior: "auto", whiteSpace: "nowrap" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl shadow-lg min-w-[80%] sm:min-w-[300px] max-w-xs p-6 flex-shrink-0 border-b-4 border-teal-400 relative inline-block align-top"
                style={{ whiteSpace: "normal" }}
              >
                <div className="flex items-center mb-3">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <FaStar key={i} className="text-teal-400 mr-1" />
                  ))}
                </div>
                <div className="absolute top-0 right-0 bg-teal-400 text-white rounded-bl-xl px-3 py-1 font-bold">
                  {item.score}
                </div>
                <p className="text-gray-700 text-sm mb-4 font-semibold leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                  />
                  <div>
                    <h4 className="font-bold text-md">{item.name}</h4>
                    <p className="text-sm text-teal-500 font-medium">{item.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
