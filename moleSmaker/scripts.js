const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;
let lastSelected;
let gameOver = false;
function randomTime(min, max){
  return Math.random() * (max - min) + min
}
function randomHole(holes){
  const index = Math.floor(Math.random()*holes.length);
  const hole = holes[index];
  if(hole === lastSelected){
    return randomHole(holes)
  }

   lastSelected=hole;
   return hole
}

function popUp(){
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(()=>{
    hole.classList.remove('up');
    if(!gameOver) popUp();
  }, time)
}

function startGame(){
  gameOver = false;
  scoreBoard.textContent = 0;
  popUp();
  setTimeout(()=> {
    gameOver = true;
  }, 10000);
}
function bonk(e){
  if(!e.isTrusted) return
  this.classList.remove('up');
  score++;
  scoreBoard.textContent = score;
}
moles.forEach(mole=> mole.addEventListener('click', bonk))
