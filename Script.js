document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer(questionNumber, selectedAnswer) {
        const question = document.getElementById(`question-${questionNumber}`);
        const correctAnswer = question.getAttribute('data-correct-answer');
        const feedbackElement = question.querySelector('.feedback');

        if (selectedAnswer === correctAnswer) {
            feedbackElement.textContent = 'Correct';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Incorrect';
            feedbackElement.style.color = 'red';
        }
    }

    function attachButtonClickHandlers(questionNumber) {
        const question = document.getElementById(`question-${questionNumber}`);
        const buttons = question.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const selectedAnswer = button.getAttribute('data-answer');
                checkAnswer(questionNumber, selectedAnswer);
            });
        });
    }

    for (let i = 1; i <= 20; i++) {
        attachButtonClickHandlers(i);
    }
});
