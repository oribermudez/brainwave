const declareVariable = `
  // Examples of declaring variables
  var name;
  let age;
  const DATE_OF_BIRTH;
  `;

const assignVariable = `
  // Examples of assigning variables
  name = "Bob";
  age = 28;
  DATE_OF_BIRTH = "01/01/1995";
`;

const reAssignVariable = `
  // Examples of assigning variables
  name = "Alex";
  age = 32;
  DATE_OF_BIRTH = "01/11/1991";
`;

const initialization = `
  // Examples of initializing variables
  var firstName = "Sam";
  let lastName = "Smith";
  const GRAVITY = 9.8;
`;

const camelCase = `
  // Examples of camel case
  let myVariableName;
  let activeUser;
  let totalScore;
`;

const meaningful = `
  // Examples of meaningful and descriptive names
  let activeUser;
  let totalScore;
  let isUserLoggedIn;
  let userId;
`;

const constants = `
  // Examples of constants
  const MAX_SCORE;
  const PI_VALUE;
  const GRAVITY;
`;

const reserved = `
  // Examples of reserved words: var, let, const, class, function, return
  let let = 'hello'; // <== error, you can't name variable "let"
`;

const startsWithLetter = `
  // Examples of constants
  let myVariable; // Correct
  let _private; // Correct
  let 1stVariable; // Incorrect
`;

export { declareVariable, assignVariable, reAssignVariable, initialization, camelCase, meaningful, constants, reserved, startsWithLetter };