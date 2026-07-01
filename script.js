const questions = [
    {
        question: "What is HTML?",
        answers: [
            { text: "Programming Language", correct: false },
            { text: "Markup Language", correct: true },
            { text: "Database", correct: false },
            { text: "Operating System", correct: false }
        ]
    },
    {
        question: "What is CSS used for?",
        answers: [
            { text: "Structure", correct: false },
            { text: "Styling", correct: true },
            { text: "Logic", correct: false },
            { text: "Database", correct: false }
        ]
    },
    {
        question: "Which language runs in browser?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizBox = document.getElementById("quiz");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizBox.style.display = "block";
    resultBox.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    let current = questions[currentQuestionIndex];
    questionEl.innerText = current.question;

    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(button, answer.correct);
        answersEl.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";
}

function selectAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(answersEl.children).forEach(btn => {
        btn.disabled = true;
    });

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizBox.style.display = "none";
    resultBox.classList.remove("hidden");
    scoreEl.innerText = score + " / " + questions.length;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();