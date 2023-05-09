import { playersSpeed, draw as drawPlayerOne, update as updatePlayerOne, touchingPlayerOne, player1, restartGame as playerOneRestart } from './player1.js'
import { draw as drawPlayerTwo, update as updatePlayerTwo, touchingPlayerTwo, player2, restartGame as playerTwoRestartGmae} from  './player2.js'
import { checkTie, checkLoss, restartGame as gameEndConditionsRestarGame } from './gameEndConditions.js'; 
import { bothReady, restartGame as inputRestartGame } from './inputDirections.js'
const gameBoard = document.querySelector('.grid-container');
const startMessage = document.querySelector('.start-message');
const restart = document.querySelector('.restart');
const endGame = document.querySelector('.end-game');
let timeBetweenRenders = 0;
let pause = false;
function main(currentTime) {
    if(pause) return
    stop = window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - timeBetweenRenders) / 1000;
    if(secondsSinceLastRender < 1 / playersSpeed) return
    
    timeBetweenRenders = currentTime
    update();
    if(checkTie()){
        pause = true;
        setTimeout(()=>{
            window.cancelAnimationFrame(stop)
            pause = false
        }, 1000)
        return
    }
    if(checkLoss()){
        pause = true
        setTimeout(()=>{
            window.cancelAnimationFrame(stop)
            pause = false
        }, 1000)
    }
    draw();
    
}
function startGame(){
   window.requestAnimationFrame(main);
   startMessage.classList.add('hide')
}

document.addEventListener('keydown', () => {
    bothReady && startGame();
})

restart.addEventListener('click', restartGame)
    

function update(){
    updatePlayerOne()
    updatePlayerTwo()
}

function draw(){
    drawPlayerOne(gameBoard);
    drawPlayerTwo(gameBoard);
}
function restartGame(){
    gameBoard.innerHTML = '';
    playerOneRestart();
    playerTwoRestartGmae();
    inputRestartGame();
    gameEndConditionsRestarGame();
    startMessage.classList.remove('hide');
    startMessage.innerText = `Both Players must pick a starting direction`;
    endGame.classList.remove('show');
}

