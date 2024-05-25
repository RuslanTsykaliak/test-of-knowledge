// components/QuizList.tsx for listing all quizzes in the date
'use client'
import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";

import { initialQuizzes } from "../data/quizzes"
import { QuizT } from "../types/quiz";
import { EditQuizForm } from "./EditQuizForm";
import { TakeQuiz } from "./TakeQuiz";


export const QuizList = () => {
  const { darkModeActive } = useDarkMode()
  const [quizzes, setQuizzes] = useState(initialQuizzes)
  const [showQuestions, setShowQuestions] = useState<QuizT | null>(null)
  const [editingQuiz, setEditingQuiz] = useState<QuizT | null>(null)

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
    if (storedQuizzes.length === 0) {
      localStorage.setItem('quizzes', JSON.stringify(initialQuizzes));
      setQuizzes(initialQuizzes);
    } else {
      setQuizzes(storedQuizzes);
    }
  }, []);

  const removeQuiz = (id: string) => {
    const updatedQuizzes = quizzes.filter(quiz => quiz.id !== id);
    setQuizzes(updatedQuizzes);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
  }

  const handleSave = (updatedQuiz: QuizT) => {
    const updatedQuizzes = quizzes.map((quiz) => quiz.id === updatedQuiz.id ? updatedQuiz : quiz)

    setQuizzes(updatedQuizzes)
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes))
    setEditingQuiz(null)
  }


  return (
    <div className={`p-6 min-h-screen ${darkModeActive ? 'bg-gray-800' : 'bg-gray-100'} dark:bg-gray-800 dark:text-white`}>
      {quizzes.map((quiz) => (
        <div key={quiz.id} className={`mb-4 p-4 rounded shadow-lg ${darkModeActive ? 'bg-gray-700 text-white' : 'bg-white text-black'} dark:bg-gray-700 dark:text-white`}>
          <h2 className={`text-2xl font-bold mb-2`}>{quiz.title}</h2>
          <button
            onClick={() => setShowQuestions(showQuestions !== quiz ? quiz : null)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition dark:bg-blue-400 dark:text-black dark:hover:bg-blue-300"
          >
            {showQuestions === quiz ? 'Hide Questions' : 'Show Questions'}
          </button>

          {/*  Edit the Quiz */}
          <button
            onClick={() => setEditingQuiz(editingQuiz !== quiz ? quiz : null)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition mt-2"
          >
            {editingQuiz === quiz ? 'Close Edit' : 'Start Edit'}
          </button>
          {editingQuiz === quiz && (
            <EditQuizForm
              quiz={quiz}
              onSave={handleSave}
            />
          )}


          {showQuestions === quiz && (
            <>
              <TakeQuiz quiz={quiz} />
              {/*  Remove Quiz button */}
              <button onClick={() => removeQuiz(quiz.id)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Remove The Quiz</button>
            </>
          )}
        </div>
      ))}

    </div>
  )
};
