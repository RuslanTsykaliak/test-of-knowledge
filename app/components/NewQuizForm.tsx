// components/NewQuizForm.tsx
'use client'
import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react';

export const NewQuizForm = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', answerOptions: [{ answerText: '', isCorrect: false }] }]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number, event: ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answerOptions[answerIndex].answerText = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = (event: MouseEvent<HTMLButtonElement>) => {
    setQuestions([...questions, { questionText: '', answerOptions: [{ answerText: '', isCorrect: false }] }])
  }

  const handleDeleteQuestion = (questionIndex: number) => {
    const newQuestions = [...questions]
    newQuestions.splice(questionIndex, 1)
    setQuestions(newQuestions)
  }

  const handleAddAnswer = (questionIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.push({ answerText: '', isCorrect: false })
    setQuestions(newQuestions)
  }

  const handleDeleteAnswer = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.splice(answerIndex, 1)
    setQuestions(newQuestions)
  }

  const handleSelectCorrectAnswer = (questionIndex: number, answerIndex: number) => {
    const newQuestions = [...questions]
    newQuestions[questionIndex].answerOptions.forEach((answer, index) => {
      answer.isCorrect = index === answerIndex
    })
    setQuestions(newQuestions)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const storedQuizzesString = localStorage.getItem('quizzes');
    const storedQuizzes = storedQuizzesString ? JSON.parse(storedQuizzesString) : [];
    const newQuiz = {
      id: (storedQuizzes.length + 1).toString(),
      title: title,
      questions: questions,
    };
    storedQuizzes.push(newQuiz)
    localStorage.setItem('quizzes', JSON.stringify(storedQuizzes))
    setTitle('')
    setQuestions([{ questionText: '', answerOptions: [{ answerText: '', isCorrect: false }] }])

    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="dark:bg-gray-800 dark:text-white p-6">
      <label className="block mb-4">
        <span className="text-gray-700 dark:text-gray-200 text-lg font-bold">Title:</span>
        <input type="text" value={title} onChange={handleTitleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white" />
      </label>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700 dark:text-gray-200 font-bold">Question {questionIndex + 1}:</span>
            <input type="text" value={question.questionText} onChange={(event) => handleQuestionChange(questionIndex, event)} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white" />
            <button type='button' onClick={() => handleDeleteQuestion(questionIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete Question</button>
          </label>
          {question.answerOptions.map((answer, answerIndex) => (
            <label key={answerIndex} className="block mb-2">
              <span className="text-gray-700 dark:text-gray-200 font-bold">Answer {answerIndex + 1}:</span>
              <input type="text" value={answer.answerText} onChange={(event) => handleAnswerChange(questionIndex, answerIndex, event)} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:ring-0 dark:text-white" />
              <input type='checkbox' onClick={() => handleSelectCorrectAnswer(questionIndex, answerIndex)} className="mt-2" /> Correct Answer
              <br />
              <button type='button' onClick={() => handleAddAnswer(questionIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Answer</button>
              <br />
              <button type='button' onClick={() => handleDeleteAnswer(questionIndex, answerIndex)} className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete Answer</button>
            </label>
          ))}
        </div>
      ))}
      <br />
      <button type='button' onClick={handleAddQuestion} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Question</button>
      <br />
      <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add a Quiz</button>
    </form>
  );
};
