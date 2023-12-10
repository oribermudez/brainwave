const moduleOne = [
    {
        id: 'quiz-1',
        question: 'What is JavaScript?',
        options: ['A style sheet language for describing the presentation of a document.', 'A markup language used for creating web pages.', 'A lightweight interpreted programming language with first-class functions.'],
        correctAnswer: 'A lightweight interpreted programming language with first-class functions.'
    },
    {
        id: 'quiz-2',
        question: 'What does "interpreted programming language" mean in the context of JavaScript?',
        options: ['The code is written in advance and compiled before execution.', 'The code is executed directly, translating each line into machine code.', 'The code is executed only in a specific runtime environment.'],
        correctAnswer: 'The code is executed directly, translating each line into machine code.'
    },
    {
        id: 'quiz-3',
        question: 'What does it mean for JavaScript to have "first-class functions"?',
        options: ['Functions that are executed first when the program runs.', 'Functions that can be treated like any other variable.', 'Functions that are only used in the first part of a program.'],
        correctAnswer: 'Functions that can be treated like any other variable.'
    },
    {
      id: 'quiz-4',
      question: 'What is ECMAScript?',
      options: ['A JavaScript framework for building user interfaces.', 'An extension of JavaScript specific to server-side development.', 'A standard upon which JavaScript is based, defining the language specifications.'],
      correctAnswer: 'A standard upon which JavaScript is based, defining the language specifications.'
  }
]

const moduleTwo = [
    {
        id: 'quiz-1',
        question: 'What is a variable in JavaScript?',
        options: ['A placeholder for values or information.', "A fixed value that doesn't change.", "A function in the computer's memory."],
        correctAnswer: 'A placeholder for values or information.'
    },
    {
        id: 'quiz-2',
        question: 'Which of the options is the correct way to declare a variable in JavaScript?',
        options: ['variable x;', 'create x;', 'let x;'],
        correctAnswer: 'let x;'
    },
    {
        id: 'quiz-3',
        question: 'What is the purpose of assigning a value to a variable?',
        options: ['To confuse the code.', 'To create unnecessary steps.', 'To store and manage data.'],
        correctAnswer: 'To store and manage data.'
    },
    {
      id: 'quiz-4',
      question: 'What does reassignment of a variable mean?',
      options: ["Changing the variable's name.", "Changing the variable's value.", "Changing the variable's label."],
      correctAnswer: "Changing the variable's value."
    },
    {
        id: 'quiz-5',
        question: 'How would you describe the scope of a variable?',
        options: ['The size of the variable.', "The color of the variable.", "The area of code where the variable is visible."],
        correctAnswer: 'The area of code where the variable is visible.'
    },
    {
        id: 'quiz-6',
        question: 'What does the term "hoisting" refer to in the context of variables?',
        options: ['Lifting a variable to the top of its containing scope.', 'Dropping a variable to the bottom of its block scope.', 'Moving a variable within its scope during runtime'],
        correctAnswer: 'Lifting a variable to the top of its containing scope.'
    },
    {
        id: 'quiz-7',
        question: 'Why should you avoid using reserved words as variable names?',
        options: [' It makes the code more exciting.', 'It prevents the code from running.', 'Reserved words have special meanings and functions in the language.'],
        correctAnswer: 'Reserved words have special meanings and functions in the language.'
    },
]

export { moduleOne, moduleTwo };