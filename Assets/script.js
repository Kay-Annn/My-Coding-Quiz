var startGameBtn = document.querySelector(".button");
var popUpQuestiions = document.getElementsByClassName("myQuestions");
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

startGameBtn.addEventListener("click", startQuiz);

let questionIndex = 0;
hideSlides();

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
    
function hideInstructions(){
    var hideInstructions = document.querySelector(".instructionsContainer");
    hideInstructions.style.display = "none" 
}

function hideStartQuizBtn (){
    startGameBtn.style.display = "none"
}
    
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "";

    if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        }

    }, 1000);

}

function showSlide(index){
    let i;
    for (i = 0; i < popUpQuestiions.length; i++) {
    popUpQuestiions[index].style.display = "block"
    }
}

function validateQuestion1Answer(answer){
    var correct = "C"
    if (answer === correct){
        alertWrongRight("Correct!")
        }
    else {
        decreaseTime()
        alertWrongRight("Wrong!")
        }
        hideSlides()
        showSlide(1)    
    }
    
function decreaseTime(){
    if (secondsLeft === 0){
        return
    } 
    else{
         secondsLeft = secondsLeft-5;
        }   
}

function alertWrongRight(correctOrWrong){
    var answerNotification = document.querySelector(".wrongRightAlert")
        answerNotification.textContent = correctOrWrong
}
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
    //11.User score is calculated
    //12.Alert pops up and indicates game is over
    //13.User is prompted to display name  
    //14.User's name and score is logged to local storage and then displayed. 
    //15.User is presented with the option to retake quiz or quit










