// Score Variables
let playerScore = 0;
let computerScore = 0;

// Competition's random Results
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
}

// Update Score
function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Event Listeners for Player's Choice
document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
document.getElementById("scissor").addEventListener("click", () => handleChoice("scissor"));

// Player's Choice -> Computer's Choice
function handleChoice(playerChoice) {
    const computer = getComputerChoice();
    let outcome = "";

    if (playerChoice === computer) {
        outcome = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissor" && computer === "paper")
    ) {
        playerScore++;
        outcome = `You win! ${capitalize(playerChoice)} beats ${computer}.`;
    } else {
        computerScore++;
        outcome = `You lose! ${capitalize(computer)} beats ${playerChoice}.`;
    }

    document.getElementById("outcome").textContent = outcome;
    updateScore();

    // Check Win condition
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
        outcome += `\n${winner}`;
        disableButtons();
    }

    document.getElementById("outcome").textContent = outcome;
}
 // Capitalize the first letter Rock, Paper, Scissors
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// End Game Button Disabling
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

// Reset Game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById("outcome").textContent = "Game reset. Choose One.";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}

document.getElementById("reset").addEventListener("click", resetGame);