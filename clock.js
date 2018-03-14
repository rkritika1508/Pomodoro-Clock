var minSession = 25;
var minBreak = 5;
var minSessionPlus = document.querySelector(".sessionPlus");
var minSessionMinus = document.querySelector(".sessionMinus");
var minBreakPlus = document.querySelector(".breakPlus");
var minBreakMinus = document.querySelector(".breakMinus");
var minSessionDisplay = document.querySelector(".sessionDisplay");
var minBreakDisplay = document.querySelector(".breakDisplay");
var stopBtn = document.querySelector("#stop");
var startBtn = document.querySelector("#start");
var resetBtn = document.querySelector("#reset");
var timer = document.getElementById("timeDisplay");
function minSesDisplay(){
	minSessionDisplay.textContent = minSession;
}
function minBrDisplay(){
	minBreakDisplay.textContent = minBreak;
}

minSessionPlus.addEventListener("click",function(){
	minSession++;
	minSesDisplay();
	timer.textContent = minSession + ":00"
})
minSessionMinus.addEventListener("click", function(){
	minSession--;
	minSesDisplay();
	timer.textContent = minSession + ":00"
})
minBreakPlus.addEventListener("click", function(){
	minBreak++;	
	minBrDisplay();
	timer.textContent = minSession + ":00"
})
minBreakMinus.addEventListener("click", function(){
	minBreak--;
	minBrDisplay();
	timer.textContent = minSession + ":00"
})

resetBtn.addEventListener("click", function(){
	stopTimer();
	minSession=25;
	minBreak = 5;
	minSesDisplay();
	minBrDisplay();
	timer.textContent = minSession + ":00";
})
timer.textContent = minSession + ":" + "00";
var t;
function startTimer(){
	var presentTime = timer.textContent;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
 	var s = checkSecond((timeArray[1] - 1));
	if(s==59){m=m-1}
  	if(m<0){alert('timer completed')}
	timer.textContent = m + ":" + s;
	t = setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
function stopTimer() {
    clearTimeout(t);
}
startBtn.addEventListener("click", function(){
	startTimer();
})
stopBtn.addEventListener("click", function(){
	stopTimer();
})