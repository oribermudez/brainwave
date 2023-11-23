const quizzes = {
    javascript: {
        id: 'quiz-1',
        question: 'What is JavaScript?',
        options: ['A style sheet language for describing the presentation of a document.', 'A markup language used for creating web pages.', 'A lightweight interpreted programming language with first-class functions.'],
        correctAnswer: 'A lightweight interpreted programming language with first-class functions.'
    },
    interpreted: {
        id: 'quiz-2',
        question: 'What does "interpreted programming language" mean in the context of JavaScript?',
        options: ['The code is written in advance and compiled before execution.', 'The code is executed directly, translating each line into machine code.', 'The code is executed only in a specific runtime environment.'],
        correctAnswer: 'The code is executed directly, translating each line into machine code.'
    },
    firstClass: {
        id: 'quiz-3',
        question: 'What does it mean for JavaScript to have "first-class functions"?',
        options: ['Functions that are executed first when the program runs.', 'Functions that can be treated like any other variable.', 'Functions that are only used in the first part of a program.'],
        correctAnswer: 'Functions that can be treated like any other variable.'
    },
    ecmascript: {
      id: 'quiz-4',
      question: 'What is ECMAScript?',
      options: ['A JavaScript framework for building user interfaces.', 'An extension of JavaScript specific to server-side development.', 'A standard upon which JavaScript is based, defining the language specifications.'],
      correctAnswer: 'A standard upon which JavaScript is based, defining the language specifications.'
  }
}

export default quizzes;