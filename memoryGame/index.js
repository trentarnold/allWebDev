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
// function hasId(id, idArray){
// let check = idArray.includes(id) ? id : -1;
// check !== -1 ?
// }
function checkID(currentId, lastId){
    if(parseInt(currentId.id)===lastId){
      pickedImg=[];
    }else{
      setTimeout(function(){
          let lastPictureID=document.getElementById(pickedImg[pickedImg.length-2].num);
          currentId.src=`images/start.jpg`
          lastPictureID.src=`images/start.jpg`
          pickedImg =[];
      }, 1000);
    }
    console.log(currentId.id);
    console.log(lastId);
}
function checkLenght(array){
  return array.length%2===0 ? true:false;
}
setPics()
let counter = 0;
const imageDiv = document.querySelector('.images');
  imageDiv.addEventListener('click', e=>{
    if(e.target.id==='1'){
      e.target.src='images/turtle1.jpg'
      pickedImg.push({image:'images/turtle1.jpg', num:parseInt(e.target.id)})
      if(checkLenght(pickedImg)) checkID(e.target, pickedImg[pickedImg.length-2].num)
    }else if(e.target.id==='2'){
      e.target.src='images/turtle2.jpg'
      pickedImg.push({image:e.target.src, num:parseInt(e.target.id)})
      if(checkLenght(pickedImg)) checkID(e.target, pickedImg[pickedImg.length-2].num)
    }else if(e.target.id==='3'){
      e.target.src='images/turtle3.jpg'
      pickedImg.push({image:e.target.src, num:parseInt(e.target.id)})
      if(checkLenght(pickedImg)) checkID(e.target, pickedImg[pickedImg.length-2].num)

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
      checkID(e.target, pickedImg[pickedImg.length-2].num)
    }
    }

  console.log(checkLenght(pickedImg));
  });
