
import React, { useState } from "react";

const RegistrationForm = () => {
  const [type, setType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
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
    customSchool: "",
    workshop: "",
  });

  const cities = [
    "Prayagraj", "Lucknow", "Salempur", "Gorakhpur", "Maharajaganj",
    "Balrampur", "Captanganj", "Piperich", "Others"
  ];

  const schoolsByCity = {
    Gorakhpur: ["RENAISSANCE ACADEMY",
    "AATMDEEP VIDYALAYA",
    "STAR HYBRID SCHOOL",
    "SPRINGER PUBLIC SCHOOL",
    "ALMA MATER SCHOOL",
    "DPS (DELHI PUBLIC SCHOOL)",
    "LFS (LITTLE FLOWER SCHOOL)",
    "THE PILLARS PUBLIC SCHOOL",
    "GPS (GORAKHPUR PUBLIC SCHOOL)",
    "BLOOMING BUDS SCHOOL",
    "ST. XAVIER’S PUBLIC SCHOOL",
    "SURMOUNT INTERNATIONAL SCHOOL",
    "RPM ACADEMY",
    "RAMPUS MEMORIAL PUBLIC SCHOOL",
    "ARMY PUBLIC SCHOOL",
    "GD GOENKA PUBLIC SCHOOL",
    "CATALYST HYBRID SCHOOL",
    "CARMAL SCHOOL",
    "HP CHILDREN ACADEMY",
    "CENTERAL ACADEMY",
    "APEX PUBLIC SCHOOL",
    "METROPOLITAN SCHOOL",
    "ST. JOSEPH SCHOOL",
    "VIDYA PUBLIC SCHOOL",
    "DIVINE PUBLIC SCHOOL",
    "NAVALS ACADEMY",
    "ACADEMY GLOBAL SCHOOL",
    "SAINIK SCHOOL",
    "GN NATIONAL PUBLIC SCHOOL"],
    Lucknow: [
  "SETH MR. JAIPURIA SCHOOL",
  "VEDAM WORLD SCHOOL",
  "DPS (DELHI PUBLIC SCHOOL)",
  "CMS (CITY MONTESSORI SCHOOL)",
  "THE MILLENNIUM SCHOOL",
  "GD GOENKA PUBLIC SCHOOL",
  "SETH ANAND RAM JAIPURIA SCHOOL",
  "LUCKNOW PUBLIC SCHOOL",
  "LA MARTINIERE COLLEGE",
  "VIBGYOR HIGH SCHOOL",
  "JAGRAN PUBLIC SCHOOL",
  "ADANI GEMS SCHOOL OF EXCELLENCE",
  "BIRLA OPEN MIND INTERNATIONAL SCHOOL"],
    Prayagraj: [ "Vidya Vahini school",
    "Bishop Johnson school katra",
    "Unity public school kareli/ unity boy's wing bakshi",
    "Enlighten public school",
    "Bishop george civil lines",
    "Jamuna valley kareli",
    "Bishop johnson civil lines",
    "Delhi public school",
    "Gurukulam school phaphamau",
    "Boys high school",
    "Sanskar international school subedarganj",
    "Bal bharti school",
    "Y.M.C.A centenary school sarojni naidu marg",
    "Tagore public school",
    "St. Joseph college CivilLine",
    "Girls high school civil lines",
    "The mothers pride school",
    "Maharshi patanjali school teliyarGanj",
    "Rani Rewati devi saraswati Vidya Niketan civil lines",
    "A.M. oxford school kareli",
    "Hamidia Girls Inter college",
    "Ramadevi girls inter college",
    "Gurudwara khalsa",
    "Ggic",
    "Vishnu bhagwan",
    "Benhur",
    "Bethany",
    "Saint johns"],
    Salempur: [ "ST. XAVIER SCHOOL",
"AATMDEEP VIDYALAYA "
],
  };

  const workshopOptions = ["Drone Racing", "Robotics", "EV", "AI"];
  const juniorOptions = ["RACE-O-BOT", "JUNIOR FUTURE INNOVATORS"];
  const seniorOptions = ["ROBO RUGBY CHAMPIONSHIP", "SENIOR FUTURE INNOVATORS", "LINE FOLLOWER ROBOT"];

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCity = selectedCity === "Others" ? customCity : selectedCity;
    const finalSchool = selectedSchool === "Others" ? formData.customSchool || "Others" : selectedSchool;

    const data = {
      type,
      ...(type === "NIB"
        ? { city: finalCity, school: finalSchool }
        : { workshop: formData.workshop }),
      category,
      subCategory,
      ...formData,
      city: finalCity,
      school: finalSchool,
    };

    console.log("Form submitted:", data);
    alert("Registration submitted successfully!");
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

        {/* Participation Type */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Participation Type</label>
          <div className="flex gap-4">
            {["NIB", "Workshop"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setType(opt);
                  setSelectedCity("");
                  setSelectedSchool("");
                  setCustomCity("");
                  setFormData((prev) => ({
                    ...prev,
                    customSchool: "",
                    workshop: "",
                  }));
                }}
                className={`px-4 py-2 rounded border text-sm ${type === opt ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-800 border-gray-300"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* NIB - City and School */}
        {type === "NIB" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Select City */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Select City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedSchool("");
                  setCustomCity("");
                }}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="">-- Choose City --</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {selectedCity === "Others" && (
                <input
                  type="text"
                  name="customCity"
                  placeholder="Enter city name"
                  className="mt-2 w-full border border-gray-300 rounded px-4 py-2"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                />
              )}
            </div>

            {/* Select School */}
            {selectedCity && (
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Select School
                </label>
                <select
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="">-- Choose School --</option>
                  {(schoolsByCity[selectedCity] || []).map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
                  <option value="Others">Others</option>
                </select>

                {selectedSchool === "Others" && (
                  <input
                    type="text"
                    name="customSchool"
                    placeholder="Enter school name"
                    className="mt-2 w-full border border-gray-300 rounded px-4 py-2"
                    value={formData.customSchool}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* Workshop */}
        {type === "Workshop" && (
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Select Workshop</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workshopOptions.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setFormData({ ...formData, workshop: w })}
                  className={`px-4 py-2 rounded border text-sm ${formData.workshop === w
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white border-gray-300"
                    }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category and Subcategory */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Select Category</label>
          <div className="flex gap-4">
            {["Junior", "Senior"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat);
                  setSubCategory("");
                }}
                className={`px-4 py-2 rounded border text-sm ${category === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {category && (
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Select Subcategory</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(category === "Junior" ? juniorOptions : seniorOptions).map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSubCategory(sub)}
                  className={`px-4 py-2 rounded border text-sm ${subCategory === sub
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white border-gray-300"
                    }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Team Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["leaderName", "member1", "member2", "member3"].map((field, i) => (
            <input
              key={field}
              name={field}
              required
              placeholder={["Leader Name", "Member 1", "Member 2", "Member 3"][i]}
              value={formData[field]}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-4 py-2"
            />
          ))}
        </div>

        {/* Class & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="className"
            required
            placeholder="Class"
            value={formData.className}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            name="schoolAddress"
            required
            placeholder="School Address"
            value={formData.schoolAddress}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            name="contact"
            required
            placeholder="Mentor Contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Mentor Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>

        {/* Fee Mode */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">Registration Fee Mode</label>
          <div className="flex gap-6 mb-4">
            {["offline", "online"].map((mode) => (
              <label key={mode} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="feeMode"
                  value={mode}
                  checked={formData.feeMode === mode}
                  onChange={handleModeChange}
                />
                <span className="capitalize">{mode}</span>
              </label>
            ))}
          </div>

          {formData.feeMode === "offline" && (
            <div className="bg-gray-100 p-4 rounded text-sm text-gray-700">
              Please pay the registration fee at the school/desk.
            </div>
          )}

          {formData.feeMode === "online" && (
            <div className="flex flex-col gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2897/2897990.png"
                alt="Scanner"
                className="w-32 h-32 object-contain mx-auto"
              />
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="mt-2"
              />
              {formData.receiptFile && (
                <p className="text-green-600 text-sm">
                  File selected: {formData.receiptFile.name}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
