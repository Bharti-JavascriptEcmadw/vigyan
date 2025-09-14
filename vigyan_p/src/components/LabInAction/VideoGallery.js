

import React from 'react';

const videos = [
  "/assets/video_gallery/35.mp4",
  "/assets/video_gallery/43.mp4",
  "/assets/video_gallery/33.mp4",
  "/assets/video_gallery/42.mp4",
  "/assets/video_gallery/39.mp4",
  "/assets/video_gallery/40.mp4",
];

const VideoGallery = () => (
  <section className="bg-gradient-to-br from-[#eef2f7] to-[#d7f2f4] py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
      Lab Showcase
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Witness hands-on innovation in action — where students explore, build, and solve with cutting-edge STEM tools.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {videos.map((vid, idx) => (
          <div
            key={idx}
            className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <video
              controls
              className="w-full h-64 object-cover rounded-t-2xl"
            >
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoGallery;
