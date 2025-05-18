//psuedocode
//Hot or Cold Game 
//Intention: Computer chooses a number between 0 & 100.
//  The user inputs an initial guess and the computer acknowledges,
//  indication whether the guess is ice cold, cold, warm, hot, or boiling.
//  conditions: diff < 2 = Literally Melting
//              diff < 6 = boiling
//              diff < 11 = hot
//              diff < 31 = warm
//              diff < 51 = cold
//              diff < 100 = ice cold
// After a guess, attempt number is stored, and visible and user can guess again 
// Game ends when the user picks the number. 
// final score = no. of attempts 
// play again




function getrandomInt(){
    return Math.floor((Math.random()*100)+1);
};
let secretNumber = getrandomInt();

const inputField = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");
const noOfGuesses =document.getElementById("no-of-guesses");

const guessList = document.getElementById("guess-list");

let gameOver = false;
let attempts = 0;

inputField.addEventListener("keydown", (event) =>{
    if (event.key === "Enter"){
        submitBtn.click();
    }
}); 
submitBtn.addEventListener("click", () => {
    if (gameOver) {
        secretNumber = getrandomInt()
        attempts = 0 
        feedback.textContent = "";
        noOfGuesses.textContent = "";
        inputField.value = "";
        submitBtn.textContent = "Submit";
        guessList.textContent = "";
        gameOver = false;
        return;
    }
    const userInput = inputField.value;
    const userGuess = parseInt(userInput, 10);

    if (userInput === ""|| Number.isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        feedback.textContent = 'Please enter a valid number';
        return;
    }

    attempts++;

    if (secretNumber === userGuess){
        feedback.innerHTML = `You Got It! in ${attempts} guesses!`;
        submitBtn.innerHTML = `Play Again?`
        gameOver = true;
        return;
    }
    else if (Math.abs(secretNumber - userGuess) <= 2){
        feedback.textContent = 'Literally Melting!!!';
    }
    else if (Math.abs(secretNumber - userGuess) <= 6){
        feedback.textContent = 'boiling!!';
    }
    else if (Math.abs(secretNumber - userGuess) <= 11){
        feedback.textContent = 'Hot!';
    }
    else if (Math.abs(secretNumber - userGuess) <= 21){
        feedback.textContent = 'Warm';
    }
    else if (Math.abs(secretNumber - userGuess) <= 51){
        feedback.textContent = 'Cold';
    }
    else {
        feedback.textContent = 'Ice Cold!';
    }
    noOfGuesses.textContent = `Number of guesses made: ${attempts}`;
    const listItem = document.createElement("li");
    listItem.textContent = `Guess ${attempts}: ${userGuess}`;
    guessList.appendChild(listItem);
    inputField.value = "";
});


