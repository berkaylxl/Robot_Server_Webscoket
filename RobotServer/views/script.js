const upbutton = document.getElementById("up-button");
const downbutton = document.getElementById("down-button");
const leftbutton = document.getElementById("left-button");
const rightbutton = document.getElementById("right-button");
const camerabutton = document.getElementById("camera-button");
const headlampbutton = document.getElementById("headlamp-button");
let isWPressed = false;
let isAPressed = false;
let isSPressed = false;
let isDPressed = false;
let isCPressed = false;
let isHeadLampActivated = false;
let isLPressed = false;
var iframe = document.getElementById("myframe");
iframe.onload = function() {
  var divElement = iframe.contentDocument.getElementById("logo").innerHTML;
    if (divElement) {
      var divContent = divElement.innerHTML;
      console.log(divContent);
    } else {
        console.log("video element not found");
    }
};

upbutton.addEventListener("mousedown", event=>{
  isWPressed = true;
  sendForwardRequest();
  upbutton.classList.add("red");
});
upbutton.addEventListener("mouseup", event=>{
  upbutton.classList.remove("red");
  sendForwardStopRequest();
  isWPressed = false;
});
downbutton.addEventListener("mousedown", event=>{
  isSPressed = true;
  sendBackwardRequest();
  downbutton.classList.add("red");
});
downbutton.addEventListener("mouseup", event=>{
  isSPressed = false;
  sendBackwardStopRequest();
  downbutton.classList.remove("red");
});
leftbutton.addEventListener("mousedown", event=>{
  isAPressed = true;
  sendTurnLeftRequest();
  leftbutton.classList.add("red");
});
leftbutton.addEventListener("mouseup", event=>{
  isAPressed = false;
  sendTurnLeftStopRequest();
  leftbutton.classList.remove("red");
});
rightbutton.addEventListener("mousedown", event=>{
  isDPressed = true;
  sendTurnRightRequest();
  rightbutton.classList.add("red");
});
rightbutton.addEventListener("mouseup", event=>{
  isDPressed = false;
  sendTurnRightStopRequest();
  rightbutton.classList.remove("red");
});

headlampbutton.addEventListener("click", event=>{
  sendHeadlampRequest();
  if(isHeadLampActivated)
  {
    headlampbutton.classList.remove("green");
    isHeadLampActivated = false;
  }
  else
  {
    headlampbutton.classList.add("green");
    isHeadLampActivated = true;
  }
});

camerabutton.addEventListener("click", event=>{
  sendCameraRequest();
  camerabutton.classList.add("red");
});


document.addEventListener("keydown", function (event) {
    if (event.key == "w" && !isWPressed) {
        
        isWPressed = true;
        sendForwardRequest();
        upbutton.classList.add("red");
        
    }
    if (event.key == "s" && !isSPressed) {
        isSPressed = true;
        sendBackwardRequest();
        downbutton.classList.add("red");
    }
    if (event.key == "a" && !isAPressed) {
        isAPressed = true;
        sendTurnLeftRequest();
        leftbutton.classList.add("red");
    }
    if (event.key == "d" && !isDPressed) {
        isDPressed = true;
        sendTurnRightRequest();
        rightbutton.classList.add("red");
    }
    if (event.key == "c" && !isCPressed) {
      isCPressed = true;
      sendCameraRequest();
      camerabutton.classList.add("red");
    }
    if (event.key == "l" && !isLPressed) {
      sendHeadlampRequest();
      isLPressed = true;
      if(isHeadLampActivated)
      {
        headlampbutton.classList.remove("green");
        isHeadLampActivated = false;
      }
      else
      {
        headlampbutton.classList.add("green");
        isHeadLampActivated = true;
      }
      
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key == "w") {
        upbutton.classList.remove("red");
        sendForwardStopRequest();
        isWPressed = false;
    }
    if (event.key == "s") {
        isSPressed = false;
        sendBackwardStopRequest();
        downbutton.classList.remove("red");
    }
    if (event.key == "a") {
        isAPressed = false;
        sendTurnLeftStopRequest();
        leftbutton.classList.remove("red");
    }
    if (event.key == "d") {
        isDPressed = false;
        sendTurnRightStopRequest();
        rightbutton.classList.remove("red");
    }
    if (event.key == "c") {
      isCPressed = false;
      camerabutton.classList.remove("red");
    }
    if (event.key == "l") {
      isLPressed = false;
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
function sendHeadlampRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/robot/headlamp');
  request.send();
  console.log("Headlamp isteği gönderiliyor...")
}
function sendCameraRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/robot/camera');
  request.send();
  console.log("Camera isteği gönderiliyor...")
}

