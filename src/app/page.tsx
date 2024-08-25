"use client";

import { Questionitem } from "@/components/Questionitem";
import { questions } from "../data/questions";
import { useState } from "react";
import { Result } from "postcss";
import { Results } from "@/components/Showresults";

export default function Home() {
const title = "Quiz App";
const [answers, setAnswers] = useState<number[]>([]);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showResult, setShowResult] = useState(false);

const loadNextQuestion = () => {
  if (questions[currentQuestion + 1]) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    setShowResult(true);
  }
}

const handleAnswer = (answer: number) => { 
  setAnswers([...answers, answer]);
  loadNextQuestion();
}

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
         <Questionitem 
            question={questions[currentQuestion]} 
            count={currentQuestion + 1} 
            onAnswer={handleAnswer} />
          }
          {showResult && 
          <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestion + 1} of ${questions.length} Question${questions.length > 1 ? "s" : ""}`
          }
          {showResult &&
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md" onClick={() => window.location.reload()}>Restart</button>
          }
        </div>
      </div>
    </div>
  );
}
