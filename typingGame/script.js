const API_SOURCE = "http://api.quotable.io/random";
const quoteText = document.querySelector('.quotes');
const userInput = document.querySelector('.user-input');
const timerElement = document.querySelector('.timer');
document.addEventListener('input', ()=>{
    const arrayQuote = document.querySelectorAll('span');
    const userTypedCharacters = userInput.value.split('');
    let correct = true;
    arrayQuote.forEach((character, index) =>{
        const userCharacter = userTypedCharacters[index];
        if(index > userTypedCharacters.length -1){
            correct = false;
            return
        } 
        if(character.innerText === userCharacter){
            character.classList.add('correct');
            character.classList.remove('incorrect');
        }else {
            character.classList.remove('correct');
            character.classList.add('incorrect');
            correct = false;
        }
    });

    if(correct){
        getNextquote()
    }
});

function getRandomQuote(){
    return fetch(API_SOURCE)
            .then(response => response.json())
            .then(data => data.content)
}
async function getNextquote(){
    const nextQuote = await getRandomQuote();
    quoteText.innerText ="";
    nextQuote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteText.appendChild(characterSpan);
    })
    userInput.value='';
    startTimer();
}
let startTime;
function startTimer(){
    startTime = new Date;
    setInterval(()=>{
        timerElement.innerText = timePassed();
    }, 1000)
}
function timePassed(){
    const newTime = new Date();
    return Math.floor((newTime - startTime) /1000)
}
getNextquote();
function palindrom(str){
    let stringArray = str.split(' ');
    stringArray.forEach((string, index) =>{
        let captitol = string.charAt(0).toUpperCase();
        let lastLetters = string.slice(1)
        console.log(captitol + lastLetters)
    })
    console.log(stringArray)
}
console.log(palindrom('i wanst'));