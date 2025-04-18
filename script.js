//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

submitButton.style.display = "none";

function renderQuestions() {
  questionsElement.innerHTML = "";
  scoreElement.innerText = "";

  const question = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  const questionText = document.createTextNode(question.question);
  questionElement.appendChild(questionText);
  questionElement.appendChild(document.createElement("br"));

  for (let j = 0; j < question.choices.length; j++) {
    const choice = question.choices[j];
    const choiceElement = document.createElement("input");
    choiceElement.setAttribute("type", "radio");
    choiceElement.setAttribute("name", `question-${currentQuestionIndex}`);
    choiceElement.setAttribute("value", choice);
    
    choiceElement.addEventListener("change", handleAnswer); // Add event here

    const choiceText = document.createTextNode(choice);

    questionElement.appendChild(choiceElement);
    questionElement.appendChild(choiceText);
    questionElement.appendChild(document.createElement("br"));
  }

  questionsElement.appendChild(questionElement);
}

function handleAnswer(event) {
  const selectedChoice = event.target.value;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedChoice === correctAnswer) {
    scoreElement.innerHTML = `<span style="color: green;"> Correct Answer!</span>`;
    score++;
  } else {
    scoreElement.innerHTML = `<span style="color: red;">Wrong Answer! Correct answer is: <strong>${correctAnswer}</strong></span>`;
  }

  const options = document.getElementsByName(`question-${currentQuestionIndex}`);
  options.forEach(option => option.disabled = true);

  submitButton.style.display = "block";
}

submitButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestions();
    submitButton.style.display = "none";
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionsElement.innerHTML = "";
  scoreElement.innerHTML = `QUIZ Completed!<br>Your Final Score is: <strong>${score} / ${questions.length}</strong>`;
  submitButton.style.display = "none";
}

renderQuestions();

