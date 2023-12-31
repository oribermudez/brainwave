const lessons = [
  {
    name: "JavaScript Intro",
    progress: 100,
    url: "/javascript-basics/javascript-intro",
    previous: '',
    next: '/javascript-basics/variables',
    achievement: "achievement0",
  },
  {
    name: "Variables",
    progress: 50,
    url: "/javascript-basics/variables",
    previous: '/javascript-basics/javascript-intro',
    next: '/javascript-basics/data-types',
    achievement: "achievement1",
  },
  {
    name: "Data Types",
    progress: 0,
    url: "/javascript-basics/data-types",
    previous: '/javascript-basics/variables',
    next: '/javascript-basics/strings',
    achievement: "achievement2",
  },
  {
    name: "Strings",
    progress: 0,
    url: "/javascript-basics/strings",
    previous: '/javascript-basics/data-types',
    next: '/javascript-basics/numbers',
    achievement: "achievement3",
  },
  {
    name: "Numbers",
    progress: 0,
    url: "/javascript-basics/numbers",
    previous: '/javascript-basics/strings',
    next: '/javascript-basics/booleans',
    achievement: "achievement4",
  },
  {
    name: "Booleans",
    progress: 0,
    url: "/javascript-basics/booleans",
    previous: '/javascript-basics/numbers',
    next: '/javascript-basics/null-and-undefined',
    achievement: "achievement5",
  },
  {
    name: "Null and Undefined",
    progress: 0,
    url: "/javascript-basics/null-and-undefined",
    previous: '/javascript-basics/booleans',
    next: '/javascript-basics/arrays',
    achievement: "achievement6",
  },
  {
    name: "Arrays",
    progress: 0,
    url: "/javascript-basics/arrays",
    previous: '/javascript-basics/null-and-undefined',
    next: '/javascript-basics/objects',
    achievement: "achievement7",
  },
  {
    name: "Objects",
    progress: 0,
    url: "/javascript-basics/objects",
    previous: '/javascript-basics/arrays',
    next: '/javascript-basics/functions',
    achievement: "achievement8",
  },
  {
    name: "Lab",
    progress: 0,
    url: "/javascript-basics/lab",
    previous: '/javascript-basics/objects',
    next: '',
    achievement: "achievement9",
  }
];

export default lessons;