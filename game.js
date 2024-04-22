// JavaScript Guess the Number Game

// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Track the number of guesses the player has made
var guessCount = 0;

// This function runs every time the player makes a guess
function guessNumber() {
    // Get the player's guess from input field
    var playerGuess = document.getElementById('guessField').value;

    // Increment the guess count
    guessCount++;

    // Check if the player's guess is correct
    if(playerGuess == randomNumber) {
        alert("Congratulations! You guessed the number in " + guessCount + " tries!");
    } else if(playerGuess < randomNumber) {
        alert("Too low! Try again.");
    } else if(playerGuess > randomNumber) {
        alert("Too high! Try again.");
    }
}

// Attach the guessNumber function to the Guess button
document.getElementById('guessButton').onclick = guessNumber;
