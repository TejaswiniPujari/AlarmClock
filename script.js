var sound = new Audio();
sound.src = 'song.mp3';
var timer;
 
function setAlarm(el){
	var time = document.getElementById('alarmTime').valueAsNumber;
    console.log("time"+time);
	if(isNaN(time)){
		alert("Invalid DateTime");
		return;
	}
 
	var alarm = new Date(time);
    console.log(alarm);
	var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
	var duration = alarmTime.getTime() - (new Date()).getTime();
 
	if(duration < 0){
		alert(`please check date and time . Note : Date should not be less than current date` );
		return;
	}
 
	timer = setTimeout(initAlarm, duration);
	el.innerHTML = " Cancel Alarm";
	el.setAttribute('onclick', 'cancelAlarm(this);');
	el.setAttribute('class', 'btn btn-danger');
}
 
 
function cancelAlarm(el){
	el.innerHTML = "Set Alarm";
	el.setAttribute('onclick', 'setAlarm(this);');
	el.setAttribute('class', 'btn btn-success');
	clearTimeout(timer);
}
 
function initAlarm(){
	sound.loop = true;
	sound.play();
	document.getElementById('alarmButton').style.display = 'none';
	document.getElementById('selectButton').style.display = '';
}
 
function stopAlarm(){
	sound.pause();
	sound.currentTime = 0;
	document.getElementById('selectButton').style.display = 'none';
	cancelAlarm(document.getElementById('alarmButton'));
	document.getElementById('alarmButton').style.display = '';
}
 
function snoozeAlarm(){
	stopAlarm();
	setTimeout(initAlarm, 300000);
	button.innerText = "Cancel Alarm";
	button.setAttribute('onclick', 'cancelAlarm(this);');
}