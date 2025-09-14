// // Continues scrolling in loop 


// import React from "react";
// // import "./TeamCarousel.css";

// const teamMembers = [
//   {
//     name: "Harshal Jaiswal",
//     role: "CTO & Founder",
//     image: "/assets/about/Harshal.jpeg",
//   },
//   {
//     name: "Sachin Kumar",
//     role: "Co-Founder, Regional Manager, Prayagraj",
//     image: "/assets/about/Sachin.jpeg",
//   },
//   {
//     name: "Saurav Tiwari",
//     role: "Business Strategist",
//     image: "/assets/about/Saurav.webp",
//   },
//   {
//     name: "Suraj Mishra",
//     role: "Technical Head, Gorakhpur",
//     image: "/assets/about/Suraj.jpeg",
//   },
//   {
//     name: "Ajay Yadav",
//     role: "Web Developer",
//     image: "/assets/about/Ajay.jpeg",
//   },
//   {
//     name: "Divya Tiwari",
//     role: "Market Research Analyst",
//     image: "/assets/about/Divya.jpeg",
//   },
//   {
//     name: "Nagendra Gond",
//     role: "Technical Support Executive",
//     image: "/assets/about/Nagendra.jpeg",
//   },
//   {
//     name: "Anushka Srivastava",
//     role: "Assistant Technical Support, Prayagraj",
//     image: "/assets/about/Anushka.jpeg",
//   },
//   {
//     name: "Ayushi Chaurasia",
//     role: "Digital Marketing Manager",
//     image: "/assets/about/Ayushi.jpeg",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="py-16 px-6 max-w-7xl mx-auto">
//       <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
//         Meet Our Team Members
//       </h1>

//       <div className="carousel-wrapper overflow-hidden relative">
//         <div className="carousel-track flex">
//           {[...teamMembers, ...teamMembers].map((member, index) => (
//             <div key={index} className="carousel-card w-64 p-4 flex-shrink-0">
//               <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
//                 <div className="w-32 h-32 rounded-full overflow-hidden shadow mb-4">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 text-center">{member.name}</h3>
//                 <p className="text-sm text-teal-600 text-center">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;



import React from "react";

const teamMembers = [
  {
    name: "Harshal Jaiswal",
    role: "CTO & Founder",
    image: "/assets/about/Harshal.jpeg",
  },
  {
    name: "Sachin Kumar",
    role: "Co-Founder, Regional Manager, Prayagraj",
    image: "/assets/about/Sachin.jpeg",
  },
  {
    name: "Suraj Mishra",
    role: "Technical Head, Gorakhpur",
    image: "/assets/about/Suraj.jpeg",
  },
  {
    name: "Ajay Yadav",
    role: "Web Developer",
    image: "/assets/about/Ajay.jpeg",
  },
  {
    name: "Nagendra Gond",
    role: "Technical Support Executive",
    image: "/assets/about/Nagendra.jpeg",
  },
  {
    name: "Anushka Srivastava",
    role: "Assistant Technical Support, Prayagraj",
    image: "/assets/about/Anushka.jpeg",
  },
  {
    name: "Ayushi Chaurasia",
    role: "Digital Marketing Manager",
    image: "/assets/about/Ayushi.jpeg",
  },
];

const marketingPartners = [
  {
    name: "Saurav Tiwari",
    role: "Business Strategist",
    image: "/assets/about/Saurav.webp",
  },
  {
    name: "Divya Tiwari",
    role: "Market Research Analyst",
    image: "/assets/about/Divya.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Marketing Partners */}
      <h2 className="text-center text-4xl font-extrabold text-teal-800 mb-10">
        Our Marketing Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {marketingPartners.map((member, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-white w-64 p-4 rounded-xl shadow flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 text-center">{member.name}</h3>
              <p className="text-md font-semibold text-blue-600 text-center">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
        Meet Our Team Members
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center">{member.name}</h3>
            <p className="text-md font-semibold text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
