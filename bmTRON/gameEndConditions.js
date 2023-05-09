import { checkTouchingSelfPlayer1, player1, playerOneHead, touchingPlayerOne} from './player1.js'
import { player2, touchingPlayerTwo, checkTouchingSelf, playerTwoHead} from './player2.js'
import { addGameWinner } from './scoreTracker.js';
const gridsize = 42;
export let winner;
export function checkTie(){
    if ((touchingPlayerOne(playerTwoHead()) && touchingPlayerTwo(playerOneHead())) ||
    (checkGrid(playerTwoHead()) &&  checkGrid(playerOneHead()) ||
     (checkTouchingSelf(playerTwoHead()) && checkTouchingSelfPlayer1(playerOneHead())))) {
        winner = "Draw";
        addGameWinner(winner)
        return winner
     }
 
    
}
export function checkLoss(){
    if(touchingPlayerOne(playerTwoHead()) || checkGrid(playerTwoHead()) 
    || checkTouchingSelf(playerTwoHead())
    ){
            winner = "Player One"
            addGameWinner(winner)
            return winner
        }
    if(touchingPlayerTwo(playerOneHead()) || checkGrid(playerOneHead()) || checkTouchingSelfPlayer1(playerOneHead())){
             winner = "Player Two"
             addGameWinner(winner)
             return winner
        }

}

function checkGrid(position){
    return position.x > gridsize || position.x < 1 ||
            position.y > gridsize || position.y < 1
}
export function restartGame(){
    winner = undefined
}