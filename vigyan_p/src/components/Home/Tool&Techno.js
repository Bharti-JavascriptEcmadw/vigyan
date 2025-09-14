


// import React from "react";
// import { Link } from "react-router-dom";

// const tools = [
//   "Arduino UNO/Nano/Mega",
// "Raspberry Pi ",
// "ESP32 /ESP8266 ",
// "Servo motors",
// "DC motors and motor drivers (L298N, L293D, etc.)",
// "Stepper motors and drivers",
// "Bluetooth (HC-05/06)",
// "Wi-Fi (ESP8266)",
// "GSM/GPS",
// "RF modules",
// "Camera modules"
// ];
// const technologies = [
//   "Microcontrollers: Arduino, STM32, PIC, ATmega",
//   "Microprocessors: Raspberry Pi, BeagleBone",
//   "System-on-Chip (SoC): ESP32, Jetson Nano",
//   "Machine Learning & Deep Learning: Object Recognition, Path Planning, etc.",
//   "Computer Vision: Face Detection, Line Tracking, Gesture Recognition",
//   "Natural Language Processing (NLP): Voice Interaction, Understanding",
//   "CAD/CAM Tools: CAD Design, CAM Tools",
//   "3D Technology: 3D Printing"
// ];



// // CAD/CAM tools: Used for designing robot frames and mechanical parts
// // 3D Printing: To build custom parts


// const ToolsAndTechnologies = () => {
//   return (
//     <section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-6 sm:px-12 text-gray-900">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-blue-800 font-mono mb-12">
//           Tools & Technologies We Teach at Vigyan Pathshala!
//         </h2>

//         <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//           {/* Left: Cards container */}
//           <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-3xl">
//             {/* Tools Card */}
//             <div className="bg-gray-800 text-white rounded-lg p-8 shadow-lg flex-1">
//               <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-3">
//                 Tools
//               </h3>
//               <ul className="list-disc pl-5 space-y-3 text-left">
//                 {tools.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Technologies Card */}
//             <div className="bg-gray-800 text-white rounded-lg p-8 shadow-lg flex-1">
//               <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-3">
//                 Technologies
//               </h3>
//               <ul className="list-disc pl-5 space-y-3 text-left">
//                 {technologies.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right: Big Image */}
//           <div className="max-w-md w-full flex justify-center">
//             <img
//               src="/assets/b/5.png"
//               alt="Robotic Tools and Technologies"
//               className="rounded-xl shadow-xl border-4 border-cyan-500 object-cover w-full"
//             />
//           </div>
//         </div>

//         {/* Button below all */}
//         <div className="mt-12">
//           <Link to="/bookdemo">
//             <button className="bg-gray-900  text-white hover:bg-cyan-700 px-10 py-3 text-lg font-bold shadow-md rounded transition duration-300">
//               Book Your Training Demo Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToolsAndTechnologies;



import React from "react";
import { Link } from "react-router-dom";

const tools = [
  "Arduino UNO/Nano/Mega",
  "Raspberry Pi",
  "ESP32 /ESP8266",
  "Servo motors",
  "DC motors and motor drivers (L298N, L293D, etc.)",
  "Stepper motors and drivers",
  "Bluetooth (HC-05/06)",
  "Wi-Fi (ESP8266)",
  "GSM/GPS",
  "RF modules",
  "Camera modules"
];

const technologies = [
  "Microcontrollers: Arduino, STM32, PIC, ATmega",
  "Microprocessors: Raspberry Pi, BeagleBone",
  "System-on-Chip (SoC): ESP32, Jetson Nano",
  "Machine Learning & Deep Learning: Object Recognition, Path Planning, etc.",
  "Computer Vision: Face Detection, Line Tracking, Gesture Recognition",
  "Natural Language Processing (NLP): Voice Interaction, Understanding",
  "CAD/CAM Tools: Used for designing robot frames and mechanical parts",
  "3D Printing : To Build Custom Parts"
];

const ToolsAndTechnologies = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-6 sm:px-12 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 font-mono mb-12">
          Tools & Technologies We Teach at Vigyan Pathshala!
        </h2>

        {/* Row with all 3 items */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
          {/* Tools Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-full lg:w-1/3 min-h-[300px]">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              Tools
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-left text-sm">
              {tools.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Card */}
          <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-full lg:w-1/3 min-h-[300px]">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              Technologies
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-left text-sm">
              {technologies.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="/assets/b/5.png"
              alt="Robotic Tools and Technologies"
              className="rounded-xl shadow-xl border-4 border-cyan-500 object-cover max-h-[350px] w-full"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link to="/bookdemo">
            <button className="bg-gray-900 text-white hover:bg-cyan-700 px-10 py-3 text-lg font-bold shadow-md rounded transition duration-300">
              Book Your Training Demo Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
