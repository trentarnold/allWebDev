
let lastInputDirectionPlayerOne = {x:0, y:0};
let inputDirectionPlayerOne = {x:0, y:0};
let lastInputDirectionPlayerTwo = {x:0, y:0};
let inputDirectionPlayerTwo = {x:0, y:0};
let playerOneReady =false;
let playerTwoReady = false;
const startMessage = document.querySelector('.start-message');
export let bothReady = playerOneReady && playerTwoReady;
window.addEventListener('keydown', e=>{
    switch (e.key.toLowerCase()) {
        case 'arrowup':
            if(lastInputDirectionPlayerOne.y !=0) break;
            inputDirectionPlayerOne = {x:0, y:-1}
            playerOneReady = true;
            break;
        case 'arrowdown':
            if(lastInputDirectionPlayerOne.y !=0) break;
            inputDirectionPlayerOne = {x:0, y:1}
            playerOneReady = true;
            break;
        case 'arrowright':
            if(lastInputDirectionPlayerOne.x !=0) break;
            inputDirectionPlayerOne = {x:1, y:0}
            playerOneReady = true;
            break;
        case 'arrowleft':
            if(lastInputDirectionPlayerOne.x !=0) break;
            inputDirectionPlayerOne = {x:-1, y:0}
            playerOneReady = true;
        break;
        case "w":
            if(lastInputDirectionPlayerTwo.y !=0) break;
            inputDirectionPlayerTwo = {x:0, y:-1}
            playerTwoReady = true;
            break;
        case "a":
            if(lastInputDirectionPlayerTwo.x !=0) break;
            inputDirectionPlayerTwo = {x:-1, y:0}
            playerTwoReady = true;
            break;
        case "s":
            if(lastInputDirectionPlayerTwo.y !=0) break;
            inputDirectionPlayerTwo = {x:0, y:1}
            playerTwoReady = true;
            break;
        case "d":
            if(lastInputDirectionPlayerTwo.x !=0) break;
            inputDirectionPlayerTwo = {x:1, y:0}
            playerTwoReady = true;
            break;
                            
    
        default:
            break;
    }
    bothReady = playerOneReady && playerTwoReady;
    if(bothReady){
        startMessage.innerText = 'Press any button to begin'
    }
})
export function getInputDirectionPlayerOne(){
    lastInputDirectionPlayerOne = inputDirectionPlayerOne
    return inputDirectionPlayerOne;
}
export function getInputDirectionPlayerTwo(){
    lastInputDirectionPlayerTwo = inputDirectionPlayerTwo
    return inputDirectionPlayerTwo;
}
export function restartGame(){
    playerOneReady = false;
    playerTwoReady = false;
    bothReady = false;
    lastInputDirectionPlayerOne = {x:0, y:0};
    inputDirectionPlayerOne = {x:0, y:0};
    lastInputDirectionPlayerTwo = {x:0, y:0};
    inputDirectionPlayerTwo = {x:0, y:0};
}