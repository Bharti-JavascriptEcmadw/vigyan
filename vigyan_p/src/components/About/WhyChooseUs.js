



import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-gray-900 text-center text-white">
      {/* Heading */}


      <h2 className="text-3xl md:text-4xl font-bold underline text-purple-600 mb-6">
        Why choose <span className="text-red-500">us?</span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-300 mt-4 text-lg max-w-4xl mx-auto leading-relaxed">
        The goal of our educational program is to enhance the educational experience for students between the ages of 6 and 18.
        In alignment with the NEP 2020 objectives, we offer integrated STEM learning, AI learning, Robotics classes, and Coding for
        beginners curriculum and cutting-edge technology products.
      </p>

      {/* Features Section */}
      <div className="mt-10 bg-gray-800 py-10 px-4 rounded-xl shadow-lg text-white">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center text-sm font-semibold max-w-6xl mx-auto">
          <div className="text-center">
            <img src="/assets/about/hand-learn.png" alt="Hands-on learning" className="w-16 mx-auto mb-2 bg-white p-2 rounded-full shadow-lg" />
            <p className="text-gray-200">Hands-on learning</p>
          </div>
          <div className="text-center">
            <img src="/assets/about/boostconfidence.png" alt="Boost confidence" className="w-16 mx-auto mb-2 bg-white p-2 rounded-full shadow-lg" />
            <p className="text-gray-200">Boost confidence</p>
          </div>
          <div className="text-center">
            <img src="/assets/about/expert.png" alt="Expert instructors" className="w-16 mx-auto mb-2 bg-white p-2 rounded-full shadow-lg" />
            <p className="text-gray-200">Expert instructors</p>
          </div>
          <div className="text-center">
            <img src="/assets/about/head.png" alt="Practical knowledge" className="w-16 mx-auto mb-2 bg-white p-2 rounded-full shadow-lg" />
            <p className="text-gray-200">Practical knowledge</p>
          </div>
          <div className="text-center">
            <img src="/assets/about/career.png" alt="Career opportunities" className="w-16 mx-auto mb-2 bg-white p-2 rounded-full shadow-lg" />
            <p className="text-gray-200">Career opportunities</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center text-sm font-medium text-gray-200">
        <div>
          <img src="/assets/about/clock.png" alt="Training hours" className="w-12 mx-auto mb-2" />
          <p className="text-orange-500 text-lg font-bold">960,000+</p>
          <p className="underline">Training hours<br />since 2018</p>
        </div>
        <div>
          <img src="/assets/about/book.png" alt="Courses" className="w-12 mx-auto mb-2" />
          <p className="text-orange-500 text-lg font-bold">10+</p>
          <p className="underline">Levels / Courses</p>
        </div>
        <div>
          <img src="/assets/about/location.png" alt="Locations" className="w-12 mx-auto mb-2" />
          <p className="text-orange-500 text-lg font-bold">10+</p>
          <p className="underline">Different locations<br />in Uttar Pradesh</p>
        </div>
        <div>
          <img src="/assets/about/law.png" alt="Students" className="w-12 mx-auto mb-2" />
          <p className="text-orange-500 text-lg font-bold">5000+</p>
          <p className="underline">Students enrolled<br />since 2018</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
