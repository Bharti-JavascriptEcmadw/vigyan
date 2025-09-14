import React, { useState } from "react";
import axios from "axios";

const ApplyFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    // Step 1 → send form
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.education) {
        alert("Please fill in all fields");
        return;
      }
      setLoading(true);
      try {
        await axios.post("http:localhost:4000/api/apply", formData);
        setStep(2); // move to OTP
      } catch (err) {
        console.error(err);
        alert("Failed to submit application.");
      } finally {
        setLoading(false);
      }
    }
    // Step 2 → verify OTP
    else if (step === 2) {
      if (otp.length !== 6) {
        alert("Enter a 6‑digit OTP");
        return;
      }
      setLoading(true);
      try {
        const res = await axios.post("/api/verify-otp", { email: formData.email, otp });
        if (res.status === 200) {
          setStep(3); // move to payment
        } else {
          alert("Invalid OTP");
        }
      } catch (err) {
        console.error(err);
        alert("OTP verification failed");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[95%] sm:w-[400px] relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-lg"
        >
          ✖
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-800">Apply Now</h2>
            <div className="space-y-3">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border rounded px-3 py-2" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className="w-full border rounded px-3 py-2" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full border rounded px-3 py-2" />
              <input name="education" value={formData.education} onChange={handleChange} placeholder="Education Qualification" className="w-full border rounded px-3 py-2" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-800">Verify OTP</h2>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-2">We’ve sent a 6‑digit code to <strong>{formData.email}</strong>.</p>
              <input
                value={otp}
                onChange={e => setOtp(e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
                className="w-full border rounded px-3 py-2 text-center tracking-widest"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-green-700">Scan to Pay</h2>
            <img src="/assets/upi-qr.png" alt="UPI QR Code" className="mx-auto max-w-xs rounded border" />
            <p className="text-sm text-gray-600">Use any UPI app to complete your payment.</p>
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:opacity-90 transition disabled:opacity-50"
        >
          {loading
            ? "Please wait…"
            : step === 1
            ? "Submit Application"
            : step === 2
            ? "Verify OTP"
            : "Close"}
        </button>
      </div>
    </div>
  );
};

export default ApplyFormModal;
