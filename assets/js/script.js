//Linking buttons and content
document.getElementById("end-quiz").style.display = "none"

var startButton = document.querySelector('#start');
var infoContainer = document.querySelector('.info-box');
var quizContainer = document.querySelector('.quiz-box');
var resultsContainer = document.querySelector('#results')


//Question bank
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
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answer1: "Storing numbers, dates, or other values",
        answer2: "Varying randomly",
        answer3: "Causing high-school algebra flashbacks",
        answer4: "None of the above",
        correctAnswer: "answer1"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answer1: "let",
        answer2: "var",
        answer3: "const",
        answer4: "function",
        correctAnswer: "answer3"
    },
    {
        question: "In JavaScript the x == y statement implies that:",
        answer1: "Both x and y are equal in value, type and reference address",
        answer2: "Both are x and y are equal in value only",
        answer3: "Both are not equal",
        answer4: "Both are equal in the value and data type",
        correctAnswer: "answer4"
    },
    {
        question: "Which of the following is NOT considered a JavaScript operator?",
        answer1: "new",
        answer2: "this",
        answer3: "delete",
        answer4: "typeof",
        correctAnswer: "answer2"
    },
    {
        question: "What is mean by 'this' keyword in javascript?",
        answer1: "It references the current object",
        answer2: "It references the previous object",
        answer3: "It is a variable that holds a value",
        answer4: "None of the above",
        correctAnswer: "answer1"
    }
];

var indexNumber = 0;
var playerScore = 0;
var timer = 75;

//Loads questions+answers & displays them on screen
function loadQuestions(index) {

    const currentQuestion = questions[index];

    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("button1-label").textContent = currentQuestion.answer1;
    document.getElementById("button2-label").textContent = currentQuestion.answer2;
    document.getElementById("button3-label").textContent = currentQuestion.answer3;
    document.getElementById("button4-label").textContent = currentQuestion.answer4;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("time-left").innerHTML = timer;

    var options = document.getElementsByClassName("radio");

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('change', handleNextQuestion);
    }
}

//Verifies answer and gives user correct/wrong feedback
function checkAnswer() {
    const currentQuestion = questions[indexNumber];
    const currentAnswer = currentQuestion.correctAnswer;
    const choices = document.getElementsByName("choice");
    var correctChoice = "";
    

    choices.forEach((choice) => {

        if (choice.value === currentAnswer) {
            correctChoice = choice.labels[0].id
            }
        })

    choices.forEach((choice) => {
        if (choice.checked == true && choice.value == currentAnswer) {
            document.getElementById(correctChoice).style.backgroundColor = "green";
            indexNumber++;
            playerScore++;
        }
         else if (choice.checked == true && choice.value != currentAnswer) {
             const wrongLabelId = choice.labels[0].id;
             document.getElementById(wrongLabelId).style.backgroundColor = "red";
             document.getElementById(correctChoice).style.backgroundColor = "green";
            indexNumber++;
            timer -= 5;
        }
    })
          
}


//Displays next question or ends game
function handleNextQuestion() {
    checkAnswer();
    unCheckRadioButtons();

    setTimeout(() => {
        if (indexNumber <= 9 && timer > 0) {
            loadQuestions(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetChoices()
    }, 1000);
}

function unCheckRadioButtons() {
    const choices = document.getElementsByName("choice");
    for (var i = 0; i < choices.length; i++) {
        choices[i].checked = false;
    }
}

function resetChoices() {
    const choices = document.getElementsByName("choice");
    choices.forEach((choice) => {
        document.getElementById(choice.labels[0].id).style.backgroundColor = ""
    })
}

function handleEndGame() {
    document.getElementById("end-quiz").style.display = "flex"
    document.getElementById("quiz").style.display = "none"
    document.getElementById("right-answers").innerHTML = playerScore;

    document.getElementById("retry").onclick = function () {
        document.getElementById("quiz").style.display = "flex"
        document.getElementById("end-quiz").style.display = "none"
        playerScore = 0;
        indexNumber = 0;
        timer = 75;
        loadQuestions(0);
    }
}

//Start Quiz clicked
startButton.onclick = () => {
    infoContainer.remove('info-box');
    quizContainer.classList.add('activeQuiz');

    loadQuestions(0);

    setInterval(function () {
        timer.innerHTML = timer--;
    }, 1000);
}

document.getElementById("view-scores").onclick = function () {
    location.href = "./scores.html";
};

document.getElementById("go-back").onclick = function () {
    location.href = "./index.html";
};
