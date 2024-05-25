// component/TakeQuiz.tsx
'use client'
import { FormEvent, useState } from "react"

import { QuizT } from "../types/quiz";

type TakeQuizProps = {
  quiz: QuizT;
}

export const TakeQuiz = ({ quiz }: TakeQuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let newScore = 0;
    quiz.questions.forEach((question, questionIndex) => {
      if (question.answerOptions[selectedAnswers[questionIndex]!].isCorrect) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const handleRetake = () => {
    setSelectedAnswers(Array(quiz.questions.length).fill(null));
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-md">
      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{question.questionText}</h3>
          {question.answerOptions.map((answer, answerIndex) => (
            <label key={answerIndex} className="flex items-center space-x-2">
              <input
                type="radio"
                name={`question-${questionIndex}`}
                onChange={() => handleAnswerChange(questionIndex, answerIndex)}
                className="form-radio text-indigo-600"
                disabled={score !== null}
              />
              <span className={`
      text-lg 
      ${score !== null && (
                  answer.isCorrect
                    ? 'text-green-600'
                    : selectedAnswers[questionIndex] === answerIndex
                      ? 'text-red-600'
                      : 'text-gray-700 dark:text-gray-200'
                )}
    `}>
                {answer.answerText}
              </span>
            </label>
          ))}

        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out" disabled={score !== null}>Submit The Quiz</button>
      {score !== null && (
        <>
          <p className="mt-4 text-2xl font-bold">Your score is {score} out of {quiz.questions.length}</p>
          <button onClick={handleRetake} className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-150 ease-in-out">Re-take Quizzes</button>
        </>
      )}
    </form>
  )
};
