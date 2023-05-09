// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to
const enterNumber = () =>{
    return new Promise((resolve, reject) =>{
        const userNumber = Number(window.prompt(`Enter a number between 1 and 6`));
        const randomNumber = Math.floor(Math.random() * 6 +1);
        if(Number.isNaN(userNumber)){
            reject(new Error('That is not a number'))
        }
        else if(userNumber === randomNumber){
            resolve({
                points:2,
                randomNumber:randomNumber
            })
        }
        else if(userNumber === randomNumber -1 || userNumber === randomNumber +1){
            resolve({
                points:1,
                randomNumber:randomNumber
            })
        }else {
            resolve({
                points:0,
                randomNumber:randomNumber
            })
        }
    })
}
const start = () => {
    enterNumber().then(result =>{
        alert(`You got ${result.points} points the number was ${result.randomNumber}`)
    }).catch(error => alert(error))
};

start();
