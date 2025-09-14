// import React from "react";

// const WhySetupLabs = () => {
//   const benefits = [
//     "Increased Employability",
//     "Hands-On Training",
//     "Industry Exposure",
//     "Higher Earning Potential",
//     "Entrepreneurial Opportunities",
//     "Improved Critical Thinking",
//     "Adaptability",
//     "Improved Creativity",
//   ];

//   return (
//     <section className="bg-white py-16 mx-10 sm:mx-16 lg:mx-28">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">
//           Why Set Up Composite Robotics Labs In Schools?
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto mb-12">
//           Setting up Composite Robotics Labs in Schools is a crucial step towards preparing
//           students for the future. These labs offer a comprehensive approach to education by
//           integrating practical learning with the curriculum.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className={`text-white text-lg font-semibold py-10 px-6 rounded-lg shadow-md text-center ${
//                 benefit === "Adaptability"
//                   ? "bg-orange-400"
//                   : "bg-teal-700"
//               }`}
//             >
//               {benefit}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhySetupLabs;


import React from "react";

const WhySetupLabs = () => {
  const benefits = [
    "Increased Employability",
    "Hands-On Training",
    "Industry Exposure",
    "Higher Earning Potential",
    "Entrepreneurial Opportunities",
    "Improved Critical Thinking",
    "Adaptability",
    "Improved Creativity",
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24">
      {/* Main Wrapper with Yellow Background */}
      <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24 rounded-lg">
        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-8">
            Why Set Up Composite Robotics Labs In Schools?
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">
            Setting up Composite Robotics Labs in schools is a vital step toward preparing students for future opportunities. These labs provide hands-on, practical experience alongside traditional academics, empowering students with the skills needed to excel in the modern workforce.
          </p>

          {/* Card Wrapper (Centering the Cards) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-blue-500 to-teal-600 text-white"
                >
                  <h3 className="text-xl font-semibold mb-4">{benefit}</h3>
                  <p className="text-gray-200 text-sm">
                    {/* Optional: Add a short description of each benefit if needed */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySetupLabs;
