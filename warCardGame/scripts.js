import Deck from "/deck.js";

const firstDeckElement =document.querySelector('.first-deck-card-played');
const secondDeckElement = document.querySelector('.second-deck-card-played');
const flipButton = document.querySelector('.flip-cards');
const winDisplay = document.querySelector('.win-display');
const winDisplayText = document.querySelector('.win-display > h1');
const restartButton = document.querySelector('.restart-button');
const firstPlayerText = document.querySelector('.first-player-text');
const secondPlayerText = document.querySelector('.second-player-text');
const roundWinner = document.querySelector('.round-winner');

let deck = new Deck();
let firstDeck = deck.cards.slice(0, 26);
let secondDeck = deck.cards.slice(26, 52);
let firstPlayerDiscard = [];
let secondPlayerDiscard=[];
let inCaseOfMultipleDraws = [];
let inTimeout = false;

function startGame(){
     deck = new Deck();
     firstDeck = deck.cards.slice(0, 26);
     secondDeck = deck.cards.slice(26, 52);
     firstPlayerDiscard = [];
     secondPlayerDiscard=[];
     inCaseOfMultipleDraws = [];
    firstDeck.forEach(card =>{
        translateValue(card);
    })
    secondDeck.forEach(card =>{
        translateValue(card);
    });
  winDisplay.classList.remove('show');
    clearDisplay();
    roundWinner.innerText='';
    setDeckTotal(firstDeck, secondDeck);
}
startGame();

function setDeckTotal(firstDeck, secondDeck){
    firstPlayerText.innerText = `First Player : ${firstDeck.length + firstPlayerDiscard.length}`;
    secondPlayerText.innerText = `Second Player: ${secondDeck.length + secondPlayerDiscard.length}`;
}

function translateValue(firstCard){
    switch (firstCard.value) {
        case "J":
            firstCard.trueValue = "11";
            break;
        case "Q":
            firstCard.trueValue = "12";
            break;
        case "K":
            firstCard.trueValue = "13";
            break;
        case "A":
            firstCard.trueValue = "14";
            break;
    
        default:
            firstCard.trueValue = firstCard.value;
            break;
    }
}
function draw(firstPlayerCard = firstDeck[firstDeck.length - 1], secondPlayerCard= secondDeck[secondDeck.length-1]){
    if(firstDeck.length < 5 ){
       firstDeck =  checkShuffle(firstDeck, firstPlayerDiscard);
    }
    if(secondDeck.length < 5){
       secondDeck = checkShuffle(secondDeck, secondPlayerDiscard);
    }
    if(firstDeck.length.length + firstPlayerDiscard.length < 5) {
        winDisplay.classList.add('show');
        winDisplayText.innerText = `Second Player Wins`;
    }
    if(secondDeck.length + secondPlayerDiscard.length < 5){
        winDisplay.classList.add('show');
        winDisplayText.innerText = `First Player Wins`;
    }
    const nextThreeCardsFirstDeck = firstDeck.splice(firstDeck.length - 4, 3);
    const nextThreeCardsSecondDeck = secondDeck.splice(secondDeck.length - 4, 3);
    const totalCards = nextThreeCardsFirstDeck.concat(nextThreeCardsSecondDeck);
    const tieBreakerFirstDeck = firstDeck.splice(firstDeck.length - 2, 1)[0];
    const tieBreakerSecondDeck = secondDeck.splice(secondDeck.length - 2, 1)[0];
    inCaseOfMultipleDraws = [...inCaseOfMultipleDraws, ...totalCards, tieBreakerFirstDeck,
        tieBreakerSecondDeck, firstPlayerCard, secondPlayerCard];
        roundWinner.innerText = `Tie! ${inCaseOfMultipleDraws.length} cards up for grabs!`
        inTimeout = true;
        setTimeout(()=>{
            clearDisplay();
            const winner  = parseInt(tieBreakerFirstDeck.trueValue) > parseInt(tieBreakerSecondDeck.trueValue) ? `Player one wins ${inCaseOfMultipleDraws.length} cards!`
            :`Player two wins ${inCaseOfMultipleDraws.length} cards!`
            roundWinner.innerText = `${winner}`;
            firstDeckElement.appendChild(tieBreakerFirstDeck.getHTML());
            secondDeckElement.appendChild(tieBreakerSecondDeck.getHTML());
            if(tieBreakerFirstDeck.trueValue === tieBreakerSecondDeck.trueValue){
                console.log('double draw');
                firstDeck.pop();
                secondDeck.pop();
                draw();
            }
            if(parseInt(tieBreakerFirstDeck.trueValue) > parseInt(tieBreakerSecondDeck.trueValue)){
                firstPlayerDiscard = [...inCaseOfMultipleDraws, ...firstPlayerDiscard];
                inCaseOfMultipleDraws = [];
                firstDeck.pop();
                secondDeck.pop();
            }
            if(parseInt(tieBreakerFirstDeck.trueValue) < parseInt(tieBreakerSecondDeck.trueValue)){
                secondPlayerDiscard = [...secondPlayerDiscard, ...inCaseOfMultipleDraws];
                inCaseOfMultipleDraws = [];
                console.log(secondPlayerDiscard);
                    firstDeck.pop();
                    secondDeck.pop();
            }

            setDeckTotal(firstDeck, secondDeck);
            inTimeout = false;
        }, 1500)
    
}

function checkRoundWin(firstPlayerCard, secondPlayerCard){
    if(firstPlayerCard.trueValue === secondPlayerCard.trueValue){
        draw();
        return;
    }
    const winner = parseInt(firstPlayerCard.trueValue) > parseInt(secondPlayerCard.trueValue) ? "First Player Wins Round" : "Second Player Wins Round";

    if(parseInt(firstPlayerCard.trueValue) > parseInt(secondPlayerCard.trueValue)){
        firstPlayerDiscard.push(firstPlayerCard);
        firstPlayerDiscard.push(secondPlayerCard);
    }else {
        secondPlayerDiscard.push(firstPlayerCard);
        secondPlayerDiscard.push(secondPlayerCard);
    }
    firstDeck.pop();
    secondDeck.pop();
    roundWinner.innerText = `${winner}`

} 

function checkShuffle(deck, discard){
        deck = [...discard, ...deck];
        discard.length = 0;
        shuffle(deck);
        return deck;
}

function shuffle(deck) {
    for(let i =0; i < deck.length - 1; i++){
        let currentCard = deck[i];
        let randomIndex = Math.floor(Math.random() * deck.length);
        let nextCard = deck[randomIndex];
        deck[i] = nextCard;
        deck[randomIndex] = currentCard;
    }
}

function gameWin(){
    if(firstDeck.length === 0 && firstPlayerDiscard.length === 0){
        winDisplay.classList.add('show');
        winDisplayText.innerText = `Second Player Wins`;
    }
    if(secondDeck.length === 0 && secondPlayerDiscard.length === 0){
        winDisplay.classList.add('show');
        winDisplayText.innerText = `First Player Wins`;
    }

}
function clearDisplay(){
    firstDeckElement.innerHTML = "";
    secondDeckElement.innerHTML = '';
}

function handleEvent() {
    if(inTimeout) return
    clearDisplay()
    if(firstDeck.length === 0){
        firstDeck = checkShuffle(firstDeck, firstPlayerDiscard);
    }
    if(secondDeck.length === 0){
        secondDeck = checkShuffle(secondDeck, secondPlayerDiscard);
    }
    const firstCardFirstPlayer = firstDeck[firstDeck.length - 1];
    const firstCardSecondPlayer = secondDeck[secondDeck.length - 1];
    firstDeckElement.appendChild(firstDeck[firstDeck.length - 1].getHTML());
    secondDeckElement.appendChild(secondDeck[secondDeck.length - 1].getHTML())
    checkRoundWin(firstCardFirstPlayer, firstCardSecondPlayer);
    setDeckTotal(firstDeck, secondDeck);
    gameWin()
    
}
flipButton.addEventListener('click', handleEvent)
restartButton.addEventListener('click', startGame)



