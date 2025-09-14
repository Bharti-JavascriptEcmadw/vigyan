


// import React, { useState } from "react";
// import axios from "axios";

// const BookD = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     designation: "",
//     city: "",
//     schoolName: "",
//     preferredDate: "",    // YYYY-MM-DD from <input type="date" />
//     preferredTime: "",    // full label
//     requirement: "",
//   });

//   // Format date from "YYYY-MM-DD" to "DD-MM-YYYY"
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const [year, month, day] = dateStr.split("-");
//     return `${day}-${month}-${year}`;
//   };

//   // Ensure preferredTime is the exact enum label
//   const normalizeTime = (value) => {
//     switch (value) {
//       case "Morning (9AM - 12PM)":
//       case "Morning":
//         return "Morning (9AM - 12PM)";
//       case "Afternoon (12PM - 3PM)":
//       case "Afternoon":
//         return "Afternoon (12PM - 3PM)";
//       case "Evening (3PM - 6PM)":
//       case "Evening":
//         return "Evening (3PM - 6PM)";
//       default:
//         return value;
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phone: formData.phone,
//       designation: formData.designation,
//       city: formData.city,
//       schoolName: formData.schoolName,
//       preferredDate: formatDate(formData.preferredDate),
//       preferredTime: normalizeTime(formData.preferredTime),
//       requirement: formData.requirement,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/book-demo/register",
//         payload
//       );

//       if (response.data.success) {
//         alert("Registration submitted successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           designation: "",
//           city: "",
//           schoolName: "",
//           preferredDate: "",
//           preferredTime: "",
//           requirement: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting registration:", error);
//       alert("Failed to submit registration.");
//     }
//   };

//   return (
//     <section className="bg-black text-white min-h-screen">
//       <div
//         className="w-full relative"
//         style={{
//           backgroundImage: "url('/assets/contact/R2.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="w-full flex items-center justify-center py-20 px-4">
//           <h1 className="animate-zoom-in  text-4xl md:text-5xl font-bold text-white text-center transition-all duration-500 ease-in-out">
//             Book Demo
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-full mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-md">
//         {/* Left image */}
//         <div className="w-full lg:w-1/2">
//           <img
//             src="/assets/contact/bookdemo_registration.jpg"
//             alt="Demo Visual"
//             loading="lazy"
            
//             className="rounded-lg shadow-lg w-full h-full object-cover max-h-[500px]"
//           />
//         </div>

//         {/* Right form */}
//         <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Row 1 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
                  
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter first name"
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter last name"
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 3 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Designation</label>
//                 <select
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 >
//                   <option value="">Select designation</option>
//                   <option value="Student">Student</option>
//                   <option value="Teacher">Teacher</option>
//                   <option value="Parent">Parent</option>
//                   <option value="Trainer">Trainer</option>
//                   <option value="Principal">Principal</option>
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">City Name</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="Enter your city"
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 4 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">School Name</label>
//                 <input
//                   type="text"
//                   name="schoolName"
//                   value={formData.schoolName}
//                   onChange={handleChange}
//                   placeholder="Enter your school name"
                  
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Preferred Date</label>
//                 <input
//                   type="date"
//                   name="preferredDate"
//                   value={formData.preferredDate}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 5 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Preferred Time</label>
//                 <select
//                   name="preferredTime"
//                   value={formData.preferredTime}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 >
//                   <option value="">Select time</option>
//                   <option value="Morning (9AM - 12PM)">
//                     Morning (9AM - 12PM)
//                   </option>
//                   <option value="Afternoon (12PM - 3PM)">
//                     Afternoon (12PM - 3PM)
//                   </option>
//                   <option value="Evening (3PM - 6PM)">
//                     Evening (3PM - 6PM)
//                   </option>
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">
//                   Your Requirement
//                 </label>
//                 <textarea
//                   name="requirement"
//                   value={formData.requirement}
//                   onChange={handleChange}
//                   rows="2"
//                   placeholder="Describe your requirement..."
//                   required
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-cyan-300 transition-all"
//             >
//               Book Demo
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookD;


import React, { useState } from "react";
import axios from "axios";

const BookD = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    city: "",
    schoolName: "",
    preferredDate: "",
    preferredTime: "",
    requirement: "",
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const normalizeTime = (value) => {
    switch (value) {
      case "Morning":
      case "Morning (9AM - 12PM)":
        return "Morning (9AM - 12PM)";
      case "Afternoon":
      case "Afternoon (12PM - 3PM)":
        return "Afternoon (12PM - 3PM)";
      case "Evening":
      case "Evening (3PM - 6PM)":
        return "Evening (3PM - 6PM)";
      default:
        return value;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      preferredDate: formatDate(formData.preferredDate),
      preferredTime: normalizeTime(formData.preferredTime),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/book-demo/register",
        payload
      );

      if (response.data.success) {
        alert("Registration submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          designation: "",
          city: "",
          schoolName: "",
          preferredDate: "",
          preferredTime: "",
          requirement: "",
        });
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Failed to submit registration.");
    }
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Banner */}
      <div
        className="w-full relative"
        style={{
          backgroundImage: "url('/assets/contact/R2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="w-full flex items-center justify-center py-20 px-4">
          <h1 className="animate-zoom-in text-4xl md:text-5xl font-bold text-white text-center transition-all duration-500 ease-in-out">
            Book Demo
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-full mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-md">
        {/* Left image */}
        {/* <div className="w-full lg:w-1/2">
          <img
            src="/assets/contact/bookdemo_registration.jpg"
            alt="Demo Visual"
            loading="lazy"
            className="rounded-lg shadow-lg w-full h-full object-cover max-h-[500px]"
          />
        </div> */}

        {/* Right form (size reduced and centered) */}
        <div className="w-full mx-auto lg:max-w-[500px] bg-gray-900 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Designation</label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                >
                  <option value="">Select designation</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Principal">Principal</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">City Name</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Enter your school name"
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Preferred Time</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9AM - 12PM)">
                    Morning (9AM - 12PM)
                  </option>
                  <option value="Afternoon (12PM - 3PM)">
                    Afternoon (12PM - 3PM)
                  </option>
                  <option value="Evening (3PM - 6PM)">
                    Evening (3PM - 6PM)
                  </option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Your Requirement</label>
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Describe your requirement..."
                  required
                  className="w-full bg-white border border-gray-700 p-2 rounded text-black text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-cyan-300 transition-all"
            >
              Book Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookD;
