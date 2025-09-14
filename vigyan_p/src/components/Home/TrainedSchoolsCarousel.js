import React from "react";

const schools = [
  { name: "Unity Public School", image: "/assets/school_logo/Unity.jpg" },
  { name: "VEDAM World School", image:"/assets/school_logo/8veddam.png" },
  { name: "Savitri Public School", image: "/assets/school_logo/Savitri.jpg" },
  { name: "The Millennium", image: "/assets/school_logo/Millenium.jpg" },
  { name: "Renaissance Academy", image: "/assets/school_logo/Renissance.png" },
  { name: "Indra Heritage School", image: "/assets/school_logo/2India_Heritage.png" },
  { name: "WRO Delhi", image: "/assets/school_logo/9_Wro.jpg" },
  { name: "Aatmdeep Vidyalaya", image: "/assets/school_logo/1.png" },
  { name: "St. Xavier's College, Kaptanganj", image: "/assets/school_logo/7_St.png" },
  { name: "Vidya Vahani", image: "/assets/school_logo/vidya.jpg" },
  { name: "Bishop George School & College", image: "/assets/school_logo/bishop.png" },
  { name: "Jamuna Valley Public School", image: "/assets/school_logo/jamuna.png" },
  { name: "Star Hybrid School", image: "/assets/school_logo/starhybrid.jpg" },
  { name: "M.M. Public School", image: "/assets/school_logo/mmpublic.jpg" }
];

const TrainedSchoolsCarousel = () => {
  return (
    <section
      className="relative py-10 px-2"
      style={{
        backgroundImage: "url('/assets/contact/R4.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Partner Schools
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {schools.map((school, index) => (
            <div
              key={index}
              className="bg-white w-28 sm:w-32 rounded-md shadow-sm overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-20 object-contain"
              />
              <div className="p-1 text-center">
                <h3 className="text-[10px] sm:text-xs font-medium text-gray-800">
                  {school.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainedSchoolsCarousel;
