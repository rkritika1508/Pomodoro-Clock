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
function minSesDisplay(){
	minSessionDisplay.textContent = minSession;
}
function minBrDisplay(){
	minBreakDisplay.textContent = minBreak;
}

minSessionPlus.addEventListener("click",function(){
	minSession++;
	minSesDisplay();
})
minSessionMinus.addEventListener("click", function(){
	minSession--;
	minSesDisplay();
})
minBreakPlus.addEventListener("click", function(){
	minBreak++;	
	minBrDisplay();
})
minBreakMinus.addEventListener("click", function(){
	minBreak--;
	minBrDisplay();
})

resetBtn.addEventListener("click", function(){
	minSession=25;
	minBreak = 5;
	minSesDisplay();
	minBrDisplay();
})