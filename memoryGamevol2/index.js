let randomPlacement=[];
let selectedImages=[];
let getRandomNumber=() => Math.ceil(Math.random() * 6);
function checkIndex(number){
  let firstIndex = randomPlacement.indexOf(number);
  let lastIndex= randomPlacement.lastIndexOf(number);
  if(firstIndex===lastIndex
  ||firstIndex===-1){
       randomPlacement.push(number);
       console.log(randomPlacement)
     }
   }
function setPics(){
  do {
    var randomNumber = getRandomNumber()
    checkIndex(randomNumber)
  } while (randomPlacement.length<12);
  for(let i =1; i<=12;i++){
    let image=document.querySelector(".image" + i);
    image.src='images/turtle'+randomPlacement[i-1] + '.png';
    image.id=`${randomPlacement[i-1]}`
  }

}
setPics();

function checkMatch(){
  if(firstCard===secondCard){
    selectedImages[0].removeEventListener('click', flipPicture);
    selectedImages[1].removeEventListener('click', flipPicture);
    selectedImages=[];
    numberOfMatches++
    matches.innerHTML ='Matches: ' + numberOfMatches;
  }else{
    locked=true;
    setTimeout(function(){
      selectedImages[0].classList.remove('flip');
      selectedImages[1].classList.remove('flip');
      firstCard='';
      secondCard='';
      selectedImages=[];
      locked=false;
    }, 1000);
  }
}
function checkWin(){
  if(numberOfMatches===6){
    let modal = document.querySelector('.modal');
    modal.style.display='block';
    let closeButton = document.querySelector('.closed');
    closeButton.addEventListener('click', e=> modal.style.display='none');
    let winClicks = document.querySelector('#winClicks');
    winClicks.innerHTML='You won in ' + numberOfClicks + ' clicks';
  }
}
let numberOfClicks=0;
let numberOfMatches=0;
let anyFlipped =false;
let firstCard='';
let secondCard='';
let locked=false;
let clicks= document.querySelector('#numberOfClicks');
let matches = document.querySelector('#numberOfMatches');
let pictures = document.querySelectorAll('.imageDiv');
function flipPicture(){
    numberOfClicks++
  clicks.innerHTML='Times Clicked: '+ numberOfClicks;


  if(locked){
    return
  }
  if(selectedImages[0]===this){
    return
  }
  if(!anyFlipped){
    selectedImages.push(this);
    this.classList.add('flip');
    firstCard=this.children[0].id;
    anyFlipped=true;

  }else{
  selectedImages.push(this);
  this.classList.add('flip');
  secondCard=this.children[0].id
  anyFlipped=false;
  checkMatch();
  }
  checkWin();
}
pictures.forEach(picture=>picture.addEventListener('click', flipPicture))

function restartGame(){
  pictures.forEach((item) => {
    item.classList.remove('flip');
  });
   randomPlacement=[];
   selectedImages=[];
   numberOfClicks=0;
   numberOfMatches=0;
   anyFlipped =false;
   firstCard='';
   secondCard='';
   locked=false;
  setPics();
  clicks.innerHTML='Times Clicked: 0';
  matches.innerHTML='Matches: 0'
  pictures.forEach(picture=>picture.addEventListener('click', flipPicture))
  console.log('hello');
  let modal = document.querySelector('.modal');
  modal.style.display='none';

}
