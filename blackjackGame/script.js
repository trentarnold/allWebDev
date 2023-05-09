let flipCardButton = document.querySelector('.flip-the-card');
let card = document.querySelector('.card');
flipCardButton.addEventListener('click', ()=>{
    if(card.classList.contains('flipped')){
        card.classList.remove('flipped');
    }else {
        card.classList.add('flipped');
    }

})