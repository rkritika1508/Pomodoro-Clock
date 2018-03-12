var minSession = 25;
var minBreak = 5;
var minSessionPlus = document.querySelector(".sessionPlus");
var minSessionMinus = document.querySelector(".sessionMinus");
var minBreakPlus = document.querySelector(".breakPlus");
var minBreakMinus = document.querySelector(".breakMinus");
var minSessionDisplay = document.querySelector(".sessionDisplay");
var minBreakDisplay = document.querySelector(".breakDisplay");
minSessionPlus.addEventListener("click",function(){
	minSession++;
	minSessionDisplay.textContent = minSession;
})
minSessionMinus.addEventListener("click", function(){
	minSession--;
	minSessionDisplay.textContent = minSession;
})
minBreakPlus.addEventListener("click", function(){
	minBreak++;
	minBreakDisplay.textContent = minBreak;
})
minBreakMinus.addEventListener("click", function(){
	minBreak--;
	minBreakDisplay.textContent = minBreak;
})