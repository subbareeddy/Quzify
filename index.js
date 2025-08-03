const readlinesync = require("readline-sync");
let userName = readlinesync.question("Enter your name: ");
console.log(`Hello ${userName} welcome to Quxify App`);
let score = 0;
const database = {
  data: [
    {
      question: `let a=10, b=15
      console.log(a+b)
      console.log(b)`,
      options: {
        a: "35 15",
        b: "15 35",
        c: "25 15",
        d: "10 15",
      },
      correctanswer: "c",
    },
    {
      question: "what is the full form of js",
      options: {
        a: "javascript",
        b: "javascipt",
        c: "java script",
        d: "none of the above",
      },
      correctanswer: "a",
    },
    {
      question: "what is the output of console.log(1 || 2 || 3)",
      options: {
        a: "1",
        b: "2",
        c: "3",
        d: "undefined",
      },
      correctanswer: "a",
    },
    {
      question: `let a={}, b={}
    console.log(a==b)
    console.log(a===b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctanswer: "a",
    },
    {
      question: "object.assign(target, source) creates which type of copy",
      options: {
        a: "Deep copy",
        b: "shallow copy",
        c: "Nested copy",
        d: "creates new references",
      },
      correctanswer: "b",
    },
    {
      question: "method chaining is possible with foreach",
      options: {
        a: "Yes",
        b: "No",
      },
      correctanswer: "b",
    },
    {
      question: "what is the output of console.log(1 && 2 && 3)",
      options: {
        a: "1",
        b: "2",
        c: "3",
        d: "undefined",
      },
      correctanswer: "c",
    },
    {
      question: "what is output of console.log(1>2>3)",
      options: {
        a: "true",
        b: "false",
        c: "undefined",
        d: "error",
      },
      correctanswer: "b",
    },
    {
      question: "what is the full form of HTML",
      options: {
        a: "hyper text markup language",
        b: "hyper text markup lang",
        c: "hyper text markup",
        d: "hyper text mark lang",
      },
      correctanswer: "a",
    },
    {
      question: "what is the full form of css",
      options: {
        a: "cascading style sheet",
        b: "cascading style sheets",
        c: "cascading style",
        d: "cascading sheets",
      },
      correctanswer: "a",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "subba reddy",
      score: 6,
    },
    {
      name: "shiva ram",
      score: 7,
    },
    {
      name: "saketh",
      score: 8,
    },
  ],
};

function HighScore(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  /**console.log(leaderBoard) */
  let sortedscorelist = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log("check your postion in leaderboard\n");
  console.log(sortedscorelist);
}

function playGame(userAnswer, correctanswer) {
  if (userAnswer === correctanswer) {
    console.log("correct answer");
    score++;
  } else {
    console.log("Incorrect Answer");
    console.log(`correct Answer is ${correctanswer}`);
  }
}

function showQuestionOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    const userAnswer = readlinesync
      .question("Enter your answer (a/b/c/d) -")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctanswer);
  }
}

showQuestionOptions(database);
console.log(`Your Score is - ${score}`);
HighScore(leaderBoard);
