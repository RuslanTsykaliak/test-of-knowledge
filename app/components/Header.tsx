'use client'
import { useState } from "react";

import { NewQuizForm } from "./NewQuizForm";


export const Header = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition dark:bg-blue-400 dark:text-black dark:hover:bg-blue-300"
        >
          {showForm ? 'Close Form' : 'Add a Quiz'}
        </button>
        <h1 className="text-4xl font-bold text-black dark:text-white">Test of Knowledge</h1>
        <div></div> {/* This empty div is needed to keep the title in the center */}
      </div>
      {showForm && <NewQuizForm />}
    </div>
  );
}
