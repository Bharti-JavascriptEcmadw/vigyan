import React from 'react';
import { useNavigate } from 'react-router-dom';

const Competition = () => {
  const navigate = useNavigate();

  // Junior Competitions
  const juniorCompetitions = [
    { title: "Race-O-Bot", image: "/assets/race-o-bot.jpeg", path: "/explore/race-o-bot" },
    { title: "Junior Future Innovators", image: "/assets/jfuture.jpeg", path: "/explore/junior-future" }
  ];

  // Senior Competitions
  const seniorCompetitions = [
    { title: "Robo Rugby Championship", image: "/assets/robo.jpeg", path: "/explore/robo-rugby" },
    { title: "Senior Future Innovators", image: "/assets/s-futu.jpeg", path: "/explore/senior-future" },
    { title: "Line Follower Robot", image: "/assets/linefoll.jpeg", path: "/explore/line-follower" }
  ];

  // Render individual competition card
  const renderCard = ({ title, image, path }) => (
    <div key={title} className="bg-gray-800 p-4 rounded-lg shadow-md w-full sm:w-72">
      <h3 className="text-lg font-semibold mb-3 text-center text-white">{title}</h3>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <div className="flex justify-between">
        <button
          onClick={() => navigate('/registration')}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <button
          onClick={() => navigate(path)}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Explore
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-green-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Competitions</h1>

      <div className="max-w-screen-lg mx-auto">
        {/* Junior Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-400 inline-block px-4">Junior</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {juniorCompetitions.map(renderCard)}
          </div>
        </div>

        {/* Senior Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-blue-400 inline-block px-4">Senior</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {seniorCompetitions.map(renderCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
