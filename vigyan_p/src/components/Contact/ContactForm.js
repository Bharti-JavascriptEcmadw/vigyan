import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState("");  // new state for course

  const [responseMsg, setResponseMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const coursesList = [
  "Other",
    "AI & Coding",
    "Web Development",
    "IoT",
    "Robotics",
    "Drone Technology",
    "STEM Learning Programs",
    "ATAL Tinkering Lab",
    "Coding & Logic Building",
  ];

  const contact = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!name || !email || !phone || !message || !course) {
      const msg = "All fields are required.";
      setErrorMsg(msg);
      setResponseMsg(null);
      toast.error(msg);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/messages",
        { name, email, phone, message, course },  // courses as array
        { withCredentials: true }
      );
      console.log(res);

      setResponseMsg("Message sent successfully!");
      setErrorMsg(null);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCourse("");
      toast.success("Message sent successfully!");
    } catch (error) {
      const backendError = error.response?.data?.error || "Something went wrong.";
      console.log("Backend Error:", backendError);

      setErrorMsg(backendError);
      setResponseMsg(null);
      toast.error(backendError);
    }
  };

  return (
    <section className="relative py-8 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-teal-500 via-blue-700 to-blue-200">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 justify-around">
        {/* Video Section */}
        <div className="w-full lg:w-2/5 h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-xl">
          <video
            src="/assets/contact/35.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[40%] bg-white backdrop-blur-md p-6 sm:p-8 shadow-lg border-1 border-gray-900 border-solid">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 text-center lg:text-left">
Contact / Inquiry Form          </h2>
          <form onSubmit={contact} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="+91 9876543210"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
                <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Select Course <span className="text-red-600">*</span>
              </label>
              <select
                value={course}
                required
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">-- Select Course --</option>
                {coursesList.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                rows="3"
                required
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Courses Select */}
        

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="bg-blue-900 text-white text-sm font-bold py-2 px-5 hover:bg-cyan-600 transition"
              >
 Submit
               </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
