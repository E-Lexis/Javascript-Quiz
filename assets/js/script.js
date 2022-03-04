//Linking buttons and content

var startButton = document.querySelector('#start');
var infoContainer = document.querySelector('.info-box');
var quizContainer = document.querySelector('.quiz-box');
var resultsContainer = document.querySelector('#results')

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
            answer1: "<js>",
            answer2: "<scripting>",
            answer3: "<script>",
            answer4: "<javascript>",
        correctAnswer: "answer3"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
            answer1: "<head>",
            answer2: "<body>",
            answer3: "<footer>",
            answer4: "<main>",
        correctAnswer: "answer2"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
            answer1: "msgBox('Hello World')",
            answer2: "msg('Hello World')",
            answer3: "alert('Hello World')",
            answer4: "alertBox('Hello World')",
        correctAnswer: "answer3"
    },
    {
        question: "How do you create a function in JavaScript?",
            answer1: "function myFunction()",
            answer2: "function:myFunction()",
            answer3: "function = myFunction",
            answer4: "function.myFunction()",
        correctAnswer: "answer1"
    },
    {
        question: "How to write an IF statement in JavaScript?",
            answer1: "if i == 5 then",
            answer2: "if i = 5 then",
            answer3: "if (i == 5)",
            answer4: "if i = 5",
        correctAnswer: "answer3"
    }
];

let indexNumber = 0

function loadQuestions(index) {

    const currentQuestion = questions[index];

    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("button1").value = currentQuestion.answer1;
    document.getElementById("button2").value = currentQuestion.answer2;
    document.getElementById("button3").value = currentQuestion.answer3;
    document.getElementById("button4").value = currentQuestion.answer4;
}

function checkAnswer() {
    const currentQuestion = questions[indexNumber];
    const currentAnswer = currentQuestion.correctAnswer;
    var correctChoice = null;
    var choices = document.getElementsByName("choice");

    choices.forEach((choice) => {
        if (choice.value === currentAnswer) {
            correctChoice = choice.labels[0].id
            }
        })


        choices.forEach((choice) => {
            if (choice.clicked == true && choice.value == currentAnswer) {
                document.getElementById(correctChoice).style.backgroundColor = "green";
                indexNumber++;
            }

            else if (choice.clicked == true && choice.value != currentAnswer) {
                const wrongLabelId = choice.labels[0].id;
                document.getElementById(wrongLabelId).style.backgroundColor = "red";
                document.getElementById(correctChoice).style.backgroundColor = "green";
            }
        })
          
}

function handleNextQuestion() {

    checkAnswer();
    
    if (indexNumber <= questions.length) {
        loadQuestions(indexNumber);
    } else {
        handleEndGame();
    }
}

//Start Quiz clicked
startButton.onclick = () => {
    infoContainer.remove('info-box');
    quizContainer.classList.add('activeQuiz');

    loadQuestions(0);
}