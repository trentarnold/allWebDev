let playButton = document.querySelector('.toggle');
let video = document.querySelector('.player__video');
let playPanel = document.querySelector('.player');
let progressFilled = document.querySelector('.progress__filled');
let progress = document.querySelector('.progress');
let playBackRate = document.querySelector('input[name="playbackRate"]');
let volumeSlider = document.querySelector('input[name="volume"]');
let tenSeconds = document.querySelector('button[data-skip="-10"]');
let twentyFiveSeconds = document.querySelector('button[data-skip="25"]');
let fullscreen = document.querySelector('.fullscreen');
let pauesed = true;

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

function playVideo(e){
  if(pauesed){
      video.play();
      pauesed=false;
  }

  else{
    video.pause();
    pauesed = true;
  }
}

function controlVolume(e){
  video.volume = this.value;
}

function controlPlayBack(e){
  video.playbackRate = this.value;
}

function skip(e){
 video.currentTime+= parseInt(this.dataset.skip);
 console.log(typeof parseInt(this.dataset.skip))
}
function videoProgressChange(e){
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
function videoProgress(){
  let currentPercentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis=`${currentPercentage}` + '%';
}
function makeFullScreen(e){
  video.requestFullscreen();
}
tenSeconds.addEventListener('click', skip);
twentyFiveSeconds.addEventListener('click', skip);
playBackRate.addEventListener('change', controlPlayBack);
volumeSlider.addEventListener('change', controlVolume);
playButton.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
let mouseDown = false;
video.addEventListener('timeupdate', videoProgress);
progress.addEventListener('click', videoProgressChange);
progress.addEventListener('mousedown', ()=> mouseDown=true);
progress.addEventListener('mouseup', ()=> mouseDown=false);
progress.addEventListener('mousemove', (e)=>mouseDown && videoProgressChange(e));
fullscreen.addEventListener('click', makeFullScreen)
let test = [];
let secretCode = 'boobs';
window.addEventListener('keyup', testCode)
function testCode(e){
  test.push(e.key);
  test.splice(-secretCode.length - 1, test.length - secretCode.length);
  if(test.join('')===secretCode){
    document.documentElement.innerHTML = 'BOOBS'
  }
}
