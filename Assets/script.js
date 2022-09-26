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
var answerNotification = document.querySelector(".wrongRightAlert")
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


//Quiz Begins
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
  //Hide instructions
function hideInstructions() {
    var hideInstructions = document.querySelector(".instructionsContainer");
    hideInstructions.style.display = "none"
}
//hide start quiz button
function hideStartQuizBtn() {
    startGameBtn.style.display = "none"
}
//timer begins
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
 //displayed first question
function showSlide(index) {
    let i;
    for (i = 0; i <= popUpQuestiions.length; i++) {
        popUpQuestiions[index].style.display = "block"
    }
}

//Make options selectable and validate answer
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

  //Answer is Validated - timer decreased if incorrect answer
function decreaseTime() {
    if (secondsLeft === 0) {
        return
    }
    else {
        secondsLeft = secondsLeft - 5;
    }
}
//Alert wrong or right function if user is correct or incorrect
function alertWrongRight(correctOrWrong) {
    answerNotification.textContent = correctOrWrong
}

function hideQuizOver() {
    var hideQuizOver = document.querySelector(".quizOverSection");
    hideQuizOver.style.display = "none";
}

 //Quiz is over and timer stops
function ShowQuizOver() {
    clearInterval(timerInterval);
    finalScore()
    var hideQuestionSection = document.querySelector(".questionSlidesContainer");
    hideQuestionSection.style.display = "none";
    var hideQuizOver = document.querySelector(".quizOverSection");
    hideQuizOver.style.display = "block";
  
}

//Displays final score 
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

//User is presented with the option to go back to main section of quiz      
function GoBack(){
    location.reload();
}
// User is present with the option to clear their score
function ClearLocalStorage(){
    localStorage.removeItem(initials.value);
}









