import React, { useState } from "react";
import { quizData } from "../data/quizData";

const Quiz = ({ topic, onBack }) => {
  const questions = quizData[topic];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
        {topic} Quiz
      </h2>

      {showResult ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold">Your Score: {score} / {questions.length}</h3>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-4">{questions[current].question}</h3>
          <div className="space-y-2">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={`w-full p-2 border rounded-lg transition ${
                  selected === option
                    ? option === questions[current].answer
                      ? "bg-green-200"
                      : "bg-red-200"
                    : "bg-gray-100"
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={prevQuestion}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 disabled:opacity-50"
              disabled={current === 0}
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {current + 1 === questions.length ? "Show Result" : "Next"}
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          ← Back to Topics
        </button>
      </div>
    </div>
  );
};

export default Quiz;
