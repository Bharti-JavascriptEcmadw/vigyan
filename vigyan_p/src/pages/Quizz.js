import  { useState } from "react";
import TopicCard from "../components/TopicCard";
import Quiz from "../components/Quiz";

const Quizz= () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto p-4">
        {!selectedTopic ? (
          <TopicCard onSelectTopic={setSelectedTopic} />
        ) : (
          <Quiz topic={selectedTopic} onBack={() => setSelectedTopic(null)} />
        )}
      </div>
    </div>
  );
};

export default Quizz;
