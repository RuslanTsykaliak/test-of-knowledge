// data/initialQuizzes.ts

export const initialQuizzes = [
  {
    id: '1',
    title: 'JavaScript Quiz',
    questions: [
      {
        questionText: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        answerOptions: [
          { answerText: 'document.getElementByName("p").innerHTML = "Hello World!";', isCorrect: false },
          { answerText: 'document.getElementById("demo").innerHTML = "Hello World!";', isCorrect: true },
          { answerText: 'document.getElement("p").innerHTML = "Hello World!";', isCorrect: false },
          { answerText: '#demo.innerHTML = "Hello World!";', isCorrect: false },
        ],
      },
      {
        questionText: 'Where is the correct place to insert a JavaScript?',
        answerOptions: [
          { answerText: 'The <body> section', isCorrect: false },
          { answerText: 'Both the <head> section and the <body> section are correct', isCorrect: true },
          { answerText: 'The <head> section', isCorrect: false },
          { answerText: 'The <footer> section', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you create a function in JavaScript?',
        answerOptions: [
          { answerText: 'function myFunction()', isCorrect: true },
          { answerText: 'function:myFunction()', isCorrect: false },
          { answerText: 'function = myFunction()', isCorrect: false },
          { answerText: 'function => myFunction()', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you call a function named "myFunction"?',
        answerOptions: [
          { answerText: 'call myFunction()', isCorrect: false },
          { answerText: 'myFunction()', isCorrect: true },
          { answerText: 'call function myFunction()', isCorrect: false },
          { answerText: 'Call.myFunction()', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'HTML Quiz',
    questions: [
      {
        questionText: 'What does HTML stand for?',
        answerOptions: [
          { answerText: 'Hyper Text Markup Language', isCorrect: true },
          { answerText: 'High Text Machine Language', isCorrect: false },
          { answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
          { answerText: 'Home Tool Markup Language', isCorrect: false },
        ],
      },
      {
        questionText: 'Which HTML element is used to specify a footer for a document or section?',
        answerOptions: [
          { answerText: '<footer>', isCorrect: true },
          { answerText: '<bottom>', isCorrect: false },
          { answerText: '<section>', isCorrect: false },
          { answerText: '<div>', isCorrect: false },
        ],
      },
      {
        questionText: 'Inside which HTML element do we put the JavaScript?',
        answerOptions: [
          { answerText: '<script>', isCorrect: true },
          { answerText: '<javascript>', isCorrect: false },
          { answerText: '<js>', isCorrect: false },
          { answerText: '<scripting>', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the correct HTML for adding a background color?',
        answerOptions: [
          { answerText: '<body style="background-color:yellow;">', isCorrect: true },
          { answerText: '<body bg="yellow">', isCorrect: false },
          { answerText: '<background>yellow</background>', isCorrect: false },
          { answerText: '<body color="yellow">', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'CSS Quiz',
    questions: [
      {
        questionText: 'What does CSS stand for?',
        answerOptions: [
          { answerText: 'Cascading Style Sheets', isCorrect: true },
          { answerText: 'Colorful Style Sheets', isCorrect: false },
          { answerText: 'Creative Style Sheets', isCorrect: false },
          { answerText: 'Computer Style Sheets', isCorrect: false },
        ],
      },
      {
        questionText: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        answerOptions: [
          { answerText: 'In the <head> section', isCorrect: true },
          { answerText: 'At the end of the document', isCorrect: false },
          { answerText: 'In the <body> section', isCorrect: false },
          { answerText: 'In the <footer>', isCorrect: false },
        ],
      },
      {
        questionText: 'Which CSS property controls the text size?',
        answerOptions: [
          { answerText: 'font-size', isCorrect: true },
          { answerText: 'text-size', isCorrect: false },
          { answerText: 'font-style', isCorrect: false },
          { answerText: 'text-style', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you make each word in a text start with a capital letter?',
        answerOptions: [
          { answerText: 'text-transform: capitalize;', isCorrect: true },
          { answerText: 'text-transform: uppercase;', isCorrect: false },
          { answerText: 'You can\'t do that with CSS', isCorrect: false },
          { answerText: 'text-transform: lowercase;', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'React Quiz',
    questions: [
      {
        questionText: 'What is a state in React?',
        answerOptions: [
          { answerText: 'A persistent storage.', isCorrect: false },
          { answerText: 'A way to handle component lifecycle.', isCorrect: false },
          { answerText: 'An internal data store (object) of a component.', isCorrect: true },
          { answerText: 'A method to update the DOM.', isCorrect: false },
        ],
      },
      {
        questionText: 'Which method is used to create a React component?',
        answerOptions: [
          { answerText: 'React.component', isCorrect: false },
          { answerText: 'React.createComponent', isCorrect: false },
          { answerText: 'React.makeComponent', isCorrect: false },
          { answerText: 'React.Component', isCorrect: true },
        ],
      },
      {
        questionText: 'What is JSX?',
        answerOptions: [
          { answerText: 'A syntax extension for JavaScript.', isCorrect: true },
          { answerText: 'A template language.', isCorrect: false },
          { answerText: 'A library for DOM manipulation.', isCorrect: false },
          { answerText: 'A CSS preprocessor.', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you pass data to a React component?',
        answerOptions: [
          { answerText: 'Via state.', isCorrect: false },
          { answerText: 'Via props.', isCorrect: true },
          { answerText: 'Via setState.', isCorrect: false },
          { answerText: 'Via DOM manipulation.', isCorrect: false },
        ],
      },
      {
        questionText: 'What is a React Hook?',
        answerOptions: [
          { answerText: 'A special function that lets you use state and other React features.', isCorrect: true },
          { answerText: 'A way to handle events in React.', isCorrect: false },
          { answerText: 'A component lifecycle method.', isCorrect: false },
          { answerText: 'A method to directly manipulate the DOM.', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Python Quiz',
    questions: [
      {
        questionText: 'What is the output of print(2**3)?',
        answerOptions: [
          { answerText: '6', isCorrect: false },
          { answerText: '8', isCorrect: true },
          { answerText: '9', isCorrect: false },
          { answerText: '12', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is a mutable data type in Python?',
        answerOptions: [
          { answerText: 'Tuple', isCorrect: false },
          { answerText: 'List', isCorrect: true },
          { answerText: 'String', isCorrect: false },
          { answerText: 'Integer', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the correct way to create a function in Python?',
        answerOptions: [
          { answerText: 'function myFunction()', isCorrect: false },
          { answerText: 'def myFunction():', isCorrect: true },
          { answerText: 'create myFunction()', isCorrect: false },
          { answerText: 'function: myFunction()', isCorrect: false },
        ],
      },
      {
        questionText: 'How do you start a comment in Python?',
        answerOptions: [
          { answerText: '//', isCorrect: false },
          { answerText: '<!--', isCorrect: false },
          { answerText: '#', isCorrect: true },
          { answerText: '/*', isCorrect: false },
        ],
      },
      {
        questionText: 'Which method can be used to return a string in upper case letters?',
        answerOptions: [
          { answerText: 'uppercase()', isCorrect: false },
          { answerText: 'upperCase()', isCorrect: false },
          { answerText: 'toUpperCase()', isCorrect: false },
          { answerText: 'upper()', isCorrect: true },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'General Knowledge Quiz',
    questions: [
      {
        questionText: 'What is the capital of France?',
        answerOptions: [
          { answerText: 'Berlin', isCorrect: false },
          { answerText: 'Madrid', isCorrect: false },
          { answerText: 'Paris', isCorrect: true },
          { answerText: 'Rome', isCorrect: false },
        ],
      },
      {
        questionText: 'Who wrote "To Kill a Mockingbird"?',
        answerOptions: [
          { answerText: 'Harper Lee', isCorrect: true },
          { answerText: 'Mark Twain', isCorrect: false },
          { answerText: 'J.K. Rowling', isCorrect: false },
          { answerText: 'Ernest Hemingway', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the largest planet in our Solar System?',
        answerOptions: [
          { answerText: 'Earth', isCorrect: false },
          { answerText: 'Jupiter', isCorrect: true },
          { answerText: 'Mars', isCorrect: false },
          { answerText: 'Venus', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the boiling point of water?',
        answerOptions: [
          { answerText: '90 degrees Celsius', isCorrect: false },
          { answerText: '100 degrees Celsius', isCorrect: true },
          { answerText: '110 degrees Celsius', isCorrect: false },
          { answerText: '120 degrees Celsius', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'History Quiz',
    questions: [
      {
        questionText: 'Who was the first President of the United States?',
        answerOptions: [
          { answerText: 'Thomas Jefferson', isCorrect: false },
          { answerText: 'Abraham Lincoln', isCorrect: false },
          { answerText: 'George Washington', isCorrect: true },
          { answerText: 'John Adams', isCorrect: false },
        ],
      },
      {
        questionText: 'In which year did World War II end?',
        answerOptions: [
          { answerText: '1940', isCorrect: false },
          { answerText: '1945', isCorrect: true },
          { answerText: '1950', isCorrect: false },
          { answerText: '1955', isCorrect: false },
        ],
      },
      {
        questionText: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
        answerOptions: [
          { answerText: 'Mayflower', isCorrect: true },
          { answerText: 'Santa Maria', isCorrect: false },
          { answerText: 'Pinta', isCorrect: false },
          { answerText: 'Nina', isCorrect: false },
        ],
      },
      {
        questionText: 'Who was the first woman to fly solo across the Atlantic Ocean?',
        answerOptions: [
          { answerText: 'Harriet Quimby', isCorrect: false },
          { answerText: 'Bessie Coleman', isCorrect: false },
          { answerText: 'Amelia Earhart', isCorrect: true },
          { answerText: 'Jacqueline Cochran', isCorrect: false },
        ],
      },
      {
        questionText: 'Which ancient civilization built the Machu Picchu complex in Peru?',
        answerOptions: [
          { answerText: 'Aztec', isCorrect: false },
          { answerText: 'Mayan', isCorrect: false },
          { answerText: 'Inca', isCorrect: true },
          { answerText: 'Olmec', isCorrect: false },
        ],
      },
    ],
  }
];
