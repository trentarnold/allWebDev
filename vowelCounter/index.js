function countVowels(string){
let vowels= string.match(/[aeiouyAEIOUY]/gi);
return vowels === null ? 0: vowels.length
}
const inputText = document.querySelector('.inputText');
inputText.focus();
const inputButton = document.querySelector('.inputButton');
inputButton.addEventListener('click', (e)=>{
  let input=inputText.value.trim();
  if(input!== ''){
    let vowelsCount= countVowels(input);
    let li = document.createElement('li');
    let ul = document.querySelector('.unorderedList');
    li.innerHTML=`<span>${vowelsCount}</span>`
    ul.append(li);
  }else{
    alert('You must enter a value to count the vowels');
  }
  inputText.value='';
  inputText.focus();
})
