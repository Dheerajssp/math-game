const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next');

let correctAnswer;
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    questionElement.innerText = `जोड़ें: ${num1} + ${num2} = ?`;
    correctAnswer = num1 + num2;
}

submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
        resultElement.innerText = "सही उत्तर! 👍";
        score++;
    } else {
        resultElement.innerText = `गलत उत्तर! सही उत्तर था ${correctAnswer}.`;
    }
    answerInput.value = '';
    nextButton.style.display = 'inline';
});

nextButton.addEventListener('click', () => {
    generateQuestion();
    resultElement.innerText = '';
    nextButton.style.display = 'none';
});

// खेल शुरू करें
generateQuestion();
