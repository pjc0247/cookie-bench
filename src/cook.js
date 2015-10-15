var getTicks = function(){
	var d = new Date();
    return d.getTime();
}

var startTicks = getTicks();
var startClicks = Game.cookieClicks;

var looper = setInterval(function(){ 
	Game.ClickCookie();	
	
	var elapsed = getTicks() - startTicks;
	if( elapsed >= 5000){

		clearInterval(looper);

		var total = Game.cookieClicks - startClicks;
		var cps = total / (elapsed / 1000);

		alert(
			"Your brower has reached total " + total + "clicks in " + elapsed + "millisecond. \n" +
			"CpS : " + Math.round(cps));
	}
}, 0);
