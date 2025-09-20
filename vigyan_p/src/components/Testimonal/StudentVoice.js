
import React from "react";

const testimonials = [
  {
    name: "Piyush Sharma",
    message:
      "Working in the lab was a transformative experience. It gave me the confidence and technical knowledge to build my very first robot from scratch, and it sparked a deep passion for engineering.",
    photo: "/assets/test/1.jpg",
  },
  {
    name: "Fatima Zahera",
    message:
      "The mentorship I received was truly invaluable. The instructors were not only supportive but also provided access to world-class tools and resources that made learning robotics both fun and effective.",
    photo: "/assets/test/2.jpg",
  },
  {
    name: "Raj kumar",
    message:
      "Through hands-on robotics classes, I learned how to apply theoretical concepts. It sharpened my critical thinking and gave me a new perspective on how technology can be used to create solutions.",
    photo: "/assets/Rajkumar.jpeg",
  },
  {
    name: "Aradhya Rastogi",
    message:
      "The hands-on robot building sessions helped me overcome my fear of failure. I learned to test, iterate, and ultimately gained the confidence to present my own projects proudly.",
    photo: "/assets/Aradhya Rastogi.jpeg",
  },
  {
    name: "Ayushi singh",
    message:
      "Understanding how sensors and programming work together. It completely changed how I see devices and inspired me to pursue deeper knowledge in automation.",
    photo: "/assets/Ayushi singh.jpeg",
  },
  {
    name: "Vaishnavi Pandey",
    message:
      "Taking part in national robotics competitions pushed my creativity to new levels. Collaborating with peers and solving challenges under pressure was both exciting and incredibly rewarding.",
    photo: "/assets/Vaishnavi Pandey.jpeg",
  },
];

const StudentVoice = () => {
  return (
    <section className="py-16 px-4 w-full bg-teal-300">
      <h2 className="text-center text-5xl mb-12 font-bold text-gray-900">
        💬 What Our Students Say
      </h2>

      <div className="space-y-12">
        {testimonials.map((student, index) => (
          <div
            key={index}
            className="bg-white border-b-4 border-blue-900 max-w-3xl mx-auto w-full flex flex-col md:flex-row  shadow-lg items-center gap-8 p-6 rounded-lg"
            style={{borderTopRightRadius:"5%"}}
          >
            {/* Image with dotted border */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-dotted border-blue-900 shadow-lg flex-shrink-0">
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-900">
                {student.name}
              </h3>
              <p className="mt-3 text-gray-700 text-lg leading-relaxed">
                {student.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentVoice;
