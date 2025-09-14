// import React from "react";
// import { Link } from "react-router-dom";

// // Sample images array (you can add more)
// const galleryImages = [
//   "/assets/books/1.jpeg",
//   "/assets/books/2.jpeg",
//   "/assets/books/3.jpeg",
//   "/assets/books/4.jpeg",
//   "/assets/books/5.jpeg",
//     "/assets/books/6.jpeg",
//   "/assets/books/7.jpeg",
//   "/assets/books/8.jpeg",



    
    

// ];

// const InspireYoungMinds = () => {
//   return (
//     <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
//             Inspire Young Minds Through Robotics, STEM, AI!
//           </h2>
//           <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//             Vigyan Pathshala provides basic to advanced level training in IoT, Robotics, and AI for our learners.
//           </p>
//         </div>

//         {/* Grid: Left = dynamic image grid | Right = video and image */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//           {/* LEFT: Dynamic image grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {galleryImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`gallery-${idx}`}
//                 className="w-full h-56 object-cover rounded-lg border-4 border-cyan-500 shadow-lg"
//               />
//             ))}
//           </div>

//           {/* RIGHT: Video + Image */}
//           <div className="flex flex-col justify-center items-center gap-6">
//             <video
//               src="/assets/video_gallery/33.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full max-w-sm h-64 object-cover rounded-lg shadow-2xl border-4 border-cyan-500"
//             />
//             <img
//               src="/assets/st/16.jpg"
//               alt="Program Preview"
//               className="w-full max-w-sm h-64 object-cover rounded-lg shadow-2xl border-4 border-cyan-500"
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <div className="mt-12 text-center">
//           <Link to="/bookdemo">
//             <button className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-3 text-lg font-bold tracking-wide shadow-md transition duration-300 rounded">
//               Start Building Bots Today
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InspireYoungMinds;


import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/assets/books/1.jpeg",
  "/assets/books/2.jpeg",
  "/assets/books/3.jpeg",
  "/assets/books/4.jpeg",
  "/assets/books/5.jpeg",
  "/assets/books/6.jpeg",
  "/assets/books/7.jpeg",
  "/assets/books/8.jpeg",
];

const InspireYoungMinds = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
            Inspire Young Minds Through Robotics, STEM, AI!
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Vigyan Pathshala provides basic to advanced level training in IoT, Robotics, and AI for our learners.
          </p>
        </div>

        {/* Product Grid - 4 Columns, Tight Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-64 h-80 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt={`Book ${idx + 1}`}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link to="/bookdemo">
            <button className="bg-cyan-500 text-white hover:bg-cyan-600 px-8 py-3 text-lg font-bold tracking-wide shadow-md transition duration-300 rounded">
              Start Building Bots Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspireYoungMinds;
