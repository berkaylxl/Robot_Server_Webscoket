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

var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton = document.querySelector("#unity-fullscreen-button");
      var warningBanner = document.querySelector("#unity-warning");

      // Shows a temporary message banner/ribbon for a few seconds, or
      // a permanent error message on top of the canvas if type=='error'.
      // If type=='warning', a yellow highlight color is used.
      // Modify or remove this function to customize the visually presented
      // way that non-critical warnings and error messages are presented to the
      // user.
      function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
          warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
        }
        var div = document.createElement('div');
        div.innerHTML = msg;
        warningBanner.appendChild(div);
        if (type == 'error') div.style = 'background: red; padding: 10px;';
        else {
          if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
          setTimeout(function() {
            warningBanner.removeChild(div);
            updateBannerVisibility();
          }, 5000);
        }
        updateBannerVisibility();
      }

      var buildUrl = "Build";
      var loaderUrl = buildUrl + "/Robot Build.loader.js";
      var config = {
        dataUrl: buildUrl + "/Robot Build.data",
        frameworkUrl: buildUrl + "/Robot Build.framework.js",
        codeUrl: buildUrl + "/Robot Build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Remote Robot Control",
        productVersion: "0.1",
        showBanner: unityShowBanner,
      };

      // By default Unity keeps WebGL canvas render target size matched with
      // the DOM size of the canvas element (scaled by window.devicePixelRatio)
      // Set this to false if you want to decouple this synchronization from
      // happening inside the engine, and you would instead like to size up
      // the canvas DOM size and WebGL render target sizes yourself.
      // config.matchWebGLToCanvasSize = false;

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:

        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
        container.className = "unity-mobile";

        // To lower canvas resolution on mobile devices to gain some
        // performance, uncomment the following line:
        // config.devicePixelRatio = 1;

        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        unityShowBanner('WebGL builds are not supported on mobile devices.');
      } else {
        // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

        canvas.style.width = "480px";
        canvas.style.height = "300px";
      }

      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);