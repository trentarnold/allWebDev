import { getInputDirectionPlayerOne  } from "./inputDirections.js";
export const playersSpeed = 10;
export const player1 = [{x:26, y:15}];
export function draw(gameBoard){
    player1.forEach(segment => {
        const player1Element = document.createElement('div');
        player1Element.style.gridRowStart = segment.y;
        player1Element.style.gridColumnStart = segment.x;
        player1Element.classList.add('player-one');
        gameBoard.appendChild(player1Element);
    })

}
export function playerOneHead() {
    return player1[player1.length - 1]
}
export function update(){
    const inputDirectionPlayerOne = getInputDirectionPlayerOne();
    player1.push( {
        x: playerOneHead().x+=inputDirectionPlayerOne.x,
        y: playerOneHead().y+=inputDirectionPlayerOne.y
    });
}

export function touchingPlayerOne(position){
    return player1.some(segment =>{
        return segment.x === position.x && segment.y === position.y
    })
}
export function checkTouchingSelfPlayer1(position){
    if(player1.length <= 2) return
    const player1NoHead = [...player1]
    player1NoHead.pop();
    player1NoHead.pop();
    return player1NoHead.some(segment =>{
        return segment.x === position.x && segment.y === position.y
    })
}
export function restartGame(){
    player1.length = 0;
    player1.push({x:26, y:15});
}
