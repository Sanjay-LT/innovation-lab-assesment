// Game variables
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Secret number (for testing):", randomNumber);

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const resultDiv = document.getElementById("result");
    const attemptsDiv = document.getElementById("attempts");
    
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDiv.textContent = `Attempts: ${attempts}`;
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDiv.textContent = "Please enter a valid number between 1-100";
        resultDiv.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        resultDiv.textContent = `Congratulations! You guessed it in ${attempts} attempts!`;
        resultDiv.style.color = "green";
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        resultDiv.textContent = "Too low! Try a higher number.";
        resultDiv.style.color = "blue";
    } else {
        resultDiv.textContent = "Too high! Try a lower number.";
        resultDiv.style.color = "blue";
    }
    
    guessInput.value = "";
    guessInput.focus();
}