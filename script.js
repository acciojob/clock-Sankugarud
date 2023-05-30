//your JS code here. If required.
let timer = document.getElementById("timer");

setInterval( () => {
	let d = new Date();
	let month = d.getMonth();
	let date = d.getDate();
	let year = d.getFullYear();
	let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
	let am_pm = "AM";

	if(hour > 12){
		hour = hour - 12;
		am_pm = "PM"
	}
	 if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

	if(hour<10){
		hour = "0" + hour;
	}
	if(min<10){
		min = "0" + min;
	}
	if(sec<10){
		sec = "0" + sec;
	}

	 let currentTime = `${day}/${month}/${year}, ${hour}:${min}:${sec} ${am_pm}`;
    timer.innerHTML = currentTime;
}, 1000)