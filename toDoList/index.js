const todoArray = [];
function todoAdd(text){
  todo= {
    text,
  isChecked:'false',
  id:Date.now()
}
  todoArray.push(todo)
}
const input = document.querySelector('#input');
const button = document.querySelector('#inputButton');
const itemsList = document.querySelector('.unorderedList');
button.addEventListener("click", (event)=>{
  const text = input.value.trim();
  if(text === ''){
    alert('you must add some text')
  }else{
    todoAdd(text);
    const newInput = input.value;
    if(newInput){
      var li = document.createElement('li');
      for(let i =0, n=todoArray.length; i<n;i++){
        li.innerHTML=`
        <input type='checkbox' class='${todoArray[i].isChecked} check'>
        <span>${todoArray[i].text}</span>
        <button type='button' class='removeBTN'${todoArray.id}>remove</button>
        `
        itemsList.append(li);
 }

  }

}

  input.value='';
  input.focus();
  var close = document.querySelectorAll(".removeBTN");
  close.forEach((button)=>{
    button.onclick = function() {
      var parent = this.parentElement;
      parent.style.display ="none";
    }
  })

});
const list = document.querySelectorAll('.unorderedList');
list.forEach((item) =>{
  item.addEventListener('click', (e) =>{
    if(e.target.classList.contains('false')){
      e.target.parentElement.classList.toggle('checkedCSS');
    }

  });
});
