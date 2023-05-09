import { getInputDirectionPlayerTwo } from "./inputDirections.js";

export const player2 = [{x:26, y:27}];

export function draw(gameBoard){
    player2.forEach(segment => {
        const player2Element = document.createElement('div');
        player2Element.style.gridRowStart = segment.y;
        player2Element.style.gridColumnStart = segment.x;
        player2Element.classList.add('player-two');
        gameBoard.appendChild(player2Element);
    })

}

export function update(){
    const player2InputDirection = getInputDirectionPlayerTwo();
    player2.push({
        x: playerTwoHead().x += player2InputDirection.x,
        y: playerTwoHead().y += player2InputDirection.y
    })
}
export function touchingPlayerTwo(position){
    return player2.some(segment =>{
        return segment.x === position.x && segment.y === position.y
    })
}
export function checkTouchingSelf(position){
    if(player2.length <= 2) return
    const player2NoHead = [...player2]
    player2NoHead.pop();
    player2NoHead.pop();
    return player2NoHead.some(segment =>{
        return segment.x === position.x && segment.y === position.y
    })
}
export function playerTwoHead(){
    return player2[player2.length - 1]
}
export function restartGame(){
    player2.length = 0;
    player2.push({x:26, y:27});
}