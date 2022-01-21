// Where is the sun?

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloud1 = {
    x: 150,
    y: 90
};
let cloud2 = {
    x: 150,
    y: 90
};
let cloud3 = {
    x: 150,
    y: 90
};
let sun = {
    x: 200,
    y: 300,
    r: 15,
    green: 0
};
let sunRandom = Math.floor(Math.random() * 3) ;
let speed =2;

// HTML Elements
let sunBtn = document.getElementById("sun-btn");
let cloudImg = document.getElementById("cloud-img");
let cloud1Btn = document.getElementById("cloud1-btn");
let cloud2Btn = document.getElementById("cloud2-btn");
let cloud3Btn = document.getElementById("cloud3-btn");


// Draw the sky
ctx.fillStyle = "blue"
ctx.fillRect(0, 0, 400, 300);

// Draw the sun
ctx.fillStyle = "rgb(255," + sun.green + ", 0)";
ctx.beginPath();
ctx.arc(sun.x, sun.y, sun.r, 0, 2 * Math.PI, 1); 
ctx.fill();

// Draw the grassland
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

// Draw the cloud images
ctx.drawImage(cloudImg, cloud1.x, cloud1.y);
ctx.drawImage(cloudImg, cloud2.x, cloud2.y);
ctx.drawImage(cloudImg, cloud3.x, cloud3.y);

// Main Program Loop (60 FPS)
sunBtn.addEventListener("click", loop);

function loop() {
    // Update Variables

    if (sun.y >= 121) {
        sun.green += speed;
        sun.y -= speed;
        sun.r += 0.04;
    } else if (cloud3.x <= 275 && cloud1.x >= 25) {
        cloud3.x += speed;
        cloud1.x -= speed;
        if (sunRandom <= 1) {
            sun.x -= speed;
        } else if (sunRandom <= 2) {
            sun.x = 200;
        } else {
            sun.x += speed;
        }
        
    }
    
    // Draw the sky
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, 400, 300);
 
    // Draw the sun
    ctx.fillStyle = "rgb(255," + sun.green + ", 0)";
    ctx.beginPath();
    ctx.arc(sun.x, sun.y, sun.r, 0, 2 * Math.PI, 1); 
    ctx.fill();
 
    // Draw the grassland
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);
 
    // Draw the cloud images
    ctx.drawImage(cloudImg, cloud1.x, cloud1.y);
    ctx.drawImage(cloudImg, cloud2.x, cloud2.y);
    ctx.drawImage(cloudImg, cloud3.x, cloud3.y);

    requestAnimationFrame(loop);
}

// Guess the sun event listeners
cloud1Btn.addEventListener("click", guessCloud1);
cloud2Btn.addEventListener("click", guessCloud2);
cloud3Btn.addEventListener("click", guessCloud3);

// Guess the sun functions 
function guessCloud1() {
    if (cloud1.y >= -57 && cloud1.x <= 25) {
        cloud1.y -= 160;
    }

    if (cloud1.y <= -57 && cloud1.x <= 25 && sunRandom >= 2) {
        const myTimeout = setTimeout(wrongCloud, 50);
    } else if (cloud1.y <= -57 && cloud1.x <= 25 && sunRandom < 2) {
        const myTimeout = setTimeout(confirmWindow, 50);
    }
    
}

function guessCloud2() {
    if (cloud2.y >= -57 && cloud1.x <= 25) {
        cloud2.y -= 160;
    }

    if (cloud2.y <= -57 && cloud1.x <= 25 && sunRandom !== 2) {
        const myTimeout = setTimeout(wrongCloud, 50);
    } else if (cloud2.y <= -57 && cloud1.x <= 25 && sunRandom === 2) {
        const myTimeout = setTimeout(confirmWindow, 50);
    }

}

function guessCloud3() {
    if (cloud3.y >= -57 && cloud1.x <= 25) {
        cloud3.y -= 160;
    }

    if (cloud3.y <= -57 && cloud1.x <= 25 && sunRandom < 3) {
        const myTimeout = setTimeout(wrongCloud, 50);
    } else if (cloud3.y <= -57 && cloud1.x <= 25 && sunRandom === 3) {
        const myTimeout = setTimeout(confirmWindow, 50);
    }


}

function wrongCloud() {
    alert("Wrong Cloud, please try agian!");
    location.reload();
}

function confirmWindow() {
    confirm("Stage cleared! Do you want to go back to the Map?");
    if (true) {
        window.location = "map4.html";
    }
}