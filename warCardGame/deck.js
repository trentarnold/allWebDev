const suits = ["♥", "♣", "♦", "♠"];
const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export default class Deck {
    constructor(cards = newCards()){
        this.cards = cards;
        this.shuffle(cards);
    }
    shuffle(deck) {
        for(let i =0; i < deck.length - 1; i++){
            const currentCard = deck[i];
            const randomIndex = Math.floor((Math.random() * deck.length));
            const changedCard = deck[randomIndex];
            deck[randomIndex] = currentCard;
            deck[i] = changedCard;
        }
    }
    get value(){
        return this.value
    }

}

class Cards {
    constructor(suits, values){
        this.suit = suits;
        this.value = values;
    }
    get color(){
       if(this.suit === "♣" || this.suit ==="♠" ) return "black"
       else return "red"
    }
    getHTML(){
        const cardDiv = document.createElement("li");
        cardDiv.innerText = this.suit;
        cardDiv.classList.add('card', this.color);
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv;
    }
}
function newCards(){
    return suits.flatMap(suit=>{
    return values.map( value =>{
        return new Cards(suit, value)
    })
 });
}