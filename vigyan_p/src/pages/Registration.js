


import React, { useState } from "react";

const RegistrationForm = () => {
  const [type, setType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [workshopOption, setWorkshopOption] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [formData, setFormData] = useState({
    leaderName: "",
    member1: "",
    member2: "",
    member3: "",
    className: "",
    schoolAddress: "",
    contact: "",
    email: "",
    feeMode: "",
    receiptFile: null,
  });

  const cities = ["Prayagraj", "Lucknow", "Salempur", "Gorakhpur", "Balrampur"];

  const schoolsByCity = {
    Prayagraj: ["School A1", "School A2", "School A3", "School A4"],
    Lucknow: ["School B1", "School B2", "School B3", "School B4"],
    Salempur: ["School C1", "School C2", "School C3"],
  };

  const workshopOptions = ["Drone Racing", "Robotics", "EV", "AI"];
  const juniorOptions = ["Race-O-Bot", "Junior  Future Innovators", ];
  const seniorOptions = ["9th", "10th", "11th"];

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      type,
      ...(type === "NIB"
        ? { city: selectedCity, school: selectedSchool }
        : { workshop: workshopOption }),
      category,
      subCategory,
      ...formData,
    };

    console.log("Form submitted:", data);
    alert("Registration submitted successfully!");
  };

  const handleModeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      feeMode: e.target.value,
      receiptFile: null,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      receiptFile: e.target.files[0],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl space-y-8"
      >
        <h1 className="text-3xl font-semibold text-blue-700 text-center mb-6">
          Student Registration Form
        </h1>

        {/* Type Selection */}
        <section>
          <label className="block font-semibold text-gray-700 mb-2">
            Participation Type
          </label>
          <div className="flex gap-4">
            {["NIB", "Workshop"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setType(t);
                  setSelectedCity("");
                  setSelectedSchool("");
                  setWorkshopOption("");
                }}
                className={`px-6 py-2 rounded-md text-sm font-medium border transition-all ${
                  type === t
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* NIB Section */}
        {type === "NIB" && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Select City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedSchool("");
                }}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose City --</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {selectedCity && (
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Select School
                </label>
                <select
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Choose School --</option>
                  {schoolsByCity[selectedCity]?.map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </section>
        )}

        {/* Workshop Section */}
        {type === "Workshop" && (
          <section>
            <label className="block mb-3 text-sm font-semibold text-gray-700">
              Choose Workshop
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workshopOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setWorkshopOption(option)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                    workshopOption === option
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Category Selection */}
        <section>
          <label className="block font-semibold text-gray-700 mb-2">
            Select Category
          </label>
          <div className="flex gap-4">
            {["Junior", "Senior"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setSubCategory("");
                }}
                className={`px-6 py-2 rounded-md border text-sm font-medium transition ${
                  category === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Subcategory (Class) */}
        {category && (
          <section>
            <label className="block font-semibold text-gray-700 mb-2">
              Select Class
            </label>
            <div className="grid grid-cols-3 gap-4">
              {(category === "Junior" ? juniorOptions : seniorOptions).map(
                (cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setSubCategory(cls)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                      subCategory === cls
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {cls}
                  </button>
                )
              )}
            </div>
          </section>
        )}

        {/* Team Members */}
        <section>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Team Information (4 Members)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="leaderName"
              required
              placeholder="Leader's Name"
              value={formData.leaderName}
              onChange={handleInputChange}
              className="input"
            />
            <input
              name="member1"
              required
              placeholder="Member 1 Name"
              value={formData.member1}
              onChange={handleInputChange}
              className="input"
            />
            <input
              name="member2"
              required
              placeholder="Member 2 Name"
              value={formData.member2}
              onChange={handleInputChange}
              className="input"
            />
            <input
              name="member3"
              required
              placeholder="Member 3 Name"
              value={formData.member3}
              onChange={handleInputChange}
              className="input"
            />
          </div>
        </section>

        {/* Contact Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="className"
            required
            placeholder="Class"
            value={formData.className}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="text"
            name="schoolAddress"
            required
            placeholder="School Address"
            value={formData.schoolAddress}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="tel"
            name="contact"
            required
            placeholder="Mentor Contact Number"
            value={formData.contact}
            onChange={handleInputChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Mentor Email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
        </section>

        {/* Fee Mode */}
        <section>
          <label className="block font-semibold text-lg mb-3 text-gray-700">
            Registration Fee Mode
          </label>
          <div className="flex items-center gap-6 mb-4">
            {["offline", "online"].map((mode) => (
              <label key={mode} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="feeMode"
                  value={mode}
                  checked={formData.feeMode === mode}
                  onChange={handleModeChange}
                  className="text-blue-600"
                />
                <span className="capitalize">{mode}</span>
              </label>
            ))}
          </div>

          {formData.feeMode === "offline" && (
            <div className="bg-gray-100 border p-4 rounded-md flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2913/2913462.png"
                alt="Offline Payment"
                className="w-24 h-24 object-contain mb-2"
              />
              <p className="text-gray-700 text-sm">
                Please pay the fee offline at the registration desk.
              </p>
            </div>
          )}

          {formData.feeMode === "online" && (
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Upload Fee Receipt
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                required
                className="file-input"
              />
              {formData.receiptFile && (
                <p className="text-green-600 text-sm">
                  File selected: {formData.receiptFile.name}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
