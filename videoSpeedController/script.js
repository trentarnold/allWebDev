const speedBar = document.querySelector('.speed-bar');
const speed = document.querySelector('.speed');
const video = document.querySelector('.flex');



function changeSpeed(e){
  const y = e.pageY - this.offsetTop;
  const percent = y/ this.offsetHeight;
  const height = Math.round(percent * 100) + '%';
  const max = 4;
  const min = 0.4;
  const playbackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(2);
  video.playbackRate = playbackRate;
}
speed.addEventListener('mousemove', changeSpeed)
