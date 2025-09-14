import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-white via-sky-100 to-white text-black pt-0 pb-12 ">
      {/* Top Banner Image */}
      <div
        className="w-full relative"
        style={{
          backgroundImage: "url('/assets/contact/R2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/50 flex items-center justify-center flex flex-col py-24 md:py-32 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Stay Connected With Us
          </h1>
            <h1 className=" mt-6   text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
           
          We'll provide the best possible solution.

          </h1>
          
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-10 px-2
      ">

{/* Phone */}
<div className="bg-gradient-to-br from-cyan-200 to-blue-100 text-black border border-gray-200 p-6 rounded hover:shadow-lg transition  animate-rotateYLeft origin-center transition-all duration-500 ease-in-out  border-4 border-dotted border-orange-700">
  <div className="flex justify-center mb-4">
    <div className="bg-cyan-400 p-4 rounded-full">
      <FaPhone className="text-black text-xl" />
    </div>
  </div>
  <h4 className="font-bold text-2xl mb-2">Phone</h4>
  <p>+91 8303309334</p>
</div>

{/* Address */}
<div className="bg-gradient-to-br from-green-200 to-lime-100 text-black border-4 border-dotted border-blue-700 p-6 rounded hover:shadow-lg transition animate-rotateYLeft origin-center transition-all duration-500 ease-in-out">
  <div className="flex justify-center mb-4">
    <div className="bg-cyan-400 p-4 rounded-full">
      <FaMapMarkerAlt className="text-black text-xl" />
    </div>
  </div>
  <h4 className="font-bold text-2xl mb-2">Address</h4>
  <p>S-170, Ground Floor, Sahara Shopping Center, Faizabad Road, Indira Nagar, Lucknow – 226016
,</p>
  <p>Lucknow</p>
</div>


{/* Email */}
<div className="bg-gradient-to-br from-pink-200 to-red-100 text-black  p-6 rounded hover:shadow-lg transition animate-rotateYLeft origin-center transition-all duration-500 ease-in-out  border-4 border-dotted border-blue-900">
  <div className="flex justify-center mb-4">
    <div className="bg-cyan-400 p-4 rounded-full">
      <FaEnvelope className="text-black text-xl" />
    </div>
  </div>
  <h4 className="font-bold text-2xl mb-2">Email</h4>
   <a href="mailto:info@vigyanpathshala.com" className="hover:text-orange-400 transition">
info@vigyanpathshala.com	              </a></div>

{/* Open Time */}
<div className="bg-gradient-to-br from-yellow-200 to-orange-100 text-black border border-gray-200 p-6 rounded hover:shadow-lg transition animate-rotateYLeft origin-center transition-all duration-500 ease-in-out 
 border-4 border-dotted border-green-900">
  <div className="flex justify-center mb-4">
    <div className="bg-cyan-400 p-4 rounded-full">
      <AiOutlineClockCircle className="text-black text-xl" />
    </div>
  </div>
  <h4 className="font-bold text-2xl mb-2">Open Time</h4>
  <p>Mon - Sat (10:00 AM - 05:30 PM)</p>
</div>

</div>

    </section>
  );
};

export default Contact;



