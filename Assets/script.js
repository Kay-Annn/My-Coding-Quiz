var startGameBtn = document.querySelector(".button");
var popUpQuestiions = document.getElementsByClassName("myQuestions");
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
startGameBtn.addEventListener("click", startQuiz);
var timerInterval;
let questionIndex = 0;
var currentScore = 0;

hideSlides();
hideQuizOver();


function hideSlides() {
    let i;
    let questions = popUpQuestiions
    for (i = 0; i < questions.length; i++) {
        questions[i].style.display = "none";
    }
    questionIndex++;
}

function startQuiz() {
    //1.hide instructions
    hideInstructions();
    //2.hide start quiz button
    hideStartQuizBtn();
    //3.timer begins
    setTime();
    //4.displayed first question
    showSlide(0)

}

function hideInstructions() {
    var hideInstructions = document.querySelector(".instructionsContainer");
    hideInstructions.style.display = "none"
}

function hideStartQuizBtn() {
    startGameBtn.style.display = "none"
}

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            ShowQuizOver()
        }

    }, 1000);

}

function showSlide(index) {
    let i;
    for (i = 0; i <= popUpQuestiions.length; i++) {
        popUpQuestiions[index].style.display = "block"
    }
}

function validateQuestion1Answer(answer) {
    var correct = "C"
    
    if (answer === correct) {
        currentScore += 10
        alertWrongRight("Correct!")
    }
    else {
        decreaseTime()
        alertWrongRight("Wrong!")
    }
    hideSlides()
    showSlide(1)
}

function validateQuestion2Answer(answer) {
    var correct = "B"

    if (answer === correct) {
        currentScore += 10
        alertWrongRight("Correct!")
    }
    else {
        decreaseTime()
        alertWrongRight("Wrong!")
    }
    hideSlides()
    showSlide(2)
}

function validateQuestion3Answer(answer) {
    var correct = "C"

    if (answer === correct) {
        currentScore += 10
        alertWrongRight("Correct!")
    }
    else {
        decreaseTime()
        alertWrongRight("Wrong!")
    }
      ShowQuizOver()
  }


function decreaseTime() {
    if (secondsLeft === 0) {
        return
    }
    else {
        secondsLeft = secondsLeft - 5;
    }
}

function alertWrongRight(correctOrWrong) {
    var answerNotification = document.querySelector(".wrongRightAlert")
    answerNotification.textContent = correctOrWrong
}


function hideQuizOver() {
    var hideQuizOver = document.querySelector(".quizOverSection");
    hideQuizOver.style.display = "none";
}

function ShowQuizOver() {
    clearInterval(timerInterval);
    finalScore()
    var hideQuestionSection = document.querySelector(".questionSlidesContainer");
    hideQuestionSection.style.display = "none";
    var hideQuizOver = document.querySelector(".quizOverSection");
    hideQuizOver.style.display = "block";
  
}

function finalScore(){
var finalScore = document.querySelector(".finalScore")
finalScore.textContent = "Your final score is " + currentScore + "!";    
}

    //Quiz Begins
    //1.hide instructions
    //2.hide start quiz button
    //3.timer begins
    //4.displayed first question
    //5.Make options selectable
    //6.Answer is Validated - timer decreased if incorrect answer
    //7.Question 2 is displayed
    //8.Answer is Validated - timer decreased if incorrect answer
    //9.Question 3 is displayed
    //10.Answer is Validated - timer decreased if incorrect answer


    //Quiz is over
    //1.Timer stops
    //2.Alert pops up and indicates quiz is over
    //3.User is prompted to input name
    //4.User's name and score is logged to local storage and then displayed.
    //5.User is presented with the option to retake quiz or quit










