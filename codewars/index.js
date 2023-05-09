// function MinWindowSubstring(strArr) { 
//   let leftInput = strArr[0];
//   let rightInput = strArr[1];
//  const kValues = rightInput.split('').reduce((obj, letter)=>{
//     if(!obj[letter]){
//       obj[letter] = 0
//     }
//     obj[letter]++
//     return obj
//   }, {})
//   const totalNumberOfLetters = ()=>{
//     let total =0;
//     for(let key in kValues){
//       total+= kValues[key]
//     }
//     return total
//   }
//   const numberOfUniqueLetters = ()=>{
//     let total = 0;
//     for(let key in kValues){
//       total++
//     }
//     return total
//   }
//   const occurences =[];
//   // let start = 0;
//    let end =leftInput.length -1;
//   // let count =0;
//   // let middleStart = totalNumberOfLetters();
//   function getWindows(start =0, middleStart = totalNumberOfLetters() ){
//     if(end - start === totalNumberOfLetters() -1){
//       return
//     }
//     const passedUniqueOccureceTest = getUniqueOccurences(start, middleStart);
//     let reverse = false
//     console.log(passedUniqueOccureceTest);
//     if(passedUniqueOccureceTest){
//       console.log('both')
//       if(middleStart === end){
//         start++
//         getWindows(start, middleStart);
//       }else {
//          start++
//          middleStart++
//          getWindows(start, middleStart);
        
//       }
//       return
//     }
//    else if(!passedUniqueOccureceTest && middleStart ===end){
//      console.log(`${middleStart} middle ${start} start`);
//       start++
//       console.log(`${middleStart} middle ${start} start`);
//       getWindows(start, middleStart);
//       return 
//     }
//    else if(!passedUniqueOccureceTest){
//       console.log('middle')
//       middleStart++
//       getWindows(start, middleStart);
//       return
//     }
    
//     return
//   }
//  getWindows();

//   function getUniqueOccurences(start, end){
//     const currentArray = leftInput.slice(start, end);
//     let containsAllLetters = true;
//     const nValues = currentArray.split('').reduce((obj, letter) =>{
//       if(!obj[letter]){
//         obj[letter] = 0;
//       }
//       obj[letter]++
//       return obj
//     }, {})
//     for(let key in kValues){
//       if(kValues[key] > nValues[key] || nValues[key] === undefined){
//         containsAllLetters = false;
//         return containsAllLetters;
//       }
     
//     }
//     console.log(true)
//     occurences.push(currentArray);
//     return containsAllLetters
//   }


//   console.log(occurences)   
//   return strArr; 

// }
// // MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])

// for (var i = 0; i < 5; i++) {
//   ((x)=>{
//     setTimeout(()=>{
//       console.log(x)
//     }, 1000)
//   })(i);
// }
function indexChange(arr){
  let direction = arr[0] > arr[1] ? 'decreasing' : 'increasing';
  let indexChanged = -1;
if(direction === 'increasing'){
  arr.forEach((number, index) =>{
    if(number > arr[index + 1]){
      indexChanged = index;
    }
  })
}else{
  arr.forEach((number, index) => {
    if(number < arr[index + 1]){
      console.log(index)
      indexChanged = index;
    }
  })
}
console.log(indexChanged);
}
indexChange([5, 4, 3, 2, 10, 11])
switch (key) {
  case value:
    
    break;

  default:
    break;
}


   
