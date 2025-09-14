import React, { useEffect, useRef, useState } from "react";
import { FaProjectDiagram, FaUserGraduate, FaTrophy } from "react-icons/fa";

const StatsCounter = () => {
  const stats = [
    {
      label: "Projects Built",
      count: 120,
      icon: <FaProjectDiagram size={40} className="text-yellow-400 mb-2" />,
    },
    {
      label: "Students Trained",
      count: 120000,
      icon: <FaUserGraduate size={40} className="text-green-400 mb-2" />,
    },
    {
      label: "Competitions Won",
      count: 18,
      icon: <FaTrophy size={40} className="text-red-400 mb-2" />,
    },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated,]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      let startTime;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.ceil(stat.count * progress);

        if (counts[index] !== currentCount) {
          setCounts((prevCounts) => {
            const updated = [...prevCounts];
            updated[index] = currentCount;
            return updated;
          });
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCounts((prevCounts) => {
            const updated = [...prevCounts];
            updated[index] = stat.count;
            return updated;
          });
        }
      };

      requestAnimationFrame(step);
    });
  };

  return (
    <div className=" flex items-center justify-center px-4 sm:px-6 md:px-8  mb-9">
      <section
        ref={sectionRef}
        className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-10 px-4 sm:px-6 md:px-8 bg-gray-900 rounded-xl shadow-md"
      >
        <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-center text-teal-400 mb-10">
          Our Impact
        </h3>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/3 px-4 py-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
            >
              {stat.icon}
              <h3 className="text-3xl sm:text-4xl font-bold text-teal-500">
                {counts[idx].toLocaleString()}+
              </h3>
              <p className="text-lg text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatsCounter;
