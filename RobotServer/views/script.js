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


upbutton.addEventListener("mousedown", event => {
  isWPressed = true;
  sendForwardRequest();
  upbutton.classList.add("red");
});
upbutton.addEventListener("mouseup", event => {
  upbutton.classList.remove("red");
  sendForwardStopRequest();
  isWPressed = false;
});
downbutton.addEventListener("mousedown", event => {
  isSPressed = true;
  sendBackwardRequest();
  downbutton.classList.add("red");
});
downbutton.addEventListener("mouseup", event => {
  isSPressed = false;
  sendBackwardStopRequest();
  downbutton.classList.remove("red");
});
leftbutton.addEventListener("mousedown", event => {
  isAPressed = true;
  sendTurnLeftRequest();
  leftbutton.classList.add("red");
});
leftbutton.addEventListener("mouseup", event => {
  isAPressed = false;
  sendTurnLeftStopRequest();
  leftbutton.classList.remove("red");
});
rightbutton.addEventListener("mousedown", event => {
  isDPressed = true;
  sendTurnRightRequest();
  rightbutton.classList.add("red");
});
rightbutton.addEventListener("mouseup", event => {
  isDPressed = false;
  sendTurnRightStopRequest();
  rightbutton.classList.remove("red");
});

headlampbutton.addEventListener("click", event => {
  sendHeadlampRequest();
  if (!isHeadLampActivated) {
    isHeadLampActivated=true;
    headlampbutton.classList.add("green");
  }
  else {
    headlampbutton.classList.remove("green");
    isHeadLampActivated = false;
  }
});

camerabutton.addEventListener("mousedown", event => {
  sendCameraRequest();
  camerabutton.classList.add("red");
});
camerabutton.addEventListener("mouseup", event => {
  camerabutton.classList.remove("red");
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
    if (isHeadLampActivated) {
      headlampbutton.classList.remove("green");
      isHeadLampActivated = false;
      sendHeadlampRequest();
    }
    else {
      sendHeadlampRequest();
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
 
}
function CreateSpeedChart(speed){
  let test = document.querySelector('.charts');
  test.innerHTML = '';

var data = [
  { id: 5, percentage: speed*10, title: 'speed' },
]

const creatSvg = (percentage, title, svgColor) => {

  let svg = `
     <svg viewBox="0 0 100 50">

       <foreignObject y=40% class='foreign'> 
      
           <div class="containerCharts">
             <p class="gpu_name">${speed}<font style="font-size:5px;"> km/h</font></p>
            
           </div>
       </foreignObject>
     <g
        fill-opacity="0"
        stroke-width="10"
      >
       <path
        class="unfilled"
        d="M5 50a45 45 0 1 1 90 0"
      />
    
       <path
        class="progress"
        d="M5 50a45 45 0 1 1 90 0"
        stroke-dasharray="142"
        stroke-dashoffset="${percentage}"
        stroke="${svgColor}"
      >  
      
</path>
     </g>
     <linearGradient id="good">
     <stop offset="0%" stop-color="#00CA9D" />
     <stop offset="100%" stop-color="#00FF00" />
   </linearGradient>
   <linearGradient id="average">
     <stop offset="0%" stop-color="#00CA9D" />
     <stop offset="50%" stop-color="#FFFF00" />
     <stop offset="100%" stop-color="#FFA500" />
   </linearGradient>
   <linearGradient id="danger">
     <stop offset="0%" stop-color="#00CA9D" />
     <stop offset="50%" stop-color="#FFA500" />
     <stop offset="100%" stop-color="#FF0000" />
   </linearGradient>
</svg>
`;

  // setPercentage(svg, percentage);
  test.insertAdjacentHTML('beforeend', svg);
}

data.map(element => {

  let { percentage, title } = element;

  if (percentage > 100) {
    percentage = 100;
  } else if (percentage < 0) {
    percentage = 0;
  }

  let elementPercent = 142 - (percentage * 142 / 100);
  let svgColor;

  if (percentage < 50) {
    svgColor = 'url(#good)';
  } else if (percentage >= 50 && percentage <= 69) {
    svgColor = 'url(#average)';
  } else if (percentage >= 70) {
    svgColor = 'url(#danger)';
  }

  creatSvg(elementPercent, title, svgColor);
})


}



//--------------------------------------------------------mid charts
function CreateCharts(){
  var chargeValue ;
  var speedValue;
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/robot/chargeValue');
  request.send();
  request.onload = function() {
    if (request.status === 200) {
      var chartValue = request.responseText;
     
        var parsedData = JSON.parse(chartValue);   
        chargeValue=parsedData.charge;
        speedValue=Math.abs(parsedData.speed)
      

      console.log(parsedData)

       CreateSpeedChart(speedValue);

      var circle = document.querySelector('.outer-circle');
      var chartContainer = document.querySelector('.overview-charts');
      chartContainer.innerHTML = '';
    
      let percentage = 50;
      let circleLength = 439.1124572753906;
      let elemPercentage = circleLength - (percentage * circleLength / 100);
      
      var data = [
        { id: 1, percentage:chargeValue , title: 'Battery' },
        { id: 2, percentage: 70, title: 'Tempature' },
      
      ]
      var svg = "";
      const creatSvg2 = (elementPercentage, title, percentageText, svgColor) => {
      
        if (title === "Battery") {
          svg = `
        <div class="overview-charts-container">
            <svg height="190" width="50">
                 <g>
                     <circle class="circle-inner"cx="80" cy="80" r="65"/>
                     <text fill="white" x="85" y="85" font-size="30" dominant-baseline="middle" text-anchor="middle">${percentageText} %</text>
                 </g>
                 <circle stroke-dasharray="439.1124572753906"
                         stroke-dashoffset="${elementPercentage}"
                         stroke="${svgColor}"
                         cx="20" cy="80" r="70"
                         stroke-width="4"
                         fill="transparent"
                         stroke-linecap="round"
                         class="circle-outer"
                         transform="rotate(-90 ) translate(-100 0)" />
                 <text class="circle-text"
                       fill="white" 
                       x="79" y="165" 
                       dominant-baseline="middle" 
                       text-anchor="middle" 
                       font-weight="bold">${title}</text>
              </svg>
        </div>
      `;
        }
        else {
          svg = `
        <div class="overview-charts-container">
            <svg height="190" width="50">
                 <g>
                     <circle class="circle-inner"cx="80" cy="80" r="65"/>
                     <text fill="white" x="85" y="85" font-size="30" dominant-baseline="middle" text-anchor="middle">${percentageText} °C</text>
                 </g>
                 <circle stroke-dasharray="439.1124572753906"
                         stroke-dashoffset="${elementPercentage}"
                         stroke="${svgColor}"
                         cx="20" cy="80" r="70"
                         stroke-width="4"
                         fill="transparent"
                         stroke-linecap="round"
                         class="circle-outer"
                         transform="rotate(-90 ) translate(-100 0)" />
                 <text class="circle-text"
                       fill="white" 
                       x="79" y="165" 
                       dominant-baseline="middle" 
                       text-anchor="middle" 
                       font-weight="bold">${title}</text>
              </svg>
        </div>
      `;
        }
      
      
        chartContainer.insertAdjacentHTML('beforeend', svg);
      }
      
      //Yüzdeye göre renk değişimi
      data.map(element => {
        let { percentage, title } = element;
      
      
        let elemPercentage = circleLength - (percentage * circleLength / 100);
        let svgColor;
      
        if (title === "Tempature") {
          if (percentage < 50) {
            svgColor = '#49D490';
          } else if (percentage >= 50 && percentage <= 60) {
            svgColor = '#EFB93F';
          } else if (percentage >= 61 && percentage <= 75) {
            svgColor = '#F26739';
          } else if (percentage >= 76) {
            svgColor = '#FA0900';
          }
      
        }
        else {
          if (percentage < 20) {
            svgColor = '#FA0900';
          } else if (percentage >= 20 && percentage <= 30) {
            svgColor = '#F26739';
          } else if (percentage >= 30 && percentage <= 75) {
            svgColor = '#49D490';
          } else if (percentage >= 76) {
            svgColor = '#76FA41';
          }
        }
      
        creatSvg2(elemPercentage, title, percentage, svgColor);
      })
      
      
       
    } else {
      console.error('İstek sırasında bir hata oluştu. Durum kodu:', request.status);
    }
  };
  




 
}
setInterval(CreateCharts,100);


