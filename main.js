$(document).ready(function(){
	setInterval(function(){
		var date = new Date();
		var set = document.getElementById("clockinner") 
		set.innerHTML = `${date.toLocaleTimeString()}`
	},1000)
	
	setInterval(function(){
		var date = new Date()
		var hour = date.getHours();

			if(hour > 12){
				hour -= 12;
			}
			if (hour < 12) {
				hour = "0" + hour;
			}

			if (hour === 0) {
				hour = 12;
			} 

		var minute = date.getMinutes();

			if (minute < 10 ){
				minute = "0" + minute;
			}
		var second = date.getSeconds();

			if (second < 10){
				secound = "0" + second;
			}
		var set = document.getElementById("colorinner")
		set.innerHTML = `#${hour.toString(16)}${minute.toString(16)}${second.toString(16)}`
		
		$("#background").css('background-color',`#${hour.toString(16)}${minute.toString(16)}${second.toString(16)}`)

	}, 1000)
})

