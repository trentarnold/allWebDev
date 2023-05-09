let notesArray=[];
const note = document.querySelector('.noteInput');
note.focus();
const submitButton= document.querySelector('.submitButton');
submitButton.addEventListener('click', (event)=>{
let  newNote= note.value.trim();
  if(newNote !== ''){
    notesArray.push(newNote);
    const table=document.querySelector('.table');
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let cell1= row.insertCell(0);
    let cell2= row.insertCell(1);
    var currentNote = notesArray[notesArray.length-1];
  currentNote= currentNote.length < 30 ? currentNote : currentNote.substring(0,30) +
   '...' + "<button class='buttonEnlarge'>Full Post</button>";

    if(rowCount%2===0){
      cell1.innerHTML=`<span class='newSpan' id='${notesArray[notesArray.length-1]}'>${currentNote}</span>`

    }else{
      table.rows[rowCount-1].cells[1].innerHTML=`<span class='newSpan' id='${notesArray[notesArray.length-1]}'>${currentNote}</span>`

    }
    note.value='';
    note.focus();
    function buttonAlert(){
      if(currentNote.length>30){
        let enlarge = document.querySelectorAll('.buttonEnlarge');
        enlarge.forEach((button) =>{
          button.onclick=function(){
            alert(this.parentElement.id)
            buttonAlert();
          }
        });


      }
    }
    buttonAlert();

  }else{
    alert('Must enter note!');
  }


});
