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

const questionsElement = document.getElementById("questions");
    const submitButton = document.getElementById("submit");
    const scoreElement = document.getElementById("score");

    submitButton.style.display = "none";

    function renderQuestions() {
      questionsElement.innerHTML = "";
      scoreElement.innerText = "";
      
      const savedAnswers = JSON.parse(localStorage.getItem("answers") || "{}");

      questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        const questionText = document.createElement("p");
        questionText.innerText = question.question;
        questionElement.appendChild(questionText);

        question.choices.forEach(choice => {
          const choiceElement = document.createElement("input");
          choiceElement.type = "radio";
          choiceElement.name = `question-${index}`;
          choiceElement.value = choice;
          
          if (savedAnswers[index] === choice) {
            choiceElement.checked = true;
          }

          const choiceLabel = document.createElement("label");
          choiceLabel.appendChild(choiceElement);
          choiceLabel.appendChild(document.createTextNode(choice));
          
          questionElement.appendChild(choiceLabel);
          questionElement.appendChild(document.createElement("br"));
        });

        questionsElement.appendChild(questionElement);
      });

      submitButton.style.display = "block";
    }

    submitButton.addEventListener("click", () => {
      let answers = {};
      let score = 0;

      questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selected) {
          answers[index] = selected.value;
          if (selected.value === question.answer) {
            score++;
          }
        }
      });

      localStorage.setItem("score", score.toString());
      localStorage.setItem("answers", JSON.stringify(answers));
      
      scoreElement.innerText = `Your score is ${score} out of ${questions.length}.`;
    });

    renderQuestions();

