// Number Guessing Game

// Number Guessing elements
let num = document.getElementById("number-given");
let hint = document.getElementById("hint");
let numIn = document.getElementById("guessing");
let guessBtn = document.getElementById("guess-btn");

// Number Guessing Global Variables
let numGiven = Math.floor(Math.random() * 100) ;

// Number Guessing Event Listeners
guessBtn.addEventListener("click", numberGuessingGame);

// Number Guessing Functions
function numberGuessingGame() {
    // Input
    let guessing = numIn.value;

    // Provides hint according to user input || Output
    if (guessing < numGiven) {
        hint.innerHTML = "Smaller then the given number";
    } else if (guessing > numGiven) {
        hint.innerHTML = "Bigger than the given number";
    } else {
        hint.innerHTML = "Exactly!";
        num.innerHTML = numGiven;  
        const myTimeout = setTimeout(confirmWindow, 50);
        return
    }
}

// Cleared Function
function confirmWindow() {
    confirm("Stage cleared! Do you want to go back to the Map?");
    if (true) {
        window.location = "map3.html";
    }
}