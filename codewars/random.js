// const button = document.querySelector('#buttons');
// const ul = document.querySelector('#ul');
// const li2 = document.querySelectorAll('#li');
// const inputArray = [];
// const input = document.querySelector('#input');
// button.addEventListener('click', function(e){
//   var newItem = input.value.trim();
//   if (newItem){
//     inputArray.push(input.value)
//     for(let i = 0, n; n = inputArray[i]; i++){
//         var li = document.createElement('li');
//         li.innerText = n;
//
//     }
//     ul.appendChild(li);
//   }
//
//         input.value = '';
//         input.focus();
//   console.log(inputArray)
// });
let randomImgArray =[];
let pickedImg=[];
function pushFunction(image, num){
  let list={
    image:image,
    num:num
  }
  randomImgArray.push(list)
}
let getRandomNumber=() => Math.ceil(Math.random() * 3)
function checkIndex(number){
  let firstIndex = randomImgArray.map(e=>e.image).indexOf("images/turtle" + number +".jpg");
  let lastIndex= randomImgArray.map(e=>e.image).lastIndexOf("images/turtle" + number +".jpg");
  if(firstIndex===lastIndex
  ||firstIndex===-1){
       pushFunction("images/turtle" + number +".jpg", number)
     }
   }
function setPics(){
  do {
    var randomNumber = getRandomNumber()
    checkIndex(randomNumber)
  } while (randomImgArray.length<=5);

}
setPics()
let counter = 0;
const imageDiv = document.querySelector('.images');
  imageDiv.addEventListener('click', e=>{
    if(e.target.id==='1'){
      e.target.src='images/turtle1.jpg'
      pickedImg.push({image:e.target.src, num:parseInt(e.target.id)})
      if(parseInt(e.target.id) === pickedImg[pickedImg.length-2].num){
        pickedImg=[];
      }else{
        setTimeout(function(){
            let lastPictureID=document.getElementById(pickedImg[pickedImg.length-2].num);
            e.target.src=`images/start.jpg`
            lastPictureID.src=`images/start.jpg`
            pickedImg =[];
        },1000);

      }
    }else if(e.target.id==='2'){
      e.target.src='images/turtle2.jpg'
      pickedImg.push({image:e.target.src, num:parseInt(e.target.id)})
      if(parseInt(e.target.id) === pickedImg[pickedImg.length-2].num){
        pickedImg=[];
      }else{
        setTimeout(function(){
            let lastPictureID=document.getElementById(pickedImg[pickedImg.length-2].num);
            e.target.src=`images/start.jpg`
            lastPictureID.src=`images/start.jpg`
            pickedImg =[];
        },1000);

      }
    }else if(e.target.id==='3'){
      e.target.src='images/turtle3.jpg'
      pickedImg.push({image:e.target.src, num:parseInt(e.target.id)})
      if(parseInt(e.target.id) === pickedImg[pickedImg.length-2].num){
        pickedImg=[];
      }else{
        setTimeout(function(){
            let lastPictureID=document.getElementById(pickedImg[pickedImg.length-2].num);
            e.target.src=`images/start.jpg`
            lastPictureID.src=`images/start.jpg`
            pickedImg =[];
        },1000);

      }
    }else{
      if(pickedImg.length % 2===0){
      e.target.src=`${randomImgArray[counter].image}`;
      e.target.id =`${randomImgArray[counter].num}`;
      pickedImg.push(randomImgArray[counter]);
      counter++
    }else{
      e.target.src=`${randomImgArray[counter].image}`
      e.target.id=`${randomImgArray[counter].num}`;
      pickedImg.push(randomImgArray[counter]);
      counter++
      if(parseInt(e.target.id) === pickedImg[pickedImg.length-2].num){
        pickedImg=[];
      }else{
        setTimeout(function(){
            let lastPictureID=document.getElementById(pickedImg[pickedImg.length-2].num);
            e.target.src=`images/start.jpg`
            lastPictureID.src=`images/start.jpg`
            pickedImg =[];
        },1000);

      }
    }
    }

    function checkID(currentID){

    }
  console.log(pickedImg)
  });
  console.log(randomImgArray)
  et checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked;
  checkbox.forEach(check => check.addEventListener('click', handleEvent))
  function handleEvent(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
    checkbox.forEach(check=>{
      console.log(check);
      if(check===this || check === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        check.checked=true;
      }
    })
    }

    lastChecked=this;
  }
