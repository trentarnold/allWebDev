import { draw as snakeDraw, update as  snakeUpdate, snakeSpeed, getHeadSnake, snakeIntersection } from "./snake.js";
import { draw as foodDraw, update as foodUpdate} from './food.js';
import { outsideGrid } from './grid.js'
const gameBoard = document.querySelector('.game-board');
let lastRenderTime=0;
let gameover = false;
function main(currentTime){
    if(gameover){
       if(confirm('You lost, press OK to restart')){
           window.location = '/'
       }
       return
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);
function update(){
    snakeUpdate();
    foodUpdate();
    checkLoss()
}
function draw(){
    gameBoard.innerHTML='';
    snakeDraw(gameBoard);
    foodDraw(gameBoard);
}
function checkLoss(){
    gameover = outsideGrid(getHeadSnake()) || snakeIntersection(); 
}