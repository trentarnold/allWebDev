let secondHand= document.querySelector('.second-hand');
let minuteHand= document.querySelector('.min-hand');
let hourHand= document.querySelector('.hour-hand')
function newDate(){
  let now = new Date();
  let seconds= now.getSeconds();
  let minutes =now.getMinutes();
  let hours=now.getHours();
  let secondDegree=((seconds/60)*360) + 90;
  let minuteDegree=((minutes/60)*360) + 90;
  let hoursDegree=((hours/12)*360) + 90;
  secondHand.style.transform=`rotate(${secondDegree}deg)`;
  minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
  hourHand.style.transform=`rotate(${hoursDegree}deg)`;
  if(secondDegree>=440){
    secondHand.transition='none';
  }
}
setInterval(newDate, 1000);
