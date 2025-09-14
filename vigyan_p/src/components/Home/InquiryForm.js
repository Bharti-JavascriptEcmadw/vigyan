import React, { useState } from "react";

const InquiryForm = ({ onClose }) => {
  // form states here
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submit logic
    alert("Form submitted!"); 
    onClose(); // Close modal after submit or you can clear fields instead
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
      ></div>

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            aria-label="Close modal"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
            Inquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <select
              className="w-full border border-gray-300 p-2 rounded"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              {coursesList.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border border-gray-300 p-2 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white w-full py-2 rounded font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
