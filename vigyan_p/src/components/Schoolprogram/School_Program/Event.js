import React from "react";

const Event = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Video replacing the image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source src="/assets/savitri/10.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="w-full h-full flex items-center justify-center py-40 px-4 relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
{/* School Program */}
        </h1>
      </div>
    </div>
  );
};

export default Event;
