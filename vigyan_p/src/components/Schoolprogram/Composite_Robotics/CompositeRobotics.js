import React from "react";

const CompositeRobotics = () => {
  return (
    <section className="bg-white py-16 mx-10 sm:mx-16 lg:mx-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="/assets/savitri/schoolp2.jpeg"
            alt="Students in Robotics Lab"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Mandatory Implementation of <br />
            Composite Robotics Labs in CBSE Schools
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            <strong>Under the latest CBSE guidelines:</strong>
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            <strong>For New Affiliations:</strong> Any school applying for fresh affiliation with
            CBSE must establish a Composite Robotics Lab, fully equipped with all necessary tools
            and machinery. This is a mandatory requirement.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            <strong>For Existing Affiliations:</strong> Schools that are already affiliated with
            CBSE must set up a Composite Robotics Lab within three years to comply with these
            guidelines.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Schools can choose to create either a single Composite Robotics Lab with an area of 600
            square feet for students from classes 6 to 12 or two separate labs, each 400 square feet
            in size—one for classes 6 to 10 and another for classes 11 and 12.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompositeRobotics;
