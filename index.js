let score = 0;
let qIndex = 0;

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
    {
      question: `let a={}, b={}
console.log(a==b)
console.log(a===b)`,
      options: { a:"false false", b:"false true", c:"true false", d:"true true"},
      correctanswer: "a",
    },
  ],
};

const leaderBoard = {
  data: [
    { name: "subba reddy", score: 6 },
    { name: "shiva ram", score: 7 },
    { name: "saketh", score: 8 },
  ],
};

function HighScore() {
  leaderBoard.data.push({ name: "User", score: score });
  let sorted = leaderBoard.data.sort((a, b) => b.score - a.score);

  document.getElementById("app").innerHTML +=
    `<h3>Your Position in Leaderboard:</h3>
     <pre>${JSON.stringify(sorted, null, 2)}</pre>`;
}

function playGame(userAnswer, correctanswer) {
  if (userAnswer === correctanswer) {
    alert("Correct answer");
    score++;
  } else {
    alert("Incorrect Answer!\nCorrect is: " + correctanswer);
  }
}

function loadQuestion() {
  let app = document.getElementById("app");
  let current = database.data[qIndex];

  app.innerHTML =
    `<h2>Q${qIndex + 1}. ${current.question}</h2>`;

  for (let key in current.options) {
    let btn = document.createElement("button");
    btn.textContent = `${key} - ${current.options[key]}`;
    btn.style.display = "block";
    btn.style.margin = "8px 0";
    
    btn.onclick = () => {
      playGame(key, current.correctanswer);
      qIndex++;

      if (qIndex < database.data.length) {
        loadQuestion();
      } else {
        app.innerHTML = `<h2>Your Score = ${score}</h2>`;
        HighScore();
      }
    };

    app.appendChild(btn);
  }
}

document.getElementById("startQuiz").addEventListener("click", function() {
  loadQuestion();
});
