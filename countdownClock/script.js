let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('.timer__button');
function timer(seconds){
  clearInterval(countdown);
  displayTime(seconds);
  const now = Date.now();
  const then = now + seconds *1000;
  displayEndTime(then);
  countdown = setInterval(()=>{
  const secondsLeft = Math.round((then - Date.now()) / 1000);
  if(secondsLeft < 0){
    clearInterval(countdown);
    return;
  }
  displayTime(secondsLeft);
  }, 1000);
}

function displayTime(seconds){
  let timeLeft;
  let hours = Math.floor(seconds / 3600);
  timeLeft = seconds %3600;
  let minutes = Math.floor(timeLeft / 60);
  timeLeft = timeLeft % 60;
  minutes = minutes >= 10 ? minutes: '0' + minutes;
  timeLeft = timeLeft >= 10 ?  timeLeft: '0' + timeLeft;
  timeDisplay.innerHTML = `${hours > 0 ? hours  + ':' + minutes + ':' + timeLeft : minutes + ':' + timeLeft}`
}
function displayEndTime(timestamp){
  const end = new Date(timestamp);
  let hours = end.getHours();
  let minutes = end.getMinutes();
  hours = hours > 12 ? hours -12 : hours;
  hours = hours >=10 ? hours : '0' + hours;
  minutes = minutes >= 10 ? minutes: '0' + minutes;
  endTime.textContent = `${hours}:${minutes}`
}
function getTime(e){
  timer(this.dataset.time)
}

timerButtons.forEach(button => button.addEventListener('click', getTime))

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const seconds = this.boobs.value * 60;
 timer(seconds);
 this.reset();
})
