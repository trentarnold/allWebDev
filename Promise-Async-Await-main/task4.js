// Task 4: get the neigher countries of Columbia

// function makeRequest(recieving){
//   console.log('Sending Request')
//   return new Promise((resolve, reject)=>{
//     if(recieving === 'Google'){
//       resolve('Google has been contacted')
//     }
//     else {
//       reject('We can only contact googel')
//     }
//   });
// }

// function processRequest(){
//   return new Promise((resolve) =>{
//     resolve('This is googles respose')
//   })
// }

// async function doWork(){
//   try {
//     const request = await makeRequest('Google');
//   console.log(request);
//   const response = await processRequest();
//   console.log(response)
//   }
//   catch (err){
//     console.log(err)
//   }
// }
// doWork();
function closures(outerVariable) {
    return (innerVariable)=>{
      console.log(outerVariable);
      console.log(innerVariable);
    }
}
// const apply = closures("outer");
// apply('inner');
// console.dir(apply)
closures('outer')('inner')