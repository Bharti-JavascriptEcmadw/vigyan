

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const RoboticQuizSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);

//   const quizData = [
//     {
//       question: "What is a robot?",
//       options: [
//         "A type of insect",
//         "A machine that can perform tasks automatically",
//         "A character in a video game",
//         "A musical instrument"
//       ],
//       answer: "A machine that can perform tasks automatically"
//     },
//     {
//       question: "Which language is common in robotics?",
//       options: ["Python", "HTML", "CSS", "Excel"],
//       answer: "Python"
//     },
//     {
//       question: "What does a robot sensor do?",
//       options: [
//         "Makes the robot speak",
//         "Allows the robot to sense the environment",
//         "Plays music",
//         "Creates light"
//       ],
//       answer: "Allows the robot to sense the environment"
//     },
//     {
//       question: "What is AI in robotics?",
//       options: [
//         "Automatic Iron",
//         "Artificial Intelligence",
//         "Audio Interface",
//         "Advanced Input"
//       ],
//       answer: "Artificial Intelligence"
//     },
//     {
//       question: "Which part helps robots move?",
//       options: ["Sensor", "Motor", "Speaker", "Light"],
//       answer: "Motor"
//     }
//   ];

//   const QUESTIONS_PER_SLIDE = 1;
//   const totalSlides = Math.ceil(quizData.length / QUESTIONS_PER_SLIDE);

//   const handleOptionSelect = (questionIndex, selected) => {
//     setAnswers({ ...answers, [questionIndex]: selected });
//   };

//   const handleNext = () => {
//     if (currentSlide < totalSlides - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const calculateScore = () => {
//     let score = 0;
//     quizData.forEach((q, idx) => {
//       if (answers[idx] === q.answer) score++;
//     });
//     return score;
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//   };

//   const resetQuiz = () => {
//     setAnswers({});
//     setCurrentSlide(0);
//     setShowResult(false);
//   };

//   const startIndex = currentSlide * QUESTIONS_PER_SLIDE;
//   const currentQuestions = quizData.slice(startIndex, startIndex + QUESTIONS_PER_SLIDE);

//   return (
//     <div className="mt-5 py-10 px-4 sm:px-6 lg:px-8 bg-blue-50 mt-[-12px]">
//       <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden border-2 border-dotted border-red-700">

//         {/* Top Image on small, left image on medium+ */}
//         <div
//           className="w-full md:w-1/2 h-64 md:h-auto bg-contain bg-center md:bg-left bg-no-repeat border-b-2 md:border-b-0 md:border-r-2 border-gray-700"
//           style={{ backgroundImage: "url('/assets/b/7.jpg')" }}
//         ></div>

//         {/* Quiz Section */}
//         <div className="w-full md:w-1/2 p-6 text-center">
//           <h2 className="text-2xl font-bold text-blue-600 mb-4">
//             Robotic Education Quiz
//           </h2>

//           {showResult ? (
//             <div>
//               <h3 className="text-xl font-semibold">
//                 You scored {calculateScore()} out of {quizData.length}
//               </h3>
//               <button
//                 onClick={resetQuiz}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : (
//             <div>
//               {currentQuestions.map((q, index) => {
//                 const actualIndex = startIndex + index;
//                 return (
//                   <div key={actualIndex} className="mb-6 text-left">
//                     <h4 className="text-lg font-medium mb-2">
//                       Q{actualIndex + 1}: {q.question}
//                     </h4>
//                     <div className="grid gap-2">
//                       {q.options.map((opt, i) => (
//                         <label
//                           key={i}
//                           className={`block px-4 py-2 rounded border cursor-pointer ${
//                             answers[actualIndex] === opt
//                               ? "bg-blue-500 text-white"
//                               : "bg-gray-100 hover:bg-blue-100"
//                           }`}
//                         >
//                           <input
//                             type="radio"
//                             name={`question-${actualIndex}`}
//                             value={opt}
//                             className="hidden"
//                             onChange={() => handleOptionSelect(actualIndex, opt)}
//                           />
//                           {opt}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })}

//               <div className="flex justify-between items-center mt-6">
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentSlide === 0}
//                   className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//                 >
//                   Previous
//                 </button>
//                 {currentSlide === totalSlides - 1 ? (
//                   <button
//                     onClick={handleSubmit}
//                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Submit Quiz
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleNext}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Solve Test Series Button */}
//           <div className="mt-8 text-center">
//             <Link
//               to="/test-series"
//               className="inline-block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//             >
//               Solve Test Series
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoboticQuizSlider;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RoboticQuizSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const quizData = [
    {
      question: "What is a robot?",
      options: [
        "A type of insect",
        "A machine that can perform tasks automatically",
        "A character in a video game",
        "A musical instrument"
      ],
      answer: "A machine that can perform tasks automatically"
    },
    {
      question: "Which language is common in robotics?",
      options: ["Python", "HTML", "CSS", "Excel"],
      answer: "Python"
    },
    {
      question: "What does a robot sensor do?",
      options: [
        "Makes the robot speak",
        "Allows the robot to sense the environment",
        "Plays music",
        "Creates light"
      ],
      answer: "Allows the robot to sense the environment"
    },
    {
      question: "What is AI in robotics?",
      options: [
        "Automatic Iron",
        "Artificial Intelligence",
        "Audio Interface",
        "Advanced Input"
      ],
      answer: "Artificial Intelligence"
    },
    {
      question: "Which part helps robots move?",
      options: ["Sensor", "Motor", "Speaker", "Light"],
      answer: "Motor"
    }
  ];

  const QUESTIONS_PER_SLIDE = 1;
  const totalSlides = Math.ceil(quizData.length / QUESTIONS_PER_SLIDE);

  const handleOptionSelect = (questionIndex, selected) => {
    setAnswers({ ...answers, [questionIndex]: selected });
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const startIndex = currentSlide * QUESTIONS_PER_SLIDE;
  const currentQuestions = quizData.slice(startIndex, startIndex + QUESTIONS_PER_SLIDE);

  return (
    <div className="mt-5 py-10 px-4 sm:px-6 lg:px-8 bg-blue-50 mt-[-12px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden border-2 border-dotted border-red-700">

        {/* Top Image on small, left image on medium+ */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-contain bg-center md:bg-left bg-no-repeat border-b-2 md:border-b-0 md:border-r-2 border-gray-700"
          style={{ backgroundImage: "url('/assets/b/7.jpg')" }}
        ></div>

        {/* Quiz Section */}
        <div className="w-full md:w-1/2 p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Robotic Education Quiz
          </h2>

          <div>
            {currentQuestions.map((q, index) => {
              const actualIndex = startIndex + index;
              return (
                <div key={actualIndex} className="mb-6 text-left">
                  <h4 className="text-lg font-medium mb-2">
                    Q{actualIndex + 1}: {q.question}
                  </h4>
                  <div className="grid gap-2">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className={`block px-4 py-2 rounded border cursor-pointer ${
                          answers[actualIndex] === opt
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 hover:bg-blue-100"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${actualIndex}`}
                          value={opt}
                          className="hidden"
                          onChange={() => handleOptionSelect(actualIndex, opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentSlide === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>

              {currentSlide === totalSlides - 1 ? (
                <button
                  onClick={() => navigate('/test-series')}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Solve Test Series Button */}
          <div className="mt-8 text-center">
            <Link
              to="/test-series"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Solve Test Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticQuizSlider;
