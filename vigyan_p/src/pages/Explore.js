import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Explore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title } = location.state || { title: "Competition" };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-6">
          This is some dummy content for the {title} competition. You can include rules, guidelines, schedules, and other information here.
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Explore;
