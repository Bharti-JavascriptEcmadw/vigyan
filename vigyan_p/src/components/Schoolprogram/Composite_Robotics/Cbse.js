import React from "react";

const Cbse = () => {
  return (
    <section className="bg-[#fdfbf6] mx-20 my-6 p-10 rounded-lg">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10">
        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/savitri/schoolp1.jpeg"
            alt="Composite Robotics Lab"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Composite Robotics Lab for CBSE Schools
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
            A Composite Robotics Lab is an innovative initiative mandated by the Central Board of Secondary Education (CBSE) to enhance skill-based education in schools across India. These labs are designed to provide students with hands-on training in various fields, bridging the gap between theoretical learning and real-world application. Whether it’s an AI Skill Lab, Electronics Skill Lab, or AI & Robotics Skills Lab, these facilities are essential for equipping students with the practical knowledge and expertise needed to thrive in today’s competitive environment.
            <br /><br />
            The CBSE Composite Robotics Labs are part of a broader effort to align with the goals of the National Education Policy (NEP) 2020 and the National Curriculum Framework for School Education (NCF-SE). These policies emphasize the importance of integrating skill-based education alongside traditional academic subjects to prepare students for diverse career opportunities and to foster 21st-century skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cbse;
