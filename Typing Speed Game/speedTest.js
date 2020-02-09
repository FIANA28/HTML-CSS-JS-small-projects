const TextWrapper = document.querySelector(".text-wrapper");
const textArea  = document.querySelector("#textArea");
const originText = document.querySelector(".text").innerHTML;
const resetButton = document.querySelector("#reset");
const yesButton = document.querySelector(".btn-success");
const noButton = document.querySelector(".btn-danger");
const TheTimer = document.querySelector(".timer");
let timer = [0,0,0,0];
let interval;
let timerRunning = false;

// Add leading zero to nrs 9
function leadingZero(time) {
    if(time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Create a Clock
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
TheTimer.innerHTML = currentTime;
timer[3]++;
 
timer[0] = Math.floor((timer[3]/100)/60);
timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));

}

//Reset Everything
function reset() {
   clearInterval(interval);
   interval = null;
 timer = [0,0,0,0];
 timerRunning = false;

 textArea.value = "";
 TheTimer.innerHTML = "00:00:00";

 TextWrapper.style.borderColor = "green";
}

//Match the text with provided text on the page
function spellCheck() {
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    
    if (textEntered == originText) {
        TextWrapper.style.borderColor = "orange";
        clearInterval(interval);
    } else {
        if(textEntered == originTextMatch) {
          TextWrapper.style.borderColor = "green";
        } else {
            TextWrapper.style.borderColor = "red";
        }
    }
}

// Start the timer
function start() {
    let textEnteredLength = textArea.value.length;
    if(textEnteredLength === 0) {
        timerRunning = true;
interval = setInterval(runTimer, 10);
    }
}

// Show alert with Buttons Yes and No
function yes() {
    if (yesButton.onClick = true) {
        alert("Thank you!");
    }
}

function no() {
      if (noButton.onClick = true) {
        alert("Sorry to hear that!");
      }
}


//Event listeners for keyboard input and reset button event
yesButton.addEventListener("click", yes, false);
noButton.addEventListener("click", no, false);
textArea.addEventListener("keypress", start, false);
textArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);






