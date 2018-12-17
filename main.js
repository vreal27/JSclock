$(document).ready(function(){
	setInterval(function(){
		var date = new Date();
		var set = document.getElementById("clockinner") 
		set.innerHTML = `${date.toLocaleTimeString()}`
	},1000)
})


