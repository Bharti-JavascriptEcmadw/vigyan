import React, { useState } from "react";
import { PiMedalBold, PiGlobeHemisphereWestFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import Gallery from "./Gallery";

const VoicesThatInspire = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Voices That Inspire</h2>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="flex items-center gap-3">
            <PiMedalBold className="text-4xl text-cyan-600" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">7+</h3>
              <p className="text-sm text-white">Years Of Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PiGlobeHemisphereWestFill className="text-4xl text-cyan-600" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">150K+</h3>
              <p className="text-sm text-white">Users</p>
            </div>
          </div>
        </div>

        {/* Watch Intro Button */}
        <div className="text-center">
          <button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-full hover:bg-black transition"
          >
            <FaPlayCircle className="text-cyan-600" />
            Watch Intro
          </button>
        </div>
        <Gallery/>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
            <div className="relative bg-black rounded-xl overflow-hidden w-full max-w-3xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
              >
                &times;
              </button>
              <iframe
                className="w-full h-[250px] sm:h-[400px]"
                src="https://www.youtube.com/embed/ckHzmP1evNU"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VoicesThatInspire;
