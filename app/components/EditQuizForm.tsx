// components/EditQuizForm.tsx
'use client'
import { useState, ChangeEvent, FormEvent } from "react"

import { QuizT } from "../types/quiz"

type EditQuizFormProps = {
  quiz: QuizT;
  onSave: (quiz: QuizT) => void;
}

export const EditQuizForm = ({ quiz, onSave }: EditQuizFormProps) => {
  const [title, setTitle] = useState(quiz.title)
  const [questions, setQuestions] = useState(quiz.questions)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }


  const handleQuestionChange = (questionIndex: number, event: ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].questionText = event.target.value
    setQuestions(newQuestions)
  }


  const handleAnswerChange = (questionIndex: number, answerIndex: number, event: ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions[answerIndex].answerText = event.target.value
    setQuestions(newQuestions)
  }


  const handleCorrectAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.forEach((answer, i) => {
      answer.isCorrect = i === answerIndex
    })
    setQuestions(newQuestions)
  }


  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', answerOptions: [{ answerText: '', isCorrect: false }] }])
  }

  const handleDeleteQuestion = (questionIndex: number) => {
    const newQuestions = [...questions]
    newQuestions.splice(questionIndex, 1)
    setQuestions(newQuestions)
  }



  const handleAddAnswer = (questionIndex: number,) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.push({ answerText: '', isCorrect: false })
    setQuestions(newQuestions)
  }


  const handleDeleteAnswer = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.splice(answerIndex, 1)
    setQuestions(newQuestions)
  }


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const updatedQuiz = {
      ...quiz,
      title: title,
      questions: questions,
    }
    onSave(updatedQuiz)
  }

  return (
    <form onSubmit={handleSubmit} className="dark:bg-gray-800 dark:text-white p-6 rounded-md">
      <label className="block mb-4">
        <span className="text-gray-700 dark:text-gray-200 text-lg font-bold">Title:</span>
        <input type="text" value={title} onChange={handleTitleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white text-lg" />
      </label>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700 dark:text-gray-200 font-bold">Question {questionIndex + 1}:</span>
            <input type="text" value={question.questionText} onChange={(event) => handleQuestionChange(questionIndex, event)} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white text-lg" />
            <button type='button' onClick={() => handleDeleteQuestion(questionIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete Question</button>
          </label>
          {question.answerOptions.map((answer, answerIndex) => (
            <label key={answerIndex} className="block mb-2">
              <span className="text-gray-700 dark:text-gray-200 font-bold">Answer {answerIndex + 1}:</span>
              <input type="text" value={answer.answerText} onChange={(event) => handleAnswerChange(questionIndex, answerIndex, event)} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white text-lg" />
              <input type='checkbox' onChange={() => handleCorrectAnswerChange(questionIndex, answerIndex)} className="mt-2" /> Correct Answer
              <br />
              <button type='button' onClick={() => handleAddAnswer(questionIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Answer</button>
              <br />
              <button type='button' onClick={() => handleDeleteAnswer(questionIndex, answerIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete Answer</button>
            </label>
          ))}
        </div>
      ))}
      <button type='button' onClick={handleAddQuestion} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Question</button>
      <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save Quiz</button>
    </form>
  )
}