//Linking buttons and content

var startButton = document.querySelector('#start');
var infoContainer = document.querySelector('.info-box');
var quizContainer = document.querySelector('.quiz-box');
var resultsContainer = document.querySelector('#results')

//Quiz
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

//Start Quiz clicked
startButton.onclick = () => {
    infoContainer.remove('info-box');
    quizContainer.classList.add('activeQuiz');
}