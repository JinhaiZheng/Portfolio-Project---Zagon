// Start Page

// HTML elements
let startBtn = document.getElementById("start-btn");
let bldOneBtn = document.getElementById("bldOne-btn");
let bldTwoBtn = document.getElementById("bldTwo-btn");
let bldThreeBtn = document.getElementById("bldThree-btn");

// RPS elements
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let sissorBtn = document.getElementById("sissors");
let resultYou = document.getElementById("result-you");
let resultOpponent = document.getElementById("result-opponent");
let gameResult = document.getElementById("result");
let gameScore = document.getElementById("score");
let roundNum = document.getElementById("round-num");

// Global Variables
let rpsYou;
let rpsOpponent;
let score = 0;
let round = 1;

// RPS Event Listeners
rockBtn.addEventListener("click", rpsGameOne);
paperBtn.addEventListener("click", rpsGameTwo);
sissorBtn.addEventListener("click", rpsGameThree);

// RPS Functions

// When Rock Button is clicked
function rpsGameOne() {
    resultYou.src = "images/RCard.png";
    rpsYou = "rock";

    // Random choose from the computer
    let randNum = Math.random();
    if (randNum < 0.33) {
        rpsOpponent = "rock";
        resultOpponent.src = "images/RCard.png";
    } else if (randNum < 0.66) {
        rpsOpponent = "paper";
        resultOpponent.src = "images/PCard.png";
    } else {
        rpsOpponent = "sissor";
        resultOpponent.src = "images/SCard.png";
    }

    // Test results
    if (rpsOpponent === "rock") {
        result.innerHTML = "Tied";
    } else if (rpsOpponent === "paper") {
        result.innerHTML = "You Lose";
    } else {
        result.innerHTML = "You Win!";
        score++;
    }  

    // Update score/round
    round++;
    roundNum.innerHTML = round;
    gameScore.innerHTML = score;

    // Test clear or not
    if (round <= 6 && score === 3) {
        gameScore.innerHTML = score;
        roundNum.innerHTML = round;
        const myTimeout = setTimeout(confirmWindow, 50);
    } else if (round === 6 && score < 3) {
        const myTimeout = setTimeout(youLose, 50);
    }
}

// When Paper Button is clicked
function rpsGameTwo() {
    resultYou.src = "images/PCard.png";
    rpsYou = "paper";

    // Random choose from the computer
    let randNum = Math.random();
    if (randNum < 0.33) {
        rpsOpponent = "rock";
        resultOpponent.src = "images/RCard.png";
    } else if (randNum < 0.66) {
        rpsOpponent = "paper";
        resultOpponent.src = "images/PCard.png";
    } else {
        rpsOpponent = "sissor";
        resultOpponent.src = "images/SCard.png";
    }

    // Test results
    if (rpsOpponent === "rock") {
        result.innerHTML = "You Win!";
        score++;
    } else if (rpsOpponent === "paper") {
        result.innerHTML = "Tied";
    } else {
        result.innerHTML = "You Lose";
    }  

    // Update score/round
    round++;
    gameScore.innerHTML = score;
    roundNum.innerHTML = round;

    // Test clear or not
    if (round <= 6 && score === 3) {
        gameScore.innerHTML = score;
        roundNum.innerHTML = round;
        const myTimeout = setTimeout(confirmWindow, 50);
    } else if (round === 6 && score < 3) {
        const myTimeout = setTimeout(youLose, 50);
    }
}

// When Sissors Button is clicked
function rpsGameThree() {
    resultYou.src = "images/SCard.png";
    rpsYou = "sissor";

    // Random choose from the computer
    let randNum = Math.random();
    if (randNum < 0.33) {
        rpsOpponent = "rock";
        resultOpponent.src = "images/RCard.png";
    } else if (randNum < 0.66) {
        rpsOpponent = "paper";
        resultOpponent.src = "images/PCard.png";
    } else {
        rpsOpponent = "sissor";
        resultOpponent.src = "images/SCard.png";
    }

    // Test results
    if (rpsOpponent === "rock") {
        result.innerHTML = "You Lose";
    } else if (rpsOpponent === "paper") {
        result.innerHTML = "You Win!";
        score++;
    } else {
        result.innerHTML = "Tied";
    }  

    // Update score/round
    round++;
    gameScore.innerHTML = score;
    roundNum.innerHTML = round;

    // Test clear or not
    if (round <= 6 && score === 3) {
        gameScore.innerHTML = score;
        roundNum.innerHTML = round;
        const myTimeout = setTimeout(confirmWindow, 50);
    } else if (round === 6 && score < 3) {
        const myTimeout = setTimeout(youLose, 50);
    }

}

// Lose Function
function youLose() {
    alert("You did not get at least 3/5, please try again!");
    location.reload();
}

// Cleared Function
function confirmWindow() {
    confirm("Stage cleared! Do you want to go back to the Map?");
    if (true) {
        window.location = "map2.html";
    }
}
