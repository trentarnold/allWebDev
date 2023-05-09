function itsMyBirthday(amISick) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!amISick){
                resolve(`Yay i'm not sick!`)
            } else {
                reject('oh no i am sick')
            }
        }, 1000);
       
    });
}
itsMyBirthday(true).then(result =>{
    console.log(`${result}`)
}).catch(result =>{
    console.log(`${result}`)
}).finally(()=>{
    console.log('at least its my birthday')
})
