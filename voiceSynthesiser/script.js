const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector("[name='text']").value;
function populateVoices(){
  voices = this.getVoices();
  const voiceOptions = voices.filter(voice => voice.lang.includes('en')).map(voice=>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
  voicesDropdown.innerHTML = voiceOptions;
}
function changeVoice(){
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}
function toggle(startOver = true){
  speechSynthesis.cancel();
  if(startOver){
      speechSynthesis.speak(msg);
  }
}
function changeOptions(){
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}
voicesDropdown.addEventListener('change', changeVoice);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
options.forEach(option=> option.addEventListener('change', changeOptions));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', ()=>toggle(false))
