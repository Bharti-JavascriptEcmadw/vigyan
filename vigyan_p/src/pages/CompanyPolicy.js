import React from "react";

function CompanyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b pb-4">
          Company Policies
        </h1>

        <div className="space-y-4">
          <a
            href="/T&C"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Terms & Conditions
          </a>

          <a
            href="/privacy_policy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Privacy Policy
          </a>

          <a
            href="/shipping_policy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Shipping Policy
          </a>

          <a
            href="/return_policy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Return Policy
          </a>

          <a
            href="/refund_policy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-200"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyPolicy;
