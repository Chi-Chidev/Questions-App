
// put the questions into an array
const quizQuestions = [
    {
        number: "Question 1",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        number: "Question 2",
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        number: "Question 3",
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        number: "Question 4",
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        number: "Question 5",
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2"],
        answer: "H2O"
    }
];

let currentIndex = 1; // Start with index 1 (second question)
const totalQuestions = quizQuestions.length;

const questionEl = document.querySelector(".questions-box h3");
const questionTextEl = document.querySelector(".questions-box p");
const optionsEl = document.querySelector(".answer-box");
const backBtn = document.getElementById("icon"); // Assuming it's for going back
const submitBtn = document.getElementById("bttzn");
const messageBoxOne = document.getElementById("messageBg1");
const messageBoxTwo = document.getElementById("messageBb2");
const nextBtn = document.getElementById("btc"); // Next button inside the correct message box
const retryBtn = document.getElementById("btcc");

const messageEl = document.querySelector("#messageBoxCorrect p");

const messageEll = document.querySelector("#messageBoxInvalid p");

function loadQuestion(index) {
    const currentQuestion = quizQuestions[index];

    // Update question number and text
    questionEl.textContent = currentQuestion.number;
    questionTextEl.textContent = currentQuestion.question;

    // Clear existing options
    optionsEl.innerHTML = "";

    // Display options as radio buttons
    currentQuestion.options.forEach(option => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerHTML = '<input type="radio" name="answer" value="' + option + '">' +
            '<label>' + option + '</label>';

        optionsEl.appendChild(div);
    });

    // Hide back button for the first question
    if (index > 0) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}

// Initial question load
loadQuestion(currentIndex);

// Submit button event listener
submitBtn.addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Check if an option is selected
    if (!selectedAnswer) {
        alert("No option has been selected. Please select an option!");
        return;
    }

    // Check if the selected answer is correct
    if (selectedAnswer.value === quizQuestions[currentIndex].answer) {
        messageBoxOne.style.display = "block"; // Show correct message box
    } else {
        messageBoxTwo.style.display = "block"; // Show incorrect message box
    }
});

nextBtn.addEventListener("click", () => {
    messageBoxOne.style.display = "none"; // Hide the correct message box

    // Load the next question
    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
    } else {
        alert("You've completed the quiz!");
    }
});

// Retry button event listener (inside the incorrect message box)
retryBtn.addEventListener("click", () => {
    messageBoxTwo.style.display = "none"; // Hide the incorrect message box
});

// Back button event listener
backBtn.addEventListener("click", () => {
    if (currentIndex > 0) { 
        currentIndex--;
        loadQuestion(currentIndex);
    }
});
