var startGameBtn = document.querySelector(".button");
var popUpQuestiions = document.getElementsByClassName("myQuestions");
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var submitBtn = document.querySelector(".submitInitialsBtn")
startGameBtn.addEventListener("click", startQuiz);
var timerInterval;
let questionIndex = 0;
var currentScore = 0;
var initials = document.querySelector(".initialsBox");
submitBtn.addEventListener("click",saveInitialScoreLocalStorage);
var goBackBtn = document.querySelector(".retakeQuiz")
goBackBtn.addEventListener("click", GoBack)
var clearScores = document.querySelector(".clearHighScores")
clearScores.addEventListener("click", ClearLocalStorage)

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

function saveInitialScoreLocalStorage(){
// store to local storage
localStorage.setItem(initials.value,currentScore);
hideQuizOver()
showHighScoresSection();

}

function showHighScoresSection(){
    var showHighScoresDisplay = document.querySelector(".highScoresSection")
    showHighScoresDisplay.style.display = "block"
    let userDatainfo = getLocalStorageData()
    populateUserData(userDatainfo)

}

function getLocalStorageData(){
    var userData= localStorage.getItem(initials.value);
    return userData;
  }

function populateUserData(userData){
    var inputInitialScore = document.querySelector(".highScoresBox")
    inputInitialScore.value = initials.value + " " +"-"+ " " + userData
}   

function GoBack(){
    location.reload();
}

function ClearLocalStorage(){
    localStorage.removeItem(initials.value);
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
    //4.User clicks submit
    //5.Get reference to submit button
    //6.User's name and score is logged to local storage
    //7.User is taken to high score page
    //8.High scores are displayed 
    //8.User is presented with the option to retake quiz or clear high scores



    //I am at the high score page
    //High scores and user initials are to be displayed on the page 


    //1. How to get user score
        //var userdate = localStorage.getItem("initial");
        //
    //
    //2. How to get initials
    

    //Input user data and local storage info in high score input field











