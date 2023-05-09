const layout = document.querySelector('[data-layout]');
const squares = document.querySelectorAll('[data-square]');
const winningDisplay = document.querySelector('[data-winningDisplay]');
const restartButton = document.querySelector('[data-button-restart]');
const winningText = document.querySelector('[data-winningText]');
const xWins = document.querySelector('[data-number-of-x-wins');
const circleWins = document.querySelector('[data-number-of-circle-wins');

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let circlesTurn =false;
let numberOfTurns=0;
let numberOfCircleWins = 0;
let numberOfXwins=0;
const xTeam = "x";
const circleTeam = "circle";
function startGame(){
    squares.forEach(square =>{
        square.addEventListener('click', handleEvent, { once: true })
    });
    layout.classList.remove(xTeam) || layout.classList.remove(circleTeam);
    circlesTurn ? layout.classList.add(circleTeam): layout.classList.add(xTeam);
    numberOfTurns = 0;
    winningDisplay.classList.remove('show');
    squares.forEach(square =>{
        square.classList.remove(xTeam) || square.classList.remove(circleTeam);
    })
}
startGame();

function handleEvent(e){
    let currentTeam = circlesTurn ? circleTeam : xTeam;
    placeMarker(currentTeam, e);
     if(checkWin(currentTeam)){
         winningDisplay.classList.add('show');
         winningText.innerText=`${currentTeam.toUpperCase()}'S WIN!!`;
         addTotalwins(currentTeam);
     }
    numberOfTurns++
    if(numberOfTurns>=9){
        winningDisplay.classList.add('show');
        winningText.innerText=`It is a draw :(`
    }
     changeTeam(currentTeam)
}
function placeMarker(currentTeam, e){
    e.target.classList.add(`${currentTeam}`);

}
function changeTeam(currentTeam){
    if(currentTeam === xTeam){
        layout.classList.remove(xTeam);
        layout.classList.add(circleTeam);
        circlesTurn = true;
    }else  {
        layout.classList.remove(circleTeam);
        layout.classList.add(xTeam);
        circlesTurn = false;
    }
}
function checkWin(currentClass){
    return winningCombinations.some(combination=>{
        return combination.every(index =>{
            return squares[index].classList.contains(currentClass);
        })
    })
}
function addTotalwins(currentTeam){
    if(currentTeam=== circleTeam){
        numberOfCircleWins++;
        circleWins.innerText = `Number Of Circle Wins: ${numberOfCircleWins}`;
    }else {
        numberOfXwins++;
        xWins.innerText = `Number Of X Wins: ${numberOfXwins}`;
    }

}
restartButton.addEventListener('click', startGame)