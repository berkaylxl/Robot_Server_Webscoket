const upbutton = document.getElementById("up-button");
const downbutton = document.getElementById("down-button");
const leftbutton = document.getElementById("left-button");
const rightbutton = document.getElementById("right-button");
let isWPressed = false;
let isAPressed = false;
let isSPressed = false;
let isDPressed = false;

document.addEventListener("keydown", function (event) {
    if (event.key == "w" && !isWPressed) {
        
        isWPressed = true;
        sendForwardRequest();
        upbutton.classList.add("red");
        
    }
    else if (event.key == "s" && !isSPressed) {
        isSPressed = true;
        sendBackwardRequest();
        downbutton.classList.add("red");
    }
    else if (event.key == "a" && !isAPressed) {
        isAPressed = true;
        sendTurnLeftRequest();
        leftbutton.classList.add("red");
    }
    else if (event.key == "d" && !isDPressed) {
        isDPressed = true;
        sendTurnRightRequest();
        rightbutton.classList.add("red");
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key == "w") {
        upbutton.classList.remove("red");
        sendForwardStopRequest();
        isWPressed = false;
    }
    else if (event.key == "s") {
        isSPressed = false;
        sendBackwardStopRequest();
        downbutton.classList.remove("red");
    }
    else if (event.key == "a") {
        isAPressed = false;
        sendTurnLeftStopRequest();
        leftbutton.classList.remove("red");
    }
    else if (event.key == "d") {
        isDPressed = false;
        sendTurnRightStopRequest();
        rightbutton.classList.remove("red");
    }

});

function sendForwardRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/forward');
    request.send();
    console.log("Forward isteği gönderiliyor...")
}
function sendForwardStopRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/forwardstop');
    request.send();
    console.log("Forward Stop isteği gönderiliyor...")
}
function sendBackwardRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/backward');
    request.send();
    console.log("Backward isteği gönderiliyor...")
}
function sendBackwardStopRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/backwardstop');
    request.send();
    console.log("Backward Stop isteği gönderiliyor...")
}

function sendTurnRightRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/turnright');
    request.send();
    console.log("Turn Right isteği gönderiliyor...")
}
function sendTurnRightStopRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/turnrightstop');
    request.send();
    console.log("Turn Right Stop isteği gönderiliyor...")
}
function sendTurnLeftRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/turnleft');
    request.send();
    console.log("Turn Left isteği gönderiliyor...")
}
function sendTurnLeftStopRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/robot/turnleftstop');
    request.send();
    console.log("Turn Left Stop isteği gönderiliyor...")
}