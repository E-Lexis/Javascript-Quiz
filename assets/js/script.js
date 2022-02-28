
function startQuiz() {

    var output = [];
    var choices;

    for (var i = 0; i < questions.length; i++) {
        choices = [];

        for (letter in questions[i].choices) {
            choices.push(
                '<label>' + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + questions[i].choices[letter]
                + '</label>'
            );      
        }
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + choices.join('') + '</div>'
        );
    }

    quizContainer.innerHTML = output.join('');

}

var startButton = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

var questions = [
    {
        question: "1",
        choices: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    },
    {
        question: "2",
        choices: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    },
    {
        question: "3",
        choices: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    },
    {
        question: "4",
        choices: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    },
    {
        question: "5",
        choices: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: "c"
    }
];

startButton.onclick = () => {
    startQuiz();
}