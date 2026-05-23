// Quiz Questions (Objects inside Array)
const quizData = [
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
  },
  {
    question: "Which keyword is used to declare variables in JavaScript?",
    options: ["int", "String", "let", "float"],
    answer: "let"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which tag is used for headings in HTML?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: "<h1>"
  }
];

// State Management Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// Load Question
function loadQuestion() {

  clearInterval(timer);

  timeLeft = 15;
  timerEl.textContent = timeLeft;

  startTimer();

  const currentQuiz = quizData[currentQuestion];

  questionEl.textContent = currentQuiz.question;

  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {

    const div = document.createElement("div");

    div.classList.add("option");

    div.textContent = option;

    div.addEventListener("click", () => 
      selectAnswer(div, option)
    );

    optionsEl.appendChild(div);
  });

  nextBtn.style.display = "none";
}

// Timer
function startTimer() {

  timer = setInterval(() => {

    timeLeft--;

    timerEl.textContent = timeLeft;

    if(timeLeft === 0){

      clearInterval(timer);

      disableOptions();

      nextBtn.style.display = "block";
    }

  }, 1000);
}

// Select Answer
function selectAnswer(selectedEl, selectedAnswer) {

  clearInterval(timer);

  const correctAnswer = quizData[currentQuestion].answer;

  const options = document.querySelectorAll(".option");

  options.forEach(option => {

    option.style.pointerEvents = "none";

    if(option.textContent === correctAnswer){
      option.classList.add("correct");
    }
  });

  if(selectedAnswer === correctAnswer){

    score++;

    scoreEl.textContent = score;

  } else {

    selectedEl.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

// Disable Options
function disableOptions(){

  const options = document.querySelectorAll(".option");

  options.forEach(option => {

    option.style.pointerEvents = "none";

    if(option.textContent === quizData[currentQuestion].answer){

      option.classList.add("correct");
    }
  });
}

// Next Button
nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if(currentQuestion < quizData.length){

    loadQuestion();

  } else {

    showResult();
  }
});

// Show Final Result
function showResult(){

  document.getElementById("quiz").style.display = "none";

  resultEl.innerHTML = `
    Quiz Completed! <br><br>
    Your Score: ${score} / ${quizData.length}
  `;
}

// Start Quiz
loadQuestion();