const playerOneTextElement = document.querySelector('.game-text-player-one');
const playerTwoTextElement = document.querySelector('.game-text-player-two');
const playerTwoEndGameTextElement = document.querySelector('.end-game-text-player-two');
const playerOneEndGameTextElement = document.querySelector('.end-game-text-player-one');
const declareWinner = document.querySelector('.declare-winner');
const endGame = document.querySelector('.end-game');
let playerOneTotalWins = 0;
let playerTwoTotalWins = 0;
export function addGameWinner(winner){
    if(winner === "Player Two") {
        playerTwoTotalWins++
        declareWinner.style.color='cyan';
    }
    if(winner === "Player One"){
        playerOneTotalWins++
        declareWinner.style.color="hsl(271, 76%, 53%)";
    }
    playerOneTextElement.innerText = `Player One Wins: ${playerOneTotalWins}`
    playerTwoTextElement.innerText = `Player Two Wins: ${playerTwoTotalWins}`
    playerTwoEndGameTextElement.innerText =`Player Two Total Wins: ${playerTwoTotalWins}`
    playerOneEndGameTextElement.innerText =`Player one Total Wins: ${playerOneTotalWins}`
    declareWinner.innerText = `${winner} Wins!`
    endGame.classList.add('show');
    if(winner === "Draw"){
        declareWinner.innerText = `It is a ${winner}!`
        declareWinner.style.color = "white";
    }
}
export function restartGame(){

}
