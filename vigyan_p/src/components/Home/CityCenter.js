// import React from "react";

// const CityCenters = () => {
//   const cities = [
//     { name: "Lucknow", img: "/assets/vigyan/lucknow.jpg" },
//     { name: "Gorakhpur", img: "/assets/vigyan/luck.jpg" },
//     { name: "Varanasi", img: "/assets/vigyan/varansi.jpg" },
//     { name: "Prayagraj", img: "/assets/vigyan/allahabad.jpg" },
//     { name: "Kaptanganj", img: "/assets/vigyan/varansi.jpg" },
//     { name: "Maharajganj", img: "/assets/vigyan/kanpur.jpg" },
//     { name: "Salempur", img: "/assets/vigyan/delhi.jpg" },
//     { name: "Kushinagar", img: "/assets/vigyan/jhansi.jpg" },
//     { name: "Jhansi", img: "/assets/vigyan/khs.jpg" },
//   ];

//   return (
//     <section className="w-full bg-white py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Find Vigyan Pathshala in Your City
//           </h2>
//           <p className="text-blue-600 mt-2 font-medium">Available in multiple cities</p>
//         </div>

//         {/* City Cards Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
//           {cities.map((city, idx) => (
//             <div
//               key={idx}
//               className="bg-white w-full rounded-md shadow-sm overflow-hidden hover:shadow-md transition duration-300"
//             >
//               <img
//                 src={city.img}
//                 alt={city.name}
//                 className="w-full h-24 object-cover"
//               />
//               <div className="p-2 text-center">
//                 <h4 className="text-sm font-bold text-gray-800">{city.name}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CityCenters;


import React from "react";
import {
  FaLandmark,
  FaUniversity,
  FaBuilding,
  FaGopuram,
  FaMonument,
  FaMapMarkedAlt,
} from "react-icons/fa";

const CityCenters = () => {
  const cities = [
    {
      name: "Lucknow",
      icon: <FaLandmark className="text-white text-3xl mx-auto" />,
      bg: "bg-blue-500",
    },
    {
      name: "Gorakhpur",
      icon: <FaUniversity className="text-white text-3xl mx-auto" />,
      bg: "bg-green-500",
    },
    {
      name: "Varanasi",
      icon: <FaGopuram className="text-white text-3xl mx-auto" />,
      bg: "bg-purple-500",
    },
    {
      name: "Prayagraj",
      icon: <FaMonument className="text-white text-3xl mx-auto" />,
      bg: "bg-red-500",
    },
    {
      name: "Kaptanganj",
      icon: <FaBuilding className="text-white text-3xl mx-auto" />,
      bg: "bg-yellow-500",
    },
    {
      name: "Maharajganj",
      icon: <FaMapMarkedAlt className="text-white text-3xl mx-auto" />,
      bg: "bg-indigo-500",
    },
    {
      name: "Salempur",
      icon: <FaBuilding className="text-white text-3xl mx-auto" />,
      bg: "bg-pink-500",
    },
    {
      name: "Kushinagar",
      icon: <FaMonument className="text-white text-3xl mx-auto" />,
      bg: "bg-orange-500",
    },
    {
      name: "Jhansi",
      icon: <FaUniversity className="text-white text-3xl mx-auto" />,
      bg: "bg-teal-500",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Find Vigyan Pathshala in Your City
          </h2>
          <p className="text-blue-600 mt-2 font-medium">Available in multiple cities</p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className={`${city.bg} text-white w-full rounded-md shadow-sm hover:shadow-md transition duration-300 text-center py-6`}
            >
              {city.icon}
              <h4 className="text-sm font-bold mt-2">{city.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCenters;
